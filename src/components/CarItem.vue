<script>
export default {
    props: {
        colorStatus: {
            type: String,
            default: { front_wing: { left: 0, right: 0 }, floor: 0, diffuser: 0, sidepod: 0, gearbox: 0, engine: 0, rear_wing: 0, wheels: { top_left: 0, top_right: 0, bottom_left: 0, bottom_right: 0 }, brakes: { top_left: 0, top_right: 0, bottom_left: 0, bottom_right: 0 } }
        }
    },
    data() {
        return {
            green_color: '#39B54A',
            green_background: '#39b54a4d',
            yellow_color: '#b5a939',
            yellow_background: '#b5b3394d',
            red_color: '#b53939',
            red_background: '#b539394d'
        }
    },
    methods: {
        colorStyle(color) {
            if( color == 0) {
                return 'fill: ' + this.green_background + '; stroke: ' + this.green_color + ';';
            }else if( color == 1) {
                return 'fill: ' + this.yellow_background + '; stroke: ' + this.yellow_color + ';';
            }
            return 'fill: ' + this.red_background + '; stroke: ' + this.red_color + ';';
        },
        colorStylel(color) {
            if( color == 0) {
                return 'fill: none; stroke: ' + this.green_color + ';';
            }else if( color == 1) {
                return 'fill: none; stroke: ' + this.yellow_color + ';';
            }
            return 'fill: none; stroke: ' + this.red_color + ';';
        },
    }
};
</script>

