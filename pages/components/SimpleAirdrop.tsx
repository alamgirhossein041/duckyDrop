import styles from "/styles/SimpleAirdrop.module.scss";
import { useState } from "react";
import FormContainer from "./FormContainer";
import AirdropDetails from "./SimpleAirdrop/AirdropDetails";
import TransactionApproval from "./SimpleAirdrop/TransactionApproval";

export default function SimpleAirdrop() {
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <FormContainer currentStep={formStep}>
        {formStep == 0 && (
          <AirdropDetails formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep == 1 && (
          <TransactionApproval
            formStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
          />
        )}
      </FormContainer>
    </div>
  );
}
