/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './web-development.json';

class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
    };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={450}
          width={450}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          onClick={() => this.setState({isStopped: true})}
        />
      </div>
    );
  }
}

export default LottieControl;
