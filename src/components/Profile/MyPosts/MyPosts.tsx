import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, {ChangeEvent, RefAttributes, useState} from "react";
import {Button} from "antd";
import TextArea, {TextAreaRef}  from "antd/es/input/TextArea";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/reduxStore";
import {setAddPost} from "../../../redux/ProfileReducer";
import {TextAreaProps} from "antd/lib/input";


type MyPostsTypeProps = {
    photoUser: string | undefined
}

export const MyPosts = (props: MyPostsTypeProps) => {

    const posts = useAppSelector(state => state.profilePage.postData)

    const addNewPostPage = posts.map(p =>
        <Post photoUser={props.photoUser} id={p.id} key={p.id} text={p.text} likeCount={p.likeCount}/>)

    return (
        <div className={classes.Posts}>
            <div>
                <TextAreaFormPost/>
            </div>
            {addNewPostPage}
        </div>)
}


const TextAreaFormPost = () => {

    const [options, setOptions] = useState('');

    const dispatch = useDispatch()

    const handleKeyPress = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setOptions(e.currentTarget.value)
    };

    const setPostHandler = () => {
        dispatch(setAddPost(options))
        setOptions('')
    }


    return (
        <div className={classes.containerTextAreaBtn}>
            <TextArea
                value={options}
                placeholder="input here"
                onChange={handleKeyPress}
            />
            <Button onClick={setPostHandler} type="primary" size={"middle"}>Add Post</Button>
        </div>
    )
}


