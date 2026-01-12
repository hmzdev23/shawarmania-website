'use client';

import { BlurFade } from '@/components/ui/blur-fade';

export default function ContactPage() {
    return (
        <div className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="glass-panel rounded-3xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left: Form */}
                        <div>
                            <BlurFade delay={0.1}>
                                <h1 className="text-3xl font-semibold tracking-tight mb-6 text-neutral-900">
                                    Get in touch
                                </h1>
                                <p className="text-neutral-500 mb-8 font-light">
                                    Have a question or feedback? We&apos;d love to hear from you.
                                </p>
                            </BlurFade>

                            <BlurFade delay={0.2}>
                                <form className="space-y-5">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 glass-input rounded-lg focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 glass-input rounded-lg focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 glass-input rounded-lg focus:outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-600 mb-2 uppercase tracking-wide">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-3 glass-input rounded-lg focus:outline-none transition-all resize-none"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </BlurFade>

                            {/* Contact Info */}
                            <BlurFade delay={0.3}>
                                <div className="mt-12 space-y-4">
                                    <a
                                        href="tel:+15147467602"
                                        className="flex items-center gap-4 text-neutral-600 group cursor-pointer hover:text-orange-600 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-100 group-hover:border-orange-200">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">(514) 746-7602</span>
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/TL6ptSscu3EcaAHCA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-neutral-600 group cursor-pointer hover:text-orange-600 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-100 group-hover:border-orange-200">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">896 Sherbrooke St W, Montreal</span>
                                    </a>
                                    <div className="flex items-center gap-4 text-neutral-600">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-100">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">Open 11am – 12am daily</span>
                                    </div>
                                </div>
                            </BlurFade>
                        </div>

                        {/* Right: Map */}
                        <BlurFade delay={0.4}>
                            <div className="bg-white/50 rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full relative border border-white/50 shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.123456789!2d-73.575!3d45.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a41a3b3b3b3%3A0x123456789abcdef!2s896%20Sherbrooke%20St%20W%2C%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1234567890123"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) opacity(0.8)', minHeight: '400px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    );
}
