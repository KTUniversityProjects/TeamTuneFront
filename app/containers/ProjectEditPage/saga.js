/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';
import {loadProject} from "./actions";
import {SESSIONID, USERID, HOST, TRANSLATIONS,REQUEST_RESPONSES} from "../App/constants";
import {GET_PROJECT} from "./constants";


export function* getProject(action) {

  const requestURL = HOST+`1338`;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const pID = action.id;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    project:{
    	id: pID
    }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "POST", requestData);
    console.log("RESPONSE");
    console.log(response);
    if (response.code == 0) {
      yield put(loadProject(response.data));
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

//Watcheris
export default function* checkLoginState() {
  const sessionID = sessionStorage.getItem(SESSIONID);
  if(sessionID == null)
  {
       yield put(push('/'));
  }
  yield takeLatest(GET_PROJECT, getProject);
}