<template>
  <div class="spinner"></div>
</template>



<style>
.spinner{
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #ff0088;
    margin: 30px auto;
    animation: spin 1s ease infinite;
}

@keyframes spin {
    to {transform: rotateZ(360deg);}
}


</style>