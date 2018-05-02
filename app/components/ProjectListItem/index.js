/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import ProjectLink from './ProjectLink';
import Wrapper from './Wrapper';
import DeleteButton from './DeleteButton';


export default class ProjectListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    // Put together the content of the repository
    return (
      <Wrapper>
        <ProjectLink href={`/project?id=${item.id}`}>
          {item.name}
        </ProjectLink>
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
