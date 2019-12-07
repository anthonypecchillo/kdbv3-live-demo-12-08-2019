/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LawBody from './LawBody';

const LawListItemGrid = styled.div`
  display: grid;
  grid-template-rows: 45px auto 45px;

  border-radius: 5px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: ${({ index, isOpen, lastIndex }) => (isOpen && (index !== lastIndex)) ? '45px' : '30px'};
  margin-top: ${({ index, isOpen }) => (isOpen && (index !== 0)) ? '45px' : '30px'};
  width: 95%;
`;

const LawHeader = styled.div`
  display: grid;
  grid-template-columns: 8fr minmax(172px, 3fr) minmax(40px, 1fr);
  justify-items: center;

  background-color: skyblue;
  border-radius: 5px 5px 0 0;
  width: 100%;
`;

const LawTitle = styled.span`
  align-self: center;
  justify-self: start;

  margin-left: 2.5%
`;

const LawDate = styled.span`
  align-self: center;
  justify-self: end;
`;

const Icon = styled.i`
  place-self: center;
`;

const LawTagList = styled.div`
  display: flex;
  align-items: center;

  background-color: white;
  border-radius: 0 0 5px 5px;
  direction: rtl;
  height: 100%;
  overflow-x: auto;
  /* -webkit-overflow-scrolling: touch; For Momentum Scroll on Mobile */
  padding-right: 2.5%;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const LawTag = styled.div`
  flex: 0 0 auto;
  /* border: 1px solid black;
  border-radius: 10px; */
  height: 70%;
  line-height: 31px; /* 0.70 (height) times grid row height (48px)...plus a little? */
  margin: 0 10px;
  padding: 0 10px;
  text-align: center;
`;

class LawListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleChevronClick = this.handleChevronClick.bind(this);
  }

  handleChevronClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { index, lawListLength } = this.props;
    const { isOpen } = this.state;
    const chevronClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    return (
      <LawListItemGrid
        index={index}
        isOpen={isOpen}
        lastIndex={lawListLength - 1}
      >
        <LawHeader onClick={this.handleChevronClick}>
          <LawTitle>Law 2308</LawTitle>
          <LawDate>September 22nd, 2020</LawDate>
          <Icon className={chevronClass} />
        </LawHeader>

        <LawBody isOpen={isOpen} />

        <LawTagList isOpen={isOpen}>
          <LawTag>Forestry</LawTag>
          <LawTag>Environmental</LawTag>
          <LawTag>Conservation</LawTag>
        </LawTagList>
      </LawListItemGrid>
    );
  }
}

export default LawListItem;
