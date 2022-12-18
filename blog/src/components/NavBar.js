import React from "react";

function NavBar() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-zinc-900 p-0 fixed top-0 z-50 w-full">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">MyBlogs</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="/about"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="/about"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Services
            </a>

            <span class="group relative inline-block">
              <button class="inline-flex items-center rounded py-2 px-4 font-semibold text-teal-200">
                More
              </button>
              <ul class="absolute hidden pt-1 text-gray-700 group-hover:block">
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Facebook
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Instagram
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </span>
          </div>

          <div>
            <a
              href="/login"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Login
            </a>
            <a
              href="/signup"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              SignUp
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
