'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        // What we are getting from the Front-End
        const { products, userName, email } = ctx.request.body;
        try {
          // Retrieve information from each cart item(s) to send to Stripe
          const lineItems = await Promise.all(
            products.map(async (product) => {
              // How we are grabbing our items
              const item = await strapi
                .service("api::item.item")
                .findOne(product.id);
    
              //Returns formatted price and item quantity data   
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.name,
                  },
                  unit_amount: item.price * 100,
                },
                quantity: product.count,
              };
            })
          );
    
          // Create a Stripe checkout session
          const session = await stripe.checkout.sessions.create({
            // Checkout form categories
            payment_method_types: ["card"],
            customer_email: email,
            mode: "payment",
            // Redirects user to Confirmation page (See route in 'App.js')
            success_url: "http://localhost:3000/checkout/success",
            cancel_url: "http://localhost:3000",
            line_items: lineItems,
          });
    
          // Creates the item(order) in our Back-End
          await strapi
            .service("api::order.order")
            .create({ data: { userName, products, stripeSessionId: session.id } });
    
          // Return the session id
          return { id: session.id };
        } catch (error) {
          // If there is an error during checkout
          ctx.response.status = 500;
          return { error: { message: "There was a problem creating the charge" } };
        }
      },
}));



