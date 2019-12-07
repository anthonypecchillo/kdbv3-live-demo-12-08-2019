/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';

const TabsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-column-gap: 20px;
  align-items: end;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 700;
  margin-left: 21px;
`;

const Tabs = ({ activeTab, handleTabClick, tabLabels }) => {
  return (
    <TabsGrid>
      {tabLabels.map((label, index) =>
        <Tab
          isActive={label === activeTab}
          key={index}
          label={label}
          handleTabClick={handleTabClick}
        />
      )}
    </TabsGrid>
  );
}

export default Tabs;
