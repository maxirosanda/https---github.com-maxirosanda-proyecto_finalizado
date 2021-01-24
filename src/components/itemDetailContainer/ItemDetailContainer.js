import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ items }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    items.length &&
      items.map((item) => {
        return item.id === parseFloat(id) && setProducto(item);
      });
  }, [items]);

  return (
    <React.Fragment>
      <ItemDetail key={producto.id} item={producto}>
        {" "}
      </ItemDetail>
    </React.Fragment>
  );
};

export default ItemDetailContainer;
