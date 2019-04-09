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
/*
# :TODO
✔️--> / = response > success
✔️--> /signin = POST > sucess/fail
--> /register = POST > user
--> /profile/:userId = GET > user
--> /image = PUT > user
*/


app.get('/', (req,res) => res.send('Helo World from server'));


app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json('success');
    } else {
        res.status(400).json('Error logging in');
    }
    res.json('Sign In');
})

app.listen(port, () => console.log(`Listening on port ${port}!`));


