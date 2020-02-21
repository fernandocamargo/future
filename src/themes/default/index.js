import property from 'lodash/property';
import { css } from 'styled-components';

export default {
  colors: {
    P050: '#eaebfd',
    P100: '#d7d6fd',
    P200: '#adb9fb',
    P300: '#8c83f3',
    P400: '#5056d9',
    P500: '#3c26de',
    P600: '#3320be',
    P700: '#291a97',
    P800: '#140f7e',
    P900: '#0d0968',
    G100: '#f2f2f2',
    WHITE: '#fff',
    BLACK: '#000',
    LIGHT_GREY: '#999',
  },
  typography: {
    icons: "'Material Icons'",
    main: "'Roboto', sans-serif",
  },
  grid: {
    gap: '24px',
    show: function(status = true) {
      return (
        !!status &&
        css`
          background: repeating-linear-gradient(
            to right,
            transparent,
            transparent ${property('theme.grid.gap')},
            rgba(0, 0, 0, 0.05) ${property('theme.grid.gap')},
            rgba(0, 0, 0, 0.05) 118px
          );
        `
      );
    },
    available: function() {
      return `calc(100vw - (${this.gap} * 2))`;
    },
    half: function() {
      return `calc((${this.available()} - ${this.gap}) / 2)`;
    },
    third: function() {
      return `calc((${this.available()} - (${this.gap} * 2)) / 3)`;
    },
  },
};
