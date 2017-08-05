// @flow
import React from "react"
import {render} from "react-dom"
import { Router } from "react-router"
import createBrowserHistory from "history/createBrowserHistory"
import App from "./app/"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
import "uikit/dist/css/uikit.min.css"

(() => {

    // First off all, create a app element
    const
        div:Element = document.createElement("div"),
        body = document.body

    div.id = "app"
    if (body){
        body.appendChild(div)
    }

    // Define routes
    const
        history: ?any = createBrowserHistory(),
        routes = (
            <Router
                onUpdate={() => {
                    window.scrollTo(0, 0)
                }}
                history={history}
            >
                <App title="Maluco Beleza" />
            </Router>
        )

    let a : string = "2"
    console.log(a)

    // Start ReactJS
    render(routes, document.getElementById("app"))

    // components can be called from the imported UIkit reference
    UIkit.use(Icons).notification("Se liga no rolê.")
})()
