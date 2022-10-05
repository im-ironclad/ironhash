/**
 * This is unused for now, stripping out SVG Sprite things in favor of inline
 */

/**
 * Require packages
 */
const { src, dest, series } = require('gulp'),
  rename = require('gulp-rename'),
  svgstore = require('gulp-svgstore');

/**
 * Directory Config
 */
const dirConfig = {
  images: {
    src: './src/images/',
    dist: './public/assets/images/',
  }
};

/**
 * Tasks:
 * 
 * - SVGSprite
 */

/**
 * SVGSPRITE
 *
 * Combine all svgs in target directory into a single svg spritemap.
 */
function svgSprite() {
  return src([
      dirConfig.images.src + 'svg/*.svg'
    ])
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .on('error', function(err) { displayError(err); })
    .pipe(dest(dirConfig.images.dist + 'svg/'));
}
exports.svgSprite = series(svgSprite);
