import React from 'react';
import s from "./Users.module.css";
import {User} from "./User/User";
import {PaginationComponent} from "../../common/Pagination";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/reduxStore";
import {UserType} from "../../redux/UsersReducer";


export const Users = (props:{friendsMode:boolean | null}) => {

    const users  = useSelector<StateType,Array<UserType>>(state => state.userPage.users)


    return (
        <>
          <PaginationComponent friendsMode={props.friendsMode}/>
            <div className={s.Content}>
                {users.map(us => <User
                    user={us}
                    key={us.id}/>)}
            </div>
        </>
    );
}


{/*<div className={s.pages}>*/
}
{/*    {newTotalCountPagesArray.map(page =>*/
}
{/*        <div key={page} className={page === props.currentPage ? s.activePage : s.page}*/
}
{/*             onClick={() => props?.setPageThunkCreator(props.pageSizeUsers,page)}>{page}</div>)}*/
}
{/*</div>*/
}


// const onShowSizeChangeHandler = (current: number, pageSize: number) => {
//     debugger
//     props.setPageThunkCreator(pageSize, current)
// }

// let totalCountPages = Math.ceil(props.totalCountPages / props.pageSizeUsers)
// let totalCountPagesArray = []
// for (let i = 1; i <= totalCountPages; i++) {
//     totalCountPagesArray.push(i)
// }
// let newTotalCountPagesArray = totalCountPagesArray
