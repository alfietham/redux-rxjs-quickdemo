import { interval } from "rxjs";
import { switchMap, mapTo, takeUntil } from "rxjs/operators";
import { ofType } from "redux-observable";

import { startTimer, stopTimer, tickTock } from "./action";

export const tickTockEpic = action$ =>
  action$.pipe(
    ofType(startTimer().type),
    switchMap(({ payload: timerInterval }) =>
      interval(timerInterval * 1000).pipe(
        takeUntil(action$.ofType(stopTimer().type)),
        mapTo(tickTock())
      )
    )
  );

export default tickTockEpic;
