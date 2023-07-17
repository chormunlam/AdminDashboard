// import { useEffect } from "react";
// import { getWS } from "../services/apiSpace";
import WSTable from "../features/workingspace/WSTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function WorkingSpace() {
  // useEffect(function () {
  //   getWS().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All working space</Heading>
        <p>Filter/Sort</p>
        {/* <img src="https://wpoohgrveywjhfvucdhd.supabase.co/storage/v1/object/public/wor
      king-space-image/cw2-150x150.jpeg" /> */}
      </Row>
      <Row>
        <WSTable></WSTable>
      </Row>
    </>
  );
}

export default WorkingSpace;
