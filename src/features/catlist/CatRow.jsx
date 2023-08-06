import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { deleteCat } from "../../services/apiSpace";
import toast from "react-hot-toast";
import CreateCatForm from "../catlist/CreateCatForm";
import { useState } from "react";
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

  column-gap: 1.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(9, 1fr); 
    column-gap: 1rem;
  }
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

const ReadOnlyCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 1px;
  pointer-events: none;
`;


function CatRow({cat}) {
  const[showForm, setShowForm]=useState(false);
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
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCat,
    onSuccess: () => {
      toast.success("deleted ");
      queryClient.invalidateQueries({
        queryKey: ["cat"],
      });
    },
    onError: (err) => toast.error(err.message),
  });


  return (
    <>
    <TableRow>
      <Img src={image} />
      <div>{name}</div>
      <div>{gender}</div>
      <div>{age} yro</div>
      <Price>{formatCurrency(fee)}</Price>
  
      <div>
   <button onClick={()=>setShowForm(show=>!show)}> Edit </button>
   <button onClick={() => mutate(catId)} disabled={isDeleting}>Delete</button>
</div>
    </TableRow>
    {showForm && <CreateCatForm catToEdit= {cat}/>}
    </>
  );
  }

export default CatRow;
