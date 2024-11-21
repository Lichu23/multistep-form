import { ReactNode } from "react";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
}

const FormWrapper = ({title, children} : FormWrapperProps) => {
  return (
    <>
        <h2 className="text-center font-bold">{title}</h2>
        <div className="grid justify-start gap-5 grid-cols-2 py-5">
          {children}
        </div>
    </>
  )}

export default FormWrapper
