import React from 'react';
import './users.css';
import * as axios from 'axios';
import userDefaultImg from '../../assets/images/824388_man_512x512.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            this.props.setUsers(response.data.items);
        } );
    }

    // usersShow = () => {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
    //         this.props.setUsers(response.data.items);
    //     } );
    // };

    render() {



        return (
            <div className='users__container'>
                {
                    this.props.users.map( user =>
                        <div key={user.id} className='users__item'>
                            <div className='item__left'>
                                <div className='item__avatar'>
                                    <img alt='icon' className='item__photo' src={ user.photos.small ? user.photos.small : userDefaultImg } />
                                </div>
                                <div className='item__follow'>
                                    { user.followed ?  <button onClick={ () => {this.props.unfollow(user.id)} } className='item__btn'>Unfollow</button>
                                        : <button onClick={ () => {this.props.follow(user.id)} } className='item__btn'>Follow</button> }
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
                                    {/*{user.location.country}*/}Country
                                </span>
                                    <span className='item__city'>
                                    {/*{user.location.city}*/}City
                                </span>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/*<div className='users__showmore'>*/}
                    {/*<button onClick={this.usersShow} className='showmore__btn'>Показать</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Users;