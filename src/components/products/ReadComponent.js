import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ReadComponent = ({ pno }) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        })
    }, [pno])

    return (
        <div>
            <div className="m-2 p-2 border-2">
                <h1>Input</h1>
                <div className="m-2 p-2 border-2">
                    {product.pname}
                </div>
                <div className="m-2 p-2 border-2">
                    {product.pdesc}
                </div>
                <div className="m-2 p-2 border-2">
                    {product.price}
                </div>
                <div className="m-2 p-2 border-2">
                    <ul className="list-none">
                        {product.images.map((fname, idx) =>
                            <li key={idx}>
                                <img src={`http://localhost/${fname}`} alt="빵통조림"></img>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReadComponent;