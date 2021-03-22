import axios from 'axios';
const baseApiUrl = '/api';

const getAll = () => {
    const req = axios.get(baseApiUrl+'/persons');
    return req.then(response => response.data);
}

const addContact = (newContact)=>{
    const req = axios.post(baseApiUrl+'/persons', newContact);
    return req.then(response => response.data);
}

const deleteContact = (id)=>{
    const req = axios.delete(baseApiUrl + '/persons/' + id);
    return req.then(response => response.data);
}

const updateContact = (contact)=>{
    const req = axios.put(baseApiUrl+'/persons/'+contact.id, contact);
    return req.then(response => response.data);
}

const phonebookService = { getAll, addContact, deleteContact, updateContact };

export default phonebookService;