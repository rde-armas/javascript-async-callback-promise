const button = document.getElementById('btn');

button.addEventListener("click", async function() {
    const module = await import('./mosule.js');
    console.log(module);
    module.hello();
});