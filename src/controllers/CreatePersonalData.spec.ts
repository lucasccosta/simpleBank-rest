import { app } from '../app'
import request from 'supertest'

describe("Create Person Data Controller", () =>{
  
  it("Should be able to create a new user", async()=> {
    const response = await request(app).post('/personal').send({
    CPF:"147.852.336-89",
    name:"Tester",
    lastname:"da Silva",
    email: "tester@teste.com",
    password:"123456",
    })

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  })
})