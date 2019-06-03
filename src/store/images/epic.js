import { interval } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  switchMap,
  mergeMap,
  mapTo,
  map,
  takeUntil,
  bufferCount,
  take,
  distinctUntilChanged
} from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import {
  fetchImages,
  fetchMultiImages,
  setSingleImageUrl,
  setMultiImageUrl,
  startTimer,
  stopTimer
} from "./action";

const tickTockEpic = action$ =>
  action$.pipe(
    ofType(startTimer().type),
    switchMap(({ payload: timerInterval }) =>
      interval(timerInterval * 1000).pipe(
        takeUntil(action$.ofType(stopTimer().type)),
        mapTo(fetchImages())
      )
    )
  );

const imageFetchService = imgSize =>
  ajax({
    url: `https://source.unsplash.com/collection/1154337/${imgSize}x${imgSize}`,
    method: "GET"
  });

const fetchImagesEpic = action$ =>
  action$.pipe(
    ofType(fetchImages().type),
    switchMap(() =>
      imageFetchService("480").pipe(
        map(response => setSingleImageUrl(response.xhr.responseURL))
      )
    )
  );

const fetchMultiImagesEpic = action$ =>
  action$.pipe(
    ofType(fetchMultiImages().type),
    mergeMap(() =>
      interval(1200).pipe(
        switchMap(() =>
          imageFetchService("480").pipe(
            map(response => response.xhr.responseURL)
          )
        ),
        distinctUntilChanged(), // filter to solve the repeats issue
        take(3), // limit to 3 only
        bufferCount(3), // buffer and return array
        map(imgArray => setMultiImageUrl(imgArray))
      )
    )
  );

export default combineEpics(
  tickTockEpic,
  fetchImagesEpic,
  fetchMultiImagesEpic
);
