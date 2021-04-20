export declare class Client {
    private hostname;
    private port;
    constructor(hostname?: string, port?: number);
    get options(): {
        hostname: string;
        port: number;
    };
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
}
