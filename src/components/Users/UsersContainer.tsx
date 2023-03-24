import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StateType} from "./../../redux/reduxStore";
import {getUserThunkCreator, SetPage, SetPageSizeUsers, setPageThunkCreator} from "../../redux/UsersReducer";
import React, {useEffect} from "react";
import {Users} from "./Users";
import {Spin} from "antd";


export const UsersContainer = (props: { isFriends: boolean }) => {

    const friendsMode = props.isFriends ? true : null

    const isLoading = useSelector<StateType>(state => state.userPage.isLoading)
    const pageSizeUsers = useSelector<StateType, number>(state => state.userPage.pageSizeUsers)
    const currentPage = useSelector<StateType, number>(state => state.userPage.currentPage)

    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        dispatch(setPageThunkCreator(5,1,friendsMode))
    }, [friendsMode])

    return (<>
        {isLoading ? <Spin style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} size={"large"}/> :
            <Users friendsMode={friendsMode}
            />}
    </>)


}