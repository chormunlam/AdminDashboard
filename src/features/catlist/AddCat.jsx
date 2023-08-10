import Button from "../../ui/Button";
import { useState } from "react";
import CreateCatForm from "../../features/catlist/CreateCatForm";
import Modal from "../../ui/Modal";

function AddCat() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cat-form">
          <Button>Add neww cat</Button>
        </Modal.Open>
        <Modal.Window name="cat-form">
          <CreateCatForm />
        </Modal.Window>

        {/* <Modal.Open opens='table'>
        <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name='table'>
        <CatTable/>
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

export default AddCat;
