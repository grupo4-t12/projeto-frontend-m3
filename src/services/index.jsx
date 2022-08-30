import axios from "axios";

class Api {
  static async registerUser(data) {
    const register = await axios
      .post("http://localhost:3000/register", data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return register;
  }
  static async loginUser(data) {
    const login = await axios
      .post("http://localhost:3000/login", data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return login;
  }
  static async listUsersClinic() {
    const users = await axios
      .get("http://localhost:3000/users")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return users;
  }
  static async listPetUser(id) {
    const users = await axios
      .get(`http://localhost:3000/ /pets?userId=${id}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return users;
  }
  static async registerPet(data, token) {
    const register = await axios
      .post("http://localhost:3000/pets", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return register;
  }
  static async editPet(data, id, token) {
    const edit = await axios
      .post(`http://localhost:3000/pets/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return edit;
  }
  static async deletePet(id, token) {
    const del = await axios
      .delete(`http://localhost:3000/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
      });
    return del;
  }
}

export default Api;
