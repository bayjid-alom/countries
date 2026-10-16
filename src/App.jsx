
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())



function App() {

  return (

    <>
      <Suspense fallback={<CountryLoading></CountryLoading>}>

        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}



const CountryLoading = () => {
    return (
        <div className="mx-auto my-8 w-[94%] rounded-2xl border border-slate-700/40 bg-[#101827]/40 p-5">

            {/* Loading Heading */}
            <div className="mb-6 text-center">
                <span className="loading loading-spinner loading-md text-teal-400"></span>

                <h4 className="mt-2 text-[30px] text-base font-semibold text-slate-200">
                    Loading Countries
                </h4>

                <p className="mt-1 text-xs text-slate-500">
                    Preparing country information...
                </p>
            </div>

            {/* Progress Line */}
            <div className="mb-7 h-[3px] overflow-hidden rounded-full bg-slate-700/40">
                <div className="h-full w-1/3 animate-[loading_1.8s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-teal-500/60 to-emerald-400"></div>
            </div>

            {/* Skeleton Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 rounded-xl border border-slate-700/40 bg-[#172235]/70 p-3"
                    >
                        <div className="h-36 w-full animate-pulse rounded-lg bg-slate-700/35"></div>

                        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-600/35"></div>

                        <div className="h-3 w-1/2 animate-pulse rounded bg-slate-600/25"></div>

                        <div className="h-9 w-full animate-pulse rounded-lg bg-slate-600/20"></div>

                        <div className="flex gap-3">
                            <div className="h-9 flex-1 animate-pulse rounded-lg bg-teal-800/20"></div>
                            <div className="h-9 flex-1 animate-pulse rounded-lg bg-slate-600/25"></div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes loading {
                    0% { transform: translateX(-110%); }
                    100% { transform: translateX(330%); }
                }
            `}</style>
        </div>
    );
};


export default App
