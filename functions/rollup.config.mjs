import esbuild from 'rollup-plugin-esbuild';
import mainFile from './package.json' assert { type: 'json' };

const mainEntrypoint = mainFile.main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild(),
    ],
    output: [
      {
        file: `${mainEntrypoint}.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
];
