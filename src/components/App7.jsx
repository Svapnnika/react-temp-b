import { useState } from "react"
import "./App7.css"
export default function App7() {
    const [items, setItems] = useState([])
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")

    const handleSubmit = () => {
        const newItem = {
            product: product,
            price: price,
            quantity: quantity
        };
        setItems([...items, newItem]);
        setProduct("");
        setPrice("");
        setQuantity("");
      };
  return (
    <div className="App-Row">
        <div>
      <h3>Billing Form</h3>
      <p><input type="text"
      placeholder="Product Name"
      value={product}
      onChange={(e) => setProduct(e.target.value)}
      /></p>
      <p><input type="number"
      placeholder="Price of each item"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      /></p>
      <p><input type="number"
      placeholder="Quantity"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      /></p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      </div>
      <p></p>
      <div>
        <h4>Items</h4>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items &&
            items.map((item, index) => (
                <tr key={index}>
                    <td>{item.product}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


