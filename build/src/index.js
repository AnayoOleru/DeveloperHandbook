'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _setupsRouter = require('./routers/setupsRouter');

var _setupsRouter2 = _interopRequireDefault(_setupsRouter);

var _codesRouter = require('./routers/codesRouter');

var _codesRouter2 = _interopRequireDefault(_codesRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv.config();

// import dotenv from 'dotenv';
var app = (0, _express2.default)();

// eslint-disable-next-line no-undef
app.use(_express2.default.static(_path2.default.join(__dirname)));

app.use('/css', _express2.default.static(__dirname + '../../views/css'));
app.use('/images', _express2.default.static(__dirname + '../../views/images'));
app.use('/js', _express2.default.static(__dirname + '../../views/js'));
app.use('/markup', _express2.default.static(__dirname + '../../views/markup'));

app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

// homepage
app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname + '../../views/markup/index.html'));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJleHByZXNzIiwic3RhdGljIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwiYm9keVBhcnNlciIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzZW5kRmlsZSIsInNldHVwcyIsImNvZGVzIiwic2VuZCIsInN0YXR1cyIsIm1lc3NhZ2UiLCJzZXQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQU5BO0FBUUEsSUFBTUEsTUFBTSx3QkFBWjs7QUFFQTtBQUNBQSxJQUFJQyxHQUFKLENBQVFDLGtCQUFRQyxNQUFSLENBQWVDLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFmLENBQVI7O0FBRUFOLElBQUlDLEdBQUosQ0FBUSxNQUFSLEVBQWdCQyxrQkFBUUMsTUFBUixDQUFlRyxZQUFZLGlCQUEzQixDQUFoQjtBQUNBTixJQUFJQyxHQUFKLENBQVEsU0FBUixFQUFtQkMsa0JBQVFDLE1BQVIsQ0FBZUcsWUFBWSxvQkFBM0IsQ0FBbkI7QUFDQU4sSUFBSUMsR0FBSixDQUFRLEtBQVIsRUFBZUMsa0JBQVFDLE1BQVIsQ0FBZUcsWUFBWSxnQkFBM0IsQ0FBZjtBQUNBTixJQUFJQyxHQUFKLENBQVEsU0FBUixFQUFtQkMsa0JBQVFDLE1BQVIsQ0FBZUcsWUFBWSxvQkFBM0IsQ0FBbkI7O0FBR0FOLElBQUlDLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ00sR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDL0JELE1BQUlFLE1BQUosQ0FBVyw2QkFBWCxFQUEwQyxHQUExQztBQUNBRixNQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsaUNBQTNDO0FBQ0FGLE1BQUlFLE1BQUosQ0FBVyw4QkFBWCxFQUEyQyxjQUEzQztBQUNBRDtBQUNELENBTEQ7O0FBT0FULElBQUlDLEdBQUosQ0FBUVUscUJBQVdDLElBQVgsRUFBUjtBQUNBWixJQUFJQyxHQUFKLENBQVFVLHFCQUFXRSxVQUFYLENBQXNCO0FBQzVCQyxZQUFVO0FBRGtCLENBQXRCLENBQVI7O0FBSUE7QUFDQWQsSUFBSWUsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVUixHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDN0JBLE1BQUlRLFFBQUosQ0FBYVosZUFBS0MsSUFBTCxDQUFVQyxZQUFZLCtCQUF0QixDQUFiO0FBQ0QsQ0FGSDs7QUFJQU4sSUFBSUMsR0FBSixDQUFRLGVBQVIsRUFBeUJnQixzQkFBekI7QUFDQWpCLElBQUlDLEdBQUosQ0FBUSxlQUFSLEVBQXlCaUIscUJBQXpCOztBQUVBbEIsSUFBSWUsR0FBSixDQUFRLFNBQVIsRUFBbUIsVUFBQ1IsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0JBLE1BQUlXLElBQUosQ0FBUyx1Q0FBVDtBQUNELENBRkQ7O0FBSUFuQixJQUFJQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNNLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCQSxNQUFJWSxNQUFKLENBQVcsR0FBWCxFQUFnQlIsSUFBaEIsQ0FBcUIsRUFBRVMsU0FBUywrQ0FBWCxFQUFyQjtBQUNELENBRkQ7O0FBSUFyQixJQUFJc0IsR0FBSixDQUFRLE1BQVIsRUFBaUJDLFFBQVFDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFyQzs7QUFFQXpCLElBQUkwQixNQUFKLENBQVcxQixJQUFJZSxHQUFKLENBQVEsTUFBUixDQUFYLEVBQTRCLFlBQU07QUFDaENZLFVBQVFDLEdBQVIscUNBQThDNUIsSUFBSWUsR0FBSixDQUFRLE1BQVIsQ0FBOUM7QUFDRCxDQUZEOztrQkFJZWYsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG4vLyBpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHNldHVwcyBmcm9tICcuL3JvdXRlcnMvc2V0dXBzUm91dGVyJztcbmltcG9ydCBjb2RlcyBmcm9tICcuL3JvdXRlcnMvY29kZXNSb3V0ZXInO1xuXG4vLyBkb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUpKSk7XG5cbmFwcC51c2UoJy9jc3MnLCBleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnLi4vLi4vdmlld3MvY3NzJykpO1xuYXBwLnVzZSgnL2ltYWdlcycsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcuLi8uLi92aWV3cy9pbWFnZXMnKSk7XG5hcHAudXNlKCcvanMnLCBleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnLi4vLi4vdmlld3MvanMnKSk7XG5hcHAudXNlKCcvbWFya3VwJywgZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy4uLy4uL3ZpZXdzL21hcmt1cCcpKTtcblxuXG5hcHAudXNlKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ0NvbnRlbnQtVHlwZScpO1xuICBuZXh0KCk7XG59KTtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gIGV4dGVuZGVkOiB0cnVlLFxufSkpO1xuXG4vLyBob21lcGFnZVxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lICsgJy4uLy4uL3ZpZXdzL21hcmt1cC9pbmRleC5odG1sJykpO1xuICB9KTtcblxuYXBwLnVzZSgnL2FwaS92MS9zZXR1cCcsIHNldHVwcyk7XG5hcHAudXNlKCcvYXBpL3YxL2NvZGVzJywgY29kZXMpO1xuXG5hcHAuZ2V0KCcvYXBpL3YxJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kKCdUaGlzIGlzIERldmVsb3BlclxcJ3MgSGFuZGJvb2sgd2ViLWFwcCcpO1xufSk7XG5cbmFwcC51c2UoJyonLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnUGFnZSBOb3QgRm91bmQuIEdvIHRvIC9hcGkvdjEgdG8gdXNlIHRoaXMgYXBpJyB9KTtcbn0pO1xuXG5hcHAuc2V0KCdwb3J0JywgKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCkpO1xuXG5hcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTm9kZSBzZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7YXBwLmdldCgncG9ydCcpfWApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdfQ==