import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {
    const NavBarContent = () => (
        <>
            <NavLink to="/artist"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Artist
            </NavLink>
            <NavLink to="/about"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                About
            </NavLink>
            <NavLink to="/shop"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                Shop
            </NavLink>
        </>
    )
    return (
        <>
        <div className={styles.navBar}>
            <NavBarContent />
        </div>
        <Drawer  
            placement="left" 
            onClose={onClose} 
            open={open} 
        >
            <div className={styles.drawer}>
                <NavBarContent />
            </div>
        </Drawer>
    </>
    );
}