/*
 * This default syntax highligher color
 * scheme is based on Solarized theme from
 * `react-syntax-highlighter` package (for Prism).
 */

// Base color
const textColor = '#4d4d4c'

// Gray for comments
const commentColor = '#818181'

// Indigo blue
const entityColor = '#6582C9'

// Green
const keywordColor = '#718c00'

// Trinidad red
const operatorColor = '#CA4D26'

const syntaxTheme = {
  hljs: {
    color: textColor
  },
  comment: {
    color: commentColor
  },
  prolog: {
    color: commentColor
  },
  doctype: {
    color: commentColor
  },
  cdata: {
    color: commentColor
  },
  property: {
    color: entityColor
  },
  tag: {
    color: entityColor
  },
  boolean: {
    color: entityColor
  },
  number: {
    color: entityColor
  },
  constant: {
    color: entityColor
  },
  symbol: {
    color: entityColor
  },
  deleted: {
    color: entityColor
  },
  function: {
    color: entityColor
  },
  selector: {
    color: keywordColor
  },
  'attr-name': {
    color: keywordColor
  },
  string: {
    color: keywordColor
  },
  char: {
    color: keywordColor
  },
  builtin: {
    color: keywordColor
  },
  url: {
    color: keywordColor
  },
  inserted: {
    color: keywordColor
  },
  atrule: {
    color: keywordColor
  },
  'attr-value': {
    color: keywordColor
  },
  keyword: {
    color: keywordColor
  },
  regex: {
    color: operatorColor
  },
  variable: {
    color: operatorColor
  },
  operator: {
    color: operatorColor
  }
}

export default syntaxTheme
