<template>
  <div class="column col-6">
    <div class="tile">
      <div class="tile-icon">
        <figure class="avatar avatar-lg">
          <img :src="book.avatar">
        </figure>
      </div>
      <div class="tile-content">
        <p class="tile-title">{{book.title}}</p>
        <p class="tile-subtitle">{{book.subtitle}}</p>
        <p>
        <button class="btn btn-primary btn-sm">Join</button>
        <button class="btn btn-sm">Contact</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ['book']
};
</script>
