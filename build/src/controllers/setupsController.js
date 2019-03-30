'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setupsData = require('../Data/setupsData');

var _setupsData2 = _interopRequireDefault(_setupsData);

var _BabelSetup = require('../Data/BabelSetup');

var _BabelSetup2 = _interopRequireDefault(_BabelSetup);

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
  },

  /**
   * @staticmethod
   * @param {object} req - Request Object
   * @param {object} res - Response Object
   * @returns {array} - Returns all: Array of objects
   */
  allBabel: function allBabel(req, res) {
    return res.status(200).json(_BabelSetup2.default);
  }
};

exports.default = setupsCtr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9zZXR1cHNDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNldHVwc0N0ciIsImFsbFNldHVwIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldHVwc0RhdGEiLCJhbGxCYWJlbCIsInNldHVwQmFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDbEI7Ozs7OztBQU1FQyxVQVBnQixvQkFPUEMsR0FQTyxFQU9GQyxHQVBFLEVBT0c7QUFDakIsV0FBT0EsSUFBSUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCQyxvQkFBckIsQ0FBUDtBQUNELEdBVGU7O0FBVWhCOzs7Ozs7QUFNQUMsVUFoQmdCLG9CQWdCUEwsR0FoQk8sRUFnQkZDLEdBaEJFLEVBZ0JHO0FBQ2pCLFdBQU9BLElBQUlDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkcsb0JBQXJCLENBQVA7QUFDRDtBQWxCZSxDQUFsQjs7a0JBcUJlUixTIiwiZmlsZSI6InNldHVwc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0dXBzRGF0YSBmcm9tICcuLi9EYXRhL3NldHVwc0RhdGEnO1xuaW1wb3J0IHNldHVwQmFiZWwgZnJvbSAnLi4vRGF0YS9CYWJlbFNldHVwJztcblxuY29uc3Qgc2V0dXBzQ3RyID0ge1xuLyoqXG4gICAqIEBzdGF0aWNtZXRob2RcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlcSAtIFJlcXVlc3QgT2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXMgLSBSZXNwb25zZSBPYmplY3RcbiAgICogQHJldHVybnMge2FycmF5fSAtIFJldHVybnMgYWxsOiBBcnJheSBvZiBvYmplY3RzXG4gICAqL1xuICBhbGxTZXR1cChyZXEsIHJlcykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihzZXR1cHNEYXRhKTtcbiAgfSxcbiAgLyoqXG4gICAqIEBzdGF0aWNtZXRob2RcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlcSAtIFJlcXVlc3QgT2JqZWN0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZXMgLSBSZXNwb25zZSBPYmplY3RcbiAgICogQHJldHVybnMge2FycmF5fSAtIFJldHVybnMgYWxsOiBBcnJheSBvZiBvYmplY3RzXG4gICAqL1xuICBhbGxCYWJlbChyZXEsIHJlcykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihzZXR1cEJhYmVsKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwc0N0cjtcbiJdfQ==