import { checkLengthOfPassword } from "./app";


describe('checkLengthOfPassword', () => {
    test('is it returning something', () => {
        const result = checkLengthOfPassword();
        expect(result).toBe(0); 
    })
})
