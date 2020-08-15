#!/usr/bin/env node
var argv = require('yargs').argv;

const express = require('express')
const proxy = require('express-http-proxy')
const app = express()
var deleteKeys = ['listen', '$0', '_']
var ports = Object.keys(argv).filter((i) => {
    return (!deleteKeys.includes(i))
})

if(!ports || ports.length<1){
    throw new Error('Not any port added.')
}
ports.forEach((i) => {
        app.use(i,proxy('localhost:'+argv[i]))
})

var PORT = argv.listen || 9000
app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT)
})