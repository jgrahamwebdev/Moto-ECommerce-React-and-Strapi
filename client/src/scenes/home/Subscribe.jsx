
import { Box, InputBase, Divider, Typography, IconButton, Button } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import { shades } from "../../theme";

const Subscribe = () => {
    const [email, setEmail] = useState("")
    return (
        <Box width="90%" height="14rem" margin="80px auto" textAlign="center" color="white" sx={{backgroundColor: "#888"}}>
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h4">Subscribe To Our Newsletter</Typography>
      <Typography fontSize="medium">
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        m="15px auto"
        display="flex"
        alignItems="center"
        width="55%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
            p="2px 4px"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ backgroundColor: "#222", color: "white", p: "10px", ":hover": { cursor: "pointer", backgroundColor: "#2ecc71" } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
    )
}

export default Subscribe
