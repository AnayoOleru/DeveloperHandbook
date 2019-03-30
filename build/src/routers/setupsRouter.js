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

router.get('/all/babel', _setupsController2.default.allBabel);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXJzL3NldHVwc1JvdXRlci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJzZXR1cHNDdHIiLCJhbGxTZXR1cCIsImFsbEJhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxzQkFBZjs7QUFFQUEsT0FDR0MsR0FESCxDQUNPLE1BRFAsRUFDZUMsMkJBQVVDLFFBRHpCOztBQUdBSCxPQUNHQyxHQURILENBQ08sWUFEUCxFQUNxQkMsMkJBQVVFLFFBRC9COztrQkFHZUosTSIsImZpbGUiOiJzZXR1cHNSb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXR1cHNDdHIgZnJvbSAnLi4vY29udHJvbGxlcnMvc2V0dXBzQ29udHJvbGxlcic7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXJcbiAgLmdldCgnL2FsbCcsIHNldHVwc0N0ci5hbGxTZXR1cCk7XG5cbnJvdXRlclxuICAuZ2V0KCcvYWxsL2JhYmVsJywgc2V0dXBzQ3RyLmFsbEJhYmVsKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19