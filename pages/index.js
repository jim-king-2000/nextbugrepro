import { action, observable } from 'mobx';
import { Provider, inject, observer } from 'mobx-react';
import React, { Component } from 'react';

class Store {
  @observable show = true;

  @action toggleShow() {
    console.log('toggle');
    this.show = !this.show;
  }
}

const store = new Store();

@inject('store')
@observer
class TestMobX extends Component {
  constructor() {
    super();
    this.onclick = this.onclick.bind(this);
  }

  onclick() {
    console.log('onclick');
    this.props.store.toggleShow();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onclick}>Click Me!</button>
        <p>{this.props.store.show && 'Hello Next.js'}</p>
      </div>
    )
  }
}

const Index = () => (
  <Provider store={store}>
    <TestMobX />
  </Provider>
);

export default Index;