import { Pagination } from 'antd';
import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';
import { theme } from 'antd';

import Header from "../components/Header"
import Footer from "../components/Footer"

import Search from '../components/Search';
import NavBar2 from '../components/NavBar2'
import Dropdown from '../components/DropDown';
import ProductList from "../components/ProductList";
import products from "../json/Products.json";

function Shop() {
    const {
        token: { colorBg,colorTextBase},
    } = theme.useToken();
    const { categoryName } = useParams();
    const _products = !categoryName
        ? products
        : products.filter(
            x => x?.category.toUpperCase() === categoryName.toUpperCase(),

        );
    const _pd = !categoryName
        ? products
        : products.filter(
            x => x?.sku.toUpperCase() === categoryName.toUpperCase(),

        );
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <Helmet>
            <title>SHOP</title>
                <style>{`
            body { 
                background-color: ${colorBg}; 
                color: ${colorTextBase}
                }
            `}</style></Helmet>
            <div className="layoutContent container">
            
                <title>SHOP</title>
                <Search />
                <NavBar2 />
                <Dropdown />
                <ProductList products={_products} pd={_pd} />
                <Pagination defaultCurrent={1} total={50} />

            </div>
            <Footer className="layoutFooter" />
        </div>


    );
}
export default Shop;