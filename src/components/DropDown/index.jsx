import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import NavLink from '../NavLink';
import styles from './dropdown.module.css';


const items = [
    {
        label: (<NavLink to="/products/author/kanta"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            KANTA</NavLink>),
        key: '1'
    },
    {
        label: (<NavLink to="/products/author/boa"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            BoA</NavLink>),
        key: '2'
    },
    {
        label: (<NavLink to="/products/author/tvxq"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            TVXQ</NavLink>),
        key: '3'
    },
    {
        label: (<NavLink to="/products/author/sj"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            SUPER JUNIOR</NavLink>),
        key: '4'
    },
    {
        label: (<NavLink to="/products/author/snsd"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            GIRLS GENERATION</NavLink>),
        key: '5'
    },
    {
        label: (<NavLink to="/products/author/shinee"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            SHINee</NavLink>),
        key: '6'
    },
    {
        label: (<NavLink to="/products/author/fx"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            F(X)</NavLink>),
        key: '7'
    },
    {
        label: (<NavLink to="/products/author/exo"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            EXO</NavLink>),
        key: '8'
    },
    {
        label: (<NavLink to="/products/author/rv"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            RED VELVET</NavLink>),
        key: '9'
    },
    {
        label: (<NavLink to="/products/author/nct"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            NCT</NavLink>),
        key: '10'
    },
    {
        label: (<NavLink to="/products/author/aespa"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            AESPA</NavLink>),
        key: '11'
    },
    {
        label: (<NavLink to="/products/author/superm"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            SUPER M</NavLink>),
        key: '12'
    },
    {
        label: (<NavLink to="/products/author/gtb"
            className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
            GOT THE BEAT</NavLink>),
        key: '13'
    },
];

const menuProps = {
    items,
};
const DropDown = () => (
    <Space wrap>
        <Dropdown menu={menuProps} overlayStyle={{ height:"15rem",colorBgElevated:"#F2C3CE",overflow:"scroll" }} >
            <Button style={{
                width: 260,
                height: 40,
                borderRadius: 13,
                marginBottom: 62,
                marginTop: 57
            }}>
                <a onClick={(e) => e.preventDefault()}>
                <Space style={{ fontSize: 20,width:200,justifyContent:"space-between" }}>
                    ALL
                    <DownOutlined />
                </Space></a>
            </Button>
        </Dropdown>
    </Space>
);
export default DropDown;