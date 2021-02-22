import './App.css';
import CommentList from './components/CommentList/CommentList';
import InputComment from './components/InputComment/InputComment';
import { connect } from "react-redux";



function App(props) {
    const { commentList } = props;

    return (
        <div className="App">
            <CommentList list={commentList} />
            <InputComment />
        </div>
    );
}

const mapStateToProps = state => {
    const { commentList } = state;
    return { commentList };
};

export default connect(mapStateToProps)(App);
