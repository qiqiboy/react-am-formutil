const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const nodeResolve = require('rollup-plugin-node-resolve');
const sourceMaps = require('rollup-plugin-sourcemaps');
const filesize = require('rollup-plugin-filesize');
const copy = require('rollup-plugin-copy');
const { terser } = require('rollup-plugin-terser');

process.env.NODE_ENV = 'production';

function createConfig(env, module) {
    const isProd = env === 'production';

    return {
        input: 'compiled/index.js',
        external:
            module === 'umd'
                ? ['react', 'prop-types', 'react-formutil', 'antd-mobile']
                : id => !id.startsWith('.') && !path.isAbsolute(id),
        output: {
            file: `dist/react-antm-formutil.${module}.${env}.js`,
            format: module,
            name: 'ReactAntmFormutil',
            exports: 'named',
            sourcemap: !isProd,
            globals: {
                react: 'React',
                'prop-types': 'PropTypes',
                'react-formutil': 'ReactFormutil',
                'antd-mobile': 'AntdMobile'
            }
        },
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify(env)
            }),
            nodeResolve(),
            commonjs({
                include: /node_modules/
            }),
            sourceMaps(),
            isProd &&
                terser({
                    sourcemap: true,
                    output: { comments: false },
                    compress:
                        module === 'umd'
                            ? {
                                  warnings: false,
                                  comparisons: false,
                                  keep_infinity: true
                              }
                            : false,
                    warnings: false,
                    mangle: {
                        // https://github.com/ant-design/babel-plugin-import/issues/282
                        reserved: [
                            'List',
                            'Modal',
                            'Checkbox',
                            'DatePicker',
                            'ImagePicker',
                            'InputItem',
                            'Picker',
                            'PickerView',
                            'Radio',
                            'Range',
                            'Slider',
                            'Switch',
                            'TextareaItem'
                        ]
                    },
                    ecma: 5,
                    ie8: false,
                    toplevel: module !== 'umd'
                }),
            filesize(),
            copy({
                targets: [`npm/index.${module}.js`],
                verbose: true
            })
        ].filter(Boolean)
    };
}

module.exports = [
    createConfig('development', 'cjs'),
    createConfig('production', 'cjs'),
    createConfig('development', 'umd'),
    createConfig('production', 'umd'),
    createConfig('development', 'esm'),
    createConfig('production', 'esm')
];
