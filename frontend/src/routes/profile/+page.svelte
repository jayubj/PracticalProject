<div class="mx-auto w-full text-white text-center">

  <!-- bg -->
  <div class="relative isolate overflow-hidden bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-screen">

      <!-- หัวด้านบน -->
      <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center "> 

          <div class=" absolute left-10">
              <button><h1 class="text-[#2C2C2C] font-semibold text-2xl bg-[#FFE3DE] flex items-center justify-center rounded-3xl px-4 py-2"><svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class = "mr-2 ">
                  <path fill="#f00" 
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                  <path fill="#fff" 
                  d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg><a href="/Home-login">YouTubePreAcc</a></h1>
              </button>
              
          </div>

          <div class="absolute right-10 flex justify-center items-center h-[100px]">

              <button class="flex items-center"> 
                  <a href="/product" class="flex items-center ">
                      <h1 class="text-xl font-semibold text-[#2C2C2C]">Products</h1>
                  </a>
              </button>

              <button class="flex items-center ml-20"> 
                  <a href="/history" class="flex items-center">
                      <h1 class="text-xl font-semibold text-[#2C2C2C] ">History</h1>
                  </a>
              </button>

              <button class="flex items-center ml-20"> 
                  <a href="/topup" class="flex items-center">
                      <h1 class="text-xl font-semibold text-[#2C2C2C]">Top-up</h1>
                  </a>
              </button>

              <button class="flex items-center mr-5"> 
                  <a href="/profile" class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-[80px] w-[80px] ml-20">
                          <path fill="#ffe3de" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                  </a>
              </button>

              <button class="flex items-center mr-5"> 
                  <a href="/topup" class="flex items-center">
                      <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
                      <h1 class="text-xl font-semibold text-[#2C2C2C] ml-2">0</h1> 
                  </a>
              </button>
              
          </div>
      </div>
      
      <!-- ข้อความตรงกลาง -->
      <div class="flex flex-col items-center h-screen text-center py-[50px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-[300px] w-[300px]">
              <path fill="#ffe3de" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
          </svg>
      
          <button class="mt-3">
              <a href="/Home-login" class="bg-white text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">Upload</a>
          </button>

          <div class="flex flex-col w-1/2 space-y-4">
              <label for="email" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Email</label>
              <input type="Email" placeholder="Email" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
          
              <label for="username" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Username</label>
              <div class="relative w-full">
                  <input type="text" id="username" placeholder="Username" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C] pr-12">
                  <button class="absolute inset-y-0 right-3 flex items-center text-[#2C2C2C]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-6 w-6">
                          <path fill="#808080" d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1 1 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263M21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9z"/></svg>
                  </button>
              </div>
              
              <label for="password" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Password</label>
              <div class="relative w-full">
                  <input type="password" placeholder="Password" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
                  <button class="absolute inset-y-0 right-3 flex items-center text-[#2C2C2C]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-6 w-6">
                          <path fill="#808080" d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1 1 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263M21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9z"/></svg>
                  </button>
              </div>
          
              <div class="flex justify-end items-center mt-10">
                  <button><a href="/" class="bg-white text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">Logout</a></button>
              </div>
          </div>
          
          

      </div>
      

  </div>
</div>