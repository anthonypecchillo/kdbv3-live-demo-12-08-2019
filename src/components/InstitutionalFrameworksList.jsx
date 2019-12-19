/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

// import InstitutionalFrameworkListItem from './InstitutionalFrameworkListItem';

// const DUMMY_LAW_DATA = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 },
//   { id: 7 },
//   { id: 8 },
//   { id: 9 },
//   { id: 10 },
//   { id: 11 },
//   { id: 12 },
//   { id: 13 },
//   { id: 14 },
//   { id: 15 },
//   { id: 16 },
//   { id: 17 },
//   { id: 18 },
//   { id: 19 },
//   { id: 20 },
// ];

const InstitutionalFrameworkListStyled = styled.div`
  background-color: white;
  border-top: 3px solid #3e522d;
  height: calc(100% - 5% - 37px - 15px);
  margin: 15px 0;
  overflow-y: scroll;
  width: 100%;
`;

const InstitutionalFrameworkList = () => (
  <InstitutionalFrameworkListStyled>
    {/* {DUMMY_LAW_DATA.map((law, index) => (
      <InstitutionalFrameworkListItem
        index={index}
        key={law.id}
        law={law}
        lawListLength={DUMMY_LAW_DATA.length}
      />
    ))} */}
    <h3>National - State/Province</h3>
    <div>
      <p>
        <strong>SEDENS</strong> &ndash; State Secretariat for Forest Development, Industry, Trade
        and Sustainable Services &nbsp;&ndash; Oversees the Corporation for Development of
        Environmental Services; potential beneficiary of REDD+ benefits in State Forests.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>SEAPROF</strong> &ndash; Agroforestry Extension and Family Based Farming Secretariat
        &ndash; responsible for fostering alternatives to the use of fire and reducing deforestation
        in the properties of smallholders.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>SEAP</strong> &ndash; State Secretariat for Agriculture and Ranching &ndash;
        Responsible for engaging owners of mid-size to large properties in the program
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>SEMA</strong> &ndash; State Secretariat of the Environment &ndash; responsible for
        the state&rsquo;s environmental policy, for coordinating the Plan for Prevention and Control
        of Deforestation and Forest Burning (PPCD/AC) and the State Commission for Environmental
        Risk Management, and supports monitoring in order to prevent severe degradation of the
        environment and environmental services under the SISA,&nbsp;
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>UCEGEO</strong> &ndash; Geoprocessing Unit &ndash; responsible for deforestation
        monitoring, forest degradation and carbon stocks at state level&nbsp;
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>IMAC</strong> &ndash; State Institute for the Environment &ndash; responsible for
        enforcement at state level
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>ITERACRE</strong> &ndash; Land Institute of Acre &ndash; responsible for land tenure
        regulation at state level,&nbsp;
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>IMC</strong> &ndash; Climate Change and Environmental Service Regulation Institute
        &ndash; responsible for regulating, monitoring, controlling and registration activities
        under the SISA and the resulting assets.&nbsp;
      </p>
    </div>

    <h3>National</h3>
    <div>
      <p>
        <strong>Civil Defenses</strong> - Critical role in contributing to avoiding severe
        degradation of forests (particularly due to fire) under REDD Program
        <br />
        <br />
        <strong>FUNAI</strong> - Indigenous territories belong to the federal government. FUNAI must
        provide its approval for state-run REDD activities in these areas.
        <br />
        <br />
        <strong>Chico Mendes Institute</strong> - Extractive Reserves belong to the federal
        government. Chico Mendes Institute must provide its approval for state-run REDD activities
        in these areas.
      </p>
    </div>
  </InstitutionalFrameworkListStyled>
);

export default InstitutionalFrameworkList;
