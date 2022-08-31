import { useEffect, useState } from "react"
import {PostUserModel} from "../../../src/models/api/postModel"

interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

export default function PostsPage() {

    const [postsData, setPostsData] = useState<{next: string | null; 
                                                previous: string|null; 
                                                results : PostModel[];
                                                total: number}>()


    useEffect(() =>{
        fetch("http://localhost:3001/posts").then(response => response.json())
                                             .then(posts => setPostsData(posts))
                                            }, []);


                                     


    if (postsData){

        return(
            <div>
                {postsData.results.map(post => {
                    return(
                    <div className="post">
                        <p>
                            {post.message}
                        </p>
                        <img src={post.imageUrl} />
                    </div>
                    )
                })}
            </div>
        )
    }
    else{
        return <></>
    }

    
    



    
}