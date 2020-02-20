const Bundler = require("parcel-bundler");
const Path = require("path");

const entryFiles = Path.join(__dirname, "../index.html");

const options = {
    outDir: "./dist", // The out directory to put the build files in, defaults to dist
    outFile: "index.html", // The name of the outputFile
    publicUrl: "./", // The url to serve on, defaults to '/'
    watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
    cache: false, // Enabled or disables caching, defaults to true
    minify: true, // Minify files, enabled if process.env.NODE_ENV === 'production'
    target: "browser", // Browser/node/electron, defaults to browser
    logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
    hmr: false, // Enable or disable HMR while watching
    sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
    detailedReport: true, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
    autoInstall: true // Enable or disable auto install of missing dependencies found during bundling
};

(async function() {
    console.clear();
    const bundler = new Bundler(entryFiles, options);
    const bundle = await bundler.bundle();
})();
