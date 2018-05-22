/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import {compose} from 'redux';
import {slide as Menu} from 'react-burger-menu';
import ProjectsList from 'containers/ProjectsList';
import injectSaga from 'utils/injectSaga';
import './Styles.css';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import CenteredSection from '../SignUpPage/CenteredSection';

import saga from './saga';

class ProjectEditPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
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
        <div>
          <CenteredSection>
          <Form onSubmit={this.props.onSubmitForm}>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Project name"
                    value={this.props.username}
                    onChange={this.props.onChangeName}
                  /><br />
                  <Input
                    id="email"
                    type="text"
                    placeholder="Project description"
                    value={this.props.email}
                    onChange={this.props.onChangeDescription}
                  /><br />
                  <Button
                    id="submit"
                    type="submit"
                    children="Save"
                    onClick={this.props.onSaveForm}
                  />
              </Form>
              </CenteredSection>
        </div>
      </div>
    );
  }
}

ProjectEditPage.propTypes = {
  
};

const withSaga = injectSaga({key: 'projectEditPage', saga});

export default compose(
  withSaga,
)(ProjectEditPage);
