<script>
    let username = '';
  
    // Check if localStorage is available and get the username after login
    if (typeof window !== 'undefined') {
      username = localStorage.getItem('username') || '';  // ดึงข้อมูล username จาก localStorage
    }
  </script>
  
  <div class="mx-auto w-full text-white text-center">
    <!-- bg -->
    <div class="relative isolate overflow-hidden bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-screen">
  
      <!-- หัวด้านบน -->
      <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center"> 
  
        <div class="absolute left-10">
          <button>
            <h1 class="text-[#2C2C2C] font-semibold text-2xl bg-[#FFE3DE] flex items-center justify-center rounded-3xl px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="mr-2">
                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
              </svg>
              <a href="/Home-login">YouTubePreAcc</a>
            </h1>
          </button>
        </div>
  
        <div class="absolute right-10 flex justify-center items-center h-[100px]">
            <!-- แสดง Products, History, Top-up -->
            <button class="flex items-center ml-10"> 
              <a href="/product" class="flex items-center">
                <h1 class="text-xl font-semibold text-[#2C2C2C]">Products</h1>
              </a>
            </button>
            <button class="flex items-center ml-10"> 
              <a href="/history" class="flex items-center">
                <h1 class="text-xl font-semibold text-[#2C2C2C]">History</h1>
              </a>
            </button>
            <button class="flex items-center ml-10"> 
              <a href="/topup" class="flex items-center">
                <h1 class="text-xl font-semibold text-[#2C2C2C]">Top-up</h1>
              </a>
            </button>
          
            <!-- แสดง Avatar และ Username -->
            <div class="flex items-center ml-20"> <!-- เพิ่ม ml-20 เพื่อขยับไปทางขวา -->
                <a href="/profile" class="flex items-center">
              <span class="text-xl font-semibold text-[#2C2C2C] ml-2">{username}</span> <!-- กำหนดขนาดฟอนต์ text-xl -->
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-[40px] w-[40px] ml-2">
                <path fill="#ffe3de" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
              </svg>
            </div>
          
            <button class="flex items-center ml-5">
              <a href="/topup" class="flex items-center">
                <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
                <h1 class="text-xl font-semibold text-[#2C2C2C] ml-2">0</h1> 
              </a>
            </button>
          </div>                
      </div>
      
      <!-- ข้อความตรงกลาง -->
      <div class="flex flex-col items-center h-screen text-center py-[250px]">
        <h1 class="text-6xl font-semibold text-[#2C2C2C]">YouTubePreAcc</h1>
        <button>
          <h1 class="text-[#2C2C2C] font-semibold text-2xl bg-[#FFE3DE] flex items-center justify-center rounded-3xl px-4 py-2 drop-shadow-md">
            <a href="/product">See more products</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" class="ml-2">
              <path fill="none" stroke="#2c2c2c" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/>
              <path fill="none" stroke="#2c2c2c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/>
            </svg>
          </h1>
        </button>
      </div>
    </div>
  </div>
  