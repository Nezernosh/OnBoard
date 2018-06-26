import { observable, action, computed } from 'mobx';

class NameStore {
    @observable name = 'username';

    @observable inputValue = '';

    @action addName = name => {
        this.name = name;
    }

    @action clearInputValue = () => {
        this.inputValue = '';
    }

    @computed get currentName() {
        return this.name;
    }

    @computed get currentInputValue() {
        return this.inputValue;
    }

}

const store = new NameStore();
export default store;