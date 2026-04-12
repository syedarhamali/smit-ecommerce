import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="min-h-screen w-full bg-alternative flex flex-col lg:grid lg:grid-cols-12 overflow-x-hidden">
      
      {/* LEFT COLUMN: FORM */}
      <main className="lg:col-span-7 xl:col-span-8 flex flex-col items-center justify-center px-6 py-12 bg-studio border-r border-default shadow-2xl z-10">
        <div className="w-full max-w-100 flex flex-col">
          
          {/* Header */}
          <header className="mb-10 text-left">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="text-sm text-foreground-light mt-2">
              Sign in to your account to continue.
            </p>
          </header>

          {/* Formik Integration */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) errors.email = 'Email is Required';
              else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) errors.password = 'Password is Required';
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="flex flex-col gap-y-6 text-start">
                
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className={`flex w-full rounded-md border bg-foreground/[.02] px-3 py-2 text-sm ring-offset-background transition-all
                      ${errors.email && touched.email ? 'border-destructive focus:ring-destructive' : 'border-control focus:ring-brand'}
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10`}
                  />
                  <ErrorMessage name="email" component="span" className="text-xs text-destructive mt-1" />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2 relative">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </label>
                    <Link 
                      to="/forgot-password" 
                      className="text-xs text-foreground-lighter hover:text-brand transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      className={`flex w-full rounded-md border bg-foreground/[.02] px-3 py-2 text-sm ring-offset-background transition-all
                        ${errors.password && touched.password ? 'border-destructive focus:ring-destructive' : 'border-control focus:ring-brand'}
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 pr-10`}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-foreground-lighter hover:text-foreground"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                  </div>
                  <ErrorMessage name="password" component="span" className="text-xs text-destructive mt-1" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-brand-500 hover:bg-brand-600 border-black border text-black font-medium py-2 px-4 rounded-md transition-all h-11 focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-70 disabled:cursor-wait"
                >
                  {isSubmitting ? "Authenticating..." : "Sign In"}
                </button>

                <p className="text-center text-sm text-foreground-light mt-4">
                  Don’t have an account?{" "}
                  <Link to="/smit-ecommerce/signup" className="font-semibold text-foreground underline hover:text-brand transition-colors">
                    Sign up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>

          {/* Footer Footer */}
          <footer className="mt-12 text-center">
            <p className="text-[11px] text-foreground-lighter leading-relaxed">
              By continuing, you agree to the{" "}
              <a href="#" className="underline">Terms of Service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </footer>
        </div>
      </main>

      {/* RIGHT COLUMN: TESTIMONIAL (Hidden on Mobile) */}
      <aside className="hidden lg:flex lg:col-span-5 xl:col-span-4 bg-alternative flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative Quote Mark */}
        <span className="absolute -top-10 -left-5 text-[200px] font-serif text-foreground-muted/10 pointer-events-none select-none">
          “
        </span>
        
        <div className="relative z-10 space-y-8">
          <blockquote className="text-2xl xl:text-3xl font-medium text-foreground leading-snug italic">
            "Supabase is the best product experience I've had in years. Tech with taste. Feels like every other platform should study how they built it."
          </blockquote>
          
          <div className="flex items-center gap-4">
            <img
              src="https://supabase.com/images/twitter-profiles/Y1swF6ef_400x400.jpg"
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-brand/20 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-bold text-foreground">Yuriy Yatsiv</span>
              <span className="text-sm text-foreground-lighter">@yatsiv_yuriy</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}