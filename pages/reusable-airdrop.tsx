import styles from "../styles/ReusableAirdrop.module.scss";
import { useState } from "react";
import FormContainer from "./components/FormContainer";
import SelectToken from "./components/ReusableAirdrop/steps/SelectToken";
import InputAddress from "./components/ReusableAirdrop/steps/InputAddress";

export default function ReusableAirdrop() {
  const [formStep, setFormStep] = useState(1);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <FormContainer currentStep={formStep}>
        {formStep == 1 && (
          <SelectToken formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep == 2 && (
          <InputAddress formStep={formStep} nextFormStep={nextFormStep} />
        )}
      </FormContainer>
    </div>
  );
}
