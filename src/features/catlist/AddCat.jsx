import Button from "../../ui/Button";
import { useState } from "react";
import CreateCatForm from "../../features/catlist/CreateCatForm";
import Modal from "../../ui/Modal";

function AddCat() {
  return (
    <Modal>
      <Modal.Open opens='cat-form'>
        <Button>Add new cat</Button>
      </Modal.Open>
      <Modal.Window name='cat-form'>
        <CreateCatForm />
      </Modal.Window>

      {/* just to demo we can do diff button in modal 
       <Modal.Open opens='table'>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CreateCatForm />
      </Modal.Window> */}

    </Modal>

    
  );
}
// function AddCat() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         {" "}
//         Add New Cat
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCatForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCat;
