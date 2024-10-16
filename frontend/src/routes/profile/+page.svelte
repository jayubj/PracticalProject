<script lang="ts">
    let file: File | null = null;  // กำหนดประเภทเป็น File หรือ null
    let currentPassword = '';
    let newPassword = '';
    let confirmPassword = '';
  
    async function uploadProfilePicture() {
      if (!file) {
        console.error('กรุณาเลือกไฟล์ก่อนอัปโหลด');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('http://localhost:3000/users/upload-profile', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('รูปภาพอัปโหลดสำเร็จ:', data);
        } else {
          console.error('เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ');
        }
      } catch (error) {
        console.error('ข้อผิดพลาด:', error);
      }
    }
  
    async function changePassword() {
      if (newPassword !== confirmPassword) {
        alert('รหัสผ่านใหม่ไม่ตรงกัน');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:3000/users/change-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        });
  
        if (response.ok) {
          alert('เปลี่ยนรหัสผ่านสำเร็จ');
        } else {
          const data = await response.json();
          alert('เปลี่ยนรหัสผ่านไม่สำเร็จ: ' + data.error);
        }
      } catch (error) {
        console.error('ข้อผิดพลาด:', error);
      }
    }
  
    function handleFileChange(e: Event) {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        file = target.files[0];
      }
    }
  </script>
  
  <div class="profile-container mx-auto w-full text-white text-center overflow-y-auto">
  
      <!-- bg -->
      <div class="relative isolate overflow-hidden bg-gradient-to-t from-[#B5BAE4] to-[#FFFFFF] min-h-screen">
  
          <!-- Header -->
          <div class="bg-[#B5BAE4] h-[100px] w-screen flex items-center justify-center "> 
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
          </div>
  
          <!-- Profile Section -->
          <div class="profile-content mx-auto mt-10">
              <h2 class="text-4xl font-semibold text-[#2C2C2C]">ข้อมูลผู้ใช้งาน</h2>
  
              <!-- Profile Picture Upload -->
              <div class="profile-picture my-10">
                  <img src="../src/lib/images/avatar_placeholder.png" alt="Avatar" class="rounded-full h-32 w-32 mx-auto">
                  <input type="file" id="profilePictureUpload" class="mt-4" on:change={handleFileChange}>
                  <button on:click={uploadProfilePicture} class="bg-[#FFE3DE] text-[#2C2C2C] mt-4 px-4 py-2 rounded-3xl">อัปโหลดรูปโปรไฟล์</button>
              </div>
  
              <!-- User Details Form -->
              <div class="profile-details">
                  <form>
                      <div class="mb-6">
                          <label for="username" class="block text-[#2C2C2C] font-semibold text-left mb-2">ชื่อผู้ใช้</label>
                          <input id="username" type="text" placeholder="ชื่อผู้ใช้" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]" disabled>
                      </div>
                      
                      <div class="mb-6">
                          <label for="membership" class="block text-[#2C2C2C] font-semibold text-left mb-2">ระดับสมาชิก</label>
                          <input id="membership" type="text" placeholder="ระดับสมาชิก" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]" disabled>
                      </div>
                      
                      <!-- Password Change Section -->
                      <h3 class="text-3xl font-semibold text-[#2C2C2C] mt-10 mb-4">ตั้งค่ารหัสผ่าน</h3>
  
                      <div class="mb-6">
                          <label for="current-password" class="block text-[#2C2C2C] font-semibold text-left mb-2">รหัสผ่านปัจจุบัน</label>
                          <input id="current-password" type="password" bind:value={currentPassword} placeholder="กรอกรหัสผ่านเดิม" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
                      </div>
  
                      <div class="mb-6">
                          <label for="new-password" class="block text-[#2C2C2C] font-semibold text-left mb-2">รหัสผ่านใหม่</label>
                          <input id="new-password" type="password" bind:value={newPassword} placeholder="กรอกรหัสผ่านใหม่" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
                      </div>
  
                      <div class="mb-6">
                          <label for="confirm-password" class="block text-[#2C2C2C] font-semibold text-left mb-2">ยืนยันรหัสผ่านใหม่</label>
                          <input id="confirm-password" type="password" bind:value={confirmPassword} placeholder="ยืนยันรหัสผ่านใหม่" class="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5BAE4] text-[#2C2C2C]">
                      </div>
  
                      <button type="button" on:click={changePassword} class="bg-[#FFE3DE] text-[#2C2C2C] px-4 py-2 rounded-3xl">บันทึก</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
