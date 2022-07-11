
import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme.js";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App/>
	</ThemeProvider>,
	document.getElementById("root")
);