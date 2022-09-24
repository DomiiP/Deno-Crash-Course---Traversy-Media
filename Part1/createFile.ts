const encoder = new TextEncoder();

const greetText = encoder.encode('Hello World\nMy name is Domen');

await Deno.writeFile('greet.txt', greetText);

//Shows errors on my screen, but works with deno run...