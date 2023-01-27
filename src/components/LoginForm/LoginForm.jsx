import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

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
            placeholder="Email..."
          />
        </label>
        <label className="flex flex-col mb-4 text-lg text-sky-500">
          Password
          <input
            className=" focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 border-dotted border-2 border-indigo-600"
            type="password"
            name="password"
            placeholder="Password..."
          />
        </label>
        <button
          className="border-double border-4 w-20 border-indigo-600 text-base text-sky-800 "
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};
