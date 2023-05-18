<script>
export default {
    props: {
        colorStatus: {
            type: Object,
            default: { front_wing: { left: 0, right: 0 }, floor: 0, diffuser: 0, sidepod: 0, gearbox: 0, engine: 0, rear_wing: 0, wheels: { top_left: 0, top_right: 0, bottom_left: 0, bottom_right: 0 }, brakes: { top_left: 0, top_right: 0, bottom_left: 0, bottom_right: 0 } }
        },
        innerTemp: {
          type: Object,
          default: { top_left: 0, top_right: 0, bottom_left: 0, bottom_right: 0 }
        },
        brakesTemp: {
          type: Object,
          default: { top_left: 0, top_right: 0, bottom_left: 0, bottom_right: 0 }
        }
    },
    data() {
        return {
            green_color: '#39B54A',
            green_background: '#39b54a4d',
            yellow_color: '#b5a939',
            yellow_background: '#b5b3394d',
            red_color: '#b53939',
            red_background: '#b539394d',
            blue_color: '#59deffb9',
            green_wheel_color: '#39b54ab6'
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
        colorInnerTemp(color, innerTemp) {
          if( color == 0) {
            if(innerTemp < 77) {
              return 'fill: ' + this.blue_color + '; stroke: ' + this.blue_color + ';';
            }else {
              return 'fill: ' + this.green_wheel_color + '; stroke: ' + this.green_wheel_color + ';';
            }
          }else {
            return 'display: none;'
          }
        },
        colorBrakesTemp(color, temp) {
          if(temp > 1000) {
            return 'fill: ' + this.red_background + '; stroke: ' + this.red_color + ';';
          }else if(temp > 800) {
            return 'fill: ' + this.yellow_background + '; stroke: ' + this.yellow_color + ';';
          }else {
            return 'fill: ' + this.green_background + '; stroke: ' + this.green_color + ';';
          }
        }
    }
};
</script>

<template>
    <svg version="1.1"
	 id="svg5" inkscape:version="1.2.2 (b0a8486, 2022-12-01)" sodipodi:docname="car.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.3 841.9"
	 style="enable-background:new 0 0 595.3 841.9;" xml:space="preserve">
<sodipodi:namedview  bordercolor="#000000" borderopacity="0.25" id="namedview7" inkscape:current-layer="svg5" inkscape:cx="153.75688" inkscape:cy="614.00927" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:pagecheckerboard="0" inkscape:pageopacity="0.0" inkscape:showpageshadow="2" inkscape:window-height="985" inkscape:window-maximized="0" inkscape:window-width="1662" inkscape:window-x="223" inkscape:window-y="89" inkscape:zoom="0.49103493" pagecolor="#ffffff" showgrid="false">
	</sodipodi:namedview>
<g id="RearWing" inkscape:groupmode="layer" inkscape:label="RearWing">
	<path id="path5812" class="st0" :style="colorStyle(colorStatus.rear_wing)" d="M219.2,728l136.5,0.7l9.3,36.7l-2.2,13.5h-12.3l-2.1-12.7h-56.3v19.9h-10.4l-0.2-19.5h-55.8
		l-3,12.5h-10.7l-3.2-10.9L219.2,728z"/>
</g>
<g id="Differencial" inkscape:groupmode="layer" inkscape:label="Diferential">
	<path id="path5815" sodipodi:nodetypes="ccccc" class="st0" :style="colorStyle(colorStatus.floor)" d="M241.1,685.9l91.7,0.2l-0.2,28.3l-91.7,0.2L241.1,685.9z"/>
</g>
<g id="Chassis" inkscape:groupmode="layer" inkscape:label="Chasis">
	<path id="path1926" class="st1" d="M266.5,80.8l0.2,85.2l-15.5-0.4v19.9l12.7,0.2l2.6,2.5l0.6,18.3l-38.9,7.7l-0.7-13.9l-4.5-6.3
		l-5.9-4.7l-0.6,64.4l4.3-0.8l3.4-3.9l36.9,27.9l-2.8,45.3l-48.7-27.1l-7.7,36.6l-1.2,22.1l-18,51.5l0.3,28.9l0.6,95l19.4,112.4
		l19.8,1.2l6.6,30.6h113.2l6.2-33.5l21.5-0.4c0,0,17.3-80.1,19.4-105.7c2.1-25.6,2.5-100.8,2.5-100.8l-2.5-28.1L373,353.6l-9.1-59.5
		L316,323.8l-3.7-48.7l36.3-26.8l8.7,6.2l0.8-65.7l-9.5,6.2l-2.5,5.8l0.8,13.6l-39.7-8.7l-0.4-14.9l3.7-5.8l12-0.4l0.4-19l-15.7-0.4
		V81.4c0,0-0.4-12.8-20.7-12.8C266.4,68.6,266.5,80.8,266.5,80.8L266.5,80.8z"/>
	<path id="path5189" class="st2" d="M227,226.8l39.6-9.2l0.6,16.3L227,226.8z"/>
	<path id="path5191" class="st2" d="M265.1,239.4l-1.4,25.3l-38.6-30.5L265.1,239.4z"/>
	<path id="path5193" class="st2" d="M347.4,226.2l-39.6-9.2l-0.6,16.3L347.4,226.2z"/>
	<path id="path5199" sodipodi:nodetypes="csssccsccsscc" class="st2" d="M284.2,319.7c0,0,1.2,30.9-3.8,38.4
		c-5,7.6-25.5,22.3-28.7,31.3c-3.2,9-7.6,21.9-7.6,27.5c0,5.6-0.2,7.8-0.2,7.8h13.7c0,0-3.8-40.2,28.9-40.2s31.1,39.6,31.1,39.6
		l12.1-0.2c0,0,2.6-25.5-12.3-40.6s-24.1-19.7-25.3-27.5c-1.2-7.8-1.6-36-1.6-36L284.2,319.7z"/>
	<path id="path5297" class="st2" d="M264.5,411.7c0,0-2.8,21.9,1.9,32.1c4.7,10.2,7.5,12.1,7.5,12.1h24.4c0,0,4.9-0.7,9.5-11.4
		c4.7-10.7,2.1-33.8,2.1-33.8s-3.7-17-23.8-17C266.1,393.7,264.5,411.7,264.5,411.7L264.5,411.7z"/>
	<path id="path5299" class="st2" d="M282.7,281.7v23.5h8.6l-0.2-23.5H282.7z"/>
	<path id="path5195" class="st2" d="M309.4,238.8l1.4,25.3l38.6-30.5L309.4,238.8z"/>
</g>
<g id="RearLeft" inkscape:groupmode="layer" inkscape:label="Bottom-Left">
	<path id="path5680" :style="colorStyle(colorStatus.wheels.bottom_left)"  class="st0" d="M155,657.6l-0.6,78.3c0,0-1,3,3.1,6.4c4.1,3.4,5.8,3.9,5.8,3.9h35c0,0,3.8,0.1,6.1-3.1
		c2.4-3.3,2-4.8,2-4.8l0.1-81.1c0,0,0.6-2.5-2.6-5.5s-5.8-2.6-5.8-2.6l-36.3,0.3c0,0-2.6-0.4-4.9,2.6C154.6,655,155,657.6,155,657.6
		L155,657.6z"/>
	<path id="path5680_1_"  :style="colorInnerTemp(colorStatus.wheels.bottom_left, innerTemp.bottom_left)"   class="st0" d="M161.2,663.9l-0.5,66.1c0,0-0.7,2.5,2.3,5.4c3.1,2.9,4.3,3.3,4.3,3.3h26c0,0,2.8,0.1,4.6-2.6
		c1.8-2.8,1.5-4,1.5-4l0.1-68.4c0,0,0.5-2.1-2-4.7c-2.4-2.5-4.3-2.2-4.3-2.2l-27,0.2c0,0-2-0.3-3.6,2.2
		C161,661.7,161.2,663.9,161.2,663.9L161.2,663.9z"/>
	<path id="path5682" :style="colorBrakesTemp(colorStatus.brakes.bottom_left, brakesTemp.bottom_left)"   sodipodi:nodetypes="ccccc" class="st0" d="M217,685.6v28.9h12l0.2-28.9H217z"/>
</g>
<g id="RealRight" inkscape:groupmode="layer" inkscape:label="Bottom-Left">
	<path id="path5680_3_" class="st0" :style="colorStyle(colorStatus.wheels.bottom_right)"  d="M420.8,657.3c0,0,0.4-2.6-1.9-5.6c-2.3-3-4.9-2.6-4.9-2.6l-36.3-0.3c0,0-2.5-0.4-5.8,2.6
		c-3.3,3-2.6,5.5-2.6,5.5l0.1,81.1c0,0-0.4,1.5,2,4.8c2.4,3.3,6.1,3.1,6.1,3.1h35c0,0,1.6-0.5,5.8-3.9s3.1-6.4,3.1-6.4L420.8,657.3
		L420.8,657.3z"/>
	<path id="path5680_2_"  :style="colorInnerTemp(colorStatus.wheels.bottom_right, innerTemp.bottom_right)" class="st0" d="M414.5,663.7c0,0,0.3-2.2-1.4-4.8c-1.7-2.5-3.6-2.2-3.6-2.2l-27-0.2c0,0-1.9-0.3-4.3,2.2
		c-2.4,2.5-2,4.7-2,4.7l0.1,68.4c0,0-0.3,1.3,1.5,4c1.8,2.8,4.6,2.6,4.6,2.6h26c0,0,1.2-0.4,4.3-3.3s2.3-5.4,2.3-5.4L414.5,663.7
		L414.5,663.7z"/>
	<path id="path5682_1_" :style="colorBrakesTemp(colorStatus.brakes.bottom_right
  , brakesTemp.bottom_right)" sodipodi:nodetypes="ccccc" class="st0" d="M346.6,685.3l0.2,28.9h12v-28.9H346.6z"/>
