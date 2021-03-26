import './DashboardLeft.scss'

const DashboardCard = ({img,rate,price,arrow,overall }) => {
    return (
        <>
        <li className="center__dashboard-items">
                    <div className="items__top-dashboard">
                        <img src={img} alt="img" className="items__img-price" />
                        <span className="items__rate rate__green">
                            {rate}
                        </span>
                        <img src={arrow} alt="img" className="items__img-arrow" />
                    </div>
                    <div className="items__center">
                        <h3 className="items__heading">
                            {price}
                        </h3>
                    </div>
                    <div className="items__bottom">
                        <p className="items__text-dashboard">
                            {overall}
                        </p>
                    </div>
                </li>
        </>
    )
}
export default DashboardCard