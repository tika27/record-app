import CreateEmployeeComponent from CreateEmployeeComponent;
import React, { useEffect, useState } from "react";
import API from "../../utils/api";

function Register() {
    const [register, setRegister] = useState([])
    const [formObject, setFormObject] = useState({
        firstName: "",
        lastName: "",
        email: "",
        
    })
}