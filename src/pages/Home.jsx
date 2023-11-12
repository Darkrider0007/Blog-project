/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        service.getPosts([])
        .then((posts)=>{
            if(posts) setPosts(posts.documents)
        })
    },[])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No posts found
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-full sm:w-1/3 md:w-1/4'>
                        {/* Adjust the width based on the number of columns you want for different screen sizes */}
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>

  )
}

export default Home