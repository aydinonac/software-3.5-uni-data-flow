import { useState } from 'react';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    const newItem = {
      name: name,
      quantity: count,
      price: price,
      discount: discount,
      total: count * price * (100-discount)/100,
    }
   const newList = [...list, newItem];
   setList(newList);

   const sum = sumTotal + newItem.total;
   const disc = discountTotal + ((count*newItem.price)-newItem.total);
   setSumTotal(sum);
   setDiscountTotal(disc);
   setCount(0);
   setName('');
   setPrice(0);
   setDiscount(0);
  }

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} disc={discountTotal}/>
    </div>
  );
}
export default Product;
