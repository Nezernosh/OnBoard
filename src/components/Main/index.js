import React from 'react';
import styles from './styles.module.css';
import { inject, observer } from 'mobx-react';

@inject('nameStore')
@observer
class Main extends React.Component {
    changeName = e => {
        e.preventDefault();
        const name = this.props.nameStore.currentInputValue;
        this.props.nameStore.addName(name);
        this.props.nameStore.clearInputValue();
    }

    handleChange = e => {
        this.props.nameStore.inputValue = e.target.value;
    };

    render() {
        const { nameStore } = this.props;

        return (
            <div className={styles.main}>
                <form onSubmit={event => this.changeName(event)}>
                    <input className={styles.input} placeholder="Username" value={nameStore.inputValue} onChange={this.handleChange} />
                    <button className={styles.submit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Main; 