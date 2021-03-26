import {
Switch,
Route,
Link,
useRouteMatch
} from "react-router-dom";

import SettingsRight from './SettingsRight'

import Heard from '../../assets/settings-img/heard.svg'
import Restaurant from '../../assets/settings-img/restaurant.svg'
import Management from '../../assets/settings-img/img2.svg'
import Security from '../../assets/settings-img/securo+ity.svg'
import Ring from '../../assets/settings-img/ring.svg'
import About from '../../assets/settings-img/about.svg'

import './SettingsLeft.scss'


const SettingsLeft = () => {

const { path, url } = useRouteMatch();

return (
<>
<div className="main__wrapper-senttings">
<h1 className='settings' >Settings</h1>
<div className="main__seti">
    <div className="settings__left-main">
        <ul className="settings__left-list">
            <li>
                <Link to={`${url}`} className="settings__left-items">
                <img src={Heard} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        Appereance
                    </p>
                    <span className="setting__items-span">
                        Dark and Light mode, Font size
                    </span>
                </div>
                </Link>
            </li>
            <li>
                <Link to={`${url}/restaurant`} className="settings__left-items">
                <img src={Restaurant} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        Your Restaurant
                    </p>
                    <span className="setting__items-span">
                        Dark and Light mode, Font size
                    </span>
                </div>
                </Link>
            </li>
            <li>
                <Link to={`${url}/management`} className="settings__left-items">
                <img src={Management} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        Products Management
                    </p>
                    <span className="setting__items-span">
                        Manage your product, pricing, etc
                    </span>
                </div>
                </Link>

            </li>
            <li>
                <Link to={`${url}/notifications`} className="settings__left-items">
                <img src={Ring} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        Notifications
                    </p>
                    <span className="setting__items-span">
                        Customize your notifications
                    </span>
                </div>
                </Link>

            </li>
            <li>
                <Link to={`${url}/security`} className="settings__left-items">
                <img src={Security} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        Security
                    </p>
                    <span className="setting__items-span">
                        Configure Password, PIN, etc
                    </span>
                </div>
                </Link>

            </li>
            <li>
                <Link to={`${url}/security`} className="settings__left-items">
                <img src={Security} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        Security
                    </p>
                    <span className="setting__items-span">
                        Configure Password, PIN, etc
                    </span>
                </div>

                </Link>

            </li>
            <li>
                <Link to={`${url}/about`} className="settings__left-items">
                <img src={About} alt="img" className="setting__items-img" />
                <div className="setting__items-wrapper-text">
                    <p className="setting__items-text">
                        About Us
                    </p>
                    <span className="setting__items-span">
                        Find out more about Posly
                    </span>
                </div>
                </Link>

            </li>
        </ul>
    </div>
    <div className="left_set">
    <Switch>
        <Route exact path={`${path}`}>
        <div className="di">
        <h1 className='set__heading' >appereance</h1>
        
        </div>
        </Route>
        <Route path={`${path}/restaurant`}>
        <div className="di">
        <h1 className='set__heading' >restaurant</h1>
        </div>
        </Route>
        <Route path={`${path}/management`}>
        <div className="ds">
        <SettingsRight/>
        </div>
        
        </Route>
        <Route path={`${path}/notifications`}>
        <div className="di">
        <h1 className='set__heading' >notifications</h1>
        </div>
        </Route>
        <Route path={`${path}/security`}>
        <div className="di">
        <h1 className='set__heading'>
        Security
        </h1>
        
        </div>
        </Route>
        <Route path={`${path}/security`}>
        <div className="di">
        <h1 className='set__heading'>
        Security
        </h1>
        
        </div>
        </Route>
        <Route path={`${path}/about`}>
        <div className="di">
        <h1 className='set__heading'>
        About
        </h1>
        
        </div>
        </Route>
      </Switch>
    
    </div>
    </div>
</div>
    

</>
)
}
export default SettingsLeft