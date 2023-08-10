import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CatRow from "./CatRow";
import { useState } from "react";
import { useCats } from "./useCats";

// var(--color-grey-0);

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: black;
  border-radius: 7px;
  overflow: auto;  // allow scrolling if content exceeds the container width
  width: 100%;     // take up the full width of its parent container
  max-width: 1800px; // or whatever maximum width you want
  margin: 0 auto;   // center the table if it's smaller than the viewport

  @media (max-width: 768px) {
    padding: 0 1rem; // some padding on smaller screens to ensure spacing
  }
`;
//background-color: var(--color-grey-50);
const TableHeader = styled.header`
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
  const {isLoading, cats}= useCats();
  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>img</div>
        <div>Name</div>
        <div>Gender</div>
        <div>Age</div>
        <div>Fee</div>
        <div>edit/del</div>
      </TableHeader>
      {cats.map((cat) => (
        <CatRow cat={cat} key={cat.id} />
      ))}
    </Table>
  );
}

export default CatTable;
