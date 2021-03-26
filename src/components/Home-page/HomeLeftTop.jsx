import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import DashesItem  from './DishesItems'
import './HomeLeftTop.scss'

import Img1 from '../../assets/dishes-img/img1.png'
import Img2 from '../../assets/dishes-img/img2.png'
import Img3 from '../../assets/dishes-img/img3.png'
import Img4 from '../../assets/dishes-img/img4.png'
import Img5 from '../../assets/dishes-img/img4.png'
import Img6 from '../../assets/dishes-img/img6.png'
import Img7 from '../../assets/dishes-img/img7.png'
import Img8 from '../../assets/dishes-img/img8.png'
import Img9 from '../../assets/dishes-img/img9.png'


const HomeLeftTop = () => {

    const { path, url } = useRouteMatch();

return (
<>
    <div className="main">
        <div className="top__home">
            <div className="top__left-home">
                <h2 className="top__left-heading-home">
                    Jaegar Resto
                </h2>
                <h6 className="top__left-date-home">
                    Tuesday, 2 Feb 2021
                </h6>
            </div>
            <div className="top__right-home">
            <input className="top__right-input search__input" type="text" placeholder="Search for food, coffe, etc.." />
                
            </div>
        </div>
        <div className="center__btn-home">
            <Link to={`${url}/hotDishes`} className="center__buttons-home hot-pink">Hot Dishes</Link>
            <Link to={`${url}/coldDishes`} className="center__buttons-home">Cold Dishes</Link>
            <Link to={`${url}/soup`} className="center__buttons-home">Soup</Link>
            <Link to={`${url}/grill`} className="center__buttons-home">Grill</Link>
            <Link to={`${url}/appetizer`} className="center__buttons-home">Appetizer</Link>
            <Link to={`${url}/dessert`} className="center__buttons-home">Dessert</Link>
        </div>
        <div className="line"></div>
        <div className="center__middle-home">
            <h1 className="center__middle-heading-home">
                Choose Dishes
            </h1>
            <select className="center__middle-selct-home">
                <option value="Dine In">Dine In</option>
                <option value="Dine In">Dine In</option>
                <option value="Dine In">Dine In</option>
                <option value="Dine In">Dine In</option>
            </select>
        </div>
        <div className="bottom-home">
        <Switch>
        <Route exact path={`${path}/hotDishes`}>
        <ul className="bottom__home-list-home">
                 <DashesItem />
            </ul>
        </Route>
        <Route path={`${path}/coldDishes`}>
        <div className="di">
        <h1 className='heading__main' >Cold Dishes tugadi</h1>
        </div>
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

export default HomeLeftTop