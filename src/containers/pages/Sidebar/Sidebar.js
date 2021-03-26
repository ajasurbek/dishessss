import { Link } from 'react-router-dom'
import './_sidebar.scss'
import Logo from './../../../assets/img/logo.svg'
import Nav1 from './../../../assets/img/home.svg'
import Nav2 from './../../../assets/img/img2.svg'
import Nav3 from './../../../assets/img/img3.svg'
import Nav4 from './../../../assets/img/img4.svg'
import Nav5 from './../../../assets/img/img5.svg'
import Nav6 from './../../../assets/img/img6.svg'
import Nav7 from './../../../assets/img/img7.svg'

const Sidebar = ({activePage, setActivePage}) => {



    return (
        <> 
        {/* <h1>Active page: {activePage} </h1> */}
        <div className='box' >
        <Link to='/' className={`header__link logo ${activePage == '' ? 'active' : '' }`} onClick={() => setActivePage('Logo')} >
            <img className='sitenav__img' src={Logo} alt="img"/>
        </Link>
        <Link to='/Home' className={`header__link ${activePage == 'Home' ? 'active' : '' }`} onClick={() => setActivePage('Home')} >
            <img className='sitenav__img' src={Nav1} alt="img"/>
        </Link>
        <Link to='/Circle' className={`header__link ${activePage == 'Circle' ? 'active' : '' }`} onClick={() => setActivePage('Circle')}><img className='sitenav__img' src={Nav2} alt="img"/></Link>
        <Link to='/Statistic' className={`header__link ${activePage == 'Statistic' ? 'active' : '' }`} onClick={() => setActivePage('Statistic')}><img className='sitenav__img' src={Nav3} alt="img"/></Link>
        <Link to='/Message' className={`header__link ${activePage == 'Message' ? 'active' : '' }`} onClick={() => setActivePage('Message')}><img className='sitenav__img' src={Nav4} alt="img"/></Link>
        <Link to='/Notifications' className={`header__link ${activePage == 'Notifications' ? 'active' : '' }`} onClick={() => setActivePage('Notifications')} ><img className='sitenav__img' src={Nav5} alt="img"/></Link>
        <Link to='/Settings' className={`header__link ${activePage == 'Settings' ? 'active' : '' }`} onClick={() => setActivePage('Settings')}><img className='sitenav__img' src={Nav6} alt="img"/></Link>
        <Link to='/Logout' className={`header__link logout ${activePage == 'Logout' ? 'active' : '' }`} onClick={() => setActivePage('Logout')}><img className='sitenav__img' src={Nav7} alt="img"/></Link>
        </div>
        </>
        )
    }
    export default Sidebar