import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCat } from "../../services/apiSpace";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";


const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCatForm() {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCat,
    onSuccess: () => {
      toast.success("new cat sucessfully created");
      queryClient.invalidateQueries({ queryKey: ["cat"] });
      reset(); //only do it when sucess..
    },
    onError: (err) => toast.error(err.message),
  });

  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  //console.log(errors);

  function onSubmit(data) {
    mutate({...data, image:data.image[0]});
  }

  function onError(errors) {
   // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cat name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "this field is required" })}
        />
  
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <Input
          type="text"
          id="gender"
          disabled={isCreating}
          {...register("gender", {
            required: "this field is required",
           
          })}
        />
      </FormRow>

      <FormRow label="Age" error={errors?.age?.message}>
        <Input
          type="Number"
          id="age"
          disabled={isCreating}
          {...register("age", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="fee" error={errors?.fee?.message}>
        <Input
          type="number"
          id="fee"
          disabled={isCreating}
          defaultValue={0}
          {...register("fee", {
            required: "this field is required",
            // validate: (value) =>
            //   value <= getValues().regularPrice ||
            //   "discount shoud be less than regular price",
          })}
        />
      </FormRow>
      <FormRow label="discriptioin of the cat" disabled={isCreating} error={errors?.name?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isCreating}
          defaultValue=""
          {...register("description", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Cat photo">
        <FileInput
        id='image'
        accept='image/*'
        type='file'
        {
          ...register('image', 
          {
            required: 'this field is required'
          })
        }
        />
      </FormRow>
  
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add New Cat</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCatForm;
