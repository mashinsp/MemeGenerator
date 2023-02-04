import logo from '../TrollFace.png'
const Navbar = () => {
    return(
    <header className="header">
        <img 
            className='header--image' 
            src={logo} alt=""
        />
        <p className='header--title'>Meme Generator</p>
    </header>
    )
}

export default Navbar;