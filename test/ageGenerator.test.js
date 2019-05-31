import {
  GalacticAge
} from '../src/ageGenerator';

describe('Galactic Age', () => {

test('converts 20 earth years to 4 Mercury years', () => {    
  let age = new GalacticAge(20);
  expect(age.getMercuryAge()).ToEqual(4);  
});


});