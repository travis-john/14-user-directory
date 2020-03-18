import axios from "axios";
/* const BASEURL = "https://randomuser.me/api/?results=200&nat=us"; */
const ALTURL = "https://jsonplaceholder.typicode.com/users";

export default {
  randomuser: function() {
    return axios.get(ALTURL);
  }
};
