
import { Badge, Box, IconButton } from '@mui/material';
// import { Image } from 'mui-image'
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen, setIsMenuOpen } from "../../state";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    return (
       <Box display="flex" alignItems="center" width="100%" height="60px" backgroundColor="rgba(255, 255, 255, 0.95)" color="black" position="fixed" top="0" left="0" zIndex="1">
            <Box width="80%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">

                <Box onClick={() => navigate("/")} sx={{height: 40,
          width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': {cursor: "pointer"}}}>
                    <img style={{height: '2.6rem', width: 'auto'}} src='./images/logo.png'/>
                    <img style={{height: '1rem', width: 'auto', marginLeft: '1rem'}} src='./images/logo-text.png'/>
                </Box>
                <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2">
                    <IconButton sx={{color: "black"}}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton sx={{color: "black"}}>
                        <PersonOutline />
                    </IconButton>
                    <Badge badgeContent={cart.length} color="primary" invisible={cart.length === 0} sx={{"& .MuiBadge-badge": {right: 5, top: 5, padding: "0 4px", height: "15px", minWidth: "15px"}}}>
                    <IconButton sx={{color: "black"}} onClick={() => dispatch(setIsCartOpen({}))}>
                        <ShoppingBagOutlined />
                    </IconButton>
                    </Badge>
                    <IconButton sx={{color: "black"}} onClick={() => dispatch(setIsMenuOpen({}))}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar
