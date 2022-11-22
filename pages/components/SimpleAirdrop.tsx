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
  const backToHome = () => setFormStep(1);
  const [data, setData] = useState<any>();

  return (
    <div className={styles.container}>
      <FormContainer currentStep={formStep}>
        {formStep == 1 && (
          <AirdropDetails
            formStep={formStep}
            data={data}
            setData={setData}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep == 2 && (
          <TransactionApproval
            formStep={formStep}
            data={data}
            setData={setData}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
          />
        )}
        {formStep == 3 && (
          <DuckyDrop
            formStep={formStep}
            data={data}
            setData={setData}
            backToHome={backToHome}
          />
        )}
      </FormContainer>
    </div>
  );
}
