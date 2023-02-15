import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'

import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})


    useEffect( ()=>{

       let productSelected = products.find( prod => prod.id === Number(id) )

        setProduct( productSelected )

    },[])


  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer