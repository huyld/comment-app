import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = (props) => {
    const { list } = props;
    return <div className='comment-list'>
        {
            list.map((comment, idx) => {
                return <Comment key={idx}
                    text={comment.text}
                    author={comment.author}
                    createdDate={comment.createdDate}
                />
            })
        }
    </div>;
}

export default CommentList;