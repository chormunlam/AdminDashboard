import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { deleteWS } from "../../services/apiSpace";
import toast from "react-hot-toast";
/* eslint-disable */
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
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

const WorkingSpace = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function WSRow({ ws }) {
  const {
    id: wsId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = ws;
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteWS,
    onSuccess: () => {
      toast.success("deleted ");
      queryClient.invalidateQueries({
        queryKey: ["wslist"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <TableRow>
      <Img src={image} />
      <WorkingSpace>{name}</WorkingSpace>
      <div> fit up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(wsId)} disabled={isDeleting}>
        delete
      </button>
    </TableRow>
  );
}

export default WSRow;
