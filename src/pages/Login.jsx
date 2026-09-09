import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await login(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    navigate("/admin");
  };

  return (
    <section className="relative isolate flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden px-6 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet-300/40 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-[110px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 shadow-[0_30px_90px_rgba(91,33,182,0.16)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.7),_transparent_48%),linear-gradient(145deg,#24113f_0%,#4c1d73_48%,#312e81_100%)] p-10 text-white lg:flex">
          <div>
            <div className="flex items-center gap-3">
              <img src={Logo} alt="DAEHWA Cafe" className="h-12 w-auto" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-100">
                DAEHWA Cafe
              </span>
            </div>

            <p className="mt-20 max-w-xs text-4xl font-black leading-tight">
              Keep the conversation moving.
            </p>
          </div>

          <p className="max-w-xs text-sm leading-7 text-violet-100/75">
            A welcoming space for language, culture, collaboration and growth.
          </p>
        </div>

        <div className="p-7 sm:p-10 lg:p-14">
          <div className="mb-9 lg:hidden">
            <img src={Logo} alt="DAEHWA Cafe" className="h-14 w-auto" />
          </div>

          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-violet-600">
              Community portal
            </p>
            <h1 className="text-4xl font-black leading-tight text-stone-950 sm:text-5xl">
              Welcome <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">back.</span>
            </h1>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Sign in to manage the DAEHWA Cafe community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-stone-800">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-2xl border border-violet-100 bg-white/80 px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-stone-800">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-2xl border border-violet-100 bg-white/80 px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                required
              />
            </div>

            {error && (
              <p role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl cursor-pointer bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(79,70,229,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_35px_rgba(124,58,237,0.3)] focus:outline-none focus:ring-4 focus:ring-violet-500/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Signing in..." : "Sign in to portal"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;