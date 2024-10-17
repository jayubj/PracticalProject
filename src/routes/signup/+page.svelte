<script>
  let username = '';
  let password = '';
  let confirmPassword = '';

  async function registerUser() {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
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
        console.log('Registration successful:', data);
        window.location.href = '/login';
      } else {
        console.error('Registration failed:', data.error || 'Unknown error');
        alert('Registration failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to register.');
    }
  }
</script>

<div class="mx-auto w-full text-white text-center h-full">
  <!-- bg -->
  <div class="relative isolate bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] h-screen">
    <!-- Header -->
    <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center"> 
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

    <!-- Main content -->
    <div class="flex items-center justify-center py-[100px]">
      <div class="bg-[#FFE3DE] rounded-2xl shadow-md p-10 w-[1000px] h-[600px] flex items-center justify-center">
        <!-- Left side -->
        <div class="text-center mr-20">
          <h1 class="text-6xl text-[#2C2C2C] font-semibold mb-6">Sign up</h1>
          <div class="flex items-center justify-center my-6">
            <div class="border-t border-[#2C2C2C] w-[100px]"></div>
            <span class="mx-4 text-[#2C2C2C]">or</span>
            <div class="border-t border-[#2C2C2C] w-[100px]"></div>
          </div>
        </div>

        <!-- Right side -->
        <div class="flex flex-col w-1/2 space-y-4">
          <label for="username" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Username</label>
          <input type="text" placeholder="Username" bind:value={username} class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">

          <label for="password" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Password</label>
          <input type="password" placeholder="Password" bind:value={password} class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
          
          <label for="confirmPassword" class="block text-[#2C2C2C] font-semibold text-left text-2xl mb-1">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" bind:value={confirmPassword} class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
          
          <div class="flex justify-end items-center">
            <button on:click={registerUser} class="bg-white text-[#2C2C2C] px-4 py-2 border border-gray-300 rounded-3xl hover:bg-gray-100 drop-shadow-md">Sign up</button>
          </div>
        </div>
      </div>      
    </div>
  </div>
</div>
