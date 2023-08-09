// import { useEffect } from "react";
// import { getWS } from "../services/apiSpace";

import CatTable from "../features/catlist/CatTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCat from "../features/catlist/AddCat";

function Cats() {
  // useEffect(function () {
  //   getWS().then((data) => console.log(data));
  // }, []);
 
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cat avaible for adopoiton</Heading>
        <p>Filter/Sort</p>
        {/* <img src="https://wpoohgrveywjhfvucdhd.supabase.co/storage/v1/object/public/wor
      king-space-image/cw2-150x150.jpeg" /> */}
      </Row>
      <Row>
        <CatTable />
        <AddCat />
   
      </Row>
    </>
  );
}

export default Cats;
