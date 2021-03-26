import './DashboardLeft.scss'

const ReportCard = ({img, name, title, price, status}) => {
    return (
        <>
        <li className="bottom__items-dashboard">
                    <div className="items__customer-dashboard">
                        <img src={img} alt="img" className="customer__img-dashboard"/>
                        <h4 className="customer__name-dashboard">
                        {name}
                        </h4>
                    </div>
                    <div className="items__menu-dashboard">
                        <p className="menu__text-dashboard">
                        {title} 
                        </p>
                    </div>
                    <div className="items__total-payment-dashboard">
                        <p className="payment__price-dashboard">
                        {price}
                        </p>
                    </div>
                    
                        <button className={`status__button-dashboard ${status.toLowerCase()}`}>
                        {status}
                        </button>
                    
                </li>
        </>
    )
}
export default ReportCard