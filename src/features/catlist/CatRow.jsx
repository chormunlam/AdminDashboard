import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCatForm from "../catlist/CreateCatForm";
//import { useState } from "react";
import { useDeleteCat } from "./useDeleteCat";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreatCat } from "./useCreateCat";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
/* eslint-disable */



const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Catdiv = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReadOnlyCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 1px;
  pointer-events: none;
`;

function CatRow({ cat }) {
  //const [showForm, setShowForm] = useState(false);
  const { isCreating, createCat } = useCreatCat();
  const {
    id: catId,
    name,
    gender,
    age,
    fee,
    neutered,
    vaccinated,
    description,
    contact,
    image,
  } = cat;
  const { isDeleting, deleteCat } = useDeleteCat();
  function handleDuplicate() {
    createCat({
      name: `Copy of ${name}`,
      gender,
      age,
      fee,
      neutered,
      vaccinated,
      description,
      contact,
      image,
    });
  }
  return (
    <Table.Row>
      <Img src={image} />
      <div>{name}</div>
      <div>{gender}</div>
      <div>{age} yro</div>
      <Price>{formatCurrency(fee)}</Price>

      <div>
        <button onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCatForm catToEdit={cat} />
          </Modal.Window>
          
          <Modal.Open opens='delete'>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete resourceName='cats' 
            disabled={isDeleting} onConfirm={() => deleteCat(catId)} />
          </Modal.Window>

        </Modal>
      </div>
    </Table.Row>
  );
}

export default CatRow;
