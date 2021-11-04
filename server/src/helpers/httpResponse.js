const { StatusCodes } = require('http-status-codes');
const SuccessResponse = require('./SuccessResponse');

module.exports = {
  created: (res, data, message) => res.status(StatusCodes.CREATED)
    .json(new SuccessResponse(data, message)),
  ok: (res, data, message) => res.status(StatusCodes.OK)
    .json(new SuccessResponse(data, message)),
};
