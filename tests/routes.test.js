const request = require('supertest')
const app = require('../backend/server')

const appUri = 'http://localhost:5000/api'
let findId

describe('Goals Endpoints', () =>{
    it('should create a new goal', async () => {
        const res = await request(appUri)
            .post('/goals')
            .send({
                text: 'Test Goal'
            })
        findId = res._body._id
        expect(res.statusCode).toEqual(200)
    })

    it('should update a existing goal', async () => {
        const res = await request(appUri)
            .put(`/goals/${findId}`)
            .send({
                text: 'Updated Test Goal'
            })
        expect(res.statusCode).toEqual(200)
    })

    it('should delete a existing goal', async () => {
        const id = await request(appUri)
            .delete(`/goals/${findId}`)
    })
})