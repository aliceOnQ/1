import { Row, Col } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ products, pd }) {
  
  return (
    
    <Row justify="space-around" gutter={[32, 32]}>
      {products.map(product => (
        <Col
          key={product.id}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
          <ProductItem product={product} />
        </Col>
      ))}
      {pd.map(product => (
        <Col
          key={product.id}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
          <ProductItem product={product}  />
        </Col>
      ))}
    </Row>
    
  );
}