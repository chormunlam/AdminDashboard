/* eslint-disable */
import Modal from "../../ui/Modal";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import { useCreatCat } from "./useCreateCat";
import { useDeleteCat } from "./useDeleteCat";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateCatForm from "../catlist/CreateCatForm";
import "./catCard.css";
const CatCard = styled.div`
  border: 1px solid var(--color-grey-100);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  font-family: "Sono";
`;

function CatRender({ cat }) {
  // Existing code for handling delete, duplicate, etc.
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

  return (
    <div>

      <article className="cta">
        <img src={image} alt="Bluetit" />
        <div className="cta__text-column">
          <h2>{name}</h2>
          <p>{description}</p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">
            more pic
          </a>
        </div>
        <div className="cta__hover-text">Some hover text here</div>
      </article>
    </div>
  );
}

export default CatRender;
