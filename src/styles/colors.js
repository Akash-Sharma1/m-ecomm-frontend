const Colors = {
  WHITE: '#FFFFFF',
  BLACK: '#262626',

  // BACKGROUNDS
  DEFAULT_BACKGROUND_COLOR: '#FFFFFF',
  DEFAULT_BACKGROUND_COLOR_2: '#F3F0F1',
  LIGHT_BLUE_BACKGROUND_COLOR: '#DBF1FF',
  BLUE_BACKGROUND_COLOR: '#BFD1FD',

  // THEME 1
  PRIMARY: '#F26835',
  PRIMARY_LIGHT: `${'#F26835'}40`,
  PRIMARY_MUTED: `${'#F26835'}20`,
  PRIMARY_MUTED_2: `${'#F26835'}15`,

  SECONDARY: '#55BAF8', // BLUE
  SECONDARY_LIGHT: `${'#55BAF8'}40`,
  SECONDARY_MUTED: `${'#55BAF8'}20`, // BLUE,
  SECONDARY_MUTED_2: `${'#55BAF8'}15`, // BLUE,

  PURPLE: '#9163F2', // BLUE
  PURPLE_LIGHT: `${'#9163F2'}40`,
  PURPLE_MUTED: `${'#9163F2'}20`, // BLUE,
  PURPLE_MUTED_2: `${'#9163F2'}15`, // BLUE,

  GREEN: '#7DB03B', // BLUE
  GREEN_LIGHT: `${'#7DB03B'}40`,
  GREEN_MUTED: `${'#7DB03B'}20`, // BLUE,
  GREEN_MUTED_2: `${'#7DB03B'}15`, // BLUE,

  // GRAYSCALE
  GRAY_LIGHT: `${'#8a8a8a'}10`,
  GRAY_MEDIUM: `${'#8a8a8a'}40`,
  GRAY_DARK: '#8a8a8a',

  // ACTION COLORS
  PINK: '#EB4940',
  YELLOW: '#EBD23F',

  TRANSPARENT: 'transparent',

  PINK_MUTED: '#FACACA',
  BLUE_MUTED: '#98CAF5',
  // GREEN_MUTED: '#A7E3CA',
  YELLOW_MUTED: '#FCDC9F',

  // FONT COLOR
  DEFAULT_FONT_COLOR: '#333637',
};


Colors.SOLID_PALLATE = [
  Colors.SECONDARY, Colors.PRIMARY, Colors.PURPLE, Colors.GREEN,
];

Colors.LIGHT_PALLATE = [
  Colors.SECONDARY_LIGHT, Colors.PRIMARY_LIGHT, Colors.PURPLE_LIGHT, Colors.GREEN_LIGHT,
];

Colors.MUTED_PALLATE = [
  Colors.SECONDARY_MUTED, Colors.PRIMARY_MUTED, Colors.PURPLE_MUTED, Colors.GREEN_MUTED,
];

Colors.MUTED_2_PALLATE = [
  Colors.SECONDARY_MUTED_2, Colors.PRIMARY_MUTED_2, Colors.PURPLE_MUTED_2, Colors.GREEN_MUTED_2,
];


export default Colors;
