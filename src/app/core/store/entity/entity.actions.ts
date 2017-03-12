import { Action } from '@ngrx/store';

import { typeFor } from '../util';

// These string values need to match the action class names
export const ActionNames = {
  ADD: 'Add',
  ADD_SUCCESS: 'AddSuccess',
  UPDATE: 'Update',
  UPDATE_SUCCESS: 'UpdateSuccess',
  UPDATE_ALL: 'UpdateAll',
  ADD_UPDATE_FAIL: 'AddUpdateFail',
  LOAD: 'Load',
  LOAD_SUCCESS: 'LoadSuccess',
  LOAD_FAIL: 'LoadFail',
  SELECT: 'Select',
  SELECT_NEXT: 'SelectNext',
  DELETE: 'Delete'
}

export class EntityAction<T> implements Action {
  _name: string = 'BASE ACTION - THIS SHOULD NOT APPEAR. YOU MUST FIRST SET TYPE';
  get type() {
    return typeFor(this.entityName, this._name)
  }
  set type(type) {
    this._name = type;
  }
  constructor(public payload: any, public entityName: string) { }
}

export class Add<T> extends EntityAction<T> {
  _name: string = ActionNames.ADD;
}

export class AddSuccess<T> extends EntityAction<T> {
  _name: string = ActionNames.ADD_SUCCESS;
}

export class Update<T> extends EntityAction<T> {
  _name: string = ActionNames.UPDATE;
}

export class UpdateSuccess<T> extends EntityAction<T> {
  _name: string = ActionNames.UPDATE_SUCCESS;
}

export class UpdateAll<T> extends EntityAction<T> {
  _name: string = ActionNames.UPDATE_ALL;
}

export class AddUpdateFail<T> extends EntityAction<T> {
  _name: string = ActionNames.ADD_UPDATE_FAIL;
}

export class Load<T> extends EntityAction<T> {
  _name: string = ActionNames.LOAD;
}

export class LoadSuccess<T> extends EntityAction<T> {
  _name: string = ActionNames.LOAD_SUCCESS;
}

export class LoadFail<T> extends EntityAction<T> {
  _name: string = ActionNames.LOAD_FAIL;
}

export class Select<T> extends EntityAction<T> {
  _name: string = ActionNames.SELECT;
}

export class SelectNext<T> extends EntityAction<T> {
  _name: string = ActionNames.SELECT_NEXT;
  constructor(public entityName: string) {
    super(null, entityName);
  }
}

export class Delete<T> extends EntityAction<T> {
  _name: string = ActionNames.DELETE;
}

// export function getActionTypes<T>(entityType: string, actionName): string {
//   return type(`[${entityType}] ${actionName}`)
// }

export type Actions<T>
  = Add<T>
  | AddSuccess<T>
  | Update<T>
  | UpdateSuccess<T>
  | UpdateAll<T>
  | Load<T>
  | LoadSuccess<T>
  | LoadFail<T>
  | Select<T>
  | SelectNext<T>
  | Delete<T>;
