import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getProduct} from "./Data/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setProduct] = useState({});
    const { id } = useParams();

    console.log(id);
    console.log(item);


    useEffect(() => {
        getProduct(id).then((item) => setProduct(item));
    }, [id]);

    return (
        <>
            <div>
                <ItemDetail item={item} />
            </div>
        </>
    );
};

export default ItemDetailContainer;