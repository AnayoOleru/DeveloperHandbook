import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';



chai.use(chaiHttp);

chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { expect } = chai;

describe('/api/v1', () => {
  it('It should return  welcome message', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('/api/v1/setup/all', () => {
  it('It should return all setups', (done) => {
    chai.request(app)
      .get('/api/v1/setup/all')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').that.contains.something.like({ id: 1111 });
        done();
      });
  });
});

describe('/api/v1/codes/all', () => {
  it('It should return all codes error and messages', (done) => {
    chai.request(app)
      .get('/api/v1/codes/all')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').that.contains.something.like({ id: 2222 });
        done();
      });
  });
});
