module.exports = {
    presets: [ "@babel/preset-env", "@babel/preset-react" ],
    plugins: [
        ["@babel/plugin-transform-runtime",{
            "absoluteRuntime": false,
            "corejs": false,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }],//编译async await
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
        "@babel/plugin-transform-arrow-functions"
    ]
}