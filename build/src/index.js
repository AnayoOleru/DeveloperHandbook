'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import users from './src/router/userRouter';
// import parcels from './src/router/parcelRouter';

// dotenv.config();

var app = (0, _express2.default)();
// import dotenv from 'dotenv';

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

// app.use('/api/v1/users', users);
// app.use('/api/v1/parcels', parcels);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJzdGF0dXMiLCJtZXNzYWdlIiwic2V0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQU1BLE1BQU0sd0JBQVo7QUFQQTs7QUFRQUEsSUFBSUMsR0FBSixDQUFRQyxxQkFBV0MsSUFBWCxFQUFSO0FBQ0FILElBQUlDLEdBQUosQ0FBUUMscUJBQVdFLFVBQVgsQ0FBc0I7QUFDNUJDLFlBQVU7QUFEa0IsQ0FBdEIsQ0FBUjs7QUFJQTtBQUNBO0FBQ0FMLElBQUlNLEdBQUosQ0FBUSxTQUFSLEVBQW1CLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQy9CQSxNQUFJQyxJQUFKLENBQVMsdUNBQVQ7QUFDRCxDQUZEOztBQUlBVCxJQUFJQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNNLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCQSxNQUFJRSxNQUFKLENBQVcsR0FBWCxFQUFnQlAsSUFBaEIsQ0FBcUIsRUFBRVEsU0FBUywrQ0FBWCxFQUFyQjtBQUNELENBRkQ7O0FBSUFYLElBQUlZLEdBQUosQ0FBUSxNQUFSLEVBQWlCQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBckM7O0FBRUFmLElBQUlnQixNQUFKLENBQVdoQixJQUFJTSxHQUFKLENBQVEsTUFBUixDQUFYLEVBQTRCLFlBQU07QUFDaENXLFVBQVFDLEdBQVIscUNBQThDbEIsSUFBSU0sR0FBSixDQUFRLE1BQVIsQ0FBOUM7QUFDRCxDQUZEOztrQkFJZU4sRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG4vLyBpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbi8vIGltcG9ydCB1c2VycyBmcm9tICcuL3NyYy9yb3V0ZXIvdXNlclJvdXRlcic7XG4vLyBpbXBvcnQgcGFyY2VscyBmcm9tICcuL3NyYy9yb3V0ZXIvcGFyY2VsUm91dGVyJztcblxuLy8gZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgZXh0ZW5kZWQ6IHRydWVcbn0pKTtcblxuLy8gYXBwLnVzZSgnL2FwaS92MS91c2VycycsIHVzZXJzKTtcbi8vIGFwcC51c2UoJy9hcGkvdjEvcGFyY2VscycsIHBhcmNlbHMpO1xuYXBwLmdldCgnL2FwaS92MScsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZCgnVGhpcyBpcyBEZXZlbG9wZXJcXCdzIEhhbmRib29rIHdlYi1hcHAnKTtcbn0pO1xuXG5hcHAudXNlKCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1BhZ2UgTm90IEZvdW5kLiBHbyB0byAvYXBpL3YxIHRvIHVzZSB0aGlzIGFwaScgfSk7XG59KTtcblxuYXBwLnNldCgncG9ydCcsIChwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApKTtcblxuYXBwLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksICgpID0+IHtcbiAgY29uc29sZS5sb2coYE5vZGUgc2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke2FwcC5nZXQoJ3BvcnQnKX1gKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXX0=