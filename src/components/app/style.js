import styled from 'styled-components';

export default component => styled(component)`
  margin: 0 auto;
  min-height: calc(100vh - var(--margin-top));
  position: relative;
  width: 80vw;

  main {
    margin-top: var(--margin-top);
  }
`;
