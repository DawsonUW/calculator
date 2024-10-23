// Need to be improved in the future:
// "-" as negative sign, e.g. 2--3



const {clearScreen, display, calculate } = require('../scripts.js')
const math = require('mathjs');



describe('Calculator Functionality', () =>{

    beforeEach(() => { //reset the result field before each test
        document.body.innerHTML = '<input type="text" id="result" value="0" disabled>';
    })

    test('should correctly evaluate operator +', ()=>{
        expect(document.getElementById('result').value).toBe('0');

        display('2')
        expect(document.getElementById('result').value).toBe('2');

        display('+')
        expect(document.getElementById('result').value).toBe('2+');

        display('3')
        expect(document.getElementById('result').value).toBe('2+3');

        calculate()
        expect(document.getElementById('result').value).toBe('5');
    } )

    test('should correctly evaluate operator -', ()=>{
        display('.')
        display('2')
        display('-')
        display('3')
        calculate()
        expect(document.getElementById('result').value).toBe('-2.8');
    } )

    test('should correctly evaluate operator +', ()=>{
        display('-')
        display('2')
        display('+')
        display('3')
        calculate()
        expect(document.getElementById('result').value).toBe('1');
    } )



    test('should correctly evaluate operator *', ()=>{
        expect(document.getElementById('result').value).toBe('0');

        display('0')
        expect(document.getElementById('result').value).toBe('0');

        display('0')
        expect(document.getElementById('result').value).toBe('0');

        display('2')
        expect(document.getElementById('result').value).toBe('2');

        display('*')
        expect(document.getElementById('result').value).toBe('2*');

        display('3')
        expect(document.getElementById('result').value).toBe('2*3');

        calculate()
        expect(document.getElementById('result').value).toBe('6');
    } )

    test('should correctly evaluate operator /', ()=>{
        display('0')
        display('2')
        display('/')
        display('0')
        calculate()
        expect(document.getElementById('result').value).toBe('Infinity');
    } )

    test('should correctly evaluate operator /', ()=>{
        display('0')
        display('/')
        display('0')
        calculate()
        expect(document.getElementById('result').value).toBe('NaN');
    } )

    test('should correctly evaluate operator /', ()=>{
        display('0')
        display('/')
        display('0')
        display('2')
        calculate()
        expect(document.getElementById('result').value).toBe('0');
    } )


    test('should clear the screen when clearScreen is called', () =>{
        display('3')
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
        display('*')
        expect(document.getElementById('result').value).toBe('*');
    })

    test('should remove the leading zeros',()=> {
        display('0')
        display('0')
        display('1');
        display('2');
        display('3');
        expect(document.getElementById('result').value).toBe('123');
        })
})