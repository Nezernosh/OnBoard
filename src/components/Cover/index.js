import React from 'react';
import styles from './styles.module.css';
import Logo from '../../../assets/logo.svg';
import { inject, observer } from 'mobx-react';

@inject('nameStore')
@observer
class Cover extends React.Component {
    render() {
        const { nameStore } = this.props;

        return (
            <div className={styles.cover}>
                <Logo />
                <h1 className={styles.header}>Welcome on board, {nameStore.currentName}!</h1>
            </div>
        )
    }
}

export default Cover; 