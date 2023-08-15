import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: 14px;
`;

const Input = styled.input`
  // You can add specific styles for the input here if needed
`;

function AdoptForm() {
  return (
    <form>
      <h1>CAT ADOPTION APPLICATION</h1>
      <Label>
        Cat’s Namee: <Input type="text" />
      </Label>
      <Label>
        Cat’s ID #: <Input type="text" />
      </Label>
      <Label>
        Name: <Input type="text" />
      </Label>
      <Label>
        Address: <Input type="text" />
      </Label>
      <Label>
        County: <Input type="text" />
      </Label>
      <Label>
        Home Phone: <Input type="text" />
      </Label>
      <Label>
        E-Mail Address (Please write clearly): <Input type="email" />
      </Label>
      <Label>
        Place Of Employment: <Input type="text" />
      </Label>
      <Label>
        Driver’s License/State ID number: <Input type="text" />
      </Label>
      <Label>Type of Housing:</Label>
      <Label>
        <Input type="radio" name="housing" value="Single Family Home" /> Single
        Family Home
      </Label>
      <Label>
        <Input type="radio" name="housing" value="Farm Mobile Home" /> Farm
        Mobile Home
      </Label>
      <Label>
        How long have you lived at this current address? <Input type="text" />
      </Label>
      <Label>
        Are you in the process of moving, or anticipate moving in the next few
        months? <Input type="checkbox" />
      </Label>
      <Label>
        If you ever move, have you considered that another place may not allow
        pets? What will you do if this happens? <Input type="text" />
      </Label>
      <Label>What is your past and/or current experience with cats?</Label>
      <Label>
        <Input type="radio" name="experience" value="1st time owner" /> 1st time
        owner
      </Label>
      <Label>
        <Input
          type="radio"
          name="experience"
          value="Have had 1 or 2 cats as an adult"
        />{" "}
        Have had 1 or 2 cats as an adult
      </Label>
      <Label>
        <Input type="radio" name="experience" value="Had a cat as a child" />{" "}
        Had a cat as a child
      </Label>
      <Label>
        Who will care for this cat primarily? (feeding, playtime, vet visits){" "}
        <Input type="text" />
      </Label>
      <Label>
        What are some reasons you would relinquish this cat back to New York
        Meow Sanctuary? <Input type="text" />
      </Label>
    </form>
  );
}

export default AdoptForm;
