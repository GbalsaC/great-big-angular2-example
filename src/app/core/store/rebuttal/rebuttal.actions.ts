import { Action } from '@ngrx/store';
import { Rebuttal } from './rebuttal.model';

import * as entityActions from '../entity/entity.actions';


// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions =
  entityActions.Actions<Rebuttal>;
