import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import './book-list.css';
import {withBookstoreService} from '../hoc';
import {bookLoaded} from "../../action";
import {bindActionCreators} from "redux";


class BookList  extends React.Component{
    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBook();
        this.props.bookLoaded(data);
    }

    render() {
        const {books} = this.props;

        return <ul>
            {
                books.map( (book) => {
                            return  <li key={book.id}> <BookListItem book={book}/></li>
                        }
                )
            }
        </ul>

    }
}

const mapStateToProps = ({books}) => {
    return {books};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({bookLoaded}, dispatch);
};

export default withBookstoreService() (connect(mapStateToProps, mapDispatchToProps) (BookList));