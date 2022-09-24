import { serve } from "https://deno.land/std@0.95.0/http/mod.ts?s=serve";
const s = serve({port:8000});
console.log("http://localhost:8000/");
for await (const req of s){
    req.respond({body:"Hello World\n"});
}

//Runs with command >deno run --allow-net simpleServer.ts<