const WorldLoader = require("./WorldLoader.js");
const MoneyLoader = require("./MoneyLoader.js");
const SkillLoader = require("./SkillLoader.js");
const PlayerLoader = require("./PlayerLoader.js");

function loadWorlds(worlds) {
    console.log("Loading worlds...")
    if (!worlds) {
        // Initialize worlds and store as worlds array in db
        worlds = []
        
    }
}
function loadSkills(skills) {
    if (!skills) {

    }
}
function loadMoney(money) {
    if (!money) {

    }
}
function loadPlayers(players) {
    if (!players) {

    }
}
module.exports = function load(profile) {
    loadWorlds(profile.worlds)
    loadSkills(profile.skills)
    loadMoney(profile.money)
    loadPlayers(profile.players)
}