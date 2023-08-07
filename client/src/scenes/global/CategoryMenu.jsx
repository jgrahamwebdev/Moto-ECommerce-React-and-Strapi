
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import {
  setIsMenuOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CategoryMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isMenuOpen = useSelector((state) => state.cart.isMenuOpen);


    return (
        // Smoke screen overlay
        <Box display={isMenuOpen ? "block" : "none"} position="fixed" zIndex={888} width="100vw" height="100vh" backgroundColor="rgba(0,0,0,0.8)" left="0" top="0" overflow="auto">

            {/* Cart Menu popover */}
            {/* MODAL */}
            <Box position="fixed" right="0" top="0" width="max(400px, 20%)" height="100%" backgroundColor="white" borderLeft="2px solid #000" borderBottom="2px solid #000">
                <Box padding="30px" overflow="auto" height="100%">

                    {/*HEADER*/}
                    <FlexBox mb="15px">
                        <Typography sx={{fontSize: "2rem"}} variant="h3">Categories:</Typography>
                        <IconButton onClick={() => dispatch(setIsMenuOpen())}>
                            <CloseIcon />
                        </IconButton>
                    </FlexBox>
                    <Box width="100%" height="2.5rem" display="flex" alignItems="center" paddingLeft="10px" marginBottom="1rem" borderRadius="5px" sx={{":hover": {
                bgcolor: "#d8d8d8", cursor: "pointer", textDecoration: "underline"}}} onClick={() => {navigate(`/riding-gear`); dispatch(setIsMenuOpen({})); }}>
                        <Typography>Riding Gear</Typography>
                    </Box>
                    <Box width="100%" height="2.5rem" display="flex" alignItems="center" paddingLeft="10px" marginBottom="1rem" borderRadius="5px" sx={{":hover": {
                bgcolor: "#d8d8d8", cursor: "pointer", textDecoration: "underline"}}} onClick={() => {navigate(`/accessories`); dispatch(setIsMenuOpen({})); }}>
                        <Typography>Accessories</Typography>
                    </Box>
                    <Box width="100%" height="2.5rem" display="flex" alignItems="center" paddingLeft="10px" marginBottom="1rem" borderRadius="5px" sx={{":hover": {
                bgcolor: "#d8d8d8", cursor: "pointer", textDecoration: "underline"}}} onClick={() => {navigate(`/parts`); dispatch(setIsMenuOpen({})); }}>
                        <Typography>Parts</Typography>
                    </Box>
                    <Box width="100%" height="2.5rem" display="flex" alignItems="center" paddingLeft="10px" marginBottom="1rem" borderRadius="5px" sx={{":hover": {
                bgcolor: "#d8d8d8", cursor: "pointer", textDecoration: "underline"}}} onClick={() => {navigate(`/`); dispatch(setIsMenuOpen({})); }}>
                        <Typography>Track Order</Typography>
                    </Box>
                    <Box width="100%" height="2.5rem" display="flex" alignItems="center" paddingLeft="10px" marginBottom="1rem" borderRadius="5px" sx={{":hover": {
                bgcolor: "#d8d8d8", cursor: "pointer", textDecoration: "underline"}}} onClick={() => {navigate(`/`); dispatch(setIsMenuOpen({})); }}>
                        <Typography>Contact Us</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CategoryMenu
