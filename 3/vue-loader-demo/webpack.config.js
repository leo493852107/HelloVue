/**
 * Created by leo on 11/01/2017.
 */

module.exports = {
    entry: './main.js',

    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test:/\.vue$/, loader:'vue'},
            {test:/\.js$/, loader:'babel', exclude:/node_modules/}
        ]
    },

    babel: {
        presets:['es2015'],
        plugins:['transform-runtime']
    }
};