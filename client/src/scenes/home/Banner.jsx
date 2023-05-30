
import { Box, InputBase, Divider, Typography, IconButton, Button } from "@mui/material";
import { shades } from "../../theme";

const Banner = () => {
    return (
        <Box width="100%" height="3rem" backgroundColor="#444" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" color="white">Place order by 5 pm PST and have order shipped same day!</Typography>
        </Box>
    )
}

export default Banner
