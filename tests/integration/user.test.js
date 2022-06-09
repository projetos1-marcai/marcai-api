const User = require('../../src/models/User')
const server = require('../../src/server');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const data = require('../data.json');
chai.use(chaiHttp);

describe('User Tests',function() {

    before(async function () {
        await User.deleteMany({});
      });

    it('Should create user',async function() {
        var response = await chai.request(server)
        .post('/user')
        .send(data.default_User)

        response.body.user.should.have.property('name');
      response.body.user.should.have.property('email');
      });

    it('Should already have existing email',async function() {
        var response = await chai.request(server)
        .post('/user')
        .send(data.default_User)

        response.body.message.should.include('Email já cadastrado');
      });

      it("Login de usuário", async function() {
        
      })
})