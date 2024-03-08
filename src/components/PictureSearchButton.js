function PictureSearchButton({color, label, clickFunc}){

    return (
        <button onClick={clickFunc(label)} style={{backgroundColor: color, color: "white"}}>{label}</button>
    )
}

export default PictureSearchButton