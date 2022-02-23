import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const ReviewOrder = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button data-cy="show-order" inverted>
          Review Order
        </Button>
      }
    >
      <Modal.Header>Select a Photo</Modal.Header>
    </Modal>
  );
};

export default ReviewOrder;
