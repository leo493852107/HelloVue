<template>
    <h3>新闻</h3>
    <ul>
        <li><a v-link="{path:'/news/detail/001'}">第一条新闻</li>
        <li><a v-link="{path:'/news/detail/002'}">第二条新闻</li>
    </ul>
    <router-view></router-view>
</template>