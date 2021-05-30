import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList';
import UpdateBookInfo from './components/UpdateBooks';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={ShowBookList}/>
        <Route path='/create-book' component={CreateBook}/>
        <Route path='/update-book/:id' component={UpdateBookInfo}/>
        <Route path='/show-book/:id' component={ShowBookDetails}/>
      </div>
    </Router>
  );
}

export default App;
