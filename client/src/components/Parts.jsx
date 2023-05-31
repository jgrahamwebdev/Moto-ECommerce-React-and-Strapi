
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Item from "./Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state";

const Parts = () => {
    const dispatch = useDispatch();
    // represents value for the filter function
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const breakPoint = useMediaQuery("(min-width:600px)");
    console.log("items", items)
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    async function getItems() {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        { method: "GET" }
      );
      const itemsJson = await items.json();
      dispatch(setItems(itemsJson.data));
    }
  
    useEffect(() => {
      getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    const partsItems = items.filter(
        (item) => item.attributes.category === "parts"
    );

    return (
        <Box width="80%" margin="80px auto">
        <Typography variant="h3" textAlign="center">
          <b>Parts</b>
        </Typography>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {partsItems.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </Box>
      </Box>
    )
}

export default Parts
