/*
 * grunt-punypng
 * https://github.com/Shuxiang/grunt-punypng
 *
 * Copyright (c) 2014 ShuxiangZhao
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        punypng: {
            options: {
                lossy: true,
                key: 'cd1e2670d31671b696ea56b8c965fd3620a579cb'
            },

            test: {
                files: [{
                    src: 'test/fixtures/*.png',
                    dest: 'test/expected/'
                }, {
                    src: 'test/fixtures/folder/*.png',
                    dest: 'test/expected/test'
                }]
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['punypng']);

};