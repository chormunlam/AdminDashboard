import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import WSRow from "./WSRow";
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getWS } from "../../services/apiSpace";

function WSTable() {
  const {
    isLoading,
    data: workingspaces,
    error,
  } = useQuery({
    queryKey: ["wslist"],
    queryFn: getWS,
  });
  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Room</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>disount</div>

        <div></div>
      </TableHeader>
      {workingspaces.map((ws) => (
        <WSRow ws={ws} key={ws.id} />
      ))}
    </Table>
  );
}

export default WSTable;