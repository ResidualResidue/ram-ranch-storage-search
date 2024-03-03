function Button({color, label, clickFunc}){

    return (
        <button onClick={clickFunc} style={{backgroundColor: color, color: "white"}}>{label}</button>
    )
}

export default Button