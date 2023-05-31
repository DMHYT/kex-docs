module.exports = function(grunt) {
    const fs = require("fs");
    const path = require("path");
    if(!String.prototype.replaceAll)
    String.prototype.replaceAll = function(str, newStr) {
        return Object.prototype.toString.call(str).toLowerCase() === "[object regexp]" ?
            this.replace(str, newStr) : this.replace(new RegExp(str, 'g'), newStr);
    }
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
                    name: "Kernel Extension v4.0 API",
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
    grunt.registerTask("api_link_fix", () => {
        const listFiles = (dirPath, arrayOfFiles) => {
            const files = fs.readdirSync(dirPath);
            arrayOfFiles = arrayOfFiles || [];
            files.forEach(file => {
                if(fs.statSync(`${dirPath}/${file}`).isDirectory())
                    arrayOfFiles = listFiles(`${dirPath}/${file}`, arrayOfFiles);
                else arrayOfFiles.push(path.join(dirPath, "/", file));
            });
            return arrayOfFiles;
        }
        const neededLinks = {};
        const linksJson = JSON.parse(fs.readFileSync("links.json"));
        for(let name in linksJson) {
            const split = linksJson[name].split(":");
            neededLinks[name] = [ `https://${split[0]}`, split[1] ];
        }
        let fixedLinksCount = 0;
        listFiles("out/api/")
            .filter(filePath => filePath.endsWith(".html"))
            .forEach(filePath => fs.writeFileSync(filePath, 
                fs.readFileSync(filePath).toString()
                    .replaceAll(
                        /<span class="tsd-signature-type">(.*?)<\/span>/gm,
                        (match, type) => {
                            type = type.split("."), type = type[type.length - 1];
                            if(!neededLinks[type]) return match;
                            ++fixedLinksCount;
                            return `<a href="${neededLinks[type][0]}" class="tsd-signature-type" data-tsd-kind="${neededLinks[type][1]}" target="_blank">${type}</a>`;
                        }
                    )
                    .replaceAll(
                        /\[\[(.*?)\]\]/gm, (match, type) => {
                            const components = type.split(".");
                            const isClassMember =
                                components[components.length - 1][0] === components[components.length - 1][0].toLowerCase() &&
                                components[components.length - 2] &&
                                components[components.length - 2][0] === components[components.length - 2][0].toUpperCase();
                            const typeName = components[components.length - (isClassMember ? 2 : 1)];
                            if(!neededLinks[typeName]) return match;
                            ++fixedLinksCount;
                            const link = isClassMember ?
                                `${neededLinks[typeName][0]}#${components[components.length - 1]}` :
                                neededLinks[typeName][0];
                            return `<a href="${link}" target="_blank">${type}</a>`
                        }
                    )
            ));
        console.log(`Successfully added ${fixedLinksCount} links to external documentation websites`);
    });
    grunt.registerTask("declarations_fix", () => {
        fs.writeFileSync("out/headers/kex.d.ts",
            fs.readFileSync("out/headers/kex.d.ts")
                .toString()
                .split("\n")
                .map(el => el = el.replace(/^export namespace/, "declare namespace"))
                .join("\n")
        );
    });
    grunt.registerTask("copyf", [ "copy" ]);
};