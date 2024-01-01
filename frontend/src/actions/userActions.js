import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";

const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = {
            email,
            password,
        }
        const { data } = await axios
            .post('/login', body, config)
            .then((res) => {
                console.log("login axios msg: ");
                console.log(res.data);
            })
        // .catch((error) => {
        //   console.log("Error while login: " + error);
        //   alert('Error in login');
        // })
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export default login;