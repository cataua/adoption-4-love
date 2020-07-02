import React, { useState } from 'react';

import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';
import StepFour from '../../components/StepFour';

import { Container } from './styles';

const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(oldStep => oldStep + 1);
  };

  const showStep = () => {
    if (step === 1)
      return (<StepOne nextStep={nextStep} />);
    if (step === 2)
      return (<StepTwo nextStep={nextStep} />);
    if (step === 3)
      return (<StepThree nextStep={nextStep} />);
    if (step === 4)
      return (<StepFour nextStep={nextStep} />);
  };

  return (
    <Container>
      {step && showStep()}
    </Container>
  )
}

export default SignUpForm;
