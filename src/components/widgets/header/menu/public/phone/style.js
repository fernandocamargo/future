import property from 'lodash/property';
import styled from 'styled-components';

export default component => styled(component)`
  align-items: center;
  color: #4a4a4a;
  display: flex;
  font-size: 0.875rem;
  text-decoration: none;

  &:before {
    color: #666;
    content: '\\e311';
    display: inline-block;
    font-family: ${property('theme.typography.icons')};
    font-size: 200%;
    margin-right: 0;
    transition: font-size 0.1s linear, margin-right 0.1s linear;
  }

  em {
    display: none;
  }

  strong {
    font-size: 0;
    opacity: 0;
    transition: font-size 0.1s linear, opacity 0.1s linear;
  }

  @media (min-width: 960px) {
    &:before {
      font-size: 150%;
      margin-right: 0.875rem;
    }

    strong {
      font-size: 0.875rem;
      opacity: 1;
    }
  }
`;
