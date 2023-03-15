const express = require('express');
const cors = require('cors');

const auth_route =  require('./route/auth')

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.use('/api', auth_route)

require('dotenv').config()
require("./config/database")
app.listen(process.env.PORT, () => {
    console.log(`Server started on port`);
});