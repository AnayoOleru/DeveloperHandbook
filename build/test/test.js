'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

_chai2.default.use(require('chai-like'));
_chai2.default.use(require('chai-things'));

var expect = _chai2.default.expect;


describe('/api/v1', function () {
  it('It should return  welcome message', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });
});

describe('/api/v1/setup/all', function () {
  it('It should return all setups', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/setup/all').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array').that.contains.something.like({ id: 1111 });
      done();
    });
  });
});

describe('/api/v1/codes/all', function () {
  it('It should return all codes error and messages', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/codes/all').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array').that.contains.something.like({ id: 2222 });
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvdGVzdC5qcyJdLCJuYW1lcyI6WyJjaGFpIiwidXNlIiwiY2hhaUh0dHAiLCJyZXF1aXJlIiwiZXhwZWN0IiwiZGVzY3JpYmUiLCJpdCIsImRvbmUiLCJyZXF1ZXN0IiwiYXBwIiwiZ2V0IiwiZW5kIiwiZXJyIiwicmVzIiwidG8iLCJoYXZlIiwic3RhdHVzIiwiYm9keSIsImJlIiwiYW4iLCJ0aGF0IiwiY29udGFpbnMiLCJzb21ldGhpbmciLCJsaWtlIiwiaWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFJQUEsZUFBS0MsR0FBTCxDQUFTQyxrQkFBVDs7QUFFQUYsZUFBS0MsR0FBTCxDQUFTRSxRQUFRLFdBQVIsQ0FBVDtBQUNBSCxlQUFLQyxHQUFMLENBQVNFLFFBQVEsYUFBUixDQUFUOztJQUVRQyxNLEdBQVdKLGMsQ0FBWEksTTs7O0FBRVJDLFNBQVMsU0FBVCxFQUFvQixZQUFNO0FBQ3hCQyxLQUFHLG1DQUFILEVBQXdDLFVBQUNDLElBQUQsRUFBVTtBQUNoRFAsbUJBQUtRLE9BQUwsQ0FBYUMsZUFBYixFQUNHQyxHQURILENBQ08sU0FEUCxFQUVHQyxHQUZILENBRU8sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakJULGFBQU9TLEdBQVAsRUFBWUMsRUFBWixDQUFlQyxJQUFmLENBQW9CQyxNQUFwQixDQUEyQixHQUEzQjtBQUNBWixhQUFPUyxJQUFJSSxJQUFYLEVBQWlCSCxFQUFqQixDQUFvQkksRUFBcEIsQ0FBdUJDLEVBQXZCLENBQTBCLFFBQTFCO0FBQ0FaO0FBQ0QsS0FOSDtBQU9ELEdBUkQ7QUFTRCxDQVZEOztBQVlBRixTQUFTLG1CQUFULEVBQThCLFlBQU07QUFDbENDLEtBQUcsNkJBQUgsRUFBa0MsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDUCxtQkFBS1EsT0FBTCxDQUFhQyxlQUFiLEVBQ0dDLEdBREgsQ0FDTyxtQkFEUCxFQUVHQyxHQUZILENBRU8sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakJULGFBQU9TLEdBQVAsRUFBWUMsRUFBWixDQUFlQyxJQUFmLENBQW9CQyxNQUFwQixDQUEyQixHQUEzQjtBQUNBWixhQUFPUyxJQUFJSSxJQUFYLEVBQWlCSCxFQUFqQixDQUFvQkksRUFBcEIsQ0FBdUJDLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DQyxJQUFuQyxDQUF3Q0MsUUFBeEMsQ0FBaURDLFNBQWpELENBQTJEQyxJQUEzRCxDQUFnRSxFQUFFQyxJQUFJLElBQU4sRUFBaEU7QUFDQWpCO0FBQ0QsS0FOSDtBQU9ELEdBUkQ7QUFTRCxDQVZEOztBQVlBRixTQUFTLG1CQUFULEVBQThCLFlBQU07QUFDbENDLEtBQUcsK0NBQUgsRUFBb0QsVUFBQ0MsSUFBRCxFQUFVO0FBQzVEUCxtQkFBS1EsT0FBTCxDQUFhQyxlQUFiLEVBQ0dDLEdBREgsQ0FDTyxtQkFEUCxFQUVHQyxHQUZILENBRU8sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakJULGFBQU9TLEdBQVAsRUFBWUMsRUFBWixDQUFlQyxJQUFmLENBQW9CQyxNQUFwQixDQUEyQixHQUEzQjtBQUNBWixhQUFPUyxJQUFJSSxJQUFYLEVBQWlCSCxFQUFqQixDQUFvQkksRUFBcEIsQ0FBdUJDLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DQyxJQUFuQyxDQUF3Q0MsUUFBeEMsQ0FBaURDLFNBQWpELENBQTJEQyxJQUEzRCxDQUFnRSxFQUFFQyxJQUFJLElBQU4sRUFBaEU7QUFDQWpCO0FBQ0QsS0FOSDtBQU9ELEdBUkQ7QUFTRCxDQVZEIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpSHR0cCBmcm9tICdjaGFpLWh0dHAnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9zcmMvaW5kZXgnO1xuXG5cblxuY2hhaS51c2UoY2hhaUh0dHApO1xuXG5jaGFpLnVzZShyZXF1aXJlKCdjaGFpLWxpa2UnKSk7XG5jaGFpLnVzZShyZXF1aXJlKCdjaGFpLXRoaW5ncycpKTtcblxuY29uc3QgeyBleHBlY3QgfSA9IGNoYWk7XG5cbmRlc2NyaWJlKCcvYXBpL3YxJywgKCkgPT4ge1xuICBpdCgnSXQgc2hvdWxkIHJldHVybiAgd2VsY29tZSBtZXNzYWdlJywgKGRvbmUpID0+IHtcbiAgICBjaGFpLnJlcXVlc3QoYXBwKVxuICAgICAgLmdldCgnL2FwaS92MScpXG4gICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICBleHBlY3QocmVzKS50by5oYXZlLnN0YXR1cygyMDApO1xuICAgICAgICBleHBlY3QocmVzLmJvZHkpLnRvLmJlLmFuKCdvYmplY3QnKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCcvYXBpL3YxL3NldHVwL2FsbCcsICgpID0+IHtcbiAgaXQoJ0l0IHNob3VsZCByZXR1cm4gYWxsIHNldHVwcycsIChkb25lKSA9PiB7XG4gICAgY2hhaS5yZXF1ZXN0KGFwcClcbiAgICAgIC5nZXQoJy9hcGkvdjEvc2V0dXAvYWxsJylcbiAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGV4cGVjdChyZXMpLnRvLmhhdmUuc3RhdHVzKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXMuYm9keSkudG8uYmUuYW4oJ2FycmF5JykudGhhdC5jb250YWlucy5zb21ldGhpbmcubGlrZSh7IGlkOiAxMTExIH0pO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJy9hcGkvdjEvY29kZXMvYWxsJywgKCkgPT4ge1xuICBpdCgnSXQgc2hvdWxkIHJldHVybiBhbGwgY29kZXMgZXJyb3IgYW5kIG1lc3NhZ2VzJywgKGRvbmUpID0+IHtcbiAgICBjaGFpLnJlcXVlc3QoYXBwKVxuICAgICAgLmdldCgnL2FwaS92MS9jb2Rlcy9hbGwnKVxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgZXhwZWN0KHJlcykudG8uaGF2ZS5zdGF0dXMoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlcy5ib2R5KS50by5iZS5hbignYXJyYXknKS50aGF0LmNvbnRhaW5zLnNvbWV0aGluZy5saWtlKHsgaWQ6IDIyMjIgfSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuIl19