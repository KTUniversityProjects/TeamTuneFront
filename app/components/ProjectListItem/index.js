/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import  './Styles.css';
import Wrapper from './Wrapper';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {projectEditRedirect} from "./actions";
import injectSaga from '../../utils/injectSaga';
import saga from './saga';


export class ProjectListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const editButton = <EditButton
          project-id={item.id}
          children="Edit"
          onClick={this.props.onEditClick}
        />;
    // Put together the content of the repository
    return (
      <Wrapper>
        <Link
          className="projectLink"
          to={`/project?id=${item.id}`}
          children={item.name}
        />
        <DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        />
        <EditButton
          children="Edit"
          onClick={this.props.onEditClick.bind(null, item.id)}
        />
      </Wrapper>
    );
  }
}
ProjectListItem.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onEditClick: (itemID) => {
       dispatch(projectEditRedirect(itemID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withSaga = injectSaga({ key: 'projectListItem', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withSaga,
  withConnect
  )(ProjectListItem);