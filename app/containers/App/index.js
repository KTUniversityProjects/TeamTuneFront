/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import Main from 'containers/Main/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import Header from 'components/Header';
import ProjectEditPage from 'containers/ProjectEditPage/Loadable';
import 'Styles.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="TeamTune"
        defaultTitle="TeamTune Project"
      >
        <meta name="description" content="TeamTune application" />
      </Helmet>
      <Header />
      <div style={{'marginTop':'35px'}}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/projectedit" component={ProjectEditPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      </div>
    </AppWrapper>
  );
}
