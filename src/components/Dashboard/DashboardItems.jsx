import DashboardCard from './DashboardCard'
import Dolor from '../../assets/dashboard-img/dolor.svg'
import Izonbran from '../../assets/dashboard-img/izon.svg'
import ArrowRed from '../../assets/dashboard-img/arrow-red.svg'
import ArrowGreen from '../../assets/dashboard-img/arrow-green.svg'
import Contact from '../../assets/dashboard-img/contact.svg'

const DashboardItems = () => {

    const DashboardArr = [

        {
            img: Dolor ,
            arrow: ArrowGreen ,
            rate: "+32.40%",
            price: '$10,243.00',
            
            overall: 'Total Revenue'
        },
        {
            img: Izonbran ,
            arrow: ArrowGreen ,
            rate: "+12.40%",
            price: '23,456',
            
            overall: 'Total Dish Ordered'
        },
        {
            img: Contact ,
            arrow: ArrowGreen ,
            rate: "+2.40%",
            price: '1,234',
            overall: 'Total Customer'
        }
        
        
    ]

    return (
        <>
            {
                DashboardArr.map(item => (
                    <DashboardCard
                        img={item.img}
                        rate={item.rate}
                        price={item.price}
                        arrow={item.arrow}
                        overall={item.overall}
                    />
                ))
            }
        </>
    )
}
export default DashboardItems