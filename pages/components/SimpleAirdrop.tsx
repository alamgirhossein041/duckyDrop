import styles from "/styles/SimpleAirdrop.module.scss";
import { useState } from "react";
import FormContainer from "./FormContainer";
import AirdropDetails from "./SimpleAirdrop/AirdropDetails";
import TransactionApproval from "./SimpleAirdrop/TransactionApproval";
import DuckyDrop from "./SimpleAirdrop/DuckyDrop";

export default function SimpleAirdrop() {
  const [formStep, setFormStep] = useState(1);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <FormContainer currentStep={formStep}>
        {formStep == 1 && (
          <AirdropDetails formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep == 2 && (
          <TransactionApproval
            formStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
          />
        )}
        {formStep == 3 && <DuckyDrop formStep={formStep} />}
      </FormContainer>
    </div>
  );
}
