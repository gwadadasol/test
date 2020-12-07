import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/Book').then((response) => {
      this.setState({
        books: response.data

      })
    })
  }

  render() {
    return (
      <div className="App">
        <header>className="App-header"
        <h3>List of Books</h3>
        <ul>
          {
            this.state.books.map((book: any) =>
              (
                <li key="{book.id}" > {book.Name} - {book.Author}  </li>
              ))}
        </ul>
        </header>
      </div>
    );
  }
}



export default App;
