
import { Typography } from "@mui/material";

const BrandBanner = () => {
    return (
        <div style={{ width: "100vw", height: "auto", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column", marginTop: "6rem"}}>
            <Typography variant="h3" style={{ marginLeft: "2rem" }}>We carry for <b>all</b> major brands</Typography>
            <div style={{ width: "100%", height: "10rem", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <img style={{ width: "auto", height: "55%"}} src="./images/honda.png" alt="" />
            <img style={{ width: "auto", height: "55%"}} src="./images/suzuki.png" alt="" />
            <img style={{ width: "auto", height: "45%"}} src="./images/kawasaki.svg" alt="" />
            <img style={{ width: "auto", height: "50%"}} src="./images/yamaha.png" alt="" />
            <img style={{ width: "auto", height: "40%"}} src="./images/ktm.png" alt="" />
            <img style={{ width: "auto", height: "30%"}} src="./images/husq.png" alt="" />
            <img style={{ width: "auto", height: "50%"}} src="./images/gasgas.png" alt="" />
            </div>
            <div style={{ width: "100%", height: "10rem", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <img style={{ width: "auto", height: "50%"}} src="./images/fox.svg" alt="" />
            <img style={{ width: "auto", height: "50%"}} src="./images/astar.png" alt="" />
            <img style={{ width: "auto", height: "30%"}} src="./images/proc.jpg" alt="" />
            <img style={{ width: "auto", height: "120%"}} src="./images/renthal.png" alt="" />
            <img style={{ width: "auto", height: "120%"}} src="./images/tld.png" alt="" />
            </div>
        </div>
    )
}

export default BrandBanner
