var fs = require('fs');

function build() {
    var arr = fs.readdirSync('./common');
    var fullName;
    var write;

    fs.writeFileSync('./public/common.js', '');

    arr.forEach(function (v) {
        if (v.match(/\.js$/)) {
            fullName = './common/' + v;
            write = '// ' + fullName + ' start \n\n' + fs.readFileSync(fullName) + '\n// ' + fullName + ' end \n\n';

            fs.appendFileSync('./public/common.js', write);
        }
    });
    
    console.log('\x1b[32m%s\x1b[0m', 'Сборка завершена', new Date());
};

build();


fs.watch('./common', function (eventType, filename) {
    if (filename.match(/\.js$/)) {
        console.log('\x1b[33m%s\x1b[0m', filename);
        
        build();

        return;
    }
});
