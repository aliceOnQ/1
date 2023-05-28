import { Button } from "antd"
import NavLink from '../NavLink';
import styles from './navbar2.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function NavBar2() {
    
    const NavBar2Content = () => (
        <>
            <NavLink to="/products/category/album" id="1"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                ALBUM
            </NavLink>
            <NavLink to="/products/category/photobook" id="2"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                PHOTOBOOK
            </NavLink>
            <NavLink to="/products/category/concert" id="3"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                CONCERT
            </NavLink>
            <NavLink to="/products/category/fashion" id="4"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                FASHION
            </NavLink>
            <NavLink to="/products/category/exclusive" id="5"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                EXCLUSIVE
            </NavLink>

        </>
    )

    return (
        <>
            <div className={styles.navBar2}>
                <Button  type="text">
                    <LeftOutlined style={{ color: "#434868", height: "2em" }} />
                </Button>
                <section className={styles.content} ><NavBar2Content/></section>
                <Button  type="text">
                    <RightOutlined style={{ color: "#434868", height: "2em" }} />
                </Button>
            </div>

        </>

    );
}