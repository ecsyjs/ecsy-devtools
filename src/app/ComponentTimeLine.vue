<template>
  <div>
    <canvas ref="canvas">
    </canvas>
    {{min}} {{max}}
  </div>
</template>

<script>
var PR = Math.round( window.devicePixelRatio || 1 );
var W = 160;
var H = 25;
var MARGIN = 1;

	var WIDTH = W * PR, HEIGHT = H * PR,
			TEXT_X = MARGIN * PR, TEXT_Y = 2 * PR,
			GRAPH_X = MARGIN * PR, GRAPH_Y = MARGIN * PR,
			GRAPH_WIDTH = (W - 2*MARGIN) * PR, GRAPH_HEIGHT = (H-2*MARGIN) * PR;


var round = Math.round;
        let bg = '#002';
        bg = '#222';
        let fg = '#0ff';

export default {
  name: 'ComponentTimeLine',
  data() {
    return {
      previousMax: Number.MIN_VALUE,
      max: Number.MAX_VALUE,
      min: Number.MIN_VALUE
    }
  },
  mounted () {
    this.canvas = this.$refs.canvas;
    this.canvas.style.cssText = `width:${W}px;height:${H}px`;
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;

    let ctx = this.ctx = this.canvas.getContext("2d");
	  ctx.fillStyle = '#333';
    ctx.fillRect( 0, 0, 200, 30 );
	  ctx.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
    ctx.textBaseline = 'top';

    ctx.fillStyle = bg;
    ctx.fillRect( 0, 0, WIDTH, HEIGHT );

    ctx.fillStyle = fg;
    ctx.fillText( name, TEXT_X, TEXT_Y );
    ctx.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

    ctx.fillStyle = bg;
    ctx.globalAlpha = 0.9;
    ctx.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

  },
  watch: {
    currentValue: {
      immediate: true,
      handler(value) {
        if (!this.ctx) return;
        let context = this.ctx;
        let name = 'ms';
        let canvas = this.canvas;

          this.min = Math.min( this.min, value );
          this.max = Math.max( this.max, value );

          maxValue = max;

          context.fillStyle = bg;
          context.globalAlpha = 1;
/*
          context.fillRect( 0, 0, WIDTH, GRAPH_Y );
          context.fillStyle = fg;
          context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );
*/
          context.fillStyle = `#EB932C`;
          context.drawImage( canvas,
            GRAPH_X + PR, GRAPH_Y, // sx, sy
            GRAPH_WIDTH - PR, GRAPH_HEIGHT, // sw, sh
            GRAPH_X, GRAPH_Y, // dx, dy
            GRAPH_WIDTH - PR, GRAPH_HEIGHT // dw, dh
          );

          //if (this.previousMax )

          context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

          context.fillStyle = bg;
          context.globalAlpha = 0.9;
          context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );
      }
    }
  },
  props: ['stats', 'currentValue']
}
</script>

<style scoped>
canvas {
  background-color: #f99;
}
</style>