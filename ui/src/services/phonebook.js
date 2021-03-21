import axios from 'axios';
const baseApiUrl = 'http://localhost:3001';

const getAll = () => {
    const req = axios.get(baseApiUrl+'/api/persons');
    return req.then(response => response.data);
}

const addContact = (newContact)=>{
    const req = axios.post(baseApiUrl+'/api/persons', newContact);
    return req.then(response => response.data);
}

const deleteContact = (id)=>{
    const req = axios.delete(baseApiUrl + '/api/persons/' + id);
    return req.then(response => response.data);
}

const updateContact = (contact)=>{
    const req = axios.put(baseApiUrl+'/persons/'+contact.id, contact);
    return req.then(response => response.data);
}

const phonebookService = { getAll, addContact, deleteContact, updateContact };

export default phonebookService;