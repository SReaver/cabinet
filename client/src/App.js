import React, { Fragment } from 'react';
import Navbar from '../src/components/layout/Navbar';
import Events from './components/Events/Events';
import NewEvent from '../src/components/NewEvent/NewEvent'

const App = () => (
  <Fragment>
    <Navbar />
    <Events />
    <NewEvent />
  </Fragment>
);

export default App;
