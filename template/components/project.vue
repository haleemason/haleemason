<template>
<div class="card mb-4 box-shadow">
  <div :id="`carousel${index}`" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li :data-target="`#carousel${index}`" :data-slide-to=" i" class="active" v-for="(image, i) in project.images"></li>
    </ol>
    <div class="carousel-inner ">
      <div :class="`carousel-item ${image.active}`" v-for="image in project.images">
        <img class="d-block project-img" :src="image.url">
      </div>
    </div>
    <a class="carousel-control-prev" :href="`#carousel${index}`" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
    <a class="carousel-control-next" :href="`#carousel${index}`" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  </div>
  <div class="card-body">
    <h4 class="btn-link"><a :href="project.url" target="_blank" class="text-dark">{{project.title}}</a></h4>
    <p class="card-text">{{project.description}}</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <span class="badge badge-primary m-1" v-for="tech in project.technologys" :style="`background:${tech.color}`">{{tech.name}}</span>
      </div>
      <small class="text-muted">{{project.date}}</small>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: [
    'project',
    'index',
  ],
  data() {
    return {
    };
  },
  methods: {
  },
}
</script>
<style scoped>
  .project-img {
    height: 230px;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: auto;
  }
</style>
