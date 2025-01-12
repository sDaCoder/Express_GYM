import fs from "fs";

const getForm = (req, res) => {
    const message = "Get this GYM membership for $60 - Fill this Form now";
    const params = {
        'title': 'sDa GYM | Best of the Body Builders',
        "message": message
    };
    res.status(200).render('index.ejs', params);
}

const addMember = (req, res) => {
    const { name, age, gender, address, more } = req.body;
    let outputWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}.\nMore about him/her: ${more}`;

    fs.writeFile('output.txt', outputWrite, (err) => {
        if (err) 
        {
            console.log(err);
            const title = 'Error occurred';
            const message = 'Your form has not been submitted successfully';
            return res.status(500).render('index.ejs', {title, message});
        }
        console.log('Data loaded to our database');
        const params = {
            'title': 'Data added successfully',
            'message': 'Your form has been submitted successfully'
        };
        res.status(200).render('index.ejs', params);
    });
}

export default { getForm, addMember };