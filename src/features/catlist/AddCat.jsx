import Button from "../../ui/Button";
import { useState } from "react";
import CreateCatForm from "../../features/catlist/CreateCatForm";
import Modal from '../../ui/Modal'
function AddCat() {
    const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}> Add New Cat</Button>
      {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}><CreateCatForm onCloseModal={()=>setIsOpenModal(false)}/></Modal>}
    </div>
  );
}

export default AddCat;
