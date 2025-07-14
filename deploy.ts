   import { serveDir } from "https://deno.land/std@0.140.0/http/file_server.ts";
   
   Deno.serve((req) => {
     return serveDir(req, {
      
       showDirListing: true,
       enableCors: true
     });
   });
