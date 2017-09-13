var books = [
    {
        title: "Harry Potter",
        author: "J.K Rowling",
    },
    {
        title: "The Sun Also Rises",
        auther: "Ernest Hemmingway"
    },
    {
        title: "The Old Man and the Sea",
        auther: "Ernest Hemingway"
    },
]

var controller = {
    create: function(req, res, next) {
        var newBook = req.body;
        books.push(newBook);
        res.status(200).end()
    },
    read: function(req, res, next) {
        res.status(200).send(books)
    },
    // /api/books/:id
    readById: function(req, res, next) {
        var id = req.params.id;
        var book = books[id];
        res.json(book);
    },
    // /api/books/:id
    update: function(req, res, next) {
        var newObj = req.body;
        var id = req.params.id;
        books[id] = newObj;

        res.send(newObj)
    },
    // /api/books/:id
    delete: function(req, res, next) {
        var id = req.params.id;
        books.splice(id, 1);

        res.end()
    }
}

module.exports = controller;