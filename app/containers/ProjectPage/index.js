/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import {compose} from 'redux';
import {slide as Menu} from 'react-burger-menu';

import ProjectsList from 'containers/ProjectsList';
import BoardsList from 'containers/BoardsList';
import injectSaga from 'utils/injectSaga';

import saga from './saga';

class ProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {

    const params = new URLSearchParams(this.props.location.search);
    const ID = params.get('id');

    this.setState({projectID: ID});
  }

  componentWillReceiveProps(nextProps) {
    const params = new URLSearchParams(nextProps.location.search);
    const ID = params.get('id');

    this.setState({projectID: ID});
  }

  render() {
    return (
      <div>
        <Menu isOpen={false} width={'auto'}>
          <ProjectsList/>
        </Menu>
        <BoardsList projectID={this.state.projectID}/>
      </div>
    );
  }
}

const withSaga = injectSaga({key: 'projectpage', saga});

export default compose(
  withSaga,
)(ProjectPage);
