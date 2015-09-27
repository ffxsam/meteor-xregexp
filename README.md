# XRegExp

XRegExp is an open source (MIT License) JavaScript library that provides augmented (and extensible!) regular expressions. You get new modern syntax and flags beyond what browsers support natively. XRegExp is also a regex utility belt with tools to make your client-side grepping and parsing easier, while freeing you from worrying about pesky cross-browser inconsistencies and things like manually manipulating `lastIndex` or slicing strings when tokenizing.

**XRegExp lets you write regexes like this:**

```javascript
// Using named capture and flag x (free-spacing and line comments)
date = XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n' +
               '(?<month> [0-9]{2} ) -?  # month \n' +
               '(?<day>   [0-9]{2} )     # day     ', 'x');
```

**And do cool stuff like this:**

```javascript
// Using named backreferences...
XRegExp.exec('2012-06-10', date).year;
// -> '2012'
XRegExp.replace('2012-06-10', date, '${month}/${day}/${year}');
// -> '06/10/2012'

// Finding matches within matches, while passing forward and returning specific backreferences
html = '<a href="http://xregexp.com/api/">XRegExp</a>' +
       '<a href="http://www.google.com/">Google</a>';
XRegExp.matchChain(html, [
  {regex: /<a href="([^"]+)">/i, backref: 1},
  {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
]);
// -> ['xregexp.com', 'www.google.com']
```

Check out more [usage examples on GitHub](https://github.com/slevithan/xregexp/blob/master/README.md).