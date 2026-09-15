function About() {
    return (
        <>
        <main id="about" className="bg-slate-50 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
                {/* Page heading */}
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                        About ShopEasy
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                        Shopping made simple
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        ShopEasy helps you discover useful products at prices you will love.
                    </p>
                </div>

                {/* About content */}
                <section className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
                        <p className="mt-3 leading-7 text-slate-600">
                            We want every customer to have an easy, enjoyable, and reliable online shopping experience.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">Why Choose Us?</h2>
                        <ul className="mt-3 space-y-2 text-slate-600">
                            <li>✓ Quality products</li>
                            <li>✓ Friendly customer support</li>
                            <li>✓ Simple and secure shopping</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}

export { About }
