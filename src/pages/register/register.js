import CreateEmployeeComponent from "../../components/CreateEmployeeComponent";
import React, { useEffect, useState } from "react";
import API from "../../utils/api";

function Register() {
    const [register, setRegister] = useState([])
    const [formObject, setFormObject] = useState({
        firstName: "",
        lastName: "",
        email: ""
        
    })

    useEffect(() => {
        loadRegister()
    }, [])

    function loadRegister() {
        API.getRegister()
            .then(res =>
                setRegister(res.data)
                )
                    .catch(err => console.log(err));
    };
    function deleteRegister(id) {
        API.deleteRegister(id)
            .then(res => loadRegister())
                .catch(err => console.log(err));
    };


}