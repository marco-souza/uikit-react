import App from "./app"
import React from "react"
import {render} from "react-dom"
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory"
// import UiKit
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
import "uikit/dist/css/uikit.min.css"


(() => {

    UIkit.use(Icons)


    // First off all, create a app element
    let div = document.createElement("div");
    div.id = "app"
    document.body.appendChild(div)

    // Define routes
    const
        history = createBrowserHistory(),
        routes = (
            <Router 
                onUpdate={() => {
                    window.scrollTo(0, 0);
                }} 
                history={history} 
            >
                <App />
            </Router>
        )

    // Start ReactJS 
    render(routes, document.getElementById("app"))


    // loads the Icon plugin

    // components can be called from the imported UIkit reference
    UIkit.notification("Hello world.")
})();