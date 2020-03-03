import React from 'react';
import { Meteor } from 'meteor/meteor';
// import AccountsUIWrapper from './AccountsUIWrapper.js';
// import Hello from './Hello.jsx';
// import Info from './Info.jsx';

import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

const App = ({ links = [] }) => (
  <ul>{links.map(link => (<li key={link._id}>{link.title}</li>))}</ul>
);

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('links');
  return {
    links: Links.find().fetch(),
  };
})(App);
