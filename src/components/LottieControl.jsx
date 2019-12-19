/*
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './web-development.json';

class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: false,
      isStopped: false,
    };

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation() {
    this.setState({ isStopped: true });
  }

  render() {
    const { isPaused, isStopped } = this.state;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          height={450}
          isPaused={isPaused}
          isStopped={isStopped}
          onClick={this.toggleAnimation}
          options={defaultOptions}
          width={450}
        />
      </div>
    );
  }
}

export default LottieControl;
