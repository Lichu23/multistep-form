import { useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import AccountForm from "./components/AccountForm";
import { AddressForm } from "./components/AddressForm";
import UserForm from "./components/UserForm";
import { INITAL_USER_DATA } from "../../data/UserData";
import { FormData } from "@/models/form";

export const Form = () => {
  const [data, setData] = useState(INITAL_USER_DATA);

  //Al tener la informacion por partes el partial nos permite que todos los values sean opcionales
  function updateFields(fields: Partial<FormData>) {
    setData(prevData => {
      return {...prevData, ...fields}
    })
  }
 
  console.log(data)
  const {
    steps,
    step,
    currentStepIndex,
    stepBack,
    handleSubmitForm,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([<UserForm {...data} updateFields={updateFields}/>, <AddressForm {...data} updateFields={updateFields}/>, <AccountForm {...data} updateFields={updateFields}/>]);

  return (
    <div className="w-[600px] h-full border-[1px] bg-white rounded-xl ">
      <div className="relative p-5">
        <form onSubmit={handleSubmitForm}>
          <div className="absolute top-1 right-1 p-5">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex justify-end">
            {!isFirstStep && (
              <div className="flex ">
                <button
                  type="button"
                  onClick={stepBack}
                  className="border text-white bg-black hover:bg-gray-800 p-2 rounded-xl"
                >
                  Back
                </button>
              </div>
            )}
            <button
              type="submit"
              className="border text-white bg-black hover:bg-gray-800 p-2 rounded-xl"
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
