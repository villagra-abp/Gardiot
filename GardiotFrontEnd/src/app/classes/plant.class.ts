
export class Plant {

 constructor(
   public id?: string,
   public scientificName?: string,
   public commonName?: string,
   public description?: string,
   public photo?: string,
   public model?: string,
   public family?: string,
   public depth?: string,
   public distance?: string,
   public diseaseResist?: string,
   public initDatePlan?: Date,
   public finDatePlant?: Date,
   public initDateBloom?: Date,
   public finDateBloom?: Date,
   public initDateHarvert?: Date,
   public endDateHarvest?: Date,
   public leaveType?: string) {

 }
}
