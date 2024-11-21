import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0); //índice del paso que se muestra actualmente

  function stepNext() {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  }

  function stepBack() {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    const isLastStep = currentStepIndex === steps.length - 1
    e.preventDefault();
    if(!isLastStep) return stepNext()
    alert("Form Successfull")
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    stepNext,
    stepBack,
    handleSubmitForm,
    steps,
  };
}
