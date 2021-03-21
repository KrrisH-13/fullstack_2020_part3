const ContactPerson = ({id, name, number, deleteContact}) => {
    return (
        <tr key={id}>
            <td> {name} </td>
            <td> {number} </td>
            <td><button onClick={()=>deleteContact(id, name)}>Delete</button></td>
        </tr>
    );
}
export default ContactPerson;