const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())
routes(app);

app.get('/', (req, res) => {
    res.send("hellowordáđá")
})
mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
        console.log(err)
    })



app.listen(port, () => {
    console.log('server running: ', +port)
})

