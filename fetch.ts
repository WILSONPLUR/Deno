window.addEventListener('load', () => {
    console.log('Load')
})

const url = Deno.args[0]
console.log('Making request to url:', url)
const rs = await fetch(url)
const data = await rs.json();

console.log(data)