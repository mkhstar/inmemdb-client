"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const request_1 = require("./request");
class Client {
    constructor(hostname = "127.0.0.1", port = 9005) {
        this.hostname = hostname;
        this.port = port;
    }
    get options() {
        return {
            hostname: this.hostname,
            port: this.port,
        };
    }
    ping() {
        return request_1.request(["ping"], this.options);
    }
    get(key) {
        return request_1.request(["get", key], this.options);
    }
    set(key, value) {
        return request_1.request(["set", key, value], this.options);
    }
    setex(key, seconds, value) {
        return request_1.request(["setex", key, seconds.toString(), value], this.options);
    }
    expire(key, seconds) {
        return request_1.request(["expire", key, seconds.toString()], this.options);
    }
    ttl(key) {
        return request_1.request(["ttl", key], this.options);
    }
    del(key) {
        return request_1.request(["del", key], this.options);
    }
    sadd(setName, value) {
        return request_1.request(["sadd", setName, value], this.options);
    }
    smembers(setName) {
        return request_1.request(["smembers", setName], this.options);
    }
    rpush(listName, value) {
        return request_1.request(["rpush", listName, value], this.options);
    }
    lpush(listName, value) {
        return request_1.request(["lpush", listName, value], this.options);
    }
    lrange(listName, startIndex, endIndex) {
        return request_1.request(["lrange", listName, startIndex.toString(), endIndex.toString()], this.options);
    }
    lpop(listName) {
        return request_1.request(["lpop", listName], this.options);
    }
    llen(listName) {
        return request_1.request(["llen", listName], this.options);
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map