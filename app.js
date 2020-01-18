const [fs, url, path] = [require('fs'), require('url'), require('path')];

const root = path.resolve(process.argv[2] || '.');

const serverHandle = (req, res) => {
    const fileName = url.parse(req.url).pathname === '/' ? 'index.html' : url.parse(req.url).pathname;
    const filepath = path.join(root,'/src',fileName);
    console.log(`filepath : ${filepath}`)
    fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
            console.log(`200 ${req.url}`);
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        } else {
            console.log(`404 ${req.url}`);
            res.writeHead(404);
            res.end('404 Not Found');
        }
    })
}

module.exports = serverHandle