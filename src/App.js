import Header from './components/Header'
import ItemData from './ItemData'
import Button from './components/Button'
import PictureSeachView from './components/PictureSearchView'
import KeywordSearchView from './components/KeywordSearchView'

import { useState } from 'react'



function App() {
  const DARKBROWN="#4d2600"
  const DARKGREEN="#003300"
  const KEYWORDSEARCH="keyword_search"
  const PICTURESEARCH="picture_search"
  const ITEMDATA = ItemData

  const searchViewDefault = KEYWORDSEARCH;

  const [searchTerm, setSearchTerm] = useState('')
  const [searchView, setSearchView] = useState(searchViewDefault)
  const [displayItems, setDisplayItems] = useState(() => {
    var displayItems = []
    for(let i = 0; i<5; i++){
      displayItems.push(ITEMDATA[i])
    }
    return displayItems
  })

  function getLargestMatchingSubstring(searchTerm, itemName){
    searchTerm = convertDisplayNameToSearchableName(searchTerm)
    let maxMatchingChars = 0
    if(searchTerm.length <= itemName.length){
      // Iterate the whole search term through the item's name
      for(let i=0; i<=itemName.length-searchTerm.length;i++){
        let matchingChars = 0
        //Check how many consecutive characters match
        for(let j = 0; j<searchTerm.length; j++){
          searchTerm[j] === itemName[j+i] ? matchingChars++ : matchingChars = 0
        }
        matchingChars > maxMatchingChars ? maxMatchingChars = matchingChars : maxMatchingChars = maxMatchingChars
      }
    }
    return maxMatchingChars
  }

  function prioritizeExactMatch(topMatches, searchTerm){
    for(let i=0; i<topMatches.length; i++){
      if(topMatches[i].name === searchTerm){
        let item = [topMatches[i]]
        topMatches = topMatches.filter((item) => {
          if(topMatches.indexOf(item) !== i){
            return item
          }else{
            return null
          }
        })
        topMatches = item.concat(topMatches)
      }
    }
    return topMatches
  }

  const searchFunction = (searchTerm) => {
    let matchMap = stringCompare(searchTerm)
    let topMatches = findTopMatches(matchMap)
    console.log(topMatches)
    topMatches = prioritizeExactMatch(topMatches, searchTerm)
    console.log(topMatches)
    setDisplayItems(() => topMatches)
  }

  function stringCompare(searchTerm) {
    setSearchTerm(() => searchTerm)
    let matchMap = []
    ITEMDATA.map((item) => {
      let matchCount = getLargestMatchingSubstring(searchTerm, convertDisplayNameToSearchableName(item.displayName))
      matchMap.push(matchCount)
      return 1
    })
    return matchMap;
  }

  function convertDisplayNameToSearchableName(displayName){
    return displayName.toLowerCase().replace(/\s/g, '');
  }

  function findTopMatches(matchMap){
    let topMatches = []
    for(let i=0; i<matchMap.length; i++){
      let matchCount = matchMap[i]
      if(matchCount >= 3){
        topMatches.push({...ITEMDATA[i], 'matchCount': matchCount})
      }
    }
    return topMatches.sort((item1, item2)=> {
      return item2.matchCount - item1.matchCount
    })

  }

  const setKeywordSearch = () => {
    setSearchView(() => KEYWORDSEARCH)
  }

  const setPictureSearch = () => {
    setSearchView(() => PICTURESEARCH)
  }

  return (
    <div className="container">
      <img className="cowboy" src="/imgs/dancing-jon-pardi.gif" alt="Dancing Cowboy"></img>
      <div className="cowboy">
        <Header />
        <Button clickFunc={setKeywordSearch} color={DARKBROWN} label="Keyword Search" />
        <Button clickFunc={setPictureSearch} color={DARKGREEN} label="Picture Search" />
        <p>displaying {searchView}</p>
        {searchView === PICTURESEARCH ? <PictureSeachView /> : <KeywordSearchView searchTerm={searchTerm} displayItems={displayItems} searchFunction={searchFunction} />}
      </div>
      <img className="cowboy" src="/imgs/dancing_cowboy.gif" alt="Dancing Cowboy 2"></img>
    </div>
  );
}

export default App;
