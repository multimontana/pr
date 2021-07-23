import {createAction, props} from "@ngrx/store";
import {ActionType} from "../actionType";

import {RegisterRequestInterface} from "../../types/registerRequest.interface";

export const registerAction = createAction(
  ActionType.REGISTER,
  props<RegisterRequestInterface>()
);
