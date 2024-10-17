<script lang="ts">
    interface Product {
      id: number;
      email: string;
      password: string;
      price: number;
    }

    let username = '';
    let balance = 0;  // Balance ของผู้ใช้
    let products12Months: Product[] = []; // กำหนดประเภทเป็น array เพื่อเก็บสินค้า 1 เดือน
    let userID = ''; // User ID จะถูกดึงมาในตอนที่ login

    // Check if localStorage is available and get the username, balance, and userID after login
    if (typeof window !== 'undefined') {
      username = localStorage.getItem('username') || '';  // ดึงข้อมูล username จาก localStorage
      balance = parseFloat(localStorage.getItem('balance') || "0");
      userID = localStorage.getItem('userID') || ''; // ดึง userID จาก localStorage
    }
  
    // ราคาเริ่มต้นของสินค้าต่อชิ้น
    const pricePerItem = 100;
  
    $: fetchProducts();
    // Fetch data from API
    async function fetchProducts() {
    try {
        const res12Months = await fetch('http://localhost:3000/products/12months');
        products12Months = await res12Months.json();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    }

  
    // Fetch products when the page loads
    fetchProducts();
  
    // ฟังก์ชันสำหรับการสั่งซื้อ
    async function buyProduct(productID: number) {
  let quantityInput = document.getElementById('quantity') as HTMLInputElement;
  if (!quantityInput) return;

  let quantity = parseInt(quantityInput.value);
  let totalPrice = quantity * pricePerItem;

  // Check if the user has enough balance
  if (balance < totalPrice) {
    alert('Insufficient balance for purchase!');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/products/12months/buy/${userID}/${productID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity,
        price: totalPrice,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Purchase successful!');
      balance -= totalPrice;
      localStorage.setItem('balance', balance.toString());
      fetchProducts();
    } else {
      console.error(result.message);
      alert('Purchase failed');
    }
  } catch (error) {
    console.error('Error buying product:', error);
  }
}




    function updateprice() {
      let quantityInput = document.getElementById('quantity');
      if (quantityInput instanceof HTMLInputElement) {
        let quantity = parseInt(quantityInput.value);

        // ตรวจสอบว่าค่าที่กรอกถูกต้องหรือไม่
        if (isNaN(quantity) || quantity < 1) {
          quantityInput.value = '1'; // กำหนดเป็นค่าเริ่มต้นถ้ากรอกค่าผิด
          quantity = 1;
        }

        let totalPrice = quantity * pricePerItem;
        console.log('Total price:', totalPrice);

        // คุณสามารถแสดงราคาที่คำนวณใน UI ได้ที่นี่
      }
    }
  
</script>

<div class="mx-auto w-full text-white text-center h-full">

    <!-- bg -->
    <div class="relative isolate bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-full">

        <!-- หัวด้านบน -->
        <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center "> 

            <div class=" absolute left-10">
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
        
        <!-- ข้อความตรงกลาง -->
        <div class="flex items-center justify-center py-[100px]">

            <!-- Product 1 -->

        {#if products12Months.length > 0}
          <div>
            <button class="flex flex-col items-center justify-center bg-[#FFE3DE] rounded-3xl shadow-md p-10 w-[500px] h-[600px] mr-10 mb-10">
              <h1 class="text-4xl font-semibold text-[#2C2C2C] mb-6">YouTube Premium 365 Day</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="w-[300px] h-[300px] mb-6">
                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
              </svg>
      
              <h1 class="text-4xl font-semibold text-[#2C2C2C] ">IN STOCK {products12Months.length}</h1>
            </button>
          </div>
      
          <div class="ml-20">
            <div class="flex flex-col items-center">
              <h2 class="text-2xl text-[#2C2C2C] font-semibold mb-4">YouTube Premium 365 Day</h2>
      
              <div class="flex items-center space-x-4 mb-4">
                <input 
                  id="quantity" 
                  type="text" 
                  value="1" 
                  class="bg-[#FFFFFF] w-[300px] text-center text-black font-semibold border border-gray-300 rounded-lg py-2 focus:outline-none" 
                  on:input={updateprice} 
                />
              </div>
      
              <div class="flex justify-end items-center ml-20 mt-5">
                <div class="flex items-center ml-20">
                  <p class="text-3xl font-semibold text-[#2C2C2C] mr-10 ml-20 flex items-center">
                    <span id="total-price" class="mr-2">100</span>
                    <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
                  </p>
                </div>
                
                <!-- ปุ่มสั่งซื้อสินค้า ส่ง id ของสินค้าแรกที่ดึงมา -->
                <button on:click={() => buyProduct(products12Months[0].id)}>
                  <span class="bg-white text-2xl text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">
                    Order now
                  </span>
                </button>
              </div>
            </div>
          </div>
        {/if}

        {#if products12Months.length == 0}
        <div>
          <button class="flex flex-col items-center justify-center bg-[#FFE3DE] rounded-3xl shadow-md p-10 w-[500px] h-[600px] mr-10 mb-10">
            <h1 class="text-4xl font-semibold text-[#2C2C2C] mb-6">YouTube Premium 30 Day</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="w-[300px] h-[300px] mb-6">
              <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
              <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
            </svg>
    
            <h1 class="text-4xl font-semibold text-[#2C2C2C] ">IN STOCK {products12Months.length}</h1>
          </button>
        </div>
    
        <div class="ml-20">
          <div class="flex flex-col items-center">
            <h2 class="text-2xl text-[#2C2C2C] font-semibold mb-4">YouTube Premium 365 Days</h2>
    
            <div class="flex items-center space-x-4 mb-4">
              <input 
                id="quantity" 
                type="text" 
                value="1" 
                class="bg-[#FFFFFF] w-[300px] text-center text-black font-semibold border border-gray-300 rounded-lg py-2 focus:outline-none" 
                on:input={updateprice} 
              />
            </div>
    
            <div class="flex justify-end items-center ml-20 mt-5">
              <div class="flex items-center ml-20">
                <p class="text-3xl font-semibold text-[#2C2C2C] mr-10 ml-20 flex items-center">
                  <span id="total-price" class="mr-2">100</span>
                  <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
                </p>
              </div>
              
              <!-- ปุ่มสั่งซื้อสินค้า ส่ง id ของสินค้าแรกที่ดึงมา -->
              <button>
                <span class="bg-red text-2xl text-white px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">
                  สินค้าหมดแล้ว
                </span>
              </button>
            </div>
          </div>
        </div>
        {/if}
        </div>
    </div>
</div>