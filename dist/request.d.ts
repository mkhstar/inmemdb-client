interface Options {
    hostname: string;
    port: number;
}
export declare function request(command: Array<string>, options: Options): Promise<any>;
export {};
