import Img1 from '../../assets/dishes-img/img1.png'
import './HomeLeftTop.scss'
import DishesCard from './DishesCard'
import Img2 from '../../assets/dishes-img/img2.png'
import Img3 from '../../assets/dishes-img/img3.png'
import Img4 from '../../assets/dishes-img/img4.png'
import Img5 from '../../assets/dishes-img/img4.png'
import Img6 from '../../assets/dishes-img/img6.png'
import Img7 from '../../assets/dishes-img/img7.png'
import Img8 from '../../assets/dishes-img/img8.png'
import Img9 from '../../assets/dishes-img/img9.png'

const DashesItem = () => {

    const DashesArr = [

        {
            img: Img1 ,
            title: "Spicy seasoned seafood noodles",
            price: '$ 2.29',
            availables: '20 Bowls available'
        },
        {
            img: Img2,
            title: "Salted Pasta with mushroom sauce",
            price: '$ 2.69',
            availables: '11 Bowls available'
        },
        {
            img: Img3,
            title: "Beef dumpling in hot and sour soup",
            price: '$ 2.99',
            availables: '16 Bowls available '
        },
        {
            img: Img4,
            title: "Healthy noodle with spinach leaf",
            price: '$ 3.29',
            availables: '22 Bowls available'
        },
        {
            img: Img5,
            title: "Hot spicy fried rice with omelet",
            price: '$ 3.49',
            availables: '13 Bowls available'
        },
        {
            img: Img6,
            title: "Beef dumpling in hot and sour soup",
            price: '$ 2.99',
            availables: '16 Bowls available '
        },
        {
            img: Img7,
            title: "Healthy noodle with spinach leaf",
            price: '$ 3.29',
            availables: '22 Bowls available'
        },
        {
            img: Img8,
            title: "Hot spicy fried rice with omelet",
            price: '$ 3.49',
            availables: '13 Bowls available'
        },
        {
            img: Img9,
            title: "Spicy instant noodle with special omelette",
            price: '$ 3.59',
            availables: '17 Bowls available'
        }
    ]

    return (
        <>
            {
                DashesArr.map((item, index) => (
                    <DishesCard
                    key={index}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        availables={item.availables}
                    />
                ))
            }
        </>
    )
}
export default DashesItem