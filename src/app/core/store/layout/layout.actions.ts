import * as entityActions from '../entity/entity.actions';
import { Layout } from './layout.model';
import { entityNames } from '../util';
import * as branchActions from '../branch/branch.actions';

// Entity actions
// nothing

// Branch actions
export * from '../branch/branch.actions';

// Action types
export type Actions = branchActions.Update;
