import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreatCat } from "./useCreateCat";
import { useEditCat } from "./useEditCat";

/* eslint-disable */
function CreateCatForm({ catToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValue } = catToEdit;

  const isEdit = Boolean(editId); //if got id, meant edited

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit ? editValue : {},
  });

  const { isCreating, createCat } = useCreatCat();

  const { isEditing, editCat } = useEditCat();

  const isWorking = isCreating || isEditing;

  const { errors } = formState;
  //console.log(errors);

  function onSubmit(data) {
    //let chcek if the image is file type or string type. if file type , we need to uplaod it
    const image = typeof data.image === "string" ? data.image : data.image[0];

    //
    if (isEdit)
      editCat(
        {
          newCatData: { ...data, image },
          id: editId,
        },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    //new cat data, and id
    else
      createCat(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    //createEditCat({...data, image:data.image[0]});
    //console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "reqular"}
    >
      <FormRow label="Cat name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Gender" error={errors?.gender?.message}>
        <Input
          type="text"
          id="gender"
          disabled={isWorking}
          {...register("gender", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Age" error={errors?.age?.message}>
        <Input
          type="Number"
          id="age"
          disabled={isWorking}
          {...register("age", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="fee" error={errors?.fee?.message}>
        <Input
          type="number"
          id="fee"
          disabled={isWorking}
          defaultValue={0}
          {...register("fee", {
            required: "this field is required",
            // validate: (value) =>
            //   value <= getValues().regularPrice ||
            //   "discount shoud be less than regular price",
          })}
        />
      </FormRow>
      <FormRow
        label="discriptioin of the cat"
        disabled={isWorking}
        error={errors?.description?.message}
      >
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "this field is required" })}
        />
      </FormRow>
      <FormRow label="neutered" error={errors?.neutered?.message}>
        <Input
          type="checkbox"
          id="neutered"
          disabled={isWorking}
          {...register("neutered", { required: "this field is required" })}
        />
      </FormRow>
      <FormRow label="vaccinated" error={errors?.vaccinated?.message}>
        <Input
          type="checkbox"
          id="vaccinated"
          disabled={isWorking}
          {...register("vaccinated", { required: "this field is required" })}
        />
      </FormRow>
      <FormRow label="contact" error={errors?.contact?.message}>
        <Input
          type="text"
          id="contact"
          disabled={isWorking}
          {...register("contact", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Cat photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEdit ? false : "this field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEdit ? "edit the cat" : "Add New Cat"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCatForm;
