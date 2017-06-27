
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import {
    FEEDBACKS_FETCH_DATA_REQUEST,
    FEEDBACKS_RECEIVE_DATA,
    COMMENTS_FETCH_DATA_REQUEST,
    COMMENTS_RECEIVE_DATA
} from '../constants';

export function feedbackDataRequest() {
    return {
        type: FEEDBACKS_FETCH_DATA_REQUEST
    };
}

export function feedbacksReceiveData(data) {
    return {
        type: FEEDBACKS_RECEIVE_DATA,
        payload: {
            data
        }
    };
}

export function commentsDataRequest() {
    return {
        type: COMMENTS_FETCH_DATA_REQUEST
    };
}

export function commentsReceiveData(data) {
    return {
        type: COMMENTS_RECEIVE_DATA,
        payload: {
            data
        }
    };
}

export function getFeedbacks() {
    return (dispatch, state) => {
        dispatch(feedbackDataRequest());
        return fetch(`${SERVER_URL}/api/v1/feedback/`, {
            // headers: {
            //     Accept: 'application/json',
            //     Authorization: `Token ${token}`
            // }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(feedbacksReceiveData(response.data));
            })
            .catch((error) => {
                console.log(`Error getting data: ${error.response}`)
                // if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                //     // Invalid authentication credentials
                //     return error.response.json().then((data) => {
                //         dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
                //         dispatch(push('/login'));
                //     });
                // } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                //     // Server side error
                //     dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
                // } else {
                //     // Most likely connection issues
                //     dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
                // }
                //
                // dispatch(push('/login'));
                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}

export function getComments() {
    return (dispatch, state) => {
        dispatch(commentsDataRequest());
        return fetch(`${SERVER_URL}/api/v1/feedback/`, {
            // headers: {
            //     Accept: 'application/json',
            //     Authorization: `Token ${token}`
            // }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(commentsReceiveData(response.data));
            })
            .catch((error) => {
                console.log(`Error getting data: ${error.response}`)
                // if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                //     // Invalid authentication credentials
                //     return error.response.json().then((data) => {
                //         dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
                //         dispatch(push('/login'));
                //     });
                // } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                //     // Server side error
                //     dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
                // } else {
                //     // Most likely connection issues
                //     dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
                // }
                //
                // dispatch(push('/login'));
                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}