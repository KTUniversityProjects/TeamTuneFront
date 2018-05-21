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
import './Styles.css';

export class BoardsList extends React.PureComponent {

  componentDidMount() {
    this.props.onPageLoad(this.props.projectID);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.projectID != nextProps.projectID)
    {
       this.props.onPageLoad(nextProps.projectID);
    }
  }

  render() {
    const { boards, onDelete } = this.props;
    var content = (<div></div>);
    if (boards) {
      content = (
        <div>
          {boards.map(item => (
            <Board key={item.id} item={item} projectID={this.props.projectID} onDeleteClick={onDelete.bind(null, item.id, this.props.projectID)}/>
          ))}
        </div>
        );
    }
      return (
        <div>
        {content}
        <div className="boardBlock">
        <div>
            <Form >
                  <Input
                    id="name"
                    type="text"
                    placeholder="Board name"
                    className="newForm"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                  /><br />
                  <Input
                    id="description"
                    type="text"
                    className="newForm"
                    placeholder="Board description"
                    value={this.props.description}
                    onChange={this.props.onChangeDescription}
                  /><br />
                  <Button
                    id="add"
                    type="submit"
                    className="newForm"
                    class="submitButton"
                    children="Add new board"
                    onClick={this.props.onSubmitForm.bind(null, this.props.projectID)}
                  />
              </Form>
          </div>
        </div>
          </div>
      );
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
    onDelete: (boardID, projectID) => {
      dispatch(deleteBoardRequest(boardID, projectID));
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
