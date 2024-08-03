import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]) // Initialize as an empty array

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks()
  }, [])

  const handDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8800/books/${bookId}`)
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className='delete' onClick={() => handDelete(book.id)}>Delete</button>
            <button className='update' ><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books
