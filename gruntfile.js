module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            dist: {
                src: [ "documentation/kex/declarations/*.d.ts" ],
                dest: "documentation/kex/headers/kex.d.ts"
            },
            options: { banner: "/// <reference path=\"./core-engine.d.ts\"/>\n\n" }
        },
        typedoc: {
            build: {
                options: {
                    out: "./out/api/",
                    name: "Kernel Extension v3.0 API",
                    readme: "./README.md",
                    theme: "default",
                    validation: { invalidLink: true },
                    entryPoints: [ "./documentation/kex/headers/kex.d.ts" ],
                    "sourcefile-url-prefix": "https://github.com/DMHYT/kex-docs/blob/gh-pages/headers/",
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true, flatten: true,
                        src: "documentation/kex/headers/*",
                        dest: "out/headers/"
                    },
                    {
                        expand: true, flatten: true,
                        src: "documentation/static/images/*",
                        dest: "out/api/assets/images/pages/"
                    },
                    {
                        expand: true,
                        src: "**/*",
                        cwd: "documentation/static/",
                        dest: "out"
                    },
                    {
                        expand: true,
                        src: "README.md",
                        dest: "out/en"
                    },
                    {
                        expand: true,
                        src: "README.md",
                        dest: "out"
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-typedoc");
    grunt.registerTask("docs_api", [ "concat", "typedoc", "copy" ]);
    grunt.registerTask("copyf", [ "copy" ]);
};