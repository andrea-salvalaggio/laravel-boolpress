<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light container my-3">
        <router-link class="navbar-brand font-weight-bold" to="/home">BOOLPRESS</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-2" id="navbarNav">
            <ul class="navbar-nav w-100">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/home">Home<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contacts">Contacts</router-link>
                </li>
                <li class="nav-item ml-auto">
                    <a class="btn btn-outline-primary" href="/admin">Login</a>
                </li>
            </ul>
        </div>
    </nav>   
</template>

<script>
export default {};
</script>

<style>
</style>