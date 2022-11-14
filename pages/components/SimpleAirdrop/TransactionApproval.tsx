import styles from "/styles/SimpleAirdrop/TransactionApproval.module.scss";
import StepWrapper from "../StepWrapper";
import Button from "../Button";
import { useForm } from "react-hook-form";

interface TransactionApprovalType {
  formStep: any;
  prevFormStep: any;
  nextFormStep: any;
}

export default function TransactionApproval({
  prevFormStep,
  nextFormStep,
  formStep,
}: TransactionApprovalType) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        nextFormStep();
        console.log(data);
      })}
    >
      <StepWrapper formStep={formStep} />
      <Button color="primary" onClick={prevFormStep}>
        Prev
      </Button>
    </form>
  );
}
