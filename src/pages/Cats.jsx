// import { useEffect } from "react";
// import { getWS } from "../services/apiSpace";
import { useState } from "react";
import CreateCatForm from "../features/catlist/CreateCatForm";
import CatTable from "../features/catlist/CatTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cats() {
  // useEffect(function () {
  //   getWS().then((data) => console.log(data));
  // }, []);
  const [showForm, setShowForm] = useState(false);
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
        <Button onClick={() => setShowForm((show) => !show)}>
          {" "}
          Add New Cat
        </Button>
        {showForm && <CreateCatForm />}
      </Row>
    </>
  );
}

export default Cats;
