
import { Typography } from "@mui/material";

const Video = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <video autoPlay loop muted src="./images/moto.mp4"></video>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "auto", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(0, 0, 0, 0.6)", color: "white",
              position: "absolute",
              top: "55%", left: "51%", padding: "1rem", textAlign: "center"}}>
                <Typography variant="h4">Our goal is to get you riding <br /> and keep you riding.</Typography>
            </div> */}
        </div>
    )
}

export default Video
