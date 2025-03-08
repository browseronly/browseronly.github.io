function build_url() {
    var url = encodeURI(decodeURI(document.querySelector('#url').value));
    if (url === "" || url.indexOf("http") === -1) {
        document.getElementById("b_url").innerHTML = `Error: 输入的不是链接或者未加http请求头！`;
    } else {
        var generatedUrl = document.location.href + "api/?url=" + url;
        document.getElementById("b_url").innerHTML = `
            <a href="${generatedUrl}" target="_blank">${generatedUrl}</a>
            <button onclick="copyToClipboard('${generatedUrl}')">复制</button>
        `;
    }
}

function copyToClipboard(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
            alert('URL 已复制到剪贴板！');
        }, function(err) {
            alert('复制 URL 失败: ' + err);
        });
    } else {
        alert('您的浏览器不支持复制到剪贴板。');
    }
}