// scripts/set-env.ts
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' }); // or '.env.local' if used locally

const env = process.env.ENV || 'local';

if(process.env.FIREBASE_API_KEY === undefined){
  dotenv.config({ path: '.env.local' });
}

let targetFile = 'src/environments/environment.ts'; // default fallback
if (env === 'test') {
  targetFile = 'src/environments/environment.test.ts';
} else if (env === 'prod') {
  targetFile = 'src/environments/environment.prod.ts';
}

const content = `
export const environment = {
  production: ${env === 'prod'},
  firebaseConfig: {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
    appId: "${process.env.FIREBASE_APP_ID}"
  }
};
`;

fs.writeFileSync(targetFile, content.trim());
console.log(`✅ Environment file written to ${targetFile}`);
