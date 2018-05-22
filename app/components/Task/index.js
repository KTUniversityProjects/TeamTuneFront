/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from './DeleteButton';
import './styles.css';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import InlineEdit from 'react-edit-inline';
import {compose} from 'redux';
import {editTaskRequest} from "../../containers/BoardsList/actions";

export class Task extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
        <div className="title">
          <InlineEdit
              activeClassName="editing"
              text={item.name}
              paramName="message"
              change={this.props.changeTaskText.bind(this, item.id)}
            />
          <DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        />
        </div>
    );
  }
}
Task.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
  changeTaskText: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    changeTaskText: (itemID, data) => {
       dispatch(editTaskRequest(data, itemID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  )(Task);