'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _codesData = require('../Data/codesData');

var _codesData2 = _interopRequireDefault(_codesData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codesCtr = {
  /**
     * @staticmethod
     * @param {object} req - Request Object
     * @param {object} res - Response Object
     * @returns {array} - Returns all: Array of objects
     */
  allCodes: function allCodes(req, res) {
    // console.log(codesData[0].id);
    return res.status(200).json(_codesData2.default);
  }
};

exports.default = codesCtr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9jb2Rlc0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29kZXNDdHIiLCJhbGxDb2RlcyIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJjb2Rlc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXO0FBQ2pCOzs7Ozs7QUFNRUMsVUFQZSxvQkFPTkMsR0FQTSxFQU9EQyxHQVBDLEVBT0k7QUFDakI7QUFDQSxXQUFPQSxJQUFJQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLG1CQUFyQixDQUFQO0FBQ0Q7QUFWYyxDQUFqQjs7a0JBYWVOLFEiLCJmaWxlIjoiY29kZXNDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvZGVzRGF0YSBmcm9tICcuLi9EYXRhL2NvZGVzRGF0YSc7XG5cbmNvbnN0IGNvZGVzQ3RyID0ge1xuLyoqXG4gICAqIEBzdGF0aWNtZXRob2RcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlcSAtIFJlcXVlc3QgT2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXMgLSBSZXNwb25zZSBPYmplY3RcbiAgICogQHJldHVybnMge2FycmF5fSAtIFJldHVybnMgYWxsOiBBcnJheSBvZiBvYmplY3RzXG4gICAqL1xuICBhbGxDb2RlcyhyZXEsIHJlcykge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvZGVzRGF0YVswXS5pZCk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvZGVzRGF0YSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2Rlc0N0cjtcbiJdfQ==