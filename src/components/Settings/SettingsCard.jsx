import Img1 from '../../assets/dishes-img/img1.png'
import Img2 from '../../assets/dishes-img/img2.png'
import Img3 from '../../assets/dishes-img/img3.png'
import Img4 from '../../assets/dishes-img/img4.png'
import Img5 from '../../assets/dishes-img/img4.png'
import Edit from '../../assets/img/edit.svg'
import Card from '../../assets/settings-img/AddProduct.svg'

const SettingsCard = () => {
return (
<>
    <ul className="settings-center-list">
        <li className="settings-center__itemss">
            <img src={Card} alt="ewde" /> </li>
        <li className="settings-center__items">
            <img src={Img1} alt="img" className='img__settings' />
            <p className="items__text-settings">
                Spicy seasoned seafood noodles
            </p>
            <div className="count__wrapper">
                <span className="items__price-settings">
                    $ 2.69
                </span>
                <div className="cir"></div>
                <span className="items__price-settings-count">
                    30 Bowls
                </span>
            </div>
            <button className="items__numbers">
                <img src={Edit} alt="img" className="items__img-set" />
                Edit dish
            </button>
        </li>
        <li className="settings-center__items">
            <img src={Img2} alt="img" className='img__settings' />
            <p className="items__text-settings">
                Spicy seasoned seafood noodles
            </p>
            <div className="count__wrapper">
                <span className="items__price-settings">
                    $ 2.29
                </span>
                <div className="cir"></div>
                <span className="items__price-settings-count">
                    20 Bowls
                </span>
            </div>
            <button className="items__numbers">
                <img src={Edit} alt="img" className="items__img-set" />
                Edit dish
            </button>
        </li>
        <li className="settings-center__items">
            <img src={Img3} alt="img" className='img__settings' />
            <p className="items__text-settings">
                Spicy seasoned seafood noodles
            </p>
            <div className="count__wrapper">
                <span className="items__price-settings">
                    $ 2.29
                </span>
                <div className="cir"></div>
                <span className="items__price-settings-count">
                    20 Bowls
                </span>
            </div>
            <button className="items__numbers">
                <img src={Edit} alt="img" className="items__img-set" />
                Edit dish
            </button>
        </li>
        <li className="settings-center__items">
            <img src={Img4} alt="img" className='img__settings' />
            <p className="items__text-settings">
                Spicy seasoned seafood noodles
            </p>
            <div className="count__wrapper">
                <span className="items__price-settings">
                    $ 2.29
                </span>
                <div className="cir"></div>
                <span className="items__price-settings-count">
                    20 Bowls
                </span>
            </div>
            <button className="items__numbers">
                <img src={Edit} alt="img" className="items__img-set" />
                Edit dish
            </button>
        </li>
        <li className="settings-center__items">
            <img src={Img5} alt="img" className='img__settings' />
            <p className="items__text-settings">
                Spicy seasoned seafood noodles
            </p>
            <div className="count__wrapper">
                <span className="items__price-settings">
                    $ 2.29
                </span>
                <div className="cir"></div>
                <span className="items__price-settings-count">
                    20 Bowls
                </span>
            </div>
            <button className="items__numbers">
                <img src={Edit} alt="img" className="items__img-set" />
                Edit dish
            </button>
        </li>
    </ul>
    <div className="settings__bottom">
        <button className="settings__bottom-btn-fr">
            Discard Changes
        </button>
        <button className="settings__bottom-sec">
            Save Changes
        </button>
    </div>
</>
)
}
export default SettingsCard