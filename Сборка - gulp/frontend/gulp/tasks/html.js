import pug from 'gulp-pug';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';


export const html = () => {
  return app.gulp.src(app.path.src.html).
    pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      })
    )).
    pipe(pug({
      pretty: true,
      verbose: true
    })).
    pipe(
      app.plugins.if(
        app.isProd,
        webpHtmlNoSvg()
      )
    ).
    pipe(
      app.plugins.if(
        app.isProd,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json'
          }
        })
      )
    ).
    pipe(app.gulp.dest(app.path.build.html)).
    pipe(app.plugins.browserSync.stream())
}