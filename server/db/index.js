const { createActivity, getActivity } = require('./activity');

const {
  checkDuplicateIssue,
  closeIssue,
  createIssue,
  deleteIssue,
  downvoteIssue,
  getIssues,
  getOneIssue,
  searchIssues,
  submitAccountPaymentIssue,
  transformIssue,
  updateIssueArray,
  upvoteIssue,
} = require('./issues');
const {
  checkDuplicateUserEmail,
  checkDuplicateUsername,
  createUser,
  getOneUser,
  getUsers,
  getWatchList,
  searchUsers,
  submitAccountPaymentUser,
  transformUser,
  updateUserArray,
  userDownvote,
  userUpvote,
} = require('./users');
const { createComment, getComments, getIssueComments } = require('./comments');
const {
  checkDuplicatePullRequest,
  createPullRequest,
  deletePullRequest,
  getOnePullRequest,
  getPullRequestList,
  getPullRequests,
  getUserPullRequests,
} = require('./pullRequests');
const {
  checkDuplicateOrganization,
  createOrganization,
  deleteOrganization,
  getOneOrganization,
  getOrganizations,
  submitAccountPaymentOrganization,
  getOrganizationsWhere,
  searchOrganizations,
  transformOrganization,
  updateOrganizationArray,
} = require('./organizations');
const { createTables, dropAllTables, printTables } = require('./tables');
const { createWithdrawal, transformUserBalance } = require('./withdrawal');

module.exports = {
  checkDuplicateIssue,
  checkDuplicateOrganization,
  checkDuplicatePullRequest,
  checkDuplicateUserEmail,
  checkDuplicateUsername,
  closeIssue,
  createActivity,
  createComment,
  createIssue,
  createOrganization,
  createPullRequest,
  createTables,
  createUser,
  createWithdrawal,
  deleteIssue,
  deleteOrganization,
  deletePullRequest,
  downvoteIssue,
  dropAllTables,
  getActivity,
  getComments,
  getIssueComments,
  getIssues,
  getOneIssue,
  getOneOrganization,
  getOnePullRequest,
  getOneUser,
  getOrganizations,
  getOrganizationsWhere,
  getPullRequestList,
  getPullRequests,
  getUserPullRequests,
  getUsers,
  getWatchList,
  printTables,
  searchIssues,
  searchOrganizations,
  searchUsers,
  submitAccountPaymentIssue,
  submitAccountPaymentOrganization,
  submitAccountPaymentUser,
  transformIssue,
  transformOrganization,
  transformUser,
  transformUserBalance,
  updateIssueArray,
  updateOrganizationArray,
  updateUserArray,
  upvoteIssue,
  userDownvote,
  userUpvote,
};
