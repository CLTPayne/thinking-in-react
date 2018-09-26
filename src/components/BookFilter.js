import React from 'react'

const BookFilter = (props) => (
  <section>
    <div className="row">
        <div className="col-lg-12">
            <ul className="nav nav-pills text-center">
                {props.tabItems}
            </ul>
        </div>
    </div>
  </section>
)

export default BookFilter
