import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fff9f6] px-4 py-10">
      <section className="w-full max-w-lg">
        <header className="mb-7 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff4d2d] text-3xl shadow-lg">
            🍔
          </div>
          <h1 className="text-3xl font-extrabold text-[#ff4d2d]">
            SwadExpress
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create an account and discover delicious food.
          </p>
        </header>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mb-6 mt-2 text-sm text-gray-500">
            Join SwadExpress to order your favourite meals.
          </p>

          <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label
                htmlFor="signup-name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                id="signup-name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#ff4d2d] focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="signup-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#ff4d2d] focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="signup-phone"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Phone Number <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="signup-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#ff4d2d] focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center rounded-xl border border-gray-300 focus-within:border-[#ff4d2d] focus-within:ring-2 focus-within:ring-orange-100">
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                  minLength={8}
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

            <button
              type="submit"
              className="w-full rounded-xl bg-[#ff4d2d] py-3.5 font-bold text-white shadow-md transition hover:bg-[#e64323] active:translate-y-0"
            >
              Create Account →
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-bold text-[#ff4d2d] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Signup;
