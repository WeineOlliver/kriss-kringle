import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './style';
import * as userActions from '../../actions/user';

const Register = () => {
  const [name, setName] = useState('');
  const [gift, setGift] = useState('');
  const classes = useStyles();

  const addNewUser = () => {
    userActions.addUser(name.value, gift.value);
    console.log('>', name, gift);
    setName({ name: '' });
    setGift({ gift: '' });
  };

  const debug = () => {
    console.log('>', name, gift);
  };

  return (
    <div>
      <form noValidate className={classes.container} autoComplete='off'>
        <TextField
          id='user-name'
          label='name'
          className={classes.textField}
          value={name.value}
          onChange={e => setName({ name: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          id='wished-gift'
          label='gift'
          className={classes.TextField}
          value={gift.value}
          onChange={e => setGift({ gift: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={addNewUser}
        >
          Take KrissKringle
        </Button>
        <Button onClick={debug}>DEBUG</Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
