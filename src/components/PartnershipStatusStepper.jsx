import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    alignSelf: 'center',
    gridColumn: '1/3',
  },
  stepper: {
    backgroundColor: '#e5e5e5',
    padding: '0',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Contract', 'Planned', 'Implement', 'Complete'];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     case 3:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

const PartnershipStatusStepper = ({ activeStep }) => {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <div>Status:</div>
      <br />
      <Typography className={classes.instructions} />
      <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default PartnershipStatusStepper;
