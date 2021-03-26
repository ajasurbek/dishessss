import './HomePayment.scss'
import Card from '../../assets/payment/Vector.svg'
import Paypel from '../../assets/payment/Paypal.svg'
import Cash from '../../assets/payment/Wallet.svg'

const HomePayment = ({children, actipayment, setActivePayment }) => {

    

return (
<>
    <div className={`main__payment ${actipayment ? 'actipayment' : ''} `} >
        <div className="main__payment-top">
            <h3 className="payment__top-heading">
                Payment
            </h3>
            <p className="payment__top-text">
                3 payment method available
            </p>
        </div>
        <div className="payment__line-top"></div>
        <div className="main__payment-center">
            <h4 className="payment__center-heading">
                Payment Method
            </h4>
            
            <ul className="payment__center-list">
                <li className="payment__center-item">
                    <img src={Card} alt="img" className="payment__center-img" />
                    <p className="payment__center-text">
                        Credit Card
                    </p>
                </li>
                <li className="payment__center-item">
                    <img src={Paypel} alt="img" className="payment__center-img" />
                    <p className="payment__center-text">
                        Paypal
                    </p>
                </li>
                <li className="payment__center-item">
                    <img src={Cash} alt="img" className="payment__center-img" />
                    <p className="payment__center-text">
                        Cash
                    </p>
                </li>
            </ul>
            <div className="payment__center-name-wrapper">
                <p className="payment__center-name style__input">
                    Cardholder Name
                </p>
                <input type="text" value='Levi Ackerman'  className="payment__center-input-name" />
            </div>
            <div className="payment__center-number-wrapper">
                <p className="payment__center-number style__input">
                    Cardholder Number
                </p>
                <input type="ewfew" value='2564 1421 0897 1244' className="payment__center-input-number-so" />
            </div>
            <div className="payment__center-dates-wrapper">
                <div className="left-payment">
                    <p className="payment__center-date style__input">
                        Expiration Date
                    </p>
                    <input type="dfds" value='02/2022' className="payment__center-input-date" />
                </div>
                <div className="right">
                    <p className="payment__center-password style__input">
                        CVV
                    </p>
                    <input type="password" value='342' className="payment__center-input-password" />
                </div>
            </div>
            <div className="payment__line"></div>
            <div className="payment__center-order-wrapper">
                <div className="left-payment-so">
                    <p className="payment__center-date style__input">
                        Order Type
                    </p>
                    <select className="payment__middle-select-payment">
                        <option value="Dine In">Dine In</option>
                        <option value="Dine In">Dine In</option>
                        <option value="Dine In">Dine In</option>
                        <option value="Dine In">Dine In</option>
                    </select>
                </div>
                <div className="right">
                    <p className="payment__center-table style__input">
                        Table no.
                    </p>
                    <input type="table" value='140' className="payment__center-input-table" />
                </div>
            </div>
            <div className="payment__buttons">
                <button className="buttons__btn-payment-cancel" onClick={()=>{setActivePayment(!actipayment)}}>
                Cancel
                </button>
                <button className="buttons__btn-payment-confirm" onClick={()=>{setActivePayment(!actipayment)}} >
                Confirm Payment
                </button>
            </div>
        </div>
    </div>
</>
)
}

export default HomePayment