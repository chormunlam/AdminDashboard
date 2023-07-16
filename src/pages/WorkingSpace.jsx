import { useEffect } from "react";
import { getWS } from "../services/apiSpace";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function WorkingSpace() {
  useEffect(function () {
    getWS().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All working space</Heading>
      <p>TEST</p>
      <img src="https://wpoohgrveywjhfvucdhd.supabase.co/storage/v1/object/public/working-space-image/cw2-150x150.jpeg" />
    </Row>
  );
}

export default WorkingSpace;
