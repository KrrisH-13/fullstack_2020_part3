import ContactPerson from './ContactPerson'
const ContactList = ({persons, deleteContact}) => {
    return(
        <table>
            <tbody>
            {persons.length? persons.map((person)=> 
                <ContactPerson 
                    key={person.id} 
                    id={person.id} 
                    name={person.name} 
                    number={person.number}
                    deleteContact={deleteContact}/>)
                :<tr><td> No contacts matching searched filter. </td></tr>}
            </tbody>
        </table>
    );
}
export default ContactList;
