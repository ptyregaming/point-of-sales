import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'API-keynya',
  authDomain: 'domainnya',
  databaseURL: 'database-urlnya',
  projectId: 'project-url',
  storageBucket: 'storage_bucket',
  messagingSenderId: 'message-sender-id',
  appId: 'app-id',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };