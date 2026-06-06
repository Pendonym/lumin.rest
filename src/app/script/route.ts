export function GET() {
  return new Response(
    `loadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/1e8ed553780d0658105a816d5a17b100.lua"))()`,
    {
      headers: { "Content-Type": "text/plain" },
    },
  );
}
