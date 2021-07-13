import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {
    renderBookInShelf(type) {
        const { books } = this.props;
        return books.filter((book) => book.shelf === type).map((book) => {
            return this.props.renderBook(book)
        })
    }

    renderShelf(displayName, type) {
        const bookInShelf = this.renderBookInShelf(type);

        if (bookInShelf.length) {
            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{displayName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {bookInShelf}
                        </ol>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.renderShelf('Currently Reading', 'currentlyReading')}
                        {this.renderShelf('Want To Read', 'wantToRead')}
                        {this.renderShelf('Read', 'read')}
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.props.history.push('/search')}>Add a Book</button>
                </div>
            </div>
        )
    }

}

export default withRouter(Home)