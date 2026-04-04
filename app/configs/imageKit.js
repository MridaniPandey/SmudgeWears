// Install: npm install @imagekit/nodejs

import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export default client;