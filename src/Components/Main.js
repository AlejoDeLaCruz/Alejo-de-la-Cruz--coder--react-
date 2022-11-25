import React from 'react'
import { Routes , Route } from "react-router-dom"
import ItemListContainers from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainers/>}/>
                <Route path="/:category"  element={<ItemListContainers/>}/>
                <Route path="/:category/:id" element={<ItemDetailContainer/>}/>
                <Route path='/info'/>
                <Route path="/cart"/>
            </Routes>
        </main>
    )
}

export default Main