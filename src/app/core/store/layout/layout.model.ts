import { getActionTypes } from '../util';
import { Branch } from '../branch/branch.model';
import { entityNames } from '../util';

export interface BooksPageLayout {
  showSidenav: boolean;
};

export const initialBooksPageLayout = {
  showSidenav: false
}

export interface BerniePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
  isTouched: Function;
};

export interface HeroesDashboardLayout {
  heroSearchTerm: string
}

export const initialBerniePage: BerniePageLayout = {
  editable: false,
  expanded: false,
  scrollY: 0,
  isTouched: function (claims) {
    let _touched = false;
    claims.forEach(claim => {
      claim.rebuttals.forEach(rebuttal => {
        if (rebuttal && rebuttal.isTouched()) {
          _touched = true;
        }
      });
    });
    return _touched;
  }
}

export const initialHeroesDashboardPage = {
  heroSearchTerm: ''
}

export class Layout extends Branch {
  booksPage: BooksPageLayout;
  berniePage: BerniePageLayout;
  heroesDashboardPage: HeroesDashboardLayout;
  msg: string;

  constructor(actionNames: any) {
    super(entityNames.LAYOUT, actionNames);
    this.booksPage = initialBooksPageLayout;
    this.berniePage = initialBerniePage;
    this.heroesDashboardPage = initialHeroesDashboardPage;
    this.msg = '';
  }
}
