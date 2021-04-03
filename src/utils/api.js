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
            return axios.post("/api/register", registerData);
        },
    
};