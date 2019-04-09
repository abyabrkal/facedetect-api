const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 4500;

app.use(bodyParser.json());

const database = {
    users: [ 
        {
            id: '123',
            name: 'Tony',
            email: 'tony@gmail.com',
            password: 'pass',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Steve',
            email: 'steve@gmail.com',
            password: 'pass',
            entries: 0,
            joined: new Date()
        }
    ]
}

// *************   ROUTES     ***************************** 

app.get('/', (req,res) => res.send(database.users));


app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json('success');
    } else {
        res.status(400).json('Error logging in');
    }
    res.json('Sign In');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });

    res.json(database.users[database.users.length-1]);
});


app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;

    database.users.forEach(user => {
        if(user.id === id){
            found = true;
            return res.json(user);
        }
    });

    if(!found) {
        res.status(400).json('User Not Found');
    }
});


app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;

    database.users.forEach(user => {
        if(user.id === id){
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    });

    if(!found) {
        res.status(400).json('User Not Found');
    }
});


app.listen(port, () => console.log(`Listening on port ${port}!`));


