import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
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

    )
}