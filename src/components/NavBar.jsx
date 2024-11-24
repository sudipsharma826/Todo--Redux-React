import React from 'react'

const NavBar = () => {
  return (
    <>
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://todo.sudipsharma.com.np" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="images/logo.png" class="h-10 w-10" alt="Sudip Sharma Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sudip Sharma</span>
    </a>
  </div>
</nav>

    </>
  )
}

export default NavBar