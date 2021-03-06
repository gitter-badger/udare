module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          'src/vendor/q/q.min.js',
          'src/vendor/handlebars/handlebars.js',
          'src/vendor/director/director.min.js',
          'src/vendor/htmlparser.js',

          // project sources
          'src/udare.js',
          'src/udare.logProvider.js',
          'src/udare.q.js',
          'src/udare.utils.js',                    
          
          'src/udare.injector.js',
          'src/udare.pubsub.js',
          'src/udare.watcher.js',
          'src/udare.scope.js',

          'src/udare.expressions.js',
          'src/udare.events.js',
          'src/udare.dom.js',

          'src/udare.compiler.js',
          'src/udare.executor.js',

          'src/udare.module.js',
          'src/udare.filter.js',
          'src/udare.formatter.js',
          'src/udare.service.js',
          'src/udare.controller.js',
          'src/udare.component.js',
          'src/udare.request.js',
          'src/udare.restfulProvider.js',
          'src/udare.routerProvider.js',
          'src/udare.stateProvider.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }      
    },

    jshint: {
      options: {
        //ignores: ['src/vendor/*.js'],
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          define: true,
          require: true
        },
      },
      beforeconcat: ['src/*.js'],
      afterconcat: ['dist/<%= pkg.name %>.js']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: "gzip"
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    clean : ['dist']
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
};