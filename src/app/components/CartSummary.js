const CartSummary = ({ subTotal, shipping, total }) => {
    return (
      <div className={styles.valorTotal}>
        <table>
          <tr>
            <td>Sub-Total</td>
            <td>R${subTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Frete</td>
            <td>R${shipping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>R${total.toFixed(2)}</td>
          </tr>
        </table>
      </div>
    );
  };
  
  export default CartSummary;
  