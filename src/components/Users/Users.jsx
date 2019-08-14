import React from 'react';
import './users.css';

const Users = (props) => {

    if ( props.users.length === 0 ) {
        props.setUsers(
            [
                {id: 1, photoSrc: 'https://www.shareicon.net/data/128x128/2016/09/02/824388_man_512x512.png',followed: false, fullName: 'Serg', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
                {id: 2, photoSrc: 'https://www.shareicon.net/data/128x128/2016/09/02/824388_man_512x512.png', followed: true, fullName: 'Dmitriy', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 3, photoSrc: 'https://www.shareicon.net/data/128x128/2016/09/02/824388_man_512x512.png', followed: false, fullName: 'Alex', status: 'I am a boss too too', location: {city: 'Moscow', country: 'Russia'}}
            ]
        );
    }

    return (
        <div className='users__container'>
            {
                props.users.map( user =>
                    <div key={user.id} className='users__item'>
                        <div className='item__left'>
                            <div className='item__avatar'>
                                <img className='item__photo' src={user.photoSrc} />
                            </div>
                            <div className='item__follow'>
                                { user.followed ?  <button onClick={ () => {props.unfollow(user.id)} } className='item__btn'>Unfollow</button>
                                    : <button onClick={ () => {props.follow(user.id)} } className='item__btn'>Follow</button> }
                            </div>
                        </div>
                        <div className='item__right'>
                            <div className='right__info'>
                                <span className='item__name'>
                                    {user.fullName}
                                </span>
                                <span className='item__status'>
                                    {user.status}
                                </span>
                            </div>
                            <div className='right__location'>
                                <span className='item__country'>
                                    {user.location.country}
                                </span>
                                <span className='item__city'>
                                    {user.location.city}
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