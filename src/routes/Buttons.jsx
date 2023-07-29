import Header from "../components/Header";

export default function Buttons() {
    return (
        <>
            <Header />
            <div className='flex flex-col gap-8 bg-slate-100 py-16 rounded-xl shadow-lg mx-5 my-16'>
                <div className="text-5xl font-extrabold ... mx-auto">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500">
                        Buttons
                    </span>
                </div>

                {/* Buttons Primary */}
                <div className='w-full flex flex-col items-center md:flex-row gap-10'>
                    <div className='w-full md:w-1/3 flex flex-col gap-5 items-center'>
                        <h1 className='font-bold text-2xl text-center mb-4'>Primary</h1>
                        <button className='bg-blue-500 px-5 py-2 rounded-xl hover:bg-blue-600 active:bg-blue-800'>
                            <span className='text-white font-semibold text-lg'>
                                Button Title
                            </span>
                        </button>

                        <button className='bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 active:bg-blue-800'>
                            <span className='text-white font-semibold text-base'>
                                Button Title
                            </span>
                        </button>

                        <button className='bg-blue-500 px-4 py-1 rounded-xl hover:bg-blue-600 active:bg-blue-800'>
                            <span className='text-white font-semibold text-sm'>
                                Button Title
                            </span>
                        </button>
                    </div>

                    {/*Buttons Ghost */}
                    <div className='w-full md:w-1/3 flex flex-col gap-5 items-center'>
                        <h1 className='font-bold text-2xl text-center mb-4'>Ghost</h1>
                        <button className='px-5 py-2 rounded-xl border-2 border-blue-400 hover:bg-blue-100 active:bg-blue-200'>
                            <span className='text-blue-500 font-semibold text-lg'>
                                Button Title
                            </span>
                        </button>

                        <button className='px-4 py-2 rounded-xl border-2 border-blue-400 hover:bg-blue-100 active:bg-blue-200'>
                            <span className='text-blue-500 font-semibold text-base'>
                                Button Title
                            </span>
                        </button>

                        <button className='px-4 py-1 rounded-xl border-2 border-blue-400 hover:bg-blue-100 active:bg-blue-200'>
                            <strong className='text-blue-500 font-semibold text-sm'>
                                Button Title
                            </strong>
                        </button>
                    </div>

                    {/* Buttons Link */}
                    <div className='w-full md:w-1/3 flex flex-col gap-5 items-center'>
                        <h1 className='font-bold text-2xl text-center mb-4'>Link</h1>

                        <button className='px-5 py-2 flex items-center gap-1'>
                            <span className='text-blue-400 font-semibold text-lg hover:text-blue-500 active:text-blue-700'>
                                Button Title
                            </span>
                            <span className='material-symbols-outlined text-blue-400 hover:text-blue-500 active:text-blue-700'>
                                arrow_forward
                            </span>
                        </button>

                        <button className='px-4 py-2 flex items-center gap-1'>
                            <span className='text-blue-400 font-semibold text-base hover:text-blue-500 active:text-blue-700'>
                                Button Title
                            </span>
                            <span className='material-symbols-outlined text-blue-400 hover:text-blue-500 active:text-blue-700'>
                                arrow_forward
                            </span>
                        </button>

                        <button className='px-4 py-1 flex items-center gap-1'>
                            <span className='text-blue-400 font-semibold text-sm hover:text-blue-500 active:text-blue-700'>
                                Button Title
                            </span>
                            <span className='material-symbols-outlined text-blue-400 hover:text-blue-500 active:text-blue-700'>
                                arrow_forward
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}