import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, List } from "semantic-ui-react";

const ReviewOrder = () => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.get("https://reqres.in/api/orders/5");
    setOrder(response.data.order.products);
  };

  const orderList = order.map((product) => {
    return <List.Item key={product.id}>{product.name}</List.Item>;
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button onClick={fetchOrder} data-cy="show-order">
          Review Order
        </Button>
      }
    >
      <Modal.Header>Your Delicious Order</Modal.Header>
      <Modal.Content>
        <List data-cy="order-list">{orderList}</List>
      </Modal.Content>
    </Modal>
  );
};

export default ReviewOrder;
