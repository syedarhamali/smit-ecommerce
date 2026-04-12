import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router";

export default function Signup() {
    return (
        <div className="flex flex-1 w-full overflow-y-hidden">
            <div className="flex-grow h-full overflow-y-auto">
                <div className="relative flex flex-col bg-alternative min-h-screen">
                    <div className="flex flex-1 h-full">
                        <main className="flex flex-col items-center flex-1 shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-studio border-default">
                            <div className="flex-1 flex flex-col justify-center w-82.5 sm:w-[384px]">
                                <div className="mb-10">
                                    <h1 className="mt-8 mb-2 lg:text-3xl font-semibold">Create an account</h1>
                                    <h2 className="text-sm text-foreground-light">
                                        Enter your details to get started
                                    </h2>
                                </div>

                                <Formik
                                    initialValues={{ email: '', password: '', fullName: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                            errors.email = 'Invalid email address';
                                        }
                                        if (!values.password) errors.password = 'Required';
                                        if (!values.fullName) errors.fullName = 'Required';
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            console.log("Form Data:", values);
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({ isSubmitting, errors, touched }) => (
                                        <Form className="flex flex-col gap-4 text-start">
                                            {/* Full Name Field */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm text-foreground" htmlFor="fullName"> Full Name </label>
                                                <Field
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    placeholder="John Doe"
                                                    className={`flex w-full rounded-md border px-3 py-2 text-sm h-[34px] focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-control'}`}
                                                />
                                                <ErrorMessage name="fullName" component="div" className="text-xs text-red-500" />
                                            </div>

                                            {/* Email Field */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm text-foreground" htmlFor="email"> Email </label>
                                                <Field
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="you@example.com"
                                                    className={`flex w-full rounded-md border px-3 py-2 text-sm h-[34px] focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.email && touched.email ? 'border-red-500' : 'border-control'}`}
                                                />
                                                <ErrorMessage name="email" component="div" className="text-xs text-red-500" />
                                            </div>

                                            {/* Password Field */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="text-sm text-foreground" htmlFor="password"> Password </label>
                                                <div className="relative">
                                                    <Field
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        placeholder="••••••••"
                                                        className={`flex w-full rounded-md border px-3 py-2 text-sm h-[34px] focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.password && touched.password ? 'border-red-500' : 'border-control'}`}
                                                    />
                                                </div>
                                                <ErrorMessage name="password" component="div" className="text-xs text-red-500" />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full flex items-center justify-center bg-brand-500 hover:bg-brand-600 border-black border text-black font-medium py-2 px-4 rounded-md transition-all h-11 focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-70 disabled:cursor-wait"

                                            >
                                                {isSubmitting ? "Loading..." : "Sign up"}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>

                                <div className="self-center my-8 text-sm">
                                    <span className="text-foreground-light">Already have an account?</span>{" "}
                                    <Link className="underline text-foreground hover:text-foreground-light" to="/smit-ecommerce">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </main>

                        {/* Sidebar Quote */}
                        <aside className="flex-col items-center justify-center flex-1 hidden xl:flex bg-alternative/20">
                            <div className="relative flex flex-col gap-6 p-10">
                                <blockquote className="z-10 max-w-lg text-3xl italic text-foreground-light">
                                    "Supabase is the best product experience I've had in years. Not just tech - taste."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-300" />
                                    <cite className="not-italic font-medium">@yatsiv_yuriy</cite>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}