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
  private birthYear: number;

  constructor(earthAge: number)
  constructor(birthDay: string)
  constructor(dateOrAge?: number | string) {
    if (typeof dateOrAge === 'number') {
      this.earthAge = dateOrAge;
      this.birthYear = new Date(Date.now()).getUTCFullYear() - dateOrAge;
    } else {
      let birthDate = new Date(dateOrAge);
      this.birthYear = birthDate.getUTCFullYear();
      let age = Date.now() - birthDate.getTime();
      this.earthAge = new Date(age).getUTCFullYear() - 1970;
    }
  }


  getGalacticAge(planet: string): number
  getGalacticAge(planet?: string) {
    if (planet === undefined || !((planet = planet.toLowerCase()) in ageModifiers)) {
      planet = "earth";
    }
    return Math.floor(this.earthAge * ageModifiers[planet]);
  }

  getGalacticLongevity(): number
  getGalacticLongevity(planet: string): number
  getGalacticLongevity(planet?: string) {
    if (planet === undefined || !((planet = planet.toLowerCase()) in ageModifiers)) {
      planet = "earth";
    }

    if (this.birthYear > new Date(Date.now()).getUTCFullYear()) {
      return Math.floor(this.getLongevity(this.birthYear.toString()) * ageModifiers[planet]);
    } else {
      return Math.floor((this.getLongevity(this.birthYear.toString()) - this.earthAge) * ageModifiers[planet]);
    }
  }

  getLongevity(year: string, gender?: string): number {
    let yearNumber: number = parseInt(year);
    if (yearNumber < 1900) {
      return 47;
    }
    if (yearNumber > 2014) {
      return 80;
    }    
    for (let i = 0; i < lifeData.data.length; i++) {
      const element = lifeData.data[i];
      if (element[0] == year && element[1] === "Both Sexes") {
        return parseInt(element[2]);
      }
    }    
  }

}

