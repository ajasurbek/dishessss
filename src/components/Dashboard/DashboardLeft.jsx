import './DashboardLeft.scss'

// import Dolor from '../../assets/dashboard-img/dolor.svg'
// import Izonbran from '../../assets/dashboard-img/izon.svg'
// import ArrowRed from '../../assets/dashboard-img/arrow-red.svg'
// import ArrowGreen from '../../assets/dashboard-img/arrow-green.svg'
// import Contact from '../../assets/dashboard-img/contact.svg'
import Filter from '../../assets/dashboard-img/filter.svg'
import DashboardItems from './DashboardItems'
import ReportItems from './ReportItems'
// import Avatar0 from '../../assets/dashboard-img/Avatar0.svg'
// import Avatar1 from '../../assets/dashboard-img/Avatar(1).svg'
// import Avatar2 from '../../assets/dashboard-img/Avatar(2).svg'
// import Avatar3 from '../../assets/dashboard-img/Avatar(3).svg'
// import Avatar4 from '../../assets/dashboard-img/Avatar(4).svg'

const DashboardLeftSide = () => {
return (
<>
    <div className="main__dashboard-left">
        <div className="top__dashboard">
            <div className="top__left-dashboard">
                <h2 className="top__left-dashboard-heading">
                    Dashboard
                </h2>
                <h6 className="top__left-dashboard-date">
                    Tuesday, 2 Feb 2021
                </h6>
            </div>
        </div>
        <div className="dashboard__line"></div>
        <div className="center__dashboard">
            <ul className="center__dashboard-list">
                
                <DashboardItems />
            </ul>
        </div>
        <div className="all">
        <div className="middle__dashboard">
            <div className="middle__top-dashboard">
                <h2 className="miidle__heading-dashboard">
                    Order Report
                </h2>
                <button className="middle__filter-wrapper">
                    <img src={Filter} alt="img" className="middle__filter-img" />
                    <h4 className="middle__filter-heading">
                        Filter Order
                    </h4>
                </button>
            </div>
            <div className="middle__bottom-dashboard">
                <div className="dash__left">
                <p className="middle__text-dashboard customer">
                    Customer
                </p>
                <p className="middle__text-dashboard menu">
                    Menu
                </p>
                </div>
                <div className="dash__right">
                <p className="middle__text-dashboard payment">
                    Total Payment
                </p>
                <p className="middle__text-dashboard status">
                    Status
                </p>
                </div>
            </div>
        </div>
        <div className="line__dashboard"></div>
        <div className="bottom__dashboard">
             <ul className="bottom__list-dashboard">
             <ReportItems />
            </ul> 
            
        </div>
        </div>
    </div>
</>
)
}

export default DashboardLeftSide