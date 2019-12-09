import styled from 'styled-components';

export default component => styled(component)`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
  position: relative;

  &:before {
    background-color: #e5e5e5;
    content: '';
    display: block;
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 1px;
  }

  & > * {
    width: 50%;
  }

  article {
    text-align: center;
  }
`;
