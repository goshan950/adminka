import React, {Component} from 'react';
import s from './Profile.module.css';

class Profile extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.info}>
                    Информация о подписке
                </div>
                <div className={s.info}>
                    История пополнения
                </div>
            </div>
        );
    }
}

export default Profile;