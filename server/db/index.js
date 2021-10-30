const {
  createActivity,
  getRepoActivity,
  getUserActivity,
} = require('./queries/activity');
const { removeAttempting, toggleAttempting } = require('./queries/attempting');
const { acceptBounty, verifyPayout } = require('./queries/bounties');
const { createComment, getIssueComments } = require('./queries/comments');
const {
  createCompany,
  createCompanyPosition,
  createMessage,
  getCompanyPositions,
  getPositionCandidates,
  postContractAccepted,
} = require('./queries/companies');
const {
  checkDuplicateIssue,
  closeIssue,
  createIssue,
  downvoteIssue,
  getFilterOptions,
  getIssueAttemptList,
  getIssueList,
  getIssues,
  getIssueWatchList,
  getOneIssue,
  searchIssues,
  transformIssue,
  upvoteIssue,
} = require('./queries/issues');
const {
  createLanguage,
  deleteUserLanguages,
  getUserLanguages,
  setPreferredLanguage,
} = require('./queries/languages');
const {
  submitAccountDepositUser,
  submitExternalPayment,
  submitInternalPayment,
} = require('./queries/payments');
const {
  checkDuplicatePullRequest,
  createPullRequest,
  deletePullRequest,
  deleteUserPullRequests,
  getPullRequestList,
  getUserPullRequests,
} = require('./queries/pullRequests');
const { getQuestions, postUserResponse } = require('./queries/questions');
const { createRecruiting } = require('./queries/recruiting');
const {
  checkDuplicateRepo,
  createRepo,
  getOneRepo,
  getRepoContributors,
  getRepoList,
  getRepos,
  getReposWhere,
  searchRepos,
  transformRepo,
  updateRepoArray,
} = require('./queries/repos');
const {
  createPositionTechStack,
  getOneTechnology,
  getTechnologies,
} = require('./queries/technologies');
const { getStats } = require('./queries/stats');
const { addRepoMembers, deleteRepoMembers } = require('./queries/userRepos');
const {
  assignOwnerToRepo,
  checkDuplicateGithubId,
  checkDuplicateUserEmail,
  checkExistingGithubAccount,
  checkGithubIdMatch,
  createUser,
  getOneUser,
  getOneUserSignUp,
  getUserAttemptList,
  getUserBounties,
  getUserPullRequestDetail,
  getUsers,
  getUserSettings,
  getUserWatchList,
  insertGitUser,
  insertUserCompany,
  insertUserEmail,
  searchUsers,
  transformUser,
} = require('./queries/users');
const { removeWatching, toggleWatching } = require('./queries/watching');
const {
  createWithdrawal,
  transformUserBalance,
} = require('./queries/withdrawal');

module.exports = {
  acceptBounty,
  addRepoMembers,
  assignOwnerToRepo,
  checkDuplicateGithubId,
  checkDuplicateIssue,
  checkDuplicatePullRequest,
  checkDuplicateRepo,
  checkDuplicateUserEmail,
  checkExistingGithubAccount,
  checkGithubIdMatch,
  closeIssue,
  createActivity,
  createComment,
  createCompany,
  createCompanyPosition,
  createIssue,
  createLanguage,
  createMessage,
  createPositionTechStack,
  createPullRequest,
  createRecruiting,
  createRepo,
  createUser,
  createWithdrawal,
  deletePullRequest,
  deleteRepoMembers,
  deleteUserLanguages,
  deleteUserPullRequests,
  downvoteIssue,
  getCompanyPositions,
  getFilterOptions,
  getIssueAttemptList,
  getIssueComments,
  getIssueList,
  getIssues,
  getIssueWatchList,
  getOneIssue,
  getOneRepo,
  getOneTechnology,
  getOneUser,
  getOneUserSignUp,
  getPositionCandidates,
  getPullRequestList,
  getQuestions,
  getRepoActivity,
  getRepoContributors,
  getRepoList,
  getRepos,
  getReposWhere,
  getStats,
  getTechnologies,
  getUserActivity,
  getUserAttemptList,
  getUserBounties,
  getUserLanguages,
  getUserPullRequestDetail,
  getUserPullRequests,
  getUsers,
  getUserSettings,
  getUserWatchList,
  insertGitUser,
  insertUserCompany,
  insertUserEmail,
  postContractAccepted,
  postUserResponse,
  removeAttempting,
  removeWatching,
  searchIssues,
  searchRepos,
  searchUsers,
  setPreferredLanguage,
  submitAccountDepositUser,
  submitExternalPayment,
  submitInternalPayment,
  toggleAttempting,
  toggleWatching,
  transformIssue,
  transformRepo,
  transformUser,
  transformUserBalance,
  updateRepoArray,
  upvoteIssue,
  verifyPayout,
};
