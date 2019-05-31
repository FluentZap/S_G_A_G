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

  getMercuryAge() {
    return Math.floor(this.earthAge * 0.24);
  }

 }

