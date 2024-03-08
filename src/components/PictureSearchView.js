import PictureSearchItems from "./PictureSearchItems"
import PictureSearchButton from './PictureSearchButton'
import { useState } from 'react'

function KeywordSearchView(){
    const [itemType, setItemTypeHook] = useState('Building Blocks')

    const setItemType = (itemTypeToSet) =>{
        console.log('hit: ' + itemTypeToSet )
        setItemTypeHook(()=>itemTypeToSet)
    }
    
    return (
        <div>
            <PictureSearchButton color="black" clickFunc={setItemType} label="Building Blocks" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Colored Blocks" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Natural Blocks" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Redstone Blocks" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Functional Blocks" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Tools and Utilities" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Combat" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Food and Drinks" />
            <PictureSearchButton color="black" clickFunc={setItemType} label="Ingredients" />
            <h2 style={{color: 'red', backgroundColor: 'black'}}>Work in progress!</h2>
            <PictureSearchItems itemType={itemType} ></PictureSearchItems>
        </div>
    )
}

export default KeywordSearchView