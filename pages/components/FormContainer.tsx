interface FormContainerType {
  children: any;
  currentStep?: any;
  prevFormStep?: any;
}

export default function FormContainer({
  children,
  currentStep,
  prevFormStep,
}: FormContainerType) {
  return <div>{children}</div>;
}
