const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    // TODO: answer here
    this.setStealChance(0.75);
    if (this.getGold() < 10) {
      return "Aku terlalu miskin";
    }
  }

  steal(player) {
    // TODO: answer here
    var value = Math.random()
    if (value < player.getDistractionPurseChance()) {
      player.setGold(player.gold + 5)
      this.setGold(this.getGold() - 5);
      if (this.getGold() < 1) {
        return "Berhasil mencuri balik semua uang lawan"
      }
      else{
        return "Berhasil mencuri balik 10 gold"
      }
    }
    else{
      return "Gagal mencuri balik"
    }
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    // TODO: answer here
  }

  steal(player) {
    // TODO: answer here
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
