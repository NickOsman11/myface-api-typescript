import { useEffect, useState } from "react"

interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default function PostsPage() {

    const [postList, setPostList] = useState<null | PostUserModel[]>(null)

    useEffect(() =>{
        fetch("http://localhost:3001/posts/").then(response => response.json())
                                             .then(posts => setPostList(posts))
    }, []);
    
    
    if (postList){
        postList.forEach()
    }
    
    return <>hi
    </>
}