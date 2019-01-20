export const layouts = {
  list: 'list'
};

export const themes = {
  dark: 'dark',
  light: 'light'
};

export const AppReducerData = {
  initialState: {
    theme: themes.dark,
    layout: layouts.list
  },
  payload: { theme: themes.light }
};
