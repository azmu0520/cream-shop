import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .list {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-width: 25%;
    padding: 10px;
  }
  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

Wrap.Td = styled.td`
  color: ${({ color }) => (color ? color : '#000')};
`;
