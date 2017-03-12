import { Action } from '@ngrx/store';
import { ClaimRebuttal } from './claim-rebuttal.model';
import { Claim } from '../claim/claim.model';
import { Rebuttal } from '../rebuttal/rebuttal.model';

import * as entityActions from '../entity/entity.actions';
import { entityNames } from '../util';

// Special actions

// Entity actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.Actions<Claim>

