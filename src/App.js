import React from 'react';
import {Link} from 'react-router';
function App(props) {
  const ACTIVE = {color:'red'}
  return (
    <div className="App">
      <h1>react路由</h1>
      <Link to='/home' activeStyle={ACTIVE}>首页</Link>
      <Link to='/about' activeStyle={ACTIVE}>关于</Link>
      <Link to='/par' activeStyle={ACTIVE}>params传参</Link>
      <Link to='/que' activeStyle={ACTIVE}>query传参</Link>
      {props.children}
    </div>
  );
}

export default App;
