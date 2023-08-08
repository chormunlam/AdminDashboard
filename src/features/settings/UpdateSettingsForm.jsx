import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";
function UpdateSettingsForm() {
  const {
    isLoading,
    settings: { minApptHour, maxApptHour, maxAdopt, extraFee } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;
  function handleUpdate(e, field){
    const {value}=e.target;
    if(!value) return;
    updateSetting({[field]: value})
  }
  return (
    <Form>
      <FormRow label="Min appoint needed before adopt">
        <Input
          type="number"
          id="min-hour"
          defaultValue={minApptHour}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minApptHour")}
        />
      </FormRow>
      <FormRow label="Max appointmnet needed before adopt">
        <Input type="number" id="max-hour" defaultValue={maxApptHour} disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxApptHour")}/>
      </FormRow>
      <FormRow label="Maximum cat adopt each person">
        <Input type="number" id="max-cat" defaultValue={maxAdopt} disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxAdopt")}/>
      </FormRow>
      <FormRow label="Extra Fee">
        <Input type="number" id="extra fee" defaultValue={extraFee} disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "extraFee")}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
