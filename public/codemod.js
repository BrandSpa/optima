var fs = require('fs');
var exec = require('child_process').exec;

var folder = __dirname + '/app/views/';

fs
.readdir(folder, function(err, files) {
  files.map(function(file) {

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/arrow-function.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/no-vars.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/object-shorthand.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/template-literals.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/unquote-properties.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/use-strict.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

    exec('jscodeshift --inline-single-expressions=true -t js-codemod/transforms/rm-requires.js ' + folder + file , function(error, stdout, stderr) {
      console.log(error, stdout, stderr);
    });

  });
});
