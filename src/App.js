import './App.css';
import React, { useState, useEffect } from "react";

const Products = [
  { Id: "product001", name: "Apple", isDeleted: false, checked: false },
  { Id: "product002", name: "Samsung", isDeleted: false, checked: false },
  { Id: "product003", name: "Oppo", isDeleted: false, checked: false },
  { Id: "product004", name: "Xiaomi", isDeleted: false, checked: false },
];

const Product = ({product, returnData}) => {
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   setChecked(product.checked)
  // })
  const handleChecked = () => { 
    setChecked(!checked);
    //console.log(checked);
    returnData(product.Id)
  }

  return (
    <div>
      <div>
        <input type="checkbox" name="" id="" checked={checked} onChange={() => handleChecked()} />
      </div>
      <div>
        Id: {product.Id}
      </div>
      <div>
        Name: {product.name}
      </div>
    </div>
  )
}

const App = () => {
  const [listProduct, setListProduct] = useState(Products);

  useEffect(() => {
    setListProduct(Products);
  });

  //console.log(listProduct);

  const handleReturnData = (idProduct) => {
    let prod = listProduct
    let objIndex  = listProduct.findIndex(x => x.Id == idProduct)
    prod[objIndex].checked = !prod[objIndex].checked;  
    console.log("prod",listProduct);
    setListProduct(prod)

  }

  const handleSubmit = () => {
    let prodChecked = listProduct.filter(x => x.checked == true);
    console.log(prodChecked);
  }

  const handleCheckAll = () => {
    let objIndex  = listProduct.map((prod, index) => (prod.checked = true) )
    console.log("Check",objIndex);
    //setListProduct(checkAll);
  }

  return (
    <div style={{ padding: '20px' }}>
      <button type="submit" onClick={() => handleCheckAll()}>Check All</button>
      {
        listProduct.map((product, index) => (
          <Product product={product} returnData={(id) => handleReturnData(id)} />
        ))
      }
      <button type="submit" onClick={() => handleSubmit()}>Đồng ý</button>
      
    </div>
  );
};
export default App;
