import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fff9f6] px-4 py-10">
      <section className="w-full max-w-md">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-[#ff4d2d]">
            SwadExpress
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Delicious food, delivered to your door.
          </p>
        </header>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
          <p className="mb-7 mt-2 text-sm text-gray-500">
            Sign in to discover your favourite meals.
          </p>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label
                htmlFor="signin-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                id="signin-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#ff4d2d] focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="signin-password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center rounded-xl border border-gray-300 focus-within:border-[#ff4d2d] focus-within:ring-2 focus-within:ring-orange-100">
                <input
                  id="signin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="min-w-0 flex-1 rounded-xl px-4 py-3 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="px-4 text-sm font-semibold text-[#ff4d2d]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-semibold text-[#ff4d2d] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#ff4d2d] py-3.5 font-bold text-white shadow-md transition hover:bg-[#e64323] active:translate-y-0"
            >
              Sign In →
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-[#ff4d2d] hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} SwadExpress
        </p>
      </section>
    </main>
  );
}

export default Signin;
