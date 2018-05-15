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
import { Link } from 'react-router-dom';


export default class ProjectListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
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


      </Wrapper>
    );
  }
}
ProjectListItem.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
};
