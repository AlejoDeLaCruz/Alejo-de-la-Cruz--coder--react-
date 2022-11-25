
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const productosCollection = collection(db, "productos")


    const [items,setItems] = useState([])
    const {category} = useParams()

    useEffect(() => {
        if (category) {
            const filtro = query(productosCollection, where("category", "==", category))
            const consulta = getDocs(filtro)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        } 
        else {
            const consulta = getDocs(productosCollection)
            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })

            }
        }, [category]);

    return (
        <>
            <div>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items = {items}/>}
            </div>
        </>
        
    )
}


export default ItemListContainer;


// import React from 'react';
// import { collection, getDocs, query, where } from "firebase/firestore"
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemList from './ItemList';
// import { db } from "./firebase";
// import {getProductsByCategory, getProducts} from "./Data/productos";




// const ItemListContainer = () => {

//     const productosCollection = collection(db, "productos")


//     const [items,setItems] = useState([])
//     const {category} = useParams()

//     useEffect(() => {
//         if (category) {
//             setTimeout(() => {
//                 getProductsByCategory(category).then((products) => {
//                     setItems(products);
//                 });
//             });
//         } 
//         else {
//             getProducts().then((products) => {
//                 setItems(products);
//                 });
//             }
//         }, [category]);

//     return (
//         <>
//             <div>
//             {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items = {items}/>}
//             </div>
//         </>
        
//     )
// }

// export default ItemListContainer;