
function Search({handleSearch}){
    return <div className="search">
    <input type="text" 
    placeholder="Search here"
    onChange={handleSearch}/>
   </div>
}
// function as props
export default Search