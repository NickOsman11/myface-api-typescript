import { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';

export default function CreateUserPage() {
    const [formData, setForm] = useState<{
                                name: string; 
                                email: string; 
                                username: string;
                                coverImageUrl: string;
                                profileImageUrl: string;

                            }>({name: '',
                                email: '', 
                                username: '',
                                coverImageUrl: '',
                                profileImageUrl: ''})
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={formData.name}
          onChange={(e) => {setForm({...formData, name: e.target.value}); e.preventDefault()}}

          
        />
      </label>
      {/* <label>Enter your email:
        <input
          type="text" 
          value={formData.email}
          onChange={(e) => setForm(e.target.value)}
        />
      </label>
      <label>Enter your username:
        <input
          type="text" 
          value={formData.username}
          onChange={(e) => setForm(e.target.value)}
        />
      </label>
      <label>Enter your coverImageUrl:
        <input
          type="text" 
          value={formData.coverImageUrl}
          onChange={(e) => setForm(e.target.value)}
        />
      </label>
      <label>Enter your profileImageUrl:
        <input
          type="text" 
          value={formData.profileImageUrl}
          onChange={(e) => setForm(e.target.value)}
        />
      </label> */}
    </form>
  )
}