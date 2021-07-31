"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                sum += items[i].massKg;
            }
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMassKg;
        //console.log(this.cargoItems);
        //console.log(this.astronauts);
        currentMassKg = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return currentMassKg;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            if (this.cargoItems != null) {
                this.cargoItems.push(cargo);
            }
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            if (this.astronauts != null) {
                this.astronauts.push(astronaut);
            }
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
