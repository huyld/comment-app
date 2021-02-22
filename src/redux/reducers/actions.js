import { ADD_COMMENT } from '../actionTypes';

export const addComment = content => ({
    type: ADD_COMMENT,
    payload: {
        commentText: content
    }
});