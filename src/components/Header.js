function Header(props){

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <h3>Search by keyword, or picture.</h3>
        </header>
    )
}

Header.defaultProps = {
    title: 'Ram Ranch Storage'
}

// React JS Styling
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header