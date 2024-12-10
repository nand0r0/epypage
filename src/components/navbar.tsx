function Navbar() {
    return(
    <>
        <nav style={{
            position: "sticky", 
            top: 0, 
            padding: "0px 20px", 
            margin: "0px", 
            borderRadius: "6px", 
            backgroundColor: "rgb(14, 17, 24, 0.8)"
        }}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/loadoutgen">Loadout generator</a></li>
            </ul>
            <ul>
                <li><a href="https://github.com/nand0r0" target="blank">GitHub</a></li>
            </ul>
            
        </nav>
        <hr />
    </>
    )
}

export default Navbar