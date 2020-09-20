import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 25px;
`

export const TableHead = styled.thead`
  border-bottom: 4px solid #103a53;

  tr {
    height: 50px;

    th {
      text-align: left;
      padding-left: 15px; 
      font-size: 12px;
      color: #6b6b6b;
    }
  }

`
export const TableBody = styled.tbody`
  tr {
    height: 50px;

    td {
      text-align: left;
      padding-left: 15px; 
      font-weight: bold;
    }
  }
`