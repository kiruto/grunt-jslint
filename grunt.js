/*jslint node:true*/
module.exports = function (grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		watch: {
			files: '<config:jslint.files>',
			tasks: 'default'
		},
		jslint: {
			files: [ // some example files
				'**/*.js'
			]
		},
		jslint_directives: { // some example JSLint directives
			browser: true,
			vars: false,
			unparam: true,
			unused: true // pseudo-directive, will report unused variables
		},
		jslint_options: {
			junit: 'out/junit.xml',
			log: 'out/lint.log'
		}
	});

	// Load local tasks.
	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', 'jslint');

};