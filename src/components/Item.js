import { useState } from 'react'
import ChestVisual from './ChestVisual.js'

function convertDisplayNameToPictureName(displayName){
    let toRet=displayName.toLowerCase().replace(/\s/g, '_');
    if (toRet.includes("firework_rocket")){
        return "firework_rocket"
    }else{
        return toRet
    }
}

function Item({item}) {

    const [displayLocationInfo, setDisplayLocationInfo] = useState(false)

    const toggleDisplayLocationInfoTrue = () => {
        setDisplayLocationInfo(() => true)
    }

    const toggleDisplayLocationInfoFalse = () => {
        setDisplayLocationInfo(() => false)
    }

    const imgSrc = `/imgs/items_1.20.1/${convertDisplayNameToPictureName(item.displayName)}.png`


    return (
        <div className='item' onMouseEnter={toggleDisplayLocationInfoTrue} onMouseLeave={toggleDisplayLocationInfoFalse}>
            <img style={{width: 40, height: 40}} src={imgSrc} alt={item.name + '.jpg'}></img>
            <h3>{item.displayName}</h3>
            { displayLocationInfo ? 
                <div>
                    <p style={{marginLeft: 50}}>floor {item.floor}</p>
                    <p style={{marginLeft: 50}}>Chest {item.chest}</p>
                    <p style={{marginLeft: 50}}>Wall: {item.wall}</p>
                    <ChestVisual chestnum={item.chest} wall={item.wall}></ChestVisual>
                </div> : '' }
        </div>
    )

}

export default Item;