/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import '../../dist/UnderConstruction.css';

import Modal from './Modal';
import NavBar from './NavBar';
import Footer from './Footer';

const AppContainer = styled.div`
  height: 100%;
`;

const UnderConstructionGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 700px 370px;
  height: 100%;
`;

const UnderConstruction = ({ endpoint, footerContent, navBarContent, toggleLanguage, toggleModal, showModal }) => {
  const modalBox = showModal ? <Modal toggleModal={toggleModal} /> : null;

  return (
    <AppContainer>
      <NavBar
        content={navBarContent}
        toggleLanguage={toggleLanguage}
        toggleModal={toggleModal}
       />
      {modalBox}
      <UnderConstructionGrid>
        <div className="container">
          <div className="box">
            <div className="title">
              <h3><a className="construction-a" href="https://www.gcftaskforce-database.org">GCFTaskForce-Database.org{endpoint}</a> is currently...</h3>
            </div>
            <div className="animation">
             <div className="one spin-one"></div>
             <div className="two spin-two"></div>
             <div className="three spin-one"></div>
            </div>
          <h1 className="construction-h1">Under maintenance</h1>
          <br />
          <p className="construction-p">The engineers are building our new web site right now!</p>
          <br />
          <p className="construction-p">Please feel free to reach out to <a className="construction-a" href="mailto:anthonypecchillo@gmail.com">AnthonyPecchillo@gmail.com</a> for immediate assistance.</p>
          </div>
        </div>
        <Footer content={footerContent} />
      </UnderConstructionGrid>
    </AppContainer>
  );
};

export default UnderConstruction;
