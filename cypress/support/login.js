/* eslint-disable no-undef */
import {apiLogin} from '../../src/redux/api/auth'
Cypress.Commands.add('login', async (user, email) => {
    const login = await apiLogin({username : user, password: email});
    console.log(login, "test");
    return login
})