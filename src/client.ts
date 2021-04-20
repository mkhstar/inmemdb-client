import { request } from "./request";

export class Client {
  constructor(
    private hostname: string = "127.0.0.1",
    private port: number = 9005
  ) {}

  get options() {
    return {
      hostname: this.hostname,
      port: this.port,
    };
  }

  ping(): Promise<"PONG"> {
    return request(["ping"], this.options);
  }

  get(key: string): Promise<string> {
    return request(["get", key], this.options);
  }

  set(key: string, value: string): Promise<"OK"> {
    return request(["set", key, value], this.options);
  }

  setex(key: string, seconds: number, value: string): Promise<"OK"> {
    return request(["setex", key, seconds.toString(), value], this.options);
  }

  expire(key: string, seconds: number): Promise<"OK"> {
    return request(["expire", key, seconds.toString()], this.options);
  }

  ttl(key: string): Promise<number> {
    return request(["ttl", key], this.options);
  }

  del(key: string): Promise<"OK"> {
    return request(["del", key], this.options);
  }

  sadd(setName: string, value: string): Promise<"OK"> {
    return request(["sadd", setName, value], this.options);
  }

  smembers(setName: string): Promise<Array<string>> {
    return request(["smembers", setName], this.options);
  }

  rpush(listName: string, value: string): Promise<"OK"> {
    return request(["rpush", listName, value], this.options);
  }

  lpush(listName: string, value: string): Promise<"OK"> {
    return request(["lpush", listName, value], this.options);
  }

  lrange(
    listName: string,
    startIndex: number,
    endIndex: number
  ): Promise<Array<string>> {
    return request(
      ["lrange", listName, startIndex.toString(), endIndex.toString()],
      this.options
    );
  }

  lpop(listName: string): Promise<string> {
    return request(["lpop", listName], this.options);
  }

  llen(listName: string): Promise<number> {
    return request(["llen", listName], this.options);
  }
}
