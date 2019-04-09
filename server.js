const express = require('express');

const app = express();
const port = 4500;

app.get('/', (req,res) => res.send('Helo World from server'));

app.listen(port, () => console.log(`Listening on port ${port}!`));


/*
# TODO
--> / = response > done
--> /signin = POST > sucess/fail
--> /register = POST > user
--> /profile/:userId = GET > user

*/