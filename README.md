# inmemdb-client

> A client to communicate with [inmemdb](https://github.com/mkhstar/inmemdb) server

[![NPM](https://img.shields.io/npm/v/inmemdb-client.svg)](https://www.npmjs.com/package/inmemdb-client) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

#### npm

```sh
$ npm install --save inmemdb-client
```


## Usage

inmemdb-client exposes all the api used for communicating with [inmemdb](https://github.com/mkhstar/inmemdb)

All requests return a promise of a value found in the result. If an error occurs (eg. invalid parameters), the promise rejects with the specific error message

```javascript
    // Instantiate inmemdb
    const Client = require('inmemdb-client');
    const inmemdb = new Client('127.0.0.1', '9005');


    // Make requests
    (async () => {
        await inmemdb.set('name', 'musah');

        const result = await inmemdb.get('name');

        console.log(result) // logs musah to the console
    })();

```


## API
```typescript
    ping(): Promise<"PONG">;
    get(key: string): Promise<string>;
    set(key: string, value: string): Promise<"OK">;
    setex(key: string, seconds: number, value: string): Promise<"OK">;
    expire(key: string, seconds: number): Promise<"OK">;
    ttl(key: string): Promise<number>;
    del(key: string): Promise<"OK">;
    sadd(setName: string, value: string): Promise<"OK">;
    smembers(setName: string): Promise<Array<string>>;
    rpush(listName: string, value: string): Promise<"OK">;
    lpush(listName: string, value: string): Promise<"OK">;
    lrange(listName: string, startIndex: number, endIndex: number): Promise<Array<string>>;
    lpop(listName: string): Promise<string>;
    llen(listName: string): Promise<number>;

```


