const CartItem = ({ image, title, price, quantity }) => {
    return (
      <tr>
        <td>
          <div className={styles.infoCarrinho}>
            <img src={image} alt={title} />
            <div>
              <p>{title}</p>
              <small>Valor: R${price.toFixed(2)}</small>
              <br />
              <a href="#">Remover</a>
            </div>
          </div>
        </td>
        <td>
          <form>
            <input type="number" value={quantity} readOnly />
          </form>
        </td>
        <td>R${price.toFixed(2)}</td>
      </tr>
    );
  };
  
  export default CartItem;
  