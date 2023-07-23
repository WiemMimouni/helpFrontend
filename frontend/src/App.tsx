import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "30rem",
          backgroundImage: "url(/hero-home.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 justify-center"
      ></div>
      <div
        style={{
          marginTop: "24rem",
        }}
        id="whoobe-t7qyk"
        className="justify-center items-center drop-shadow-md rounded-lg bg-white px-6 flex flex-col md:w-2/3 m-auto mb-8"
      >
        <div className="my-4 lg:-mx-6 lg:flex lg:items-center">
          <div className="mt-4 lg:w-1/2 lg:mt-0 lg:mx-6 grid">
            <div className="h-12 w-12 mt-6"></div>
            <p className="text-3xl text-blue-500">Pack TrustiT</p>
            <p className="font-sans mt-3 text-xl text-gray-500 dark:text-gray-500 md:text-xl">
              Destiné à tous les types d'entreprises, le pack B2B 'TrustiT' est
              dédié pour résoudre tous vos problèmes informatiques
            </p>
            <button className="font-sans border text-2xl border-teal-300 bg-sky-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-sky-600 focus:outline-none focus:shadow-outline md:place-self-end mt-36">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


