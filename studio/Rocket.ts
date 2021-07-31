import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import {Payload} from "./Payload";

export class Rocket {
    // properties and methods
    totalCapacityKg : number;
    name: string;
    cargoItems : Cargo[] = [];
    astronauts : Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
     }

     sumMass( items: Payload[] ): number {
        let sum: number = 0;
        if(items != null){
            for(let i=0; i < items.length ; i++){
                sum += items[i].massKg;
            }
        }
        return sum;
     }

     currentMassKg(): number {
         let currentMassKg : number;
         //console.log(this.cargoItems);
         //console.log(this.astronauts);
         currentMassKg = this.sumMass(this.cargoItems) +  this.sumMass(this.astronauts);
         
         return currentMassKg ;
     }


     canAdd(item: Payload): boolean {
         if(this.currentMassKg() + item.massKg <= this.totalCapacityKg)
         { 
             return true
        } else{
            return false;
        }
     }


     addCargo(cargo: Cargo): boolean {
         if(this.canAdd(cargo)){
            if(this.cargoItems != null){ 
                this.cargoItems.push(cargo);
            }
            return true;
         }
         else {
             return false;
         }
     }

     addAstronaut(astronaut: Astronaut): boolean {
         if(this.canAdd(astronaut)){
             if(this.astronauts!= null){
                this.astronauts.push(astronaut);
             }
             return true;
         }
         else{
             return false;
         }
     }

 }