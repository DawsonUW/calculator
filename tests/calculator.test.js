const {clearScreen, display, calculate } = require('../src/scripts.js')
const math = require('mathjs');



describe('Calculator Functionality', () =>{
    beforeEach(() => { //reset the result field before each test
        document.body.innerHTML = '<input type="text" id="result" value="0" disabled>';
        // document.getElementById('result').value = "0"
    })

    test('should clear the screen when clearScreen is called', () =>{
        display('123')
        clearScreen();
        expect(document.getElementById('result').value).toBe('0');
    })

    test('should correctly append a digit when display is called',()=>{
        display('1');
        display('2');
        display('3');
        expect(document.getElementById('result').value).toBe('123');
    })

    test('should prevent multiple consecutive operator', ()=>{
        display('1')
        display('+')
        display('-')
        expect(document.getElementById('result').value).toBe('Error: Invalid Expression');
    })

    test('should correctly evaluate operator', ()=>{
        display('2')
        display('+')
        display('3')
        calculate()
        expect(document.getElementById('result').value).toBe('5');
    } )
})