import React,{useState,useEffect} from 'react'
import { Container,Postform } from '../components'
import databaseservice from '../appwrite/database'
import { useNavigate, useParams } from 'react-router'

const Editpost = () => {

    const [post, setPosts] = useState([])
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        if(slug){
            databaseservice.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <Postform post={post}/>
        </Container>
    </div>
  ):null
}

export default Editpost
