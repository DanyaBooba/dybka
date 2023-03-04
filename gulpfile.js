import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import cssmin from "gulp-cssmin";
import concatCss from "gulp-concat-css";
import autoprefixer from "gulp-autoprefixer";
import sync from "browser-sync";
sync.create();

// HTML

export const html = () => {
	return gulp
		.src("src/html/**/*.html")
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(gulp.dest("dist"));
};

// Styles

export const styles = () => {
	return gulp
		.src("src/css/*.css")
		.pipe(autoprefixer())
		.pipe(concatCss("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
};

// JavaScript

export const javascript = () => {
	return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
};

// Fonts

export const fonts = () => {
	return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
};

// Images

export const images = () => {
	return gulp.src("src/img/**/*").pipe(gulp.dest("dist/img"));
};

// More

export const more = () => {
	return gulp.src("src/more/**/*").pipe(gulp.dest("dist"));
};

// Server

export const server = () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: "dist",
		},
	});
};

// Watch

export const watch = () => {
	gulp.watch("src/**/*.html", gulp.series(html));
	gulp.watch("src/**/*.css", gulp.series(styles));
	gulp.watch("src/**/*.js", gulp.series(javascript));
	gulp.watch(
		["src/more/**/*", "src/fonts/**/*", "src/img/**/*"],
		gulp.parallel(fonts, images, more)
	);
};

// Default

export default gulp.series(
	gulp.parallel(html, styles, javascript, fonts, images, more),
	gulp.parallel(watch, server)
);
