import { useState } from "react";

const ItemCount = ({handleOnAdd}) => {

    const [count, setCount] = useState(0);
    
    const handleSumar = (e) => {
        e.stopPropagation()
        setCount(count + 1);
    }

    const handleRestar = (e) => {
        console.log(e.target)
        setCount(count - 1);
    }

    const handleConfirmar = () => { 
        handleOnAdd(count)
    }

    const handleDivClick = (e) => {
        console.log(e.target)
    }

    return (
        <div onClick={handleDivClick}>
            <div className="counter-actions">
                <button className="btn btn-dark"id="boton-1" onClick={handleRestar}>-</button>
                <p className="product-number">{count}</p>
                <button className="btn btn-dark" id="boton-2" onClick={handleSumar}>+</button>
            </div>
            <button className="btn btn-secondary" onClick={handleConfirmar} >Confirmar</button>
        </div>
    )

}

export default ItemCount