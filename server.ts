import "https://deno.land/x/dotenv/load.ts";
import { router } from "https://crux.land/api/get/dtDGn.ts";
import { makeTrade } from "./makeTrade.ts";

const handler = router({
  "POST@/": (req) => makeTrade(req),
});

const wlIPs = ["52.89.214.238", "34.212.75.30", "54.218.53.128", "52.32.178.7"];
let cooledOff = true
const serveHttp = async (conn: Deno.Conn) => {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    if (
      wlIPs.findIndex(
        (el) => el === requestEvent.request.headers.get("x-forwarded-for")
      )
     && cooledOff === true) {
      const response = handler(requestEvent.request, conn);
      requestEvent.respondWith(response);
      cooledOff = false; 
      setTimeout(() => cooledOff = true, 5000) // Starts a cooldown period before the next trade can be submitted
    } else {
      requestEvent.respondWith(new Response(undefined, { status: 400})) // Return 400 if cooldown hasn't passed

    }
  }
};
const server = Deno.listen({ port: 3000 });
for await (const conn of server) {
  serveHttp(conn);
}
