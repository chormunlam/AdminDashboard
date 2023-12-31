import styled from "styled-components";
import Button from "./Button";

const Label = styled.label`
  display: block;
  margin-bottom: 14px;
`;

const Input = styled.input`
  position: relative;
  background-color: transparent;
  border: 1px solid #9CA3AF; /* Tailwind's border-neutral-500 */
  color: #1F2937; /* Tailwind's text-neutral-900 */
  font-size: 0.875rem; /* Tailwind's text-sm */
  border-radius: 0.375rem; /* Tailwind's rounded-lg */
  width: 100%; /* Tailwind's w-full */
  padding: 0.625rem; /* Custom padding, close to Tailwind's p-2.5 */
  outline: none;
  ::placeholder {
    color: #9333EA; /* Tailwind's placeholder-violet-700 */
    opacity: 0.6; /* Tailwind's placeholder-opacity-60 */
  }
  :focus {
    border-color: #7C3AED; /* Tailwind's focus:border-violet-500 */
    box-shadow: 0 0 0 2px #7C3AED; /* Tailwind's focus:ring and focus:ring-violet-500 */
  }
  :checked {
    background-color: #10B981; /* Tailwind's checked:bg-emerald-500 */
  }
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
      {/* Previous and Current Pet Information */}
      <h2>PREVIOUS AND CURRENT PET INFORMATION</h2>
      <Label>
        Have you ever had a pet: Run Away, Get hit by a car, Die in your care,
        Kept as an outdoor pet? If so, please explain:
        <Input type="text" />
      </Label>
      <Label>
        Have you ever surrendered any pet to a private rescue or individual? If
        yes, please explain the circumstance:
        <Input type="text" />
      </Label>
      {/* Current Pets Information */}
      <h3>Current Pets:</h3>
      <Label>
        Breed: <Input type="text" />
      </Label>
      <Label>
        Age: <Input type="text" />
      </Label>
      <Label>
        Gender M/F: <Input type="text" />
      </Label>
      <Label>
        Altered Y/N: <Input type="text" />
      </Label>
      <Label>
        How long have you owned? Inside/outside/both? <Input type="text" />
      </Label>
      <Label>
        Are your current animals up to date on vaccines?{" "}
        <Input type="checkbox" />
      </Label>
      {/* Previous Pets Information */}
      <h3>Previous Pets:</h3>
      <Label>
        Breed: <Input type="text" />
      </Label>
      <Label>
        Age: <Input type="text" />
      </Label>
      <Label>
        Gender M/F: <Input type="text" />
      </Label>
      <Label>
        Altered Y/N: <Input type="text" />
      </Label>
      <Label>
        What happened to the animal? <Input type="text" />
      </Label>
      <Label>
        Prepared for vet expenses? <Input type="checkbox" />
      </Label>
      <Label>
        Who is your veterinarian? <Input type="text" />
      </Label>
      <Label>
        Other vets with your pets records? Provide name and contact:
        <Input type="text" />
      </Label>
      {/* Household Info */}
      <h2>HOUSEHOLD INFORMATION</h2>
      <Label>
        Name and age: <Input type="text" />
      </Label>
      <Label>
        Relationship: <Input type="text" />
      </Label>
      <Label>
        Name and age: <Input type="text" />
      </Label>
      <Label>
        Relationship: <Input type="text" />
      </Label>

      <Label>
        Anyone has allergies to animals? If YES, on medication?
        <Input type="text" />
      </Label>
      <Label>
        Anyone convicted of animal cruelty, neglect, or abandonment?
        <Input type="checkbox" />
      </Label>

      <Button variation="pink" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default AdoptForm;
