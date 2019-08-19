import React from 'react';
import './users.css';
import * as axios from 'axios';
import userDefaultImg from '../../assets/images/824388_man_512x512.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        } );
    }

    // usersShow = () => {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
    //         this.props.setUsers(response.data.items);
    //     } );
    // };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( response => {
            this.props.setUsers(response.data.items);
        } );
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let currentPage = this.props.currentPage;

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }



        return (
            <div className='users__container'>
                <div className="users__pagination">
                    <ul className="pagination__list">
                        {pages.map( elem =>
                            <li className={"pagination__item " + (elem === currentPage ? "pagination__item_current" : "" ) } onClick={ (e) => {this.onPageChanged(elem)} } >{elem}</li>
                        )}
                    </ul>
                </div>
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