'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _codesController = require('../controllers/codesController');

var _codesController2 = _interopRequireDefault(_codesController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/all', _codesController2.default.allCodes);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXJzL2NvZGVzUm91dGVyLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImdldCIsImNvZGVzQ3RyIiwiYWxsQ29kZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLHNCQUFmOztBQUVBQSxPQUNHQyxHQURILENBQ08sTUFEUCxFQUNlQywwQkFBU0MsUUFEeEI7O2tCQUdlSCxNIiwiZmlsZSI6ImNvZGVzUm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29kZXNDdHIgZnJvbSAnLi4vY29udHJvbGxlcnMvY29kZXNDb250cm9sbGVyJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlclxuICAuZ2V0KCcvYWxsJywgY29kZXNDdHIuYWxsQ29kZXMpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=