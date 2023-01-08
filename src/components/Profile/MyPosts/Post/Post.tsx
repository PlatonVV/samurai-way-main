import React from 'react';
import s from './Post.module.css';
import {postTextType} from '../MyPosts';

export const Post: React.FC<postTextType> = (props) => {
    return (
        <>
            <div>
                <div className={s.item}>
                    <img
                        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/will-smith-unfinshed-andrew-read.jpg"
                        alt="Will Smith"/>
                    {props.messageText}
                    <div>like</div>
                </div>
            </div>
        </>
    )
}