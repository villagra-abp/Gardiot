export class User {

  constructor(
    public id?: string,
    public name?: string,
    public lastName?: string,
    public password?: string,
    public password2?: string,
    public oldPassword?: string,
    public photo?: string,
    public countryCode?: string,
    public city?: string,
    public birthDate?: string,
    public active?: number,
    public admin?: number) {

  }
}
