import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "스시", amount: 2, price: 25000 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>총 가격</span>
        <span>25000원</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>닫기</button>
        <button className={classes.button}>주문하기</button>
      </div>
    </Modal>
  );
};
export default Cart;
