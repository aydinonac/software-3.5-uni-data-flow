import styles from './ViewList.module.css';

function ViewList({ list, sum , disc}) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Disc %</th>
            <th>Total $</th>
          </tr>
        </thead>
        <tbody> 
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{parseFloat(item.price).toFixed(2)}</td>
              <td>{item.discount}</td>
              <td>{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>      
      </table>
      <div className={styles.containerSum}>
        Total cost, including discount: $ <span className={styles.sum}>{sum.toFixed(2)}</span><br />
        You saved: $ <span className={styles.sum} style={{color: 'red'}}>{disc.toFixed(2)}</span><br />
      </div>
    </div>
  )
}
export default ViewList;
