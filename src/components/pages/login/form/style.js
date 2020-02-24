import style from 'style';

export default style`
  padding-top: 104px;

  & > {
    fieldset {
      width: ${({ theme }) => theme.grid.third()};
    }
  }
`;
