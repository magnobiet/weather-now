export class Weather {

  public city: string;
  public country: string;
  public temperature: number;
  public pressure: number;
  public humidity: number;
  public lastUpdate: Date;

  constructor(data?: Partial<Weather>) {
    Object.assign(this, data);
  }

}
