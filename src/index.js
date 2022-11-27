import  React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Redirect, Switch} from 'react-router-dom';
import RouteGuard from './components/RouteGuard';

//history
import { history } from './helpers/history';

//pages
import EventDetail from './pages/EventDetails'
import EventDetail2 from './pages/EventDetails2'
import Login from './pages/Login';


const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
      <Routes history={history}>
        <Route path="/" element={<App />}>
          <Switch>
            <RouteGuard
              exact
              path='/'
              component={EventDetail2}
            />
            <Route path='login' element={<Login/>}/>
          </Switch>
        </Route>
        <Route path="eventdetails/:id" element={<EventDetail />} />
        <Route path="eventdetails2" element={<EventDetail2 />} />
        <Redirect to ='/'/>
      </Routes>
    </BrowserRouter>,
    rootElement
);

export default Routes;
