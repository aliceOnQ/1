import styles from './productitem.module.css';
import Link from '../Link';
import { Button,theme } from "antd"
import { Icon } from "./icon";

export default function ProductItem({ product }) {
    const {
        token: { colorTextBase,colorTextBase2 },
      } = theme.useToken();
    return (
        <div className={styles.item}>
            
            <section>
            
                <Link to={`/products/id/${product.id}`}>
                    <img
                        style={{ width: '17rem', height: '17rem' }}
                        src={product.image}
                        alt={product.name} />
                </Link>
                
                <div className={styles.info}>
                    <h4 className={styles.author} style={{color: colorTextBase,}}>
                        {product.author}
                    </h4>
                    <h3 className={styles.name} style={{color: colorTextBase,}}>
                        {product.name}
                    </h3>
                    <span className={styles.text} style={{color: colorTextBase2,}}>
                        $ {product.price}
                        <Button type="link" className={styles.btn} >
                            <Link to={`/products/id/${product.id}`}><Icon size={30} color={colorTextBase2} /></Link>
                        </Button>
                    </span>
                </div>
            </section>
        </div>
    );
}