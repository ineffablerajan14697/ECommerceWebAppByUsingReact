function ContactUs() {
    return (
        <main id="contact-us" className="bg-slate-50 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Contact Us</p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                        We would love to hear from you
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Have a question about an order or a product? Send us a message.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 rounded-xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
                        <p className="mt-3 leading-7 text-slate-600">
                            Our support team is here to help you with your shopping experience.
                        </p>
                        <div className="mt-6 space-y-4 text-slate-600">
                            <p><span className="font-semibold text-slate-900">Email:</span> support@shopeasy.com</p>
                            <p><span className="font-semibold text-slate-900">Phone:</span> +91 12345 67890</p>
                            <p><span className="font-semibold text-slate-900">Hours:</span> Monday to Saturday, 9 AM to 6 PM</p>
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                            <input id="name" type="text" placeholder="Your name" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                            <textarea id="message" rows="4" placeholder="How can we help?" className="mt-1 w-full resize-none rounded-md border border-slate-300 px-3 py-2.5 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        </div>
                        <button type="button" className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export { ContactUs };
