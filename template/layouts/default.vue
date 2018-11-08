<template>
  <div >
    <nuxt/>
  </div>
</template>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  border-style: solid;
  border-width: 25px;
  border-color: #212529;
}

@media (max-width: 600px) {
  body {
      border-width: 15px;
  }
  .lead {
    font-size: 1rem;
  }
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