<template>
    <svg
   width="210mm"
   height="297mm"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg5"
   xml:space="preserve"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="car.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="0.49103493"
     inkscape:cx="153.75688"
     inkscape:cy="614.00927"
     inkscape:window-width="1662"
     inkscape:window-height="985"
     inkscape:window-x="223"
     inkscape:window-y="89"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg5" /><defs
     id="defs2" /><g
     inkscape:groupmode="layer"
     id="layer11"
     inkscape:label="RearWing"><path :style="colorStyle(colorStatus.rear_wing)"
       class="st0"
       d="m 77.326717,256.83984 48.149293,0.26168 3.27101,12.95321 -0.7826,4.75009 h -4.33086 l -0.73542,-4.49429 h -19.85655 v 7.02741 h -3.677138 l -0.08171,-6.86398 h -19.69312 l -1.062283,4.41256 h -3.758853 l -1.143998,-3.84056 z"
       id="path5812" /></g><g
     inkscape:groupmode="layer"
     id="layer12"
     inkscape:label="Diferential"><path :style="colorStyle(colorStatus.floor)"
       class="st0"
       d="m 85.064468,241.95571 32.358822,0.0817 -0.0817,9.96913 -32.358815,0.0817 z"
       id="path5815"
       sodipodi:nodetypes="ccccc" /></g><g
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="Chasis"><path
       class="chasis3"
       d="m 94.026367,28.509227 0.07726,30.054444 -5.485514,-0.154522 v 7.030731 l 4.481125,0.07726 0.90551,0.87341 0.194124,6.454636 -13.734302,2.717742 -0.242656,-4.901641 -1.601526,-2.232431 -2.086838,-1.650057 -0.194124,22.712556 1.504464,-0.291187 1.213278,-1.358871 13.006336,9.851815 -0.970623,15.966728 -17.18001,-9.56062 -2.717742,12.90927 -0.43678,7.81351 -6.357575,18.15063 0.09706,10.19153 0.200474,33.4992 6.848694,39.635 6.994412,0.43715 2.33147,10.78305 h 39.926436 l 2.18575,-11.80307 7.57728,-0.14571 c 0,0 6.12011,-28.26909 6.8487,-37.30353 0.72858,-9.03445 0.8743,-35.55493 0.8743,-35.55493 l -0.8743,-9.90875 -5.82868,-18.0689 -3.20577,-20.98323 -16.90316,10.49162 -1.31146,-17.194599 12.82309,-9.471599 3.06006,2.185754 0.29143,-23.168989 -3.35149,2.185754 -0.8743,2.040037 0.29143,4.808658 -13.98882,-3.060055 -0.14572,-5.245809 1.31146,-2.040037 4.22579,-0.145717 0.14571,-6.702978 -5.53724,-0.145716 V 28.706231 c 0,0 -0.14572,-4.517224 -7.28585,-4.517224 -7.140124,0 -7.101163,4.32022 -7.101163,4.32022 z"
       id="path1926" /><path
       class="chasis"
       d="m 80.096825,80.026562 13.981813,-3.231975 0.21078,5.761349 z"
       id="path5189" /><path
       class="chasis"
       d="M 93.516555,84.452967 93.024731,93.376034 79.394221,82.626196 Z"
       id="path5191" /><path
       class="chasis2"
       d="m 122.55872,79.815781 -13.98182,-3.231975 -0.21078,5.761349 z"
       id="path5193" /><path
       class="chasis2"
       d="m 100.26155,112.7679 c 0,0 0.42156,10.89035 -1.334946,13.56025 -1.756511,2.66989 -8.993328,7.86916 -10.117495,11.03088 -1.124167,3.16171 -2.669894,7.72864 -2.669894,9.69593 0,1.96729 -0.07026,2.74015 -0.07026,2.74015 h 4.847965 c 0,0 -1.334947,-14.19259 10.18775,-14.19259 11.5227,0 10.96062,13.98181 10.96062,13.98181 l 4.28589,-0.0703 c 0,0 0.91338,-8.99333 -4.35615,-14.33312 -5.26953,-5.33978 -8.5015,-6.95577 -8.92306,-9.69593 -0.42157,-2.74015 -0.56209,-12.71712 -0.56209,-12.71712 z"
       id="path5199"
       sodipodi:nodetypes="csssccsccsscc" /><path
       class="chasis2"
       d="m 93.315781,145.2309 c 0,0 -0.985729,7.72155 0.657153,11.3359 1.642886,3.61434 2.628615,4.27149 2.628615,4.27149 h 8.625141 c 0,0 1.72503,-0.24643 3.36791,-4.02506 1.64288,-3.77863 0.7393,-11.91091 0.7393,-11.91091 0,0 -1.31431,-5.99652 -8.37871,-5.99652 -7.064398,0 -7.639409,6.3251 -7.639409,6.3251 z"
       id="path5297" /><path
       class="chasis2"
       d="m 99.723029,99.394451 v 8.296559 h 3.039331 l -0.0821,-8.296559 z"
       id="path5299" /><path
       class="chasis2"
       d="m 109.13898,84.242186 0.49183,8.923067 13.63051,-10.749838 z"
       id="path5195" /></g><g
     inkscape:groupmode="layer"
     id="layer10"
     inkscape:label="Bottom-Left"><path :style="colorStyle(colorStatus.wheels.bottom_left)"
       class="st0"
       d="m 54.679791,231.98023 -0.221017,27.62722 c 0,0 -0.353629,1.06089 1.105088,2.25438 1.458719,1.1935 2.033365,1.37031 2.033365,1.37031 h 12.33279 c 0,0 1.326108,0.0442 2.165974,-1.10509 0.839867,-1.14929 0.707258,-1.67973 0.707258,-1.67973 l 0.0442,-28.5997 c 0,0 0.22102,-0.88407 -0.928274,-1.94495 -1.149292,-1.06089 -2.033363,-0.92828 -2.033363,-0.92828 l -12.81903,0.0884 c 0,0 -0.928273,-0.13261 -1.723938,0.92827 -0.795663,1.06089 -0.663054,1.98916 -0.663054,1.98916 z"
       id="path5680" /><path :style="colorStyle(colorStatus.brakes.bottom_left)"
       class="st0"
       d="m 76.554549,241.85183 v 10.19665 H 80.7766 l 0.07966,-10.19665 z"
       id="path5682"
       sodipodi:nodetypes="ccccc" /></g><g
     inkscape:groupmode="layer"
     id="layer10-0"
     inkscape:label="Bottom-Right"
     transform="matrix(-1,0,0,1,203.00763,-0.03880218)"><path :style="colorStyle(colorStatus.wheels.bottom_right)"
       class="st0"
       d="m 54.679791,231.98023 -0.221017,27.62722 c 0,0 -0.353629,1.06089 1.105088,2.25438 1.458719,1.1935 2.033365,1.37031 2.033365,1.37031 h 12.33279 c 0,0 1.326108,0.0442 2.165974,-1.10509 0.839867,-1.14929 0.707258,-1.67973 0.707258,-1.67973 l 0.0442,-28.5997 c 0,0 0.22102,-0.88407 -0.928274,-1.94495 -1.149292,-1.06089 -2.033363,-0.92828 -2.033363,-0.92828 l -12.81903,0.0884 c 0,0 -0.928273,-0.13261 -1.723938,0.92827 -0.795663,1.06089 -0.663054,1.98916 -0.663054,1.98916 z"
       id="path5680-4" /><path :style="colorStyle(colorStatus.brakes.bottom_right)"
       class="st0"
       d="m 76.554549,241.85183 v 10.19665 H 80.7766 l 0.07966,-10.19665 z"
       id="path5682-8"
       sodipodi:nodetypes="ccccc" /></g><g
     inkscape:groupmode="layer"
     id="layer5"
     inkscape:label="Engine"><path :style="colorStylel(colorStatus.engine)"
       class="st0"
       d="m 94.918235,196.60739 12.789515,0.12539"
       id="path5411" /><path :style="colorStyle(colorStatus.engine)"
       class="st0"
       d="m 95.795948,164.88439 -3.134685,7.8994 H 86.14112 l 0.877713,15.42265 4.639331,3.38546 v 2.38235 l 3.510846,2.63314 1.128487,6.52014 9.654823,0.12539 1.75543,-6.77092 2.88391,-2.50775 v -2.63313 l 4.63933,-2.63313 1.12849,-15.67343 h -6.39476 l -3.13468,-8.27556 z"
       id="path5409" /></g><g
     inkscape:groupmode="layer"
     id="layer3"
     inkscape:label="FontWing"><path
       class="st0" :style="colorStyle(colorStatus.front_wing.right)"
       d="m 103.8898,17.326478 -0.12539,5.767819 c 0,0 3.63624,0.626936 5.39166,2.633134 1.75542,2.006198 1.63004,4.513945 1.63004,4.513945 l 0.25077,12.162575 c 0,0 6.14398,6.896304 9.40405,8.150178 3.26008,1.253873 24.8267,5.893207 24.8267,5.893207 l -0.75232,-22.8205 z"
       id="path5305" /><path :style="colorStyle(colorStatus.front_wing.left)"
       class="st0"
       d="m 98.375585,17.390405 0.12539,5.767819 c 0,0 -3.636237,0.626936 -5.391657,2.633134 -1.75542,2.006198 -1.63004,4.513945 -1.63004,4.513945 l -0.25077,12.162575 c 0,0 -6.14398,6.896304 -9.40405,8.150178 -3.26008,1.253873 -24.826704,5.893207 -24.826704,5.893207 l 0.75232,-22.8205 z"
       id="path5305-7" /></g><g
     inkscape:groupmode="layer"
     id="layer4"
     inkscape:label="Floor"><path :style="colorStyle(colorStatus.floor)"
       class="st0"
       d="m 64.198333,153.34875 0.250774,33.35304 7.021693,39.37163 h 8.024791 L 81.3764,237.2329 h 6.018593 c 0,0 -1.253873,-11.15948 -2.633133,-15.29726 -1.379262,-4.13779 -10.908702,-28.58832 -11.661026,-32.60072 -0.752324,-4.01239 -4.513945,-25.20286 -4.639331,-30.97068 -0.125389,-5.76782 0,-5.01549 0,-5.01549 z"
       id="path5384" /><path :style="colorStyle(colorStatus.floor)"
       class="st0"
       d="m 138.28367,153.29732 -0.25078,33.35304 -7.02169,39.37163 h -8.02479 l -1.88081,11.15948 h -6.01859 c 0,0 1.25387,-11.15948 2.63313,-15.29726 1.37926,-4.13779 10.9087,-28.58832 11.66103,-32.60072 0.75232,-4.01239 4.51394,-25.20286 4.63933,-30.97068 0.12539,-5.76782 0,-5.01549 0,-5.01549 z"
       id="path5384-3" /></g><g
     inkscape:groupmode="layer"
     id="layer6"
     inkscape:label="Gearbox"><path :style="colorStyle(colorStatus.gearbox)"
       class="st0"
       d="m 98.178307,208.51919 10e-7,29.08986 6.269362,1e-5 -0.12539,-29.08987 z"
       id="path5415"
       sodipodi:nodetypes="ccccc" /></g><g
     inkscape:groupmode="layer"
     id="layer7"
     inkscape:label="Sidepod"><path :style="colorStyle(colorStatus.sidepod)"
       class="st0"
       d="m 70.96925,153.47413 h 13.040286 l 7.021692,9.40406 -2.256972,5.8932 -7.774017,0.12539 c 0,0 -0.877713,17.55423 3.009297,24.45054 3.887007,6.8963 1.37926,6.77092 5.893205,10.78331 4.513945,4.0124 4.137783,3.76163 4.137783,3.76163 l 10e-7,29.7168 -2.382361,0.12539 c 0,0 0.877713,-7.52325 -5.767819,-24.19977 -6.645529,-16.67651 -7.272467,-16.42574 -9.654826,-26.45673 -2.382361,-10.03099 -5.266269,-27.08367 -5.266269,-27.08367 z"
       id="path5421"
       sodipodi:nodetypes="cccccsscccsscc" /><path :style="colorStyle(colorStatus.sidepod)"
       class="st0"
       d="m 131.90981,153.57536 h -13.04028 l -7.02169,9.40406 2.25697,5.8932 7.77402,0.12539 c 0,0 0.87771,17.55423 -3.0093,24.45054 -3.88701,6.8963 -1.37926,6.77092 -5.8932,10.78331 -4.51395,4.0124 -4.13779,3.76163 -4.13779,3.76163 v 29.7168 l 2.38236,0.12539 c 0,0 -0.87771,-7.52325 5.76782,-24.19977 6.64553,-16.67651 7.27246,-16.42574 9.65482,-26.45673 2.38236,-10.03099 5.26627,-27.08367 5.26627,-27.08367 z"
       id="path5421-4"
       sodipodi:nodetypes="cccccsscccsscc" /></g><g
     inkscape:groupmode="layer"
     id="layer8"
     inkscape:label="Diffuser"><path :style="colorStyle(colorStatus.diffuser)"
       class="st0"
       d="m 64.20196,143.22873 7.003849,-18.67693 19.72751,-9.80539 -0.933847,12.72366 c 0,0 -5.369618,6.4202 -9.922121,8.63808 -4.552502,2.21789 -15.875391,7.12058 -15.875391,7.12058 z"
       id="path5608" /><path :style="colorStyle(colorStatus.diffuser)"
       class="st0"
       d="m 138.24826,143.39203 -7.00385,-18.67693 -19.72751,-9.80539 0.93385,12.72366 c 0,0 5.36962,6.4202 9.92212,8.63808 4.5525,2.21789 15.87539,7.12058 15.87539,7.12058 z"
       id="path5608-4" /></g><g
     inkscape:groupmode="layer"
     id="layer9"
     inkscape:label="Top-Left"><path :style="colorStyle(colorStatus.wheels.top_left)"
       class="st0"
       d="m 55.901235,64.970318 0.148674,27.504599 c 0,0 -0.297346,0.198231 1.189387,1.238943 1.486736,1.040714 1.784083,1.090274 1.784083,1.090274 l 11.100953,0.09911 c 0,0 0.842484,-0.04956 1.684968,-0.842483 0.842483,-0.792925 0.941599,-1.288503 0.941599,-1.288503 l 0.297346,-27.70283 c 0,0 -0.24779,-0.594693 -1.38762,-1.635408 -1.13983,-1.040714 -1.437177,-0.842483 -1.437177,-0.842483 l -11.497416,0.04956 c 0,0 -0.892042,-0.04956 -1.932757,0.941599 -1.040712,0.991156 -0.89204,1.387618 -0.89204,1.387618 z"
       id="path5635" /><path :style="colorStyle(colorStatus.brakes.top_left)"
       class="st0"
       d="m 76.380644,73.556309 0.0613,10.420479 h 4.53597 l 0.0613,-10.420478 z"
       id="path5637"
       sodipodi:nodetypes="ccccc" /></g><g
     inkscape:groupmode="layer"
     id="layer9-9"
     inkscape:label="Top-Right"
     transform="matrix(-1,0,0,1,202.4474,-0.05767864)"><path :style="colorStyle(colorStatus.wheels.top_right)"
       class="st0"
       d="m 55.901235,64.970318 0.148674,27.504599 c 0,0 -0.297346,0.198231 1.189387,1.238943 1.486736,1.040714 1.784083,1.090274 1.784083,1.090274 l 11.100953,0.09911 c 0,0 0.842484,-0.04956 1.684968,-0.842483 0.842483,-0.792925 0.941599,-1.288503 0.941599,-1.288503 l 0.297346,-27.70283 c 0,0 -0.24779,-0.594693 -1.38762,-1.635408 -1.13983,-1.040714 -1.437177,-0.842483 -1.437177,-0.842483 l -11.497416,0.04956 c 0,0 -0.892042,-0.04956 -1.932757,0.941599 -1.040712,0.991156 -0.89204,1.387618 -0.89204,1.387618 z"
       id="path5635-0" /><path :style="colorStyle(colorStatus.brakes.top_right)"
       class="st0"
       d="m 75.988122,73.556309 0.0613,10.420479 h 4.53597 l 0.0613,-10.420478 z"
       id="path5637-5"
       sodipodi:nodetypes="ccccc" /></g></svg>
</template>

<style scoped>
svg {
    height: 52rem;
    width: 100%;
}
.st0 {
    fill:none;
    stroke:#00ff00;
    stroke-width:1.5875;
    stroke-linecap:butt;
    stroke-dasharray:none;
    stroke-opacity:1
}
.chasis {
    fill:none;
    stroke:#385268;
    stroke-width:1.32291667;
    stroke-opacity:1;
    stroke-dasharray:none;
}
.chasis2 {
    fill:none;
    stroke:#385268;
    stroke-width:0.79375;
    stroke-linecap:butt;
    stroke-dasharray:none;
    stroke-opacity:1;
}
.chasis3 {
    fill:none;
    stroke:#385268;
    stroke-width:1.32291667;
    stroke-opacity:1;
    stroke-dasharray:none;
}
</style>