</g>
<g id="Engine" inkscape:groupmode="layer" inkscape:label="Engine">
	<path id="path5411" class="st0" :style="colorStylel(colorStatus.engine)" d="M269.1,557.3l36.3,0.4"/>
	<path id="path5409" class="st0" :style="colorStyle(colorStatus.engine)" d="M271.5,467.4l-8.9,22.4h-18.5l2.5,43.7l13.2,9.6v6.8l10,7.5l3.2,18.5l27.4,0.4l5-19.2l8.2-7.1
		v-7.5l13.2-7.5l3.2-44.4h-18.1l-8.9-23.5L271.5,467.4z"/>
</g>
<g id="FrontWing" inkscape:groupmode="layer" inkscape:label="FontWing">
	<path id="path5305" class="st0" :style="colorStyle(colorStatus.front_wing.right)" d="M294.5,49.1l-0.4,16.3c0,0,10.3,1.8,15.3,7.5c5,5.7,4.6,12.8,4.6,12.8l0.7,34.5
		c0,0,17.4,19.5,26.7,23.1c9.2,3.6,70.4,16.7,70.4,16.7l-2.1-64.7L294.5,49.1z"/>
	<path id="path5305-7" class="st0" :style="colorStyle(colorStatus.front_wing.left)" d="M278.9,49.3l0.4,16.3c0,0-10.3,1.8-15.3,7.5s-4.6,12.8-4.6,12.8l-0.7,34.5
		c0,0-17.4,19.5-26.7,23.1c-9.2,3.6-70.4,16.7-70.4,16.7l2.1-64.7L278.9,49.3z"/>
