import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { SessionActions } from '../actions';
import axios from 'axios';

const hostname = 'https://api.ernte-helfer.net/api';

function getusers(action$) {
    return action$.pipe(
        ofType(SessionActions.GET_USERS),
        mergeMap(
            (action) => from(
                axios
                    .get('https://jsonplaceholder.typicode.com/users')
                    .then((res) => {
                        console.log(res)
                        if (res.status === 200) {
                            return SessionActions.getUsersSuccessful(res.data);
                        } else {
                            return SessionActions.getUsersFail();
                        }
                    })
                    .catch((res) =>{
                        console.log(res);
                        return SessionActions.getUsersFail();
                    } )))
    );
}

function loginAuth(action$) {
    return action$.pipe(
        ofType(SessionActions.LOGIN),
        mergeMap(
            (action) => from(
                axios
                    .post(`${hostname}/Members/login`, {"email": action.payload.email, "password":action.payload.password})
                    .then((res) => {
                        console.log(res)
                        if (res.status === 200) {
                            return SessionActions.loginSuccessful(res.data);
                        } else {
                            return SessionActions.loginUnsuccessful();
                        }
                    })
                    .catch((res) =>{
                        console.log("session eppiiiiiiiiic" + action.payload.email, action.payload.password, res )
                        return SessionActions.loginUnsuccessful();
                    } )))
    );
}
function logout(action$) {
    return action$.pipe(
        ofType(SessionActions.LOGOUT),
        mergeMap((action) => from(axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    return SessionActions.logoutSuccessful();
                } else {
                    return SessionActions.logoutUnsuccessful();
                }
            })
            .catch(() => SessionActions.logoutUnsuccessful())))
    );
}

export const sessionEpics = combineEpics(
    loginAuth,
    getusers,
    logout
);