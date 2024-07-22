import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen ,faUser, faBookAtlas, faEnvelope, faSpellCheck, faFloppyDisk, faCalendarDays} from '@fortawesome/free-solid-svg-icons';

const Sites = () => {
    return ( 
        <div className='quickAccesss'>
    <div className="apps">
    <a className="apps2" href="https://polyvsp.ru/vibpredmet/" target="_blank">
            <FontAwesomeIcon icon={faCalendarDays} className='faSpellCheck2'/>Calendar</a>
        <a className="apps2" href="https://my.spbstu.ru/home/profile/" target="_blank">
        <FontAwesomeIcon icon={faUser} className='faUser'/>Личный кабинет</a>
                <a className="apps2" href="https://openedu.ru/" target="_blank">
                <FontAwesomeIcon icon={faBookAtlas} className='faBookAtlas'/>
            OpenEdu</a>
                <a className="apps2" href="http://lms.spbstu.ru/" target="_blank">
                <FontAwesomeIcon icon={faFolderOpen} className='faFolderOpen'/>
            Голубой СДО</a>
                <a className="apps2" href="http://dl-imet.spbstu.ru/" target="_blank">
                <FontAwesomeIcon icon={faFolderOpen} className='faFolderOpen2'/>
            Синий СДО</a>
                <a className="apps2" href="http://dl-hum.spbstu.ru/" target="_blank">
                <FontAwesomeIcon icon={faFolderOpen} className='faFolderOpen3'/>
            Оранжевый СДО</a>
                <a className="apps2" href="https://mail.spbstu.ru" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className='faEnvelope'/>
            Почта</a>
                <a className="apps2" href="https://elib.spbstu.ru/" target="_blank">
                <FontAwesomeIcon icon={faFloppyDisk} className='faFloppyDisk'/>
            Яндекс Диск</a>
                <a className="apps2" href="https://polyphis.ru/" target="_blank">
                <FontAwesomeIcon icon={faSpellCheck} className='faSpellCheck'/>
            Polyphis</a>
            <a className="apps2" href="https://polyvsp.ru/vibpredmet/" target="_blank">
            <FontAwesomeIcon icon={faSpellCheck} className='faSpellCheck2'/>
            Polyvsp</a>
            
            </div>
    </div> );
    
}
 
export default Sites;