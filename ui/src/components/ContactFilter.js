const Filter = ({searchPhrase, handleSearchChange}) => {
    return(
        <div>
            Filter contacts shown with <input value={searchPhrase} onChange={handleSearchChange}/>
        </div>
        );
}
export default Filter;