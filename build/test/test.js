'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
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
      expect(res.body).to.be.an('');
      done();
    });
  });
});

describe('/api/v1/codes/all', function () {
  it('It should return all codes error and messages', function (done) {
    _chai2.default.request(_index2.default).get('/api/v1/codes/all').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvdGVzdC5qcyJdLCJuYW1lcyI6WyJjaGFpIiwidXNlIiwiY2hhaUh0dHAiLCJleHBlY3QiLCJkZXNjcmliZSIsIml0IiwiZG9uZSIsInJlcXVlc3QiLCJhcHAiLCJnZXQiLCJlbmQiLCJlcnIiLCJyZXMiLCJ0byIsImhhdmUiLCJzdGF0dXMiLCJib2R5IiwiYmUiLCJhbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxlQUFLQyxHQUFMLENBQVNDLGtCQUFUO0lBQ1FDLE0sR0FBV0gsYyxDQUFYRyxNOzs7QUFFUkMsU0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEJDLEtBQUcsbUNBQUgsRUFBd0MsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hETixtQkFBS08sT0FBTCxDQUFhQyxlQUFiLEVBQ0dDLEdBREgsQ0FDTyxTQURQLEVBRUdDLEdBRkgsQ0FFTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQlQsYUFBT1MsR0FBUCxFQUFZQyxFQUFaLENBQWVDLElBQWYsQ0FBb0JDLE1BQXBCLENBQTJCLEdBQTNCO0FBQ0FaLGFBQU9TLElBQUlJLElBQVgsRUFBaUJILEVBQWpCLENBQW9CSSxFQUFwQixDQUF1QkMsRUFBdkIsQ0FBMEIsUUFBMUI7QUFDQVo7QUFDRCxLQU5IO0FBT0QsR0FSRDtBQVNELENBVkQ7O0FBWUFGLFNBQVMsbUJBQVQsRUFBOEIsWUFBTTtBQUNsQ0MsS0FBRyw2QkFBSCxFQUFrQyxVQUFDQyxJQUFELEVBQVU7QUFDMUNOLG1CQUFLTyxPQUFMLENBQWFDLGVBQWIsRUFDR0MsR0FESCxDQUNPLG1CQURQLEVBRUdDLEdBRkgsQ0FFTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQlQsYUFBT1MsR0FBUCxFQUFZQyxFQUFaLENBQWVDLElBQWYsQ0FBb0JDLE1BQXBCLENBQTJCLEdBQTNCO0FBQ0FaLGFBQU9TLElBQUlJLElBQVgsRUFBaUJILEVBQWpCLENBQW9CSSxFQUFwQixDQUF1QkMsRUFBdkIsQ0FBMEIsRUFBMUI7QUFDQVo7QUFDRCxLQU5IO0FBT0QsR0FSRDtBQVNELENBVkQ7O0FBWUFGLFNBQVMsbUJBQVQsRUFBOEIsWUFBTTtBQUNsQ0MsS0FBRywrQ0FBSCxFQUFvRCxVQUFDQyxJQUFELEVBQVU7QUFDNUROLG1CQUFLTyxPQUFMLENBQWFDLGVBQWIsRUFDR0MsR0FESCxDQUNPLG1CQURQLEVBRUdDLEdBRkgsQ0FFTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQlQsYUFBT1MsR0FBUCxFQUFZQyxFQUFaLENBQWVDLElBQWYsQ0FBb0JDLE1BQXBCLENBQTJCLEdBQTNCO0FBQ0FaLGFBQU9TLElBQUlJLElBQVgsRUFBaUJILEVBQWpCLENBQW9CSSxFQUFwQixDQUF1QkMsRUFBdkIsQ0FBMEIsUUFBMUI7QUFDQVo7QUFDRCxLQU5IO0FBT0QsR0FSRDtBQVNELENBVkQiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlIdHRwIGZyb20gJ2NoYWktaHR0cCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uL3NyYy9pbmRleCc7XG5cbmNoYWkudXNlKGNoYWlIdHRwKTtcbmNvbnN0IHsgZXhwZWN0IH0gPSBjaGFpO1xuXG5kZXNjcmliZSgnL2FwaS92MScsICgpID0+IHtcbiAgaXQoJ0l0IHNob3VsZCByZXR1cm4gIHdlbGNvbWUgbWVzc2FnZScsIChkb25lKSA9PiB7XG4gICAgY2hhaS5yZXF1ZXN0KGFwcClcbiAgICAgIC5nZXQoJy9hcGkvdjEnKVxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgZXhwZWN0KHJlcykudG8uaGF2ZS5zdGF0dXMoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlcy5ib2R5KS50by5iZS5hbignb2JqZWN0Jyk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnL2FwaS92MS9zZXR1cC9hbGwnLCAoKSA9PiB7XG4gIGl0KCdJdCBzaG91bGQgcmV0dXJuIGFsbCBzZXR1cHMnLCAoZG9uZSkgPT4ge1xuICAgIGNoYWkucmVxdWVzdChhcHApXG4gICAgICAuZ2V0KCcvYXBpL3YxL3NldHVwL2FsbCcpXG4gICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICBleHBlY3QocmVzKS50by5oYXZlLnN0YXR1cygyMDApO1xuICAgICAgICBleHBlY3QocmVzLmJvZHkpLnRvLmJlLmFuKCcnKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCcvYXBpL3YxL2NvZGVzL2FsbCcsICgpID0+IHtcbiAgaXQoJ0l0IHNob3VsZCByZXR1cm4gYWxsIGNvZGVzIGVycm9yIGFuZCBtZXNzYWdlcycsIChkb25lKSA9PiB7XG4gICAgY2hhaS5yZXF1ZXN0KGFwcClcbiAgICAgIC5nZXQoJy9hcGkvdjEvY29kZXMvYWxsJylcbiAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIGV4cGVjdChyZXMpLnRvLmhhdmUuc3RhdHVzKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXMuYm9keSkudG8uYmUuYW4oJ29iamVjdCcpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==