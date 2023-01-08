
function Search({handleSearch}){
    return <div className="search">
    <input type="text" 
    placeholder="Search here"
    onChange={handleSearch}/>
   </div>
}
// function props
export default Search