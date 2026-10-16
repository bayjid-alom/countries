
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())



function App() {

  return (

    <>
      <Suspense fallback={<ProgressSpinner></ProgressSpinner>}>

        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}





const ProgressSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-32">
      <div className="w-full max-w-2xl h-4 bg-white border border-green-400 rounded-full overflow-hidden shadow-sm">
        <div
          className="h-full rounded-full animate-[progress_3s_ease-in-out_infinite]"
          style={{
            background: "linear-gradient(90deg, #16a34a, #4ade80)",
            boxShadow: "0 0 12px #22c55e"
          }}
        ></div>
      </div>

      <p className="text-lg font-semibold text-green-500 animate-pulse">
        Loading Countries...
      </p>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default App
