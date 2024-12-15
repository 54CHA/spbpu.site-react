import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen ,faUser, faBookAtlas, faEnvelope, faSpellCheck, faFloppyDisk, faCalendarDays, faBookOpen, faNoteSticky} from '@fortawesome/free-solid-svg-icons';

const Sites = () => {
    return ( 
        <div className='quickAccesss'>
    <div className="apps">
    <a className="apps2" href="https://ruz.spbstu.ru/faculty/100/groups/40009?date=2024-12-16" target="_blank">
            <FontAwesomeIcon icon={faCalendarDays} className='faSpellCheck2'/>Расписание</a>
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
            <a className="apps2" href="https://imet-spbstu.notion.site/7adeb7c8ee55450dabeadfd98b4b278c?v=a5a7a8bb3a9f41d3bd94e4006be77030" target="_blank">
            <FontAwesomeIcon icon={faNoteSticky} className='faSpellCheck2'/>
            Notion Imet</a>
                <a className="apps2" href="https://mail.spbstu.ru" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className='faEnvelope'/>
            Почта</a>
                <a className="apps2" href="https://disk.yandex.ru/d/K0BpIFFbBgXPyQ/" target="_blank">
                <FontAwesomeIcon icon={faFloppyDisk} className='faFloppyDisk'/>
            Яндекс Диск</a>
                <a className="apps2" href="https://polyphis.ru/" target="_blank">
                <FontAwesomeIcon icon={faSpellCheck} className='faSpellCheck'/>
            Polyphis</a>
            <a className="apps2" href="https://polyvsp.ru/vibpredmet/" target="_blank">
            <FontAwesomeIcon icon={faSpellCheck} className='faSpellCheck2'/>
            Polyvsp</a>
            <a className="apps2" href="https://elib.spbstu.ru/" target="_blank">
            <FontAwesomeIcon icon={faBookOpen} className='faSpellCheck2'/>
            Библиотека</a>
            </div>
    </div> );
    
}
 
export default Sites;