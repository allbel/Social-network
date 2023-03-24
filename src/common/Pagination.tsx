import React, {useEffect} from 'react';
import s from "../components/Users/Users.module.css";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StateType} from "../redux/reduxStore";
import {setPageThunkCreator} from "../redux/UsersReducer";

export type PaginationComponentTypeProps = {
    friendsMode:boolean | null
}

export const PaginationComponent:React.FC<PaginationComponentTypeProps> = ({friendsMode}) => {

    const pageSizeUsers = useSelector<StateType,number>(state=> state.userPage.pageSizeUsers)
    const currentPage = useSelector<StateType,number>(state=> state.userPage.currentPage)
    const totalCountPages = useSelector<StateType,number>(state=> state.userPage.totalUserCount)

    const dispatch = useDispatch<AppDispatch>()


    const onChange = (page: number, pageSize: number) => {
        dispatch(setPageThunkCreator(pageSize,page,friendsMode))
    }

    return (
        <div className={s.paginationContainer}>
            <Pagination
                size={"small"}
                onShowSizeChange={onChange}
                showLessItems
                pageSizeOptions={['5', '10', '20']}
                pageSize={pageSizeUsers}
                current={currentPage}
                total={totalCountPages}
                showQuickJumper
                onChange={onChange}/>
        </div>
    );
};

