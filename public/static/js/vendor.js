/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!
    function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = a.document,
            e = c.slice,
            f = c.concat,
            g = c.push,
            h = c.indexOf,
            i = {},
            j = i.toString,
            k = i.hasOwnProperty,
            l = {},
            m = "1.12.4",
            n = function(a, b) {
                return new n.fn.init(a, b)
            },
            o = /^[\s﻿ ]+|[\s﻿ ]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return e.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a) {
                return n.each(this, a)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(e.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: g,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray ||
            function(a) {
                return "array" === n.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                try {
                    if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (!l.ownFirst) for (b in a) return k.call(a, b);
                for (b in a);
                return void 0 === b || k.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && n.trim(b) && (a.execScript ||
                    function(b) {
                        a.eval.call(a, b)
                    })(b)
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (h) return h.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, g = 0,
                    h = [];
                if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, f;
                return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                    return a.apply(b || this, c.concat(e.call(arguments)))
                }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: l
        }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });

        function s(a) {
            var b = !! a && "length" in a && a.length,
                c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\ \\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\-\ ])+",
                N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
                O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                P = new RegExp(L + "+", "g"),
                Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                R = new RegExp("^" + L + "*," + L + "*"),
                S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                U = new RegExp(O),
                V = new RegExp("^" + M + "$"),
                W = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _ = /[+~]/,
                aa = /'|\\/g,
                ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                da = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (ea) {
                H = {
                    apply: E.length ?
                        function(a, b) {
                            G.apply(a, I.call(b))
                        } : function(a, b) {
                            var c = a.length,
                                d = 0;
                            while (a[c++] = b[d++]);
                            a.length = c - 1
                        }
                }
            }

            function fa(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                    x = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== x) w = b, s = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) r[h] = l + " " + qa(r[h]);
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                        if (s) try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(Q, "$1"), b, d, e)
            }

            function ga() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function ha(a) {
                return a[u] = !0, a
            }

            function ia(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ja(a, b) {
                var c = a.split("|"),
                    e = c.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c) while (c = c.nextSibling) if (c === b) return -1;
                return a ? 1 : -1
            }

            function la(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function oa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = fa.support = {}, f = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = fa.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ?
                    function(a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    } : function(a, b) {
                        var c, d = [],
                            e = 0,
                            f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++]) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, d.find.CLASS = c.getElementsByClassName &&
                    function(a, b) {
                        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                    }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ?
                    function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                            d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function(a, b) {
                        if (b) while (b = b.parentNode) if (b === a) return !0;
                        return !1
                    }, B = b ?
                    function(a, b) {
                        if (a === b) return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                    } : function(a, b) {
                        if (a === b) return l = !0, 0;
                        var c, d = 0,
                            e = a.parentNode,
                            f = b.parentNode,
                            g = [a],
                            h = [b];
                        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                        if (e === f) return ka(a, b);
                        c = a;
                        while (c = c.parentNode) g.unshift(c);
                        c = b;
                        while (c = c.parentNode) h.unshift(c);
                        while (g[d] === h[d]) d++;
                        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                    }, n) : n
            }, fa.matches = function(a, b) {
                return fa(a, null, null, b)
            }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fa(b, n, null, [a]).length > 0
            }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fa.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fa.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fa.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else while (b = a[d++]) c += e(b);
                return c
            }, d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ?
                            function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ?
                            function(a) {
                                return !!a.parentNode
                            } : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h,
                                    t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                    } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                    return t -= e, t === d || t % d === 0 && t / d >= 0
                                }
                            }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ha(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ha(function(a) {
                        return function(b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function(a) {
                        return a = a.replace(ba, ca), function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                    }),
                    lang: ha(function(a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !! a.checked || "option" === b && !! a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Y.test(a.nodeName)
                    },
                    input: function(a) {
                        return X.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function() {
                        return [0]
                    }),
                    last: na(function(a, b) {
                        return [b - 1]
                    }),
                    eq: na(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: na(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
            for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

            function pa() {}
            pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter)!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            };

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function ra(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ?
                    function(b, c, f) {
                        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
                    } : function(b, c, g) {
                        var h, i, j, k = [w, f];
                        if (g) {
                            while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                        } else while (b = b[d]) if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
                    }
            }

            function sa(a) {
                return a.length > 1 ?
                    function(b, c, d) {
                        var e = a.length;
                        while (e--) if (!a[e](b, c, d)) return !1;
                        return !0
                    } : a[0]
            }

            function ta(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                return c
            }

            function ua(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function va(a, b, c, d, e, f) {
                return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ua(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = ua(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
            }

            function wa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
                return sa(m)
            }

            function xa(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                                while (q = a[o++]) if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                                k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            o = 0;
                            while (q = b[o++]) q(t, u, g, h);
                            if (f) {
                                if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
                                u = ua(u)
                            }
                            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ha(f) : f
            }
            return h = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xa(e, d)), f.selector = a
                }
                return f
            }, i = fa.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !! l, m(), c.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ia(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ja("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ia(function(a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fa
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = function(a, b, c) {
                var d = [],
                    e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
                return d
            },
            v = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            w = n.expr.match.needsContext,
            x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            y = /^.[^:#\[\.,]*$/;

        function z(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return n.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (y.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return n.inArray(a, b) > -1 !== c
            })
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, n.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) n.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function(a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
        var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = n.fn.init = function(a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || A, "string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    if (f = d.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2]) return A.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = d, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
        C.prototype = n.fn, A = n(d);
        var D = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.fn.extend({
            has: function(a) {
                var b, c = n(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
                return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function F(a, b) {
            do a = a[b];
            while (a && 1 !== a.nodeType);
            return a
        }
        n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return u(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return u(a, "parentNode", c)
            },
            next: function(a) {
                return F(a, "nextSibling")
            },
            prev: function(a) {
                return F(a, "previousSibling")
            },
            nextAll: function(a) {
                return u(a, "nextSibling")
            },
            prevAll: function(a) {
                return u(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return u(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return u(a, "previousSibling", c)
            },
            siblings: function(a) {
                return v((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return v(a.firstChild)
            },
            contents: function(a) {
                return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var G = /\S+/g;

        function H(a) {
            var b = {};
            return n.each(a.match(G) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? H(a) : n.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function() {
                    for (e = a.once, d = b = !0; g.length; h = -1) {
                        c = g.shift();
                        while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function() {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            n.each(b, function(b, c) {
                                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function() {
                        return n.each(arguments, function(a, b) {
                            var c;
                            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                        }), this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = !0, c || j.disable(), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function() {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return j
        }, n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, n.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var I;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
            }
        });

        function J() {
            d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
        }

        function K() {
            (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
        }
        n.ready.promise = function(b) {
            if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && !
                    function f() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (b) {
                                return a.setTimeout(f, 50)
                            }
                            J(), n.ready()
                        }
                    }()
            }
            return I.promise(b)
        }, n.ready.promise();
        var L;
        for (L in n(l)) break;
        l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }), function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
        var M = function(a) {
                var b = n.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            },
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;

        function P(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(O, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {}
                    n.data(a, b, c)
                } else c = void 0;
            }
            return c
        }

        function Q(a) {
            var b;
            for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function R(a, b, d, e) {
            if (M(a)) {
                var f, g, h = n.expando,
                    i = a.nodeType,
                    j = i ? n.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }

        function S(a, b, c) {
            if (M(a)) {
                var d, e, f = a.nodeType,
                    g = f ? n.cache : a,
                    h = f ? a[n.expando] : n.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        while (e--) delete d[b[e]];
                        if (c ? !Q(d) : !n.isEmptyObject(d)) return
                    }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                }
            }
        }
        n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !! a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }), function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
        var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
            V = ["Top", "Right", "Bottom", "Left"],
            W = function(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            };

        function X(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ?
                    function() {
                        return d.cur()
                    } : function() {
                        return n.css(a, b, "")
                    }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, n.style(a, b, k + j);
                while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }
        var Y = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) Y(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Z = /^(?:checkbox|radio)$/i,
            $ = /<([\w:-]+)/,
            _ = /^$|\/(?:java|ecma)script/i,
            aa = /^\s+/,
            ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

        function ca(a) {
            var b = ba.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement) while (b.length) c.createElement(b.pop());
            return c
        }!
            function() {
                var a = d.createElement("div"),
                    b = d.createDocumentFragment(),
                    c = d.createElement("input");
                a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !! a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !! a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !! a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
            }();
        var da = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

        function ea(a, b) {
            var c, d, e = 0,
                f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
            if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
        }

        function fa(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
        var ga = /<|&#?\w+;/,
            ha = /<tbody/i;

        function ia(a) {
            Z.test(a.type) && (a.defaultChecked = a.checked)
        }

        function ja(a, b, c, d, e) {
            for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
            else if (ga.test(g)) {
                i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                while (f--) i = i.lastChild;
                if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                    g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                    while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                }
                n.merge(q, i.childNodes), i.textContent = "";
                while (i.firstChild) i.removeChild(i.firstChild);
                i = p.lastChild
            } else q.push(b.createTextNode(g));
            i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
            while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++]) _.test(g.type || "") && c.push(g)
            }
            return i = null, p
        }!
            function() {
                var b, c, e = d.createElement("div");
                for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
                e = null
            }();
        var ka = /^(?:input|select|textarea)$/i,
            la = /^key/,
            ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            na = /^(?:focusinfocus|focusoutblur)$/,
            oa = /^([^.]*)(?:\.(.+)|)/;

        function pa() {
            return !0
        }

        function qa() {
            return !1
        }

        function ra() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function sa(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) sa(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
                n.event.add(this, b, e, d, c)
            })
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
                if (r) {
                    c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                    while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
                if (r && (k = r.events)) {
                    b = (b || "").match(G) || [""], j = b.length;
                    while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
                }
            },
            trigger: function(b, c, e, f) {
                var g, h, i, j, l, m, o, p = [e || d],
                    q = k.call(b, "type") ? b.type : b,
                    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                    if (!f && !l.noBubble && !n.isWindow(e)) {
                        for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                        m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                    }
                    o = 0;
                    while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                    if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                        m = e[h], m && (e[h] = null), n.event.triggered = q;
                        try {
                            e[q]()
                        } catch (s) {}
                        n.event.triggered = void 0, m && (e[h] = m)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, d, f, g, h = [],
                    i = e.call(arguments),
                    j = (n._data(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = n.event.handlers.call(this, a, j), b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem, c = 0;
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                    d.length && g.push({
                        elem: i,
                        handlers: d
                    })
                }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, e, f = a.type,
                    g = a,
                    h = this.fixHooks[f];
                h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
                while (b--) c = e[b], a[c] = g[c];
                return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, h.filter ? h.filter(a, g) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, e, f, g = b.button,
                        h = b.fromElement;
                    return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ra() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ra() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c) {
                var d = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
            }
        }, n.removeEvent = d.removeEventListener ?
            function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c)
            } : function(a, b, c) {
                var d = "on" + b;
                a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
            }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
        }, n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), l.submit || (n.event.special.submit = {
            setup: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                    c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                        a._submitBubble = !0
                    }), n._data(c, "submit", !0))
                })
            },
            postDispatch: function(a) {
                a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
            },
            teardown: function() {
                return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
            }
        }), l.change || (n.event.special.change = {
            setup: function() {
                return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }), n.event.add(this, "click._change", function(a) {
                    this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
                })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                    }), n._data(b, "change", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return n.event.remove(this, "._change"), !ka.test(this.nodeName)
            }
        }), l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b);
                    e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = n._data(d, b) - 1;
                    e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
                }
            }
        }), n.fn.extend({
            on: function(a, b, c, d) {
                return sa(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return sa(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        });
        var ta = / jQuery\d+="(?:null|\d+)"/g,
            ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
            va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            wa = /<script|<style|<link/i,
            xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ya = /^true\/(.*)/,
            za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Aa = ca(d),
            Ba = Aa.appendChild(d.createElement("div"));

        function Ca(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function Da(a) {
            return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
        }

        function Ea(a) {
            var b = ya.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function Fa(a, b) {
            if (1 === b.nodeType && n.hasData(a)) {
                var c, d, e, f = n._data(a),
                    g = n._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
                }
                g.data && (g.data = n.extend({}, g.data))
            }
        }

        function Ga(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                    e = n._data(b);
                    for (d in e.events) n.removeEvent(b, d, e.handle);
                    b.removeAttribute(n.expando)
                }
                "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }
        }

        function Ha(a, b, c, d) {
            b = f.apply([], b);
            var e, g, h, i, j, k, m = 0,
                o = a.length,
                p = o - 1,
                q = b[0],
                r = n.isFunction(q);
            if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
            if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
                for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
                if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
                k = e = null
            }
            return a
        }

        function Ia(a, b, c) {
            for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
            return a
        }
        n.extend({
            htmlPrefilter: function(a) {
                return a.replace(va, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
                if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
                if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
                return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
            },
            cleanData: function(a, b) {
                for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
            }
        }), n.fn.extend({
            domManip: Ha,
            detach: function(a) {
                return Ia(this, a, !0)
            },
            remove: function(a) {
                return Ia(this, a)
            },
            text: function(a) {
                return Y(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return Ha(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return Ha(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild) a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return Y(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                    if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return Ha(this, arguments, function(b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var Ja, Ka = {
            HTML: "block",
            BODY: "block"
        };

        function La(a, b) {
            var c = n(b.createElement(a)).appendTo(b.body),
                d = n.css(c[0], "display");
            return c.detach(), d
        }

        function Ma(a) {
            var b = d,
                c = Ka[a];
            return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
        }
        var Na = /^margin/,
            Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
            Pa = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Qa = d.documentElement;
        !
            function() {
                var b, c, e, f, g, h, i = d.createElement("div"),
                    j = d.createElement("div");
                if (j.style) {
                    j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !! j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                        reliableHiddenOffsets: function() {
                            return null == b && k(), f
                        },
                        boxSizingReliable: function() {
                            return null == b && k(), e
                        },
                        pixelMarginRight: function() {
                            return null == b && k(), c
                        },
                        pixelPosition: function() {
                            return null == b && k(), b
                        },
                        reliableMarginRight: function() {
                            return null == b && k(), g
                        },
                        reliableMarginLeft: function() {
                            return null == b && k(), h
                        }
                    });

                    function k() {
                        var k, l, m = d.documentElement;
                        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                            width: "4px"
                        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                            marginRight: "4px"
                        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
                    }
                }
            }();
        var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (Ra = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
        }) : Qa.currentStyle && (Ra = function(a) {
            return a.currentStyle
        }, Sa = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });

        function Ua(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        var Va = /alpha\([^)]*\)/i,
            Wa = /opacity\s*=\s*([^)]*)/i,
            Xa = /^(none|table(?!-c[ea]).+)/,
            Ya = new RegExp("^(" + T + ")(.*)$", "i"),
            Za = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            $a = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            _a = ["Webkit", "O", "Moz", "ms"],
            ab = d.createElement("div").style;

        function bb(a) {
            if (a in ab) return a;
            var b = a.charAt(0).toUpperCase() + a.slice(1),
                c = _a.length;
            while (c--) if (a = _a[c] + b, a in ab) return a
        }

        function cb(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function db(a, b, c) {
            var d = Ya.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function eb(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
            return g
        }

        function fb(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
                d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Sa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": l.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = c
                    } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                        return fb(a, b, d)
                    }) : fb(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), l.opacity || (n.cssHooks.opacity = {
            get: function(a, b) {
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
            }
        }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
            return b ? Pa(a, {
                display: "inline-block"
            }, Sa, [a, "marginRight"]) : void 0
        }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Na.test(a) || (n.cssHooks[a + b].set = db)
        }), n.fn.extend({
            css: function(a, b) {
                return Y(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return cb(this, !0)
            },
            hide: function() {
                return cb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    W(this) ? n(this).show() : n(this).hide()
                })
            }
        });

        function gb(a, b, c, d, e) {
            return new gb.prototype.init(a, b, c, d, e)
        }
        n.Tween = gb, gb.prototype = {
            constructor: gb,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = gb.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
            }
        }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, n.fx = gb.prototype.init, n.fx.step = {};
        var hb, ib, jb = /^(?:toggle|show|hide)$/,
            kb = /queueHooks$/;

        function lb() {
            return a.setTimeout(function() {
                hb = void 0
            }), hb = n.now()
        }

        function mb(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function nb(a, b, c) {
            for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
        }

        function ob(a, b, c) {
            var d, e, f, g, h, i, j, k, m = this,
                o = {},
                p = a.style,
                q = a.nodeType && W(a),
                r = n._data(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, m.always(function() {
                m.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
                p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
            }));
            for (d in b) if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
            if (n.isEmptyObject(o))"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
            else {
                r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                    n(a).hide()
                }), m.done(function() {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o) n.style(a, b, o[b])
                });
                for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function pb(a, b) {
            var c, d, e, f, g;
            for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }

        function qb(a, b, c) {
            var d, e, f = 0,
                g = qb.prefilters.length,
                h = n.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {},
                        easing: n.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: hb || lb(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
            return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        }, function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !! b.value, l.optSelected = f.selected, l.enctype = !! d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
        var rb = /\r/g,
            sb = /[ \t\r\n\f]+/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
                }
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                        return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            }, l.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var tb, ub, vb = n.expr.attrHandle,
            wb = /^(?:checked|selected)$/i,
            xb = l.getSetAttribute,
            yb = l.input;
        n.fn.extend({
            attr: function(a, b) {
                return Y(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
            }
        }), ub = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = vb[b] || n.find.attr;
            yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
                var e, f;
                return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
            } : vb[b] = function(a, b, c) {
                return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), yb && xb || (n.attrHooks.value = {
            set: function(a, b, c) {
                return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
            }
        }), xb || (tb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, vb.id = vb.name = vb.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, n.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: tb.set
        }, n.attrHooks.contenteditable = {
            set: function(a, b, c) {
                tb.set(a, "" === b ? !1 : b, c)
            }
        }, n.each(["width", "height"], function(a, b) {
            n.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), l.style || (n.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var zb = /^(?:input|select|textarea|button|object)$/i,
            Ab = /^(?:a|area)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return Y(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = n.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), n.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
            n.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), l.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        }), l.enctype || (n.propFix.enctype = "encoding");
        var Bb = /[\t\r\n\f]/g;

        function Cb(a) {
            return n.attr(a, "class") || ""
        }
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
                }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a) {
                    b = a.match(G) || [];
                    while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, Cb(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c) {
                        d = 0, e = n(this), f = a.match(G) || [];
                        while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                b = " " + a + " ";
                while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
                return !1
            }
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var Db = a.location,
            Eb = n.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        n.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = n.trim(b + "");
            return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
        }, n.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
        };
        var Hb = /#.*$/,
            Ib = /([?&])_=[^&]*/,
            Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lb = /^(?:GET|HEAD)$/,
            Mb = /^\/\//,
            Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ob = {},
            Pb = {},
            Qb = "*/".concat("*"),
            Rb = Db.href,
            Sb = Nb.exec(Rb.toLowerCase()) || [];

        function Tb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(G) || [];
                if (n.isFunction(c)) while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function Ub(a, b, c, d) {
            var e = {},
                f = a === Pb;

            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function Vb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && n.extend(!0, a, c), a
        }

        function Wb(a, b, c) {
            var d, e, f, g, h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e) for (g in h) if (h[g] && h[g].test(e)) {
                i.unshift(g);
                break
            }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Xb(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
            else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                    break
                }
                if (g !== !0) if (g && a["throws"]) b = g(b);
                else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rb,
                type: "GET",
                isLocal: Kb.test(Sb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Qb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
            },
            ajaxPrefilter: Tb(Ob),
            ajaxTransport: Tb(Pb),
            ajax: function(b, c) {
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                    m = l.context || l,
                    o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                    p = n.Deferred(),
                    q = n.Callbacks("once memory"),
                    r = l.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!k) {
                                    k = {};
                                    while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                                }
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return j && j.abort(b), y(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
                i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
                if (j = Ub(Pb, l, c, w)) {
                    if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                    l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        u = 1, j.send(s, y)
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        y(-1, x)
                    }
                } else y(-1, "No Transport");

                function y(b, c, d, e) {
                    var k, s, t, v, x, y = c;
                    2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        });

        function Yb(a) {
            return a.style && a.style.display || n.css(a, "display")
        }

        function Zb(a) {
            if (!n.contains(a.ownerDocument || d, a)) return !0;
            while (a && 1 === a.nodeType) {
                if ("none" === Yb(a) || "hidden" === a.type) return !0;
                a = a.parentNode
            }
            return !1
        }
        n.expr.filters.hidden = function(a) {
            return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
        }, n.expr.filters.visible = function(a) {
            return !n.expr.filters.hidden(a)
        };
        var $b = /%20/g,
            _b = /\[\]$/,
            ac = /\r?\n/g,
            bc = /^(?:submit|button|image|reset|file)$/i,
            cc = /^(?:input|select|textarea|keygen)/i;

        function dc(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== n.type(b)) d(a, b);
            else for (e in b) dc(a + "[" + e + "]", b[e], c, d)
        }
        n.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
                e(this.name, this.value)
            });
            else for (c in a) dc(c, a[c], b, e);
            return d.join("&").replace($b, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(ac, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(ac, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
            function() {
                return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
            } : hc;
        var ec = 0,
            fc = {},
            gc = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in fc) fc[a](void 0, !0)
        }), l.cors = !! gc && "withCredentials" in gc, gc = l.ajax = !! gc, gc && n.ajaxTransport(function(b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function(d, e) {
                        var f, g = b.xhr(),
                            h = ++ec;
                        if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
                        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send(b.hasContent && b.data || null), c = function(a, d) {
                            var f, i, j;
                            if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                            j && e(f, i, j, g.getAllResponseHeaders())
                        }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                    },
                    abort: function() {
                        c && c(void 0, !0)
                    }
                }
            }
        });

        function hc() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function ic() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }
        n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a
                }
            }
        }), n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function(e, f) {
                        b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var jc = [],
            kc = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = jc.pop() || n.expando + "_" + Eb++;
                return this[a] = !0, a
            }
        }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || d;
            var e = x.exec(a),
                f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
        };
        var lc = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && lc) return lc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c &&
                function(a, b) {
                    g.each(function() {
                        c.apply(this, f || [a.responseText, b, a])
                    })
                }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), n.expr.filters.animated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        };

        function mc(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - n.css(d, "marginTop", !0),
                        left: b.left - c.left - n.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                    return a || Qa
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            n.fn[a] = function(d) {
                return Y(this, function(a, d, e) {
                    var f = mc(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
                return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Y(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), n.fn.size = function() {
            return this.length
        }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var nc = a.jQuery,
            oc = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
        }, b || (a.jQuery = a.$ = n), n
    });

/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
 */
var Swiper = function(a, b) {
    "use strict";

    function c(a, b) {
        return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b)
    }

    function d(a) {
        return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1
    }

    function e() {
        var a = G - J;
        return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a
    }

    function f() {
        function a(a) {
            var c, d, e = function() {
                "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)))
            };
            a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image, c.onload = e, c.onerror = e, c.src = d) : e())
        }
        var d = D.h.addEventListener,
            e = "wrapper" === b.eventTarget ? D.wrapper : D.container;
        if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
            if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
                new WheelEvent("wheel"), D._wheelEvent = "wheel"
            } catch (f) {}
            D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j)
        }
        if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
            D.imagesToLoad = c("img", D.container);
            for (var h = 0; h < D.imagesToLoad.length; h++) a(D.imagesToLoad[h])
        }
    }

    function g() {
        var a, d = D.h.addEventListener;
        if (b.preventLinks) {
            var e = c("a", D.container);
            for (a = 0; a < e.length; a++) d(e[a], "click", n)
        }
        if (b.releaseFormElements) {
            var f = c("input, textarea, select", D.container);
            for (a = 0; a < f.length; a++) d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0)
        }
        if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) d(D.slides[a], "click", k);
        if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) d(D.slides[a], D.touchEvents.touchStart, l)
    }

    function h() {
        var a, d = D.h.removeEventListener;
        if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) d(D.slides[a], "click", k);
        if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) d(D.slides[a], D.touchEvents.touchStart, l);
        if (b.releaseFormElements) {
            var e = c("input, textarea, select", D.container);
            for (a = 0; a < e.length; a++) d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0)
        }
        if (b.preventLinks) {
            var f = c("a", D.container);
            for (a = 0; a < f.length; a++) d(f[a], "click", n)
        }
    }

    function i(a) {
        var b = a.keyCode || a.charCode;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
            if (37 === b || 39 === b || 38 === b || 40 === b) {
                for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [
                    [d.left, d.top],
                    [d.left + D.width, d.top],
                    [d.left, d.top + D.height],
                    [d.left + D.width, d.top + D.height]
                ], j = 0; j < i.length; j++) {
                    var k = i[j];
                    k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0)
                }
                if (!c) return
            }
            N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev())
        }
    }

    function j(a) {
        var c = D._wheelEvent,
            d = 0;
        if (a.detail) d = -a.detail;
        else if ("mousewheel" === c) if (b.mousewheelControlForceToAxis) if (N) {
            if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
            d = a.wheelDeltaX
        } else {
            if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
            d = a.wheelDeltaY
        } else d = a.wheelDelta;
        else if ("DOMMouseScroll" === c) d = -a.detail;
        else if ("wheel" === c) if (b.mousewheelControlForceToAxis) if (N) {
            if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
            d = -a.deltaX
        } else {
            if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
            d = -a.deltaY
        } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
        if (b.freeMode) {
            var f = D.getWrapperTranslate() + d;
            if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return
        } else(new Date).getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = (new Date).getTime();
        return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
    }

    function k(a) {
        D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a))
    }

    function l(a) {
        m(a), D.fireCallback(b.onSlideTouch, D, a)
    }

    function m(a) {
        if (a.currentTarget) D.clickedSlide = a.currentTarget;
        else {
            var c = a.srcElement;
            do {
                if (c.className.indexOf(b.slideClass) > -1) break;
                c = c.parentNode
            } while (c);
            D.clickedSlide = c
        }
        D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0)
    }

    function n(a) {
        return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1)
    }

    function o(a) {
        return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
    }

    function p(a) {
        if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;
        var c = a.target || a.srcElement;
        document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();
        var d = "input select textarea".split(" ");
        if (b.noSwiping && c && t(c)) return !1;
        if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;
        if (!$ || 1 === a.targetTouches.length) {
            D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = (new Date).getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd")
        }
    }

    function q(a) {
        if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
            var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
                d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
            if ("undefined" == typeof I && N && (I = !! (I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !! (I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void(D.isTouched = !1);
            if (N) {
                if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return
            } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;
            if (a.assignedToSwiper) return void(D.isTouched = !1);
            if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
                if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
                    var f;
                    if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
                        var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);
                        f = (J + g) / J;
                        var h = D.positions.current - g * (1 - f) / 2,
                            i = -e() - J / 2;
                        D.positions.current = i > h || 0 >= f ? i : h
                    }
                }
                if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;
                if (b.moveStartThreshold) if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
                    if (!X) return X = !0, void(D.touches.start = D.touches.current);
                    D.setWrapperTranslate(D.positions.current)
                } else D.positions.current = D.positions.start;
                else D.setWrapperTranslate(D.positions.current);
                return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = (new Date).getTime()), D.velocity = (D.touches.current - Y) / ((new Date).getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = (new Date).getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1
            }
        }
    }

    function r(a) {
        if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
            D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = (new Date).getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);
            var c = D.positions.diff,
                d = D.positions.abs,
                f = D.times.end - D.times.start;
            5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function() {
                "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0))
            }, 100);
            var g = e();
            if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
            if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
            if (D.isMoved = !1, b.freeMode) {
                if (b.freeModeFluid) {
                    var h, i = 1e3 * b.momentumRatio,
                        j = D.velocity * i,
                        k = D.positions.current + j,
                        l = !1,
                        m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio; - g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function() {
                        _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300))
                    }), D.updateActiveSlide(k)
                }
                return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd")
            }
            H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));
            var n = 0;
            if ("auto" === b.slidesPerView) {
                for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++) if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
                    n = o;
                    break
                }
                n > J && (n = J)
            } else n = F * b.slidesPerView;
            "toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd")
        }
    }

    function s(a, b) {
        return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1
    }

    function t(a) {
        var c = !1;
        do s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
        while (!c && a.parentElement && !s(a, b.wrapperClass));
        return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c
    }

    function u(a, b) {
        var c, d = document.createElement("div");
        return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML
    }

    function v(a, c, d) {
        function e() {
            var f = +new Date,
                l = f - g;
            h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function() {
                e()
            }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1)
        }
        var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
            g = +new Date;
        if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);
        else {
            var h = D.getWrapperTranslate(),
                i = Math.ceil((a - h) / f * (1e3 / 60)),
                j = h > a ? "toNext" : "toPrev",
                k = "toNext" === j ? h > a : a > h;
            if (D._DOMAnimating) return;
            e()
        }
        D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c)
    }

    function w(a) {
        if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && D.support.transitions) {
            if (D._queueStartCallbacks) return;
            D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function() {
                D._queueStartCallbacks = !1
            })
        } else D.fireCallback(b.onSlideChangeStart, D, a);
        if (b.onSlideChangeEnd) if (D.support.transitions) if (b.queueEndCallbacks) {
            if (D._queueEndCallbacks) return;
            D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function(c) {
                D.fireCallback(b.onSlideChangeEnd, c, a)
            })
        } else D.wrapperTransitionEnd(function(c) {
            D.fireCallback(b.onSlideChangeEnd, c, a)
        });
        else b.DOMAnimation || setTimeout(function() {
                D.fireCallback(b.onSlideChangeEnd, D, a)
            }, 10)
    }

    function x() {
        var a = D.paginationButtons;
        if (a) for (var b = 0; b < a.length; b++) D.h.removeEventListener(a[b], "click", z)
    }

    function y() {
        var a = D.paginationButtons;
        if (a) for (var b = 0; b < a.length; b++) D.h.addEventListener(a[b], "click", z)
    }

    function z(a) {
        for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) d === e[f] && (c = f);
        b.autoplay && D.stopAutoplay(!0), D.swipeTo(c)
    }

    function A() {
        ab = setTimeout(function() {
            b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function() {
                "undefined" != typeof ab && A()
            })
        }, b.autoplay)
    }

    function B() {
        D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated")
    }
    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
        var C = HTMLElement.prototype;
        C.__defineGetter__ && C.__defineGetter__("outerHTML", function() {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    if (window.getComputedStyle || (window.getComputedStyle = function(a) {
            return this.el = a, this.getPropertyValue = function(b) {
                var c = /(\-([a-z]){1})/g;
                return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function() {
                    return arguments[2].toUpperCase()
                })), a.currentStyle[b] ? a.currentStyle[b] : null
            }, this
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
            for (var c = b || 0, d = this.length; d > c; c++) if (this[c] === a) return c;
            return -1
        }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
        var D = this;
        D.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        }, D.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        }, D.times = {
            start: 0,
            end: 0
        }, D.id = (new Date).getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
        var E, F, G, H, I, J, K = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            swipeToPrev: !0,
            swipeToNext: !0,
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var L in K) if (L in b && "object" == typeof b[L]) for (var M in K[L]) M in b[L] || (b[L][M] = K[L][M]);
        else L in b || (b[L] = K[L]);
        D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
        var N = "horizontal" === b.mode,
            O = ["mousedown", "mousemove", "mouseup"];
        D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = {
            touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0],
            touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1],
            touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2]
        };
        for (var P = D.container.childNodes.length - 1; P >= 0; P--) if (D.container.childNodes[P].className) for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
        D.wrapper = E, D._extendSwiperSlide = function(a) {
            return a.append = function() {
                return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a
            }, a.prepend = function() {
                return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a
            }, a.insertAfter = function(c) {
                if ("undefined" == typeof c) return !1;
                var d;
                return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a
            }, a.clone = function() {
                return D._extendSwiperSlide(a.cloneNode(!0))
            }, a.remove = function() {
                D.wrapper.removeChild(a), D.reInit()
            }, a.html = function(b) {
                return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
            }, a.index = function() {
                for (var b, c = D.slides.length - 1; c >= 0; c--) a === D.slides[c] && (b = c);
                return b
            }, a.isActive = function() {
                return a.index() === D.activeIndex ? !0 : !1
            }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function(b) {
                return a.swiperSlideDataStorage[b]
            }, a.setData = function(b, c) {
                return a.swiperSlideDataStorage[b] = c, a
            }, a.data = function(b, c) {
                return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a)
            }, a.getWidth = function(b, c) {
                return D.h.getWidth(a, b, c)
            }, a.getHeight = function(b, c) {
                return D.h.getHeight(a, b, c)
            }, a.getOffset = function() {
                return D.h.getOffset(a)
            }, a
        }, D.calcSlides = function(a) {
            var c = D.slides ? D.slides.length : !1;
            D.slides = [], D.displaySlides = [];
            for (var d = 0; d < D.wrapper.childNodes.length; d++) if (D.wrapper.childNodes[d].className) for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
            for (d = D.slides.length - 1; d >= 0; d--) D._extendSwiperSlide(D.slides[d]);
            c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"))
        }, D.createSlide = function(a, c, d) {
            c = c || D.params.slideClass, d = d || b.slideElement;
            var e = document.createElement(d);
            return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e)
        }, D.appendSlide = function(a, b, c) {
            return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0
        }, D.prependSlide = function(a, b, c) {
            return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0
        }, D.insertSlideAfter = function(a, b, c, d) {
            return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a)
        }, D.removeSlide = function(a) {
            if (D.slides[a]) {
                if (b.loop) {
                    if (!D.slides[a + D.loopedSlides]) return !1;
                    D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()
                } else D.slides[a].remove();
                return !0
            }
            return !1
        }, D.removeLastSlide = function() {
            return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1
        }, D.removeAllSlides = function() {
            for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0)
        }, D.getSlide = function(a) {
            return D.slides[a]
        }, D.getLastSlide = function() {
            return D.slides[D.slides.length - 1]
        }, D.getFirstSlide = function() {
            return D.slides[0]
        }, D.activeSlide = function() {
            return D.slides[D.activeIndex]
        }, D.fireCallback = function() {
            var a = arguments[0];
            if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++)"function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, D.addCallback = function(a, b) {
            var c, e = this;
            return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b))
        }, D.removeCallbacks = function(a) {
            D.params["on" + a] && (D.params["on" + a] = null)
        };
        var S = [];
        for (var T in D.plugins) if (b[T]) {
            var U = D.plugins[T](D, b[T]);
            U && S.push(U)
        }
        D.callPlugins = function(a, b) {
            b || (b = {});
            for (var c = 0; c < S.length; c++) a in S[c] && S[c][a](b)
        }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function(a, c) {
            var d = D.h.getWidth(D.container, !1, b.roundLengths),
                e = D.h.getHeight(D.container, !1, b.roundLengths);
            if (d !== D.width || e !== D.height || a) {
                D.width = d, D.height = e;
                var f, g, h, i, j, k, l;
                J = N ? d : e;
                var m = D.wrapper;
                if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
                    var n = 0,
                        o = 0;
                    b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;
                    var p = 0;
                    for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
                        f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
                        var q = N ? f : g;
                        if (b.centeredSlides) {
                            var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
                                s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
                                t = N ? r : s;
                            if (q > J) {
                                if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);
                                else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
                                D.slidesGrid.push(k + D.wrapperLeft)
                            } else D.snapGrid.push(p), D.slidesGrid.push(p);
                            p += q / 2 + t / 2
                        } else {
                            if (q > J) if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);
                            else if (0 !== J) for (var v = 0; v <= Math.floor(q / J); v++) D.snapGrid.push(k + J * v);
                            else D.snapGrid.push(k);
                            else D.snapGrid.push(k);
                            D.slidesGrid.push(k)
                        }
                        k += q, n += f, o += g
                    }
                    b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom)
                } else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;
                else {
                    if (b.calculateHeight) {
                        for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
                        g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px")
                    } else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;
                    for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px")
                }
                D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0
            }
        }, D.reInit = function(a) {
            D.init(!0, a)
        }, D.resizeFix = function(a) {
            D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix")
        }, D.destroy = function(a) {
            var c = D.h.removeEventListener,
                d = "wrapper" === b.eventTarget ? D.wrapper : D.container;
            if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
                D.wrapper.removeAttribute("style");
                for (var e = 0; e < D.slides.length; e++) D.slides[e].removeAttribute("style")
            }
            D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null
        }, D.disableKeyboardControl = function() {
            b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i)
        }, D.enableKeyboardControl = function() {
            b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i)
        };
        var V = (new Date).getTime();
        if (D.disableMousewheelControl = function() {
                return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1
            }, D.enableMousewheelControl = function() {
                return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1
            }, b.grabCursor) {
            var W = D.container.style;
            W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab"
        }
        D.allowSlideClick = !0, D.allowLinks = !0;
        var X, Y, Z, $ = !1,
            _ = !0;
        D.swipeNext = function(a, c) {
            "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");
            var d = D.getWrapperTranslate().toFixed(2),
                f = d;
            if ("auto" === b.slidesPerView) {
                for (var g = 0; g < D.snapGrid.length; g++) if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
                    f = -D.snapGrid[g + 1];
                    break
                }
            } else {
                var h = F * b.slidesPerGroup;
                f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h)
            }
            return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", {
                runCallbacks: a
            }), !0)
        }, D.swipePrev = function(a, c) {
            "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");
            var d, e = Math.ceil(D.getWrapperTranslate());
            if ("auto" === b.slidesPerView) {
                d = 0;
                for (var f = 1; f < D.snapGrid.length; f++) {
                    if (-e === D.snapGrid[f]) {
                        d = -D.snapGrid[f - 1];
                        break
                    }
                    if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
                        d = -D.snapGrid[f];
                        break
                    }
                }
            } else {
                var g = F * b.slidesPerGroup;
                d = -(Math.ceil(-e / g) - 1) * g
            }
            return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", {
                runCallbacks: a
            }), !0)
        }, D.swipeReset = function(a) {
            "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset"); {
                var c, d = D.getWrapperTranslate(),
                    f = F * b.slidesPerGroup; - e()
            }
            if ("auto" === b.slidesPerView) {
                c = 0;
                for (var g = 0; g < D.snapGrid.length; g++) {
                    if (-d === D.snapGrid[g]) return;
                    if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
                        c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];
                        break
                    }
                } - d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e())
            } else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());
            return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", {
                runCallbacks: a
            }), !0)
        }, D.swipeTo = function(a, c, d) {
            a = parseInt(a, 10), D.callPlugins("onSwipeTo", {
                index: a,
                speed: c
            }), b.loop && (a += D.loopedSlides);
            var f = D.getWrapperTranslate();
            if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
                var g;
                return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", {
                    index: a,
                    speed: c,
                    runCallbacks: d
                }), !0)
            }
        }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function(a) {
            if (D.initialized && 0 !== D.slides.length) {
                D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);
                var c;
                if ("auto" === b.slidesPerView) {
                    if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
                        for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++);
                        var d = Math.abs(D.slidesGrid[c] + a),
                            e = Math.abs(D.slidesGrid[c + 1] + a);
                        D.activeIndex = e >= d ? c : c + 1
                    }
                } else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);
                if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
                    if (D.calcVisibleSlides(a), D.support.classList) {
                        var f;
                        for (c = 0; c < D.slides.length; c++) f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
                        D.slides[D.activeIndex].classList.add(b.slideActiveClass)
                    } else {
                        var g = new RegExp("\\s*" + b.slideActiveClass),
                            h = new RegExp("\\s*" + b.slideVisibleClass);
                        for (c = 0; c < D.slides.length; c++) D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
                        D.slides[D.activeIndex].className += " " + b.slideActiveClass
                    }
                    if (b.loop) {
                        var i = D.loopedSlides;
                        D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0)
                    } else D.activeLoopIndex = D.activeIndex;
                    b.pagination && D.updatePagination(a)
                }
            }
        }, D.createPagination = function(a) {
            if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
                var d = "",
                    e = D.slides.length,
                    f = e;
                b.loop && (f -= 2 * D.loopedSlides);
                for (var g = 0; f > g; g++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
                D.paginationContainer.innerHTML = d
            }
            D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y()
        }, D.updatePagination = function(a) {
            if (b.pagination && !(D.slides.length < 1)) {
                var d = c("." + b.paginationActiveClass, D.paginationContainer);
                if (d) {
                    var e = D.paginationButtons;
                    if (0 !== e.length) {
                        for (var f = 0; f < e.length; f++) e[f].className = b.paginationElementClass;
                        var g = b.loop ? D.loopedSlides : 0;
                        if (b.paginationAsRange) {
                            D.visibleSlides || D.calcVisibleSlides(a);
                            var h, i = [];
                            for (h = 0; h < D.visibleSlides.length; h++) {
                                var j = D.slides.indexOf(D.visibleSlides[h]) - g;
                                b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j)
                            }
                            for (h = 0; h < i.length; h++) e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
                            b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass)
                        } else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass)
                    }
                }
            }
        }, D.calcVisibleSlides = function(a) {
            var c = [],
                d = 0,
                e = 0,
                f = 0;
            N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);
            for (var g = 0; g < D.slides.length; g++) {
                d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;
                var h = !1;
                b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g])
            }
            0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c
        };
        var ab, bb;
        D.startAutoplay = function() {
            if (D.support.transitions) {
                if ("undefined" != typeof ab) return !1;
                if (!b.autoplay) return;
                D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A()
            } else {
                if ("undefined" != typeof bb) return !1;
                if (!b.autoplay) return;
                D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function() {
                    b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0))
                }, b.autoplay)
            }
        }, D.stopAutoplay = function(a) {
            if (D.support.transitions) {
                if (!ab) return;
                ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function() {
                    A()
                }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
            } else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D)
        }, D.loopCreated = !1, D.removeLoopedSlides = function() {
            if (D.loopCreated) for (var a = 0; a < D.slides.length; a++) D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a])
        }, D.createLoop = function() {
            if (0 !== D.slides.length) {
                D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);
                var a, c = "",
                    d = "",
                    e = "",
                    f = D.slides.length,
                    g = Math.floor(D.loopedSlides / f),
                    h = D.loopedSlides % f;
                for (a = 0; g * f > a; a++) {
                    var i = a;
                    if (a >= f) {
                        var j = Math.floor(a / f);
                        i = a - f * j
                    }
                    e += D.slides[i].outerHTML
                }
                for (a = 0; h > a; a++) d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
                for (a = f - h; f > a; a++) c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
                var k = c + e + E.innerHTML + e + d;
                for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++)(a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
                D.callPlugins("onCreateLoop")
            }
        }, D.fixLoop = function() {
            var a;
            D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1))
        }, D.loadSlides = function() {
            var a = "";
            D.activeLoaderIndex = 0;
            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
            D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0)
        }, D.reloadSlides = function() {
            var a = b.loader.slides,
                c = parseInt(D.activeSlide().data("swiperindex"), 10);
            if (!(0 > c || c > a.length - 1)) {
                D.activeLoaderIndex = c;
                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
                    e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
                if (c > 0) {
                    var f = -F * (c - d);
                    D.setWrapperTranslate(f), D.setWrapperTransition(0)
                }
                var g;
                if ("reload" === b.loader.logic) {
                    D.wrapper.innerHTML = "";
                    var h = "";
                    for (g = d; e >= g; g++) h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
                    D.wrapper.innerHTML = h
                } else {
                    var i = 1e3,
                        j = 0;
                    for (g = 0; g < D.slides.length; g++) {
                        var k = D.slides[g].data("swiperindex");
                        d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j))
                    }
                    for (g = d; e >= g; g++) {
                        var l;
                        i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l))
                    }
                }
                D.reInit(!0)
            }
        }, B()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function(a, b) {
        "use strict";

        function c(h) {
            if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)) for (d = 0; d < g.length; d++) e.h.removeEventListener(f, g[d], c)
        }
        var d, e = this,
            f = e.wrapper,
            g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (a) for (d = 0; d < g.length; d++) e.h.addEventListener(f, g[d], c)
    },
    getWrapperTranslate: function(a) {
        "use strict";
        var b, c, d, e, f = this.wrapper;
        return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0
    },
    setWrapperTranslate: function(a, b, c) {
        "use strict";
        var d, e = this.wrapper.style,
            f = {
                x: 0,
                y: 0,
                z: 0
            };
        3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f)
    },
    setWrapperTransition: function(a) {
        "use strict";
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
            duration: a
        }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a)
    },
    h: {
        getWidth: function(a, b, c) {
            "use strict";
            var d = window.getComputedStyle(a, null).getPropertyValue("width"),
                e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e
        },
        getHeight: function(a, b, c) {
            "use strict";
            if (b) return a.offsetHeight;
            var d = window.getComputedStyle(a, null).getPropertyValue("height"),
                e = parseFloat(d);
            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e
        },
        getOffset: function(a) {
            "use strict";
            var b = a.getBoundingClientRect(),
                c = document.body,
                d = a.clientTop || c.clientTop || 0,
                e = a.clientLeft || c.clientLeft || 0,
                f = window.pageYOffset || a.scrollTop,
                g = window.pageXOffset || a.scrollLeft;
            return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {
                top: b.top + f - d,
                left: b.left + g - e
            }
        },
        windowWidth: function() {
            "use strict";
            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
        },
        windowHeight: function() {
            "use strict";
            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
        },
        windowScroll: function() {
            "use strict";
            return "undefined" != typeof pageYOffset ? {
                left: window.pageXOffset,
                top: window.pageYOffset
            } : document.documentElement ? {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            } : void 0
        },
        addEventListener: function(a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        removeEventListener: function(a, b, c, d) {
            "use strict";
            "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    },
    setTransform: function(a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
    },
    setTranslate: function(a, b) {
        "use strict";
        var c = a.style,
            d = {
                x: b.x || 0,
                y: b.y || 0,
                z: b.z || 0
            },
            e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px")
    },
    setTransition: function(a, b) {
        "use strict";
        var c = a.style;
        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
    },
    support: {
        touch: window.Modernizr && Modernizr.touch === !0 ||
        function() {
            "use strict";
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
        function() {
            "use strict";
            var a = document.createElement("div").style;
            return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
        }(),
        transforms: window.Modernizr && Modernizr.csstransforms === !0 ||
        function() {
            "use strict";
            var a = document.createElement("div").style;
            return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a
        }(),
        transitions: window.Modernizr && Modernizr.csstransitions === !0 ||
        function() {
            "use strict";
            var a = document.createElement("div").style;
            return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a
        }(),
        classList: function() {
            "use strict";
            var a = document.createElement("div");
            return "classList" in a
        }()
    },
    browser: {
        ie8: function() {
            "use strict";
            var a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = navigator.userAgent,
                    c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                null !== c.exec(b) && (a = parseFloat(RegExp.$1))
            }
            return -1 !== a && 9 > a
        }(),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
}, (window.jQuery || window.Zepto) && !
    function(a) {
        "use strict";
        a.fn.swiper = function(b) {
            var c;
            return this.each(function(d) {
                var e = a(this),
                    f = new Swiper(e[0], b);
                d || (c = f), e.data("swiper", f)
            }), c
        }
    }(window.jQuery || window.Zepto), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return Swiper
});
(function(t, e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        module.exports = e(require("jquery"))
    } else {
        e(t.jQuery)
    }
})(this, function(t) {
    t.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var e = document.createElement("div");
    var n = {};

    function i(t) {
        if (t in e.style) return t;
        var n = ["Moz", "Webkit", "O", "ms"];
        var i = t.charAt(0).toUpperCase() + t.substr(1);
        for (var r = 0; r < n.length; ++r) {
            var s = n[r] + i;
            if (s in e.style) {
                return s
            }
        }
    }

    function r() {
        e.style[n.transform] = "";
        e.style[n.transform] = "rotateY(90deg)";
        return e.style[n.transform] !== ""
    }
    var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = i("transition");
    n.transitionDelay = i("transitionDelay");
    n.transform = i("transform");
    n.transformOrigin = i("transformOrigin");
    n.filter = i("Filter");
    n.transform3d = r();
    var a = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var o = n.transitionEnd = a[n.transition] || null;
    for (var u in n) {
        if (n.hasOwnProperty(u) && typeof t.support[u] === "undefined") {
            t.support[u] = n[u]
        }
    }
    e = null;
    t.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    t.cssHooks["transit:transform"] = {
        get: function(e) {
            return t(e).data("transform") || new f
        },
        set: function(e, i) {
            var r = i;
            if (!(r instanceof f)) {
                r = new f(r)
            }
            if (n.transform === "WebkitTransform" && !s) {
                e.style[n.transform] = r.toString(true)
            } else {
                e.style[n.transform] = r.toString()
            }
            t(e).data("transform", r)
        }
    };
    t.cssHooks.transform = {
        set: t.cssHooks["transit:transform"].set
    };
    t.cssHooks.filter = {
        get: function(t) {
            return t.style[n.filter]
        },
        set: function(t, e) {
            t.style[n.filter] = e
        }
    };
    if (t.fn.jquery < "1.8") {
        t.cssHooks.transformOrigin = {
            get: function(t) {
                return t.style[n.transformOrigin]
            },
            set: function(t, e) {
                t.style[n.transformOrigin] = e
            }
        };
        t.cssHooks.transition = {
            get: function(t) {
                return t.style[n.transition]
            },
            set: function(t, e) {
                t.style[n.transition] = e
            }
        }
    }
    p("scale");
    p("scaleX");
    p("scaleY");
    p("translate");
    p("rotate");
    p("rotateX");
    p("rotateY");
    p("rotate3d");
    p("perspective");
    p("skewX");
    p("skewY");
    p("x", true);
    p("y", true);

    function f(t) {
        if (typeof t === "string") {
            this.parse(t)
        }
        return this
    }
    f.prototype = {
        setFromString: function(t, e) {
            var n = typeof e === "string" ? e.split(",") : e.constructor === Array ? e : [e];
            n.unshift(t);
            f.prototype.set.apply(this, n)
        },
        set: function(t) {
            var e = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[t]) {
                this.setter[t].apply(this, e)
            } else {
                this[t] = e.join(",")
            }
        },
        get: function(t) {
            if (this.getter[t]) {
                return this.getter[t].apply(this)
            } else {
                return this[t] || 0
            }
        },
        setter: {
            rotate: function(t) {
                this.rotate = b(t, "deg")
            },
            rotateX: function(t) {
                this.rotateX = b(t, "deg")
            },
            rotateY: function(t) {
                this.rotateY = b(t, "deg")
            },
            scale: function(t, e) {
                if (e === undefined) {
                    e = t
                }
                this.scale = t + "," + e
            },
            skewX: function(t) {
                this.skewX = b(t, "deg")
            },
            skewY: function(t) {
                this.skewY = b(t, "deg")
            },
            perspective: function(t) {
                this.perspective = b(t, "px")
            },
            x: function(t) {
                this.set("translate", t, null)
            },
            y: function(t) {
                this.set("translate", null, t)
            },
            translate: function(t, e) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (t !== null && t !== undefined) {
                    this._translateX = b(t, "px")
                }
                if (e !== null && e !== undefined) {
                    this._translateY = b(e, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var t = (this.scale || "1,1").split(",");
                if (t[0]) {
                    t[0] = parseFloat(t[0])
                }
                if (t[1]) {
                    t[1] = parseFloat(t[1])
                }
                return t[0] === t[1] ? t[0] : t
            },
            rotate3d: function() {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var e = 0; e <= 3; ++e) {
                    if (t[e]) {
                        t[e] = parseFloat(t[e])
                    }
                }
                if (t[3]) {
                    t[3] = b(t[3], "deg")
                }
                return t
            }
        },
        parse: function(t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) {
                e.setFromString(n, i)
            })
        },
        toString: function(t) {
            var e = [];
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    if (!n.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) {
                        continue
                    }
                    if (i[0] !== "_") {
                        if (t && i === "scale") {
                            e.push(i + "3d(" + this[i] + ",1)")
                        } else if (t && i === "translate") {
                            e.push(i + "3d(" + this[i] + ",0)")
                        } else {
                            e.push(i + "(" + this[i] + ")")
                        }
                    }
                }
            }
            return e.join(" ")
        }
    };

    function c(t, e, n) {
        if (e === true) {
            t.queue(n)
        } else if (e) {
            t.queue(e, n)
        } else {
            t.each(function() {
                n.call(this)
            })
        }
    }

    function l(e) {
        var i = [];
        t.each(e, function(e) {
            e = t.camelCase(e);
            e = t.transit.propertyMap[e] || t.cssProps[e] || e;
            e = h(e);
            if (n[e]) e = h(n[e]);
            if (t.inArray(e, i) === -1) {
                i.push(e)
            }
        });
        return i
    }

    function d(e, n, i, r) {
        var s = l(e);
        if (t.cssEase[i]) {
            i = t.cssEase[i]
        }
        var a = "" + y(n) + " " + i;
        if (parseInt(r, 10) > 0) {
            a += " " + y(r)
        }
        var o = [];
        t.each(s, function(t, e) {
            o.push(e + " " + a)
        });
        return o.join(", ")
    }
    t.fn.transition = t.fn.transit = function(e, i, r, s) {
        var a = this;
        var u = 0;
        var f = true;
        var l = t.extend(true, {}, e);
        if (typeof i === "function") {
            s = i;
            i = undefined
        }
        if (typeof i === "object") {
            r = i.easing;
            u = i.delay || 0;
            f = typeof i.queue === "undefined" ? true : i.queue;
            s = i.complete;
            i = i.duration
        }
        if (typeof r === "function") {
            s = r;
            r = undefined
        }
        if (typeof l.easing !== "undefined") {
            r = l.easing;
            delete l.easing
        }
        if (typeof l.duration !== "undefined") {
            i = l.duration;
            delete l.duration
        }
        if (typeof l.complete !== "undefined") {
            s = l.complete;
            delete l.complete
        }
        if (typeof l.queue !== "undefined") {
            f = l.queue;
            delete l.queue
        }
        if (typeof l.delay !== "undefined") {
            u = l.delay;
            delete l.delay
        }
        if (typeof i === "undefined") {
            i = t.fx.speeds._default
        }
        if (typeof r === "undefined") {
            r = t.cssEase._default
        }
        i = y(i);
        var p = d(l, i, r, u);
        var h = t.transit.enabled && n.transition;
        var b = h ? parseInt(i, 10) + parseInt(u, 10) : 0;
        if (b === 0) {
            var g = function(t) {
                a.css(l);
                if (s) {
                    s.apply(a)
                }
                if (t) {
                    t()
                }
            };
            c(a, f, g);
            return a
        }
        var m = {};
        var v = function(e) {
            var i = false;
            var r = function() {
                if (i) {
                    a.unbind(o, r)
                }
                if (b > 0) {
                    a.each(function() {
                        this.style[n.transition] = m[this] || null
                    })
                }
                if (typeof s === "function") {
                    s.apply(a)
                }
                if (typeof e === "function") {
                    e()
                }
            };
            if (b > 0 && o && t.transit.useTransitionEnd) {
                i = true;
                a.bind(o, r)
            } else {
                window.setTimeout(r, b)
            }
            a.each(function() {
                if (b > 0) {
                    this.style[n.transition] = p
                }
                t(this).css(l)
            })
        };
        var z = function(t) {
            this.offsetWidth;
            v(t)
        };
        c(a, f, z);
        return this
    };

    function p(e, i) {
        if (!i) {
            t.cssNumber[e] = true
        }
        t.transit.propertyMap[e] = n.transform;
        t.cssHooks[e] = {
            get: function(n) {
                var i = t(n).css("transit:transform");
                return i.get(e)
            },
            set: function(n, i) {
                var r = t(n).css("transit:transform");
                r.setFromString(e, i);
                t(n).css({
                    "transit:transform": r
                })
            }
        }
    }

    function h(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }

    function b(t, e) {
        if (typeof t === "string" && !t.match(/^[\-0-9\.]+$/)) {
            return t
        } else {
            return "" + t + e
        }
    }

    function y(e) {
        var n = e;
        if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
            n = t.fx.speeds[n] || t.fx.speeds._default
        }
        return b(n, "ms")
    }
    t.transit.getTransitionValue = d;
    return t
});
/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
(function(a) {
    a.fn.waterwheelCarousel = function(r) {
        if (this.length > 1) {
            this.each(function() {
                a(this).waterwheelCarousel(r)
            });
            return this
        }
        var m = this;
        var c = {};
        var t = {};

        function j() {
            t = {
                itemsContainer: a(m),
                totalItems: a(m).find("img").length,
                containerWidth: a(m).width(),
                containerHeight: a(m).height(),
                currentCenterItem: null,
                previousCenterItem: null,
                items: [],
                calculations: [],
                carouselRotationsLeft: 0,
                currentlyMoving: false,
                itemsAnimating: 0,
                currentSpeed: c.speed,
                intervalTimer: null,
                currentDirection: "forward",
                leftItemsCount: 0,
                rightItemsCount: 0,
                performingSetup: true
            };
            t.itemsContainer.find("img").removeClass(c.activeClassName)
        }

        function l(u) {
            clearTimeout(t.autoPlayTimer);
            if (!u && c.autoPlay !== 0) {
                t.autoPlayTimer = setTimeout(function() {
                    if (c.autoPlay > 0) {
                        n("forward")
                    } else {
                        n("backward")
                    }
                }, Math.abs(c.autoPlay))
            }
        }

        function h(x) {
            if (c.preloadImages === false) {
                x();
                return
            }
            var v = t.itemsContainer.find("img"),
                u = 0,
                w = v.length;
            v.each(function() {
                a(this).bind("load", function() {
                    u += 1;
                    if (u === w) {
                        x();
                        return
                    }
                });
                a(this).attr("src", a(this).attr("src"));
                if (this.complete) {
                    a(this).trigger("load")
                }
            })
        }

        function d() {
            t.itemsContainer.find("img").each(function() {
                if (a(this).data("original_width") == undefined || c.forcedImageWidth > 0) {
                    a(this).data("original_width", a(this).width())
                }
                if (a(this).data("original_height") == undefined || c.forcedImageHeight > 0) {
                    a(this).data("original_height", a(this).height())
                }
            })
        }

        function e() {
            if (c.forcedImageWidth && c.forcedImageHeight) {
                t.itemsContainer.find("img").each(function() {
                    a(this).width(c.forcedImageWidth);
                    a(this).height(c.forcedImageHeight)
                })
            }
        }

        function s() {
            var v = t.itemsContainer.find("img:first");
            t.calculations[0] = {
                distance: 0,
                offset: 0,
                opacity: 1
            };
            var u = c.horizonOffset;
            var x = c.separation;
            for (var w = 1; w <= c.flankingItems + 2; w++) {
                if (w > 1) {
                    u *= c.horizonOffsetMultiplier;
                    x *= c.separationMultiplier
                }
                t.calculations[w] = {
                    distance: t.calculations[w - 1].distance + x,
                    offset: t.calculations[w - 1].offset + u,
                    opacity: t.calculations[w - 1].opacity * c.opacityMultiplier
                }
            }
            if (c.edgeFadeEnabled) {
                t.calculations[c.flankingItems + 1].opacity = 0
            } else {
                t.calculations[c.flankingItems + 1] = {
                    distance: 0,
                    offset: 0,
                    opacity: 0
                }
            }
        }

        function b() {
            t.items = t.itemsContainer.find("img");
            for (var u = 0; u < t.totalItems; u++) {
                t.items[u] = a(t.items[u])
            }
            if (c.horizon === 0) {
                if (c.orientation === "horizontal") {
                    c.horizon = t.containerHeight / 2
                } else {
                    c.horizon = t.containerWidth / 2
                }
            }
            t.itemsContainer.css("position", "relative").find("img").each(function() {
                var w, v;
                if (c.orientation === "horizontal") {
                    w = (t.containerWidth / 2) - (a(this).data("original_width") / 2);
                    v = c.horizon - (a(this).data("original_height") / 2)
                } else {
                    w = c.horizon - (a(this).data("original_width") / 2);
                    v = (t.containerHeight / 2) - (a(this).data("original_height") / 2)
                }
                a(this).css({
                    left: w,
                    top: v,
                    visibility: "visible",
                    position: "absolute",
                    "z-index": 0,
                    opacity: 0
                }).data({
                    top: v,
                    left: w,
                    oldPosition: 0,
                    currentPosition: 0,
                    depth: 0,
                    opacity: 0
                }).show()
            })
        }

        function q() {
            c.startingItem = (c.startingItem === 0) ? Math.round(t.totalItems / 2) : c.startingItem;
            t.rightItemsCount = Math.ceil((t.totalItems - 1) / 2);
            t.leftItemsCount = Math.floor((t.totalItems - 1) / 2);
            t.carouselRotationsLeft = 1;
            k(t.items[c.startingItem - 1], 0);
            t.items[c.startingItem - 1].css("opacity", 1);
            var u = c.startingItem - 1;
            for (var v = 1; v <= t.rightItemsCount; v++) {
                (u < t.totalItems - 1) ? u += 1 : u = 0;
                t.items[u].css("opacity", 1);
                k(t.items[u], v)
            }
            var u = c.startingItem - 1;
            for (var v = -1; v >= t.leftItemsCount * -1; v--) {
                (u > 0) ? u -= 1 : u = t.totalItems - 1;
                t.items[u].css("opacity", 1);
                k(t.items[u], v)
            }
        }

        function f(I, y) {
            var z = Math.abs(y);
            if (z < c.flankingItems + 1) {
                var x = t.calculations[z]
            } else {
                var x = t.calculations[c.flankingItems + 1]
            }
            var A = Math.pow(c.sizeMultiplier, z);
            var C = A * I.data("original_width");
            var w = A * I.data("original_height");
            var v = Math.abs(I.width() - C);
            var B = Math.abs(I.height() - w);
            var D = x.offset;
            var J = x.distance;
            if (y < 0) {
                J *= -1
            }
            if (c.orientation == "horizontal") {
                var u = t.containerWidth / 2;
                var H = u + J - (C / 2);
                var F = c.horizon - D - (w / 2)
            } else {
                var u = t.containerHeight / 2;
                var H = c.horizon - D - (C / 2);
                var F = u + J - (w / 2)
            }
            var E;
            if (y === 0) {
                E = 1
            } else {
                E = x.opacity
            }
            var G = c.flankingItems + 2 - z;
            I.data("width", C);
            I.data("height", w);
            I.data("top", F);
            I.data("left", H);
            I.data("oldPosition", I.data("currentPosition"));
            I.data("depth", G);
            I.data("opacity", E)
        }

        function k(u, v) {
            if (Math.abs(v) <= c.flankingItems + 1) {
                f(u, v);
                t.itemsAnimating++;
                u.css("z-index", u.data().depth).animate({
                    left: u.data().left,
                    width: u.data().width,
                    height: u.data().height,
                    top: u.data().top,
                    opacity: u.data().opacity
                }, t.currentSpeed, c.animationEasing, function() {
                    g(u, v)
                })
            } else {
                u.data("currentPosition", v);
                if (u.data("oldPosition") === 0) {
                    u.css({
                        left: u.data().left,
                        width: u.data().width,
                        height: u.data().height,
                        top: u.data().top,
                        opacity: u.data().opacity,
                        "z-index": u.data().depth
                    })
                }
            }
        }

        function g(u, v) {
            t.itemsAnimating--;
            u.data("currentPosition", v);
            if (v === 0) {
                t.currentCenterItem = u
            }
            if (t.itemsAnimating === 0) {
                t.carouselRotationsLeft -= 1;
                t.currentlyMoving = false;
                if (t.carouselRotationsLeft > 0) {
                    p(0)
                } else {
                    t.currentSpeed = c.speed;
                    t.currentCenterItem.addClass(c.activeClassName);
                    if (t.performingSetup === false) {
                        c.movedToCenter(t.currentCenterItem);
                        c.movedFromCenter(t.previousCenterItem)
                    }
                    t.performingSetup = false;
                    l()
                }
            }
        }

        function p(v) {
            if (t.currentlyMoving === false) {
                t.currentCenterItem.removeClass(c.activeClassName);
                t.currentlyMoving = true;
                t.itemsAnimating = 0;
                t.carouselRotationsLeft += v;
                if (c.quickerForFurther === true) {
                    if (v > 1) {
                        t.currentSpeed = c.speed / v
                    }
                    t.currentSpeed = (t.currentSpeed < 100) ? 100 : t.currentSpeed
                }
                for (var y = 0; y < t.totalItems; y++) {
                    var w = a(t.items[y]);
                    var z = w.data("currentPosition");
                    var x;
                    if (t.currentDirection == "forward") {
                        x = z - 1
                    } else {
                        x = z + 1
                    }
                    var u = (x > 0) ? t.rightItemsCount : t.leftItemsCount;
                    if (Math.abs(x) > u) {
                        x = z * -1;
                        if (t.totalItems % 2 == 0) {
                            x += 1
                        }
                    }
                    k(w, x)
                }
            }
        }
        a(this).find("img").bind("click", function() {
            var v = a(this).data().currentPosition;
            if (c.imageNav == false) {
                return
            }
            if (Math.abs(v) >= c.flankingItems + 1) {
                return
            }
            if (t.currentlyMoving) {
                return
            }
            t.previousCenterItem = t.currentCenterItem;
            l(true);
            c.autoPlay = 0;
            var u = Math.abs(v);
            if (v == 0) {
                c.clickedCenter(a(this))
            } else {
                c.movingFromCenter(t.currentCenterItem);
                c.movingToCenter(a(this));
                if (v < 0) {
                    t.currentDirection = "backward";
                    p(u)
                } else {
                    if (v > 0) {
                        t.currentDirection = "forward";
                        p(u)
                    }
                }
            }
        });
        a(this).find("a").bind("click", function(u) {
            var v = a(this).find("img").data("currentPosition") == 0;
            if (c.linkHandling === 1 || (c.linkHandling === 2 && !v)) {
                u.preventDefault();
                return false
            }
        });

        function o() {
            var u = t.currentCenterItem.next();
            if (u.length <= 0) {
                u = t.currentCenterItem.parent().children().first()
            }
            return u
        }

        function i() {
            var u = t.currentCenterItem.prev();
            if (u.length <= 0) {
                u = t.currentCenterItem.parent().children().last()
            }
            return u
        }

        function n(u) {
            if (t.currentlyMoving === false) {
                t.previousCenterItem = t.currentCenterItem;
                c.movingFromCenter(t.currentCenterItem);
                if (u == "backward") {
                    c.movingToCenter(i());
                    t.currentDirection = "backward"
                } else {
                    if (u == "forward") {
                        c.movingToCenter(o());
                        t.currentDirection = "forward"
                    }
                }
            }
            p(1)
        }
        a(document).keydown(function(u) {
            if (c.keyboardNav) {
                if ((u.which === 37 && c.orientation == "horizontal") || (u.which === 38 && c.orientation == "vertical")) {
                    l(true);
                    c.autoPlay = 0;
                    n("backward")
                } else {
                    if ((u.which === 39 && c.orientation == "horizontal") || (u.which === 40 && c.orientation == "vertical")) {
                        l(true);
                        c.autoPlay = 0;
                        n("forward")
                    }
                }
                if (c.keyboardNavOverride && ((c.orientation == "horizontal" && (u.which === 37 || u.which === 39)) || (c.orientation == "vertical" && (u.which === 38 || u.which === 40)))) {
                    u.preventDefault();
                    return false
                }
            }
        });
        this.reload = function(v) {
            if (typeof v === "object") {
                var u = v
            } else {
                var u = {}
            }
            c = a.extend({}, a.fn.waterwheelCarousel.defaults, v);
            j();
            t.itemsContainer.find("img").hide();
            e();
            h(function() {
                d();
                s();
                b();
                q()
            })
        };
        this.next = function() {
            l(true);
            c.autoPlay = 0;
            n("forward")
        };
        this.prev = function() {
            l(true);
            c.autoPlay = 0;
            n("backward")
        };
        this.reload(r);
        return this
    };
    a.fn.waterwheelCarousel.defaults = {
        startingItem: 1,
        separation: 175,
        separationMultiplier: 0.6,
        horizonOffset: 0,
        horizonOffsetMultiplier: 1,
        sizeMultiplier: 0.7,
        opacityMultiplier: 0.8,
        horizon: 0,
        flankingItems: 3,
        speed: 300,
        animationEasing: "linear",
        quickerForFurther: true,
        edgeFadeEnabled: false,
        linkHandling: 2,
        autoPlay: 0,
        orientation: "horizontal",
        activeClassName: "carousel-center",
        keyboardNav: false,
        keyboardNavOverride: true,
        imageNav: true,
        preloadImages: true,
        forcedImageWidth: 0,
        forcedImageHeight: 0,
        movingToCenter: a.noop,
        movedToCenter: a.noop,
        clickedCenter: a.noop,
        movingFromCenter: a.noop,
        movedFromCenter: a.noop
    }
})(jQuery);
!
    function(t, e, i) {
        "use strict";
        var n = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),
            a = !! n,
            r = a && parseFloat(n[1]) < 7,
            d = navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),
            o = a ? "mousedown" : "click",
            l = "onwheel" in e ? "wheel" : "onmousewheel" in i ? "mousewheel" : "MouseScrollEvent" in e && "DOMMouseScroll MozMousePixelScroll",
            s = {
                fired: !1,
                fire: function() {
                    t(i).on(o, ".dk_options a", function() {
                        var e = t(this),
                            i = e.parent(),
                            n = e.parents(".dk_container").first();
                        return i.hasClass("disabled") || i.closest(".dk_optgroup", n).hasClass("disabled") || (i.hasClass("dk_option_current") || (b(e, n), $(e.parent(), n)), m(n)), !1
                    }).on(l, ".dk_options_inner", function(t) {
                        var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                        return a ? (this.scrollTop -= Math.round(e / 10), !1) : e > 0 && this.scrollTop <= 0 || 0 > e && this.scrollTop >= this.scrollHeight - this.offsetHeight ? !1 : !0
                    }).on({
                        "keydown.dk_nav": function(t) {
                            var e = v || _;
                            e && A(t, e)
                        },
                        click: function(e) {
                            var i, n = t(e.target);
                            if (v && 0 === n.closest(".dk_container").length) m(v);
                            else {
                                if (n.is(".dk_toggle, .dk_label")) return i = n.parents(".dk_container").first(), i.hasClass("dk_open") ? m(i) : (v && m(v), !i.attr("disabled") && x(i, e)), !1;
                                n.attr("for") && t("#dk_container_" + n.attr("for"))[0] && t("#dk_container_" + n.attr("for")).trigger("focus.dropkick")
                            }
                        }
                    }), this.fired = !0
                }
            },
            p = {},
            c = [],
            f = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                enter: 13,
                tab: 9,
                zero: 48,
                z: 90,
                last: 221
            },
            h = ['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}" aria-hidden="true">', '<a class="dk_toggle dk_label">{{ label }}</a>', '<div class="dk_options">', '<ul class="dk_options_inner" role="main" aria-hidden="true">', "</ul>", "</div>", "</div>"].join(""),
            u = '<li class="{{ current }}{{ disabled }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',
            k = '<li class="dk_optgroup{{ disabled }}"><span>{{ text }}</span>',
            g = {
                startSpeed: 400,
                theme: !1,
                changes: !1,
                syncReverse: !0,
                nativeMobile: !0,
                autoWidth: !0
            },
            v = null,
            _ = null,
            b = function(t, e, i) {
                var n = e.data("dropkick"),
                    a = n.$select,
                    r = t.length ? t : n.$original,
                    d = r.attr("data-dk-dropdown-value") || t.attr("value"),
                    o = r.text();
                e.find(".dk_label").html(o ? o : "&nbsp;"), i ? a.val(d) : a.val(d).trigger("change"), n.settings.change && !i && !n.settings.syncReverse && n.settings.change.call(a, d, o)
            },
            m = function(t) {
                t.removeClass("dk_open dk_open_top"), v = null
            },
            C = function(i) {
                if (i.data("dropkick").settings.fixedMove) return "up" == i.data("dropkick").settings.fixedMove ? !1 : !0;
                var n = i.find(".dk_toggle"),
                    a = i.find(".dk_options").outerHeight(),
                    r = t(e).height() - n.outerHeight() - n.offset().top + t(e).scrollTop(),
                    d = n.offset().top - t(e).scrollTop();
                return d > a ? r > a : !0
            },
            w = function(t, e, i) {
                var n = t.find(".dk_options_inner"),
                    a = e.prevAll("li").outerHeight() * e.prevAll("li").length + (e.closest(".dk_optgroup", n).length && e.closest(".dk_optgroup", n).prevAll("li").outerHeight() * e.closest(".dk_optgroup", n).prevAll("li").length),
                    r = n.scrollTop(),
                    d = n.height() + n.scrollTop() - e.outerHeight();
                (i && "keydown" === i.type || r > a || a > d) && n.scrollTop(a)
            },
            x = function(t, e) {
                var i = C(t),
                    n = "dk_open" + (i ? "" : " dk_open_top");
                t.find(".dk_options").css({
                    top: i ? t.find(".dk_toggle").outerHeight() - 1 : "",
                    bottom: i ? "" : t.find(".dk_toggle").outerHeight() - 1
                }), v = t.addClass(n), w(t, t.find(".dk_option_current"), e)
            },
            $ = function(t, e, i) {
                e.find(".dk_option_current").removeClass("dk_option_current"), t.addClass("dk_option_current"), w(e, t, i)
            },
            A = function(e, i) {
                var n, a, r, d, o, l, s, p, c, h = e.keyCode,
                    u = i.data("dropkick"),
                    k = String.fromCharCode(h),
                    g = i.find(".dk_options"),
                    v = i.hasClass("dk_open"),
                    _ = g.find("li:not(.disabled)"),
                    C = i.find(".dk_option_current"),
                    w = C.closest(".dk_optgroup", g),
                    A = _.first().hasClass("dk_optgroup") ? _.first().find("li:not(.disabled)").first() : _.first(),
                    y = _.last().hasClass("dk_optgroup") ? _.last().find("li:not(.disabled)").last() : _.last(),
                    T = [];
                switch (h) {
                    case f.enter:
                        v ? C.hasClass("disabled") || (b(C.find("a"), i), m(i)) : x(i, e), e.preventDefault();
                        break;
                    case f.tab:
                        v && (C.length && b(C.find("a"), i), m(i));
                        break;
                    case f.up:
                        v ? (d = C.prevAll("li:not(.disabled)").first(), d.hasClass("dk_optgroup") && (d = d.find("li:not(.disabled)").last()), !d.length && w.length && (d = w.prevAll("li:not(.disabled)").first().hasClass("dk_optgroup") ? w.prevAll("li:not(.disabled)").first().find("li:not(.disabled)").last() : w.prevAll("li:not(.disabled)").first()), $(d.length ? d : y, i, e)) : x(i, e), e.preventDefault();
                        break;
                    case f.down:
                        v ? (r = C.nextAll("li:not(.disabled)").first(), r.hasClass("dk_optgroup") && (r = r.find("li:not(.disabled)").first()), !r.length && w.length && (r = w.nextAll("li:not(.disabled)").first().hasClass("dk_optgroup") ? w.nextAll("li:not(.disabled)").first().find("li:not(.disabled)").first() : w.nextAll("li:not(.disabled)").first()), $(r.length ? r : A, i, e)) : x(i, e), e.preventDefault()
                }
                if (h >= f.zero && h <= f.z) {
                    for (o = (new Date).getTime(), null === u.finder || void 0 === u.finder ? (u.finder = k.toUpperCase(), u.timer = o) : o > parseInt(u.timer, 10) + 1e3 ? (u.finder = k.toUpperCase(), u.timer = o) : (u.finder = u.finder + k.toUpperCase(), u.timer = o), l = _.find("a"), n = t.unique(u.finder.split("")), s = 0, p = l.length; p > s; s++) if (c = t(l[s]), 1 === n.length && c.text()[0].toUpperCase() === n[0] && T.push(l[s]), 0 === c.html().toUpperCase().indexOf(u.finder) && !c.closest(".dk_optgroup", g).hasClass("disabled") && u.finder.length > 1) {
                        b(c, i), $(c.parent(), i, e);
                        break
                    }(u.finder.length > 1 && T.length > 1 && 1 === n.length || 1 === u.finder.length) && (a = t.inArray(C.find("a")[0], T), c = t(T).filter(function(t, e) {
                        return e !== C[0] && t > a
                    }), c = 0 === c.length ? t(T[0]) : c, b(c, i), $(c.parent(), i, e)), i.data("dropkick", u)
                }
            },
            y = function(e) {
                return t.trim(e).length > 0 ? e : !1
            },
            T = function(e, i) {
                var n, a, r, d, o, l = function(e) {
                        var n = e.val(),
                            a = e.html(),
                            r = void 0 !== e.attr("disabled");
                        return u.replace("{{ value }}", n).replace("{{ current }}", y(n) !== i.value || r ? "" : "dk_option_current").replace("{{ disabled }}", r ? "disabled" : "").replace("{{ text }}", t.trim(a) ? t.trim(a) : "&nbsp;")
                    },
                    s = e.replace("{{ id }}", i.id).replace("{{ label }}", i.label).replace("{{ tabindex }}", i.tabindex),
                    p = [];
                if (i.options && i.options.length) for (a = 0, r = i.options.length; r > a; a++) {
                    if (d = t(i.options[a]), d.is("option")) o = 0 === a && void 0 !== d.attr("selected") && void 0 !== d.attr("disabled") ? null : l(d);
                    else if (d.is("optgroup")) {
                        if (o = k.replace("{{ text }}", d.attr("label") || "---").replace("{{ disabled }}", void 0 !== d.attr("disabled") ? " disabled" : ""), t(i.options[a]).children().length) {
                            o += "<ul>";
                            for (var c = 0, f = t(i.options[a]).children().length; f > c; c++) {
                                var h = t(i.options[a]).children().eq(c);
                                o += l(h)
                            }
                            o += "</ul>"
                        }
                        o += "</li>"
                    }
                    p[p.length] = o
                }
                return n = t(s), n.find(".dk_options_inner").html(p.join("")), n
            };
        p.init = function(e) {
            return e = t.extend({}, g, e), h = e.dropdownTemplate ? e.dropdownTemplate : h, u = e.optionTemplate ? e.optionTemplate : u, !s.fired && s.fire(), this.each(function() {
                var i, n = t(this),
                    a = n.find(":selected").first(),
                    r = n.children(),
                    o = n.data("dropkick") || {},
                    l = n.attr("id") || n.attr("name"),
                    s = n.parent(".dk_wrap"),
                    p = e.width || s.length ? s.width() - (n.innerWidth() - n.width()) : n.outerWidth(),
                    f = n.attr("tabindex") || "0",
                    u = !! n.attr("disabled"),
                    k = !1;
                return o.id ? n : (o.settings = e, o.tabindex = f, o.id = l, o.$original = a, o.$select = n, o.value = y(n.val()) || y(a.attr("value")), o.label = a.text() ? a.text() : "&nbsp;", o.options = r, o.theme = e.theme || "default", k = T(h, o), o.settings.autoWidth && k.find(".dk_toggle").css({
                    width: p + "px"
                }), u && k.attr({
                    disabled: "disabled",
                    tabindex: -1
                }), n.before(k).appendTo(k.addClass("dk_theme_" + o.theme)), s.length ? (s.removeClass("dk_wrap"), k.show()) : k.fadeIn(e.startSpeed), o.$dk = k, n.data("dropkick", o), k.addClass(n.attr("class")), k.data("dropkick", o), c[c.length] = n, k.on({
                    "focus.dropkick": function() {
                        _ = !k.attr("disabled") && k.addClass("dk_focus")
                    },
                    "blur.dropkick": function() {
                        k.removeClass("dk_focus"), _ = null
                    }
                }), d && o.settings.nativeMobile && k.addClass("dk_mobile"), o.settings.syncReverse && n.on("change", function(e) {
                    var i = n.val(),
                        a = t('a[data-dk-dropdown-value="' + i + '"]', k),
                        r = a.text();
                    k.find(".dk_label").html(r ? r : "&nbsp;"), $(a.parent(), k, e), o.settings.change && o.settings.change.call(n, i, r)
                }), i = n.attr("form") ? t("#" + n.attr("form").replace(" ", ", #")) : n.closest("form"), void(i.length && i.on("reset", function() {
                    n.dropkick("reset")
                })))
            })
        }, p.theme = function(e) {
            var i = t(this).data("dropkick"),
                n = i.$dk,
                a = "dk_theme_" + i.theme;
            i.theme = e || i.theme, n.removeClass(a).addClass("dk_theme_" + e)
        }, p.reset = function(e) {
            return this.each(function() {
                var i = t(this).data("dropkick"),
                    n = i.$dk,
                    a = t('a[data-dk-dropdown-value="' + i.$original.attr("value") + '"]', n);
                i.$original.prop("selected", !0), $(a.parent(), n), b(a, n, !e)
            })
        }, p.setValue = function(e) {
            return this.each(function() {
                var i = t(this).data("dropkick").$dk,
                    n = t('.dk_options a[data-dk-dropdown-value="' + e + '"]', i);
                n.length && b(n, i) | $(n.parent(), i)
            })
        }, p.refresh = function(e) {
            return this.each(function() {
                var i, n, a = t(this).data("dropkick"),
                    r = a.$select,
                    d = a.$dk;
                a.options = r.children(), n = T(h, a).find(".dk_options_inner"), d.find(".dk_options_inner").replaceWith(n), a.$original.parent().length || (a.$original = r.find(":selected").first(), a.label = a.$original.text()), i = t('a[data-dk-dropdown-value="' + r.val() + '"]', d), $(i.parent(), d), b(i, d, !e)
            })
        }, p.destroy = function() {
            return this.each(function() {
                var e = t(this).data("dropkick");
                e.$dk.before(function() {
                    return e.$select.removeData("dropkick")
                }).remove()
            })
        }, p.clone = function(e, i, n) {
            var a = [];
            t.each(this, function(r) {
                var d = t(this).data("dropkick"),
                    o = d.settings,
                    l = d.$select.clone();
                o.autoWidth && (o.width = d.$dk.find(".dk_label").width()), i && l.attr({
                    id: i
                }), n && l.attr({
                    name: n
                }), l.removeData("dropkick"), e === !1 ? a[r] = l[0] : (l.dropkick(o), a[r] = l.data("dropkick").$dk[0])
            })
        }, p.disable = function(e) {
            return this.each(function() {
                var i = t(this).data("dropkick"),
                    n = i.$select,
                    a = i.$dk;
                e === !1 ? (n.removeAttr("disabled"), a.removeAttr("disabled").attr({
                    tabindex: i.tabindex
                })) : (a.hasClass("dk_open") && m(a), n.attr({
                    disabled: "disabled"
                }), a.attr({
                    disabled: "disabled",
                    tabindex: -1
                }))
            })
        }, t.fn.dropkick = function(t) {
            if (!r) {
                if (p[t]) return p[t].apply(this, Array.prototype.slice.call(arguments, 1));
                if ("object" == typeof t || !t) return p.init.apply(this, arguments)
            }
        }
    }(jQuery, window, document);
