import {
  GalacticAge
} from '../src/ageGenerator';

describe('Galactic Age', () => {
  let age;
  beforeEach( () => {
    age = new GalacticAge(20);
  });

  test('converts 20 earth years to 4 Mercury years', () => {    
    expect(age.getGalacticAge("Mercury")).toEqual(4);
  });

  test('converts 20 earth years to 12 Venus years', () => {    
    expect(age.getGalacticAge("Venus")).toEqual(12);
  });

  test('converts 20 earth years to 37 Mars years', () => {    
    expect(age.getGalacticAge("Mars")).toEqual(37);
  });

  test('converts 20 earth years to 237 Jupiter years', () => {    
    expect(age.getGalacticAge("Jupiter")).toEqual(237);
  });


  test('converts 25 year old with birthday to 47 Mars years', () => {
    //build a mock function and overwrite the default js function
    //mock function will always return 1593561600000 July 1st 2020 UTC
    //it will test it to the 'current day' of September 1 2045 UTC or 2393107200000
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => 2393107200000);
    global.Date.now = dateNowStub;    
    
    age = new GalacticAge("July 1 2020 UTC");    
    expect(age.getGalacticAge("Mars")).toEqual(47);
    
    expect(dateNowStub).toHaveBeenCalled();
    global.Date.now = realDateNow;
  });
  
  

});

//31536000000
describe('Galactic Life Expectancy', () => {
  let age;
  beforeEach(() => {
    age = new GalacticAge("March 15 1952 UTC");
  });

  test('gets life expectancy on Earth', () => {
    expect(age.getGalacticLongevity("Earth")).toEqual(1);
  });

  test('gets life expectancy on Mercury', () => {
    expect(age.getGalacticLongevity("Mercury")).toEqual(0);
  });

  test('gets life expectancy on Venus', () => {
    expect(age.getGalacticLongevity("Venus")).toEqual(0);
  });

  test('gets life expectancy on Mars', () => {
    expect(age.getGalacticLongevity("Mars")).toEqual(1);
  });

  test('gets life expectancy on Jupiter', () => {
    expect(age.getGalacticLongevity("Jupiter")).toEqual(11);
  });


  test('converts 25 year old with birthday to 47 Mars years', () => {
    //build a mock function and overwrite the default js function
    //mock function will always return 1593561600000 July 1st 2020 UTC
    //it will test it to the 'current day' of September 1 2045 UTC or 2393107200000
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => 2393107200000);
    global.Date.now = dateNowStub;

    age = new GalacticAge("July 1 2020 UTC");
    expect(age.getGalacticAge("Mars")).toEqual(47);

    expect(dateNowStub).toHaveBeenCalled();
    global.Date.now = realDateNow;
  });



});