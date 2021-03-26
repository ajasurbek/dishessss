import Img1 from '../../assets/dishes-img/img1.png'
import Img2 from '../../assets/dishes-img/img2.png'
import Img3 from '../../assets/dishes-img/img3.png'
import Img4 from '../../assets/dishes-img/img4.png'
import Img5 from '../../assets/dishes-img/img4.png'
import Img6 from '../../assets/dishes-img/img6.png'
import Img7 from '../../assets/dishes-img/img7.png'
import Img8 from '../../assets/dishes-img/img8.png'
import Img9 from '../../assets/dishes-img/img9.png'
import Delet from '../../assets/dishes-img/delete.svg'

const OrderContent = () => {
    return (
        <>
        <ul className="center__list-home">
                <li className="center__items-home">
                    <div className="items__top-home">
                        <div className="items__text-home-wrapper">
                            <img src={Img1} alt="img" className="items__img-home" />
                            <div className="home__text-wrapper">
                                <p className="items__text-home-right">
                                    Spicy seasoned sea...
                                </p>
                                <span className="items__price">
                                    $ 2.29
                                </span>
                            </div>
                        </div>
                        <div className="second__wrapper-home">
                            <input type="text" value="2" className="items__input-qty" />
                            <p className="items__price-text">
                                $ 4,58
                            </p>
                        </div>
                    </div>
                    <div className="items__center-home-wr">
                        <input type="text" value="Please, just a little bit spicy only."
                            className="items__center-input another" />
                        <img src={Delet} alt="img" className="items__img-home-delete" />
                    </div>
                </li>
                <li className="center__items-home">
                    <div className="items__top-home">
                        <div className="items__text-home-wrapper">
                            <img src={Img2} alt="img" className="items__img-home" />
                            <div className="home__text-wrapper">
                                <p className="items__text-home-right">
                                    Spicy seasoned sea...
                                </p>
                                <span className="items__price">
                                    $ 2.29
                                </span>
                            </div>
                        </div>
                        <div className="second__wrapper-home">
                            <input type="text" value="1" className="items__input-qty" />
                            <p className="items__price-text">
                                $ 4,58
                            </p>
                        </div>
                    </div>
                    <div className="items__center-home-wr">
                        <input type="text" placeholder='Order Note...' className="items__center-input" />
                        <img src={Delet} alt="img" className="items__img-home-delete" />
                    </div>
                </li>
                <li className="center__items-home">
                    <div className="items__top-home">
                        <div className="items__text-home-wrapper">
                            <img src={Img3} alt="img" className="items__img-home" />
                            <div className="home__text-wrapper">
                                <p className="items__text-home-right">
                                    Spicy seasoned sea...
                                </p>
                                <span className="items__price">
                                    $ 2.29
                                </span>
                            </div>
                        </div>
                        <div className="second__wrapper-home">
                            <input type="text" value="3" className="items__input-qty" />
                            <p className="items__price-text">
                                $ 4,58
                            </p>
                        </div>
                    </div>
                    <div className="items__center-home-wr">
                        <input type="text" placeholder='Order Note...' className="items__center-input" />
                        <img src={Delet} alt="img" className="items__img-home-delete" />
                    </div>
                </li>
                <li className="center__items-home">
                    <div className="items__top-home">
                        <div className="items__text-home-wrapper">
                            <img src={Img4} alt="img" className="items__img-home" />
                            <div className="home__text-wrapper">
                                <p className="items__text-home-right">
                                    Spicy seasoned sea...
                                </p>
                                <span className="items__price">
                                    $ 2.29
                                </span>
                            </div>
                        </div>
                        <div className="second__wrapper-home">
                            <input type="text" value="1" className="items__input-qty" />
                            <p className="items__price-text">
                                $ 4,58
                            </p>
                        </div>
                    </div>
                    <div className="items__center-home-wr">
                        <input type="text" placeholder='Order Note...' className="items__center-input" />
                        <img src={Delet} alt="img" className="items__img-home-delete" />
                    </div>
                </li>

                <li className="center__items-home">
                    <div className="items__top-home">
                        <div className="items__text-home-wrapper">
                            <img src={Img5} alt="img" className="items__img-home" />
                            <div className="home__text-wrapper">
                                <p className="items__text-home-right">
                                    Spicy seasoned sea...
                                </p>
                                <span className="items__price">
                                    $ 2.29
                                </span>
                            </div>
                        </div>
                        <div className="second__wrapper-home">
                            <input type="text" value="1" className="items__input-qty" />
                            <p className="items__price-text">
                                $ 4,58
                            </p>
                        </div>
                    </div>
                    <div className="items__center-home-wr">
                        <input type="text" placeholder='Order Note...' className="items__center-input" />
                        <img src={Delet} alt="img" className="items__img-home-delete" />
                    </div>
                </li>

                <li className="center__items-home">
                    <div className="items__top-home">
                        <div className="items__text-home-wrapper">
                            <img src={Img6} alt="img" className="items__img-home" />
                            <div className="home__text-wrapper">
                                <p className="items__text-home-right">
                                    Spicy seasoned sea...
                                </p>
                                <span className="items__price">
                                    $ 2.29
                                </span>
                            </div>
                        </div>
                        <div className="second__wrapper-home">
                            <input type="text" value="1" className="items__input-qty" />
                            <p className="items__price-text">
                                $ 4,58
                            </p>
                        </div>
                    </div>
                    <div className="items__center-home-wr">
                        <input type="text" placeholder='Order Note...' className="items__center-input" />
                        <img src={Delet} alt="img" className="items__img-home-delete" />
                    </div>
                </li>

            </ul>
            
        </>
    )
}
export default OrderContent