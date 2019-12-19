/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

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

const getSteps = () => ['Contract', 'Planned', 'Implement', 'Complete'];

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
};

export default PartnershipStatusStepper;
