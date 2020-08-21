import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
const img = await qrcode('https://frontendhelp.me/ru')

const encoder = new TextEncoder();

const data = encoder.encode(`<img src="${img}"/>`)

await Deno.writeFile('data.json', new TextEncoder().encode(JSON.stringify(data))) 


await Deno.writeFile('help.html', data)