import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductDetail = () => {
    const { id } = useParams()
    const [ product, setProduct ] = useState({})

    const fetchData = () => {
        axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/products/'+ id)
        .then(response => setProduct(response.data.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return(
        <div>
            <h2 className='text-center'>Product Detail</h2>
            <Product data={ product }  />
        </div>
    )
}
export default ProductDetail;