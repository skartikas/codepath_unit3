import React from "react";

const Hero = () => {
  return (
    <div>
      <main>
        <section class="bg-white dark:bg-gray-900">
          <div class="container mx-auto px-6 py-16 text-center ">
            <div class="mx-auto max-w-lg items-center flex flex-col">
              <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                Find recent and upcoming soccer games with lowest ticket prices!
              </h1>
              <p class="mt-6 text-gray-500 dark:text-gray-300">
                Get quick information about soccer games without all the extra
                stuff.
              </p>
              <div className="flex">
                <a className="mr-2" href="/games">
                  <button class="mt-6 rounded-lg bg-sky-500 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
                    All Games
                  </button>
                </a>
                <a href="/">
                  <button class="mt-6 rounded-lg bg-sky-500 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
                    Locations
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Hero;
