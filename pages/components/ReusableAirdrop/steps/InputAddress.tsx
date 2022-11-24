import StepWrapper from "../StepWrapper";

interface InputAddressProps {
  formStep: number;
  nextFormStep: any;
}

export default function InputAddress({
  formStep,
  nextFormStep,
}: InputAddressProps) {
  return (
    <form>
      <StepWrapper formStep={formStep} />
      <h1>Input address step 2 nih bro</h1>
    </form>
  );
}
