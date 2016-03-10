import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <h1 className=''>Welcome {title}!</h1>
        <button onClick={() => actions.changeTitle(Date.now())}>
          Update Title
        </button>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
