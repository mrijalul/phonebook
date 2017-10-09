const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir((mix) => {
    mix
    	// .copy('node_modules/bulma/bulma.sass','resources/assets/sass/bulma/bulma.sass')
    	.copy('node_modules/bulma/sass','resources/assets/sass/bulma')
    	.sass([
    		'bulma/bulma.sass',
    	], 'resources/assets/css/bulma.css')
    	.sass('app.scss')
		.webpack('app.js');
});
