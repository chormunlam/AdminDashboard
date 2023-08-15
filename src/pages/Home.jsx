/* eslint-disable */
import Row from "../ui/Row";
import AddCat from "../features/catlist/AddCat";
import CatRender from "../features/catlist/CatRender";
import Spinner from "../ui/Spinner";
import { useCats } from "../features/catlist/useCats";
import styled from "styled-components"; // Fixed this line
import Heading from "../ui/Heading";
import CatTableOperations from "../features/catlist/CatTableOperations";
import { useSearchParams } from "react-router-dom";




const CatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;



function Dashboard() {
  const { isLoading, cats } = useCats();
  const [searchParams] = useSearchParams(); //for fileter

  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get("type");
  console.log(filterValue);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cat avaible for adopoiton</Heading>
        <CatTableOperations />
      </Row>

      <CatGrid>
        {cats.map((cat) => (
          <CatRender cat={cat} key={cat.id} />
        ))}
        <AddCat />
      </CatGrid>
    </>
  );
}
//https://codepen.io/michellebarker/pen/abVJozd
export default Dashboard;
