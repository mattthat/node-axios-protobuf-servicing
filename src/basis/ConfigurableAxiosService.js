import Axios from "axios";

export default class ConfigurableAxiosService {
  constructor(configuration) {
    this.axios = Axios;
    this.configuration = configuration;
  }
}
