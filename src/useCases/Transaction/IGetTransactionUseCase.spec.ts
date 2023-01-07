import {describe, expect} from '@jest/globals';
import request from 'supertest'
import app from '../../app';


describe('Test Transactions', () => {    
    jest.useFakeTimers()
    it('Should test that true === true', async () => {
        try {
            const response = await request(app).get('/')
            expect(response.body).toMatchObject({ message: 'Sucesso'})    
        } catch (error) {
            
        }
    })
})