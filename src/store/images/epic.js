import { interval } from "rxjs";
import { switchMap, mapTo, takeUntil } from "rxjs/operators";
import { ofType } from "redux-observable";

import { startTimer, stopTimer, tickTock } from "./action";

// @TODO: Add TickTockEpic here
const tickTockEpic = action$ => null;

export default tickTockEpic;
