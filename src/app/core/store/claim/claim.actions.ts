import { Claim } from './claim.model';

import * as entityActions from '../entity/entity.actions';

// Special actions

// Common actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.Actions<Claim>;
