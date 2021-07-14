import   getUserInput   from "./pages/app.js";


describe('progress bar increase ', () => {
    test('the user enters a character into the password field, the function should return the value entered ', () => {
        const result = getUserInput("s")
        expect(result).toBe("s"); 
    })
})


//test - when one character is entered, value of progress bar increases by 1 