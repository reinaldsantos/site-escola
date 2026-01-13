// Cole este código no Console do Navegador (F12) para limpar cache
console.log("🔧 Limpando cache do navegador...");

// Limpar cache de CSS e JS
caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
});

// Forçar recarregamento de CSS
let links = document.getElementsByTagName('link');
for (let link of links) {
    if (link.rel === 'stylesheet') {
        let href = link.href.split('?')[0];
        link.href = href + '?v=' + new Date().getTime();
    }
}

// Forçar recarregamento de scripts
let scripts = document.getElementsByTagName('script');
for (let script of scripts) {
    if (script.src) {
        let src = script.src.split('?')[0];
        script.src = src + '?v=' + new Date().getTime();
    }
}

console.log("✅ Cache limpo! Recarregue a página (Ctrl+R)");
alert("Cache limpo! Recarregue a página (Ctrl+R)");
