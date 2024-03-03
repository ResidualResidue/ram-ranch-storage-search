import Item from './Item'

function Items({items}){

    return(
        <>
            {items.map((item) => {
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </>
    )
}

export default Items