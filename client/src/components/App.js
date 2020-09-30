import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route
            path="/streams/delete/:id"
            exact
            component={StreamDelete}></Route>
          <Route path="/streams/show/:id" exact component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
