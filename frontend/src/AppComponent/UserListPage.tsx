import { useEffect, useState } from "react"
import {UserModel} from "../../../src/models/api/userModel"

export default function UserListPage(){

    const [userList, setUserList] = useState<UserModel[]>([])


    useEffect(() =>{
        fetch(`http://localhost:3001/users/`)
        .then(response => response.json())
        .then(json => json.results)
        .then(userList => {setUserList(userList); console.log(userList)})
    }, []);


    if (userList){
        return (
            <ul>
                {userList.map(user =>{
                    return(
                        <li>
                            {user.name}
                        </li>
                    )
                }
                )}
            </ul>
        )
    }
    else{
        return <></>
    }

}