import { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';
import {User} from "../../../src/models/database/user"

export function ValidateForm({formData}: {formData:User}){
    
}



function validateForm(formData){

    let errors = {};

    for (let field in formData){
      console.log(field)
      if (formData[field] === ""){
        console.log(field)
      }
    }
    return {}

  }