import React from "react";
import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import AppBar from "./AppBar";
import Content from "./Content";
import Instructions from "./Instruction";

const useStyles = makeStyles(() => ({
	root: {
		display: "block"
	}
}));

export default function Layout() {
	const classes = useStyles();

	return (
		<Container maxWidth={false} disableGutters={true} className={classes.root}>
			<AppBar/>
			<Content title={"Asuki website"}>
				<Instructions/>
			</Content>
		</Container>
	);
}