import { useEffect, useState } from "react"

const Cart = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    let cartProducts = JSON.parse(localStorage.getItem("products"))
    if (cartProducts) {
      setProducts(cartProducts)
    }
  }, [])
  // console.log(products, "product in cart");
  const handleRemove = (id)=>{
     let filterProducts = products.filter((item)=>item.id !==id)
     setProducts(filterProducts)
     localStorage.setItem("products",JSON.stringify(filterProducts))
    
  }
  return (
    <div className='cart-container'>
      <h2 className="cart-heading">Cart Items</h2>
      {products.map((product) => (
        <div className="cart-items" key={product.id}>
          <div className="cart-item">
            <div className="flex">
              <img src={product.thumbnail} alt="product-image" className="cart-image" />
              <p>{product.title}</p>
            </div>
            <button className="remove-btn" onClick={()=>handleRemove(product.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart