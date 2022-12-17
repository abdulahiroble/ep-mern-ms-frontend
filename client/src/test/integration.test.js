import ApiContext from '../services/ApiContext'

describe('Find user', () => {
    it('Testing if it is possible to find a user', async () => {

        const result = await ApiContext.LoadUserCollection.getUserProfile('636f93b4c9d50cff9ed21659')
        expect(result.status).toBe(200);
    });
})


describe('tmp test', () => {
    it('Testing if it is possible to find a user', async () => {

        expect(5).toBe(6);
    });
})