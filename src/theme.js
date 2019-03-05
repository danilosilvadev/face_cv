const palette = {
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  BLACK: '#000000',

  GRAY: {
    '00': '#FAFAFA',
    '01': '#F5F5F5',
    '02': '#e6e6e6',
    '03': '#d8d8d8',
    '04': '#9E9E9E',
    '05': '#757575',
    '06': '#666666',
    '07': '#212121',
  },

  PRIMARY: {
    RED: {
      '00': 'red',
      '01': '#F44336',
      '02': '#dc3545',
    },
    YELLOW: {
      '00': 'yellow',
    },
    BLUE: {
      '00': 'blue',
      '01': '#009BAA',
    },
  },

  SECONDARY: {
    ORANGE: {
      '00': 'orange',
      '01': '#FF9313',
    },
    GREEN: {
      '00': 'green',
      '01': '#009B46',
      '02': '#002814',
    },
    PURPLE: {
      '00': 'purple',
    },
  },

  TERTIARY: {
    RED_ORANGE: {
      '00': 'coral',
    },
    YELLOW_ORANGE: {
      '00': 'gold',
    },
    YELLOW_GREEN: {
      '00': 'limegreen',
    },
    BLUE_GREEN: {
      '00': 'forestgreen',
    },
    BLUE_PURPLE: {
      '00': 'indigo',
    },
    RED_PURPLE: {
      '00': 'mediumvioletred',
    },
  },
};

export const theme = {
  default: {
    gray: palette.GRAY['00'],
    black: palette.BLACK,
    transparent: palette.TRANSPARENT,
    white: palette.WHITE,
  },
  primary: {
    borderColor: palette.GRAY['02'],
    backgroundColor: palette.GRAY['00'],
    color: palette.PRIMARY.BLUE['01'],
    fontSize: '2rem',
    fontWeight: 700,
    display: 'flex',
    textColor: palette.GRAY['04'],
  },
  secondary: {
    backgroundColor: palette.SECONDARY.GREEN['01'],
    color: palette.PRIMARY.BLUE['01'],
    textColor: palette.GRAY['05'],
    fontSize: '1rem',
    fontWeight: 500,
  },
  tertiary: {
    backgroundColor: palette.SECONDARY.GREEN['02'],
    color: palette.SECONDARY.GREEN['01'],
    textColor: palette.GRAY['07'],
    fontSize: '0.5rem',
    fontWeight: 400,
  },
  custom: {
    styledProgressBarColor: palette.GRAY['03'],
    buyButtonBackgroundColor: palette.SECONDARY.GREEN['01'],
    tagTextColor: palette.SECONDARY.ORANGE['01'],
    iconColor: palette.GRAY['05'],
  },
};

export const invertTheme = ({ primaryColor, secondaryColor }) => ({
  primaryColor: secondaryColor,
  secondaryColor: primaryColor,
  highlightedText: theme.highlightedText,
});
