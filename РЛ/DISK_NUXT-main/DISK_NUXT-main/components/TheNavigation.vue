<template>
  <div class="cont">
    <div class="nav">
      <NuxtLink to="/">DISK</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/second">Second</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dictionary">Словарь</NuxtLink>
          </li>
        </ul>
      </div>
  </div>
</template>

<style>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: rgb(194, 194, 194);
  justify-content: space-between;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

ul li {
  margin-right: .5rem;
}

ul li a {
  text-decoration: none;
  color: black;
}
</style>