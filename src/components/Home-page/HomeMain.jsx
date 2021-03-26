import HomeLeftTop from './HomeLeftTop'
import HomeRightSide from './HomeRight'
import HomePayment from './HomePayment'
import { useState } from 'react'

import './HomeMain.scss'

const HomeMain = () => {
    const [ activePayment, SetActivePayment ] = useState(false)

    return (
        <>
        <div className="main__wrapper">
            <HomeLeftTop />
            <HomePayment actipayment={activePayment} setActivePayment={SetActivePayment}  />
            
            <HomeRightSide actipayment={activePayment} setActivePayment={SetActivePayment} />
        </div>
        
        </>
    )
}
export default HomeMain