<script>
    import { onMount } from 'svelte';
  
    let username = '';
    let balance = 0;
  
    onMount(() => {
      const usernameFromStorage = localStorage.getItem('username');
      const userIDFromStorage = localStorage.getItem('userID');
  
      if (usernameFromStorage) {
        username = usernameFromStorage;
  
        // Fetch user data and balance after login
        async function fetchUserData() {
          try {
            const response = await fetch(`http://localhost:3000/users/${userIDFromStorage}`);
            const userData = await response.json();
            console.log(userData);
            console.log('Fetched userData:', userData);
  
            if (userData && userData.balance !== undefined) {
              balance = userData.balance;
              console.log('Fetched balance for username:', username, 'Balance:', balance);
  
              // Update balance in localStorage
              localStorage.setItem('balance', balance.toString());
  
              // Update balance on the page
              const balanceElement = document.getElementById('user-balance');
              if (balanceElement) {
                balanceElement.innerText = balance.toString();
              }
            } else {
              console.error('Balance is undefined in userData');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
  
        fetchUserData();
      }
    });
  </script>
  
  <div class="mx-auto w-full text-white text-center h-full">
    <!-- bg -->
    <div class="relative isolate bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-full">
      <!-- Header section -->
      <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center">
        <div class="absolute left-10">
          <button>
            <h1 class="text-[#2C2C2C] font-semibold text-2xl bg-[#FFE3DE] flex items-center justify-center rounded-3xl px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="mr-2">
                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
              </svg>
              <a href="/Homepage">YouTubePreAcc</a>
            </h1>
          </button>
        </div>
  
        <div class="absolute right-10 flex justify-center items-center h-[100px]">
          <!-- Display Products, History, Top-up -->
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
        
          <!-- Display Username -->
          <div class="flex items-center ml-20">
            <a href="/profile" class="flex items-center">
              <span class="text-xl font-semibold text-[#2C2C2C] ml-2">{username}</span>
            </a>
          </div>
        
          <!-- Display Balance -->
          <button class="flex items-center ml-5">
            <a href="/topup" class="flex items-center">
              <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
              <h1 id="user-balance" class="text-xl font-semibold text-[#2C2C2C] ml-2">{balance}</h1> <!-- Balance displayed here -->
            </a>
          </button>
        </div>                
      </div>
      
      <!-- Main content -->
      <div class="flex flex-col items-center h-screen text-center py-[250px]">
        <table class="border-collapse border border-slate-500">
          <thead>
            <tr>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">NUMBER</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">ID PRODUCT</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">LIST</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">AMOUNT</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">PRICE</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">DETAIL</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFE3DE] p-5">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example Rows -->
            <tr>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">001</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">P001</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">1 MONTH</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">1</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">45</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">Test@gmail.com/12345</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">EXPIRE</th>
            </tr>
            <tr>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">002</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">P002</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">12 MONTH</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">1</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">540</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">Test2@gmail.com/12345</th>
              <th class="border border-slate-600 text-[#2C2C2C] bg-[#FFFFFF] p-5">20 DAY TO EXPIRE</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  