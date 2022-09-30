<template> 
    <div class="error-container">
        <div class="row">
            <div class="col-12 text-center">
                <span class="error-title">ERROR 404</span>
                <p>
                    The page is missing or never was written. You can wait and<br/>
                    see if it becomes available again, or you can restart your computer.	
                </p>
                <p>
                    * Press CTRL+ALT+DEL to restart your computer. You will<br/>
                    &nbsp; lose unsaved information in any programs that are running.
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
}
</script>

<style scoped>
    .error-container {
        background:#0000aa;
        color:#ffffff;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family:courier;
        font-size:12pt;
    }

    .error-title {
        background:#fff;
        color:#0000aa;
        padding:2px 8px;
        font-weight:bold;
    }

    p {
        margin:30px 100px;
        text-align:left;
    }
</style>