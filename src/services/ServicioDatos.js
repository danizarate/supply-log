class ServicioDatos {
 
  constructor() {
    this.apiUSD = "https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=382190361a31afc0e83f1282bc6daab9ca3da1a0&formato=json";
    this.apiEuro = "https://api.sbif.cl/api-sbifv3/recursos_api/euro?apikey=382190361a31afc0e83f1282bc6daab9ca3da1a0&formato=json";
    this.apiGBP ="https://www.quandl.com/api/v3/datasets/BOE/XUDLDSY.json?api_key=dqC_z9mHeCVy-_nJnh71";
  }
  async getUSD() {
    return await fetch(this.apiUSD)
      
  }
  async getEuro(){
    return await fetch(this.apiEuro)
  }
  async getGBP(){
    return await fetch(this.apiGBP)
  }
  /* getForUid(uid){
        let url = this.apiUrlAves + "/" + uid;
        return fetch(url);
    } */
}
export default ServicioDatos;
