import { connect } from 'react-redux';
import { addComment } from '../../redux/reducers/actions';
import './InputComment.css';

const InputComment = (props) => {
    const handleDown = ev => {
        const value = ev.target.value;
        switch (ev.code) {
            case 'Enter': {
                props.addComment(value);
            }
            case 'Escape': {
                ev.target.value = '';
            }
        }
    }
    return <input
        placeholder='Type your comment...'
        onKeyDown={handleDown}
    />;
}
export default connect(
    null,
    { addComment }
)(InputComment);