'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('babel-polyfill');

var _setupsRouter = require('./routers/setupsRouter');

var _setupsRouter2 = _interopRequireDefault(_setupsRouter);

var _codesRouter = require('./routers/codesRouter');

var _codesRouter2 = _interopRequireDefault(_codesRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv.config();

var app = (0, _express2.default)();
// import dotenv from 'dotenv';

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

app.use('/api/v1/setup', _setupsRouter2.default);
app.use('/api/v1/codes', _codesRouter2.default);

app.get('/api/v1', function (req, res) {
  res.send('This is Developer\'s Handbook web-app');
});

app.use('*', function (req, res) {
  res.status(404).json({ message: 'Page Not Found. Go to /api/v1 to use this api' });
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Node server is running on port ' + app.get('port'));
});

exports.default = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInNldHVwcyIsImNvZGVzIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsInN0YXR1cyIsIm1lc3NhZ2UiLCJzZXQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaO0FBUEE7O0FBUUFBLElBQUlDLEdBQUosQ0FBUUMscUJBQVdDLElBQVgsRUFBUjtBQUNBSCxJQUFJQyxHQUFKLENBQVFDLHFCQUFXRSxVQUFYLENBQXNCO0FBQzVCQyxZQUFVO0FBRGtCLENBQXRCLENBQVI7O0FBSUFMLElBQUlDLEdBQUosQ0FBUSxlQUFSLEVBQXlCSyxzQkFBekI7QUFDQU4sSUFBSUMsR0FBSixDQUFRLGVBQVIsRUFBeUJNLHFCQUF6Qjs7QUFFQVAsSUFBSVEsR0FBSixDQUFRLFNBQVIsRUFBbUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0JBLE1BQUlDLElBQUosQ0FBUyx1Q0FBVDtBQUNELENBRkQ7O0FBSUFYLElBQUlDLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ1EsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekJBLE1BQUlFLE1BQUosQ0FBVyxHQUFYLEVBQWdCVCxJQUFoQixDQUFxQixFQUFFVSxTQUFTLCtDQUFYLEVBQXJCO0FBQ0QsQ0FGRDs7QUFJQWIsSUFBSWMsR0FBSixDQUFRLE1BQVIsRUFBaUJDLFFBQVFDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFyQzs7QUFFQWpCLElBQUlrQixNQUFKLENBQVdsQixJQUFJUSxHQUFKLENBQVEsTUFBUixDQUFYLEVBQTRCLFlBQU07QUFDaENXLFVBQVFDLEdBQVIscUNBQThDcEIsSUFBSVEsR0FBSixDQUFRLE1BQVIsQ0FBOUM7QUFDRCxDQUZEOztrQkFJZVIsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG4vLyBpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBzZXR1cHMgZnJvbSAnLi9yb3V0ZXJzL3NldHVwc1JvdXRlcic7XG5pbXBvcnQgY29kZXMgZnJvbSAnLi9yb3V0ZXJzL2NvZGVzUm91dGVyJztcblxuLy8gZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgZXh0ZW5kZWQ6IHRydWVcbn0pKTtcblxuYXBwLnVzZSgnL2FwaS92MS9zZXR1cCcsIHNldHVwcyk7XG5hcHAudXNlKCcvYXBpL3YxL2NvZGVzJywgY29kZXMpO1xuXG5hcHAuZ2V0KCcvYXBpL3YxJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdUaGlzIGlzIERldmVsb3BlclxcJ3MgSGFuZGJvb2sgd2ViLWFwcCcpO1xufSk7XG5cbmFwcC51c2UoJyonLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnUGFnZSBOb3QgRm91bmQuIEdvIHRvIC9hcGkvdjEgdG8gdXNlIHRoaXMgYXBpJyB9KTtcbn0pO1xuXG5hcHAuc2V0KCdwb3J0JywgKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCkpO1xuXG5hcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTm9kZSBzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7YXBwLmdldCgncG9ydCcpfWApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==