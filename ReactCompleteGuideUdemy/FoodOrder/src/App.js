import {Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
  // const [cartIsShown, setCartIsShown] = useState(false);
  // const showCartHandler = () =>{
  //   setCartIsShown(true);
  // };
  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // }

  return (
    <Fragment>
      {/* {cartIsShown && <Cart onClose={hideCartHandler}/>} */}
      <Cart/>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
