import SearchBar from './SearchBar'
import Items from './Items'

function KeywordSearchView({displayItems, searchTerm, searchFunction}){
    return (
        <div>
            <SearchBar searchFunction={searchFunction} />
            <p>Search term: {searchTerm}</p>
            { displayItems.length > 0 ? <Items items={displayItems} /> : 'No items to display.' }
        </div>
    )
}

export default KeywordSearchView