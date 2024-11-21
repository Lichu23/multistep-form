import { UserAddress } from "@/models/user";
import FormWrapper from "./FormWrapper";

type AddressFormProps = UserAddress & {
  updateFields: (fields: Partial<UserAddress>) => void;
};

export const AddressForm = ({
  street,
  city,
  country,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Personal Address">
      <label htmlFor="">Country</label>
      <input
        value={country}
        className="px-1 border"
        autoFocus
        required
        type="text"
        onChange={(e) => updateFields({ country: e.target.value })}
      />
      <label htmlFor="">City</label>
      <input
        value={city}
        className="px-1 border"
        required
        type="text"
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="">Street</label>
      <input
        value={street}
        className="px-1 border"
        required
        type="text"
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="">Zip</label>
      <input
        value={zip}
        className="px-1 border"
        required
        type="text"
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};
