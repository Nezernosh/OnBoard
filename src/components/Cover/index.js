import React from 'react';
import styles from './styles.module.css'
import Logo from '../../../assets/logo.svg';

class Cover extends React.Component {
    render() {
        return (
            <div className={styles.cover}>
                <Logo />
                <h1 className={styles.header}>Welcome on board, {'{username}'}!</h1>
            </div>
        )
    }
}

export default Cover; 