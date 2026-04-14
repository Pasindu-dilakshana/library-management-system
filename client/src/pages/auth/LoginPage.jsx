import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState } = useForm();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (values) => {
    try {
      setErrorMessage("");
      await auth.login(values);
      navigate(location.state?.from?.pathname || "/dashboard", {
        replace: true
      });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Unable to sign in right now."
      );
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-600">
          Welcome back
        </p>
        <h2 className="mt-3 text-3xl font-semibold">Sign in to continue</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Use your library admin or member account.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="Email address"
          {...register("email", { required: true })}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errorMessage ? (
          <p className="text-sm text-rose-500">{errorMessage}</p>
        ) : null}
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Signing in..." : "Login"}
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        New here?{" "}
        <Link to="/register" className="font-semibold text-teal-600">
          Create an account
        </Link>
      </p>
    </div>
  );
}
