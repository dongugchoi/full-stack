import React from "react";
import App from "./App";
import Login from "./users/Login";
import Signup from "./users/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import {Typography,Box} from "@mui/material";
//import Signup from './Signup';

// function Copyright(){
//     return(
//         <Typography variant="body2" color="textSecondary" align="center">
//             {"Copyright "}
//             fsoftwareengineer, {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     );
// }

export default function AppRouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<App />}/>
                    <Route path="/" element={<Login />}/>
                    <Route path="/Signup" element={<Signup />}/>
                </Routes>
            </BrowserRouter>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </div>
    )
}


