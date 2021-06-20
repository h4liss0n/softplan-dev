import base64 = require('base-64');
import * as request from 'supertest';
import app from '../../src/app';
import connection from '../../src/connection';

const basic = base64.encode(`${'halisson@gmail.com'}:${'123'}`);
const headerAuthorizationBasic = { 'authorization': `basic ${basic}` }

let headerAuthorizationBear = { 'authorization': '' }


beforeAll(async () => {
  await connection.create();
});

afterAll(async () => {
  await connection.close();
});

describe("authentication", () => {
  test("It should authentication successful", done => {
    request(app)
      .post('/api/v1/authentication')
      .set(headerAuthorizationBasic)
      .then(response => {
        headerAuthorizationBear.authorization = `Bear ${response.body.token}`
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should authentication not authorized", done => {
    request(app)
      .post('/api/v1/authentication')
      .then(response => {
        expect(response.statusCode).toBe(401);
        done();
      });
  });
});

describe("people", () => {
  let id_peo = 0

  test("It should get list of people", done => {
    request(app)
      .get('/api/v1/people')
      .set(headerAuthorizationBear)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });


  test("It email is already in use on insert new person", done => {
    request(app)
      .post('/api/v1/people')
      .set(headerAuthorizationBear)
      .send(
        {
          "name_peo": "Tom",
          "last_name_peo": "Price",
          "login_email_peo": "Irving.Stehr@yahoo.com",
          "password_peo": "123",
          "email_peo": "Irving.Stehr@yahoo.com",
          "sex_peo": "N",
          "naturalness_peo": "",
          "nationality_peo": "",
          "birth_date_peo": "2020-11-28",
          "cpf_peo": "585.716.511-32",
          "create_date_peo": "2021-06-13T20:46:14.186Z",
          "update_date_peo": "2021-06-13T20:46:14.186Z"
        }
      )
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });


  test("It should test the filter by name", done => {
    request(app)
      .get('/api/v1/people?name=Tom')
      .set(headerAuthorizationBear)
      .then(response => {
        id_peo = response.body[0].id_peo;
        expect(response.statusCode).toBe(200);        
        done();
      });
  });



  test("It email is already in use on update person", done => {
    request(app)
      .put('/api/v1/people')
      .set(headerAuthorizationBear)
      .send(
        {
          "id_peo": id_peo,
          "name_peo": "Tom",
          "last_name_peo": "Price",
          "login_email_peo": "halisson@gmail.com",
          "password_peo": "123",
          "email_peo": "Irving.Stehr@yahoo.com",
          "sex_peo": "N",
          "naturalness_peo": "",
          "nationality_peo": "",
          "birth_date_peo": "2020-11-28",
          "cpf_peo": "585.716.511-32",
          "create_date_peo": "2021-06-13T20:46:14.186Z",
          "update_date_peo": "2021-06-13T20:46:14.186Z"
        }
      )
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });



  test("It CPF is already in use on insert new person", done => {
    request(app)
      .post('/api/v1/people')
      .set(headerAuthorizationBear)
      .send(
        {
          "name_peo": "Tom",
          "last_name_peo": "Price",
          "login_email_peo": "Irving.Stehr@yahoo.com",
          "password_peo": "123",
          "email_peo": "Irving.Stehr@yahoo.com",
          "sex_peo": "N",
          "naturalness_peo": "",
          "nationality_peo": "",
          "birth_date_peo": "2020-11-28",
          "cpf_peo": "585.716.511-32",
          "create_date_peo": "2021-06-13T20:46:14.186Z",
          "update_date_peo": "2021-06-13T20:46:14.186Z"
        }
      )
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });


  test("It CPF is already in use on update person", done => {
    request(app)
      .put('/api/v1/people')
      .set(headerAuthorizationBear)
      .send(
        {
          "id_peo": id_peo,
          "name_peo": "Tom",
          "last_name_peo": "Price",
          "login_email_peo": "Irving.Stehr@yahoo.com",
          "password_peo": "123",
          "email_peo": "Irving.Stehr@yahoo.com",
          "sex_peo": "N",
          "naturalness_peo": "",
          "nationality_peo": "",
          "birth_date_peo": "2020-11-28",
          "cpf_peo": "621.630.483-65",
          "create_date_peo": "2021-06-13T20:46:14.186Z",
          "update_date_peo": "2021-06-13T20:46:14.186Z"
        }
      )
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });


  test("It CPF is not valid on update", done => {
    request(app)
      .put('/api/v1/people')
      .set(headerAuthorizationBear)
      .send(
        {
          "id_peo": id_peo,
          "name_peo": "Tom",
          "last_name_peo": "Price",
          "login_email_peo": "Irving.Stehr@yahoo.com",
          "password_peo": "123",
          "email_peo": "Irving.Stehr@yahoo.com",
          "sex_peo": "N",
          "naturalness_peo": "",
          "nationality_peo": "",
          "birth_date_peo": "2020-11-28",
          "cpf_peo": "621.630.483-65",
          "create_date_peo": "2021-06-13T20:46:14.186Z",
          "update_date_peo": "2021-06-13T20:46:14.186Z"
        }
      )
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });






});




