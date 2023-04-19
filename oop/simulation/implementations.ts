import {
  Activity,
  Building,
  Experience,
  Food,
  Person,
  Simulation,
  Study,
} from "./interfaces";

export class Math implements Study {
  difficulty: number = 9001;
  affects: Experience[] = [{ name: "logic", value: 100 }];
}

export class School implements Building {
  occupants: Person[] = [];
  capacity: number = 1000;
  studies: Study[] = [new Physics()];
  enter(person: Person): boolean {
    this.occupants.push(person)

    return true
  }

  exit(person: Person): boolean {
    let index = this.occupants.indexOf(person)
    this.occupants.splice(index, 1)

    return true
  }
}

export class Home implements Building {
  occupants: Person[] = [];
  capacity: number = 5;
  enter(person: Person): boolean {
    this.occupants.push(person)

    return true
  }

  exit(person: Person): boolean {
    let index = this.occupants.indexOf(person)
    this.occupants.splice(index, 1)

    return true
  }
}

class Calle implements Person {
  knowledge: Experience[] = [];
  hunger: number = 100;
  happiness: number = 100;
  fitness: number = 70;
  move(location: Building): boolean {
    this.hunger += 5
    this.fitness += 0.1
    this.happiness += 5
    location.enter(this)

    return true
  }
  perform(activity: Activity): boolean {
    if (activity instanceof CoffeSession) {
      console.log("damn thats some good coffe");
    }
    for (let index = 0; index < activity.affects.length; index++) {
      const element = activity.affects[index];

      this.knowledge.push(element);
    }
    return true;
  }
  consume(food: Food): boolean {
    let calories = food.calories;

    if(this.hunger > (calories / 50)){
      // Decrease hunger by a tenth of the calories in the food
    this.hunger -= calories / 50;
    } else {
      console.log("Calle is full")
      return false
    }
    
    return true;
  }
}
export class Äpple implements Food {
  calories: number = 100;
  split(percentage: number): boolean {
    percentage = 100
    return false
  }
}
export class Breakfast implements Food {
  calories: number = 500;
  split(percentage: number): boolean {
    percentage = 100;
    return false
  }
}
export class Lunch implements Food {
  calories: number = 700;
  split(percentage: number): boolean {
    percentage = 100;
    return false
  }
}
export class Dinner implements Food {
  calories: number = 800;
  split(percentage: number): boolean {
    percentage = 100;
    return false
  }
}
export class MattiasKäller implements Person {
  knowledge: Experience[] = [];
  hunger: number = 50;
  happiness: number = 100;
  fitness: number = 70;
  move(location: Building): boolean {
    this.hunger += 10
    this.fitness += 0.1
    this.happiness += 5
    location.enter(this)

    return true
  }
  perform(activity: Activity): boolean {
    if (activity instanceof CoffeSession) {
      console.log("damn thats some good coffe");
    }
    for (let index = 0; index < activity.affects.length; index++) {
      const element = activity.affects[index];

      this.knowledge.push(element);
    }
    return true;
  }
  consume(food: Food): boolean {
    let calories = food.calories;

    if(this.hunger > (calories / 70)){
      // Decrease hunger by a tenth of the calories in the food
    this.hunger -= calories / 70;
    } else {
      console.log("Mattias is full")
      return false
    }
    
    return true;
  }
}

class CoffeSession implements Activity {
  affects: Experience[] = [{ name: "coffedrinking", value: 10 }];
}

class Physics implements Study {
  difficulty: number = 100;
  affects: Experience[] = [{ name: "logic", value: 100 }];
}

export class Assignment implements Simulation {
  people: Person[] = [new Calle(), new MattiasKäller()];
  activities: Activity[] = [new CoffeSession(), new Physics()
  ];
  buildings: Building[] = [new School(), new Home()];
  execute(): void {
    for (let index = 0; index < this.people.length; index++) {
      const person = this.people[index];
      person.consume(new Breakfast())

      person.move(new School())

      for (let j = 0; j < this.activities.length; j++) {
        const activity = this.activities[j];
        person.perform(activity);
      }
      person.consume(new Lunch())

      person.move(new Home())

      person.consume(new Dinner())

      console.log(JSON.stringify(person));
    }
  }
}
