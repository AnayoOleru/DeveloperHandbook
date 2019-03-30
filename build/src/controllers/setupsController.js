'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setupsData = require('../Data/setupsData');

var _setupsData2 = _interopRequireDefault(_setupsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupsCtr = {
  /**
     * @staticmethod
     * @param {object} req - Request Object
     * @param {object} res - Response Object
     * @returns {array} - Returns all: Array of objects
     */
  allSetup: function allSetup(req, res) {
    return res.status(200).json(_setupsData2.default);
  }
};

exports.default = setupsCtr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9zZXR1cHNDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNldHVwc0N0ciIsImFsbFNldHVwIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldHVwc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2xCOzs7Ozs7QUFNRUMsVUFQZ0Isb0JBT1BDLEdBUE8sRUFPRkMsR0FQRSxFQU9HO0FBQ2pCLFdBQU9BLElBQUlDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsb0JBQXJCLENBQVA7QUFDRDtBQVRlLENBQWxCOztrQkFZZU4sUyIsImZpbGUiOiJzZXR1cHNDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHVwc0RhdGEgZnJvbSAnLi4vRGF0YS9zZXR1cHNEYXRhJztcblxuY29uc3Qgc2V0dXBzQ3RyID0ge1xuLyoqXG4gICAqIEBzdGF0aWNtZXRob2RcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlcSAtIFJlcXVlc3QgT2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXMgLSBSZXNwb25zZSBPYmplY3RcbiAgICogQHJldHVybnMge2FycmF5fSAtIFJldHVybnMgYWxsOiBBcnJheSBvZiBvYmplY3RzXG4gICAqL1xuICBhbGxTZXR1cChyZXEsIHJlcykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihzZXR1cHNEYXRhKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwc0N0cjtcbiJdfQ==