
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageBanners = () => {
    const navigate = useNavigate();
    return (
        <div style={{ width: "100vw", height: "auto", marginBottom: "4rem" }}>
            <Typography style={{ marginLeft: "2rem", marginBottom: "2rem" }}  variant="h2">Find what <b>you need</b>:</Typography>
            <div style={{ width: "100%", height: "20rem", position: "relative",marginBottom: "20px" }}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./images/1.png" alt="" />
                <div style={{ display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column", width: "auto", backgroundColor: "rgb(0, 0, 0, 0.8)", color: "white",
              position: "absolute",
              top: "45%", left: "75%", padding: "1rem", textAlign: "center" }}>
                    <Typography variant="h3">Riding Gear</Typography>
                    <Typography fontWeight="bold" sx={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate(`/riding-gear`)}>Discover More</Typography>
                </div>
            </div>
            <div style={{ width: "100%", height: "20rem", position: "relative", marginBottom: "20px" }}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./images/2.jpg" alt="" />
                <div style={{ display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column", width: "auto", backgroundColor: "rgb(0, 0, 0, 0.8)", color: "white",
              position: "absolute",
              top: "45%", left: "5%", padding: "1rem", textAlign: "center" }}>
                    <Typography variant="h3">Accessories</Typography>
                    <Typography fontWeight="bold" sx={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate(`/accessories`)}>Discover More</Typography>
                </div>
            </div>
            <div style={{ width: "100%", height: "20rem", position: "relative" }}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="./images/3.jpg" alt="" />
                <div style={{ display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column", width: "15rem", backgroundColor: "rgb(0, 0, 0, 0.8)", color: "white",
              position: "absolute",
              top: "45%", left: "75%", padding: "1rem", textAlign: "center" }}>
                    <Typography variant="h3">Parts</Typography>
                    <Typography fontWeight="bold" sx={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate(`/parts`)}>Discover More</Typography>
                </div>
            </div>
        </div>
    )
}

export default ImageBanners
