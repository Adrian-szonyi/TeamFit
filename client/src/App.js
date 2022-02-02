import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleChallenge from './pages/SingleChallenge';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
            <Route exact path="/challenges/:challengeId">
              <SingleChallenge />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
