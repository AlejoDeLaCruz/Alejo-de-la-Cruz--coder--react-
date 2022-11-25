import { useState } from "react"
import { useCarrito } from "./CustomProvider"
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

  const { agregarProducto } = useCarrito()
  const [cantidad, setCantidad] = useState(0)
  const [confirmado, setConfirmado] = useState(false)


  const handleOnAdd = (cantidad) => {
    console.log("Se agregaron " + cantidad + " productos")
    console.log(item)
    setCantidad(cantidad)
    setConfirmado(true)
    agregarProducto(item,cantidad)
    setCantidad(0)
    alert("agregaste " + cantidad + " productos al carrito")
  }

  return (
    <>
      <div className="card" id='carta-detallada'>
        <div className="card-body">
            <img className="imagen" src={item.img}/>
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.info}</p>
        </div>
        </div>
          <div id='carta-detallada-2'>
            <div className="card-body-2">
              <h5 className="card-text">{item.descripcion}</h5>
              <h3 className='card-price'>$ {item.precio}</h3>
              {/* <ItemCount init={cantidad} handleOnAdd={handleOnAdd} /> */}
              {cantidad >= 1
              ?
              <>
              <Link to={'/cart'} className="btn btn-secondary">Ir al carrito</Link> </>
              :
              <>
              <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />
              <Link to={'/cart'} className="btn btn-secondary">Ir al carrito</Link>
              </>
              }

            {/* {confirmado && <button onClick={handleClick} className="btn btn-secondary">Agregar al carrito</button>} */}
          </div>
      </div>
    </>
  )
}

export default ItemDetail

























// import React from 'react';
// import { useContext, useState } from "react"
// import { contexto, useCarrito } from "./CustomProvider"
// import ItemCount from './ItemCount';

// const ItemDetail = ({item}) => {

//   const handleOnAdd = (cantidad) => {
//     if(cantidad < 1){
//       console.log("No se puede agregar")

//     }
//     else{
//       console.log("Se agregaron " + cantidad + " productos")
//       console.log(item.nombre)
//     }

// }

//   return (
//     <>
//         <div className="card" id='carta-detallada'>
//               <div className="card-body">
//                   <img className="imagen" src={item.img}/>
//                   <h5 className="card-title">{item.nombre}</h5>
//                   <p className="card-text">{item.info}</p>
//               </div>
//         </div>
//         <div id='carta-detallada-2'>
//               <div className="card-body-2">
//                   <h5 className="card-text">{item.descripcion}</h5>
//                   <h3 className='card-price'>$ {item.precio}</h3>
//                   <ItemCount handleOnAdd={handleOnAdd}/>
//               </div>
//         </div>
//       </>
//     )
//   }

// export default ItemDetail