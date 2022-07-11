import React from "react";
import {Container, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	},
	paper: {
		padding: theme.spacing(3)
	}
}));

export default function Content(props) {
	const classes = useStyles();
	const {title, children} = props;

	return (
		<Container maxWidth={"lg"} className={classes.root}>
			<Paper className={classes.paper}>
				<Typography variant={"h4"} component={"h1"}>
					{title}
				</Typography>
				<div>
					{children}
				</div>
			</Paper>
		</Container>
	)
}