# HTML ELEMENTS 

### What is target attribute ? 
<p>The target property of the HTML Anchor Element interface is a string that indicates where to display the linked resource.</p>
<ul>
  <li><strong>_self:</strong> The current browsing context. (Default)</li>
  <li><strong>_blank:</strong> Usually a new tab, but users can configure browsers to open a new window instead.</li>
  <li><strong>_parent:</strong> The parent browsing context of the current one. If no parent, behaves as <code>_self</code>.</li>
  <li><strong>_top:</strong> The topmost browsing context. To be specific, this means the "highest" context that's an ancestor of the current one. If no ancestors, behaves as<code>_self</code>.</li>
</ul>

### How can we use anchor tag for bookmark in website ?
<p>To create a bookmark - first create the bookmark, then add a link to it.</p>
<p>When the link is clicked, the page will scroll down or up to the location with the bookmark.</p>
<br>
<p>First, use the id attribute to create a bookmark</p>
<code>h4 id="C4">Chapter 4 h4</code>
<p>Then, add a link to the bookmark, from within the same page:</p>
<code> a href="#C4">Jump to Chapter 4 a</code>

### Why should be use <code>strong</code> istead of <code>b</code> ?
<p>The HTML <code>strong</code> tag is used semantically to emphasize importance, conveying meaning to both sighted and screen readers. 
  In contrast, the <code>b</code> tag is solely for visual presentation, making text bold without conveying significance.</p>

### What is inline-block property ?
<ul>
  <li>Compared to <code>display: inline</code>, the major difference is that <code>display: inline-block</code> allows to set a width and height on the element.</li>
  <li>Also, with <code>display: inline-block</code>, the top and bottom margins/paddings are respected, but with <code>display: inline</code> they are not.</li>
  <li>Compared to <code>display: block</code>, the major difference is that <code>display: inline-block</code> does not add a line-break after the element, so the element can sit next to other elements.</li>
</ul>

### How to convert inline element to block element ?
<p>To change an Inline-level Element into a Block-level Element, you can use CSS property <code>display: block</code></p>

### How to convert block element to inline element ?
<p>To change an Block-level Element into a Inline-level Element, you can use CSS property <code>display: inline</code></p>

### <code>img</code> is which type of element ?
<p>They are <code>"inline block"</code> elements. This means that they flow inline like text, but also have a width and height like block elements.</p>

### Create a Nav Bar 
<p>The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.</p>
<br />
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Services</li>
  </ul>
</nav>

<p>Furthermore, we can use css properties to make it inline</p>

# Thank You !
