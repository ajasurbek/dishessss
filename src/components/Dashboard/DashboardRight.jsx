import './DashboardRight.scss'
import Img1 from '../../assets/dishes-img/img1.png'
import Img2 from '../../assets/dishes-img/img2.png'
import Img3 from '../../assets/dishes-img/img3.png'
import Circle from '../../assets/dashboard-img/Circle.svg'
// import Img4 from '../../assets/dishes-img/img4.png'
// import Img5 from '../../assets/dishes-img/img4.png'
// import Img6 from '../../assets/dishes-img/img6.png'
// import Img7 from '../../assets/dishes-img/img7.png'
// import Img8 from '../../assets/dishes-img/img8.png'
// import Img9 from '../../assets/dishes-img/img9.png'


const DashboardRightSide = () => {
return (
<>
    <div className="main__dashboard-most">
        <div className="most__top">
            <div className="top__top">
                <h4 className="top___heading">
                    Most Ordered
                </h4>
                <select className="top__select">
                    <option value="Dine In">Dine In</option>
                    <option value="Dine In">Dine In</option>
                    <option value="Dine In">Dine In</option>
                    <option value="Dine In">Dine In</option>
                </select>
            </div>
            <div className="most__line"></div>
            <div className="most__center">
                <ul className="most__center">
                    <li className="most__items">
                        <img src={Img1} alt="img" className="most__items-img" />
                        <div className="most__items-wrapper">
                            <p className="most__items-text">
                                Spicy seasoned seafood noodles
                            </p>
                            <span className="most__items-span">
                                200 dishes ordered
                            </span>
                        </div>
                    </li>
                    <li className="most__items">
                        <img src={Img2} alt="img" className="most__items-img" />
                        <div className="most__items-wrapper">
                            <p className="most__items-text">
                                Salted pasta with mushroom sauce
                            </p>
                            <span className="most__items-span">
                                120 dishes ordered
                            </span>
                        </div>
                    </li>
                    <li className="most__items">
                        <img src={Img3} alt="img" className="most__items-img" />
                        <div className="most__items-wrapper">
                            <p className="most__items-text">
                                Beef dumpling in hot and sour soup
                            </p>
                            <span className="most__items-span">
                                80 dishes ordered
                            </span>
                        </div>
                    </li>
                </ul>
                <button className="most__button">
                    View All
                </button>
            </div>
        </div>
        <div className="most__bottom">
            <div className="most__bottom-top">
                <h4 className="most__bottom-heading">
                    Most Type of Order
                </h4>
                <select className="most__bottom-select">
                    <option value="Dine In">Dine In</option>
                    <option value="Dine In">Dine In</option>
                    <option value="Dine In">Dine In</option>
                    <option value="Dine In">Dine In</option>
                </select>
            </div>
            <div className="most__bottom-line"></div>
            <div className="most__bottom-bottom">
                <img src={Circle} alt="" className="most__bottom-img" />
                <ul className="most__list">
                    
                <li className="most__items-bottom">
                        <div className="most__circle pink"></div>
                        <div className="most__bottom-wrapper">
                            <p className="most__bottom-wrapper-title">
                            Dine In
                            </p>
                            <span className="most__bottom-wrapper-customers">
                            200 customers
                            </span>
                        </div>
                    </li>
                    <li className="most__items-bottom">
                        <div className="most__circle yellow"></div>
                        <div className="most__bottom-wrapper">
                            <p className="most__bottom-wrapper-title">
                            To Go
                            </p>
                            <span className="most__bottom-wrapper-customers">
                                122 customers
                            </span>
                        </div>
                    </li>
                    <li className="most__items-bottom">
                        <div className="most__circle blue"></div>
                        <div className="most__bottom-wrapper">
                            <p className="most__bottom-wrapper-title">
                            Delivery
                            </p>
                            <span className="most__bottom-wrapper-customers">
                                264 customers
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</>
)
}
export default DashboardRightSide