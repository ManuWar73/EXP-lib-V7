const lib = require("exp-lib/library");

const arc = lib.extend(ItemTurret, ItemTurret.ItemTurretBuild, "arc", {
  maxLevel: 10,
  //Which fields to increase in what way.
  expFields: [
    {
      type: "linear",
      field: "reloadTime",
      start: 35,
      intensity: -2
    }
  ],
  upgrades: [
    {
      block: Vars.content.getByName(ContentType.block, "lancer"),
      min: 10
    }
  ],
  //The original Block extension object.
  init(){
		this.super$init();
		this.shootType(super.ShootType);
	}
}, {
  //The original Building extension object.
  shoot(type){
    //Increment EXP, replace this with whenever you want the block to gain EXP.
    this.incExp(20);
    print("Reload: "+arc.reloadTime);
    this.super$shoot(type);
  },
  levelUp(level){
    print("You leveled up to level " + level);
  }
});
