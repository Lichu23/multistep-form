import { UserAccount } from "@/models/user";
import FormWrapper from "./FormWrapper";

type AccountFormProps = UserAccount & {

  updateFields: (fields: Partial<UserAccount>) => void
}

const AccountForm = ({email,password,updateFields} : AccountFormProps) => {
  return (
    <FormWrapper title="Data Account">
      <label htmlFor="">Email</label>
      <input value={email} className="px-1 border" autoFocus required type="email" onChange={e => updateFields({email:e.target.value})}/>
      <label htmlFor="">Password</label>
      <input value={password} className="px-1 border" required type="password" onChange={e => updateFields({password:e.target.value})} />
    </FormWrapper>
  );
};

export default AccountForm;
