const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')
const cors = require('cors')

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())
app.use(methodOverride())

mongoose.connect('mongodb://127.0.0.1:3001/meteor?gssapiServiceName=mongodb')

restify.serve(router, mongoose.model('Link', new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String }
})))

app.use(router)

app.listen(3002, () => {
  console.log('Express server listening on port 3002')
})