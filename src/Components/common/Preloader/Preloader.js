import React from 'react';
import preloader from '../../../images/preloader.svg';
import s from './Preloader.module.css';

let Preloader = () => {
    return <div className={s.container}>
        <img className={s.preloader} src={preloader} alt='#'/>
    </div>
};

export default Preloader