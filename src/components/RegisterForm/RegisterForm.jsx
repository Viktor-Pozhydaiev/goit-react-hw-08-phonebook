import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { useState } from 'react';
import Notiflix from 'notiflix';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelChange = e => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
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
    const newName = form.elements.name.value;
    const newEmail = form.elements.email.value;
    const newPassword = form.elements.password.value;

    if (name === '' || email === '' || password === '') {
      Notiflix.Notify.failure('Pleas write your correct  password or email');
    } else if (name.length < 8 || email.length < 8 || password.length < 8) {
      Notiflix.Notify.info('Please write validate date');
    } else {
      dispatch(
        register({
          name: newName,
          email: newEmail,
          password: newPassword,
        })
      );
    }

    form.reset();
  };

  return (
    <div className="m-5">
      <form className="w-80 " onSubmit={handleSubmit} autoComplete="off">
        <label className="flex flex-col mb-4 text-lg text-teal-600">
          Username
          <input
            className="focus:outline-none focus:border-cyan-600-500 focus:ring-cyan-500 focus:ring-1 border-solid border-2 rounded-lg border-indigo-600 hover:border-dotted"
            type="text"
            name="name"
            placeholder=" Username..."
            onChange={handelChange}
            required
          />
        </label>
        <label className="flex flex-col mb-4 text-lg text-teal-600">
          Email
          <input
            className="focus:outline-none focus:border-cyan-600-500 focus:ring-cyan-500 focus:ring-1 border-solid border-2 rounded-lg border-indigo-600 hover:border-dotted"
            type="email"
            name="email"
            placeholder=" Email..."
            onChange={handelChange}
            required
          />
        </label>
        <label className="flex flex-col mb-4 text-lg text-teal-600">
          Password
          <input
            className="focus:outline-none focus:border-cyan-600-500 focus:ring-cyan-500 focus:ring-1 border-solid border-2 rounded-lg border-indigo-600 hover:border-dotted"
            type="password"
            name="password"
            placeholder=" Password..."
            onChange={handelChange}
            required
          />
        </label>
        <button
          className="border-double rounded-md border-4 w-80 border-indigo-600 text-base text-amber-700"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};