/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
;
(function($) {
    'use strict';

    $.fn.waterwheelCarousel = function(startingOptions) {

        // Adds support for intializing multiple carousels from the same selector group
        if (this.length > 1) {
            this.each(function() {
                $(this).waterwheelCarousel(startingOptions);
            });
            return this; // allow chaining
        }

        var carousel = this;
        var options = {};
        var data = {};

        function initializeCarouselData() {
            data = {
                itemsContainer: $(carousel),
                totalItems: $(carousel).find('img').length,
                containerWidth: $(carousel).width(),
                containerHeight: $(carousel).height(),
                currentCenterItem: null,
                previousCenterItem: null,
                items: [],
                calculations: [],
                carouselRotationsLeft: 0,
                currentlyMoving: false,
                itemsAnimating: 0,
                currentSpeed: options.speed,
                intervalTimer: null,
                currentDirection: 'forward',
                leftItemsCount: 0,
                rightItemsCount: 0,
                performingSetup: true
            };
            data.itemsContainer.find('img').removeClass(options.activeClassName);
        }

        /**
         * This function will set the autoplay for the carousel to
         * automatically rotate it given the time in the options
         * Can clear the autoplay by passing in true
         */

        function autoPlay(stop) {
            // clear timer
            clearTimeout(data.autoPlayTimer);
            // as long as no stop command, and autoplay isn't zeroed...
            if (!stop && options.autoPlay !== 0) {
                // set timer...
                data.autoPlayTimer = setTimeout(function() {
                    // to move the carousl in either direction...
                    if (options.autoPlay > 0) {
                        moveOnce('forward');
                    } else {
                        moveOnce('backward');
                    }
                }, Math.abs(options.autoPlay));
            }
        }

        /**
         * This function will preload all the images in the carousel before
         * calling the passed in callback function. This is only used so we can
         * properly determine the width and height of the items. This is not needed
         * if a user instead manually specifies that information.
         */

        function preload(callback) {
            if (options.preloadImages === false) {
                callback();
                return;
            }

            var $imageElements = data.itemsContainer.find('img'),
                loadedImages = 0,
                totalImages = $imageElements.length;

            $imageElements.each(function() {
                $(this).bind('load', function() {
                    // Add to number of images loaded and see if they are all done yet
                    loadedImages += 1;
                    if (loadedImages === totalImages) {
                        // All done, perform callback
                        callback();
                        return;
                    }
                });
                // May need to manually reset the src to get the load event to fire
                // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
                $(this).attr('src', $(this).attr('src'));

                // If browser has cached the images, it may not call trigger a load. Detect this and do it ourselves
                if (this.complete) {
                    $(this).trigger('load');
                }
            });
        }

        /**
         * Makes a record of the original width and height of all the items in the carousel.
         * If we re-intialize the carousel, these values can be used to re-establish their
         * original dimensions.
         */

        function setOriginalItemDimensions() {
            data.itemsContainer.find('img').each(function() {
                if ($(this).data('original_width') == undefined || options.forcedImageWidth > 0) {
                    $(this).data('original_width', $(this).width());
                }
                if ($(this).data('original_height') == undefined || options.forcedImageHeight > 0) {
                    $(this).data('original_height', $(this).height());
                }
            });
        }

        /**
         * Users can pass in a specific width and height that should be applied to every image.
         * While this option can be used in conjunction with the image preloader, the intended
         * use case is for when the preloader is turned off and the images don't have defined
         * dimensions in CSS. The carousel needs dimensions one way or another to work properly.
         */

        function forceImageDimensionsIfEnabled() {
            if (options.forcedImageWidth && options.forcedImageHeight) {
                data.itemsContainer.find('img').each(function() {
                    $(this).width(options.forcedImageWidth);
                    $(this).height(options.forcedImageHeight);
                });
            }
        }

        /**
         * For each "visible" item slot (# of flanking items plus the middle),
         * we pre-calculate all of the properties that the item should possess while
         * occupying that slot. This saves us some time during the actual animation.
         */

        function preCalculatePositionProperties() {
            // The 0 index is the center item in the carousel
            var $firstItem = data.itemsContainer.find('img:first');

            data.calculations[0] = {
                distance: 0,
                offset: 0,
                opacity: 1
            }

            // Then, for each number of flanking items (plus one more, see below), we
            // perform the calcations based on our user options
            var horizonOffset = options.horizonOffset;
            var separation = options.separation;
            for (var i = 1; i <= options.flankingItems + 2; i++) {
                if (i > 1) {
                    horizonOffset *= options.horizonOffsetMultiplier;
                    separation *= options.separationMultiplier;
                }
                data.calculations[i] = {
                    distance: data.calculations[i - 1].distance + separation,
                    offset: data.calculations[i - 1].offset + horizonOffset,
                    opacity: data.calculations[i - 1].opacity * options.opacityMultiplier
                }
            }
            // We performed 1 extra set of calculations above so that the items that
            // are moving out of sight (based on # of flanking items) gracefully animate there
            // However, we need them to animate to hidden, so we set the opacity to 0 for
            // that last item
            if (options.edgeFadeEnabled) {
                data.calculations[options.flankingItems + 1].opacity = 0;
            } else {
                data.calculations[options.flankingItems + 1] = {
                    distance: 0,
                    offset: 0,
                    opacity: 0
                }
            }
        }

        /**
         * Here we prep the carousel and its items, like setting default CSS
         * attributes. All items start in the middle position by default
         * and will "fan out" from there during the first animation
         */

        function setupCarousel() {
            // Fill in a data array with jQuery objects of all the images
            data.items = data.itemsContainer.find('img');
            for (var i = 0; i < data.totalItems; i++) {
                data.items[i] = $(data.items[i]);
            }

            // May need to set the horizon if it was set to auto
            if (options.horizon === 0) {
                if (options.orientation === 'horizontal') {
                    options.horizon = data.containerHeight / 2;
                } else {
                    options.horizon = data.containerWidth / 2;
                }
            }

            // Default all the items to the center position
            data.itemsContainer.css('position', 'relative').find('img').each(function() {
                // Figure out where the top and left positions for center should be
                var centerPosLeft, centerPosTop;
                if (options.orientation === 'horizontal') {
                    centerPosLeft = (data.containerWidth / 2) - ($(this).data('original_width') / 2);
                    centerPosTop = options.horizon - ($(this).data('original_height') / 2);
                } else {
                    centerPosLeft = options.horizon - ($(this).data('original_width') / 2);
                    centerPosTop = (data.containerHeight / 2) - ($(this).data('original_height') / 2);
                }
                $(this)
                // Apply positioning and layering to the images
                    .css({
                        'left': centerPosLeft,
                        'top': centerPosTop,
                        'visibility': 'visible',
                        'position': 'absolute',
                        'z-index': 0,
                        'opacity': 0
                    })
                    // Give each image a data object so it remembers specific data about
                    // it's original form
                    .data({
                        top: centerPosTop,
                        left: centerPosLeft,
                        oldPosition: 0,
                        currentPosition: 0,
                        depth: 0,
                        opacity: 0
                    })
                    // The image has been setup... Now we can show it
                    .show();
            });
        }

        /**
         * All the items to the left and right of the center item need to be
         * animated to their starting positions. This function will
         * figure out what items go where and will animate them there
         */

        function setupStarterRotation() {
            options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;

            data.rightItemsCount = Math.ceil((data.totalItems - 1) / 2);
            data.leftItemsCount = Math.floor((data.totalItems - 1) / 2);

            // We are in effect rotating the carousel, so we need to set that
            data.carouselRotationsLeft = 1;

            // Center item
            moveItem(data.items[options.startingItem - 1], 0);
            data.items[options.startingItem - 1].css('opacity', 1);

            // All the items to the right of center
            var itemIndex = options.startingItem - 1;
            for (var pos = 1; pos <= data.rightItemsCount; pos++) {
                (itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;

                data.items[itemIndex].css('opacity', 1);
                moveItem(data.items[itemIndex], pos);
            }

            // All items to left of center
            var itemIndex = options.startingItem - 1;
            for (var pos = -1; pos >= data.leftItemsCount * -1; pos--) {
                (itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;

                data.items[itemIndex].css('opacity', 1);
                moveItem(data.items[itemIndex], pos);
            }
        }

        /**
         * Given the item and position, this function will calculate the new data
         * for the item. One the calculations are done, it will store that data in
         * the items data object
         */

        function performCalculations($item, newPosition) {
            var newDistanceFromCenter = Math.abs(newPosition);

            // Distance to the center
            if (newDistanceFromCenter < options.flankingItems + 1) {
                var calculations = data.calculations[newDistanceFromCenter];
            } else {
                var calculations = data.calculations[options.flankingItems + 1];
            }

            var distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter)
            var newWidth = distanceFactor * $item.data('original_width');
            var newHeight = distanceFactor * $item.data('original_height');
            var widthDifference = Math.abs($item.width() - newWidth);
            var heightDifference = Math.abs($item.height() - newHeight);

            var newOffset = calculations.offset
            var newDistance = calculations.distance;
            if (newPosition < 0) {
                newDistance *= -1;
            }

            if (options.orientation == 'horizontal') {
                var center = data.containerWidth / 2;
                var newLeft = center + newDistance - (newWidth / 2);
                var newTop = options.horizon - newOffset - (newHeight / 2);
            } else {
                var center = data.containerHeight / 2;
                var newLeft = options.horizon - newOffset - (newWidth / 2);
                var newTop = center + newDistance - (newHeight / 2);
            }

            var newOpacity;
            if (newPosition === 0) {
                newOpacity = 1;
            } else {
                newOpacity = calculations.opacity;
            }

            // Depth will be reverse distance from center
            var newDepth = options.flankingItems + 2 - newDistanceFromCenter;

            $item.data('width', newWidth);
            $item.data('height', newHeight);
            $item.data('top', newTop);
            $item.data('left', newLeft);
            $item.data('oldPosition', $item.data('currentPosition'));
            $item.data('depth', newDepth);
            $item.data('opacity', newOpacity);
        }

        function moveItem($item, newPosition) {
            // Only want to physically move the item if it is within the boundaries
            // or in the first position just outside either boundary
            if (Math.abs(newPosition) <= options.flankingItems + 1) {
                performCalculations($item, newPosition);
                data.itemsAnimating++;
                var borderW = $item.data().depth == 3 ? options.activeBorder : '0px'
                $item.css('z-index', $item.data().depth)
                // Animate the items to their new position values
                    .animate({
                        left: $item.data().left,
                        width: $item.data().width,
                        height: $item.data().height,
                        top: $item.data().top,
                        opacity: $item.data().opacity,
                        'border-width': borderW
                    }, data.currentSpeed, options.animationEasing, function() {
                        // Animation for the item has completed, call method
                        itemAnimationComplete($item, newPosition);
                    });

            } else {
                $item.data('currentPosition', newPosition)
                // Move the item to the 'hidden' position if hasn't been moved yet
                // This is for the intitial setup
                if ($item.data('oldPosition') === 0) {
                    $item.css({
                        'left': $item.data().left,
                        'width': $item.data().width,
                        'height': $item.data().height,
                        'top': $item.data().top,
                        'opacity': $item.data().opacity,
                        'z-index': $item.data().depth
                    });
                }
            }

        }

        /**
         * This function is called once an item has finished animating to its
         * given position. Several different statements are executed here, such as
         * dealing with the animation queue
         */

        function itemAnimationComplete($item, newPosition) {
            data.itemsAnimating--;

            $item.data('currentPosition', newPosition);

            // Keep track of what items came and left the center position,
            // so we can fire callbacks when all the rotations are completed
            if (newPosition === 0) {
                data.currentCenterItem = $item;
            }

            // all items have finished their rotation, lets clean up
            if (data.itemsAnimating === 0) {
                data.carouselRotationsLeft -= 1;
                data.currentlyMoving = false;

                // If there are still rotations left in the queue, rotate the carousel again
                // we pass in zero because we don't want to add any additional rotations
                if (data.carouselRotationsLeft > 0) {
                    rotateCarousel(0);
                    // Otherwise there are no more rotations and...
                } else {
                    // Reset the speed of the carousel to original
                    data.currentSpeed = options.speed;

                    data.currentCenterItem.addClass(options.activeClassName);

                    if (data.performingSetup === false) {
                        options.movedToCenter(data.currentCenterItem);
                        options.movedFromCenter(data.previousCenterItem);
                    }

                    data.performingSetup = false;
                    // reset & initate the autoPlay
                    autoPlay();
                }
            }
        }

        /**
         * Function called to rotate the carousel the given number of rotations
         * in the given direciton. Will check to make sure the carousel should
         * be able to move, and then adjust speed and move items
         */

        function rotateCarousel(rotations) {
            // Check to see that a rotation is allowed
            if (data.currentlyMoving === false) {

                // Remove active class from the center item while we rotate
                data.currentCenterItem.removeClass(options.activeClassName);

                data.currentlyMoving = true;
                data.itemsAnimating = 0;
                data.carouselRotationsLeft += rotations;

                if (options.quickerForFurther === true) {
                    // Figure out how fast the carousel should rotate
                    if (rotations > 1) {
                        data.currentSpeed = options.speed / rotations;
                    }
                    // Assure the speed is above the minimum to avoid weird results
                    data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
                }

                // Iterate thru each item and move it
                for (var i = 0; i < data.totalItems; i++) {
                    var $item = $(data.items[i]);
                    var currentPosition = $item.data('currentPosition');

                    var newPosition;
                    if (data.currentDirection == 'forward') {
                        newPosition = currentPosition - 1;
                    } else {
                        newPosition = currentPosition + 1;
                    }
                    // We keep both sides as even as possible to allow circular rotation to work.
                    // We will "wrap" the item arround to the other side by negating its current position
                    var flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
                    if (Math.abs(newPosition) > flankingAllowance) {
                        newPosition = currentPosition * -1;
                        // If there's an uneven number of "flanking" items, we need to compenstate for that
                        // when we have an item switch sides. The right side will always have 1 more in that case
                        if (data.totalItems % 2 == 0) {
                            newPosition += 1;
                        }
                    }

                    moveItem($item, newPosition);
                }
            }
        }

        /**
         * The event handler when an image within the carousel is clicked
         * This function will rotate the carousel the correct number of rotations
         * to get the clicked item to the center, or will fire the custom event
         * the user passed in if the center item is clicked
         */
        $(this).find('img').bind("click", function() {
            var itemPosition = $(this).data().currentPosition;

            if (options.imageNav == false) {
                return;
            }
            // Don't allow hidden items to be clicked
            if (Math.abs(itemPosition) >= options.flankingItems + 1) {
                return;
            }
            // Do nothing if the carousel is already moving
            if (data.currentlyMoving) {
                return;
            }

            data.previousCenterItem = data.currentCenterItem;

            // Remove autoplay
            autoPlay(true);
            options.autoPlay = 0;

            var rotations = Math.abs(itemPosition);
            if (itemPosition == 0) {
                options.clickedCenter($(this));
            } else {
                // Fire the 'moving' callbacks
                options.movingFromCenter(data.currentCenterItem);
                options.movingToCenter($(this));
                if (itemPosition < 0) {
                    data.currentDirection = 'backward';
                    rotateCarousel(rotations);
                } else if (itemPosition > 0) {
                    data.currentDirection = 'forward';
                    rotateCarousel(rotations);
                }
            }
        });


        /**
         * The user may choose to wrap the images is link tags. If they do this, we need to
         * make sure that they aren't active for certain situations
         */
        $(this).find('a').bind("click", function(event) {
            var isCenter = $(this).find('img').data('currentPosition') == 0;
            // should we disable the links?
            if (options.linkHandling === 1 || // turn off all links
                (options.linkHandling === 2 && !isCenter)) // turn off all links except center
            {
                event.preventDefault();
                return false;
            }
        });

        function nextItemFromCenter() {
            var $next = data.currentCenterItem.next();
            if ($next.length <= 0) {
                $next = data.currentCenterItem.parent().children().first();
            }
            return $next;
        }

        function prevItemFromCenter() {
            var $prev = data.currentCenterItem.prev();
            if ($prev.length <= 0) {
                $prev = data.currentCenterItem.parent().children().last();
            }
            return $prev;
        }

        /**
         * Intiate a move of the carousel in either direction. Takes care of firing
         * the 'moving' callbacks
         */

        function moveOnce(direction) {
            if (data.currentlyMoving === false) {
                data.previousCenterItem = data.currentCenterItem;

                options.movingFromCenter(data.currentCenterItem);
                if (direction == 'backward') {
                    options.movingToCenter(prevItemFromCenter());
                    data.currentDirection = 'backward';
                } else if (direction == 'forward') {
                    options.movingToCenter(nextItemFromCenter());
                    data.currentDirection = 'forward';
                }
            }

            rotateCarousel(1);
        }

        /**
         * Navigation with arrow keys
         */
        $(document).keydown(function(e) {
            if (options.keyboardNav) {
                // arrow left or up
                if ((e.which === 37 && options.orientation == 'horizontal') || (e.which === 38 && options.orientation == 'vertical')) {
                    autoPlay(true);
                    options.autoPlay = 0;
                    moveOnce('backward');
                    // arrow right or down
                } else if ((e.which === 39 && options.orientation == 'horizontal') || (e.which === 40 && options.orientation == 'vertical')) {
                    autoPlay(true);
                    options.autoPlay = 0;
                    moveOnce('forward');
                }
                // should we override the normal functionality for the arrow keys?
                if (options.keyboardNavOverride && ((options.orientation == 'horizontal' && (e.which === 37 || e.which === 39)) || (options.orientation == 'vertical' && (e.which === 38 || e.which === 40)))) {
                    e.preventDefault();
                    return false;
                }
            }
        });

        /**
         * Public API methods
         */
        this.reload = function(newOptions) {
            if (typeof newOptions === "object") {
                var combineDefaultWith = newOptions;
            } else {
                var combineDefaultWith = {};
            }
            options = $.extend({}, $.fn.waterwheelCarousel.defaults, newOptions);

            initializeCarouselData();
            data.itemsContainer.find('img').hide();
            forceImageDimensionsIfEnabled();

            preload(function() {
                setOriginalItemDimensions();
                preCalculatePositionProperties();
                setupCarousel();
                setupStarterRotation();
            });
        }

        this.next = function() {
            autoPlay(true);
            options.autoPlay = 0;

            moveOnce('forward');
        }
        this.prev = function() {
            autoPlay(true);
            options.autoPlay = 0;

            moveOnce('backward');
        }

        this.reload(startingOptions);

        return this;
    };

    $.fn.waterwheelCarousel.defaults = {
        // number tweeks to change apperance
        startingItem: 1,
        // item to place in the center of the carousel. Set to 0 for auto
        separation: 175,
        // distance between items in carousel
        separationMultiplier: 0.6,
        // multipled by separation distance to increase/decrease distance for each additional item
        horizonOffset: 0,
        // offset each item from the "horizon" by this amount (causes arching)
        horizonOffsetMultiplier: 1,
        // multipled by horizon offset to increase/decrease offset for each additional item
        sizeMultiplier: 0.7,
        // determines how drastically the size of each item changes
        opacityMultiplier: 0.8,
        // determines how drastically the opacity of each item changes
        horizon: 0,
        // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto
        flankingItems: 3,
        // the number of items visible on either side of the center

        // animation
        speed: 300,
        // speed in milliseconds it will take to rotate from one to the next
        animationEasing: 'linear',
        // the easing effect to use when animating
        quickerForFurther: true,
        // set to true to make animations faster when clicking an item that is far away from the center
        edgeFadeEnabled: false,
        // when true, items fade off into nothingness when reaching the edge. false to have them move behind the center image

        // misc
        linkHandling: 2,
        // 1 to disable all (used for facebox), 2 to disable all but center (to link images out)
        autoPlay: 0,
        // indicate the speed in milliseconds to wait before autorotating. 0 to turn off. Can be negative
        orientation: 'horizontal',
        // indicate if the carousel should be 'horizontal' or 'vertical'
        activeClassName: 'carousel-center',
        // the name of the class given to the current item in the center
        keyboardNav: false,
        // set to true to move the carousel with the arrow keys
        keyboardNavOverride: true,
        // set to true to override the normal functionality of the arrow keys (prevents scrolling)
        imageNav: true,
        // clicking a non-center image will rotate that image to the center

        // preloader
        preloadImages: true,
        // disable/enable the image preloader.
        forcedImageWidth: 0,
        // specify width of all images; otherwise the carousel tries to calculate it
        forcedImageHeight: 0,
        // specify height of all images; otherwise the carousel tries to calculate it

        // callback functions
        movingToCenter: $.noop,
        // fired when an item is about to move to the center position
        movedToCenter: $.noop,
        // fired when an item has finished moving to the center
        clickedCenter: $.noop,
        // fired when the center item has been clicked
        movingFromCenter: $.noop,
        // fired when an item is about to leave the center position
        movedFromCenter: $.noop // fired when an item has finished moving from the center
    };

})(jQuery);

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                    c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
                }), this.on("submit.validate", function(b) {
                    function d() {
                        var d, e;
                        return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() {
                var b, c, d;
                return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                    b = c.element(this) && b, b || (d = d.concat(c.errorList))
                }), c.errorList = d), b
            },
            rules: function(b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                    if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                        case "add":
                            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                            break;
                        case "remove":
                            return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
                                i[b] = f[b], delete f[b]
                            }), i) : (delete e[j.name], f)
                    }
                    return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                        required: h
                    }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                        remote: h
                    })), g
                }
            }
        }), a.extend(a.expr.pseudos || a.expr[":"], {
            blank: function(b) {
                return !a.trim("" + a(b).val())
            },
            filled: function(b) {
                var c = a(b).val();
                return null !== c && !! a.trim("" + c)
            },
            unchecked: function(b) {
                return !a(b).prop("checked")
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ?
                function() {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c)
                } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
                    b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                        return c
                    })
                }), b)
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) {
                    this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
                },
                onfocusout: function(a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                },
                onkeyup: function(b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
                },
                onclick: function(a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                },
                unhighlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                }
            },
            setDefaults: function(b) {
                a.extend(a.validator.defaults, b)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}."),
                step: a.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
                        var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) {
                        "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                            d[c] = b
                        })
                    }), c = this.settings.rules, a.each(c, function(b, d) {
                        c[b] = a.validator.normalizeRule(d)
                    }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid()
                },
                element: function(b) {
                    var c, d, e = this.clean(b),
                        f = this.validationTargetFor(e),
                        g = this,
                        h = !0;
                    return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                        b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                    }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
                },
                showErrors: function(b) {
                    if (b) {
                        var c = this;
                        a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                            return {
                                message: a,
                                element: c.findByName(b)[0]
                            }
                        }), this.successList = a.grep(this.successList, function(a) {
                            return !(a.name in b)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(b)
                },
                resetElements: function(a) {
                    var b;
                    if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                    else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(a) {
                    var b, c = 0;
                    for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                    return c
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                },
                findLastActive: function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function(a) {
                        return a.element.name === b.name
                    }).length && b
                },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var d = this.name || a(this).attr("name");
                        return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
                    })
                },
                clean: function(b) {
                    return a(b)[0]
                },
                errors: function() {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = a([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(a) {
                    this.reset(), this.toHide = this.errorsFor(a)
                },
                elementValue: function(b) {
                    var c, d, e = a(b),
                        f = b.type;
                    return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f, g = a(b).rules(),
                        h = a.map(g, function(a, b) {
                            return b
                        }).length,
                        i = !1,
                        j = this.elementValue(b);
                    if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
                        if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
                        delete g.normalizer
                    }
                    for (d in g) {
                        e = {
                            method: d,
                            parameters: g[d]
                        };
                        try {
                            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                                i = !0;
                                continue
                            }
                            if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1
                        } catch (k) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                        }
                    }
                    if (!i) return this.objectLength(g) && this.successList.push(b), !0
                },
                customDataMessage: function(b, c) {
                    return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
                },
                customMessage: function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b])
                },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
                },
                defaultMessage: function(b, c) {
                    "string" == typeof c && (c = {
                        method: c
                    });
                    var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                        e = /\$?\{(\d+)\}/g;
                    return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
                },
                formatAndAdd: function(a, b) {
                    var c = this.defaultMessage(a, b);
                    this.errorList.push({
                        message: c,
                        element: a,
                        method: b.method
                    }), this.errorMap[a.name] = c, this.submitted[a.name] = c
                },
                addWrapper: function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                },
                defaultShowErrors: function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return a(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(b, c) {
                    var d, e, f, g, h = this.errorsFor(b),
                        i = this.idOrName(b),
                        j = a(b).attr("aria-describedby");
                    h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                        c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                    })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
                },
                errorsFor: function(b) {
                    var c = this.escapeCssMeta(this.idOrName(b)),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
                },
                escapeCssMeta: function(a) {
                    return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                },
                validationTargetFor: function(b) {
                    return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
                },
                checkable: function(a) {
                    return /radio|checkbox/i.test(a.type)
                },
                findByName: function(b) {
                    return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
                },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) {
                    return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
                },
                dependTypes: {
                    "boolean": function(a) {
                        return a
                    },
                    string: function(b, c) {
                        return !!a(b, c.form).length
                    },
                    "function": function(a, b) {
                        return a(b)
                    }
                },
                optional: function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                },
                startRequest: function(b) {
                    this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
                },
                stopRequest: function(b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(b, c) {
                    return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, {
                            method: c
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
            },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                }), c
            },
            normalizeAttributeRule: function(a, b, c, d) {
                /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
            },
            attributeRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods)"required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !! d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            dataRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
                return e
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !! a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                    }
                }), a.each(b, function(d, e) {
                    b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
                }), a.each(["minlength", "maxlength"], function() {
                    b[this] && (b[this] = Number(b[this]))
                }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() {
                        c[this] = !0
                    }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
            },
            methods: {
                required: function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
                },
                email: function(a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
                },
                url: function(a, b) {
                    return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)(?:\.(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)*(?:\.(?:[a-z¡-￿]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
                },
                date: function(a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
                },
                dateISO: function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
                },
                number: function(a, b) {
                    return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                },
                digits: function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a)
                },
                minlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d
                },
                maxlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e <= d
                },
                rangelength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d[0] && e <= d[1]
                },
                min: function(a, b, c) {
                    return this.optional(b) || a >= c
                },
                max: function(a, b, c) {
                    return this.optional(b) || a <= c
                },
                range: function(a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1]
                },
                step: function(b, c, d) {
                    var e, f = a(c).attr("type"),
                        g = "Step attribute on input type " + f + " is not supported.",
                        h = ["text", "number", "range"],
                        i = new RegExp("\\b" + f + "\\b"),
                        j = f && !i.test(h.join()),
                        k = function(a) {
                            var b = ("" + a).match(/(?:\.(\d+))?$/);
                            return b && b[1] ? b[1].length : 0
                        },
                        l = function(a) {
                            return Math.round(a * Math.pow(10, e))
                        },
                        m = !0;
                    if (j) throw new Error(g);
                    return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
                },
                equalTo: function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        a(c).valid()
                    }), b === e.val()
                },
                remote: function(b, c, d, e) {
                    if (this.optional(c)) return "dependency-mismatch";
                    e = "string" == typeof e && e || "remote";
                    var f, g, h, i = this.previousValue(c, e);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                        url: d
                    } || d, h = a.param(a.extend({
                        data: b
                    }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: g,
                        context: f.currentForm,
                        success: function(a) {
                            var d, g, h, j = a === !0 || "true" === a;
                            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                                method: e,
                                parameters: b
                            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                        }
                    }, d)), "pending")
                }
            }
        });
        var b, c = {};
        return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
        }) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
        }), a
    });