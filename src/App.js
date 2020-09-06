import React from 'react';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Post from './components/Post/Post';
import Detail from './components/SeeMore/Detail/Detail';

function App() {
  
  return (
   <div>
      <Router>
        <Switch>
          <Route exact path='/'>
          <Post></Post>      
          </Route>
          <Route path='/home'>
            <Post></Post>
          </Route>
          <Route path='/detail/:postId'>
            <Detail></Detail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
      
   </div>
  );
}

export default App;
