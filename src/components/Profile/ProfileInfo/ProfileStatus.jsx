import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'yo'
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    };

    render() {
        return (
            <div className="profile__status">
                {this.state.editMode ? (<input type="text" autoFocus={true} onBlur={this.deactivateEditMode} className="status__input" value={this.props.status}/>)
                    : (<p onDoubleClick={this.activateEditMode} className="status__text">{this.props.status !== '' ? this.props.status : 'null'}</p>)}
            </div>
        )
    }
}

export default ProfileStatus;