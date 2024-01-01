import { CircularProgress } from "@mui/material";
import React from "react";


function Loading({ size = 100 }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <CircularProgress />
        </div>
    );
}

export default Loading;
