import express from 'express';
import log from '@ajar/marker';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import url from 'node:url';

const app = express()

const { PORT, HOST } = process.env;

app.use(express.json())
app.use(bodyParser.json())
app.use( morgan('dev') );

app.get('/',  (req, res) => {
    res.status(200).send('Hello Express!')
})
app.get('/users', (req, res) => {
    res.status(200).send('Get all Users')
})


//http://localhost:3030/query?name=peleg&color=blue
app.get('/query', (req, res) => {
    res.status(200).json(req.query)
})
http://localhost:3030/cars/BMW/2019
app.get('/cars/:module/:year', (req, res) => {
    res.status(200).json(`Car module:${req.params.module} from year: ${req.params.year}`)
    
})
app.post('/pets', (req, res) => {
    res.status(200).send(`I created the new pet: ${req.body?.pet}`)})

app.get('/html', (req, res) => {
        res.status(200).send(`<h1>This is header </h1> <ul><li>firts item </li> </ul`)
        
    })
app.use('*', (req, res) => {
    res.status(404).send(`<h1> OH SNAP, we got 404 error! This page is not exist 😔</h1>`)
})
app.listen(PORT, HOST,  ()=> {
    log.magenta(`🌎  listening on`,`http://${HOST}:${PORT}`);
});


//------------------------------------------
//         Express Echo Server
//------------------------------------------
/* challenge instructions

     - install another middleware - morgan
        configuring app middleware like so:
        app.use( morgan('dev') );

    -  define more routing functions that use

        - req.query - access the querystring part of the request url
        - req.params - access dynamic parts of the url
        - req.body - access the request body of a POST request
        
        in each routing function you want to pass some values to the server from the client
        and echo those back in the server response

    - return api json response
    - return html markup response

    - return 404 status with a custom response to unsupported routes


*/
