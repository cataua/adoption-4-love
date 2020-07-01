import React, {useState} from 'react';

import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';
import StepFour from '../../components/StepFour';

import { Button, Container } from './styles';

const SignUpForm = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {id: 1, component: <StepOne />},
    {id: 2, component: <StepTwo />},
    {id: 3, component: <StepThree />},
    {id: 4, component: <StepFour />},
  ]

  const handleSteps = (event) => {
    event.preventDefault();
  }

  return (
    <>
      {steps.map(step => (step.component))}
      <Container>
        <Button onClick={handleSteps}>ANTERIOR</Button>
        <Button onClick={handleSteps}>PRÓXIMO</Button>
      </Container>
    </>
  )
}

export default SignUpForm;