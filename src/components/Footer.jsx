import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
    

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class=" w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-semibold">
      <span class=" mb-4 text-lg text-gray-500 sm:text-center dark:text-yellow-400"> {year} <a href="https://sudipsharma.info.np" class="hover:underline">Sudip Sharma</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-9">
        <li>
            <a href="https://github.com/sudipsharma826/" class="hover:underline me-4 md:me-6"><img src="	https://img.icons8.com/fluent/30/000000/github.png"></img></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/sudipsharmanp/" class="hover:underline me-4 md:me-6"><img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"></img></a>
        </li>
        <li>
            <a href="https://www.facebook.com/sudipsharma.np/" class="hover:underline me-4 md:me-6"><img src="	https://img.icons8.com/fluent/30/000000/facebook-new.png
"></img></a>
        </li>
        <li className='mb-3'>
            <a href="mailto:info@sudipsharma.com.np" class="hover:underline"><img src="https://img.icons8.com/fluent/30/000000/new-post.png"></img></a>
        </li>
        <li className='mb-3'>
            <a href="tel:+9779816662624" class="hover:underline"><img src="https://img.icons8.com/fluent/30/000000/phone.png"></img></a>
        </li>
    </ul>
    </div>
</footer>

    </>
  )
}

export default Footer