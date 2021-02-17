import React from "react"
import { Link } from "gatsby"

const FrontPage = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/kamoshika-backyard" aria-label="Article">
              <img
                src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/FfT+-+Shems+Jud+/tanzawa+mountains-japan-tenkara-fishing-business+trip-exploring-guest+blog+post-kamoshika.JPG"
                class="object-cover w-full h-64 rounded"
                alt="Waterfall"
              />
            </a>
            <div class="py-5">
              <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                04 April 2019
              </p>
              <a
                href="/kamoshika-backyard"
                aria-label="Article"
                class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p class="text-2xl font-bold leading-5">Kamoshika's Backyard</p>
              </a>
              <p class="mb-4 text-gray-700">
              I have been enchanted with Japanese trout and char since a stint teaching English 
              in Japan some twenty years ago...
              </p>
            </div>
          </div>
          
          
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/mountain-huts" aria-label="Article">
              <img
                src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/FfT+-+Mountain+Huts/Japan-Mountain-Huts-Tenkara-Exploring-Katanokoya-Hut.jpg"
                class="object-cover w-full h-64 rounded"
                alt="mountain huts in Japan"
              />
            </a>
            <div class="py-5">
              <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                21 May 2018
              </p>
              <a
                href="/mountain-huts"
                aria-label="Article"
                class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p class="text-2xl font-bold leading-5">Mountain Huts</p>
              </a>
              <p class="mb-4 text-gray-700">The mountain hut system in Japan is not only extensive but also many can be quite luxurious...</p>
            </div>
          </div>
          
          
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/life" aria-label="Article">
              <img
                src="https://fallfish-tenkara-images.s3-us-west-1.amazonaws.com/FfT+-+Life/Kadosan-friend-adventurer-sensei-badass.JPG"
                class="object-cover w-full h-64 rounded"
                alt="My tenkara sensei and good friend Kado-san and me."
              />
            </a>
            <div class="py-5">
              <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                16 April 2018
              </p>
              <a
                href="/life"
                aria-label="Article"
                class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p class="text-2xl font-bold leading-5">Life</p>
              </a>
              <p class="mb-4 text-gray-700">
                The old adage: "Good things must always come to an end" rings especially true for me as I prepare to leave Japan...
              </p>
            </div>
          </div>
        </div>


        <div class="flex flex-wrap w-full justify-between">
            <Link 
              to={`/blog`}
              class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black"
            ><span role="img" aria-label="map of japan">&#128510;</span> Read more blog posts...</Link>
            <Link 
              to={`/search`}
              class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black"
            ><span role="img" aria-label="right leaning magnifying glass">&#128270;</span> Search the archives...</Link>
        </div>

      </div>
    );
  };

  export default FrontPage
