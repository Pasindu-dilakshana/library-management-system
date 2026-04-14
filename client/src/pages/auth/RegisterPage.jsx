import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      role: "member"
    }
  });
  const auth = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      setErrorMessage("");
      await auth.register(values);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Unable to create account right now."
      );
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-600">
          Get started
        </p>
        <h2 className="mt-3 text-3xl font-semibold">Create your account</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Register as a member or admin for your library workspace.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="Full name"
          {...register("name", { required: true })}
        />
        <input
          className="input"
          placeholder="Email address"
          {...register("email", { required: true })}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <select className="input" {...register("role", { required: true })}>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
        {errorMessage ? (
          <p className="text-sm text-rose-500">{errorMessage}</p>
        ) : null}
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-teal-600">
          Sign in
        </Link>
      </p>
    </div>
  );
}
