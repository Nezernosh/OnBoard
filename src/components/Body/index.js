import React from 'react';
import Cover from '../Cover';
import Main from '../Main';
import styles from './styles.module.css';

class Body extends React.Component {
    render () {
        return (
            <div className={styles.body}>
                <Cover />
                <Main />
            </div>
        )
    }
}

export default Body; 