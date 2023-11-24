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
                </p> &nbsp; <p>Patients</p>
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
    </div>
</template>