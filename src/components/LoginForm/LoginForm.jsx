import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [setEmail] = useState('');
  const [setPassword] = useState('');

  const handelChange = evt => {
    evt.preventDefault();
    const { email, value } = evt.target;

    switch (email) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const newEmail = form.elements.email.value;
    const newPassword = form.elements.password.value;

    if (newEmail.length > 8 || newPassword.length > 8) {
      dispatch(
        logIn({
          email: newEmail,
          password: newPassword,
        })
      );
    } else {
      Notiflix.Notify.warning('Please write your correct information!');
    }

    form.reset();
  };
  return (
    <div className="m-5">
      <form className="w-80 " onSubmit={handleSubmit} autoComplete="off">
        <label className="flex flex-col mb-4 text-lg text-sky-500">
          Email
          <input
            className="focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 border-dotted border-2 border-indigo-600"
            type="email"
            name="email"
            id="email"
            onChange={handelChange}
            placeholder="Email..."
            required
          />
        </label>
        <label className="flex flex-col mb-4 text-lg text-sky-500">
          Password
          <input
            className=" focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 border-dotted border-2 border-indigo-600"
            type="password"
            name="password"
            id="password"
            onChange={handelChange}
            placeholder="Password..."
            required
          />
        </label>
        <button
          className="border-double border-4 w-80 border-indigo-600 text-base text-sky-800 "
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};
