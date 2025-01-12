import express from "express"
import memberFormRouter from './routes/memberForm.js';   

const app = express();
const port = 8080;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'ejs');  //! Set the template engiene as ejs
// app.set('views', path.join(__dirname, 'views'));  //! Set the views directory

//  * ENDPOINTS
app.use('/', memberFormRouter)

//* START THE SERVER 
app.listen(port, () => {
    console.log(`The application started successfully on port http://localhost:${port}`);
});