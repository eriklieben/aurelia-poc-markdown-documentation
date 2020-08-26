var markdownIt = require('markdown-it');

module.exports = function (source) {
  
    this.cacheable();

    var parser = new markdownIt('default', {
        highlight: (text, lang) => {
        if (lang !== 'aurelia-story') {
            return text;
        }
        return `<pre></pre><p>Code usage:</p><pre><code class="language-html">${ parser.utils.escapeHtml(text) }</code></pre>` + 
        `<p>Component view:</p><import from="./story-inspector"></import><story-inspector>${text}</story-inspector>`;
        },
        html: true
    });
    return parser.render(source);
}