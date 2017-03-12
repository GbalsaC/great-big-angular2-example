import { Action } from '@ngrx/store';

import { typeFor } from '../util';


export class BranchAction implements Action {
  _name: string = 'BASE ACTION - THIS SHOULD NOT APPEAR. YOU MUST FIRST SET TYPE';
  get type() {
    return typeFor(this.branch, this._name)
  }
  set type(type) {
    this._name = type;
  }

  constructor(public branch: string, public path: string[], public val: any) {
    // Capitalize
    this.branch = branch.replace(/\b\w/g, l => l.toUpperCase());
  }
}

// These string values need to match the action class names
export const ActionNames = {
  UPDATE: 'Update'
}

export class Update extends BranchAction {
  _name: string = ActionNames.UPDATE;
}


export type Actions
  = Update;
