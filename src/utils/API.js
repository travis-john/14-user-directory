import axios from "axios";
/* const BASEURL = "https://randomuser.me/api/?results=200&nat=us"; */
const ALTURL = "https://jsonplaceholder.typicode.com/users";

export default {
  getUsers: function() {
    return axios.get(ALTURL)
    .then(function(res){
      console.log(res);
    });
  }
};
