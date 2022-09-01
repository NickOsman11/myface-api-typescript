import { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';
import {CreateUserRequest} from "../../../src/models/api/createUserRequest";

export default function CreateUserPage() {
    const [formData, setForm] = useState<CreateUserRequest>({name: '',
                                                            email: '', 
                                                            username: '',
                                                            coverImageUrl: '',
                                                            profileImageUrl: ''})
    const [formErrors, setFormErrors] = useState<CreateUserRequest>({name: '',
                                                                    email: '', 
                                                                    username: '',
                                                                    coverImageUrl: '',
                                                                    profileImageUrl: ''})

  function validateForm(formData:CreateUserRequest){
    //figure out what errors there are
    const errors:CreateUserRequest = {name: '',
    email: '', 
    username: '',
    coverImageUrl: '',
    profileImageUrl: ''}

    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

    type ObjectKey = keyof typeof errors
    // for (let field in formData){
      // console.log(Object.entries()formData[field].toString());
      Object.entries(formData).forEach(([key, value]) => {
        const myVar = key as ObjectKey
        if(value === ''){
          errors[myVar] = `Required field`
        }
        if(key === 'email' && value.toString().match(regex).length === 0){
          errors.email = 'Please entre correct email address'
        }
      })
    // }      
    setFormErrors(errors)
    console.log(errors)
    
    return errors
  }

                                
  function submitData(e:any){
    
    e.preventDefault()
    validateForm(formData)
    fetch("http://localhost:3001/users/create/", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
  }  


  return (
    <form onSubmit={submitData}>

        <input className={formErrors.name === undefined ? "":"invalid-form"}
          type="text" 
          value={formData.name}
          placeholder="Name"
          onChange={(e) => {setForm({...formData, name: e.target.value});
                            console.log(e)}}
        />
        <p>
          {formErrors.name}
        </p>
        
        <input
          type="text" 
          value={formData.email}
          placeholder="Email"
          onChange={(e) => {setForm({...formData, email: e.target.value})}}
        />
        <p>
          {formErrors.email}
        </p>

        <input
          type="text" 
          value={formData.username}
          placeholder="Username"
          onChange={(e) => {setForm({...formData, username: e.target.value})}}
        />
        <p>
          {formErrors.username}
        </p>

        <input
          type="text" 
          value={formData.coverImageUrl}
          placeholder="Cover Image"
          onChange={(e) => {setForm({...formData, coverImageUrl: e.target.value})}}
        />
        <p>
          {formErrors.coverImageUrl}
        </p>

        <input
          type="text" 
          value={formData.profileImageUrl}
          placeholder="Profile Image"
          onChange={(e) => {setForm({...formData, profileImageUrl: e.target.value})}}
        />
        <p>
          {formErrors.profileImageUrl}
        </p>

        <input type="submit"/>


    </form>
  )
}