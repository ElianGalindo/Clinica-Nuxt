<template>
    <div class="cuerpo">
        <div class="header" style="display:flex;background:var(--gray-whte, #FFF); height:78px;">
            <div class="ubicacion" style="display:flex; margin-top:20px; margin-left: 10px;">
                <p style="color: #000;
                        font-family: Open Sans;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 25px; /* 138.889% */
                        letter-spacing: 0.36px;"
                >   Doctor >
                </p> &nbsp; <p>Dashboard</p>
            </div>
            <div class="notificaciones" style="display:flex;">
                <v-icon class="bi bi-bell-fill" 
                        style="display: flex;
                               color: black; 
                               margin-top: -10px;">
                </v-icon> &nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn style="width: 140px;
                              height: 45px;
                              flex-shrink: 0;
                              border-radius: 23px;
                              background: var(--primary-green, #4FB783);
                              margin-top: 15px;"
               >
                    Available
                </v-btn>
            </div>
        </div>
        <div style="display: flex;">
            <div class="tarjetas">
                <div class="numero">
                    <h2>341</h2>
                </div>
                <div class="total">
                    <h5>Total Patients</h5>
                </div>
            </div>
            <div class="tarjetas">
                <div class="numero">
                    <h2>123</h2>
                </div>
                <div class="total2">
                    <h5>Total Appointments</h5>
                </div>
            </div>
            <div class="tarjetas">
                <div class="numero">
                    <h2>345</h2>
                </div>
                <div class="total">
                    <h5>Total surgeries</h5>
                </div>
            </div>
        </div>
        <div class="grafica1">
            <v-img :src="require('../../assets/grafica1.png')" style="width: 1150px; height: 359px;"></v-img>
        </div>
        <div class="grafica2">
            <v-img :src="require('../../assets/grafica2.png')" style="width: 1146px; height: 419px;"></v-img>
        </div>
        <div style="display:flex;">
            <div class="grafica3"><v-img :src="require('../../assets/grafica3.png')" style="width: 580px; height: 432px;"></v-img></div>
            <div class="grafica4"><v-img :src="require('../../assets/grafica4.png')" style="width: 551px; height: 432px;"></v-img></div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style>
    .cuerpo{
        background: var(--gray-shaded-white, #F6F6F6);
        height: 2020px;
    }
    .grafica1 { 
        width: 1150px;
        height: 359px;
        flex-shrink: 0;
        border-radius: 15px;
        /*background: var(--gray-whte, #FFF);*/
        background-color: #FFF;
        margin-left: 30px;
        margin-top:20px;
    }
    .grafica2 {
        width: 1146px;
        height: 419px;
        flex-shrink: 0;
        border-radius: 15px;
        /*background: var(--gray-whte, #FFF);*/
        background-color: #FFF;
        margin-left: 30px;
        margin-top:20px;
    }
    .grafica3{
        width: 580px;
        height: 432px;
        border-radius: 15px;
        /*background: var(--gray-whte, #FFF);*/
        background-color: #FFF;
        margin-left: 30px;
        margin-top:20px;
    }
    .grafica4{
        width: 551px;
        height: 432px;
        border-radius: 15px;
        /*background: var(--gray-whte, #FFF);*/
        background-color: #FFF;
        margin-left: 30px;
        margin-top:20px;
    }
    .tarjetas{
        width: 370px;
        height: 150px;
        border-radius: 15px;
        border: 1px solid var(--primary-green, #4FB783);
        background: var(--secondary-lightest-green, #EBFFF5);
        margin-top: 20px;
        margin-left: 30px;
    }
    .numero {
        margin-left: 20px;
        margin-top: 20px;
    }
    .total{
        margin-left: 250px;
        margin-top: 30px;
    }
    .total2{
        margin-left: 230px;
        margin-top: 30px;
    }

</style>