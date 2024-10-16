<!-- ยังไม่เสร็จเหลืออัพเดทราคาสินค้าให้เพิ่มขึ้น -->

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
        <div class="flex items-center justify-center py-[100px]">

            <!-- Product 1 -->
            <div>
                <button class="flex flex-col items-center justify-center bg-[#FFE3DE] rounded-3xl shadow-md p-10 w-[500px] h-[600px] mr-20 mb-10">
                    <a href="/product-detail-1">

                        <h1 class="text-4xl font-semibold text-[#2C2C2C] mb-6">12 MONTH</h1> 
                
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="w-[300px] h-[300px] mb-6">
                            <path fill="#f00" 
                            d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                            <path fill="#fff" 
                            d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
                        </svg>

                        <h1 class="text-4xl font-semibold text-[#2C2C2C] ">IN STOCK 20</h1> 
                    </a>
                </button>
            </div>

            <div class="ml-20">
                <!-- การเลือกจำนวนสินค้าและราคา -->
                <div class="flex flex-col items-center">
                    <h2 class="text-2xl text-[#2C2C2C] font-semibold mb-4">YouTube Premium 365 Day</h2>

                    <!-- ปุ่มเพิ่มลดจำนวนสินค้า -->
                    <div class="flex items-center space-x-4 mb-4">
                        <button class="bg-[#FFFFFF] text-black font-bold px-4 py-2 rounded-lg" on:click={decreaseQuantity} >-</button>
                        <input id="quantity" type="text" value="1" class="bg-[#FFFFFF] w-[300px] text-center text-black font-semibold border border-gray-300 rounded-lg py-2 focus:outline-none" readonly />
                        <button class="bg-[#FFFFFF] text-black font-bold px-4 py-2 rounded-lg" on:click={increaseQuantity}>+</button>
                    </div>

                    <div class="flex justify-end items-center ml-20 mt-5">

                        <div class="flex items-center ml-20">
                            <p class="text-3xl font-semibold text-[#2C2C2C] mr-10 ml-20 flex items-center">
                                <span id="total-price" class="mr-2">540</span>
                                <img src="../src/lib/images/Diamond.png" alt="coin" class="h-[40px] w-[40px]">
                            </p>
                        </div>
                    
                        <button>
                            <a href="/login" class="bg-white text-2xl text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md ">Order now</a>
                        </button>

                    </div>                    
                    
                </div>
            </div>

        </div>

    </div>
</div>


<script>
    // ราคาเริ่มต้นของสินค้าต่อชิ้น
    const pricePerItem = 540;

    // ฟังก์ชันเพิ่มจำนวนสินค้า
    function increaseQuantity() {
        let quantityInput = document.getElementById('quantity');
        if (quantityInput instanceof HTMLInputElement) {
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = (quantity + 1).toString();
        }
        updateprice();
    }

    // ฟังก์ชันลดจำนวนสินค้า
    function decreaseQuantity() {
        let quantityInput = document.getElementById('quantity');
        if (quantityInput instanceof HTMLInputElement) {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = (quantity - 1).toString();
            }
        }
        updateprice();
    }

    // ฟังก์ชันอัปเดตราคา
    function updateprice() {
        let quantityInput = document.getElementById('quantity');
        let totalPriceElement = document.getElementById('total-price');

        // ตรวจสอบว่า input และ element ราคามีอยู่
        if (quantityInput instanceof HTMLInputElement && totalPriceElement) {
            let quantity = parseInt(quantityInput.value); // ดึงค่าจำนวนสินค้า
            let totalPrice = quantity * pricePerItem; // คำนวณราคาทั้งหมด
            totalPriceElement.innerText = totalPrice.toString(); // แสดงราคาที่อัปเดต
        }
    }


</script>
