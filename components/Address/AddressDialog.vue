<template>
  <div class="dialog" :class="{ myhide: !dialog, showdialog: dialog }">
    <div class="dialogBg" @click="closeDialog"></div>
    <div
      class="
        dialogCard
        max-w-[500px]
        w-full
        bg-white
        rounded-xl
        shadow-lg
        p-6
        z-10
      "
    >
      <div class="text-center font-bold text-lg">เพิ่มที่อยู่</div>
      <form class="grid grid-cols-2 gap-2 mt-6" @submit.prevent="addAddress">
        <input
          v-model="title"
          type="text"
          class="
            col-span-2
            h-10
            p-2
            px-4
            border border-primary
            outline-none
            rounded-lg
          "
          placeholder="ชื่อที่อยู่"
        />
        <input
          v-model="fname"
          type="text"
          class="h-10 p-2 px-4 border border-primary outline-none rounded-lg"
          placeholder="ชื่อ"
        />
        <input
          v-model="lname"
          type="text"
          class="h-10 p-2 px-4 border border-primary outline-none rounded-lg"
          placeholder="นามสกุล"
        />
        <input
          v-model="tel"
          type="text"
          class="
            col-span-2
            h-10
            p-2
            px-4
            border border-primary
            outline-none
            rounded-lg
          "
          placeholder="เบอร์โทรศัพท์"
        />
        <textarea
          v-model="address"
          class="
            col-span-2
            h-20
            p-2
            px-4
            border border-primary
            outline-none
            rounded-lg
            min-h-[160px]
          "
          placeholder="รายละเอียดที่อยู่"
        ></textarea>
        <button
          class="
            col-span-2
            w-full
            h-10
            bg-primary
            text-white
            rounded-lg
            hover:opacity-90
            active:scale-95
            transition-all
            disabled:opacity-50
            disabled:active:scale-100
          "
          :disabled="!title || !fname || !lname || !tel || !address"
        >
          เพิ่ม
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    title: '',
    fname: '',
    lname: '',
    tel: '',
    address: '',
  }),
  methods: {
    openDialog() {
      this.dialog = true
      document.querySelector('body').style.overflow = 'hidden'
    },
    closeDialog() {
      this.dialog = false
      document.querySelector('body').style.overflow = 'auto'
    },
    addAddress() {
      this.$emit('push', {
        title: this.title,
        fname: this.fname,
        lname: this.lname,
        tel: this.tel,
        address: this.address,
      })
      this.closeDialog()
      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.fname = ''
      this.lname = ''
      this.tel = ''
      this.address = ''
    },
  },
}
</script>

<style>
.dialog {
  visibility: visible;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 50;
}
.dialog.myhide {
  visibility: hidden;
}
.dialogBg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.1s linear;
  backdrop-filter: blur(2px);
}
.myhide .dialogBg {
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
}
.dialogCard {
  transform: translateY(0%);
  transition: all 0.1s ease-in-out;
}
.myhide .dialogCard {
  transform: translateY(100%);
}
</style>