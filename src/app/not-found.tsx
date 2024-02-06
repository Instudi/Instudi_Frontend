export default function NotFound() {
    return (
        <div className="text-center h-[70vh] flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-[var(--primary-rgb)]">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight from-slate-900 to-slate-400 sm:text-5xl
            bg-gradient-to-br dark:from-violet-500 dark:to-purple-500 bg-clip-text text-transparent">Sayfa Yko</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Aradığın sayfayı bulabilmiş değiliz, şunlardan birini deneyebilirsin ama :</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold 
                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 
                hover:shadow-lg hover:scale-110 hover:shadow-slate-500">Anasayfaya git</a>
                <a href="/" className="text-sm font-semibold text-gray-900
                dark:text-gray-100">Bizimle iletişime geç <span aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
    );
}