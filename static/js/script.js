const sb = document.getElementById('searchBox');
const table = document.getElementById('todoTable');

sb.addEventListener('input', function () {
    const q = encodeURIComponent(this.value.trim());
    fetch(`/?query=${q}`, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then(r => r.text())
        .then(html => {
            // Extract only <tbody> content
            const bodyContent = html.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/)[1];
            table.innerHTML = bodyContent;
        });
});