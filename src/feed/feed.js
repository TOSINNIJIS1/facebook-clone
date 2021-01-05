import React from 'react';
import '../style/style.scss'
import StoryPage from './storyPage';
import PostsInfo from '../Posts/postsInfo';
import Posts from '../Posts/posts'

function Feed() {
    return (
        <div className='feed'>
            <StoryPage />
            <PostsInfo />
            
            
            <Posts 
            username='Elon Musk'
            profilePic='https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
            message='Hello People'
            timestamp='Timestamp...'
            img='https://content.api.news/v3/images/bin/5c5a030664167f3a112ac8024d5c1abc'
            />
            <Posts />
            <Posts />
        </div>
    )
}

export default Feed
