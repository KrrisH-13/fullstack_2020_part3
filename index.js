const express = require('express');
const PORT = 3001;

const app = express();

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


app.listen(PORT, ()=>{
    console.log(`App running on port${PORT}`);
});