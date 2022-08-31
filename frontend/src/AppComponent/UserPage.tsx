import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {UserModel} from "../../../src/models/api/userModel"


export default function UserPage() {
    const {userID} = useParams();
    const [userData, setUserData] = useState<UserModel>()


    useEffect(() =>{
        fetch(`http://localhost:3001/users/${userID}`)
        .then(response => response.json())
        .then(user => setUserData(user))
    }, []);

    if (userData){

        return(
            <div>
                <img src={userData.profileImageUrl} alt="" />
                <p>
                    {userData.name}
                </p>
                <p>
                    {userData.username}
                </p>
                <p>
                    {userData.email}
                </p>
            </div>
        )
    }
    else{
        return <></>
    }
}