</g>
<g id="Floor" inkscape:groupmode="layer" inkscape:label="Floor">
	<path id="path5384" class="st0" :style="colorStyle(colorStatus.floor)" d="M182,434.7l0.7,94.5l19.9,111.6h22.7l5.3,31.6h17.1c0,0-3.6-31.6-7.5-43.4
		c-3.9-11.7-30.9-81-33.1-92.4c-2.1-11.4-12.8-71.4-13.2-87.8c-0.4-16.3,0-14.2,0-14.2L182,434.7z"/>
	<path id="path5384-3" class="st0" :style="colorStyle(colorStatus.floor)" d="M392,434.5l-0.7,94.5l-19.9,111.6h-22.7l-5.3,31.6h-17.1c0,0,3.6-31.6,7.5-43.4
		c3.9-11.7,30.9-81,33.1-92.4c2.1-11.4,12.8-71.4,13.2-87.8c0.4-16.3,0-14.2,0-14.2H392z"/>
</g>
<g id="Gearbox" inkscape:groupmode="layer" inkscape:label="Gearbox">
	<path id="path5415" :style="colorStyle(colorStatus.gearbox)" sodipodi:nodetypes="ccccc" class="st0" d="M278.3,591.1v82.5l17.8,0l-0.4-82.5H278.3z"/>
</g>
<g id="SidePod" inkscape:groupmode="layer" inkscape:label="Sidepod">
	<path id="path5421" :style="colorStyle(colorStatus.sidepod)" sodipodi:nodetypes="cccccsscccsscc" class="st0" d="M201.2,435h37l19.9,26.7l-6.4,16.7l-22,0.4
		c0,0-2.5,49.8,8.5,69.3c11,19.5,3.9,19.2,16.7,30.6s11.7,10.7,11.7,10.7v84.2l-6.8,0.4c0,0,2.5-21.3-16.3-68.6
		c-18.8-47.3-20.6-46.6-27.4-75c-6.8-28.4-14.9-76.8-14.9-76.8V435z"/>
	<path id="path5421-4" :style="colorStyle(colorStatus.sidepod)" sodipodi:nodetypes="cccccsscccsscc" class="st0" d="M373.9,435.3h-37L317,462l6.4,16.7l22,0.4
		c0,0,2.5,49.8-8.5,69.3c-11,19.5-3.9,19.2-16.7,30.6s-11.7,10.7-11.7,10.7v84.2l6.8,0.4c0,0-2.5-21.3,16.3-68.6
		c18.8-47.3,20.6-46.6,27.4-75c6.8-28.4,14.9-76.8,14.9-76.8V435.3z"/>
