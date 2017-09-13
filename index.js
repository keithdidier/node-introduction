const express = require('express');
const bodyParser = require('body-parser');
var bookController = require('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', bookController.read);
app.get('/api/books/:id', bookController.readById);
app.post('/api/books', bookController.create);
app.put('/api/books/:id', bookController.update);
app.delete('/api/books/:id', bookController.delete);


app.listen(3001, () => {
    console.log("It's lit on port 3001");
})
