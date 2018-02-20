
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
   public disease?: string,
   public iniPlan?: Date,
   public endPlant?: Date,
   public iniBloom?: Date,
   public endBloom?: Date,
   public iniHarvert?: Date,
   public endHarvest?: Date,
   public leaveType?: string) {
 }
}
