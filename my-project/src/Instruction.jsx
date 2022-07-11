import React from "react";
import {Typography} from "@mui/material";

export default function Instructions() {
	return (
		<>
			<br/>
			<>
				<Typography variant={"h5"} component={"h2"}>
					Home
				</Typography>
				<Typography variant={"body1"} component={"ul"}>
					<li>Welcome to the home page ! Take a look on it and search what you want to know about me !</li>
				</Typography>
			</>
			<br/>
			<>
				<Typography variant={"h5"} component={"h2"}>
					About
				</Typography>
				<Typography variant={"body1"} component={"ul"}>
					<li>Just a little website of mine where you can learn all about me. Take your ease and enjoy your stay.</li>
				</Typography>
			</>
            <br/>
            <>
                <Typography variant={"h5"} component={"h2"}>
                    Link utils
                </Typography>
                <Typography variant={"body1"} component={"ul"}>
                    <li> Below lies some link that are useful for you. </li>
                </Typography>
            </>
		</>
	);
}