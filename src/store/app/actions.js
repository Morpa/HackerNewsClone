import { buildActionCreator } from 'store/utils';

const NS = '@hackerNewsReader/app';

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`
};

const actions = {
  setTheme: buildActionCreator(actionTypes.SET_THEME)
};

export default actions;
