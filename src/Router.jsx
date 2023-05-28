import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artist from './pages/Artist'
import About from './pages/About'
import Shop from './pages/Shop'
import Product from './pages/Product';
import Signin from './pages/Signin';
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";
import { useSelector } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBa6mh1czP3y1GR9XvxIHvtvbsFLx8aJQ",
  authDomain: "teddy-land-551b1.firebaseapp.com",
  projectId: "teddy-land-551b1",
  storageBucket: "teddy-land-551b1.appspot.com",
  messagingSenderId: "513956204728",
  appId: "1:513956204728:web:a688d56cc6ca828b32e44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

function Router() {
    const lightMode = useSelector(selectLightMode);
    const theme = lightMode ? lightTheme : darkTheme;
    return (

        <ConfigProvider theme={theme} >
            <HelmetProvider context={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="artist" element={<Artist />} >
                            <Route path="artcategory/:artcategoryName" element={<Artist />} />
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="Signin" element={<Signin />} />
                        <Route path="products">
                            <Route path="category/:categoryName" element={<Shop />} />
                            <Route path="author/:categoryName" element={<Shop />} />
                            <Route path="id/:productId" element={<Product />} />
                           
                        </Route>


                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ConfigProvider>

    )
}

export default Router
