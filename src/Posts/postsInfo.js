import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import '../style/style.scss'


function PostsInfo () {

    const [input, setInput] = useState('');
    const [imgUrl, setImgUrl] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()
    
    
        setInput('');
        setImgUrl('');
    }


    return (
        <div className='postsInfo'>
            <div className='postsInfo_top'>
                <Avatar />
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='postsInfo_input'
                    placeholder="What's on your mind"
                    />

                    <input 
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder='image URL (Optional)' 

                    />
                    <button onClick={handleSubmit} type='submit'> Hidden Submit </button>
                </form>

            </div>

            <div className='postsInfo_bottom'>
                <div className='postsInfo_option'>
                    <Videocam style={{color: 'red'}} />
                    <h3> Live Video </h3>
                </div> 

                <div className='postsInfo_option'>
                    <PhotoLibrary style={{color: 'green'}} />
                    <h3> Photo/Video </h3>
                </div> 

                <div className='postsInfo_option'>
                    <InsertEmoticon style={{color: 'orange'}} />
                    <h3> Feeling/Activity </h3>
                </div> 
            </div>
        </div>
    )
}


export default PostsInfo
