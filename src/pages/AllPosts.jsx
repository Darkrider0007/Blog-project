/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        service.getPost([])
        .then((posts) => {
            if(posts){
                setPosts(posts.documents)
                //console.log(posts)
            }
        })
    },[])
    

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-col md:flex-row md:flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-full md:w-1/4'>
                        {console.log(post)}
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts