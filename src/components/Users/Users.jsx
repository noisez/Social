import React from 'react';
import './users.css';
import userDefaultImg from '../../assets/images/824388_man_512x512.png';

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
                        <li className={"pagination__item " + (elem === currentPage ? "pagination__item_current" : "" ) } onClick={ (e) => {props.onPageChanged(elem)} } >{elem}</li>
                    )}
                </ul>
            </div>
            {
                props.users.map( user =>
                    <div key={user.id} className='users__item'>
                        <div className='item__left'>
                            <div className='item__avatar'>
                                <img alt='icon' className='item__photo' src={user.photos.small ? user.photos.small : userDefaultImg } />
                            </div>
                            <div className='item__follow'>
                                { user.followed ?  <button onClick={ () => {props.unfollow(user.id)} } className='item__btn'>Unfollow</button>
                                    : <button onClick={ () => {props.follow(user.id)} } className='item__btn'>Follow</button> }
                            </div>
                        </div>
                        <div className='item__right'>
                            <div className='right__info'>
                                <span className='item__name'>
                                    {user.name}
                                </span>
                                <span className='item__status'>
                                    {user.status}
                                </span>
                            </div>
                            <div className='right__location'>
                                <span className='item__country'>
                                    {/*{props.user.location.country}*/}Country
                                </span>
                                <span className='item__city'>
                                    {/*{props.user.location.city}*/}City
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Users;