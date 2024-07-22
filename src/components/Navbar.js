import logo from '../assets/polylogo2.png';

const Navbar = () => {
    return (
      <div className='nav'>
        <header className="header">
        <a href="./" className='home'><img src={logo} className="logo"/><span className='homeText'>POLYTECH</span></a>
    <nav className="navbar" >
      {/* <a href='/'>Events</a> */}
     {/* <a href="https://t.me/sachakhv" target="_blank" className='contact'>Contact</a>  */}
      </nav>
      </header>
      </div>
 );
}
 
export default Navbar;