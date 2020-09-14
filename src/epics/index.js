import { combineEpics } from 'redux-observable';

import { sessionEpics }  from './sessionEpics';

export const epics = combineEpics(
    sessionEpics
);