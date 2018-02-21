
export class Plant {

 constructor(
   public id?: string,
   public scientificName?: string,
   public commonName?: string,
   public description?: string,
   public photo?: string,
   public _3DModel?: string,
   public family?: number,
   public depth?: number,
   public distance?: string,
   public diseaseResist?: string,
   public initDatePlant?: Date,
   public finDatePlant?: Date,
   public initDateBloom?: Date,
   public finDateBloom?: Date,
   public initDateHarvest?: Date,
   public finDateHarvest?: Date,
   public leaveType?: string) {

 }
}
