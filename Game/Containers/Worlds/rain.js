const World = require("./world.js");

module.exports = class Rain extends World {
    constructor(seed) {
        this.seed = seed;
    }
}