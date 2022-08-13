"use strict";
class Constants {
}
Constants.DB_CONNECTION_STRING = `${process.env.MONGODB_URL}`;
Object.seal(Constants);
module.exports = Constants;
