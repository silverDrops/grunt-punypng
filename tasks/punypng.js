/*
 * grunt-punypng
 * https://github.com/zhaoshuxiang/grunt-punypng.git
 *
 * Copyright (c) 2014 ShuxiangZhao
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var http = require('http');
    var url = require('url');
    var fs = require('fs');
    var util = require('util');
    var FormData = require('form-data');
    var async = require('async');

    grunt.registerMultiTask('punypng', 'optimize images with punypng.', function() {
        var options = this.options({
            lossy: true
        });
        var key = options.key;
        var done = this.async();

        async.each(this.files, function(file, fileCallback) {
            var src = file.src;

            async.each(src, function(filePath, filePathCallback) {
                var f = new FormData();

                f.append('key', key);
                f.append('img', fs.createReadStream(filePath));

                f.submit('http://www.punypng.com/api/optimize', function(err, res) {
                    var bodyStr = '';

                    if (err) {
                        console.log(err.message);
                    }

                    res.on('data', function(chunk) {
                        bodyStr = bodyStr + chunk.toString('utf8');
                    });

                    res.on('end', function() {
                        var resJson = JSON.parse(bodyStr);
                        var url = resJson['indexed_url'];
                        // console.log(bodyStr);

                        grunt.log.write('original size: ' + resJson['original_size']);
                        grunt.log.write('optimized size: ' + resJson['optimized_size']);
                        grunt.log.write('savings percent: ' + resJson['savings_percent'] + '%');
                        grunt.log.write('indexed size: ' + resJson['indexed_size']);
                        grunt.log.write('indexed savings percent: ' + resJson['indexed_savings_percent'] + '%');


                        http.get(url, function(res) {
                            var conDis = res.headers['content-disposition'];
                            var fileName = file.dest + (conDis.match(/filename="(.*)"/))[1];

                            res.on('data', function(chunk) {
                                fs.appendFileSync(fileName, chunk);
                            });

                            res.on('end', function() {
                                filePathCallback.call(null);
                                console.log(fileName + ' has compressed');
                            });
                        });


                    });
                });
            }, function(err) {
                if (err) {
                    console.log(err);
                }

                fileCallback.call(null);
            });

        }, function(err) {
            if (err) {
                console.log(err);
            }

            done();
        });
    });
};