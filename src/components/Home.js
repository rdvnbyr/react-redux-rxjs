import React, {useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { SessionActions } from '../actions';
import {connect} from 'react-redux';

function Home(props) {
    
    // redux func...
    const getUsers = props.get_users;
    const isLogin = props.isLogin;

    // const aAstate = useSelector(state => state.session);
    // const users = aAstate.user.payload.users;
    // const aDispatch = useDispatch();

    useEffect(() => {
        isLogin &&
                // aDispatch(SessionActions.getUsers());
                getUsers(SessionActions.getUsers());
    }, [getUsers, isLogin]);

    return (
        <div className="container">
            {
                isLogin &&
                    props.users.map(user => {
                        return(
                            <div className="w-50 m-2 p-4 border shadow" key={user.id}>
                                <h5>{user.name}</h5>
                                <p>{user.email}</p>
                                <p><b>{user.phone}</b></p>
                            </div>
                        )
                    })
            }
        </div>
    )
}

function mapStateToProps(aAstate) {
    return {
        users: aAstate.session.users,
        isLogin: aAstate.session.isLogin
    };
}

function mapDispatchToProps(aDispatch) {
    return {
        get_users: () => aDispatch(SessionActions.getUsers())
    };
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);