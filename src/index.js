import Post from "@/Post";
import "@style/style"
import json from "@assets/json.json"
import webpackBG from "@img/webpackBG.jpeg"
import xml from "@assets/xml/data.xml"
import "@style/scss"

const post = new Post('webpack test', webpackBG)

async function start() {
    return await Promise.resolve('async is working')
}
start().then(console.log)
console.log('post to string',post.toString())
console.log('json:',json)
console.log('xml:',xml)
