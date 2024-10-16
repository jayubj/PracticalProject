<script>
  let username = '';
  let password = '';

  // ฟังก์ชันสำหรับการส่งข้อมูลไปยัง API เพื่อทำการล็อกอินแบบปกติ
  async function loginUser() {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);

        // บันทึก username ลงใน localStorage หลังจากล็อกอินสำเร็จ
        localStorage.setItem('username', data.loginResult.user.username);

        // ย้ายไปที่หน้า Home หลังจากล็อกอินสำเร็จ
        window.location.href = '/Home-login';
      } else {
        console.error('Login failed:', data.error);
        alert('Login failed: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>


<div class="mx-auto w-full text-white text-center">

  <!-- Background -->
  <div class="relative isolate overflow-hidden bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-screen">

      <!-- Header -->
      <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center "> 

          <div class="absolute left-10">
              <button>
                <h1 class="text-[#2C2C2C] font-semibold text-2xl bg-[#FFE3DE] flex items-center justify-center rounded-3xl px-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" class="mr-2">
                    <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                    <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
                  </svg>
                  <a href="/">YouTubePreAcc</a>
                </h1>
              </button>
          </div>
      </div>

      <!-- Main Content -->
      <div class="flex items-center justify-center py-[100px]">
          <div class="bg-[#FFE3DE] rounded-2xl shadow-md p-10 w-[1000px] h-[600px] flex items-center justify-center">

          <!-- Left Side -->
              <div class="text-center mr-20">
                  <h1 class="text-6xl text-[#2C2C2C] font-semibold mb-6">Log in</h1>
                  <div class="flex items-center justify-center my-6">
                      <div class="border-t border-[#2C2C2C] w-[100px]"></div>
                      <span class="mx-4 text-[#2C2C2C]">or</span>
                      <div class="border-t border-[#2C2C2C] w-[100px]"></div>
                  </div>

                  <div class="flex justify-center space-x-4">

                      <!-- Discord Icon (Non-functional for now) -->
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" class="h-[50px] w-[60px] mr-10 drop-shadow-md bg-white p-2 rounded-full shadow-md">
                              <g fill="none"><rect width="256" height="256" fill="#5865f2" rx="60"/><g clip-path="url(#skillIconsDiscord0)">
                              <path fill="#fff" d="M197.308 64.797a165 165 0 0 0-40.709-12.627a.62.62 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.64.64 0 0 0-.655-.31a164.5 164.5 0 0 0-40.709 12.627a.6.6 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.7.7 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.65.65 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86 86 0 0 0 3.098-2.428a.62.62 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.62.62 0 0 1 .655.08a80 80 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.6 102.6 0 0 1-15.609 7.428a.64.64 0 0 0-.339.889a133 133 0 0 0 10.208 16.61a.64.64 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.65.65 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.5.5 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158"/></g>
                              <defs><clipPath id="skillIconsDiscord0"><path fill="#fff" d="M28 51h200v154.93H28z"/></clipPath></defs></g></svg>
                      </button>

                      <!-- Facebook Icon (Non-functional for now) -->
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" class="h-[50px] w-[60px] mr-10 drop-shadow-md bg-white p-2 rounded-full shadow-md">
                              <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53"/>
                              <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/>
                          </svg>
                      </button>
                  </div>
              </div>

              <!-- Right Side -->
              <div class="flex flex-col w-1/2 space-y-4">
                  <label for="username" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Username</label>
                  <input type="text" bind:value={username} placeholder="Username" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">

                  <label for="password" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Password</label>
                  <input type="password" bind:value={password} placeholder="Password" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
                  
                  <div class="flex justify-end items-center">
                      <a href="/signup" class="text-[#2C2C2C] mr-10">Create account</a>
                      <button on:click={loginUser} class="bg-white text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">Log in</button>
                  </div>
              </div>
          </div>      
      </div>
  </div>
</div>
