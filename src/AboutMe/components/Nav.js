import mLogo from "../photos/letter-m.png"
import '../styles/Nav.css';
function Nav({setShowForm}) {
  const showFormFunction=()=>{
    setShowForm(true)
  }
    return (
     <nav className="nav-section">
        <div className="m-logo-and-paragraph-name-container">
 <img className="m-logo" src={mLogo} alt="Logo" />
 <div className="my-name-paragraph-container">
<p className="name-paragraph-nav">Maciej Plewka</p>
<p className="developer-paragraph-nav">Front-end Developer</p>
 </div>
 
 </div>
 <div className="contact-button-container">
 <button onClick={showFormFunction} className="contact-button-nav">Contact</button>
 </div>
     </nav>
    );
  }
  
  export default Nav;
  