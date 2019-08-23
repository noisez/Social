import React from 'react';
import userDefaultImg from "../../../assets/images/824388_man_512x512.png";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../api/api";

const User = (props) => {
    return (
        <div key={props.user.id} className='users__item'>
            <div className='item__left'>
                <NavLink to={'/profile/' + props.user.id} className='users__link'>
                    <div className='item__avatar'>
                        <img alt='icon' className='item__photo' src={props.user.photos.small ? props.user.photos.small : userDefaultImg } />
                    </div>
                </NavLink>
                <div className='item__follow'>
                    { props.user.followed ?  <button onClick={ () => {
                            usersApi.unfollowUser(props.user.id).then( data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(props.user.id);
                                }
                            } );

                        } } className='item__btn'>Unfollow</button>
                        : <button onClick={ () => {

                            usersApi.followUser(props.user.id).then( data => {
                                if (data.resultCode === 0) {
                                    props.follow(props.user.id);
                                }
                            } );
                        } } className='item__btn'>Follow</button> }

                </div>
            </div>
            <div className='item__right'>
                <div className='right__info'>
                        <span className='item__name'>
                            {props.user.name}
                        </span>
                    <span className='item__status'>
                            {props.user.status}
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
    );
};

export default User;