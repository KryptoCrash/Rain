const load = require("./Loaders/Loader.js");
module.exports = class Profile {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.worlds;
        this.skills;
        this.money;
        this.players;
        load(this)
    }
}