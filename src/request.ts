import http from "http";

interface Options {
  hostname: string;
  port: number;
}

export function request(
  command: Array<string>,
  options: Options
): Promise<any> {
  const data = JSON.stringify({
    outputFormat: "json",
    command,
  });

  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        ...options,
        method: "POST",
        path: "/",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
        },
      },
      (res) => {
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

            if (status === "success") resolve(result);
            resolve(error);
          } catch (err) {
            reject({
              error: "(error) Failed to parse response",
            });
          }
        });
      }
    );

    req.on("error", (error) => {
      reject({
        error: error.toString(),
      });
    });

    req.write(data)
  });
}
