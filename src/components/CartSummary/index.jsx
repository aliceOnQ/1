import { useState } from "react";
import { Badge, theme } from "antd";
import { CartIcon } from "./Icons";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cartSlice";

import styles from "./cartsummary.module.css"

export default function CartSummary() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;


    return (
        <nav onClick={toggleModal} className={styles.cartSummary} >
            <Badge count={count} color="red" style={{ color: 'white',marginTop:'5px' }}>
                <CartIcon size={40} />
            </Badge>

        </nav>
    );
}