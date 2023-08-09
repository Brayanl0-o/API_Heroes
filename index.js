const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3010;
const app = express();

const allowedURL = ['http://localhost:4200']
// require the file .env (where is the private url to bd)
require('dotenv').config()

app.use(cors({
    origin: allowedURL
}));

// rute to files of the archive routers
const heroesRouters = require('./routers/heroes');

app.use(express.json())
app.use('/api/heroes', heroesRouters)

//Connection with MondoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected To DB'))
    .catch((error) => console.log(error))

//Api lifting with express and define listen port
app.get('/', (req, res) => {
    res.send('Holaa!! Estas conectad@a la API Heroes')
});

app.listen(port, () => {
    console.log('The server is listening in http://localhost:' + port)
});


