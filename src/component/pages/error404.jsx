import { Link } from "react-router-dom";

function Error404() {
    return (
        <main className="grid min-h-screen place-items-center bg-slate-50 px-6 py-16">
            <section className="max-w-md text-center">
                <p className="text-7xl font-extrabold tracking-tight text-blue-600 sm:text-8xl">
                    404
                </p>
                <h1 className="mt-5 text-3xl font-bold text-slate-900">
                    Page not found
                </h1>
                <p className="mt-3 leading-7 text-slate-600">
                    Sorry, the page you are looking for does not exist or may have moved.
                </p>
                <Link
                    to="*"
                    className="mt-8 inline-block rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Back to Home
                </Link>
            </section>
        </main>
    );
}

export { Error404 };
