module.exports = (baseConfig, env) => {
    const isProduction = env.NODE_ENV === "production";
    return {
        ...baseConfig,
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        devtool: isProduction ? "" : "source-map",
        module: {
            ...baseConfig.module,
            rules: [
                {
                    // Include ts, tsx, and js files.
                    test: /\.(tsx?)|(js)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
            ],
        },
    }
};
