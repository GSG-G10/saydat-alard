const { StatusCodes } = require('http-status-codes');
const FailureResponse = require('./FailureResponse');

module.exports = {
  badRequest: (message) => { throw new FailureResponse(StatusCodes.BAD_REQUEST, message); },
  notFound: (message) => { throw new FailureResponse(StatusCodes.NOT_FOUND, message); },
  unAuthorized: (message) => { throw new FailureResponse(StatusCodes.UNAUTHORIZED, message); },
  conflict: (message) => { throw new FailureResponse(StatusCodes.CONFLICT, message); },
  forbidden: (message) => { throw new FailureResponse(StatusCodes.FORBIDDEN, message); },
  notAllowedMethod: (message) => { throw new FailureResponse(StatusCodes.METHOD_NOT_ALLOWED, message || 'The requested resource does not support http method'); },
  payLoadTooLarge: (message) => { throw new FailureResponse(StatusCodes.REQUEST_TOO_LONG, message || 'Request payload too large.'); },
  internalServerError: (next, error) => next(error),
};
