import { useContext } from 'react';
import Logo from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import { use } from 'react';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
    const cartCtx = useContext(CartContext)
    const userProgressContext=useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) =>
         {return totalNumberOfItems+item.quantity}, 0); 
    function handleShowCart() {
        userProgressContext.showCart();
    }  
    return (
        <header id="main-header">
            <div id="title">
                <img src={Logo} alt='Food-Logo'/>
                <h1>React Food</h1>
                <div>
                <nav>
                    <Button textOnly onClick={handleShowCart}>Cart({totalCartItems})</Button>
                </nav>
                </div>
            </div>
        </header>
    )
}