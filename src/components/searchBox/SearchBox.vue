<template>
<div class="container">
    search box
    <header class="header">
        <input type="search" v-model="$store.state.search_value" @keyup="filterText" placeholder="جستجو ..." />
    </header>
</div>
</template>

<script lang='ts' src='./SearchBox.ts'/>
<style lang="scss" scoped src='./SearchBox.scss'/>