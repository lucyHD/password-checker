import   changeProgressBarValue   from "./pages/app.js";


describe('checking ', () => {
    test('is it returning something', () => {
        const result = changeProgressBarValue();
        expect(result).toBe(0); 
    })
})
