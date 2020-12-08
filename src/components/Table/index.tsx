import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 2.5rem;
`

export const TableHead = styled.thead`
  border-bottom: 4px solid #103a53;

  tr {
    height: 50px;

    th {
      text-align: left;
      padding-left: 1.5rem; 
      font-size: 1.2rem;
      color: #6b6b6b;
    }
  }

`
export const TableBody = styled.tbody`
  tr {
    height: 50px;

    td {
      text-align: left;
      padding-left: 1.5rem; 
      padding-right: 1.5rem; 
      font-weight: bold;
    }
  }
`