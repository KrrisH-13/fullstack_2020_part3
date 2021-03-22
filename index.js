const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(express.static('build'));
app.use(cors());
app.use(express.json());

var phonebook = [
    { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
    },
    { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
    },
    { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
    },
    { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
    }
];

morgan.token('post-body',(req,res)=>{
    // Return only if it is a post method call
    if(req.method === 'POST'){
        return JSON.stringify(req.body);
    }
    return ' ';
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-body'));

app.get('/api/persons', (request,response)=>{
    response.json(phonebook);
});


app.get('/info',(request, response)=>{
    var infoPage = `
    <div>
        <p>Phonebook has info for ${phonebook.length} people</p>
        <br/>
        <p>${new Date()}</p>
    <div/>
    `;
    response.send(infoPage);
});

app.get('/api/persons/:id',(request,response) => {
    const id = Number(request.params.id);
    const contact = phonebook.filter((person)=> person.id === id);

    if(contact.length) return response.json(contact[0]);
    // If the contact was not found, send a 404.
    console.log(`Requested resource with ID ${id} was not found`);
    response.status(404).end();
});


app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id);
    phonebook = phonebook.filter((contact)=> contact.id !== id);
    response.status(204).end();
});


app.post('/api/persons',(request, response) => {
    var  body = request.body;

    if(!(body.name || body.number)){
        return response.status(400).json({
            error : 'Bad request. Missing name or number.'
        });
    }

    if(phonebook.find((contact)=>contact.name===body.name)){
        return response.status(400).json({
            error: 'Name must be unique.'
        });
    }


    const id = Math.floor(Math.random()*100000000);

    const person = {
        'id' : id,
        'name' : body.name,
        'number' : body.number
    }

    phonebook =  phonebook.concat(person);
    response.json(person);
});

// app.listen(PORT, ()=>{
//     console.log(`App running on port${PORT}`);
// });
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })