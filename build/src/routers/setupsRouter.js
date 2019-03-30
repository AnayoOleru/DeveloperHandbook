'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _setupsController = require('../controllers/setupsController');

var _setupsController2 = _interopRequireDefault(_setupsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/all', _setupsController2.default.allSetup);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXJzL3NldHVwc1JvdXRlci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJzZXR1cHNDdHIiLCJhbGxTZXR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsc0JBQWY7O0FBRUFBLE9BQ0dDLEdBREgsQ0FDTyxNQURQLEVBQ2VDLDJCQUFVQyxRQUR6Qjs7a0JBR2VILE0iLCJmaWxlIjoic2V0dXBzUm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgc2V0dXBzQ3RyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NldHVwc0NvbnRyb2xsZXInO1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyXG4gIC5nZXQoJy9hbGwnLCBzZXR1cHNDdHIuYWxsU2V0dXApO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=