</g>
<g id="Diffusers" inkscape:groupmode="layer" inkscape:label="Diffuser">
	<path id="path5608" :style="colorStyle(colorStatus.diffuser)" class="st0" d="M182,406l19.9-52.9l55.9-27.8l-2.6,36.1c0,0-15.2,18.2-28.1,24.5C214.1,392.1,182,406,182,406
		L182,406z"/>
	<path id="path5608-4" :style="colorStyle(colorStatus.diffuser)" class="st0" d="M391.9,406.5L372,353.5l-55.9-27.8l2.6,36.1c0,0,15.2,18.2,28.1,24.5
		C359.8,392.6,391.9,406.5,391.9,406.5L391.9,406.5z"/>
</g>
<g id="FontLeft" inkscape:groupmode="layer" inkscape:label="Top-Left">
	<path id="path5635" class="st0" :style="colorStyle(colorStatus.wheels.top_left)" d="M158.5,184.2l0.4,78c0,0-0.8,0.6,3.4,3.5c4.2,3,5.1,3.1,5.1,3.1l31.5,0.3c0,0,2.4-0.1,4.8-2.4
		c2.4-2.2,2.7-3.7,2.7-3.7l0.8-78.5c0,0-0.7-1.7-3.9-4.6c-3.2-3-4.1-2.4-4.1-2.4l-32.6,0.1c0,0-2.5-0.1-5.5,2.7
		C158,183,158.5,184.2,158.5,184.2L158.5,184.2z"/>
	<path id="path5637"  :style="colorBrakesTemp(colorStatus.brakes.top_left, brakesTemp.top_left)" sodipodi:nodetypes="ccccc" class="st0" d="M216.5,208.5l0.2,29.5h12.9l0.2-29.5H216.5z"/>
	<path id="path5635_1_" class="st0"  :style="colorInnerTemp(colorStatus.wheels.top_left, innerTemp.top_left)" d="M165,191.6l0.3,62.2c0,0-0.6,0.4,2.5,2.8c3.1,2.4,3.7,2.5,3.7,2.5l23.2,0.2
		c0,0,1.8-0.1,3.5-1.9s2-2.9,2-2.9l0.6-62.6c0,0-0.5-1.3-2.9-3.7s-3-1.9-3-1.9l-24,0.1c0,0-1.9-0.1-4,2.1
		C164.7,190.7,165,191.6,165,191.6L165,191.6z"/>
</g>
<g id="FrontRight" transform="matrix(-1,0,0,1,202.4474,-0.05767864)" inkscape:groupmode="layer" inkscape:label="Top-Right">
	<path id="path5635-0" :style="colorStyle(colorStatus.wheels.top_right)" class="st0" d="M-213,184.1l0.4,78c0,0-0.8,0.6,3.4,3.5c4.2,3,5.1,3.1,5.1,3.1l31.5,0.3c0,0,2.4-0.1,4.8-2.4
		c2.4-2.2,2.7-3.7,2.7-3.7l0.8-78.5c0,0-0.7-1.7-3.9-4.6c-3.2-3-4.1-2.4-4.1-2.4l-32.6,0.1c0,0-2.5-0.1-5.5,2.7
		C-213.4,182.9-213,184.1-213,184.1L-213,184.1z"/>
	<path id="path5637-5"  :style="colorBrakesTemp(colorStatus.brakes.top_right, brakesTemp.top_right)" sodipodi:nodetypes="ccccc" class="st0" d="M-156,208.4l0.2,29.5h12.9l0.2-29.5H-156z"/>
	<path id="path5635_2_"  :style="colorInnerTemp(colorStatus.wheels.top_right, innerTemp.top_right)" class="st0" d="M-207,191.5c0,0-0.3-0.9,1.9-3.1c2.2-2.2,4-2.1,4-2.1l24-0.1c0,0,0.6-0.4,3,1.9
		c2.4,2.4,2.9,3.7,2.9,3.7l-0.6,62.6c0,0-0.2,1.1-2,2.9c-1.8,1.8-3.5,1.9-3.5,1.9l-23.2-0.2c0,0-0.6-0.1-3.7-2.5
		c-3.1-2.4-2.5-2.8-2.5-2.8L-207,191.5L-207,191.5z"/>
</g>
</svg>

</template>

<style scoped>
svg {
    height: 52rem;
    width: 100%;
}
.st0{fill:none;stroke:#00FF00;stroke-width:4.5;stroke-miterlimit:11.3386; transition: 2s;}
.st1{fill:none;stroke:#385268;stroke-width:3.75;stroke-miterlimit:11.3386;}
.st2{fill:none;stroke:#385268;stroke-width:2.25;stroke-miterlimit:11.3386;}
</style>