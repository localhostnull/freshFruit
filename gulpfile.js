var gulp = require('gulp');
var sass = require('gulp-sass');
var serverPath = "E:\\php\\WWW\\freshFruit";

gulp.task('copyindex',function(){
	gulp.src('index.html').pipe(gulp.dest('dist'));
})

gulp.task('copytoserver',function(){
	gulp.src('*.html').pipe(gulp.dest(serverPath));
})

gulp.task('sass',function(){
	gulp.src('*.scss').pipe(sass()).pipe(gulp.dest(serverPath+"\\css"));
})

gulp.task('copyimg',function(){
	gulp.src('img/*.{jpg,png}').pipe(gulp.dest(serverPath+"\\img"));
})

gulp.task('watchall',function(){
	gulp.watch('*.html',['copytoserver']);
	gulp.watch('img/**/*',['copyimg']);
	gulp.watch('*.scss',['sass']);
})
