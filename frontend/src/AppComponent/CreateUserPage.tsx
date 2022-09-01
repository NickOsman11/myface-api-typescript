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

  function validateForm(){
    //figure out what errors there are
    setFormErrors()
  }

                                
  function submitData(e:any){
    
    e.preventDefault()
    fetch("http://localhost:3001/users/create/", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
  }  


  return (
    <form onSubmit={submitData} validate={validateForm}>

        <input className={formErrors.name === undefined ? "":"invalid-form"}
          type="text" 
          value={formData.name}
          placeholder="Name"
          onChange={(e) => {setForm({...formData, name: e.target.value});
                            console.log(e)}}
        />
        <{formErrors.name}>
        
        <input
          type="text" 
          value={formData.email}
          placeholder="Email"
          onChange={(e) => {setForm({...formData, email: e.target.value})}}
        />
        <input
          type="text" 
          value={formData.username}
          placeholder="Username"
          onChange={(e) => {setForm({...formData, username: e.target.value})}}
        />
        <input
          type="text" 
          value={formData.coverImageUrl}
          placeholder="Cover Image"
          onChange={(e) => {setForm({...formData, coverImageUrl: e.target.value})}}
        />
        <input
          type="text" 
          value={formData.profileImageUrl}
          placeholder="Profile Image"
          onChange={(e) => {setForm({...formData, profileImageUrl: e.target.value})}}
        />
        <input type="submit"/>


    </form>
  )
}