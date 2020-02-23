import getHealty from '../app.js'

test('get color', () =>{
    expect(getHealty({name: 'Маг', health: 90})).toBe('healthy');
    expect(getHealty({name: 'Маг', health: 45})).toBe('wounded');
    expect(getHealty({name: 'Маг', health: 1})).toBe('critical');
})