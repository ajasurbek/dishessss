
import OrderContent from './OrderContent'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";


import './HomeRight.scss'
const HomeRightSide = ({actipayment, setActivePayment}) => {
    const { path, url } = useRouteMatch();

return (
<>
    <div className={`right__main ${actipayment ? 'actipayment' : '' } `}>
        <div className="right__top">
            <h2 className="top__heading-home">
                Orders #34562
            </h2>
            <div className="top__buttons">
                <Link  className="top__bottons-home bottom__pink">
                    Dine In
                </Link>
                <Link  className="top__bottons-home">
                    To Go
                </Link>
                <Link  className="top__bottons-home">
                    Delivery
                </Link>
            </div>
        </div>
        <div className="right__center-home">
            <h5 className="center__heading-home-item">
                Item
            </h5>
            <div className="wra">
                <h5 className="center__heading-home-qty">
                    Qty
                </h5>
                <h5 className="center__heading-home-pr">
                    Price
                </h5>
            </div>
        </div>
        <div className="line home__line"></div>
        <div className="right__center">
        <OrderContent />
        {/* <Switch>
        <Route exact path={`${path}/dine`}>
        <div className="di">
        <OrderContent />
        </div>
        </Route>
        <Route path={`${path}/go`}>
        <div className="di">
        <h1>najot talim</h1>
        </div>
        </Route>
        <Route path={`${path}/delivery`}>
        <div className="di">
        tugadi
        </div>
        </Route>
      </Switch> */}
            
        </div>
        <div className="right__bottom">
            <div className="bottom__top-home first">
                <p className="bottom__top-text">
                    Discount
                </p>
                <p className="bottom__top-price">
                    $0
                </p>
            </div>
            <div className="bottom__top-home">
                <p className="bottom__top-text">
                    Sub total
                </p>
                <p className="bottom__top-price">
                    $ 21,03
                </p>
            </div>
            <div className="bottom__bottom">
                <button className="bottom__button" onClick={()=> {setActivePayment(!actipayment)}}>
                    Continue to Payment
                </button>
            </div>
        </div>
    </div>
</>
)
}
export default HomeRightSide