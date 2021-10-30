const { StatusCodes } = require('http-status-codes');
const FailureResponse = require('./FailureResponse');
const SuccessResponse = require('./SuccessResponse');

module.exports = {
  created: (res, data, message) => res.status(StatusCodes.CREATED)
    .json(new SuccessResponse(data, message)),
  ok: (res, data, message) => res.status(StatusCodes.OK)
    .json(new SuccessResponse(data, message)),
  badRequest: (res, message) => res.status(StatusCodes.BAD_REQUEST)
    .json(new FailureResponse(message)),
  notFound: (res, message) => res.status(StatusCodes.NOT_FOUND)
    .json(new FailureResponse(message)),
  unAuthorized: (res, message) => res.status(StatusCodes.UNAUTHORIZED)
    .json(new FailureResponse(message)),
  conflict: (res, message) => res.status(StatusCodes.CONFLICT)
    .json(new FailureResponse(message)),
  forbidden: (res, message) => res.status(StatusCodes.FORBIDDEN)
    .json(new FailureResponse(message)),
  notAllowedMethod: (request, res, message) => res
    .status(StatusCodes.METHOD_NOT_ALLOWED)
    .json(
      new FailureResponse(
        message || `The requested resource does not support http method '${request.method}'.'${request.path}'`,
      ),
    ),
  payLoadTooLarge: (res, message) => res.status(StatusCodes.REQUEST_TOO_LONG).json(new FailureResponse(message || 'Request payload too large.')),
  internalServerError: (next, error) => next(error),
};
