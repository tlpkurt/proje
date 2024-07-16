import { Card, List } from "antd";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../API";

function Products() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.Products);
    });
  }, []);
  return <div>
      <List renderItem={(product, index) => {
          return <Card title={product.title} key={index}></Card>
        }}dataSource={items}></List>
    </div>
  ;
}
export default Products;
