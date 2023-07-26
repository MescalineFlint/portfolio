import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/script/`,
        css: `${buildFolder}/style/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        scss: `${srcFolder}/style/*.scss`,
        html: `${srcFolder}/html/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        js: `${srcFolder}/script/*.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        scss: `${srcFolder}/style/**/*.scss`,
        html: `${srcFolder}/html/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        js: `${srcFolder}/script/**/*.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}