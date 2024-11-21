import { UserData } from "@/models/user";
import FormWrapper from "./FormWrapper";

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="">First Name</label>
      <input
        value={firstName}
        className="px-1 border"
        autoFocus
        required
        type="text"
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor="">Last Name</label>
      <input
        value={lastName}
        className="px-1 border"
        required
        type="text"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor="">Age</label>
      <input
        value={age}
        className="px-1 border"
        min={1}
        required
        type="text"
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
