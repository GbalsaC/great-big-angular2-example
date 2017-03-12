import * as layoutActions from './layout.actions';
import { Layout } from './layout.model';

export function reducer(state: Layout = new Layout(layoutActions), action: layoutActions.Actions): Layout {

  switch (action.type) {
    case state.actionTypes.Update:
      return Object.assign({}, state, state.update(action));
    // case state.actionTypes.Load:
    //   return Object.assign({}, state, {
    //     msg: 'Loading contacts ...'
    //   });
    default:
      return state;
  }
}

export const getShowSidenav = (state: Layout) => state.booksPage.showSidenav;

export const getBerniePageState = (state: Layout) => state.berniePage;

export const getMsg = (state: Layout) => state.msg;

export const getHeroSearchTerm = (state: Layout) => state.heroesDashboardPage.heroSearchTerm;
