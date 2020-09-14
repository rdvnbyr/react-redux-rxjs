export class SessionActions {
    /**
     * Return the action type prefix for session related actions
     * @returns {string} The action type prefix
     * @constructor
     */
    static get PREFIX() {
        return 'SESSION_';
    }
    /**
     * Returns the action type for login
     * @returns {string} The action type
     * @constructor
     */
    static get LOGIN() {
        return `${SessionActions.PREFIX}LOGIN`;
    }
    /**
     * Returns the action type for login successfull
     * @returns {string} The action type
     * @constructor
     */
    static get LOGIN_SUCCESSFUL() {
        return `${SessionActions.PREFIX}LOGIN_SUCCESSFUL`;
    }

    /**
     * Returns the action type for login unsuccessfull
     * @returns {string} The action type
     * @constructor
     */
    static get LOGIN_UNSUCCESSFUL() {
        return `${SessionActions.PREFIX}LOGIN_UNSUCCESSFUL`;
    }
    /**
     * Returns the action type for login
     * @returns {string} The action type
     * @constructor
     */
    static get GET_USERS() {
        return `${SessionActions.PREFIX}GET_USERS`;
    }
    /**
     * Returns the action type for login successfull
     * @returns {string} The action type
     * @constructor
     */
    static get GET_USERS_SUCCESSFUL() {
        return `${SessionActions.PREFIX}GET_USERS_SUCCESSFUL`;
    }
    /**
     * Returns the action type for login unsuccessfull
     * @returns {string} The action type
     * @constructor
     */
    static get GET_USERS_FAIL() {
        return `${SessionActions.PREFIX}GET_USERS_FAIL`;
    }
        /**
     * Returns the action type for logout
     * @returns {string} The action type
     * @constructor
     */
    static get LOGOUT() {
        return `${SessionActions.PREFIX}LOGOUT`;
    }

    /**
     * Returns the action type for logout successfull
     * @returns {string} The action type
     * @constructor
     */
    static get LOGOUT_SUCCESSFUL() {
        return `${SessionActions.PREFIX}LOGOUT_SUCCESSFUL`;
    }

    /**
     * Returns the action type for logout successfull
     * @returns {string} The action type
     * @constructor
     */
    static get LOGOUT_UNSUCCESSFUL() {
        return `${SessionActions.PREFIX}LOGOUT_UNSUCCESSFUL`;
    }

        /**
     * Action creator for logout
     * @param {string} sessionId - session id
     * @returns {{type: string}} The action
     */
    static logout() {
        return {
            type: SessionActions.LOGOUT
        };
    }

    /**
     * Action creator for successful logout
     * @returns {{type: string}} The action
     */
    static logoutSuccessful() {
        return {
            type: SessionActions.LOGOUT_SUCCESSFUL
        };
    }

    /**
     * Action creator for UNsuccessful logout
     * @returns {{type: string}} The action
     */
    static logoutUnsuccessful() {
        return {
            type: SessionActions.LOGOUT_UNSUCCESSFUL
        };
    }

    /**
     * Action creator for login
     * @param {String} aUserName The username
     * @param {String} aPassword The password of the user
     * @returns {{type: string, payload: *}} The Action
     */
    static getUsers() {
        return {
            type: SessionActions.GET_USERS
        };
    }

    /**
     * Action creator for successful login
     * @param {object} response - session id and user id
     * @returns {{type: string}} The Action
     */
    static getUsersSuccessful(response) {
        return {
            type: SessionActions.GET_USERS_SUCCESSFUL,
            payload: {
                users: response
            }
        };
    }

    /**
     * Action creator for unsuccessful login
     *
     * @returns {{type: string}} The Action
     */
    static getUsersFail() {
        return {
            type: SessionActions.GET_USERS_FAIL
        };
    }


    /**
     * Action creator for login
     * @param {String} aUserName The username
     * @param {String} aPassword The password of the user
     * @returns {{type: string, payload: *}} The Action
     */
    static login(email, password) {
        return {
            type: SessionActions.LOGIN,
            payload: {
                email: email,
                password: password
            }
        };
    }

    /**
     * Action creator for successful login
     * @param {object} response - session id and user id
     * @returns {{type: string}} The Action
     */
    static loginSuccessful(response) {
        return {
            type: SessionActions.LOGIN_SUCCESSFUL,
            payload: {
                user: response
            }
        };
    }

    /**
     * Action creator for unsuccessful login
     *
     * @returns {{type: string}} The Action
     */
    static loginUnsuccessful() {
        return {
            type: SessionActions.LOGIN_UNSUCCESSFUL
        };
    }
};