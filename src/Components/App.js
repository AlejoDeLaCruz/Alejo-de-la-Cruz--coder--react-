import React, {createContext, useState} from 'react';
import NavBar from "./NavBar"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import "./firebase"

export const contexto = createContext()

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App


// import React, {createContext, useState} from 'react';
// import NavBar from './NavBar';
// import Main from "./Main"
// import { BrowserRouter } from "react-router-dom"
// import "./firebase"


// export const contexto = createContext()

//     return (
//         <>          
//             <Provider value={valorContexto}>
//                 <BrowserRouter>
//                     <NavBar/> 
//                     <Main/>
//                 </BrowserRouter>
//             </Provider> 
//         </>          
//     );

// export default App