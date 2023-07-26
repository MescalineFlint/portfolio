import { config } from '../config/ftp.js'
import vinylFTP from 'vinyl-ftp'
import util from 'gulp-util'
import zipPlugin from 'gulp-zip'

export const ftp = () => {
  config.log = util.log
  const ftpConnect = vinylFTP.create(config)
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`).
    pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'FTP',
        message: 'Error: <%= error.message %>',
      }),
    )).
    pipe(ftpConnect.dest(`${app.path.ftp}/${app.path.rootFolder}`))
}