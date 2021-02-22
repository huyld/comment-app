import './Comment.css';

Comment = (props) => {
    const { text, author, createdDate } = props;
    return <>
        <div className='comment'>
            <div className='comment__text'>{text}</div>
            <div className='comment__footer'>
                <div className='comment__date'>{createdDate}</div>
                <div className='comment__author'>{author}</div>
            </div>
        </div>
    </>;
}

export default Comment;