import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return ( <footer className="footer">Not affiliated with SPBSTU <a href='https://t.me/sachakhv'><FontAwesomeIcon icon={faTelegram} className='faTelegram'/></a>
</footer> );
}
 
export default Footer;