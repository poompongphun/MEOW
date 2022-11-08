<template>
  <div
    class="
      bg-primary
      rounded-t-3xl
      mx-2
      px-5
      pt-5
      sm:px-10
      sm:pt-10
      mt-10
      "
  >
    <div
      class="
        w-full
        bg-[rgba(255,255,255,0.7)]
        rounded-t-3xl
        p-2
        sm:p-5
        "
    >
      <div
        class="
          container
          h-full
          mx-auto
          2xl:flex
          block
          "
      >
        <div
          class="
            sm:w-80
            text-primary
            flex-none
            flex
            items-center
            m-5
            lg:m-0
            lg:mr-5
          "
        >
          <div>
            <img class="w-3/5 sm:w-1/2" src="/logo.png" alt="logo"/>
            <span>หมาร้องโฮ่ง แมวร้องเหมียว นกร้องจิ๊บ ส่วนหนูร้องจิ๊ด</span>
          </div>
        </div>
        <div
          class="
            flex-auto
            lg:flex
            block
            mt-5
            2xl:mt-0
            
          "
        >
          <div
            class="
              text-primary
              flex-auto
              m-5
              lg:m-0
              lg:mr-5
              flex
              flex-col
              "
          >
            <span class="text-xl sm:m-2 flex-none">Meet our team</span>
            <div 
              class="
                mb-0
                flex-auto
                flex
                flex-wrap
              "
            >
              <team-card
                v-for="(member, i) in [
                                        {'student_id': '64070004', 'img': '/teamimg/64070004.jpg', 'name': 'ก้องภพ อ่อนทอง'}, 
                                        {'student_id': '64070067', 'img': '/teamimg/64070067.jpg', 'name': 'พงพันธุ์ ศักดาสาวิตร'},
                                        {'student_id': '64070077', 'img': '/teamimg/64070077.jpg', 'name': 'พุฒิพงศ์ บรรเริงศรี'},
                                        {'student_id': '64070089', 'img': '/teamimg/64070089.jpg', 'name': 'ยลรดี ประยูรพันธุ์รัตน์'},
                                        {'student_id': '64070157', 'img': '/teamimg/64070157.jpg', 'name': 'นายธนเดช เจิ้ง'}]"
                :key="i"
                :data="member"
              >
              </team-card>
              <!-- fixed incorrect file type -->
            </div>
          </div>
          <div
            class="
              shadow-lg
              bg-black
              flex-none
              rounded-xl
              sm:w-48
              m-5
              text-white
              self-center
              hover:scale-95
              transition-all
              text-center
              p-2
              cursor-pointer
              "
              onclick="window.location = 'https://github.com/poompongphun/MEOW'"
          >
            <font-awesome-icon :icon="['fab', 'github']" 
              class="
                p-4
                sm:text-8xl
              "
            /><br>
            <span class="text-xl">View our Github repository</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>