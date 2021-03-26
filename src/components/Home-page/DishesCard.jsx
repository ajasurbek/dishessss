import './HomeLeftTop.scss'

const DishesCard = ({img,title,price, availables }) => {
    return (
        <>
         <li className="bottom__items-home new__home-items">
                <img src={img} alt="img" className='items__home-img-home' />
                    <p className="items__text-home">
                    {title}
                    </p>
                    <span className="items__price-home">
                    {price}
                    </span>
                    <span className="items__numbers-home">
                    {availables}
                    </span>
                </li>
         
        </>
    )
}

export default DishesCard