<script>
    let username = '';
    let balance = 0;  // Balance ของผู้ใช้
  
    // Check if localStorage is available and get the username and balance after login
    if (typeof window !== 'undefined') {
      username = localStorage.getItem('username') || '';  // ดึงข้อมูล username จาก localStorage
      balance = parseFloat(localStorage.getItem('balance') || "0");
    }
  
    let products1Months = [];
    let products12Months = [];
  
    // Fetch data from API
    async function fetchProducts() {
      try {
        const res1Months = await fetch('http://localhost:3000/products/1months');
        products1Months = await res1Months.json();
  
        const res12Months = await fetch('http://localhost:3000/products/12months');
        products12Months = await res12Months.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    // Fetch products when the page loads
    fetchProducts();
  </script>
  
  <div class="mx-auto w-full text-white text-center h-full">
    <!-- bg -->
    <div class="relative isolate bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-full">
      <!-- หัวด้านบน -->
      <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center ">
        <div class="absolute left-10">
          <button>
            <h1 class="text-[#2C2C2C] font-semibold text-2xl bg-[#FFE3DE] flex items-center justify-center rounded-3xl px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="mr-2">
                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134" />
                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
              </svg>
              <a href="/Homepage">YouTubePreAcc</a>
            </h1>
          </button>
        </div>
  
        <!-- Nav bar ข้อมูล -->
        <div class="absolute right-10 flex justify-center items-center h-[100px]">
          <!-- Products link -->
          <button class="flex items-center"> 
            <a href="/product" class="flex items-center ">
              <h1 class="text-xl font-semibold text-[#2C2C2C]">Products</h1>
            </a>
          </button>
  
          <!-- History link -->
          <button class="flex items-center ml-20"> 
            <a href="/history" class="flex items-center">
              <h1 class="text-xl font-semibold text-[#2C2C2C]">History</h1>
            </a>
          </button>
  
          <!-- Top-up link -->
          <button class="flex items-center ml-20"> 
            <a href="/topup" class="flex items-center">
              <h1 class="text-xl font-semibold text-[#2C2C2C]">Top-up</h1>
            </a>
          </button>
  
          <!-- Profile link -->
          <button class="flex items-center ml-20">
            <a href="/profile" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-[40px] w-[40px]">
                <path fill="#ffe3de" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
              </svg>
              <span class="text-xl font-semibold text-[#2C2C2C] ml-2">{username}</span>
            </a>
          </button>
  
          <!-- Balance -->
          <button class="flex items-center ml-5"> 
            <a href="/topup" class="flex items-center">
              <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
              <h1 class="text-xl font-semibold text-[#2C2C2C] ml-2">{balance}</h1> <!-- แสดงยอดคงเหลือ -->
            </a>
          </button>
        </div>
      </div>
  
      <!-- Product list -->
      <div class="flex items-center justify-center py-[100px]">
        <!-- Product 1 -->
        <div>
          <button class="flex flex-col items-center justify-center bg-[#FFE3DE] rounded-3xl shadow-md p-10 w-[500px] h-[600px] mr-10 mb-10">
            <a href="/product-detail-1">
              <h1 class="text-4xl font-semibold text-[#2C2C2C] mb-6">1 MONTH</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="w-[300px] h-[300px] mb-6">
                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
              </svg>
  
              <!-- แสดงจำนวนในสต็อก -->
              <h1 class="text-4xl font-semibold text-[#2C2C2C] ">IN STOCK {products1Months.length}</h1>
            </a>
          </button>
          <button><a href="/product-detail-1" class="bg-white text-2xl text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">Order now</a></button>
        </div>
  
        <!-- Product 2 -->
        <div>
          <button class="flex flex-col items-center justify-center bg-[#FFE3DE] rounded-3xl shadow-md p-10 w-[500px] h-[600px] mb-10">
            <a href="/product-detail-12">
              <h1 class="text-4xl font-semibold text-[#2C2C2C] mb-6">12 MONTH</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="w-[300px] h-[300px] mb-6">
                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
              </svg>
  
              <!-- แสดงจำนวนในสต็อก -->
              <h1 class="text-4xl font-semibold text-[#2C2C2C] ">IN STOCK {products12Months.length}</h1>
            </a>
          </button>
          <button><a href="/product-detail-12" class="bg-white text-2xl text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">Order now</a></button>
        </div>
      </div>
    </div>
  </div>
  