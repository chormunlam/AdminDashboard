import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCatForm from "../catlist/CreateCatForm";
import { useState } from "react";
import { useDeleteCat } from "./useDeleteCat";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreatCat } from "./useCreateCat";
/* eslint-disable */

const TableRow = styled.div`
  display: grid;
  grid-template-columns:
    minmax(50px, 1fr)
    minmax(50px, 1fr)
    minmax(50px, 1fr)
    minmax(50px, 1fr)
    minmax(80px, 1.5fr)
    minmax(50px, 1fr);
  column-gap: 2.4rem;
  align-items: center;
  background-color: pink;
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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
  const [showForm, setShowForm] = useState(false);
  const {isCreating, createCat}=useCreatCat();
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
 function handleDuplicate(){
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
  })
 }
  return (
    <>
      <TableRow>
        <Img src={image} />
        <div>{name}</div>
        <div>{gender}</div>
        <div>{age} yro</div>
        <Price>{formatCurrency(fee)}</Price>

        <div>
          <button onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCat(catId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCatForm catToEdit={cat} />}
    </>
  );
}

export default CatRow;
