import { USER_DATA_LOGOUT,USER_DATA_LOGIN} from "./constants";

export function logoutAuth(data: object) {
    return {
        type: USER_DATA_LOGOUT,
        payload: data
    }
}
export function loginAuth(data: object) {
    return {
        type: USER_DATA_LOGIN,
        payload: data
    }
}