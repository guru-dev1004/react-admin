export default {
  //called when the user attemts to login
  login: ({ username }) => {
    localStorage.setItem("token", username);
    localStorage.setItem("permission", username === "admin" ? "admin" : "user");
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("permission");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.reject();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const role = localStorage.getItem("permission");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
