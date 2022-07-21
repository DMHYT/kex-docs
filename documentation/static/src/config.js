const GIT_SRC = "DMHYT/kex-docs";
window.$docsify = {
    name: "Kernel Extension v3.0 Docs",
    repo: GIT_SRC,
    loadSidebar: "config/_sidebar.md",
    loadNavbar: "config/_navbar.md",
    subMaxLevel: 4,
    basePath: "https://dmhyt.github.io/kex-docs/",
    relativePath: true,
    nameLink: {
        "/ru/": "#/ru/",
        "/en/": "#/en/",
        "/": "#/",
    },
    alias: {
        "/": `https://raw.githubusercontent.com/${GIT_SRC}/gh-pages/`,
        "/ru/.*?config/_navbar.md": `https://raw.githubusercontent.com/${GIT_SRC}/gh-pages/ru/config/_navbar.md`,
        "/ru/.*?config/_sidebar.md": `https://raw.githubusercontent.com/${GIT_SRC}/gh-pages/ru/config/_sidebar.md`,
        "/.*?config/_navbar.md": `https://raw.githubusercontent.com/${GIT_SRC}/gh-pages/en/config/_navbar.md`,
        "/.*?config/_sidebar.md": `https://raw.githubusercontent.com/${GIT_SRC}/gh-pages/en/config/_sidebar.md`,
    },
    themeable: {
        readyTransition: true, // default
        responsiveTables: true, // default
    },
    copyCode: {
        //https://github.com/jperasmus/docsify-copy-code
        buttonText: {
            "/zh-cn/": "点击复制",
            "/ru/": "Скопировать в буфер обмена",
            "/de-de/": "Klicken Sie zum Kopieren",
            "/es/": "Haga clic para copiar",
            "/": "Copy to clipboard",
        },
        errorText: {
            "/zh-cn/": "错误",
            "/ru/": "ошибка",
            "/": "Error",
        },
        successText: {
            "/zh-cn/": "复制",
            "/ru/": "Скопировано",
            "/de-de/": "Kopiert",
            "/es/": "Copiado",
            "/": "Copied",
        },
    },
    tabs: {
        // https://jhildenbiddle.github.io/docsify-tabs/#/
        persist: true, // default
        sync: true, // default
        theme: "classic", // default
        tabComments: true, // default
        tabHeadings: true, // default
    },
    timeUpdater: {
        text: ">Last Modify: {docsify-updated}",
        formatUpdated: "{YYYY}/{MM}/{DD}",
    },
    plugins: [
        function (hook, vm) {
            hook.beforeEach(function (html) {
                if (/githubusercontent\.com/.test(vm.route.file)) {
                    url = vm.route.file
                        .replace("raw.githubusercontent.com", "github.com")
                        .replace(/\/gh-pages/, "/blob/gh-pages");
                } else if (/jsdelivr\.net/.test(vm.route.file)) {
                    url = vm.route.file
                        .replace("cdn.jsdelivr.net/gh", "github.com")
                        .replace("@gh-pages", "/blob/gh-pages");
                } else {
                    url = `https://github.com/${GIT_SRC}/blob/gh-pages/${vm.route.file}`;
                }
                var editHtml = "[:memo: Edit Document](" + url + ")\n";
                return editHtml + html;
            });
        },
    ],
};