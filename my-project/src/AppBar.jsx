import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu, PersonOutline} from "@mui/icons-material";

export default function Appbar() {
	return (
		<AppBar position={"static"}>
			<Toolbar>
				<IconButton
					size={"large"} color={"inherit"}
					edge={"start"} aria-label={"menu"}
					sx={{mr: 2}}>
					<Menu/>
				</IconButton>
				<Typography variant={"h6"} component={"div"} sx={{flexGrow: 1}}>
					Asu
				</Typography>
				<IconButton
					size={"large"} color={"inherit"}
					edge={"end"} aria-label={"profile"}
					sx={{ml: 2}}>
					<PersonOutline/>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}