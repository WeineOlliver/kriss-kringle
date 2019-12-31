import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './style';
import * as userActions from '../../actions/user';

const addNewUser = () => {
  this.props.addUser(this.state.newName, this.state.newGift);

  this.setState({ newName: '', newGift: '' });
};

const state = {
  newName: '',
  newGift: ''
};

const classes = useStyles();

class Register extends Component {
  render() {
    return (
      <div>
        <form noValidate className={this.classes.container} autoComplete='off'>
          <TextField
            id='user-name'
            label='name'
            className={this.classes.textField}
            value={this.state.newName}
            onChange={e => this.setState({ newName: e.target.value })}
            defaultValue='Choose a name'
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='wished-gift'
            label='wished gift'
            className={this.classes.TextField}
            value={this.state.newGift}
            onChange={e => this.setState({ newGift: e.target.value })}
            defaultValue='What would you like to earn'
            margin='normal'
            variant='outlined'
          />
          <Button
            variant='contained'
            color='primary'
            className={this.classes.button}
            onClick={this.props.addnewUser}
          >
            Take KrissKringle
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch, addNewUser, classes, state);

export default connect(null, mapDispatchToProps)(Register);
