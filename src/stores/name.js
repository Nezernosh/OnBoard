import { observable, action, computed } from 'mobx';

class NameStore {
    @observable names = ['username'];

    @observable inputValue = '';

    @action addName = (name) => {
        this.names.push(name);
    }

    @computed get currentName() {
        return this.names[this.names.length - 1];
    }

    @computed get currentInputValue() {
        return this.inputValue;
    }

}

const store = new NameStore();
export default store;