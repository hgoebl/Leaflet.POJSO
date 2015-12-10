'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        leafletSrc: 'node_modules/leaflet/src',
        banner: grunt.file.read('node_modules/leaflet/src/copyright.js', {encoding: 'utf8'}),

        concat: {
            options: {
                separator: '',
                process: false
            },
            dist: {
                src: [
                    '<%= leafletSrc %>/copyright.js',
                    'src/declareL.js',
                    '<%= leafletSrc %>/core/Util.js',
                    '<%= leafletSrc %>/geo/LatLng.js',
                    '<%= leafletSrc %>/geo/LatLngBounds.js',
                    '<%= leafletSrc %>/geometry/Point.js',
                    '<%= leafletSrc %>/geometry/Transformation.js',
                    '<%= leafletSrc %>/geometry/Bounds.js',
                    '<%= leafletSrc %>/geometry/LineUtil.js',
                    '<%= leafletSrc %>/geometry/PolyUtil.js',
                    '<%= leafletSrc %>/geo/projection/Projection.js',
                    '<%= leafletSrc %>/geo/projection/Projection.*.js',
                    '<%= leafletSrc %>/geo/crs/CRS.js',
                    '<%= leafletSrc %>/geo/crs/CRS.*.js'
                ],
                dest: 'index.js'
            },
            browser: {
                src: [
                    '<%= leafletSrc %>/copyright.js',
                    'src/browserL.js',
                    '<%= leafletSrc %>/core/Util.js',
                    '<%= leafletSrc %>/geo/LatLng.js',
                    '<%= leafletSrc %>/geo/LatLngBounds.js',
                    '<%= leafletSrc %>/geometry/Point.js',
                    '<%= leafletSrc %>/geometry/Transformation.js',
                    '<%= leafletSrc %>/geometry/Bounds.js',
                    '<%= leafletSrc %>/geometry/LineUtil.js',
                    '<%= leafletSrc %>/geometry/PolyUtil.js',
                    '<%= leafletSrc %>/geo/projection/Projection.js',
                    '<%= leafletSrc %>/geo/projection/Projection.*.js',
                    '<%= leafletSrc %>/geo/crs/CRS.js',
                    '<%= leafletSrc %>/geo/crs/CRS.*.js'
                ],
                dest: 'leaflet-pojso.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
};