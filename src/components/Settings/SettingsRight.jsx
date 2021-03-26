import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import './SettingsRight.scss'
import Filter from '../../assets/dashboard-img/filter.svg'
import SettingsCard from './SettingsCard'

const SettingsRight = () => {

    const { path, url } = useRouteMatch();
return (
<>
    <div className="settings__right-main">
        <div className="settings__top">
        <div className="settings__right-top">
            <h2 className="settings__right-top-heading">
            Products Management
            </h2>
            <button className="settings__right-top-manage-wrapper">
                <img src={Filter} alt="ewdew" className="manage__img" />
                <h4 className="manage__title">
                    Manage Categories
                </h4>
            </button>
        </div>
        <div className="settings__right-btn">
            <Link to={`${url}/hotDishes`} className="settings__buttons">Hot Dishes</Link>
            <Link to={`${url}/coldDishes`} className="settings__buttons">Cold Dishes</Link>
            <Link to={`${url}/soup`} className="settings__buttons">Soup</Link>
            <Link to={`${url}/grill`} className="settings__buttons">Grill</Link>
            <Link to={`${url}/appetizer`} className="settings__buttons">Appetizer</Link>
            <Link to={`${url}/dessert`} className="settings__buttons">Dessert</Link>
        </div>
        </div>
<div className="line__settings"></div>
        <div className="settings-center">
            
<Switch>
        <Route exact path={`${path}/hotDishes`}>
        <div className="di">
        <SettingsCard />
        </div>
        </Route>
        <Route path={`${path}/coldDishes`}>
        <h1 className='heading__main'>
        tugadi cold dishes
        </h1>
        </Route>
        <Route path={`${path}/soup`}>
        <h1 className='heading__main'>
        tugadi soup
        </h1>
        </Route>
        <Route path={`${path}/grill`}>
        <h1 className='heading__main'>
        tugadi grill 
        </h1>
        </Route>
        <Route path={`${path}/appetizer`}>
        <h1 className='heading__main'>
        tugadi appetizer
        </h1>
        </Route>
        <Route path={`${path}/dessert`}>
        <h1 className='heading__main'>
        tugadi  dessert
        </h1>
        </Route>
      </Switch>
        </div>
        
    </div>
</>
)
}
export default SettingsRight

