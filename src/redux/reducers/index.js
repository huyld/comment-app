import { ADD_COMMENT } from "../actionTypes";

const initialState = {
    commentList: [
        {
            text: 'aaaa',
            author: 'AAA',
            createdDate: Date()
        },
        {
            text: 'bbbb',
            author: 'BBB',
            createdDate: Date()
        },
        {
            text: 'ccc',
            author: 'CCC',
            createdDate: Date()
        },
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT: {
            const { commentText } = action.payload;
            const commentList = [...state.commentList, {
                text: commentText,
                author: 'xxxxxx',
                createdDate: Date()
            }]
            return {
                commentList
            };
        }
        default:
            return state;
    }
}
