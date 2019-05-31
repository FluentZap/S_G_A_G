import {
  GalacticAge
} from '../src/ageGenerator';

describe('Galactic Age', () => {
  let age;
  beforeEach( () => {
    age = new GalacticAge(20);
  });

  test('converts 20 earth years to 4 Mercury years', () => {    
    expect(age.getMercuryAge()).toEqual(4);
  });

  test('converts 20 earth years to 12 Venus years', () => {    
    expect(age.getVenusAge()).toEqual(12);
  });

  test('converts 20 earth years to 37 Mars years', () => {    
    expect(age.getMarsAge()).toEqual(37);
  });

  test('converts 20 earth years to 237 Jupiter years', () => {    
    expect(age.getJupiterAge()).toEqual(237);
  });


});