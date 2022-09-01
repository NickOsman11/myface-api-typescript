import { useEffect, useState } from "react"
import {CreateUserRequest} from "../../../src/models/api/createUserRequest";
import './components.scss'

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
    
    const errors:CreateUserRequest = {name: '',
                                      email: '', 
                                      username: '',
                                      coverImageUrl: '',
                                      profileImageUrl: ''}

    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

    type ObjectKey = keyof typeof errors

    Object.entries(formData).forEach(([key, value]) => {
      const keyWithType = key as ObjectKey
      if(value === ''){
        errors[keyWithType] = `Required field`
      }
      if(key === 'email' && value != '' && !regex.test(formData.email)){
        errors.email = 'Please enter a email address'
      }
      if(key ==='username'){
        if (value.includes(" ")){
          errors.username = 'Username cannot contain spaces'
        }
        if (value.toLowerCase() != value){
          errors.username = 'Username cannot contain upper case letters'
        }

      }
    })
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

        <input className={formErrors.name === "" ? "":"invalid-form"}
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