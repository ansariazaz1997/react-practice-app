import React, { useEffect } from 'react'
import { useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const response = await res.json()
    setProducts(response.products)
  }
  useEffect(() => {
    getProducts()
  }, [])
  const addProductToCart = (product)=>{
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product)
    localStorage.setItem("products",JSON.stringify(products))
    alert("Added to cart")
  }

  return (
    <div className='product-page'>
      <h2>Products</h2>
      <div className='products'>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <div className='card'>
                <img src={product.thumbnail} alt="product" />
                  <button className='add-btn' onClick={()=>addProductToCart(product)}>Add Product</button>
                <p>{product.title}</p>
                <p>Price: $ {product.price}</p>
              </div>
            </div>
          ))
        ):(
          <div className='loading'>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Products