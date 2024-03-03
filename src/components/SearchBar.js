function SearchBar({ searchFunction }){
    return (
        <div>
            <input id="searchBar"></input>
            <button onClick={() => searchFunction( document.getElementById("searchBar").value )}>Search</button>
        </div>
    )
}

export default SearchBar