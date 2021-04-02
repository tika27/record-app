import axios from "axios";

export default {
    getRegisters: function() {
        return axios.get('/api/register');
        },
    
        getRegister: function (id) {
            return axios.get("/api/register" + id);
        },

        deleteRegister: function(id) {
            return axios.delete("/api/register");
        },
    
        saveRegister: function(registerData) {
            const config = {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                method: "GET",
                url: `${url}/all`,
                withCredentials: true,
                crossorigin: true,
                "Access-Control-Allow-Origin": "*",
              };
            return axios.post("/api/register", registerData);
        },
    
};