import React from 'react';
import s from './Post.module.css';
import {PostPropsType, PostType,} from '../MyPosts';

export const Post: React.FC<PostType> = (props) => {
    return (
        <>
            <div>
                <div className={s.item}>
                    <img
                        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/will-smith-unfinshed-andrew-read.jpg"
                        alt="Will Smith"/>
                    {props.message}
                    <div>{`${props.likesCount} like`}</div>
                    {/*<div>like</div>*/}
                </div>
            </div>
        </>
    )
}