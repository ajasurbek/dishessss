import Avatar0 from '../../assets/dashboard-img/Avatar0.svg'
import Avatar1 from '../../assets/dashboard-img/Avatar(1).svg'
import Avatar2 from '../../assets/dashboard-img/Avatar(2).svg'
import Avatar3 from '../../assets/dashboard-img/Avatar(3).svg'
import Avatar4 from '../../assets/dashboard-img/Avatar(4).svg'


import ReportCard from './ReportCard'

const ReportItems = () => {

    const ReportArr = [
        {
            img: Avatar0 ,
            name: 'Eren Jaegar' ,
            title: "Spicy seasoned seafood noodles ",
            price: '$125',
            status: 'Completed'
        },
        {
            img: Avatar1 ,
            name: 'Reiner Braunn' ,
            title: "Salted Pasta with mushroom sauce",
            price: ' $145',
            status: 'Preparing'
        },
        {
            img: Avatar2 ,
            name: 'Levi Ackerman' ,
            title: "Beef dumpling in hot and sour soup",
            price: '$105',
            status: 'Pending'
        },
        {
            img: Avatar3 ,
            name: 'Historia Reiss' ,
            title: "Hot spicy fried rice with omelet",
            price: ' $45',
            status: 'Completed'
        },
        {
            img: Avatar1 ,
            name: 'Reiner Braunn' ,
            title: "Salted Pasta with mushroom sauce",
            price: ' $145',
            status: 'Preparing'
        },
        {
            img: Avatar4 ,
            name: 'Hanji Zoe' ,
            title: "Hot spicy fried rice with omelet",
            price: '$245',
            status: 'Completed'
        },
        
        {
            img: Avatar2 ,
            name: 'Levi Ackerman' ,
            title: "Beef dumpling in hot and sour soup",
            price: '$105',
            status: 'Pending'
        },
        {
            img: Avatar4 ,
            name: 'Hanji Zoe' ,
            title: "Hot spicy fried rice with omelet",
            price: '$245',
            status: 'Completed'
        }
        
        
    ]

    return (
        <>
            {
                ReportArr.map(item => (
                    <ReportCard
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        title={item.title}
                        status={item.status}
                    />
                ))
            }
        </>
    )
}
export default ReportItems