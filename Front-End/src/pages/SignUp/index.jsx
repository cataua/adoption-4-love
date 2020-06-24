import React from 'react';
import { Container } from 'react-bootstrap';
import MultiStep from 'react-multistep';

import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import StepThree from '../../components/StepThree';
import StepFour from '../../components/StepFour';

import './custom.css';
import './normalize.css';
import './skeleton.css';

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]

const SignUp = () => {
  return (
    <Container style={{display: 'flex', justifyContent: 'center', height: 700}}>
      <div className='container'>
        <MultiStep steps={steps} />
      </div>
    </Container>
  )
};

export default SignUp;