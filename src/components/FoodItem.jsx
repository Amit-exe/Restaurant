import React from "react";


function FoodItem(props) {

    const increment = () => {
        
        setQuantity(quantity + 1);
        console.log(quantity);
    }
    const decrement = () => setQuantity(quantity-1);
    
    const [quantity, setQuantity] = React.useState(0);


    return <div className="foodCard">
        <img src={props.img}></img>
        <div className="rating row">
        <p className="foodname col-lg-6">{props.foodname}</p>
        <p className="foodrating col-lg-6">{props.rating}{'★'.repeat(props.rating)}</p>
        </div>
        <p><strong>₹ {props.price}</strong></p>
        {quantity===0 ? <button onClick={increment} >add+</button> : <div><span>Quantity </span><button className="quantbtn" onClick={decrement} >-</button> {quantity} <button  className="quantbtn" onClick={increment} >+</button></div>}
    </div>
}

export default FoodItem;
