import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CatRow from "./CatRow";
import { useState } from "react";
import { useCats } from "./useCats";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 0.6fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: yellow;
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CatTable() {
  //for
  const { isLoading, cats } = useCats();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 1.5fr 1fr;">
        <Table.Header>
          <div>img</div>
          <div>Name</div>
          <div>Gender</div>
          <div>Age</div>
          <div>Fee</div>
          <div>edit/del</div>
        </Table.Header>

        <Table.Body
          data={cats}
          render={(cat) => <CatRow cat={cat} key={cat.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CatTable;
