import React from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    currentPage: number
    onPageChanged: (currentPage: number) => void
    totalUsersCount: number
    pageSize: number
}

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => {
                return (
                    <span
                        key={i}
                        className={currentPage === p ? s.selectedPage : undefined}
                        onClick={() => onPageChanged(p)}
                    >{p}</span>
                )
            })}
        </div>
    );
};

export default Paginator;