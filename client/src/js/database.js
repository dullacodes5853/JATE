import { openDB } from 'idb';

const Intdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('database exists already');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('database created');
    },
  });

export const putDb = async (content) => {
  const jateDB = await openDB("jate", 1);
  const td = jateDB.transaction("jate", "readwrite");
  const sv = td.objectStore("jate");
  const request = sv.put({ jate: content });
  const res = await request;
  console.log("Data saved to database", res);
};

export const getDb = async () => {
  const jateDB = await openDB("jate", 1);
  const td = jateDB.transaction("jate", "readonly");
  const sv = td.objectStore("jate");
  const request = sv.getAll();
  const res = await request;
  console.log(res);
};

Intdb();
