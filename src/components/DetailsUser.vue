<template>
    <div class="details-info">
        <ul>
            <li><router-link to="/">Regresar al Home</router-link></li>
        </ul>
        <h1>Detalle del usuario</h1>
    </div>
    <div class="card">
        <div class="card__info">
            <div class="card__avatar">
                <img :src="user?.avatar"/>
            </div>
            <div class="card__user">
                <h3>{{ user?.first_name }}</h3>
                <p>{{ user?.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user:Object
    },  
}
</script>

<style lang="scss" scoped>
    .details-info{
        a{
            color: #dfdbdb;
            text-decoration: none;
            font-size: 18px;
            font-weight: 700;
        }
    }
    .card{
        border: 2px solid aqua;
        max-width: 220px;
        border-radius: 20px;
        padding: 15px 25px;
        box-shadow: 5px 3px 10px;
        &__avatar{
            img{
                width: 105px;
                height: 105px;
                border-radius: 50px;
                object-fit: cover;
            }
        }
        &__user{
            h3{
                color: aqua;
                font-weight: 700;
                margin-top: -5px;
            }
            p{
                margin-top: -15px;
            }
        }
    }
</style>