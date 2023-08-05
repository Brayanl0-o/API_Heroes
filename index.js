const express = require('express')

const port = 3010;
const app = express();
// require the file .env (where is the private url to bd)
require('dotenv').config()



app.get('/', (req, res) => {
    res.send('Holaa!! Estas conectad@a la API Heroes')
});

app.listen(port, () => {
    console.log('The server is listening in http://localhost:' + port)
});
