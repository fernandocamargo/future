import React from 'react';

const Login = () => (
  <section>
    <form>
      <fieldset>
        <legend>Login</legend>
        <dl>
          <dt>
            <label htmlFor="email">E-mail</label>
          </dt>
          <dd>
            <input type="email" id="email" />
          </dd>
        </dl>
        <dl>
          <dt>
            <label htmlFor="password">Password</label>
          </dt>
          <dd>
            <input type="password" id="password" />
          </dd>
        </dl>
        <div>
          <button type="submit">Login</button>
        </div>
      </fieldset>
    </form>
  </section>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
