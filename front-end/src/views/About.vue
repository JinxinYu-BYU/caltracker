<template>
  <div class="Home-Middle">

    <div class="content">
      <h2 class = "hmtitle">Lose Weight in A Sientific and Healthy Way</h2>
      <p class="hmcontent">To sure calm much most long me mean. Able rent long in do we. <br />
        Uncommonly noit announcing melancholy an in. Mirth learn it he given. <br />
        Secure shy favour length all twenty denote.<br />
        He felicity no an at packages answered opinions juvenile.</p>
        <div>
  <!-- Using modifiers -->
  <b-button v-b-modal.my-modal>Show Modal</b-button>

  <!-- Using value -->
  <b-button v-b-modal="'my-modal'">Show Modal</b-button>

  <!-- The modal -->
  <b-modal id="my-modal">Hello From My Modal!</b-modal>
</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "About",
  components: {

  }
};
</script>
