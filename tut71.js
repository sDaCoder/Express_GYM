// console.log("This is the best express backend server we have ever created");

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const port = 80;

// * EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  //! For Serving the static files
app.use(express.urlencoded());

// * PUG SPECIFIC STUFF
app.set('view engine', 'pug');  //! Set the template engiene as pug 
app.set('views', path.join(__dirname, 'views'));  //! Set the views directory 

//  * ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content in the internet so far, so use it wisely";
    const params = {'title': 'sDa GYM | Best of the Body Builders', "content": con};
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}.
     More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputWrite);
    const params = {'message': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);
    
})



//* START THE SERVER 
app.listen(port, () => {
    console.log(`The application started successfully on port http://localhost:${port}`);
});