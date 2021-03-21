const NewContactForm = ({newName,newNumber, submitNewContact, handleNameChange, handleNumberChange }) => {
    return(      
    <form onSubmit={submitNewContact}>
        <table>
          <tbody>
            <tr>
              <td>
                Name:
              </td>
              <td>
                <input value={newName} onChange={handleNameChange}/>
              </td>
            </tr>
            <tr>
              <td>
                Number: 
              </td>
              <td>
                <input value={newNumber} onChange={handleNumberChange}/>
              </td>
            </tr>
            <tr>
              <td/>
              <td>
                <button type="submit">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>);
}
export default NewContactForm;
