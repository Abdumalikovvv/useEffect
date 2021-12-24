import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      const proItem = res.data;
      setProducts(proItem)
      console.log(proItem)
    })
  })


  return (
    <main>
    {products.map(product => {
      return (
        <div className='card' key={product.id}>
        <img src={product.image}></img>
        <div className='product-info'>
        <h1>{product.title}</h1>
        <p>Category:{product.category}</p>
        <a href='#'>Buy ${product.category}</a>
        </div>
        </div>
      )
    })}
    
    </main>
  )
}

export default App;