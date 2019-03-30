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
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res).to.not.redirect;
      expect(res.body).to.be.an('object');
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvdGVzdC5qcyJdLCJuYW1lcyI6WyJjaGFpIiwidXNlIiwiY2hhaUh0dHAiLCJleHBlY3QiLCJkZXNjcmliZSIsIml0IiwiZG9uZSIsInJlcXVlc3QiLCJhcHAiLCJnZXQiLCJlbmQiLCJlcnIiLCJyZXMiLCJ0byIsImJlIiwibnVsbCIsImhhdmUiLCJzdGF0dXMiLCJub3QiLCJyZWRpcmVjdCIsImJvZHkiLCJhbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxlQUFLQyxHQUFMLENBQVNDLGtCQUFUO0lBQ1FDLE0sR0FBV0gsYyxDQUFYRyxNOzs7QUFFUkMsU0FBUyxTQUFULEVBQW9CLFlBQU07QUFDeEJDLEtBQUcsbUNBQUgsRUFBd0MsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hETixtQkFBS08sT0FBTCxDQUFhQyxlQUFiLEVBQ0dDLEdBREgsQ0FDTyxTQURQLEVBRUdDLEdBRkgsQ0FFTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQlQsYUFBT1EsR0FBUCxFQUFZRSxFQUFaLENBQWVDLEVBQWYsQ0FBa0JDLElBQWxCO0FBQ0FaLGFBQU9TLEdBQVAsRUFBWUMsRUFBWixDQUFlRyxJQUFmLENBQW9CQyxNQUFwQixDQUEyQixHQUEzQjtBQUNBZCxhQUFPUyxHQUFQLEVBQVlDLEVBQVosQ0FBZUssR0FBZixDQUFtQkMsUUFBbkI7QUFDQWhCLGFBQU9TLElBQUlRLElBQVgsRUFBaUJQLEVBQWpCLENBQW9CQyxFQUFwQixDQUF1Qk8sRUFBdkIsQ0FBMEIsUUFBMUI7QUFDQWY7QUFDRCxLQVJIO0FBU0QsR0FWRDtBQVdELENBWkQiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlIdHRwIGZyb20gJ2NoYWktaHR0cCc7XG5pbXBvcnQgYXBwIGZyb20gJy4uL3NyYy9pbmRleCc7XG5cbmNoYWkudXNlKGNoYWlIdHRwKTtcbmNvbnN0IHsgZXhwZWN0IH0gPSBjaGFpO1xuXG5kZXNjcmliZSgnL2FwaS92MScsICgpID0+IHtcbiAgaXQoJ0l0IHNob3VsZCByZXR1cm4gIHdlbGNvbWUgbWVzc2FnZScsIChkb25lKSA9PiB7XG4gICAgY2hhaS5yZXF1ZXN0KGFwcClcbiAgICAgIC5nZXQoJy9hcGkvdjEnKVxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgZXhwZWN0KGVycikudG8uYmUubnVsbDtcbiAgICAgICAgZXhwZWN0KHJlcykudG8uaGF2ZS5zdGF0dXMoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlcykudG8ubm90LnJlZGlyZWN0O1xuICAgICAgICBleHBlY3QocmVzLmJvZHkpLnRvLmJlLmFuKCdvYmplY3QnKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=