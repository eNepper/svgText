'use strict';
const sharp = require('sharp');
const fs = require('fs');

let svgs = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 16" version="1.1"><text font-family="serif" font-size="12px" x="54" y="12" fill="#000000" text-anchor="middle" >Fancy Text</text></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 16" version="1.1"><text font-family="sans-serif" font-size="12px" x="54" y="12" fill="#000000" text-anchor="middle" >Fancy Text</text></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 16" version="1.1"><text font-family="DejaVuSans" font-size="12px" x="54" y="12" fill="#000000" text-anchor="middle" >Fancy Text</text></svg>'

];
(async function () {
    for (let [index, svg] of svgs.entries()) {
        await sharp(Buffer.from(svg))
            .toBuffer().then(buffer => {
                fs.writeFile(`img/${new Date().getTime()}_${index}.png`, buffer, (err) => { });
            });
    }
})();