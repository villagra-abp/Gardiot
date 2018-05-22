
export class Plant {

  constructor(
    public id?: number,
    public scientificName?: string,
    public commonName?: string,
    public description?: string,
    public photo?: string,
    public _3DModel?: string,
    public family?: number,
    public depth?: number,
    public distance?: string,
    public diseaseResist?: string,
    public initDatePlant?: string,
    public finDatePlant?: string,
    public initDateBloom?: string,
    public finDateBloom?: string,
    public initDateHarvest?: string,
    public finDateHarvest?: string,
    public leaveType?: string) {

  }
}
