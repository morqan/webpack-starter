import Post from "@/Post";
import "@style/style"
import json from "@assets/json.json"
import webpackBG from "@img/webpackBG.jpeg"
import xml from "@assets/xml/data.xml"
import "@style/scss"
import React from "react"
import {render} from "react-dom"
const post = new Post('webpack test', webpackBG)

async function start() {
    return await Promise.resolve('async is working')
}
start().then(console.log)

class Util {
    static id = Date.now()
}

const App = () => (
        <div className="container">
            <h1>Webpack starter</h1>
            <div className="BGimg"></div>
        </div>
)

render(<App/>,document.getElementById('app'))

console.log('itil id:',Util.id)
console.log('post to string',post.toString())
console.log('json:',json)
console.log('xml:',xml)
