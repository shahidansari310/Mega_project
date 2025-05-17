import React from 'react'
import databaseservice from "../appwrite/database"
import {Link} from 'react-router-dom'

const PostCard = ({$id,title,featuredImage}) => {
  return (
    <div>
      <Link to={`/post/${$id}`}>
      <div className='w-full bg-gary-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={databaseservice.getfilePreview(featuredImage)} alt={title}  className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
      </Link>
    </div>
  )
}

export default PostCard
