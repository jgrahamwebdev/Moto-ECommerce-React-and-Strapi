
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

function Footer() {
 
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={"white"} borderTop="3px solid #000">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
            <Box marginBottom="1rem" sx={{height: 'auto', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                <img style={{width: 'auto', height: '4rem'}} src='./images/logo.png'/>
                <img style={{height: '1rem', width: 'auto', marginLeft: '1rem'}} src='./images/logo-text.png'/>
            </Box>
          <div style={{marginTop: '2rem'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h5" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h5" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            1234 Somewhere Blvd, SomePlace, US 12345
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: onestopmotorsport@email.com
          </Typography>
          <Typography mb="30px">(555)123-4567</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
