var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function a(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return v(l2, f2, t2, o2, null);
}
function v(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
  return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function y() {
  return { current: null };
}
function p(n2) {
  return n2.children;
}
function d(n2, l2) {
  this.props = n2, this.context = l2;
}
function _(n2, l2) {
  if (null == l2)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k(n2);
  }
}
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s({}, t2)).__v = t2.__v + 1, j(r2, t2, i2, l2.__n, void 0 !== r2.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && k(t2)));
    });
}
function w(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x = i2 && i2.__k || e, C2 = x.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j(n2, k2, d2 = d2 || f, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m(k2, s2, n2) : s2 = A(n2, k2, d2, x, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x[h2] && ("function" == typeof u2.type && null != x[h2].__e && x[h2].__e == u2.__d && (u2.__d = _(i2, h2 + 1)), N(x[h2], x[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M(w2[h2], w2[++h2], w2[++h2]);
}
function m(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m(i2, l2, u2) : A(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function A(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (void 0 !== l2.__d)
    r2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return void 0 !== r2 ? r2 : t2.nextSibling;
}
function C(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
}
function $(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x, A2, C2, $2, H2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof H2) {
        if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x) : (u2.__c = h2 = new d(g2, x), h2.constructor = H2, h2.render = O), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == H2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u2.__v === i2.__v) {
            h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s(s({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a2 && a2.type === p && null == a2.key ? a2.props.children : a2, w(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (a2 = l.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i2);
  }
}
function z(n2, u2) {
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i2, t2, o2, r2, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r2) {
    for (; k2 < r2.length; k2++)
      if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r2[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n.call(l2.childNodes), h2 = (y2 = i2.props || f).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r2)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r2, e2, r2 ? r2[0] : i2.__k && _(i2, 0), c2), null != r2)
      for (k2 = r2.length; k2--; )
        null != r2[k2] && a(r2[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, "function" != typeof n2.type);
  i2 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function P(u2, i2, t2) {
  var o2, r2, e2;
  l.__ && l.__(u2, i2), r2 = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j(i2, u2 = (!o2 && t2 || i2).__k = h(p, null, [u2]), r2 || f, f, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z(e2, u2);
}
n = e.slice, l = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// util.ts
function hex(i2, digits = 2) {
  return i2.toString(16).padStart(digits, "0");
}

// memory.tsx
var Number = class extends d {
  render() {
    return /* @__PURE__ */ h("span", {
      class: "clicky",
      title: "show in memory dump",
      onMouseOver: () => {
        this.props.highlightMemory(this.props.children);
      },
      onClick: (event) => {
        this.props.showMemory(this.props.children);
      }
    }, this.props.text ? this.props.text : hex(this.props.children, this.props.digits));
  }
};
var Memory = class extends d {
  render() {
    let rows = [];
    const base = this.props.base & ~15;
    if (base >= 0) {
      for (let rowAddr = 0; rowAddr < 256; rowAddr += 16) {
        if (base + rowAddr >= this.props.mem.byteLength)
          break;
        const row = [];
        row.push(hex(base + rowAddr, 8));
        for (let offset = 0; offset < 16; offset++) {
          const addr = base + rowAddr + offset;
          if (addr >= this.props.mem.byteLength)
            break;
          if (offset % 4 === 0)
            row.push("  ");
          else
            row.push(" ");
          let value = hex(this.props.mem.getUint8(addr));
          if (addr === this.props.highlight) {
            value = /* @__PURE__ */ h("span", {
              class: "highlight"
            }, value);
          }
          row.push(value);
        }
        rows.push(/* @__PURE__ */ h("div", null, row));
      }
    }
    return /* @__PURE__ */ h("section", null, /* @__PURE__ */ h("div", {
      style: { display: "flex", justifyContent: "center" }
    }, /* @__PURE__ */ h("button", {
      onClick: () => this.props.jumpTo(this.props.base - 256)
    }, "<"), /* @__PURE__ */ h("input", {
      size: 8,
      value: hex(this.props.base, 8)
    }), /* @__PURE__ */ h("button", {
      onClick: () => this.props.jumpTo(this.props.base + 256)
    }, ">")), /* @__PURE__ */ h("code", null, rows));
  }
};

// code.tsx
var Code = class extends d {
  render() {
    const instrs = this.props.instrs.map((instr) => {
      let code = instr.code.map(({ kind, text }) => {
        switch (kind) {
          case "FunctionAddress":
          case "LabelAddress":
          case "Number": {
            const addr = parseInt(text, 16);
            let label = this.props.labels.get(addr);
            if (label) {
              label = ` ${label}`;
            }
            return /* @__PURE__ */ h(p, null, /* @__PURE__ */ h(Number, {
              text,
              ...this.props
            }, addr), label);
          }
          default:
            return text;
        }
      });
      return /* @__PURE__ */ h("tr", null, /* @__PURE__ */ h("td", {
        style: { width: "10ch" }
      }, /* @__PURE__ */ h("span", {
        class: "clicky",
        title: "run to this address",
        onClick: (event) => {
          this.props.runTo(instr.addr);
        }
      }, hex(instr.addr, 8))), /* @__PURE__ */ h("td", {
        title: `${instr.bytes} (${instr.ops.join(",")})`
      }, code));
    });
    return /* @__PURE__ */ h("section", {
      class: "code"
    }, /* @__PURE__ */ h("code", {
      class: "disassembly"
    }, /* @__PURE__ */ h("table", null, instrs)));
  }
};

// mappings.tsx
var Mappings = class extends d {
  render() {
    const rows = this.props.mappings.map((mapping) => {
      let className;
      const highlight = this.props.highlight;
      if (highlight !== void 0 && highlight >= mapping.addr && highlight < mapping.addr + mapping.size) {
        className = "highlight";
      }
      return /* @__PURE__ */ h("tr", {
        class: className
      }, /* @__PURE__ */ h("td", {
        style: { width: "10ch" }
      }, hex(mapping.addr, 8)), /* @__PURE__ */ h("td", {
        style: { width: "8ch" }
      }, hex(mapping.size)), /* @__PURE__ */ h("td", null, mapping.desc));
    });
    return /* @__PURE__ */ h("section", null, /* @__PURE__ */ h("code", null, /* @__PURE__ */ h("table", null, /* @__PURE__ */ h("thead", null, /* @__PURE__ */ h("tr", null, /* @__PURE__ */ h("td", null, "addr"), /* @__PURE__ */ h("td", null, "size"), /* @__PURE__ */ h("td", null, "desc"))), rows)));
  }
};

// registers.tsx
var Registers = class extends d {
  render() {
    const { regs } = this.props;
    return /* @__PURE__ */ h("section", null, /* @__PURE__ */ h("code", null, /* @__PURE__ */ h("div", null, "eax\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.eax), /* @__PURE__ */ h("br", null), "ebx\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.ebx), /* @__PURE__ */ h("br", null), "ecx\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.ecx), /* @__PURE__ */ h("br", null), "edx\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.edx), /* @__PURE__ */ h("br", null)), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("div", null, "eip\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.eip), /* @__PURE__ */ h("br", null), "esp\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.esp), /* @__PURE__ */ h("br", null), "ebp\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.ebp), /* @__PURE__ */ h("br", null), "esi\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.esi), /* @__PURE__ */ h("br", null), "edi\xA0", /* @__PURE__ */ h(Number, {
      digits: 8,
      ...this.props
    }, regs.edi), /* @__PURE__ */ h("br", null)), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("div", null, "cs\xA0", /* @__PURE__ */ h(Number, {
      digits: 4,
      ...this.props
    }, regs.cs), /* @__PURE__ */ h("br", null), "ds\xA0", /* @__PURE__ */ h(Number, {
      digits: 4,
      ...this.props
    }, regs.ds), /* @__PURE__ */ h("br", null), "es\xA0", /* @__PURE__ */ h(Number, {
      digits: 4,
      ...this.props
    }, regs.es), /* @__PURE__ */ h("br", null), "fs\xA0", /* @__PURE__ */ h(Number, {
      digits: 4,
      ...this.props
    }, regs.fs), /* @__PURE__ */ h("br", null), "gs\xA0", /* @__PURE__ */ h(Number, {
      digits: 4,
      ...this.props
    }, regs.gs), /* @__PURE__ */ h("br", null), "ss\xA0", /* @__PURE__ */ h(Number, {
      digits: 4,
      ...this.props
    }, regs.ss), /* @__PURE__ */ h("br", null)), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("div", null, "flags\xA0", hex(regs.flags), /* @__PURE__ */ h("br", null), regs.flags_str())));
  }
};

// stack.tsx
var Stack = class extends d {
  render() {
    const { x86 } = this.props;
    const esp = x86.esp;
    const memory = x86.memory();
    const rows = [];
    for (let addr = esp - 16; addr < esp + 32; addr += 4) {
      const value = memory.getUint32(addr, true);
      let label = this.props.labels.get(addr);
      if (label) {
        label = ` ${label}`;
      }
      let row = /* @__PURE__ */ h("div", null, /* @__PURE__ */ h(Number, {
        digits: 8,
        ...this.props
      }, addr), "\xA0", /* @__PURE__ */ h(Number, {
        digits: 8,
        ...this.props
      }, value), label);
      if (addr === esp) {
        row = /* @__PURE__ */ h("b", null, row);
      }
      rows.push(row);
    }
    return /* @__PURE__ */ h("section", null, /* @__PURE__ */ h("code", null, rows));
  }
};

// tabs.tsx
var Tabs = class extends d {
  constructor(props) {
    super(props);
    __publicField(this, "state", { cur: "" });
    this.state = { cur: Object.keys(props.tabs)[0] };
  }
  render() {
    const tabs = this.props.tabs;
    return /* @__PURE__ */ h("div", {
      style: this.props.style
    }, /* @__PURE__ */ h("div", {
      class: "tabs-strip"
    }, Object.keys(tabs).map((name) => {
      let button = /* @__PURE__ */ h("span", {
        class: "clicky",
        onClick: () => this.setState({ cur: name })
      }, name);
      if (name === this.state.cur) {
        button = /* @__PURE__ */ h("b", null, button);
      }
      return /* @__PURE__ */ h(p, null, "\xA0|\xA0", button);
    })), tabs[this.state.cur]);
  }
};

// ../wasm/pkg/snippets/wasm-4b0f351a8e6eeb46/inline0.js
function mem(memory, offset) {
  return new DataView(memory.buffer, offset);
}

// ../wasm/pkg/wasm.js
var wasm;
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachedUint8Memory0 = new Uint8Array();
function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
var WASM_VECTOR_LEN = 0;
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
var cachedInt32Memory0 = new Int32Array();
function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
function new_x86(host) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.new_x86(retptr, addHeapObject(host));
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return X86.__wrap(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
var SurfaceOptions = class {
  static __wrap(ptr) {
    const obj = Object.create(SurfaceOptions.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_surfaceoptions_free(ptr);
  }
  get width() {
    const ret = wasm.__wbg_get_surfaceoptions_width(this.ptr);
    return ret >>> 0;
  }
  set width(arg0) {
    wasm.__wbg_set_surfaceoptions_width(this.ptr, arg0);
  }
  get height() {
    const ret = wasm.__wbg_get_surfaceoptions_height(this.ptr);
    return ret >>> 0;
  }
  set height(arg0) {
    wasm.__wbg_set_surfaceoptions_height(this.ptr, arg0);
  }
  get primary() {
    const ret = wasm.__wbg_get_surfaceoptions_primary(this.ptr);
    return ret !== 0;
  }
  set primary(arg0) {
    wasm.__wbg_set_surfaceoptions_primary(this.ptr, arg0);
  }
};
var X86 = class {
  static __wrap(ptr) {
    const obj = Object.create(X86.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_x86_free(ptr);
  }
  load_exe(buf) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passArray8ToWasm0(buf, wasm.__wbindgen_malloc);
      const len0 = WASM_VECTOR_LEN;
      wasm.x86_load_exe(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      var r3 = getInt32Memory0()[retptr / 4 + 3];
      var ptr1 = r0;
      var len1 = r1;
      if (r3) {
        ptr1 = 0;
        len1 = 0;
        throw takeObject(r2);
      }
      return getStringFromWasm0(ptr1, len1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(ptr1, len1);
    }
  }
  memory() {
    const ret = wasm.x86_memory(this.ptr);
    return takeObject(ret);
  }
  get eax() {
    const ret = wasm.x86_eax(this.ptr);
    return ret >>> 0;
  }
  get ebx() {
    const ret = wasm.x86_ebx(this.ptr);
    return ret >>> 0;
  }
  get ecx() {
    const ret = wasm.x86_ecx(this.ptr);
    return ret >>> 0;
  }
  get edx() {
    const ret = wasm.x86_edx(this.ptr);
    return ret >>> 0;
  }
  get esp() {
    const ret = wasm.x86_esp(this.ptr);
    return ret >>> 0;
  }
  get ebp() {
    const ret = wasm.x86_ebp(this.ptr);
    return ret >>> 0;
  }
  get esi() {
    const ret = wasm.x86_esi(this.ptr);
    return ret >>> 0;
  }
  get edi() {
    const ret = wasm.x86_edi(this.ptr);
    return ret >>> 0;
  }
  get eip() {
    const ret = wasm.x86_eip(this.ptr);
    return ret >>> 0;
  }
  get cs() {
    const ret = wasm.x86_cs(this.ptr);
    return ret;
  }
  get ds() {
    const ret = wasm.x86_ds(this.ptr);
    return ret;
  }
  get es() {
    const ret = wasm.x86_es(this.ptr);
    return ret;
  }
  get fs() {
    const ret = wasm.x86_fs(this.ptr);
    return ret;
  }
  get gs() {
    const ret = wasm.x86_gs(this.ptr);
    return ret;
  }
  get ss() {
    const ret = wasm.x86_ss(this.ptr);
    return ret;
  }
  get flags() {
    const ret = wasm.x86_flags(this.ptr);
    return ret >>> 0;
  }
  flags_str() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.x86_flags_str(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  }
  disassemble_json(addr) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.x86_disassemble_json(retptr, this.ptr, addr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  }
  step() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.x86_step(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  mappings_json() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.x86_mappings_json(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  }
  poke(addr, value) {
    wasm.x86_poke(this.ptr, addr, value);
  }
};
async function load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e2) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e2);
        } else {
          throw e2;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
}
function getImports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbg_writepixels_8c927056d8fa033a = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).write_pixels(getArrayU8FromWasm0(arg1, arg2));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getattached_f6978f69f88dbfd4 = function(arg0) {
    const ret = getObject(arg0).get_attached();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_flip_941689b68f06db57 = function(arg0) {
    getObject(arg0).flip();
  };
  imports.wbg.__wbg_bitblt_eb6f4340e270afae = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).bit_blt(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4 >>> 0, arg5 >>> 0, arg6 >>> 0, arg7 >>> 0);
  };
  imports.wbg.__wbg_settitle_d4cdead22994e69e = function(arg0, arg1, arg2) {
    getObject(arg0).title = getStringFromWasm0(arg1, arg2);
  };
  imports.wbg.__wbg_setsize_8ab46e998194a482 = function(arg0, arg1, arg2) {
    getObject(arg0).set_size(arg1 >>> 0, arg2 >>> 0);
  };
  imports.wbg.__wbg_exit_06d8d715ac5ff812 = function(arg0, arg1) {
    getObject(arg0).exit(arg1 >>> 0);
  };
  imports.wbg.__wbg_write_a63a23ff7a1cdc29 = function(arg0, arg1, arg2) {
    const ret = getObject(arg0).write(getArrayU8FromWasm0(arg1, arg2));
    return ret;
  };
  imports.wbg.__wbg_time_6f082e30ff60b279 = function(arg0) {
    const ret = getObject(arg0).time();
    return ret;
  };
  imports.wbg.__wbg_createwindow_5cad0b84eaaa9d93 = function(arg0) {
    const ret = getObject(arg0).create_window();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_createsurface_b7144619a23f66ea = function(arg0, arg1) {
    const ret = getObject(arg0).create_surface(SurfaceOptions.__wrap(arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_mem_392c2f5c5742ac7f = function(arg0, arg1) {
    const ret = mem(takeObject(arg0), arg1 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_debug_f15cb542ea509609 = function(arg0) {
    console.debug(getObject(arg0));
  };
  imports.wbg.__wbg_error_ef9a0be47931175f = function(arg0) {
    console.error(getObject(arg0));
  };
  imports.wbg.__wbg_info_2874fdd5393f35ce = function(arg0) {
    console.info(getObject(arg0));
  };
  imports.wbg.__wbg_log_4b5638ad60bdc54a = function(arg0) {
    console.log(getObject(arg0));
  };
  imports.wbg.__wbg_warn_58110c4a199df084 = function(arg0) {
    console.warn(getObject(arg0));
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
  };
  imports.wbg.__wbindgen_memory = function() {
    const ret = wasm.memory;
    return addHeapObject(ret);
  };
  return imports;
}
function initMemory(imports, maybe_memory) {
}
function finalizeInit(instance, module) {
  wasm = instance.exports;
  init.__wbindgen_wasm_module = module;
  cachedInt32Memory0 = new Int32Array();
  cachedUint8Memory0 = new Uint8Array();
  wasm.__wbindgen_start();
  return wasm;
}
async function init(input) {
  if (typeof input === "undefined") {
    input = new URL("wasm_bg.wasm", import.meta.url);
  }
  const imports = getImports();
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = fetch(input);
  }
  initMemory(imports);
  const { instance, module } = await load(await input, imports);
  return finalizeInit(instance, module);
}
var wasm_default = init;

// web.tsx
async function loadExe(path) {
  return await (await fetch(path)).arrayBuffer();
}
async function loadLabels(path) {
  const labels = /* @__PURE__ */ new Map();
  const resp = await fetch(path + ".csv");
  if (!resp.ok)
    return labels;
  const text = await resp.text();
  for (const line of text.split("\n")) {
    const [name, addr] = line.split("	");
    labels.set(parseInt(addr, 16), name);
  }
  return labels;
}
var Surface = class {
  constructor(width, height, primary) {
    __publicField(this, "canvas");
    __publicField(this, "ctx");
    __publicField(this, "back");
    this.canvas = document.createElement("canvas");
    if (primary) {
      this.back = new Surface(width, height, false);
    }
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 640, 480);
    this.ctx.fill();
  }
  write_pixels(pixels) {
    const data = new ImageData(this.canvas.width, this.canvas.height);
    data.data.set(pixels);
    this.ctx.putImageData(data, 0, 0);
  }
  get_attached() {
    if (!this.back)
      throw new Error("no back for attached");
    return this.back;
  }
  flip() {
    if (!this.back)
      throw new Error("no back for flip");
    this.ctx.drawImage(this.back.canvas, 0, 0);
  }
  bit_blt(dx, dy, other, sx, sy, w2, h2) {
    this.ctx.drawImage(other.canvas, sx, sy, w2, h2, dx, dy, w2, h2);
  }
};
var Window = class {
  constructor(key) {
    this.key = key;
    __publicField(this, "title", "");
    __publicField(this, "width", 0);
    __publicField(this, "height", 0);
    __publicField(this, "surface");
  }
  set_size(w2, h2) {
    this.width = w2;
    this.height = h2;
  }
};
var VM = class {
  constructor(exe, labels) {
    __publicField(this, "x86", new_x86(this));
    __publicField(this, "decoder", new TextDecoder());
    __publicField(this, "breakpoints", /* @__PURE__ */ new Map());
    __publicField(this, "imports", []);
    __publicField(this, "labels");
    __publicField(this, "exitCode");
    __publicField(this, "stdout", "");
    __publicField(this, "page");
    __publicField(this, "windows", []);
    this.labels = labels;
    const importsJSON = JSON.parse(this.x86.load_exe(new Uint8Array(exe)));
    for (const [jsAddr, jsName] of Object.entries(importsJSON)) {
      const addr = parseInt(jsAddr);
      const name = jsName;
      this.imports.push(`${hex(addr, 8)}: ${name}`);
      this.labels.set(addr, name);
    }
  }
  step() {
    this.x86.step();
    if (this.exitCode !== void 0)
      return false;
    const bp = this.breakpoints.get(this.x86.eip);
    if (bp) {
      if (bp.temporary) {
        this.breakpoints.delete(bp.addr);
      }
      return false;
    }
    return true;
  }
  mappings() {
    return JSON.parse(this.x86.mappings_json());
  }
  disassemble(addr) {
    return JSON.parse(this.x86.disassemble_json(addr));
  }
  exit(code) {
    console.warn("exited with code", code);
    this.exitCode = code;
  }
  write(buf) {
    this.stdout += this.decoder.decode(buf);
    this.page.setState({ stdout: this.stdout });
    return buf.length;
  }
  time() {
    return Math.floor(performance.now());
  }
  create_window() {
    let id = this.windows.length + 1;
    this.windows.push(new Window(id));
    this.page.forceUpdate();
    return this.windows[id - 1];
  }
  create_surface(opts) {
    const { width, height, primary } = opts;
    opts.free();
    const surface = new Surface(width, height, primary);
    if (primary) {
      this.windows[this.windows.length - 1].surface = surface;
      console.warn("hack: attached surface to window");
      this.page.forceUpdate();
    }
    return surface;
  }
};
var WindowComponent = class extends d {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      pos: [200, 200]
    });
    __publicField(this, "ref", y());
    __publicField(this, "beginDrag", (e2) => {
      const node = e2.currentTarget;
      this.setState({ drag: [e2.offsetX, e2.offsetY] });
      node.setPointerCapture(e2.pointerId);
      e2.preventDefault();
    });
    __publicField(this, "onDrag", (e2) => {
      if (!this.state.drag)
        return;
      this.setState({ pos: [e2.clientX - this.state.drag[0], e2.clientY - this.state.drag[1]] });
      e2.preventDefault();
    });
    __publicField(this, "endDrag", (e2) => {
      const node = e2.currentTarget;
      this.setState({ drag: void 0 });
      node.releasePointerCapture(e2.pointerId);
      e2.preventDefault();
    });
  }
  ensureCanvas() {
    if (this.props.canvas && this.ref.current && !this.ref.current.firstChild) {
      this.ref.current.appendChild(this.props.canvas);
    }
  }
  componentDidMount() {
    this.ensureCanvas();
  }
  render() {
    this.ensureCanvas();
    return /* @__PURE__ */ h("div", {
      class: "window",
      style: { left: `${this.state.pos[0]}px`, top: `${this.state.pos[1]}px` }
    }, /* @__PURE__ */ h("div", {
      class: "titlebar",
      onPointerDown: this.beginDrag,
      onPointerUp: this.endDrag,
      onPointerMove: this.onDrag
    }, this.props.title), /* @__PURE__ */ h("div", {
      ref: this.ref,
      style: { width: `${this.props.size[0]}px`, height: `${this.props.size[1]}px` }
    }));
  }
};
var Page = class extends d {
  constructor(props) {
    super(props);
    __publicField(this, "state", { stdout: "", memBase: 4198400, running: false });
    __publicField(this, "stepSize", 1e3);
    __publicField(this, "highlightMemory", (addr) => this.setState({ memHighlight: addr }));
    __publicField(this, "showMemory", (memBase) => this.setState({ memBase }));
    this.props.vm.page = this;
  }
  updateAfter(f2) {
    try {
      f2();
    } finally {
      this.setState({ running: false });
    }
  }
  step() {
    this.updateAfter(() => this.props.vm.step());
  }
  startStop() {
    if (this.state.running) {
      this.setState({ running: false });
    } else {
      this.setState({ running: true }, () => this.runFrame());
    }
  }
  runFrame() {
    if (!this.state.running)
      return;
    const start = performance.now();
    for (let i2 = 0; i2 < this.stepSize; i2++) {
      if (!this.props.vm.step()) {
        this.setState({ running: false });
        return;
      }
    }
    const end = performance.now();
    requestAnimationFrame(() => this.runFrame());
  }
  runTo(addr) {
    this.props.vm.breakpoints.set(addr, { addr, temporary: true });
    this.startStop();
  }
  render() {
    let windows = this.props.vm.windows.map((window) => {
      return /* @__PURE__ */ h(WindowComponent, {
        key: window.key,
        title: window.title,
        size: [window.width, window.height],
        canvas: window.surface?.canvas
      });
    });
    const instrs = this.props.vm.disassemble(this.props.vm.x86.eip);
    return /* @__PURE__ */ h(p, null, windows, /* @__PURE__ */ h("div", {
      style: { margin: "1ex" }
    }, /* @__PURE__ */ h("button", {
      onClick: () => this.startStop()
    }, this.state.running ? "stop" : "run"), "\xA0", /* @__PURE__ */ h("button", {
      onClick: () => {
        this.props.vm.step();
        this.forceUpdate();
      }
    }, "step"), "\xA0", /* @__PURE__ */ h("button", {
      onClick: () => this.runTo(instrs[1].addr)
    }, "step over")), /* @__PURE__ */ h("div", {
      style: { display: "flex" }
    }, /* @__PURE__ */ h(Code, {
      instrs,
      labels: this.props.vm.labels,
      highlightMemory: this.highlightMemory,
      showMemory: this.showMemory,
      runTo: (addr) => this.runTo(addr)
    }), /* @__PURE__ */ h("div", {
      style: { width: "12ex" }
    }), /* @__PURE__ */ h(Registers, {
      highlightMemory: this.highlightMemory,
      showMemory: this.showMemory,
      regs: this.props.vm.x86
    })), /* @__PURE__ */ h("div", {
      style: { display: "flex" }
    }, /* @__PURE__ */ h(Tabs, {
      style: { width: "80ex" },
      tabs: {
        output: /* @__PURE__ */ h("section", null, /* @__PURE__ */ h("code", null, this.state.stdout)),
        memory: /* @__PURE__ */ h(Memory, {
          mem: this.props.vm.x86.memory(),
          base: this.state.memBase,
          highlight: this.state.memHighlight,
          jumpTo: (addr) => this.setState({ memBase: addr })
        }),
        mappings: /* @__PURE__ */ h(Mappings, {
          mappings: this.props.vm.mappings(),
          highlight: this.state.memHighlight
        }),
        imports: /* @__PURE__ */ h("section", null, /* @__PURE__ */ h("code", null, this.props.vm.imports.map((imp) => /* @__PURE__ */ h("div", null, imp))))
      }
    }), /* @__PURE__ */ h(Stack, {
      highlightMemory: this.highlightMemory,
      showMemory: this.showMemory,
      labels: this.props.vm.labels,
      x86: this.props.vm.x86
    })));
  }
};
async function main() {
  const path = document.location.search.substring(1);
  if (!path)
    throw new Error("expected ?path in URL");
  const exe = await loadExe(path);
  const labels = await loadLabels(path);
  await wasm_default(new URL("wasm/wasm_bg.wasm", document.location.href));
  const vm = new VM(exe, labels);
  P(/* @__PURE__ */ h(Page, {
    vm
  }), document.body);
}
main();
//# sourceMappingURL=bundle.js.map
