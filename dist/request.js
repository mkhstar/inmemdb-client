"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const http_1 = __importDefault(require("http"));
function request(command, options) {
    const data = JSON.stringify({
        outputFormat: "json",
        command,
    });
    return new Promise((resolve, reject) => {
        const req = http_1.default.request(Object.assign(Object.assign({}, options), { method: "POST", path: "/", headers: {
                "Content-Type": "application/json",
                "Content-Length": data.length,
            } }), (res) => {
            const { statusCode } = res;
            let chunks = "";
            res.on("data", (d) => {
                chunks += d;
            });
            res.on("end", () => {
                if (statusCode && statusCode >= 400)
                    return reject({ error: "Server Error" });
                try {
                    const { status, result, error } = JSON.parse(chunks);
                    if (status === "success")
                        resolve(result);
                    resolve(error);
                }
                catch (err) {
                    reject({
                        error: "(error) Failed to parse response",
                    });
                }
            });
        });
        req.on("error", (error) => {
            reject({
                error: error.toString(),
            });
        });
        req.write(data);
    });
}
exports.request = request;
//# sourceMappingURL=request.js.map