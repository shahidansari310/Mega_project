import React ,{useState,useEffect} from 'react'
import databaseservice from '../appwrite/database'
import { PostCard, Container } from '../components'

const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    databaseservice.getPost([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }

    })
  return (
    <div className='py-8'>
      <Container>
        
        <div className='flex flex-wrap'>
            {posts.map((post)=>
            <div key={post.$id} className='p-4 w-1'>
                <PostCard {...post}/>
            </div>
        )}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
