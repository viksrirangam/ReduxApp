import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import dthunk from './middleware/dthunk'

import todo from './reducers/todoreducer'
import visibility from './reducers/visibilityreducer'

import TodoListContainer from './containers/todolistcontainer'
import AddTodoContainer from './containers/addtodocontainer'
import Footer from './components/footer'

import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  combineReducers({todo, visibility}),
  applyMiddleware(dthunk)
);

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Redux App
    </header>
    <Link to="/">ToDo</Link>
    <Link to="/about">About</Link>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </main>
  </div>
)

const HomePage =() => (
  <Provider store={store}>
    <div>
      <AddTodoContainer/>
      <TodoListContainer/>
      <Footer/>
    </div>  
  </Provider>
);

const AboutPage = () => <div>About</div>

const App = () => (
  <BrowserRouter>    
    <PrimaryLayout />
  </BrowserRouter>
)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

registerServiceWorker();

module.hot.accept();