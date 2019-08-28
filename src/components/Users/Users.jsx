import React from 'react';
import './users.css';
import User from "./User/User";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let currentPage = props.currentPage;

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className='users__container'>
            <div className="users__pagination">
                <ul className="pagination__list">
                    {pages.map( elem =>
                        <li key={elem} className={"pagination__item " + (elem === currentPage ? "pagination__item_current" : "" )} onClick={ () => {props.onPageChanged(elem)}} >{elem}</li>
                    )}
                </ul>
            </div>
            {
                props.users.map( user => {
                    return (<User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} />);
                })
            }
        </div>
    )
};

export default Users;