import axios from "axios"; // this is the original module


// fetching using axios method
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance 

// if you export using default export you can change the name which is instance


    