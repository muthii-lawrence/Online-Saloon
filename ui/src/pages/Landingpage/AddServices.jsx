import React from "react";

const AddServices = () => {
  return (
    <div>
      <div>
        <h1>Your Services</h1>
      </div>
      <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
        <div class="mb-4 md:flex md:justify-between">
          <div class="mb-4 md:mr-2 md:mb-0">
            <label
              class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
              for="firstName"
            >
              First Name
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="md:ml-2">
            <label
              class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
              for="lastName"
            >
              Last Name
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
            for="email"
          >
            Email
          </label>
          <input
            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="mb-4 md:flex md:justify-between">
          <div class="mb-4 md:mr-2 md:mb-0">
            <label
              class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
              for="password"
            >
              Password
            </label>
            <input
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-xs italic text-red-500">Please choose a password.</p>
          </div>
          <div class="md:ml-2">
            <label
              class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
              for="c_password"
            >
              Confirm Password
            </label>
            <input
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="c_password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="mb-6 text-center">
          <button
            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={showModal}
          >
            Register Account
          </button>
        </div>
        <hr class="mb-6 border-t" />
        <div class="text-center">
          <a
            class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div class="text-center">
          <a
            class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
            href="./login"
          >
            Already have an account? Login!
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
