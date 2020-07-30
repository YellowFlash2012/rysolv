import React, { useEffect } from 'react';
import T from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';

import AsyncRender from 'components/AsyncRender';
import IssueCard from 'components/Issues';
import { makeSelectAuth } from 'containers/Auth/selectors';
import { fetchWatchList, openModalState } from 'containers/Main/actions';
import makeSelectViewSize from 'containers/ViewSize/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  addAttempt,
  clearAlerts,
  fetchIssues,
  inputChange,
  searchIssues,
  upvoteIssue,
} from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import {
  makeSelectIssues,
  makeSelectIssuesError,
  makeSelectIssuesFiltered,
  makeSelectIssuesLoading,
  makeSelectIssuesSearchDisabled,
} from '../selectors';

// eslint-disable-next-line react/prefer-stateless-function
const IssuesOverview = ({
  activeUser,
  alerts,
  deviceView,
  disabled,
  dispatchFetchIssues,
  dispatchFetchWatchList,
  dispatchOpenModal,
  dispatchUpvote,
  error,
  handleClearAlerts,
  handleIncrement,
  handleInputChange,
  handleNav,
  handleSearchIssues,
  isSignedIn,
  issues,
  loading,
  params: { searchValue },
  search,
  upvoteLoading,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Issues';
    if (searchValue) {
      handleSearchIssues({ value: searchValue });
    } else {
      dispatchFetchIssues();
    }
    return handleClearAlerts;
  }, [searchValue]);

  const handleUpvote = ({ issueId, upvote, userId }) => {
    if (!upvoteLoading) dispatchUpvote({ issueId, upvote, userId });
  };

  return (
    <AsyncRender
      asyncData={issues}
      component={IssueCard}
      error={error}
      loading={loading}
      propsToPassDown={{
        activeUser,
        alerts,
        deviceView,
        disabled,
        dispatchFetchWatchList,
        dispatchOpenModal,
        handleClearAlerts,
        handleIncrement,
        handleInputChange,
        handleNav,
        handleSearchIssues,
        handleUpvote,
        isSignedIn,
        search,
      }}
    />
  );
};

IssuesOverview.propTypes = {
  activeUser: T.object,
  alerts: T.shape({
    error: T.oneOfType([T.bool, T.object]),
    success: T.oneOfType([T.bool, T.object]),
  }),
  deviceView: T.string,
  disabled: T.bool,
  dispatchFetchIssues: T.func,
  dispatchFetchWatchList: T.func,
  dispatchOpenModal: T.func,
  dispatchUpvote: T.func,
  error: T.oneOfType([T.object, T.bool]),
  handleClearAlerts: T.func,
  handleIncrement: T.func,
  handleInputChange: T.func,
  handleNav: T.func,
  handleSearchIssues: T.func,
  isSignedIn: T.bool,
  issues: T.array,
  loading: T.bool,
  params: T.object,
  search: T.object,
  upvoteLoading: T.bool,
};

const mapStateToProps = createStructuredSelector({
  /**
   * Reducer : Auth
   */
  activeUser: makeSelectAuth('activeUser'),
  isSignedIn: makeSelectAuth('isSignedIn'),
  /**
   * Reducer : Issues
   */
  alerts: makeSelectIssues('alerts'),
  disabled: makeSelectIssuesSearchDisabled(),
  error: makeSelectIssuesError('issues'),
  issues: makeSelectIssuesFiltered(),
  loading: makeSelectIssuesLoading('issues'),
  search: makeSelectIssues('search'),
  upvoteLoading: makeSelectIssuesLoading('upvoteIssue'),
  /**
   * Reducer : ViewSize
   */
  deviceView: makeSelectViewSize('deviceView'),
});

function mapDispatchToProps(dispatch) {
  return {
    /*
     * Reducer : Issues
     */
    dispatchFetchIssues: () => dispatch(fetchIssues()),
    dispatchUpvote: payload => dispatch(upvoteIssue(payload)),
    handleClearAlerts: () => dispatch(clearAlerts()),
    handleIncrement: payload => dispatch(addAttempt(payload)),
    handleInputChange: payload => dispatch(inputChange(payload)),
    handleSearchIssues: payload => dispatch(searchIssues(payload)),
    /*
     * Reducer : Main
     */
    dispatchFetchWatchList: payload => dispatch(fetchWatchList(payload)),
    dispatchOpenModal: payload => dispatch(openModalState(payload)),
    /*
     * Reducer : Router
     */
    handleNav: route => dispatch(push(route)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'issues', reducer });
const withSaga = injectSaga({ key: 'issues', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(IssuesOverview);
