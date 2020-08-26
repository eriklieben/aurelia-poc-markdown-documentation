var markdownIt = require('markdown-it');

module.exports = function (source) {
  
    this.cacheable();

    var parser = new markdownIt('default', {
        highlight: (text, lang) => {
        if (lang !== 'aurelia-story') {
            return text;
        }
        return `<pre></pre><p>Custom Element code usage:</p><pre><code class="language-html">${ parser.utils.escapeHtml(text) }</code></pre>` + 
        `<p>Custom Element view:</p><import from="./custom-element-inspector"></import><custom-element-inspector>${text}</custom-element-inspector>`;
        },
        html: true
    });
    return parser.render(source);
}