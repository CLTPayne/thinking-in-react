import React from 'react'
import BookList from './BookList'
import BookFilter from './BookFilter'
import books from '../mocks/books'

class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          books: books,
          selectedFilter: 'All'
        }
    }

    selectFilter = (filter) => {
        this.setState({
            selectedFilter: filter,
            books: filter === 'All' ? books : books.filter(book => (book.category === filter))
        })
    }

    render() {
      const books = this.state.books
      const filters = [
          'All',
          'Web',
          'Mobile',
          'DevOps',
          'Essentials',
      ]

      const tabItems = filters.map(filter => (
          <li className={filter === this.state.selectedFilter ? 'active' : ''} key={filter} onClick={() => this.selectFilter(filter)}>
              <a href="#0">{filter}</a>
          </li>
      ))

      return (
          <section id="books">
              <div className="col-lg-12 text-center">
                  <h2>Books</h2>
                  <hr className="star-primary" />
              </div>
                <BookFilter
                  tabItems={tabItems}
                />
                <BookList
                    books={books}
                />
          </section>
      )
    }
}

export default Books
