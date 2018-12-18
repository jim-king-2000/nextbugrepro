import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  margin: auto 0;
  border: 1px solid;
  border-collapse:collapse;
`;

const StyledTr = styled.tr`
  border: 1px solid;
`;

const StyledTh = styled.th`
  border: 1px solid;
  text-align:center;
  padding: 5px;
`;

const Index = () => (
  <StyledTable>
    <StyledTr>
      <StyledTh rowspan='2' colspan='2'></StyledTh>
      <th>本周期</th>
      <th>总计</th>
      <th rowspan='2'>说明</th>
    </StyledTr>
    <StyledTr>
      <th>2018/12/09 - 2018/12/15</th>
      <th>2013/01/01 - &lt;today&gt;</th>
    </StyledTr>
    <StyledTr>
      <th>驾驶</th>
      <th>里程(km)</th>
      <td>3689</td>
      <td>112366</td>
      <td></td>
    </StyledTr>
  </StyledTable>
);
export default Index;
