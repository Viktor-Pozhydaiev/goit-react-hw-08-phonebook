import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
          />
        </label>
        <label className="flex flex-col mb-4 text-lg text-teal-600">
          Email
          <input
            className="focus:outline-none focus:border-cyan-600-500 focus:ring-cyan-500 focus:ring-1 border-solid border-2 rounded-lg border-indigo-600 hover:border-dotted"
            type="email"
            name="email"
            placeholder=" Email..."
          />
        </label>
        <label className="flex flex-col mb-4 text-lg text-teal-600">
          Password
          <input
            className="focus:outline-none focus:border-cyan-600-500 focus:ring-cyan-500 focus:ring-1 border-solid border-2 rounded-lg border-indigo-600 hover:border-dotted"
            type="password"
            name="password"
            placeholder=" Password..."
          />
        </label>
        <button
          className="border-double rounded-md border-4 w-30 border-indigo-600 text-base text-amber-700"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};
