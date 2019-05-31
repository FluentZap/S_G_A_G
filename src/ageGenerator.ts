import lifeData from '../src/lifeExpectancy.json';

const ageModifiers = {       
    "earth": 1,
    "mercury": 0.24,
    "venus": 0.62,
    "mars": 1.88,
    "jupiter": 11.86    
}

export class GalacticAge {
  private earthAge: number;

  constructor(earthAge: number)
  constructor(birthDay: string)
  constructor(dateOrAge?: number | string) {
    if (typeof dateOrAge === 'number') {
      this.earthAge = dateOrAge;
    } else {
      let age = Date.now() - new Date(dateOrAge).getTime();      
      this.earthAge = new Date(age).getUTCFullYear() - 1970;      
    }
  }
  
  
  getGalacticAge(): number
  getGalacticAge(planet: string): number
  getGalacticAge(planet?: string)
  {
    planet = planet.toLowerCase();
    if (typeof planet === 'undefined' || !(planet in ageModifiers)) {
      planet = "Earth";
    }    
    return Math.floor(this.earthAge * ageModifiers[planet]);
  }

 }

