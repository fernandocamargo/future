import styled from 'styled-components';

export default component => styled(component)`
  & > p {
    color: #f44336;
    font-size: 0.75rem;
  }
`;
