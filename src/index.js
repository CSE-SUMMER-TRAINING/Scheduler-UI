import React from "react";
import ReactDOM from "react-dom/client";
import "./all.min.css";
import "./index.css";
import App from "./App";
import UserProvider from "./pages/UserProvider";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
<UserProvider>
				<App /> 
		
	</UserProvider>
);
