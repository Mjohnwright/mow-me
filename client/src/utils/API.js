import axios from "axios";

export default {
  // Gets articles from the NYT API
  getJobs: function(params) {
    return axios.get("/api/jobs");
  },
  // Deletes the saved job with the given id
  deleteJobs: function(id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves an article to the database
  updateJob: function(id) {
    return axios.put("/api/jobs" + id);
  },
};