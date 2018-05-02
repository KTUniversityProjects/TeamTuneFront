import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {createStructuredSelector} from 'reselect';
import {makeSelectBoards} from "./selectors";
import { makeSelectName } from './selectors';
import { makeSelectDescription } from './selectors';

import {loadBoardsRequest} from "./actions";
import {deleteBoardRequest} from "./actions";
import { changeName} from './actions';
import { changeDescription } from './actions';
import { addBoardRequest } from './actions';

import Board from '../../components/Board';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';


export class BoardsList extends React.PureComponent {

  componentDidMount() {
    this.props.onPageLoad(this.props.projectID);
  }

  render() {
    const { boards, onDelete } = this.props;
    let content = (<div></div>);
    if (boards) {
      content = (
        <div>
          {boards.map(item => (
            <Board key={item.id} item={item} onDeleteClick={onDelete.bind(null, item.id)}/>
          ))}
         <div>
          <Form>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Project name"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                  /><br />
                  <Input
                    id="description"
                    type="text"
                    placeholder="Project description"
                    value={this.props.description}
                    onChange={this.props.onChangeDescription}
                  /><br />
                  <Button
                    id="add"
                    type="submit"
                    children="Add new project"
                    onClick={this.props.onSubmitForm.bind(null, this.props.projectID)}
                  />
              </Form>
          </div>
        </div>
      );
    }
    if (!boards) {
      content = (
        <Form>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Project name"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                  /><br />
                  <Input
                    id="description"
                    type="text"
                    placeholder="Project description"
                    value={this.props.description}
                    onChange={this.props.onChangeDescription}
                  /><br />
                  <Button
                    id="add"
                    type="submit"
                    children="Add new project"
                    onClick={this.props.onSubmitForm.bind(null, this.props.projectID)}
                  />
              </Form>
        )
    }
    return content;
  }
}

BoardsList.propTypes = {
  boards: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onDelete: PropTypes.func,
  projectID: PropTypes.string,
  onSubmitForm: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeDescription: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (data) => {
      dispatch(loadBoardsRequest(data));
    },
    onDelete: (boardID) => {
      dispatch(deleteBoardRequest(boardID));
    },
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
    onChangeDescription: (evt) => dispatch(changeDescription(evt.target.value)),
    onSubmitForm: (projectID) => {
      dispatch(addBoardRequest(projectID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  boards: makeSelectBoards(),
  name: makeSelectName(),
  description: makeSelectDescription(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'boards', saga});
const withReducer = injectReducer({key: 'boards', reducer});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BoardsList);
