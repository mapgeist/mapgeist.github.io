     module.exports = function(grunt) {
          grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.initConfig({
              watch: {
                  // if any .less file changes in directory "public/css/" run the "less"-task.
                  files: "*.less",
                  tasks: ["less"]
              },
             less: {
                 development: {
                     files: {"style.css": "style.less"}
                 },
                 production: {
                     options: {
                         cleancss: true
                     },
                     files: {"style.css": "style.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.registerTask('default', ['less']);
     };