import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Store } from "./Store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Theme>
      <Store>
        <App />
      </Store>
    </Theme>
);
