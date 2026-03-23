import { useState } from "react";





export default function Auth() {


    const [mode, setMode] = useState("login");




    return (
        <section id="auth" className="w-full py-24 bg-[#061225] flex justify-center">

            <div className="w-full max-w-6xl rounded-2xl overflow-hidden grid md:grid-cols-2 bg-gradient-to-br from-[#0f1c34] to-[#152742] shadow-2xl">

                {/* LEFT SIDE */}
                <div className="p-12">

                    <h2 className="text-white text-2xl font-semibold mb-6">
                        {mode === 'signup' ? 'Create Account' : 'Welcome'}
                    </h2>
                    <div className="flex gap-6 mb-8 text-sm">
                        <span onClick={() => setMode("login")}
                            className={mode === 'login' ? 'text-white border-b border-white pb-1 cursor-pointer' : 'text-gray-400 cursor-pointer'}>
                            Login
                        </span>
                        <span onClick={() => setMode("signup")}
                            className={mode === 'signup' ? "text-white border-b border-white pb-1 cursor-pointer" : 'text-gray-400 cursor-pointer'}>
                            Signup
                        </span>
                    </div>

                    {/* Name */}
                    {mode === 'signup' && (
                        <>
                            <label className="text-gray-400 text-xs">
                                NAME
                            </label>

                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full mt-2 mb-6 bg-[#020817] border border-[#1e293b] rounded-md px-4 py-3 text-white outline-none focus:border-blue-500"
                            />

                        </>
                    )}

                    <label className="text-gray-400 text-xs">
                        EMAIL
                    </label>
                    <input
                        type="text"
                        placeholder="name@company.com"
                        className="w-full mt-2 mb-6 bg-[#020817] border border-[#1e293b] rounded-md px-4 py-3 text-white outline-none focus:border-blue-500"
                    />


                    {/* Password */}
                    <label className="text-gray-400 text-xs">
                        ACCESS KEY
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••••"
                        className="w-full mt-2 mb-8 bg-[#020817] border border-[#1e293b] rounded-md px-4 py-3 text-white outline-none focus:border-blue-500"
                    />

                    {mode === 'signup' && (
                        <>
                            <label className="text-gray-400 text-xs">
                                Confirm KEY
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••••"
                                className="w-full mt-2 mb-8 bg-[#020817] border border-[#1e293b] rounded-md px-4 py-3 text-white outline-none focus:border-blue-500"
                            />

                        </>
                    )}

                    {/* Button */}
                    <button className="w-full bg-blue-300 text-[#0f172a] font-semibold py-4 rounded-lg hover:bg-blue-400 transition">
                        {mode === 'signup' ? 'Create Account' : 'Login'}
                    </button>

                    {/* Terms */}
                    <p className="text-gray-500 text-xs mt-6">
                        By initializing, you agree to our{" "}
                        <span className="underline cursor-pointer">Terms of Protocol</span>{" "}
                        and{" "}
                        <span className="underline cursor-pointer">
                            System Integrity Policies
                        </span>.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-[#0b1830] to-[#142b4f]">

                    {/* Globe Glow */}
                    <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

                    {/* Testimonial Card */}
                    <div className="relative bg-[#0c1a33]/80 backdrop-blur-md p-8 rounded-xl max-w-md text-gray-300 shadow-xl">
                        <p className="mb-2 italic">
                            "Equity Sentinel transformed our desk's workflow. The ML signals
                            are consistently hitting targets that our human analysts missed."
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}