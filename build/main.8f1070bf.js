/*! For license information please see main.8f1070bf.js.LICENSE.txt */
(() => {
  var t = {
    282: (t, e, r) => {
      "use strict";
      var n = r(155);
      var o = r(108);
      function a(t) {
        return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, a(t);
      }
      var i = r(136).codes, c = i.ERR_AMBIGUOUS_ARGUMENT, u = i.ERR_INVALID_ARG_TYPE, f = i.ERR_INVALID_ARG_VALUE, l = i.ERR_INVALID_RETURN_VALUE, p = i.ERR_MISSING_ARGS;
      var s = r(961);
      var y = r(539).inspect;
      var v = r(539).types, g = v.isPromise, b = v.isRegExp;
      var d = Object.assign ? Object.assign : r(91).assign;
      var h = Object.is ? Object.is : r(609);
      new Map;
      var m;
      var w;
      function O() {
        var t = r(158);
        m = t.isDeepEqual, w = t.isDeepStrictEqual;
      }
      var S = !1;
      var E = t.exports = x;
      var j = {};
      function A(t) {
        if (t.message instanceof Error) throw t.message;
        throw new s(t);
      }
      function P(t, e, r, n) {
        if (!r) {
          var o = !1;
          if (0 === e) o = !0, n = 'No value argument passed to `assert.ok()`'; else if (n instanceof Error) throw n;
          var a = new s({
            actual: r,
            expected: !0,
            message: n,
            operator: '==',
            stackStartFn: t
          });
          throw a.generatedMessage = o, a;
        }
      }
      function x() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        P.apply(void 0, [ x, e.length ].concat(e));
      }
      E.fail = function t(e, r, a, i, c) {
        var u = arguments.length;
        var f;
        if (0 === u) f = 'Failed'; else if (1 === u) a = e, e = void 0; else {
          if (!1 === S) {
            S = !0;
            var l = n.emitWarning ? n.emitWarning : o.warn.bind(o);
            l("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", 'DeprecationWarning', 'DEP0094');
          }
          2 === u && (i = '!=');
        }
        if (a instanceof Error) throw a;
        var p = {
          actual: e,
          expected: r,
          operator: void 0 === i ? 'fail' : i,
          stackStartFn: c || t
        };
        void 0 !== a && (p.message = a);
        var y = new s(p);
        throw f && (y.message = f, y.generatedMessage = !0), y;
      }, E.AssertionError = s, E.ok = x, E.equal = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        e != r && A({
          actual: e,
          expected: r,
          message: n,
          operator: '==',
          stackStartFn: t
        });
      }, E.notEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        e == r && A({
          actual: e,
          expected: r,
          message: n,
          operator: '!=',
          stackStartFn: t
        });
      }, E.deepEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        void 0 === m && O(), m(e, r) || A({
          actual: e,
          expected: r,
          message: n,
          operator: 'deepEqual',
          stackStartFn: t
        });
      }, E.notDeepEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        void 0 === m && O(), m(e, r) && A({
          actual: e,
          expected: r,
          message: n,
          operator: 'notDeepEqual',
          stackStartFn: t
        });
      }, E.deepStrictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        void 0 === m && O(), w(e, r) || A({
          actual: e,
          expected: r,
          message: n,
          operator: 'deepStrictEqual',
          stackStartFn: t
        });
      }, E.notDeepStrictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        void 0 === m && O();
        w(e, r) && A({
          actual: e,
          expected: r,
          message: n,
          operator: 'notDeepStrictEqual',
          stackStartFn: t
        });
      }, E.strictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        h(e, r) || A({
          actual: e,
          expected: r,
          message: n,
          operator: 'strictEqual',
          stackStartFn: t
        });
      }, E.notStrictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new p('actual', 'expected');
        h(e, r) && A({
          actual: e,
          expected: r,
          message: n,
          operator: 'notStrictEqual',
          stackStartFn: t
        });
      };
      var T = function t(e, r, n) {
        var o = this;
        !function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), r.forEach((function(t) {
          t in e && (void 0 !== n && 'string' == typeof n[t] && b(e[t]) && e[t].test(n[t]) ? o[t] = n[t] : o[t] = e[t]);
        }));
      };
      function I(t, e, r, n, o, a) {
        if (!(r in t) || !w(t[r], e[r])) {
          if (!n) {
            var i = new T(t, o);
            var c = new T(e, o, t);
            var u = new s({
              actual: i,
              expected: c,
              operator: 'deepStrictEqual',
              stackStartFn: a
            });
            throw u.actual = t, u.expected = e, u.operator = a.name, u;
          }
          A({
            actual: t,
            expected: e,
            message: n,
            operator: a.name,
            stackStartFn: a
          });
        }
      }
      function R(t, e, r, n) {
        if ('function' != typeof e) {
          if (b(e)) return e.test(t);
          if (2 === arguments.length) throw new u('expected', [ 'Function', 'RegExp' ], e);
          if ('object' !== a(t) || null === t) {
            var o = new s({
              actual: t,
              expected: e,
              message: r,
              operator: 'deepStrictEqual',
              stackStartFn: n
            });
            throw o.operator = n.name, o;
          }
          var i = Object.keys(e);
          if (e instanceof Error) i.push('name', 'message'); else if (0 === i.length) throw new f('error', e, 'may not be an empty object');
          return void 0 === m && O(), i.forEach((function(o) {
            'string' == typeof t[o] && b(e[o]) && e[o].test(t[o]) || I(t, e, o, r, i, n);
          })), !0;
        }
        return void 0 !== e.prototype && t instanceof e || !Error.isPrototypeOf(e) && !0 === e.call({}, t);
      }
      function k(t) {
        if ('function' != typeof t) throw new u('fn', 'Function', t);
        try {
          t();
        } catch (e) {
          return e;
        }
        return j;
      }
      function N(t) {
        return g(t) || null !== t && 'object' === a(t) && 'function' == typeof t.then && 'function' == typeof t.catch;
      }
      function F(t) {
        return Promise.resolve().then((function() {
          var e;
          if ('function' == typeof t) {
            if (!N(e = t())) throw new l('instance of Promise', 'promiseFn', e);
          } else {
            if (!N(t)) throw new u('promiseFn', [ 'Function', 'Promise' ], t);
            e = t;
          }
          return Promise.resolve().then((function() {
            return e;
          })).then((function() {
            return j;
          })).catch((function(t) {
            return t;
          }));
        }));
      }
      function _(t, e, r, n) {
        if ('string' == typeof r) {
          if (4 === arguments.length) throw new u('error', [ 'Object', 'Error', 'Function', 'RegExp' ], r);
          if ('object' === a(e) && null !== e) {
            if (e.message === r) throw new c('error/message', "The error message \"".concat(e.message, "\" is identical to the message."));
          } else if (e === r) throw new c('error/message', "The error \"".concat(e, "\" is identical to the message."));
          n = r, r = void 0;
        } else if (null != r && 'object' !== a(r) && 'function' != typeof r) throw new u('error', [ 'Object', 'Error', 'Function', 'RegExp' ], r);
        if (e === j) {
          var o = '';
          r && r.name && (o += " (".concat(r.name, ")")), o += n ? ": ".concat(n) : '.';
          var i = 'rejects' === t.name ? 'rejection' : 'exception';
          A({
            actual: void 0,
            expected: r,
            operator: t.name,
            message: "Missing expected ".concat(i).concat(o),
            stackStartFn: t
          });
        }
        if (r && !R(e, r, n, t)) throw e;
      }
      function D(t, e, r, n) {
        if (e !== j) {
          if ('string' == typeof r && (n = r, r = void 0), !r || R(e, r)) {
            var o = n ? ": ".concat(n) : '.';
            var a = 'doesNotReject' === t.name ? 'rejection' : 'exception';
            A({
              actual: e,
              expected: r,
              operator: t.name,
              message: "Got unwanted ".concat(a).concat(o, "\n") + "Actual message: \"".concat(e && e.message, "\""),
              stackStartFn: t
            });
          }
          throw e;
        }
      }
      function U() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        P.apply(void 0, [ U, e.length ].concat(e));
      }
      E.throws = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        _.apply(void 0, [ t, k(e) ].concat(n));
      }, E.rejects = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        return F(e).then((function(e) {
          return _.apply(void 0, [ t, e ].concat(n));
        }));
      }, E.doesNotThrow = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        D.apply(void 0, [ t, k(e) ].concat(n));
      }, E.doesNotReject = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        return F(e).then((function(e) {
          return D.apply(void 0, [ t, e ].concat(n));
        }));
      }, E.ifError = function t(e) {
        if (null != e) {
          var r = 'ifError got unwanted exception: ';
          'object' === a(e) && 'string' == typeof e.message ? 0 === e.message.length && e.constructor ? r += e.constructor.name : r += e.message : r += y(e);
          var n = new s({
            actual: e,
            expected: null,
            operator: 'ifError',
            message: r,
            stackStartFn: t
          });
          var o = e.stack;
          if ('string' == typeof o) {
            var i = o.split('\n');
            i.shift();
            var c = n.stack.split('\n');
            for (var u = 0; u < i.length; u++) {
              var f = c.indexOf(i[u]);
              if (-1 !== f) {
                c = c.slice(0, f);
                break;
              }
            }
            n.stack = "".concat(c.join('\n'), "\n").concat(i.join('\n'));
          }
          throw n;
        }
      }, E.strict = d(U, E, {
        equal: E.strictEqual,
        deepEqual: E.deepStrictEqual,
        notEqual: E.notStrictEqual,
        notDeepEqual: E.notDeepStrictEqual
      }), E.strict.strict = E.strict;
    },
    961: (t, e, r) => {
      "use strict";
      var n = r(155);
      function o(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t;
      }
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      function i(t, e) {
        return !e || "object" !== y(e) && "function" != typeof e ? c(t) : e;
      }
      function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function u(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return u = function(t) {
          if (null === t || !function(t) {
            return -1 !== Function.toString.call(t).indexOf("[native code]");
          }(t)) return t;
          if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return l(t, arguments, s(this).constructor);
          }
          return r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), p(r, t);
        }, u(t);
      }
      function f() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0;
        } catch (t) {
          return !1;
        }
      }
      function l(t, e, r) {
        return l = f() ? Reflect.construct : function(t, e, r) {
          var n = [ null ];
          n.push.apply(n, e);
          var o = new (Function.bind.apply(t, n));
          return r && p(o, r.prototype), o;
        }, l.apply(null, arguments);
      }
      function p(t, e) {
        return p = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t;
        }, p(t, e);
      }
      function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, s(t);
      }
      function y(t) {
        return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, y(t);
      }
      var v = r(539).inspect;
      var g = r(136).codes.ERR_INVALID_ARG_TYPE;
      function b(t, e, r) {
        return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
      }
      var d = '';
      var h = '';
      var m = '';
      var w = '';
      var O = {
        deepStrictEqual: 'Expected values to be strictly deep-equal:',
        strictEqual: 'Expected values to be strictly equal:',
        strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
        deepEqual: 'Expected values to be loosely deep-equal:',
        equal: 'Expected values to be loosely equal:',
        notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
        notStrictEqual: 'Expected "actual" to be strictly unequal to:',
        notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
        notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
        notEqual: 'Expected "actual" to be loosely unequal to:',
        notIdentical: 'Values identical but not reference-equal:'
      };
      function S(t) {
        var e = Object.keys(t);
        var r = Object.create(Object.getPrototypeOf(t));
        return e.forEach((function(e) {
          r[e] = t[e];
        })), Object.defineProperty(r, 'message', {
          value: t.message
        }), r;
      }
      function E(t) {
        return v(t, {
          compact: !1,
          customInspect: !1,
          depth: 1e3,
          maxArrayLength: Infinity,
          showHidden: !1,
          breakLength: Infinity,
          showProxy: !1,
          sorted: !0,
          getters: !0
        });
      }
      function j(t, e, r) {
        var o = '';
        var a = '';
        var i = 0;
        var c = '';
        var u = !1;
        var f = E(t);
        var l = f.split('\n');
        var p = E(e).split('\n');
        var s = 0;
        var v = '';
        if ('strictEqual' === r && 'object' === y(t) && 'object' === y(e) && null !== t && null !== e && (r = 'strictEqualObject'), 
        1 === l.length && 1 === p.length && l[0] !== p[0]) {
          var g = l[0].length + p[0].length;
          if (g <= 10) {
            if (!('object' === y(t) && null !== t || 'object' === y(e) && null !== e || 0 === t && 0 === e)) return "".concat(O[r], "\n\n") + "".concat(l[0], " !== ").concat(p[0], "\n");
          } else if ('strictEqualObject' !== r) {
            if (g < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
              for (;l[0][s] === p[0][s]; ) s++;
              s > 2 && (v = "\n  ".concat(function(t, e) {
                if (e = Math.floor(e), 0 == t.length || 0 == e) return '';
                var r = t.length * e;
                for (e = Math.floor(Math.log(e) / Math.log(2)); e; ) t += t, e--;
                return t + t.substring(0, r - t.length);
              }(' ', s), "^"), s = 0);
            }
          }
        }
        var S = l[l.length - 1];
        var j = p[p.length - 1];
        for (;S === j && (s++ < 2 ? c = "\n  ".concat(S).concat(c) : o = S, l.pop(), p.pop(), 0 !== l.length && 0 !== p.length); ) S = l[l.length - 1], 
        j = p[p.length - 1];
        var A = Math.max(l.length, p.length);
        if (0 === A) {
          var P = f.split('\n');
          if (P.length > 30) for (P[26] = "".concat(d, "...").concat(w); P.length > 27; ) P.pop();
          return "".concat(O.notIdentical, "\n\n").concat(P.join('\n'), "\n");
        }
        s > 3 && (c = "\n".concat(d, "...").concat(w).concat(c), u = !0), '' !== o && (c = "\n  ".concat(o).concat(c), o = '');
        var x = 0;
        var T = O[r] + "\n".concat(h, "+ actual").concat(w, " ").concat(m, "- expected").concat(w);
        var I = " ".concat(d, "...").concat(w, " Lines skipped");
        for (s = 0; s < A; s++) {
          var R = s - i;
          if (l.length < s + 1) R > 1 && s > 2 && (R > 4 ? (a += "\n".concat(d, "...").concat(w), u = !0) : R > 3 && (a += "\n  ".concat(p[s - 2]), 
          x++), a += "\n  ".concat(p[s - 1]), x++), i = s, o += "\n".concat(m, "-").concat(w, " ").concat(p[s]), x++; else if (p.length < s + 1) R > 1 && s > 2 && (R > 4 ? (a += "\n".concat(d, "...").concat(w), 
          u = !0) : R > 3 && (a += "\n  ".concat(l[s - 2]), x++), a += "\n  ".concat(l[s - 1]), x++), i = s, a += "\n".concat(h, "+").concat(w, " ").concat(l[s]), 
          x++; else {
            var k = p[s];
            var N = l[s];
            var F = N !== k && (!b(N, ',') || N.slice(0, -1) !== k);
            F && b(k, ',') && k.slice(0, -1) === N && (F = !1, N += ','), F ? (R > 1 && s > 2 && (R > 4 ? (a += "\n".concat(d, "...").concat(w), 
            u = !0) : R > 3 && (a += "\n  ".concat(l[s - 2]), x++), a += "\n  ".concat(l[s - 1]), x++), i = s, a += "\n".concat(h, "+").concat(w, " ").concat(N), 
            o += "\n".concat(m, "-").concat(w, " ").concat(k), x += 2) : (a += o, o = '', 1 !== R && 0 !== s || (a += "\n  ".concat(N), 
            x++));
          }
          if (x > 20 && s < A - 2) return "".concat(T).concat(I, "\n").concat(a, "\n").concat(d, "...").concat(w).concat(o, "\n") + "".concat(d, "...").concat(w);
        }
        return "".concat(T).concat(u ? I : '', "\n").concat(a).concat(o).concat(c).concat(v);
      }
      var A = function(t) {
        function e(t) {
          var r;
          if (function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, e), 'object' !== y(t) || null === t) throw new g('options', 'Object', t);
          var o = t.message, a = t.operator, u = t.stackStartFn;
          var f = t.actual, l = t.expected;
          var p = Error.stackTraceLimit;
          if (Error.stackTraceLimit = 0, null != o) r = i(this, s(e).call(this, String(o))); else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (d = "[34m", 
          h = "[32m", w = "[39m", m = "[31m") : (d = '', h = '', w = '', m = '')), 'object' === y(f) && null !== f && 'object' === y(l) && null !== l && 'stack' in f && f instanceof Error && 'stack' in l && l instanceof Error && (f = S(f), 
          l = S(l)), 'deepStrictEqual' === a || 'strictEqual' === a) r = i(this, s(e).call(this, j(f, l, a))); else if ('notDeepStrictEqual' === a || 'notStrictEqual' === a) {
            var v = O[a];
            var b = E(f).split('\n');
            if ('notStrictEqual' === a && 'object' === y(f) && null !== f && (v = O.notStrictEqualObject), b.length > 30) for (b[26] = "".concat(d, "...").concat(w); b.length > 27; ) b.pop();
            r = 1 === b.length ? i(this, s(e).call(this, "".concat(v, " ").concat(b[0]))) : i(this, s(e).call(this, "".concat(v, "\n\n").concat(b.join('\n'), "\n")));
          } else {
            var A = E(f);
            var P = '';
            var x = O[a];
            'notDeepEqual' === a || 'notEqual' === a ? (A = "".concat(O[a], "\n\n").concat(A)).length > 1024 && (A = "".concat(A.slice(0, 1021), "...")) : (P = "".concat(E(l)), 
            A.length > 512 && (A = "".concat(A.slice(0, 509), "...")), P.length > 512 && (P = "".concat(P.slice(0, 509), "...")), 'deepEqual' === a || 'equal' === a ? A = "".concat(x, "\n\n").concat(A, "\n\nshould equal\n\n") : P = " ".concat(a, " ").concat(P)), 
            r = i(this, s(e).call(this, "".concat(A).concat(P)));
          }
          return Error.stackTraceLimit = p, r.generatedMessage = !o, Object.defineProperty(c(r), 'name', {
            value: 'AssertionError [ERR_ASSERTION]',
            enumerable: !1,
            writable: !0,
            configurable: !0
          }), r.code = 'ERR_ASSERTION', r.actual = f, r.expected = l, r.operator = a, Error.captureStackTrace && Error.captureStackTrace(c(r), u), 
          r.stack, r.name = 'AssertionError', i(r);
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && p(t, e);
        }(e, t), function(t, e, r) {
          e && a(t.prototype, e), r && a(t, r);
        }(e, [ {
          key: "toString",
          value: function() {
            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
          }
        }, {
          key: v.custom,
          value: function(t, e) {
            return v(this, function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                var n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                  return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })))), n.forEach((function(e) {
                  o(t, e, r[e]);
                }));
              }
              return t;
            }({}, e, {
              customInspect: !1,
              depth: 0
            }));
          }
        } ]), e;
      }(u(Error));
      t.exports = A;
    },
    136: (t, e, r) => {
      "use strict";
      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, n(t);
      }
      function o(t, e) {
        return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : e;
      }
      function a(t) {
        return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, a(t);
      }
      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t;
        }, i(t, e);
      }
      var c = {};
      var u;
      var f;
      function l(t, e, r) {
        r || (r = Error);
        var n = function(r) {
          function n(r, i, c) {
            var u;
            return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, n), u = o(this, a(n).call(this, function(t, r, n) {
              return 'string' == typeof e ? e : e(t, r, n);
            }(r, i, c))), u.code = t, u;
          }
          return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && i(t, e);
          }(n, r), n;
        }(r);
        c[t] = n;
      }
      function p(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return t = t.map((function(t) {
            return String(t);
          })), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(', '), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      l('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError), l('ERR_INVALID_ARG_TYPE', (function(t, e, o) {
        var a;
        var i;
        if (void 0 === u && (u = r(282)), u('string' == typeof t, "'name' must be a string"), 'string' == typeof e && function(t, e, r) {
          return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
        }(e, 'not ') ? (a = 'must not be', e = e.replace(/^not /, '')) : a = 'must be', function(t, e, r) {
          return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
        }(t, ' argument')) i = "The ".concat(t, " ").concat(a, " ").concat(p(e, 'type')); else {
          var c = function(t, e, r) {
            return 'number' != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r);
          }(t, '.') ? 'property' : 'argument';
          i = "The \"".concat(t, "\" ").concat(c, " ").concat(a, " ").concat(p(e, 'type'));
        }
        return i += ". Received type ".concat(n(o));
      }), TypeError), l('ERR_INVALID_ARG_VALUE', (function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'is invalid';
        void 0 === f && (f = r(539));
        var o = f.inspect(e);
        return o.length > 128 && (o = "".concat(o.slice(0, 128), "...")), "The argument '".concat(t, "' ").concat(n, ". Received ").concat(o);
      }), TypeError, RangeError), l('ERR_INVALID_RETURN_VALUE', (function(t, e, r) {
        var o;
        return o = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r)), 
        "Expected ".concat(t, " to be returned from the \"").concat(e, "\"") + " function but got ".concat(o, ".");
      }), TypeError), l('ERR_MISSING_ARGS', (function() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        void 0 === u && (u = r(282)), u(e.length > 0, 'At least one arg needs to be specified');
        var o = 'The ';
        var a = e.length;
        switch (e = e.map((function(t) {
          return "\"".concat(t, "\"");
        })), a) {
         case 1:
          o += "".concat(e[0], " argument");
          break;

         case 2:
          o += "".concat(e[0], " and ").concat(e[1], " arguments");
          break;

         default:
          o += e.slice(0, a - 1).join(', '), o += ", and ".concat(e[a - 1], " arguments");
        }
        return "".concat(o, " must be specified");
      }), TypeError), t.exports.codes = c;
    },
    158: (t, e, r) => {
      "use strict";
      function n(t, e) {
        return function(t) {
          if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
          var r = [];
          var n = !0;
          var o = !1;
          var a = void 0;
          try {
            for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0) ;
          } catch (u) {
            o = !0, a = u;
          } finally {
            try {
              n || null == c.return || c.return();
            } finally {
              if (o) throw a;
            }
          }
          return r;
        }(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, o(t);
      }
      var a = void 0 !== /a/g.flags;
      var i = function(t) {
        var e = [];
        return t.forEach((function(t) {
          return e.push(t);
        })), e;
      };
      var c = function(t) {
        var e = [];
        return t.forEach((function(t, r) {
          return e.push([ r, t ]);
        })), e;
      };
      var u = Object.is ? Object.is : r(609);
      var f = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
        return [];
      };
      var l = Number.isNaN ? Number.isNaN : r(360);
      function p(t) {
        return t.call.bind(t);
      }
      var s = p(Object.prototype.hasOwnProperty);
      var y = p(Object.prototype.propertyIsEnumerable);
      var v = p(Object.prototype.toString);
      var g = r(539).types, b = g.isAnyArrayBuffer, d = g.isArrayBufferView, h = g.isDate, m = g.isMap, w = g.isRegExp, O = g.isSet, S = g.isNativeError, E = g.isBoxedPrimitive, j = g.isNumberObject, A = g.isStringObject, P = g.isBooleanObject, x = g.isBigIntObject, T = g.isSymbolObject, I = g.isFloat32Array, R = g.isFloat64Array;
      function k(t) {
        if (0 === t.length || t.length > 10) return !0;
        for (var e = 0; e < t.length; e++) {
          var r = t.charCodeAt(e);
          if (r < 48 || r > 57) return !0;
        }
        return 10 === t.length && t >= Math.pow(2, 32);
      }
      function N(t) {
        return Object.keys(t).filter(k).concat(f(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
      }
      function F(t, e) {
        if (t === e) return 0;
        var r = t.length;
        var n = e.length;
        for (var o = 0, a = Math.min(r, n); o < a; ++o) if (t[o] !== e[o]) {
          r = t[o], n = e[o];
          break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
      }
      function _(t, e, r, n) {
        if (t === e) return 0 !== t || (!r || u(t, e));
        if (r) {
          if ('object' !== o(t)) return 'number' == typeof t && l(t) && l(e);
          if ('object' !== o(e) || null === t || null === e) return !1;
          if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
        } else {
          if (null === t || 'object' !== o(t)) return (null === e || 'object' !== o(e)) && t == e;
          if (null === e || 'object' !== o(e)) return !1;
        }
        var i = v(t);
        if (i !== v(e)) return !1;
        if (Array.isArray(t)) {
          if (t.length !== e.length) return !1;
          var c = N(t);
          var f = N(e);
          return c.length === f.length && U(t, e, r, n, 1, c);
        }
        if ('[object Object]' === i && (!m(t) && m(e) || !O(t) && O(e))) return !1;
        if (h(t)) {
          if (!h(e) || Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)) return !1;
        } else if (w(t)) {
          if (!w(e) || !function(t, e) {
            return a ? t.source === e.source && t.flags === e.flags : RegExp.prototype.toString.call(t) === RegExp.prototype.toString.call(e);
          }(t, e)) return !1;
        } else if (S(t) || t instanceof Error) {
          if (t.message !== e.message || t.name !== e.name) return !1;
        } else {
          if (d(t)) {
            if (r || !I(t) && !R(t)) {
              if (!function(t, e) {
                return t.byteLength === e.byteLength && 0 === F(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
              }(t, e)) return !1;
            } else if (!function(t, e) {
              if (t.byteLength !== e.byteLength) return !1;
              for (var r = 0; r < t.byteLength; r++) if (t[r] !== e[r]) return !1;
              return !0;
            }(t, e)) return !1;
            var p = N(t);
            var s = N(e);
            return p.length === s.length && U(t, e, r, n, 0, p);
          }
          if (O(t)) return !(!O(e) || t.size !== e.size) && U(t, e, r, n, 2);
          if (m(t)) return !(!m(e) || t.size !== e.size) && U(t, e, r, n, 3);
          if (b(t)) {
            if (!function(t, e) {
              return t.byteLength === e.byteLength && 0 === F(new Uint8Array(t), new Uint8Array(e));
            }(t, e)) return !1;
          } else if (E(t) && !function(t, e) {
            return j(t) ? j(e) && u(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e)) : A(t) ? A(e) && String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e) : P(t) ? P(e) && Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e) : x(t) ? x(e) && BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e) : T(e) && Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e);
          }(t, e)) return !1;
        }
        return U(t, e, r, n, 0);
      }
      function D(t, e) {
        return e.filter((function(e) {
          return y(t, e);
        }));
      }
      function U(t, e, r, n, o, a) {
        if (5 === arguments.length) {
          a = Object.keys(t);
          var i = Object.keys(e);
          if (a.length !== i.length) return !1;
        }
        var c = 0;
        for (;c < a.length; c++) if (!s(e, a[c])) return !1;
        if (r && 5 === arguments.length) {
          var u = f(t);
          if (0 !== u.length) {
            var l = 0;
            for (c = 0; c < u.length; c++) {
              var p = u[c];
              if (y(t, p)) {
                if (!y(e, p)) return !1;
                a.push(p), l++;
              } else if (y(e, p)) return !1;
            }
            var v = f(e);
            if (u.length !== v.length && D(e, v).length !== l) return !1;
          } else {
            var g = f(e);
            if (0 !== g.length && 0 !== D(e, g).length) return !1;
          }
        }
        if (0 === a.length && (0 === o || 1 === o && 0 === t.length || 0 === t.size)) return !0;
        if (void 0 === n) n = {
          val1: new Map,
          val2: new Map,
          position: 0
        }; else {
          var b = n.val1.get(t);
          if (void 0 !== b) {
            var d = n.val2.get(e);
            if (void 0 !== d) return b === d;
          }
          n.position++;
        }
        n.val1.set(t, n.position), n.val2.set(e, n.position);
        var h = G(t, e, r, a, n, o);
        return n.val1.delete(t), n.val2.delete(e), h;
      }
      function M(t, e, r, n) {
        var o = i(t);
        for (var a = 0; a < o.length; a++) {
          var c = o[a];
          if (_(e, c, r, n)) return t.delete(c), !0;
        }
        return !1;
      }
      function B(t) {
        switch (o(t)) {
         case 'undefined':
          return null;

         case 'object':
          return;

         case 'symbol':
          return !1;

         case 'string':
          t = +t;

         case 'number':
          if (l(t)) return !1;
        }
        return !0;
      }
      function q(t, e, r) {
        var n = B(r);
        return null != n ? n : e.has(n) && !t.has(n);
      }
      function L(t, e, r, n, o) {
        var a = B(r);
        if (null != a) return a;
        var i = e.get(a);
        return !(void 0 === i && !e.has(a) || !_(n, i, !1, o)) && (!t.has(a) && _(n, i, !1, o));
      }
      function C(t, e, r, n, o, a) {
        var c = i(t);
        for (var u = 0; u < c.length; u++) {
          var f = c[u];
          if (_(r, f, o, a) && _(n, e.get(f), o, a)) return t.delete(f), !0;
        }
        return !1;
      }
      function G(t, e, r, a, u, f) {
        var l = 0;
        if (2 === f) {
          if (!function(t, e, r, n) {
            var a = null;
            var c = i(t);
            for (var u = 0; u < c.length; u++) {
              var f = c[u];
              if ('object' === o(f) && null !== f) null === a && (a = new Set), a.add(f); else if (!e.has(f)) {
                if (r) return !1;
                if (!q(t, e, f)) return !1;
                null === a && (a = new Set), a.add(f);
              }
            }
            if (null !== a) {
              var l = i(e);
              for (var p = 0; p < l.length; p++) {
                var s = l[p];
                if ('object' === o(s) && null !== s) {
                  if (!M(a, s, r, n)) return !1;
                } else if (!r && !t.has(s) && !M(a, s, r, n)) return !1;
              }
              return 0 === a.size;
            }
            return !0;
          }(t, e, r, u)) return !1;
        } else if (3 === f) {
          if (!function(t, e, r, a) {
            var i = null;
            var u = c(t);
            for (var f = 0; f < u.length; f++) {
              var l = n(u[f], 2), p = l[0], s = l[1];
              if ('object' === o(p) && null !== p) null === i && (i = new Set), i.add(p); else {
                var y = e.get(p);
                if (void 0 === y && !e.has(p) || !_(s, y, r, a)) {
                  if (r) return !1;
                  if (!L(t, e, p, s, a)) return !1;
                  null === i && (i = new Set), i.add(p);
                }
              }
            }
            if (null !== i) {
              var v = c(e);
              for (var g = 0; g < v.length; g++) {
                var b = n(v[g], 2), d = (p = b[0], b[1]);
                if ('object' === o(p) && null !== p) {
                  if (!C(i, t, p, d, r, a)) return !1;
                } else if (!(r || t.has(p) && _(t.get(p), d, !1, a) || C(i, t, p, d, !1, a))) return !1;
              }
              return 0 === i.size;
            }
            return !0;
          }(t, e, r, u)) return !1;
        } else if (1 === f) for (;l < t.length; l++) {
          if (!s(t, l)) {
            if (s(e, l)) return !1;
            var p = Object.keys(t);
            for (;l < p.length; l++) {
              var y = p[l];
              if (!s(e, y) || !_(t[y], e[y], r, u)) return !1;
            }
            return p.length === Object.keys(e).length;
          }
          if (!s(e, l) || !_(t[l], e[l], r, u)) return !1;
        }
        for (l = 0; l < a.length; l++) {
          var v = a[l];
          if (!_(t[v], e[v], r, u)) return !1;
        }
        return !0;
      }
      t.exports = {
        isDeepEqual: function(t, e) {
          return _(t, e, false);
        },
        isDeepStrictEqual: function(t, e) {
          return _(t, e, true);
        }
      };
    },
    924: (t, e, r) => {
      "use strict";
      var n = r(210);
      var o = r(559);
      var a = o(n('String.prototype.indexOf'));
      t.exports = function(t, e) {
        var r = n(t, !!e);
        return 'function' == typeof r && a(t, '.prototype.') > -1 ? o(r) : r;
      };
    },
    559: (t, e, r) => {
      "use strict";
      var n = r(612);
      var o = r(210);
      var a = o('%Function.prototype.apply%');
      var i = o('%Function.prototype.call%');
      var c = o('%Reflect.apply%', !0) || n.call(i, a);
      var u = o('%Object.getOwnPropertyDescriptor%', !0);
      var f = o('%Object.defineProperty%', !0);
      var l = o('%Math.max%');
      if (f) try {
        f({}, 'a', {
          value: 1
        });
      } catch (s) {
        f = null;
      }
      t.exports = function(t) {
        var e = c(n, i, arguments);
        if (u && f) {
          var r = u(e, 'length');
          r.configurable && f(e, 'length', {
            value: 1 + l(0, t.length - (arguments.length - 1))
          });
        }
        return e;
      };
      var p = function() {
        return c(n, a, arguments);
      };
      f ? f(t.exports, 'apply', {
        value: p
      }) : t.exports.apply = p;
    },
    108: (t, e, r) => {
      var n = r(539);
      var o = r(282);
      function a() {
        return (new Date).getTime();
      }
      var i = Array.prototype.slice;
      var c;
      var u = {};
      c = void 0 !== r.g && r.g.console ? r.g.console : "undefined" != typeof window && window.console ? window.console : {};
      var f = [ [ function() {}, "log" ], [ function() {
        c.log.apply(c, arguments);
      }, "info" ], [ function() {
        c.log.apply(c, arguments);
      }, "warn" ], [ function() {
        c.warn.apply(c, arguments);
      }, "error" ], [ function(t) {
        u[t] = a();
      }, "time" ], [ function(t) {
        var e = u[t];
        if (!e) throw new Error("No such label: " + t);
        delete u[t];
        var r = a() - e;
        c.log(t + ": " + r + "ms");
      }, "timeEnd" ], [ function() {
        var t = new Error;
        t.name = "Trace", t.message = n.format.apply(null, arguments), c.error(t.stack);
      }, "trace" ], [ function(t) {
        c.log(n.inspect(t) + "\n");
      }, "dir" ], [ function(t) {
        if (!t) {
          var e = i.call(arguments, 1);
          o.ok(!1, n.format.apply(null, e));
        }
      }, "assert" ] ];
      for (var l = 0; l < f.length; l++) {
        var p = f[l];
        var s = p[0];
        var y = p[1];
        c[y] || (c[y] = s);
      }
      t.exports = c;
    },
    289: (t, e, r) => {
      "use strict";
      var n = r(215);
      var o = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo');
      var a = Object.prototype.toString;
      var i = Array.prototype.concat;
      var c = Object.defineProperty;
      var u = r(44)();
      var f = c && u;
      var l = function(t, e, r, n) {
        (!(e in t) || function(t) {
          return 'function' == typeof t && '[object Function]' === a.call(t);
        }(n) && n()) && (f ? c(t, e, {
          configurable: !0,
          enumerable: !1,
          value: r,
          writable: !0
        }) : t[e] = r);
      };
      var p = function(t, e) {
        var r = arguments.length > 2 ? arguments[2] : {};
        var a = n(e);
        o && (a = i.call(a, Object.getOwnPropertySymbols(e)));
        for (var c = 0; c < a.length; c += 1) l(t, a[c], e[a[c]], r[a[c]]);
      };
      p.supportsDescriptors = !!f, t.exports = p;
    },
    91: t => {
      "use strict";
      function e(t, e) {
        if (null == t) throw new TypeError('Cannot convert first argument to object');
        var r = Object(t);
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          if (null != o) {
            var a = Object.keys(Object(o));
            for (var i = 0, c = a.length; i < c; i++) {
              var u = a[i];
              var f = Object.getOwnPropertyDescriptor(o, u);
              void 0 !== f && f.enumerable && (r[u] = o[u]);
            }
          }
        }
        return r;
      }
      t.exports = {
        assign: e,
        polyfill: function() {
          Object.assign || Object.defineProperty(Object, 'assign', {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      };
    },
    29: (t, e, r) => {
      "use strict";
      var n = r(320);
      var o = Object.prototype.toString;
      var a = Object.prototype.hasOwnProperty;
      var i = function(t, e, r) {
        for (var n = 0, o = t.length; n < o; n++) a.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
      };
      var c = function(t, e, r) {
        for (var n = 0, o = t.length; n < o; n++) null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t);
      };
      var u = function(t, e, r) {
        for (var n in t) a.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
      };
      t.exports = function(t, e, r) {
        if (!n(e)) throw new TypeError('iterator must be a function');
        var a;
        arguments.length >= 3 && (a = r), '[object Array]' === o.call(t) ? i(t, e, a) : 'string' == typeof t ? c(t, e, a) : u(t, e, a);
      };
    },
    648: t => {
      "use strict";
      var e = 'Function.prototype.bind called on incompatible ';
      var r = Array.prototype.slice;
      var n = Object.prototype.toString;
      var o = '[object Function]';
      t.exports = function(t) {
        var a = this;
        if ('function' != typeof a || n.call(a) !== o) throw new TypeError(e + a);
        var i = r.call(arguments, 1);
        var c;
        var u = function() {
          if (this instanceof c) {
            var e = a.apply(this, i.concat(r.call(arguments)));
            return Object(e) === e ? e : this;
          }
          return a.apply(t, i.concat(r.call(arguments)));
        };
        var f = Math.max(0, a.length - i.length);
        var l = [];
        for (var p = 0; p < f; p++) l.push('$' + p);
        if (c = Function('binder', 'return function (' + l.join(',') + '){ return binder.apply(this,arguments); }')(u), a.prototype) {
          var s = function() {};
          s.prototype = a.prototype, c.prototype = new s, s.prototype = null;
        }
        return c;
      };
    },
    612: (t, e, r) => {
      "use strict";
      var n = r(648);
      t.exports = Function.prototype.bind || n;
    },
    210: (t, e, r) => {
      "use strict";
      var n;
      var o = SyntaxError;
      var a = Function;
      var i = TypeError;
      var c = function(t) {
        try {
          return a('"use strict"; return (' + t + ').constructor;')();
        } catch (e) {}
      };
      var u = Object.getOwnPropertyDescriptor;
      if (u) try {
        u({}, '');
      } catch (I) {
        u = null;
      }
      var f = function() {
        throw new i;
      };
      var l = u ? function() {
        try {
          return f;
        } catch (t) {
          try {
            return u(arguments, 'callee').get;
          } catch (e) {
            return f;
          }
        }
      }() : f;
      var p = r(405)();
      var s = Object.getPrototypeOf || function(t) {
        return t.__proto__;
      };
      var y = {};
      var v = 'undefined' == typeof Uint8Array ? n : s(Uint8Array);
      var g = {
        '%AggregateError%': 'undefined' == typeof AggregateError ? n : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? n : ArrayBuffer,
        '%ArrayIteratorPrototype%': p ? s([][Symbol.iterator]()) : n,
        '%AsyncFromSyncIteratorPrototype%': n,
        '%AsyncFunction%': y,
        '%AsyncGenerator%': y,
        '%AsyncGeneratorFunction%': y,
        '%AsyncIteratorPrototype%': y,
        '%Atomics%': 'undefined' == typeof Atomics ? n : Atomics,
        '%BigInt%': 'undefined' == typeof BigInt ? n : BigInt,
        '%Boolean%': Boolean,
        '%DataView%': 'undefined' == typeof DataView ? n : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': 'undefined' == typeof Float32Array ? n : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? n : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? n : FinalizationRegistry,
        '%Function%': a,
        '%GeneratorFunction%': y,
        '%Int8Array%': 'undefined' == typeof Int8Array ? n : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? n : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? n : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': p ? s(s([][Symbol.iterator]())) : n,
        '%JSON%': 'object' == typeof JSON ? JSON : n,
        '%Map%': 'undefined' == typeof Map ? n : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && p ? s((new Map)[Symbol.iterator]()) : n,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? n : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? n : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': 'undefined' == typeof Reflect ? n : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? n : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && p ? s((new Set)[Symbol.iterator]()) : n,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': p ? s(''[Symbol.iterator]()) : n,
        '%Symbol%': p ? Symbol : n,
        '%SyntaxError%': o,
        '%ThrowTypeError%': l,
        '%TypedArray%': v,
        '%TypeError%': i,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? n : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? n : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? n : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': 'undefined' == typeof WeakMap ? n : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? n : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? n : WeakSet
      };
      var b = function t(e) {
        var r;
        if ('%AsyncFunction%' === e) r = c('async function () {}'); else if ('%GeneratorFunction%' === e) r = c('function* () {}'); else if ('%AsyncGeneratorFunction%' === e) r = c('async function* () {}'); else if ('%AsyncGenerator%' === e) {
          var n = t('%AsyncGeneratorFunction%');
          n && (r = n.prototype);
        } else if ('%AsyncIteratorPrototype%' === e) {
          var o = t('%AsyncGenerator%');
          o && (r = s(o.prototype));
        }
        return g[e] = r, r;
      };
      var d = {
        '%ArrayBufferPrototype%': [ 'ArrayBuffer', 'prototype' ],
        '%ArrayPrototype%': [ 'Array', 'prototype' ],
        '%ArrayProto_entries%': [ 'Array', 'prototype', 'entries' ],
        '%ArrayProto_forEach%': [ 'Array', 'prototype', 'forEach' ],
        '%ArrayProto_keys%': [ 'Array', 'prototype', 'keys' ],
        '%ArrayProto_values%': [ 'Array', 'prototype', 'values' ],
        '%AsyncFunctionPrototype%': [ 'AsyncFunction', 'prototype' ],
        '%AsyncGenerator%': [ 'AsyncGeneratorFunction', 'prototype' ],
        '%AsyncGeneratorPrototype%': [ 'AsyncGeneratorFunction', 'prototype', 'prototype' ],
        '%BooleanPrototype%': [ 'Boolean', 'prototype' ],
        '%DataViewPrototype%': [ 'DataView', 'prototype' ],
        '%DatePrototype%': [ 'Date', 'prototype' ],
        '%ErrorPrototype%': [ 'Error', 'prototype' ],
        '%EvalErrorPrototype%': [ 'EvalError', 'prototype' ],
        '%Float32ArrayPrototype%': [ 'Float32Array', 'prototype' ],
        '%Float64ArrayPrototype%': [ 'Float64Array', 'prototype' ],
        '%FunctionPrototype%': [ 'Function', 'prototype' ],
        '%Generator%': [ 'GeneratorFunction', 'prototype' ],
        '%GeneratorPrototype%': [ 'GeneratorFunction', 'prototype', 'prototype' ],
        '%Int8ArrayPrototype%': [ 'Int8Array', 'prototype' ],
        '%Int16ArrayPrototype%': [ 'Int16Array', 'prototype' ],
        '%Int32ArrayPrototype%': [ 'Int32Array', 'prototype' ],
        '%JSONParse%': [ 'JSON', 'parse' ],
        '%JSONStringify%': [ 'JSON', 'stringify' ],
        '%MapPrototype%': [ 'Map', 'prototype' ],
        '%NumberPrototype%': [ 'Number', 'prototype' ],
        '%ObjectPrototype%': [ 'Object', 'prototype' ],
        '%ObjProto_toString%': [ 'Object', 'prototype', 'toString' ],
        '%ObjProto_valueOf%': [ 'Object', 'prototype', 'valueOf' ],
        '%PromisePrototype%': [ 'Promise', 'prototype' ],
        '%PromiseProto_then%': [ 'Promise', 'prototype', 'then' ],
        '%Promise_all%': [ 'Promise', 'all' ],
        '%Promise_reject%': [ 'Promise', 'reject' ],
        '%Promise_resolve%': [ 'Promise', 'resolve' ],
        '%RangeErrorPrototype%': [ 'RangeError', 'prototype' ],
        '%ReferenceErrorPrototype%': [ 'ReferenceError', 'prototype' ],
        '%RegExpPrototype%': [ 'RegExp', 'prototype' ],
        '%SetPrototype%': [ 'Set', 'prototype' ],
        '%SharedArrayBufferPrototype%': [ 'SharedArrayBuffer', 'prototype' ],
        '%StringPrototype%': [ 'String', 'prototype' ],
        '%SymbolPrototype%': [ 'Symbol', 'prototype' ],
        '%SyntaxErrorPrototype%': [ 'SyntaxError', 'prototype' ],
        '%TypedArrayPrototype%': [ 'TypedArray', 'prototype' ],
        '%TypeErrorPrototype%': [ 'TypeError', 'prototype' ],
        '%Uint8ArrayPrototype%': [ 'Uint8Array', 'prototype' ],
        '%Uint8ClampedArrayPrototype%': [ 'Uint8ClampedArray', 'prototype' ],
        '%Uint16ArrayPrototype%': [ 'Uint16Array', 'prototype' ],
        '%Uint32ArrayPrototype%': [ 'Uint32Array', 'prototype' ],
        '%URIErrorPrototype%': [ 'URIError', 'prototype' ],
        '%WeakMapPrototype%': [ 'WeakMap', 'prototype' ],
        '%WeakSetPrototype%': [ 'WeakSet', 'prototype' ]
      };
      var h = r(612);
      var m = r(642);
      var w = h.call(Function.call, Array.prototype.concat);
      var O = h.call(Function.apply, Array.prototype.splice);
      var S = h.call(Function.call, String.prototype.replace);
      var E = h.call(Function.call, String.prototype.slice);
      var j = h.call(Function.call, RegExp.prototype.exec);
      var A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var P = /\\(\\)?/g;
      var x = function(t) {
        var e = E(t, 0, 1);
        var r = E(t, -1);
        if ('%' === e && '%' !== r) throw new o('invalid intrinsic syntax, expected closing `%`');
        if ('%' === r && '%' !== e) throw new o('invalid intrinsic syntax, expected opening `%`');
        var n = [];
        return S(t, A, (function(t, e, r, o) {
          n[n.length] = r ? S(o, P, '$1') : e || t;
        })), n;
      };
      var T = function(t, e) {
        var r = t;
        var n;
        if (m(d, r) && (r = '%' + (n = d[r])[0] + '%'), m(g, r)) {
          var a = g[r];
          if (a === y && (a = b(r)), void 0 === a && !e) throw new i('intrinsic ' + t + ' exists, but is not available. Please file an issue!');
          return {
            alias: n,
            name: r,
            value: a
          };
        }
        throw new o('intrinsic ' + t + ' does not exist!');
      };
      t.exports = function(t, e) {
        if ('string' != typeof t || 0 === t.length) throw new i('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && 'boolean' != typeof e) throw new i('"allowMissing" argument must be a boolean');
        if (null === j(/^%?[^%]*%?$/g, t)) throw new o('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
        var r = x(t);
        var n = r.length > 0 ? r[0] : '';
        var a = T('%' + n + '%', e);
        var c = a.name;
        var f = a.value;
        var l = !1;
        var p = a.alias;
        p && (n = p[0], O(r, w([ 0, 1 ], p)));
        for (var s = 1, y = !0; s < r.length; s += 1) {
          var v = r[s];
          var b = E(v, 0, 1);
          var d = E(v, -1);
          if (('"' === b || "'" === b || '`' === b || '"' === d || "'" === d || '`' === d) && b !== d) throw new o('property names with quotes must have matching quotes');
          if ('constructor' !== v && y || (l = !0), m(g, c = '%' + (n += '.' + v) + '%')) f = g[c]; else if (null != f) {
            if (!(v in f)) {
              if (!e) throw new i('base intrinsic for ' + t + ' exists, but the property is not available.');
              return;
            }
            if (u && s + 1 >= r.length) {
              var h = u(f, v);
              f = (y = !!h) && 'get' in h && !('originalValue' in h.get) ? h.get : f[v];
            } else y = m(f, v), f = f[v];
            y && !l && (g[c] = f);
          }
        }
        return f;
      };
    },
    44: (t, e, r) => {
      "use strict";
      var n = r(210)('%Object.defineProperty%', !0);
      var o = function() {
        if (n) try {
          return n({}, 'a', {
            value: 1
          }), !0;
        } catch (t) {
          return !1;
        }
        return !1;
      };
      o.hasArrayLengthDefineBug = function() {
        if (!o()) return null;
        try {
          return 1 !== n([], 'length', {
            value: 1
          }).length;
        } catch (t) {
          return !0;
        }
      }, t.exports = o;
    },
    405: (t, e, r) => {
      "use strict";
      var n = 'undefined' != typeof Symbol && Symbol;
      var o = r(419);
      t.exports = function() {
        return 'function' == typeof n && ('function' == typeof Symbol && ('symbol' == typeof n('foo') && ('symbol' == typeof Symbol('bar') && o())));
      };
    },
    419: t => {
      "use strict";
      t.exports = function() {
        if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols) return !1;
        if ('symbol' == typeof Symbol.iterator) return !0;
        var t = {};
        var e = Symbol('test');
        var r = Object(e);
        if ('string' == typeof e) return !1;
        if ('[object Symbol]' !== Object.prototype.toString.call(e)) return !1;
        if ('[object Symbol]' !== Object.prototype.toString.call(r)) return !1;
        for (e in t[e] = 42, t) return !1;
        if ('function' == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ('function' == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ('function' == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    410: (t, e, r) => {
      "use strict";
      var n = r(419);
      t.exports = function() {
        return n() && !!Symbol.toStringTag;
      };
    },
    642: (t, e, r) => {
      "use strict";
      var n = r(612);
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    },
    717: t => {
      'function' == typeof Object.create ? t.exports = function(t, e) {
        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }));
      } : t.exports = function(t, e) {
        if (e) {
          t.super_ = e;
          var r = function() {};
          r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
        }
      };
    },
    584: (t, e, r) => {
      "use strict";
      var n = r(410)();
      var o = r(924)('Object.prototype.toString');
      var a = function(t) {
        return !(n && t && 'object' == typeof t && Symbol.toStringTag in t) && '[object Arguments]' === o(t);
      };
      var i = function(t) {
        return !!a(t) || null !== t && 'object' == typeof t && 'number' == typeof t.length && t.length >= 0 && '[object Array]' !== o(t) && '[object Function]' === o(t.callee);
      };
      var c = function() {
        return a(arguments);
      }();
      a.isLegacyArguments = i, t.exports = c ? a : i;
    },
    320: t => {
      "use strict";
      var e = Function.prototype.toString;
      var r = 'object' == typeof Reflect && null !== Reflect && Reflect.apply;
      var n;
      var o;
      if ('function' == typeof r && 'function' == typeof Object.defineProperty) try {
        n = Object.defineProperty({}, 'length', {
          get: function() {
            throw o;
          }
        }), o = {}, r((function() {
          throw 42;
        }), null, n);
      } catch (l) {
        l !== o && (r = null);
      } else r = null;
      var a = /^\s*class\b/;
      var i = function(t) {
        try {
          var r = e.call(t);
          return a.test(r);
        } catch (n) {
          return !1;
        }
      };
      var c = Object.prototype.toString;
      var u = 'function' == typeof Symbol && !!Symbol.toStringTag;
      var f = 'object' == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
      t.exports = r ? function(t) {
        if (t === f) return !0;
        if (!t) return !1;
        if ('function' != typeof t && 'object' != typeof t) return !1;
        if ('function' == typeof t && !t.prototype) return !0;
        try {
          r(t, null, n);
        } catch (e) {
          if (e !== o) return !1;
        }
        return !i(t);
      } : function(t) {
        if (t === f) return !0;
        if (!t) return !1;
        if ('function' != typeof t && 'object' != typeof t) return !1;
        if ('function' == typeof t && !t.prototype) return !0;
        if (u) return function(t) {
          try {
            return !i(t) && (e.call(t), !0);
          } catch (r) {
            return !1;
          }
        }(t);
        if (i(t)) return !1;
        var r = c.call(t);
        return "[object Function]" === r || "[object GeneratorFunction]" === r;
      };
    },
    662: (t, e, r) => {
      "use strict";
      var n = Object.prototype.toString;
      var o = Function.prototype.toString;
      var a = /^\s*(?:function)?\*/;
      var i = r(410)();
      var c = Object.getPrototypeOf;
      var u;
      t.exports = function(t) {
        if ('function' != typeof t) return !1;
        if (a.test(o.call(t))) return !0;
        if (!i) return '[object GeneratorFunction]' === n.call(t);
        if (!c) return !1;
        if (void 0 === u) {
          var e = function() {
            if (!i) return !1;
            try {
              return Function('return function*() {}')();
            } catch (t) {}
          }();
          u = !!e && c(e);
        }
        return c(t) === u;
      };
    },
    611: t => {
      "use strict";
      t.exports = function(t) {
        return t != t;
      };
    },
    360: (t, e, r) => {
      "use strict";
      var n = r(559);
      var o = r(289);
      var a = r(611);
      var i = r(415);
      var c = r(194);
      var u = n(i(), Number);
      o(u, {
        getPolyfill: i,
        implementation: a,
        shim: c
      }), t.exports = u;
    },
    415: (t, e, r) => {
      "use strict";
      var n = r(611);
      t.exports = function() {
        return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a') ? Number.isNaN : n;
      };
    },
    194: (t, e, r) => {
      "use strict";
      var n = r(289);
      var o = r(415);
      t.exports = function() {
        var t = o();
        return n(Number, {
          isNaN: t
        }, {
          isNaN: function() {
            return Number.isNaN !== t;
          }
        }), t;
      };
    },
    692: (t, e, r) => {
      "use strict";
      var n = r(29);
      var o = r(83);
      var a = r(924);
      var i = a('Object.prototype.toString');
      var c = r(410)();
      var u = 'undefined' == typeof globalThis ? r.g : globalThis;
      var f = o();
      var l = a('Array.prototype.indexOf', !0) || function(t, e) {
        for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
        return -1;
      };
      var p = a('String.prototype.slice');
      var s = {};
      var y = r(882);
      var v = Object.getPrototypeOf;
      c && y && v && n(f, (function(t) {
        var e = new u[t];
        if (Symbol.toStringTag in e) {
          var r = v(e);
          var n = y(r, Symbol.toStringTag);
          if (!n) {
            var o = v(r);
            n = y(o, Symbol.toStringTag);
          }
          s[t] = n.get;
        }
      }));
      t.exports = function(t) {
        if (!t || 'object' != typeof t) return !1;
        if (!c || !(Symbol.toStringTag in t)) {
          var e = p(i(t), 8, -1);
          return l(f, e) > -1;
        }
        return !!y && function(t) {
          var e = !1;
          return n(s, (function(r, n) {
            if (!e) try {
              e = r.call(t) === n;
            } catch (o) {}
          })), e;
        }(t);
      };
    },
    244: t => {
      "use strict";
      var e = function(t) {
        return t != t;
      };
      t.exports = function(t, r) {
        return 0 === t && 0 === r ? 1 / t == 1 / r : t === r || !(!e(t) || !e(r));
      };
    },
    609: (t, e, r) => {
      "use strict";
      var n = r(289);
      var o = r(559);
      var a = r(244);
      var i = r(624);
      var c = r(281);
      var u = o(i(), Object);
      n(u, {
        getPolyfill: i,
        implementation: a,
        shim: c
      }), t.exports = u;
    },
    624: (t, e, r) => {
      "use strict";
      var n = r(244);
      t.exports = function() {
        return 'function' == typeof Object.is ? Object.is : n;
      };
    },
    281: (t, e, r) => {
      "use strict";
      var n = r(624);
      var o = r(289);
      t.exports = function() {
        var t = n();
        return o(Object, {
          is: t
        }, {
          is: function() {
            return Object.is !== t;
          }
        }), t;
      };
    },
    987: (t, e, r) => {
      "use strict";
      var n;
      if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty;
        var a = Object.prototype.toString;
        var i = r(414);
        var c = Object.prototype.propertyIsEnumerable;
        var u = !c.call({
          toString: null
        }, 'toString');
        var f = c.call((function() {}), 'prototype');
        var l = [ 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor' ];
        var p = function(t) {
          var e = t.constructor;
          return e && e.prototype === t;
        };
        var s = {
          $applicationCache: !0,
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $onmozfullscreenchange: !0,
          $onmozfullscreenerror: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0
        };
        var y = function() {
          if ('undefined' == typeof window) return !1;
          for (var t in window) try {
            if (!s['$' + t] && o.call(window, t) && null !== window[t] && 'object' == typeof window[t]) try {
              p(window[t]);
            } catch (e) {
              return !0;
            }
          } catch (e) {
            return !0;
          }
          return !1;
        }();
        n = function(t) {
          var e = null !== t && 'object' == typeof t;
          var r = '[object Function]' === a.call(t);
          var n = i(t);
          var c = e && '[object String]' === a.call(t);
          var s = [];
          if (!e && !r && !n) throw new TypeError('Object.keys called on a non-object');
          var v = f && r;
          if (c && t.length > 0 && !o.call(t, 0)) for (var g = 0; g < t.length; ++g) s.push(String(g));
          if (n && t.length > 0) for (var b = 0; b < t.length; ++b) s.push(String(b)); else for (var d in t) v && 'prototype' === d || !o.call(t, d) || s.push(String(d));
          if (u) {
            var h = function(t) {
              if ('undefined' == typeof window || !y) return p(t);
              try {
                return p(t);
              } catch (e) {
                return !1;
              }
            }(t);
            for (var m = 0; m < l.length; ++m) h && 'constructor' === l[m] || !o.call(t, l[m]) || s.push(l[m]);
          }
          return s;
        };
      }
      t.exports = n;
    },
    215: (t, e, r) => {
      "use strict";
      var n = Array.prototype.slice;
      var o = r(414);
      var a = Object.keys;
      var i = a ? function(t) {
        return a(t);
      } : r(987);
      var c = Object.keys;
      i.shim = function() {
        if (Object.keys) {
          var t = function() {
            var t = Object.keys(arguments);
            return t && t.length === arguments.length;
          }(1, 2);
          t || (Object.keys = function(t) {
            return o(t) ? c(n.call(t)) : c(t);
          });
        } else Object.keys = i;
        return Object.keys || i;
      }, t.exports = i;
    },
    414: t => {
      "use strict";
      var e = Object.prototype.toString;
      t.exports = function(t) {
        var r = e.call(t);
        var n = '[object Arguments]' === r;
        return n || (n = '[object Array]' !== r && null !== t && 'object' == typeof t && 'number' == typeof t.length && t.length >= 0 && '[object Function]' === e.call(t.callee)), 
        n;
      };
    },
    155: t => {
      var e = t.exports = {};
      var r;
      var n;
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function i(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      !function() {
        try {
          r = 'function' == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          r = o;
        }
        try {
          n = 'function' == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          n = a;
        }
      }();
      var c = [];
      var u = !1;
      var f;
      var l = -1;
      function p() {
        u && f && (u = !1, f.length ? c = f.concat(c) : l = -1, c.length && s());
      }
      function s() {
        if (!u) {
          var t = i(p);
          u = !0;
          var e = c.length;
          for (;e; ) {
            for (f = c, c = []; ++l < e; ) f && f[l].run();
            l = -1, e = c.length;
          }
          f = null, u = !1, function(t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
            try {
              n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          }(t);
        }
      }
      function y(t, e) {
        this.fun = t, this.array = e;
      }
      function v() {}
      e.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new y(t, e)), 1 !== c.length || u || i(s);
      }, y.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, e.title = 'browser', e.browser = !0, e.env = {}, e.argv = [], e.version = '', e.versions = {}, e.on = v, e.addListener = v, 
      e.once = v, e.off = v, e.removeListener = v, e.removeAllListeners = v, e.emit = v, e.prependListener = v, e.prependOnceListener = v, 
      e.listeners = function(t) {
        return [];
      }, e.binding = function(t) {
        throw new Error('process.binding is not supported');
      }, e.cwd = function() {
        return '/';
      }, e.chdir = function(t) {
        throw new Error('process.chdir is not supported');
      }, e.umask = function() {
        return 0;
      };
    },
    384: t => {
      t.exports = function(t) {
        return t && 'object' == typeof t && 'function' == typeof t.copy && 'function' == typeof t.fill && 'function' == typeof t.readUInt8;
      };
    },
    955: (t, e, r) => {
      "use strict";
      var n = r(584);
      var o = r(662);
      var a = r(430);
      var i = r(692);
      function c(t) {
        return t.call.bind(t);
      }
      var u = 'undefined' != typeof BigInt;
      var f = 'undefined' != typeof Symbol;
      var l = c(Object.prototype.toString);
      var p = c(Number.prototype.valueOf);
      var s = c(String.prototype.valueOf);
      var y = c(Boolean.prototype.valueOf);
      if (u) var v = c(BigInt.prototype.valueOf);
      if (f) var g = c(Symbol.prototype.valueOf);
      function b(t, e) {
        if ('object' != typeof t) return !1;
        try {
          return e(t), !0;
        } catch (r) {
          return !1;
        }
      }
      function d(t) {
        return '[object Map]' === l(t);
      }
      function h(t) {
        return '[object Set]' === l(t);
      }
      function m(t) {
        return '[object WeakMap]' === l(t);
      }
      function w(t) {
        return '[object WeakSet]' === l(t);
      }
      function O(t) {
        return '[object ArrayBuffer]' === l(t);
      }
      function S(t) {
        return 'undefined' != typeof ArrayBuffer && (O.working ? O(t) : t instanceof ArrayBuffer);
      }
      function E(t) {
        return '[object DataView]' === l(t);
      }
      function j(t) {
        return 'undefined' != typeof DataView && (E.working ? E(t) : t instanceof DataView);
      }
      e.isArgumentsObject = n, e.isGeneratorFunction = o, e.isTypedArray = i, e.isPromise = function(t) {
        return 'undefined' != typeof Promise && t instanceof Promise || null !== t && 'object' == typeof t && 'function' == typeof t.then && 'function' == typeof t.catch;
      }, e.isArrayBufferView = function(t) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : i(t) || j(t);
      }, e.isUint8Array = function(t) {
        return 'Uint8Array' === a(t);
      }, e.isUint8ClampedArray = function(t) {
        return 'Uint8ClampedArray' === a(t);
      }, e.isUint16Array = function(t) {
        return 'Uint16Array' === a(t);
      }, e.isUint32Array = function(t) {
        return 'Uint32Array' === a(t);
      }, e.isInt8Array = function(t) {
        return 'Int8Array' === a(t);
      }, e.isInt16Array = function(t) {
        return 'Int16Array' === a(t);
      }, e.isInt32Array = function(t) {
        return 'Int32Array' === a(t);
      }, e.isFloat32Array = function(t) {
        return 'Float32Array' === a(t);
      }, e.isFloat64Array = function(t) {
        return 'Float64Array' === a(t);
      }, e.isBigInt64Array = function(t) {
        return 'BigInt64Array' === a(t);
      }, e.isBigUint64Array = function(t) {
        return 'BigUint64Array' === a(t);
      }, d.working = 'undefined' != typeof Map && d(new Map), e.isMap = function(t) {
        return 'undefined' != typeof Map && (d.working ? d(t) : t instanceof Map);
      }, h.working = 'undefined' != typeof Set && h(new Set), e.isSet = function(t) {
        return 'undefined' != typeof Set && (h.working ? h(t) : t instanceof Set);
      }, m.working = 'undefined' != typeof WeakMap && m(new WeakMap), e.isWeakMap = function(t) {
        return 'undefined' != typeof WeakMap && (m.working ? m(t) : t instanceof WeakMap);
      }, w.working = 'undefined' != typeof WeakSet && w(new WeakSet), e.isWeakSet = function(t) {
        return w(t);
      }, O.working = 'undefined' != typeof ArrayBuffer && O(new ArrayBuffer), e.isArrayBuffer = S, E.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && E(new DataView(new ArrayBuffer(1), 0, 1)), 
      e.isDataView = j;
      var A = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function P(t) {
        return '[object SharedArrayBuffer]' === l(t);
      }
      function x(t) {
        return void 0 !== A && (void 0 === P.working && (P.working = P(new A)), P.working ? P(t) : t instanceof A);
      }
      function T(t) {
        return b(t, p);
      }
      function I(t) {
        return b(t, s);
      }
      function R(t) {
        return b(t, y);
      }
      function k(t) {
        return u && b(t, v);
      }
      function N(t) {
        return f && b(t, g);
      }
      e.isSharedArrayBuffer = x, e.isAsyncFunction = function(t) {
        return '[object AsyncFunction]' === l(t);
      }, e.isMapIterator = function(t) {
        return '[object Map Iterator]' === l(t);
      }, e.isSetIterator = function(t) {
        return '[object Set Iterator]' === l(t);
      }, e.isGeneratorObject = function(t) {
        return '[object Generator]' === l(t);
      }, e.isWebAssemblyCompiledModule = function(t) {
        return '[object WebAssembly.Module]' === l(t);
      }, e.isNumberObject = T, e.isStringObject = I, e.isBooleanObject = R, e.isBigIntObject = k, e.isSymbolObject = N, e.isBoxedPrimitive = function(t) {
        return T(t) || I(t) || R(t) || k(t) || N(t);
      }, e.isAnyArrayBuffer = function(t) {
        return 'undefined' != typeof Uint8Array && (S(t) || x(t));
      }, [ 'isProxy', 'isExternal', 'isModuleNamespaceObject' ].forEach((function(t) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          value: function() {
            throw new Error(t + ' is not supported in userland');
          }
        });
      }));
    },
    539: (t, e, r) => {
      var n = r(155);
      var o = r(108);
      var a = Object.getOwnPropertyDescriptors || function(t) {
        var e = Object.keys(t);
        var r = {};
        for (var n = 0; n < e.length; n++) r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
        return r;
      };
      var i = /%[sdj%]/g;
      e.format = function(t) {
        if (!w(t)) {
          var e = [];
          for (var r = 0; r < arguments.length; r++) e.push(l(arguments[r]));
          return e.join(' ');
        }
        r = 1;
        var n = arguments;
        var o = n.length;
        var a = String(t).replace(i, (function(t) {
          if ('%%' === t) return '%';
          if (r >= o) return t;
          switch (t) {
           case '%s':
            return String(n[r++]);

           case '%d':
            return Number(n[r++]);

           case '%j':
            try {
              return JSON.stringify(n[r++]);
            } catch (e) {
              return '[Circular]';
            }

           default:
            return t;
          }
        }));
        for (var c = n[r]; r < o; c = n[++r]) h(c) || !E(c) ? a += ' ' + c : a += ' ' + l(c);
        return a;
      }, e.deprecate = function(t, r) {
        if (void 0 !== n && !0 === n.noDeprecation) return t;
        if (void 0 === n) return function() {
          return e.deprecate(t, r).apply(this, arguments);
        };
        var a = !1;
        return function() {
          if (!a) {
            if (n.throwDeprecation) throw new Error(r);
            n.traceDeprecation ? o.trace(r) : o.error(r), a = !0;
          }
          return t.apply(this, arguments);
        };
      };
      var c = {};
      var u = /^$/;
      if (n.env.NODE_DEBUG) {
        var f = n.env.NODE_DEBUG;
        f = f.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*').replace(/,/g, '$|^').toUpperCase(), u = new RegExp('^' + f + '$', 'i');
      }
      function l(t, r) {
        var n = {
          seen: [],
          stylize: s
        };
        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), d(r) ? n.showHidden = r : r && e._extend(n, r), 
        O(n.showHidden) && (n.showHidden = !1), O(n.depth) && (n.depth = 2), O(n.colors) && (n.colors = !1), O(n.customInspect) && (n.customInspect = !0), 
        n.colors && (n.stylize = p), y(n, t, n.depth);
      }
      function p(t, e) {
        var r = l.styles[e];
        return r ? '[' + l.colors[r][0] + 'm' + t + '[' + l.colors[r][1] + 'm' : t;
      }
      function s(t, e) {
        return t;
      }
      function y(t, r, n) {
        if (t.customInspect && r && P(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
          var o = r.inspect(n, t);
          return w(o) || (o = y(t, o, n)), o;
        }
        var a = function(t, e) {
          if (O(e)) return t.stylize('undefined', 'undefined');
          if (w(e)) {
            var r = '\'' + JSON.stringify(e).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return t.stylize(r, 'string');
          }
          if (m(e)) return t.stylize('' + e, 'number');
          if (d(e)) return t.stylize('' + e, 'boolean');
          if (h(e)) return t.stylize('null', 'null');
        }(t, r);
        if (a) return a;
        var i = Object.keys(r);
        var c = function(t) {
          var e = {};
          return t.forEach((function(t, r) {
            e[t] = !0;
          })), e;
        }(i);
        if (t.showHidden && (i = Object.getOwnPropertyNames(r)), A(r) && (i.indexOf('message') >= 0 || i.indexOf('description') >= 0)) return v(r);
        if (0 === i.length) {
          if (P(r)) {
            var u = r.name ? ': ' + r.name : '';
            return t.stylize('[Function' + u + ']', 'special');
          }
          if (S(r)) return t.stylize(RegExp.prototype.toString.call(r), 'regexp');
          if (j(r)) return t.stylize(Date.prototype.toString.call(r), 'date');
          if (A(r)) return v(r);
        }
        var f = '', l = !1, p = [ '{', '}' ];
        (b(r) && (l = !0, p = [ '[', ']' ]), P(r)) && (f = ' [Function' + (r.name ? ': ' + r.name : '') + ']');
        return S(r) && (f = ' ' + RegExp.prototype.toString.call(r)), j(r) && (f = ' ' + Date.prototype.toUTCString.call(r)), A(r) && (f = ' ' + v(r)), 
        0 !== i.length || l && 0 != r.length ? n < 0 ? S(r) ? t.stylize(RegExp.prototype.toString.call(r), 'regexp') : t.stylize('[Object]', 'special') : (t.seen.push(r), 
        s = l ? function(t, e, r, n, o) {
          var a = [];
          for (var i = 0, c = e.length; i < c; ++i) k(e, String(i)) ? a.push(g(t, e, r, n, String(i), !0)) : a.push('');
          return o.forEach((function(o) {
            o.match(/^\d+$/) || a.push(g(t, e, r, n, o, !0));
          })), a;
        }(t, r, n, c, i) : i.map((function(e) {
          return g(t, r, n, c, e, l);
        })), t.seen.pop(), function(t, e, r) {
          if (t.reduce((function(t, e) {
            return e.indexOf('\n') >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }), 0) > 60) return r[0] + ('' === e ? '' : e + '\n ') + ' ' + t.join(',\n  ') + ' ' + r[1];
          return r[0] + e + ' ' + t.join(', ') + ' ' + r[1];
        }(s, f, p)) : p[0] + f + p[1];
        var s;
      }
      function v(t) {
        return '[' + Error.prototype.toString.call(t) + ']';
      }
      function g(t, e, r, n, o, a) {
        var i, c, u;
        if ((u = Object.getOwnPropertyDescriptor(e, o) || {
          value: e[o]
        }).get ? c = u.set ? t.stylize('[Getter/Setter]', 'special') : t.stylize('[Getter]', 'special') : u.set && (c = t.stylize('[Setter]', 'special')), 
        k(n, o) || (i = '[' + o + ']'), c || (t.seen.indexOf(u.value) < 0 ? (c = h(r) ? y(t, u.value, null) : y(t, u.value, r - 1)).indexOf('\n') > -1 && (c = a ? c.split('\n').map((function(t) {
          return '  ' + t;
        })).join('\n').substr(2) : '\n' + c.split('\n').map((function(t) {
          return '   ' + t;
        })).join('\n')) : c = t.stylize('[Circular]', 'special')), O(i)) {
          if (a && o.match(/^\d+$/)) return c;
          (i = JSON.stringify('' + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = t.stylize(i, 'name')) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), 
          i = t.stylize(i, 'string'));
        }
        return i + ': ' + c;
      }
      function b(t) {
        return Array.isArray(t);
      }
      function d(t) {
        return 'boolean' == typeof t;
      }
      function h(t) {
        return null === t;
      }
      function m(t) {
        return 'number' == typeof t;
      }
      function w(t) {
        return 'string' == typeof t;
      }
      function O(t) {
        return void 0 === t;
      }
      function S(t) {
        return E(t) && '[object RegExp]' === x(t);
      }
      function E(t) {
        return 'object' == typeof t && null !== t;
      }
      function j(t) {
        return E(t) && '[object Date]' === x(t);
      }
      function A(t) {
        return E(t) && ('[object Error]' === x(t) || t instanceof Error);
      }
      function P(t) {
        return 'function' == typeof t;
      }
      function x(t) {
        return Object.prototype.toString.call(t);
      }
      function T(t) {
        return t < 10 ? '0' + t.toString(10) : t.toString(10);
      }
      e.debuglog = function(t) {
        if (t = t.toUpperCase(), !c[t]) if (u.test(t)) {
          var r = n.pid;
          c[t] = function() {
            var n = e.format.apply(e, arguments);
            o.error('%s %d: %s', t, r, n);
          };
        } else c[t] = function() {};
        return c[t];
      }, e.inspect = l, l.colors = {
        bold: [ 1, 22 ],
        italic: [ 3, 23 ],
        underline: [ 4, 24 ],
        inverse: [ 7, 27 ],
        white: [ 37, 39 ],
        grey: [ 90, 39 ],
        black: [ 30, 39 ],
        blue: [ 34, 39 ],
        cyan: [ 36, 39 ],
        green: [ 32, 39 ],
        magenta: [ 35, 39 ],
        red: [ 31, 39 ],
        yellow: [ 33, 39 ]
      }, l.styles = {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        date: 'magenta',
        regexp: 'red'
      }, e.types = r(955), e.isArray = b, e.isBoolean = d, e.isNull = h, e.isNullOrUndefined = function(t) {
        return null == t;
      }, e.isNumber = m, e.isString = w, e.isSymbol = function(t) {
        return 'symbol' == typeof t;
      }, e.isUndefined = O, e.isRegExp = S, e.types.isRegExp = S, e.isObject = E, e.isDate = j, e.types.isDate = j, e.isError = A, 
      e.types.isNativeError = A, e.isFunction = P, e.isPrimitive = function(t) {
        return null === t || 'boolean' == typeof t || 'number' == typeof t || 'string' == typeof t || 'symbol' == typeof t || void 0 === t;
      }, e.isBuffer = r(384);
      var I = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
      function R() {
        var t = new Date;
        var e = [ T(t.getHours()), T(t.getMinutes()), T(t.getSeconds()) ].join(':');
        return [ t.getDate(), I[t.getMonth()], e ].join(' ');
      }
      function k(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      e.log = function() {
        o.log('%s - %s', R(), e.format.apply(e, arguments));
      }, e.inherits = r(717), e._extend = function(t, e) {
        if (!e || !E(e)) return t;
        var r = Object.keys(e);
        var n = r.length;
        for (;n--; ) t[r[n]] = e[r[n]];
        return t;
      };
      var N = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
      function F(t, e) {
        if (!t) {
          var r = new Error('Promise was rejected with a falsy value');
          r.reason = t, t = r;
        }
        return e(t);
      }
      e.promisify = function(t) {
        if ('function' != typeof t) throw new TypeError('The "original" argument must be of type Function');
        if (N && t[N]) {
          var e;
          if ('function' != typeof (e = t[N])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(e, N, {
            value: e,
            enumerable: !1,
            writable: !1,
            configurable: !0
          }), e;
        }
        function e() {
          var e, r;
          var n = new Promise((function(t, n) {
            e = t, r = n;
          }));
          var o = [];
          for (var a = 0; a < arguments.length; a++) o.push(arguments[a]);
          o.push((function(t, n) {
            t ? r(t) : e(n);
          }));
          try {
            t.apply(this, o);
          } catch (i) {
            r(i);
          }
          return n;
        }
        return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), N && Object.defineProperty(e, N, {
          value: e,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), Object.defineProperties(e, a(t));
      }, e.promisify.custom = N, e.callbackify = function(t) {
        if ('function' != typeof t) throw new TypeError('The "original" argument must be of type Function');
        function e() {
          var e = [];
          for (var r = 0; r < arguments.length; r++) e.push(arguments[r]);
          var o = e.pop();
          if ('function' != typeof o) throw new TypeError('The last argument must be of type Function');
          var a = this;
          var i = function() {
            return o.apply(a, arguments);
          };
          t.apply(this, e).then((function(t) {
            n.nextTick(i.bind(null, null, t));
          }), (function(t) {
            n.nextTick(F.bind(null, t, i));
          }));
        }
        return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), Object.defineProperties(e, a(t)), e;
      };
    },
    430: (t, e, r) => {
      "use strict";
      var n = r(29);
      var o = r(83);
      var a = r(924);
      var i = a('Object.prototype.toString');
      var c = r(410)();
      var u = 'undefined' == typeof globalThis ? r.g : globalThis;
      var f = o();
      var l = a('String.prototype.slice');
      var p = {};
      var s = r(882);
      var y = Object.getPrototypeOf;
      c && s && y && n(f, (function(t) {
        if ('function' == typeof u[t]) {
          var e = new u[t];
          if (Symbol.toStringTag in e) {
            var r = y(e);
            var n = s(r, Symbol.toStringTag);
            if (!n) {
              var o = y(r);
              n = s(o, Symbol.toStringTag);
            }
            p[t] = n.get;
          }
        }
      }));
      var v = r(692);
      t.exports = function(t) {
        return !!v(t) && (c && Symbol.toStringTag in t ? function(t) {
          var e = !1;
          return n(p, (function(r, n) {
            if (!e) try {
              var o = r.call(t);
              o === n && (e = o);
            } catch (a) {}
          })), e;
        }(t) : l(i(t), 8, -1));
      };
    },
    83: (t, e, r) => {
      "use strict";
      var n = [ 'BigInt64Array', 'BigUint64Array', 'Float32Array', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'Uint8ClampedArray' ];
      var o = 'undefined' == typeof globalThis ? r.g : globalThis;
      t.exports = function() {
        var t = [];
        for (var e = 0; e < n.length; e++) 'function' == typeof o[n[e]] && (t[t.length] = n[e]);
        return t;
      };
    },
    882: (t, e, r) => {
      "use strict";
      var n = r(210)('%Object.getOwnPropertyDescriptor%', !0);
      if (n) try {
        n([], 'length');
      } catch (o) {
        n = null;
      }
      t.exports = n;
    }
  };
  var e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var a = e[n] = {
      exports: {}
    };
    return t[n](a, a.exports, r), a.exports;
  }
  (() => {
    r.g = function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    }();
  })(), (() => {
    "use strict";
    function t(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }
    function e(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        }))), r.push.apply(r, n);
      }
      return r;
    }
    function n(r) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(o), !0).forEach((function(e) {
          t(r, e, o[e]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(t) {
          Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t));
        }));
      }
      return r;
    }
    r(108);
    function o(t) {
      return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
    }
    var a = function() {
      return 'function' == typeof Symbol && Symbol.observable || '@@observable';
    }();
    var i = function() {
      return Math.random().toString(36).substring(7).split('').join('.');
    };
    var c = {
      INIT: "@@redux/INIT" + i(),
      REPLACE: "@@redux/REPLACE" + i(),
      PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + i();
      }
    };
    function u(t) {
      if ('object' != typeof t || null === t) return !1;
      var e = t;
      for (;null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
      return Object.getPrototypeOf(t) === e;
    }
    function f(t, e, r) {
      var n;
      if ('function' == typeof e && 'function' == typeof r || 'function' == typeof r && 'function' == typeof arguments[3]) throw new Error(o(0));
      if ('function' == typeof e && void 0 === r && (r = e, e = void 0), void 0 !== r) {
        if ('function' != typeof r) throw new Error(o(1));
        return r(f)(t, e);
      }
      if ('function' != typeof t) throw new Error(o(2));
      var i = t;
      var l = e;
      var p = [];
      var s = p;
      var y = !1;
      function v() {
        s === p && (s = p.slice());
      }
      function g() {
        if (y) throw new Error(o(3));
        return l;
      }
      function b(t) {
        if ('function' != typeof t) throw new Error(o(4));
        if (y) throw new Error(o(5));
        var e = !0;
        return v(), s.push(t), function() {
          if (e) {
            if (y) throw new Error(o(6));
            e = !1, v();
            var r = s.indexOf(t);
            s.splice(r, 1), p = null;
          }
        };
      }
      function d(t) {
        if (!u(t)) throw new Error(o(7));
        if (void 0 === t.type) throw new Error(o(8));
        if (y) throw new Error(o(9));
        try {
          y = !0, l = i(l, t);
        } finally {
          y = !1;
        }
        var e = p = s;
        for (var r = 0; r < e.length; r++) {
          (0, e[r])();
        }
        return t;
      }
      function h(t) {
        if ('function' != typeof t) throw new Error(o(10));
        i = t, d({
          type: c.REPLACE
        });
      }
      function m() {
        var t;
        var e = b;
        return (t = {
          subscribe: function(t) {
            if ('object' != typeof t || null === t) throw new Error(o(11));
            function r() {
              t.next && t.next(g());
            }
            return r(), {
              unsubscribe: e(r)
            };
          }
        })[a] = function() {
          return this;
        }, t;
      }
      return d({
        type: c.INIT
      }), (n = {
        dispatch: d,
        subscribe: b,
        getState: g,
        replaceReducer: h
      })[a] = m, n;
    }
    function l() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return 0 === e.length ? function(t) {
        return t;
      } : 1 === e.length ? e[0] : e.reduce((function(t, e) {
        return function() {
          return t(e.apply(void 0, arguments));
        };
      }));
    }
    function p(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function s(t) {
      return function(t) {
        if (Array.isArray(t)) return p(t);
      }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || function(t, e) {
        if (t) {
          if ("string" == typeof t) return p(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(t, e) : void 0;
        }
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function y(t) {
      return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, y(t);
    }
    var v = 'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      if (0 !== e.length) return 'object' === y(e[0]) ? l : l.apply(void 0, s(e));
    };
    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
    var g = r(108);
    const b = f((function(t = 0, e) {
      switch (e.type) {
       case 'INCREMENT':
        return g.log('up'), t + 1;

       case 'DECREMENT':
        return g.log('down'), t - 1;

       default:
        return t;
      }
    }), v(function() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return function(t) {
        return function() {
          var r = t.apply(void 0, arguments);
          var a = function() {
            throw new Error(o(15));
          };
          var i = {
            getState: r.getState,
            dispatch: function() {
              return a.apply(void 0, arguments);
            }
          };
          var c = e.map((function(t) {
            return t(i);
          }));
          return a = l.apply(void 0, c)(r.dispatch), n(n({}, r), {}, {
            dispatch: a
          });
        };
      };
    }((function({getState: t}) {
      return e => r => {
        g.log('will dispatch', r);
        const n = e(r);
        return g.log('state after dispatch', t()), n;
      };
    }))));
    document.getElementById('increment').addEventListener('click', (function() {
      g.log('INCREMENT'), b.dispatch({
        type: 'INCREMENT'
      });
    })), document.getElementById('decrement').addEventListener('click', (function() {
      g.log('DECREMENT'), b.dispatch({
        type: 'DECREMENT'
      });
    }));
  })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFRbGlCLEtBQWV3aUI7UUFDckIsRUFBUWhuQixJQUFJLGlCQUFpQmduQjtRQUM3QixNQUFNMkIsSUFBY25rQixFQUFLd2lCO1FBRXpCLE9BREEsRUFBUWhuQixJQUFJLHdCQUF3QjBtQixNQUM3QmlDO0FBQVc7QUFFdEI7SUFTQXRULFNBQVN1VCxlQUFlLGFBQ3JCQyxpQkFBaUIsVUFBUztNQUN6QixFQUFRN29CLElBQUksY0FDWm1vQixFQUFNcEIsU0FBUztRQUFFdmpCLE1BQU07O0FBQ3pCLFNBRUY2UixTQUFTdVQsZUFBZSxhQUNyQkMsaUJBQWlCLFVBQVM7TUFDekIsRUFBUTdvQixJQUFJLGNBQ1ptb0IsRUFBTXBCLFNBQVM7UUFBRXZqQixNQUFNOztBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2J1aWxkL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2Fzc2VydC9idWlsZC9pbnRlcm5hbC9hc3NlcnQvYXNzZXJ0aW9uX2Vycm9yLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2J1aWxkL2ludGVybmFsL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2Fzc2VydC9idWlsZC9pbnRlcm5hbC91dGlsL2NvbXBhcmlzb25zLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2NhbGxCb3VuZC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvbnNvbGUtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvZXM2LW9iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9mb3ItZWFjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9oYXMtdG9zdHJpbmd0YWcvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9oYXMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2lzLWFyZ3VtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2lzLWNhbGxhYmxlL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtZ2VuZXJhdG9yLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtbmFuL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtbmFuL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtbmFuL3BvbHlmaWxsLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtbmFuL3NoaW0uanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pcy10eXBlZC1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9zaGltLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC90eXBlcy5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL3doaWNoLXR5cGVkLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvYXZhaWxhYmxlLXR5cGVkLWFycmF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AcmVkdXgtZGV2dG9vbHMvZXh0ZW5zaW9uL2xpYi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXJyZW50bHkgaW4gc3luYyB3aXRoIE5vZGUuanMgbGliL2Fzc2VydC5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2NvbW1pdC8yYTUxYWU0MjRhNTEzZWM5YTZhYTM0NjZiYWEwY2MxZDU1ZGQ0ZjNiXG4vLyBPcmlnaW5hbGx5IGZyb20gbmFyd2hhbC5qcyAoaHR0cDovL25hcndoYWxqcy5vcmcpXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgVGhvbWFzIFJvYmluc29uIDwyODBub3J0aC5jb20+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvXG4vLyBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuLy8gcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4vLyBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuLy8gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvZXJyb3JzJyksXG4gICAgX3JlcXVpcmUkY29kZXMgPSBfcmVxdWlyZS5jb2RlcyxcbiAgICBFUlJfQU1CSUdVT1VTX0FSR1VNRU5UID0gX3JlcXVpcmUkY29kZXMuRVJSX0FNQklHVU9VU19BUkdVTUVOVCxcbiAgICBFUlJfSU5WQUxJRF9BUkdfVFlQRSA9IF9yZXF1aXJlJGNvZGVzLkVSUl9JTlZBTElEX0FSR19UWVBFLFxuICAgIEVSUl9JTlZBTElEX0FSR19WQUxVRSA9IF9yZXF1aXJlJGNvZGVzLkVSUl9JTlZBTElEX0FSR19WQUxVRSxcbiAgICBFUlJfSU5WQUxJRF9SRVRVUk5fVkFMVUUgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfSU5WQUxJRF9SRVRVUk5fVkFMVUUsXG4gICAgRVJSX01JU1NJTkdfQVJHUyA9IF9yZXF1aXJlJGNvZGVzLkVSUl9NSVNTSU5HX0FSR1M7XG5cbnZhciBBc3NlcnRpb25FcnJvciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvYXNzZXJ0L2Fzc2VydGlvbl9lcnJvcicpO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgndXRpbC8nKSxcbiAgICBpbnNwZWN0ID0gX3JlcXVpcmUyLmluc3BlY3Q7XG5cbnZhciBfcmVxdWlyZSR0eXBlcyA9IHJlcXVpcmUoJ3V0aWwvJykudHlwZXMsXG4gICAgaXNQcm9taXNlID0gX3JlcXVpcmUkdHlwZXMuaXNQcm9taXNlLFxuICAgIGlzUmVnRXhwID0gX3JlcXVpcmUkdHlwZXMuaXNSZWdFeHA7XG5cbnZhciBvYmplY3RBc3NpZ24gPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbiA6IHJlcXVpcmUoJ2VzNi1vYmplY3QtYXNzaWduJykuYXNzaWduO1xudmFyIG9iamVjdElzID0gT2JqZWN0LmlzID8gT2JqZWN0LmlzIDogcmVxdWlyZSgnb2JqZWN0LWlzJyk7XG52YXIgZXJyb3JDYWNoZSA9IG5ldyBNYXAoKTtcbnZhciBpc0RlZXBFcXVhbDtcbnZhciBpc0RlZXBTdHJpY3RFcXVhbDtcbnZhciBwYXJzZUV4cHJlc3Npb25BdDtcbnZhciBmaW5kTm9kZUFyb3VuZDtcbnZhciBkZWNvZGVyO1xuXG5mdW5jdGlvbiBsYXp5TG9hZENvbXBhcmlzb24oKSB7XG4gIHZhciBjb21wYXJpc29uID0gcmVxdWlyZSgnLi9pbnRlcm5hbC91dGlsL2NvbXBhcmlzb25zJyk7XG5cbiAgaXNEZWVwRXF1YWwgPSBjb21wYXJpc29uLmlzRGVlcEVxdWFsO1xuICBpc0RlZXBTdHJpY3RFcXVhbCA9IGNvbXBhcmlzb24uaXNEZWVwU3RyaWN0RXF1YWw7XG59IC8vIEVzY2FwZSBjb250cm9sIGNoYXJhY3RlcnMgYnV0IG5vdCBcXG4gYW5kIFxcdCB0byBrZWVwIHRoZSBsaW5lIGJyZWFrcyBhbmRcbi8vIGluZGVudGF0aW9uIGludGFjdC5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5cblxudmFyIGVzY2FwZVNlcXVlbmNlc1JlZ0V4cCA9IC9bXFx4MDAtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZdL2c7XG52YXIgbWV0YSA9IFtcIlxcXFx1MDAwMFwiLCBcIlxcXFx1MDAwMVwiLCBcIlxcXFx1MDAwMlwiLCBcIlxcXFx1MDAwM1wiLCBcIlxcXFx1MDAwNFwiLCBcIlxcXFx1MDAwNVwiLCBcIlxcXFx1MDAwNlwiLCBcIlxcXFx1MDAwN1wiLCAnXFxcXGInLCAnJywgJycsIFwiXFxcXHUwMDBiXCIsICdcXFxcZicsICcnLCBcIlxcXFx1MDAwZVwiLCBcIlxcXFx1MDAwZlwiLCBcIlxcXFx1MDAxMFwiLCBcIlxcXFx1MDAxMVwiLCBcIlxcXFx1MDAxMlwiLCBcIlxcXFx1MDAxM1wiLCBcIlxcXFx1MDAxNFwiLCBcIlxcXFx1MDAxNVwiLCBcIlxcXFx1MDAxNlwiLCBcIlxcXFx1MDAxN1wiLCBcIlxcXFx1MDAxOFwiLCBcIlxcXFx1MDAxOVwiLCBcIlxcXFx1MDAxYVwiLCBcIlxcXFx1MDAxYlwiLCBcIlxcXFx1MDAxY1wiLCBcIlxcXFx1MDAxZFwiLCBcIlxcXFx1MDAxZVwiLCBcIlxcXFx1MDAxZlwiXTtcblxudmFyIGVzY2FwZUZuID0gZnVuY3Rpb24gZXNjYXBlRm4oc3RyKSB7XG4gIHJldHVybiBtZXRhW3N0ci5jaGFyQ29kZUF0KDApXTtcbn07XG5cbnZhciB3YXJuZWQgPSBmYWxzZTsgLy8gVGhlIGFzc2VydCBtb2R1bGUgcHJvdmlkZXMgZnVuY3Rpb25zIHRoYXQgdGhyb3dcbi8vIEFzc2VydGlvbkVycm9yJ3Mgd2hlbiBwYXJ0aWN1bGFyIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQuIFRoZVxuLy8gYXNzZXJ0IG1vZHVsZSBtdXN0IGNvbmZvcm0gdG8gdGhlIGZvbGxvd2luZyBpbnRlcmZhY2UuXG5cbnZhciBhc3NlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IG9rO1xudmFyIE5PX0VYQ0VQVElPTl9TRU5USU5FTCA9IHt9OyAvLyBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiBBbGwgYXNzZXJ0aW9uIG1ldGhvZHMgcHJvdmlkZVxuLy8gYm90aCB0aGUgYWN0dWFsIGFuZCBleHBlY3RlZCB2YWx1ZXMgdG8gdGhlIGFzc2VydGlvbiBlcnJvciBmb3Jcbi8vIGRpc3BsYXkgcHVycG9zZXMuXG5cbmZ1bmN0aW9uIGlubmVyRmFpbChvYmopIHtcbiAgaWYgKG9iai5tZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IG9iai5tZXNzYWdlO1xuICB0aHJvdyBuZXcgQXNzZXJ0aW9uRXJyb3Iob2JqKTtcbn1cblxuZnVuY3Rpb24gZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBvcGVyYXRvciwgc3RhY2tTdGFydEZuKSB7XG4gIHZhciBhcmdzTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGludGVybmFsTWVzc2FnZTtcblxuICBpZiAoYXJnc0xlbiA9PT0gMCkge1xuICAgIGludGVybmFsTWVzc2FnZSA9ICdGYWlsZWQnO1xuICB9IGVsc2UgaWYgKGFyZ3NMZW4gPT09IDEpIHtcbiAgICBtZXNzYWdlID0gYWN0dWFsO1xuICAgIGFjdHVhbCA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAod2FybmVkID09PSBmYWxzZSkge1xuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICAgIHZhciB3YXJuID0gcHJvY2Vzcy5lbWl0V2FybmluZyA/IHByb2Nlc3MuZW1pdFdhcm5pbmcgOiBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKTtcbiAgICAgIHdhcm4oJ2Fzc2VydC5mYWlsKCkgd2l0aCBtb3JlIHRoYW4gb25lIGFyZ3VtZW50IGlzIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSBhc3NlcnQuc3RyaWN0RXF1YWwoKSBpbnN0ZWFkIG9yIG9ubHkgcGFzcyBhIG1lc3NhZ2UuJywgJ0RlcHJlY2F0aW9uV2FybmluZycsICdERVAwMDk0Jyk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3NMZW4gPT09IDIpIG9wZXJhdG9yID0gJyE9JztcbiAgfVxuXG4gIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IG1lc3NhZ2U7XG4gIHZhciBlcnJBcmdzID0ge1xuICAgIGFjdHVhbDogYWN0dWFsLFxuICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICBvcGVyYXRvcjogb3BlcmF0b3IgPT09IHVuZGVmaW5lZCA/ICdmYWlsJyA6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGbjogc3RhY2tTdGFydEZuIHx8IGZhaWxcbiAgfTtcblxuICBpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXJyQXJncy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIHZhciBlcnIgPSBuZXcgQXNzZXJ0aW9uRXJyb3IoZXJyQXJncyk7XG5cbiAgaWYgKGludGVybmFsTWVzc2FnZSkge1xuICAgIGVyci5tZXNzYWdlID0gaW50ZXJuYWxNZXNzYWdlO1xuICAgIGVyci5nZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgfVxuXG4gIHRocm93IGVycjtcbn1cblxuYXNzZXJ0LmZhaWwgPSBmYWlsOyAvLyBUaGUgQXNzZXJ0aW9uRXJyb3IgaXMgZGVmaW5lZCBpbiBpbnRlcm5hbC9lcnJvci5cblxuYXNzZXJ0LkFzc2VydGlvbkVycm9yID0gQXNzZXJ0aW9uRXJyb3I7XG5cbmZ1bmN0aW9uIGlubmVyT2soZm4sIGFyZ0xlbiwgdmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHZhciBnZW5lcmF0ZWRNZXNzYWdlID0gZmFsc2U7XG5cbiAgICBpZiAoYXJnTGVuID09PSAwKSB7XG4gICAgICBnZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgICAgIG1lc3NhZ2UgPSAnTm8gdmFsdWUgYXJndW1lbnQgcGFzc2VkIHRvIGBhc3NlcnQub2soKWAnO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICB0aHJvdyBtZXNzYWdlO1xuICAgIH1cblxuICAgIHZhciBlcnIgPSBuZXcgQXNzZXJ0aW9uRXJyb3Ioe1xuICAgICAgYWN0dWFsOiB2YWx1ZSxcbiAgICAgIGV4cGVjdGVkOiB0cnVlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnPT0nLFxuICAgICAgc3RhY2tTdGFydEZuOiBmblxuICAgIH0pO1xuICAgIGVyci5nZW5lcmF0ZWRNZXNzYWdlID0gZ2VuZXJhdGVkTWVzc2FnZTtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn0gLy8gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISF2YWx1ZS5cblxuXG5mdW5jdGlvbiBvaygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlubmVyT2suYXBwbHkodm9pZCAwLCBbb2ssIGFyZ3MubGVuZ3RoXS5jb25jYXQoYXJncykpO1xufVxuXG5hc3NlcnQub2sgPSBvazsgLy8gVGhlIGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzaGFsbG93LCBjb2VyY2l2ZSBlcXVhbGl0eSB3aXRoID09LlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXMgKi9cblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXG5cbiAgaWYgKGFjdHVhbCAhPSBleHBlY3RlZCkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJz09JyxcbiAgICAgIHN0YWNrU3RhcnRGbjogZXF1YWxcbiAgICB9KTtcbiAgfVxufTsgLy8gVGhlIG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHdoZXRoZXIgdHdvIG9iamVjdHMgYXJlIG5vdFxuLy8gZXF1YWwgd2l0aCAhPS5cblxuXG5hc3NlcnQubm90RXF1YWwgPSBmdW5jdGlvbiBub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdhY3R1YWwnLCAnZXhwZWN0ZWQnKTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cblxuICBpZiAoYWN0dWFsID09IGV4cGVjdGVkKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnIT0nLFxuICAgICAgc3RhY2tTdGFydEZuOiBub3RFcXVhbFxuICAgIH0pO1xuICB9XG59OyAvLyBUaGUgZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGEgZGVlcCBlcXVhbGl0eSByZWxhdGlvbi5cblxuXG5hc3NlcnQuZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuXG4gIGlmICghaXNEZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCkpIHtcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICdkZWVwRXF1YWwnLFxuICAgICAgc3RhY2tTdGFydEZuOiBkZWVwRXF1YWxcbiAgICB9KTtcbiAgfVxufTsgLy8gVGhlIG5vbi1lcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgZm9yIGFueSBkZWVwIGluZXF1YWxpdHkuXG5cblxuYXNzZXJ0Lm5vdERlZXBFcXVhbCA9IGZ1bmN0aW9uIG5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdhY3R1YWwnLCAnZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGlmIChpc0RlZXBFcXVhbCA9PT0gdW5kZWZpbmVkKSBsYXp5TG9hZENvbXBhcmlzb24oKTtcblxuICBpZiAoaXNEZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCkpIHtcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICdub3REZWVwRXF1YWwnLFxuICAgICAgc3RhY2tTdGFydEZuOiBub3REZWVwRXF1YWxcbiAgICB9KTtcbiAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsID0gZnVuY3Rpb24gZGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuXG4gIGlmICghaXNEZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCkpIHtcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICdkZWVwU3RyaWN0RXF1YWwnLFxuICAgICAgc3RhY2tTdGFydEZuOiBkZWVwU3RyaWN0RXF1YWxcbiAgICB9KTtcbiAgfVxufTtcblxuYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbCA9IG5vdERlZXBTdHJpY3RFcXVhbDtcblxuZnVuY3Rpb24gbm90RGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuXG4gIGlmIChpc0RlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ25vdERlZXBTdHJpY3RFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IG5vdERlZXBTdHJpY3RFcXVhbFxuICAgIH0pO1xuICB9XG59XG5cbmFzc2VydC5zdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKCFvYmplY3RJcyhhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ3N0cmljdEVxdWFsJyxcbiAgICAgIHN0YWNrU3RhcnRGbjogc3RyaWN0RXF1YWxcbiAgICB9KTtcbiAgfVxufTtcblxuYXNzZXJ0Lm5vdFN0cmljdEVxdWFsID0gZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAob2JqZWN0SXMoYWN0dWFsLCBleHBlY3RlZCkpIHtcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICdub3RTdHJpY3RFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IG5vdFN0cmljdEVxdWFsXG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBDb21wYXJpc29uID0gZnVuY3Rpb24gQ29tcGFyaXNvbihvYmosIGtleXMsIGFjdHVhbCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wYXJpc29uKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoYWN0dWFsICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGFjdHVhbFtrZXldID09PSAnc3RyaW5nJyAmJiBpc1JlZ0V4cChvYmpba2V5XSkgJiYgb2JqW2tleV0udGVzdChhY3R1YWxba2V5XSkpIHtcbiAgICAgICAgX3RoaXNba2V5XSA9IGFjdHVhbFtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXNba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBjb21wYXJlRXhjZXB0aW9uS2V5KGFjdHVhbCwgZXhwZWN0ZWQsIGtleSwgbWVzc2FnZSwga2V5cywgZm4pIHtcbiAgaWYgKCEoa2V5IGluIGFjdHVhbCkgfHwgIWlzRGVlcFN0cmljdEVxdWFsKGFjdHVhbFtrZXldLCBleHBlY3RlZFtrZXldKSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIG9iamVjdHMgdG8gY3JlYXRlIGEgbmljZSBvdXRwdXQuXG4gICAgICB2YXIgYSA9IG5ldyBDb21wYXJpc29uKGFjdHVhbCwga2V5cyk7XG4gICAgICB2YXIgYiA9IG5ldyBDb21wYXJpc29uKGV4cGVjdGVkLCBrZXlzLCBhY3R1YWwpO1xuICAgICAgdmFyIGVyciA9IG5ldyBBc3NlcnRpb25FcnJvcih7XG4gICAgICAgIGFjdHVhbDogYSxcbiAgICAgICAgZXhwZWN0ZWQ6IGIsXG4gICAgICAgIG9wZXJhdG9yOiAnZGVlcFN0cmljdEVxdWFsJyxcbiAgICAgICAgc3RhY2tTdGFydEZuOiBmblxuICAgICAgfSk7XG4gICAgICBlcnIuYWN0dWFsID0gYWN0dWFsO1xuICAgICAgZXJyLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgICBlcnIub3BlcmF0b3IgPSBmbi5uYW1lO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogZm4ubmFtZSxcbiAgICAgIHN0YWNrU3RhcnRGbjogZm5cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkLCBtc2csIGZuKSB7XG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoaXNSZWdFeHAoZXhwZWN0ZWQpKSByZXR1cm4gZXhwZWN0ZWQudGVzdChhY3R1YWwpOyAvLyBhc3NlcnQuZG9lc05vdFRocm93IGRvZXMgbm90IGFjY2VwdCBvYmplY3RzLlxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9BUkdfVFlQRSgnZXhwZWN0ZWQnLCBbJ0Z1bmN0aW9uJywgJ1JlZ0V4cCddLCBleHBlY3RlZCk7XG4gICAgfSAvLyBIYW5kbGUgcHJpbWl0aXZlcyBwcm9wZXJseS5cblxuXG4gICAgaWYgKF90eXBlb2YoYWN0dWFsKSAhPT0gJ29iamVjdCcgfHwgYWN0dWFsID09PSBudWxsKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEFzc2VydGlvbkVycm9yKHtcbiAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICBvcGVyYXRvcjogJ2RlZXBTdHJpY3RFcXVhbCcsXG4gICAgICAgIHN0YWNrU3RhcnRGbjogZm5cbiAgICAgIH0pO1xuICAgICAgZXJyLm9wZXJhdG9yID0gZm4ubmFtZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cGVjdGVkKTsgLy8gU3BlY2lhbCBoYW5kbGUgZXJyb3JzIHRvIG1ha2Ugc3VyZSB0aGUgbmFtZSBhbmQgdGhlIG1lc3NhZ2UgYXJlIGNvbXBhcmVkXG4gICAgLy8gYXMgd2VsbC5cblxuICAgIGlmIChleHBlY3RlZCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBrZXlzLnB1c2goJ25hbWUnLCAnbWVzc2FnZScpO1xuICAgIH0gZWxzZSBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9BUkdfVkFMVUUoJ2Vycm9yJywgZXhwZWN0ZWQsICdtYXkgbm90IGJlIGFuIGVtcHR5IG9iamVjdCcpO1xuICAgIH1cblxuICAgIGlmIChpc0RlZXBFcXVhbCA9PT0gdW5kZWZpbmVkKSBsYXp5TG9hZENvbXBhcmlzb24oKTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBhY3R1YWxba2V5XSA9PT0gJ3N0cmluZycgJiYgaXNSZWdFeHAoZXhwZWN0ZWRba2V5XSkgJiYgZXhwZWN0ZWRba2V5XS50ZXN0KGFjdHVhbFtrZXldKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbXBhcmVFeGNlcHRpb25LZXkoYWN0dWFsLCBleHBlY3RlZCwga2V5LCBtc2csIGtleXMsIGZuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBHdWFyZCBpbnN0YW5jZW9mIGFnYWluc3QgYXJyb3cgZnVuY3Rpb25zIGFzIHRoZXkgZG9uJ3QgaGF2ZSBhIHByb3RvdHlwZS5cblxuXG4gIGlmIChleHBlY3RlZC5wcm90b3R5cGUgIT09IHVuZGVmaW5lZCAmJiBhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKEVycm9yLmlzUHJvdG90eXBlT2YoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldEFjdHVhbChmbikge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19UWVBFKCdmbicsICdGdW5jdGlvbicsIGZuKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZm4oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG5cbiAgcmV0dXJuIE5PX0VYQ0VQVElPTl9TRU5USU5FTDtcbn1cblxuZnVuY3Rpb24gY2hlY2tJc1Byb21pc2Uob2JqKSB7XG4gIC8vIEFjY2VwdCBuYXRpdmUgRVM2IHByb21pc2VzIGFuZCBwcm9taXNlcyB0aGF0IGFyZSBpbXBsZW1lbnRlZCBpbiBhIHNpbWlsYXJcbiAgLy8gd2F5LiBEbyBub3QgYWNjZXB0IHRoZW5hYmxlcyB0aGF0IHVzZSBhIGZ1bmN0aW9uIGFzIGBvYmpgIGFuZCB0aGF0IGhhdmUgbm9cbiAgLy8gYGNhdGNoYCBoYW5kbGVyLlxuICAvLyBUT0RPOiB0aGVuYWJsZXMgYXJlIGNoZWNrZWQgdXAgdW50aWwgdGhleSBoYXZlIHRoZSBjb3JyZWN0IG1ldGhvZHMsXG4gIC8vIGJ1dCBhY2NvcmRpbmcgdG8gZG9jdW1lbnRhdGlvbiwgdGhlIGB0aGVuYCBtZXRob2Qgc2hvdWxkIHJlY2VpdmVcbiAgLy8gdGhlIGBmdWxmaWxsYCBhbmQgYHJlamVjdGAgYXJndW1lbnRzIGFzIHdlbGwgb3IgaXQgbWF5IGJlIG5ldmVyIHJlc29sdmVkLlxuICByZXR1cm4gaXNQcm9taXNlKG9iaikgfHwgb2JqICE9PSBudWxsICYmIF90eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY2F0Y2ggPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JBY3R1YWwocHJvbWlzZUZuKSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0UHJvbWlzZTtcblxuICAgIGlmICh0eXBlb2YgcHJvbWlzZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBSZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIGlmIGBwcm9taXNlRm5gIHRocm93cyBzeW5jaHJvbm91c2x5LlxuICAgICAgcmVzdWx0UHJvbWlzZSA9IHByb21pc2VGbigpOyAvLyBGYWlsIGluIGNhc2Ugbm8gcHJvbWlzZSBpcyByZXR1cm5lZC5cblxuICAgICAgaWYgKCFjaGVja0lzUHJvbWlzZShyZXN1bHRQcm9taXNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfUkVUVVJOX1ZBTFVFKCdpbnN0YW5jZSBvZiBQcm9taXNlJywgJ3Byb21pc2VGbicsIHJlc3VsdFByb21pc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hlY2tJc1Byb21pc2UocHJvbWlzZUZuKSkge1xuICAgICAgcmVzdWx0UHJvbWlzZSA9IHByb21pc2VGbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19UWVBFKCdwcm9taXNlRm4nLCBbJ0Z1bmN0aW9uJywgJ1Byb21pc2UnXSwgcHJvbWlzZUZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBOT19FWENFUFRJT05fU0VOVElORUw7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhwZWN0c0Vycm9yKHN0YWNrU3RhcnRGbiwgYWN0dWFsLCBlcnJvciwgbWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2Vycm9yJywgWydPYmplY3QnLCAnRXJyb3InLCAnRnVuY3Rpb24nLCAnUmVnRXhwJ10sIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoX3R5cGVvZihhY3R1YWwpID09PSAnb2JqZWN0JyAmJiBhY3R1YWwgIT09IG51bGwpIHtcbiAgICAgIGlmIChhY3R1YWwubWVzc2FnZSA9PT0gZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVSUl9BTUJJR1VPVVNfQVJHVU1FTlQoJ2Vycm9yL21lc3NhZ2UnLCBcIlRoZSBlcnJvciBtZXNzYWdlIFxcXCJcIi5jb25jYXQoYWN0dWFsLm1lc3NhZ2UsIFwiXFxcIiBpcyBpZGVudGljYWwgdG8gdGhlIG1lc3NhZ2UuXCIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjdHVhbCA9PT0gZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFUlJfQU1CSUdVT1VTX0FSR1VNRU5UKCdlcnJvci9tZXNzYWdlJywgXCJUaGUgZXJyb3IgXFxcIlwiLmNvbmNhdChhY3R1YWwsIFwiXFxcIiBpcyBpZGVudGljYWwgdG8gdGhlIG1lc3NhZ2UuXCIpKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gZXJyb3I7XG4gICAgZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZXJyb3IgIT0gbnVsbCAmJiBfdHlwZW9mKGVycm9yKSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIGVycm9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19UWVBFKCdlcnJvcicsIFsnT2JqZWN0JywgJ0Vycm9yJywgJ0Z1bmN0aW9uJywgJ1JlZ0V4cCddLCBlcnJvcik7XG4gIH1cblxuICBpZiAoYWN0dWFsID09PSBOT19FWENFUFRJT05fU0VOVElORUwpIHtcbiAgICB2YXIgZGV0YWlscyA9ICcnO1xuXG4gICAgaWYgKGVycm9yICYmIGVycm9yLm5hbWUpIHtcbiAgICAgIGRldGFpbHMgKz0gXCIgKFwiLmNvbmNhdChlcnJvci5uYW1lLCBcIilcIik7XG4gICAgfVxuXG4gICAgZGV0YWlscyArPSBtZXNzYWdlID8gXCI6IFwiLmNvbmNhdChtZXNzYWdlKSA6ICcuJztcbiAgICB2YXIgZm5UeXBlID0gc3RhY2tTdGFydEZuLm5hbWUgPT09ICdyZWplY3RzJyA/ICdyZWplY3Rpb24nIDogJ2V4Y2VwdGlvbic7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogdW5kZWZpbmVkLFxuICAgICAgZXhwZWN0ZWQ6IGVycm9yLFxuICAgICAgb3BlcmF0b3I6IHN0YWNrU3RhcnRGbi5uYW1lLFxuICAgICAgbWVzc2FnZTogXCJNaXNzaW5nIGV4cGVjdGVkIFwiLmNvbmNhdChmblR5cGUpLmNvbmNhdChkZXRhaWxzKSxcbiAgICAgIHN0YWNrU3RhcnRGbjogc3RhY2tTdGFydEZuXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZXJyb3IgJiYgIWV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXJyb3IsIG1lc3NhZ2UsIHN0YWNrU3RhcnRGbikpIHtcbiAgICB0aHJvdyBhY3R1YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhwZWN0c05vRXJyb3Ioc3RhY2tTdGFydEZuLCBhY3R1YWwsIGVycm9yLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT09IE5PX0VYQ0VQVElPTl9TRU5USU5FTCkgcmV0dXJuO1xuXG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgbWVzc2FnZSA9IGVycm9yO1xuICAgIGVycm9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFlcnJvciB8fCBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGVycm9yKSkge1xuICAgIHZhciBkZXRhaWxzID0gbWVzc2FnZSA/IFwiOiBcIi5jb25jYXQobWVzc2FnZSkgOiAnLic7XG4gICAgdmFyIGZuVHlwZSA9IHN0YWNrU3RhcnRGbi5uYW1lID09PSAnZG9lc05vdFJlamVjdCcgPyAncmVqZWN0aW9uJyA6ICdleGNlcHRpb24nO1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBlcnJvcixcbiAgICAgIG9wZXJhdG9yOiBzdGFja1N0YXJ0Rm4ubmFtZSxcbiAgICAgIG1lc3NhZ2U6IFwiR290IHVud2FudGVkIFwiLmNvbmNhdChmblR5cGUpLmNvbmNhdChkZXRhaWxzLCBcIlxcblwiKSArIFwiQWN0dWFsIG1lc3NhZ2U6IFxcXCJcIi5jb25jYXQoYWN0dWFsICYmIGFjdHVhbC5tZXNzYWdlLCBcIlxcXCJcIiksXG4gICAgICBzdGFja1N0YXJ0Rm46IHN0YWNrU3RhcnRGblxuICAgIH0pO1xuICB9XG5cbiAgdGhyb3cgYWN0dWFsO1xufVxuXG5hc3NlcnQudGhyb3dzID0gZnVuY3Rpb24gdGhyb3dzKHByb21pc2VGbikge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICBleHBlY3RzRXJyb3IuYXBwbHkodm9pZCAwLCBbdGhyb3dzLCBnZXRBY3R1YWwocHJvbWlzZUZuKV0uY29uY2F0KGFyZ3MpKTtcbn07XG5cbmFzc2VydC5yZWplY3RzID0gZnVuY3Rpb24gcmVqZWN0cyhwcm9taXNlRm4pIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIHdhaXRGb3JBY3R1YWwocHJvbWlzZUZuKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gZXhwZWN0c0Vycm9yLmFwcGx5KHZvaWQgMCwgW3JlamVjdHMsIHJlc3VsdF0uY29uY2F0KGFyZ3MpKTtcbiAgfSk7XG59O1xuXG5hc3NlcnQuZG9lc05vdFRocm93ID0gZnVuY3Rpb24gZG9lc05vdFRocm93KGZuKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIGV4cGVjdHNOb0Vycm9yLmFwcGx5KHZvaWQgMCwgW2RvZXNOb3RUaHJvdywgZ2V0QWN0dWFsKGZuKV0uY29uY2F0KGFyZ3MpKTtcbn07XG5cbmFzc2VydC5kb2VzTm90UmVqZWN0ID0gZnVuY3Rpb24gZG9lc05vdFJlamVjdChmbikge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUgPiAxID8gX2xlbjUgLSAxIDogMCksIF9rZXk1ID0gMTsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFyZ3NbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4gd2FpdEZvckFjdHVhbChmbikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIGV4cGVjdHNOb0Vycm9yLmFwcGx5KHZvaWQgMCwgW2RvZXNOb3RSZWplY3QsIHJlc3VsdF0uY29uY2F0KGFyZ3MpKTtcbiAgfSk7XG59O1xuXG5hc3NlcnQuaWZFcnJvciA9IGZ1bmN0aW9uIGlmRXJyb3IoZXJyKSB7XG4gIGlmIChlcnIgIT09IG51bGwgJiYgZXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdpZkVycm9yIGdvdCB1bndhbnRlZCBleGNlcHRpb246ICc7XG5cbiAgICBpZiAoX3R5cGVvZihlcnIpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXJyLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UubGVuZ3RoID09PSAwICYmIGVyci5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBtZXNzYWdlICs9IGVyci5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSArPSBlcnIubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSArPSBpbnNwZWN0KGVycik7XG4gICAgfVxuXG4gICAgdmFyIG5ld0VyciA9IG5ldyBBc3NlcnRpb25FcnJvcih7XG4gICAgICBhY3R1YWw6IGVycixcbiAgICAgIGV4cGVjdGVkOiBudWxsLFxuICAgICAgb3BlcmF0b3I6ICdpZkVycm9yJyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBzdGFja1N0YXJ0Rm46IGlmRXJyb3JcbiAgICB9KTsgLy8gTWFrZSBzdXJlIHdlIGFjdHVhbGx5IGhhdmUgYSBzdGFjayB0cmFjZSFcblxuICAgIHZhciBvcmlnU3RhY2sgPSBlcnIuc3RhY2s7XG5cbiAgICBpZiAodHlwZW9mIG9yaWdTdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCByZW1vdmUgYW55IGR1cGxpY2F0ZWQgZnJhbWVzIGZyb20gdGhlIGVycm9yIGZyYW1lcyB0YWtlblxuICAgICAgLy8gZnJvbSB3aXRoaW4gYGlmRXJyb3JgIGFuZCBhZGQgdGhlIG9yaWdpbmFsIGVycm9yIGZyYW1lcyB0byB0aGUgbmV3bHlcbiAgICAgIC8vIGNyZWF0ZWQgb25lcy5cbiAgICAgIHZhciB0bXAyID0gb3JpZ1N0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHRtcDIuc2hpZnQoKTsgLy8gRmlsdGVyIGFsbCBmcmFtZXMgZXhpc3RpbmcgaW4gZXJyLnN0YWNrLlxuXG4gICAgICB2YXIgdG1wMSA9IG5ld0Vyci5zdGFjay5zcGxpdCgnXFxuJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG1wMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBmcmFtZS5cbiAgICAgICAgdmFyIHBvcyA9IHRtcDEuaW5kZXhPZih0bXAyW2ldKTtcblxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICAgIC8vIE9ubHkga2VlcCBuZXcgZnJhbWVzLlxuICAgICAgICAgIHRtcDEgPSB0bXAxLnNsaWNlKDAsIHBvcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3RXJyLnN0YWNrID0gXCJcIi5jb25jYXQodG1wMS5qb2luKCdcXG4nKSwgXCJcXG5cIikuY29uY2F0KHRtcDIuam9pbignXFxuJykpO1xuICAgIH1cblxuICAgIHRocm93IG5ld0VycjtcbiAgfVxufTsgLy8gRXhwb3NlIGEgc3RyaWN0IG9ubHkgdmFyaWFudCBvZiBhc3NlcnRcblxuXG5mdW5jdGlvbiBzdHJpY3QoKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIGFyZ3NbX2tleTZdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIGlubmVyT2suYXBwbHkodm9pZCAwLCBbc3RyaWN0LCBhcmdzLmxlbmd0aF0uY29uY2F0KGFyZ3MpKTtcbn1cblxuYXNzZXJ0LnN0cmljdCA9IG9iamVjdEFzc2lnbihzdHJpY3QsIGFzc2VydCwge1xuICBlcXVhbDogYXNzZXJ0LnN0cmljdEVxdWFsLFxuICBkZWVwRXF1YWw6IGFzc2VydC5kZWVwU3RyaWN0RXF1YWwsXG4gIG5vdEVxdWFsOiBhc3NlcnQubm90U3RyaWN0RXF1YWwsXG4gIG5vdERlZXBFcXVhbDogYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbFxufSk7XG5hc3NlcnQuc3RyaWN0LnN0cmljdCA9IGFzc2VydC5zdHJpY3Q7IiwiLy8gQ3VycmVudGx5IGluIHN5bmMgd2l0aCBOb2RlLmpzIGxpYi9pbnRlcm5hbC9hc3NlcnQvYXNzZXJ0aW9uX2Vycm9yLmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvY29tbWl0LzA4MTc4NDBmNzc1MDMyMTY5ZGRkNzBjODVhYzA1OWYxOGZmY2M4MWNcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDsgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikgeyBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTsgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7IH0gZnVuY3Rpb24gV3JhcHBlcigpIHsgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTsgfSBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBXcmFwcGVyLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTsgfTsgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDsgfSBlbHNlIHsgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyB2YXIgYSA9IFtudWxsXTsgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpOyB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7IHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpOyBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTsgcmV0dXJuIGluc3RhbmNlOyB9OyB9IHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3V0aWwvJyksXG4gICAgaW5zcGVjdCA9IF9yZXF1aXJlLmluc3BlY3Q7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuLi9lcnJvcnMnKSxcbiAgICBFUlJfSU5WQUxJRF9BUkdfVFlQRSA9IF9yZXF1aXJlMi5jb2Rlcy5FUlJfSU5WQUxJRF9BUkdfVFlQRTsgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2VuZHNXaXRoXG5cblxuZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzZWFyY2gsIHRoaXNfbGVuKSB7XG4gIGlmICh0aGlzX2xlbiA9PT0gdW5kZWZpbmVkIHx8IHRoaXNfbGVuID4gc3RyLmxlbmd0aCkge1xuICAgIHRoaXNfbGVuID0gc3RyLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBzdHIuc3Vic3RyaW5nKHRoaXNfbGVuIC0gc2VhcmNoLmxlbmd0aCwgdGhpc19sZW4pID09PSBzZWFyY2g7XG59IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9yZXBlYXRcblxuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBjb3VudCkge1xuICBjb3VudCA9IE1hdGguZmxvb3IoY291bnQpO1xuICBpZiAoc3RyLmxlbmd0aCA9PSAwIHx8IGNvdW50ID09IDApIHJldHVybiAnJztcbiAgdmFyIG1heENvdW50ID0gc3RyLmxlbmd0aCAqIGNvdW50O1xuICBjb3VudCA9IE1hdGguZmxvb3IoTWF0aC5sb2coY291bnQpIC8gTWF0aC5sb2coMikpO1xuXG4gIHdoaWxlIChjb3VudCkge1xuICAgIHN0ciArPSBzdHI7XG4gICAgY291bnQtLTtcbiAgfVxuXG4gIHN0ciArPSBzdHIuc3Vic3RyaW5nKDAsIG1heENvdW50IC0gc3RyLmxlbmd0aCk7XG4gIHJldHVybiBzdHI7XG59XG5cbnZhciBibHVlID0gJyc7XG52YXIgZ3JlZW4gPSAnJztcbnZhciByZWQgPSAnJztcbnZhciB3aGl0ZSA9ICcnO1xudmFyIGtSZWFkYWJsZU9wZXJhdG9yID0ge1xuICBkZWVwU3RyaWN0RXF1YWw6ICdFeHBlY3RlZCB2YWx1ZXMgdG8gYmUgc3RyaWN0bHkgZGVlcC1lcXVhbDonLFxuICBzdHJpY3RFcXVhbDogJ0V4cGVjdGVkIHZhbHVlcyB0byBiZSBzdHJpY3RseSBlcXVhbDonLFxuICBzdHJpY3RFcXVhbE9iamVjdDogJ0V4cGVjdGVkIFwiYWN0dWFsXCIgdG8gYmUgcmVmZXJlbmNlLWVxdWFsIHRvIFwiZXhwZWN0ZWRcIjonLFxuICBkZWVwRXF1YWw6ICdFeHBlY3RlZCB2YWx1ZXMgdG8gYmUgbG9vc2VseSBkZWVwLWVxdWFsOicsXG4gIGVxdWFsOiAnRXhwZWN0ZWQgdmFsdWVzIHRvIGJlIGxvb3NlbHkgZXF1YWw6JyxcbiAgbm90RGVlcFN0cmljdEVxdWFsOiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiBub3QgdG8gYmUgc3RyaWN0bHkgZGVlcC1lcXVhbCB0bzonLFxuICBub3RTdHJpY3RFcXVhbDogJ0V4cGVjdGVkIFwiYWN0dWFsXCIgdG8gYmUgc3RyaWN0bHkgdW5lcXVhbCB0bzonLFxuICBub3RTdHJpY3RFcXVhbE9iamVjdDogJ0V4cGVjdGVkIFwiYWN0dWFsXCIgbm90IHRvIGJlIHJlZmVyZW5jZS1lcXVhbCB0byBcImV4cGVjdGVkXCI6JyxcbiAgbm90RGVlcEVxdWFsOiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiBub3QgdG8gYmUgbG9vc2VseSBkZWVwLWVxdWFsIHRvOicsXG4gIG5vdEVxdWFsOiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiB0byBiZSBsb29zZWx5IHVuZXF1YWwgdG86JyxcbiAgbm90SWRlbnRpY2FsOiAnVmFsdWVzIGlkZW50aWNhbCBidXQgbm90IHJlZmVyZW5jZS1lcXVhbDonXG59OyAvLyBDb21wYXJpbmcgc2hvcnQgcHJpbWl0aXZlcyBzaG91bGQganVzdCBzaG93ID09PSAvICE9PSBpbnN0ZWFkIG9mIHVzaW5nIHRoZVxuLy8gZGlmZi5cblxudmFyIGtNYXhTaG9ydExlbmd0aCA9IDEwO1xuXG5mdW5jdGlvbiBjb3B5RXJyb3Ioc291cmNlKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIHRhcmdldCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCAnbWVzc2FnZScsIHtcbiAgICB2YWx1ZTogc291cmNlLm1lc3NhZ2VcbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3RWYWx1ZSh2YWwpIHtcbiAgLy8gVGhlIHV0aWwuaW5zcGVjdCBkZWZhdWx0IHZhbHVlcyBjb3VsZCBiZSBjaGFuZ2VkLiBUaGlzIG1ha2VzIHN1cmUgdGhlXG4gIC8vIGVycm9yIG1lc3NhZ2VzIGNvbnRhaW4gdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBuZXZlcnRoZWxlc3MuXG4gIHJldHVybiBpbnNwZWN0KHZhbCwge1xuICAgIGNvbXBhY3Q6IGZhbHNlLFxuICAgIGN1c3RvbUluc3BlY3Q6IGZhbHNlLFxuICAgIGRlcHRoOiAxMDAwLFxuICAgIG1heEFycmF5TGVuZ3RoOiBJbmZpbml0eSxcbiAgICAvLyBBc3NlcnQgY29tcGFyZXMgb25seSBlbnVtZXJhYmxlIHByb3BlcnRpZXMgKHdpdGggYSBmZXcgZXhjZXB0aW9ucykuXG4gICAgc2hvd0hpZGRlbjogZmFsc2UsXG4gICAgLy8gSGF2aW5nIGEgbG9uZyBsaW5lIGFzIGVycm9yIGlzIGJldHRlciB0aGFuIHdyYXBwaW5nIHRoZSBsaW5lIGZvclxuICAgIC8vIGNvbXBhcmlzb24gZm9yIG5vdy5cbiAgICAvLyBUT0RPKEJyaWRnZUFSKTogYGJyZWFrTGVuZ3RoYCBzaG91bGQgYmUgbGltaXRlZCBhcyBzb29uIGFzIHNvb24gYXMgd2VcbiAgICAvLyBoYXZlIG1ldGEgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluc3BlY3RlZCBwcm9wZXJ0aWVzIChpLmUuLCBrbm93IHdoZXJlXG4gICAgLy8gaW4gd2hhdCBsaW5lIHRoZSBwcm9wZXJ0eSBzdGFydHMgYW5kIGVuZHMpLlxuICAgIGJyZWFrTGVuZ3RoOiBJbmZpbml0eSxcbiAgICAvLyBBc3NlcnQgZG9lcyBub3QgZGV0ZWN0IHByb3hpZXMgY3VycmVudGx5LlxuICAgIHNob3dQcm94eTogZmFsc2UsXG4gICAgc29ydGVkOiB0cnVlLFxuICAgIC8vIEluc3BlY3QgZ2V0dGVycyBhcyB3ZSBhbHNvIGNoZWNrIHRoZW0gd2hlbiBjb21wYXJpbmcgZW50cmllcy5cbiAgICBnZXR0ZXJzOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJEaWZmKGFjdHVhbCwgZXhwZWN0ZWQsIG9wZXJhdG9yKSB7XG4gIHZhciBvdGhlciA9ICcnO1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBsYXN0UG9zID0gMDtcbiAgdmFyIGVuZCA9ICcnO1xuICB2YXIgc2tpcHBlZCA9IGZhbHNlO1xuICB2YXIgYWN0dWFsSW5zcGVjdGVkID0gaW5zcGVjdFZhbHVlKGFjdHVhbCk7XG4gIHZhciBhY3R1YWxMaW5lcyA9IGFjdHVhbEluc3BlY3RlZC5zcGxpdCgnXFxuJyk7XG4gIHZhciBleHBlY3RlZExpbmVzID0gaW5zcGVjdFZhbHVlKGV4cGVjdGVkKS5zcGxpdCgnXFxuJyk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGluZGljYXRvciA9ICcnOyAvLyBJbiBjYXNlIGJvdGggdmFsdWVzIGFyZSBvYmplY3RzIGV4cGxpY2l0bHkgbWFyayB0aGVtIGFzIG5vdCByZWZlcmVuY2UgZXF1YWxcbiAgLy8gZm9yIHRoZSBgc3RyaWN0RXF1YWxgIG9wZXJhdG9yLlxuXG4gIGlmIChvcGVyYXRvciA9PT0gJ3N0cmljdEVxdWFsJyAmJiBfdHlwZW9mKGFjdHVhbCkgPT09ICdvYmplY3QnICYmIF90eXBlb2YoZXhwZWN0ZWQpID09PSAnb2JqZWN0JyAmJiBhY3R1YWwgIT09IG51bGwgJiYgZXhwZWN0ZWQgIT09IG51bGwpIHtcbiAgICBvcGVyYXRvciA9ICdzdHJpY3RFcXVhbE9iamVjdCc7XG4gIH0gLy8gSWYgXCJhY3R1YWxcIiBhbmQgXCJleHBlY3RlZFwiIGZpdCBvbiBhIHNpbmdsZSBsaW5lIGFuZCB0aGV5IGFyZSBub3Qgc3RyaWN0bHlcbiAgLy8gZXF1YWwsIGNoZWNrIGZ1cnRoZXIgc3BlY2lhbCBoYW5kbGluZy5cblxuXG4gIGlmIChhY3R1YWxMaW5lcy5sZW5ndGggPT09IDEgJiYgZXhwZWN0ZWRMaW5lcy5sZW5ndGggPT09IDEgJiYgYWN0dWFsTGluZXNbMF0gIT09IGV4cGVjdGVkTGluZXNbMF0pIHtcbiAgICB2YXIgaW5wdXRMZW5ndGggPSBhY3R1YWxMaW5lc1swXS5sZW5ndGggKyBleHBlY3RlZExpbmVzWzBdLmxlbmd0aDsgLy8gSWYgdGhlIGNoYXJhY3RlciBsZW5ndGggb2YgXCJhY3R1YWxcIiBhbmQgXCJleHBlY3RlZFwiIHRvZ2V0aGVyIGlzIGxlc3MgdGhhblxuICAgIC8vIGtNYXhTaG9ydExlbmd0aCBhbmQgaWYgbmVpdGhlciBpcyBhbiBvYmplY3QgYW5kIGF0IGxlYXN0IG9uZSBvZiB0aGVtIGlzXG4gICAgLy8gbm90IGB6ZXJvYCwgdXNlIHRoZSBzdHJpY3QgZXF1YWwgY29tcGFyaXNvbiB0byB2aXN1YWxpemUgdGhlIG91dHB1dC5cblxuICAgIGlmIChpbnB1dExlbmd0aCA8PSBrTWF4U2hvcnRMZW5ndGgpIHtcbiAgICAgIGlmICgoX3R5cGVvZihhY3R1YWwpICE9PSAnb2JqZWN0JyB8fCBhY3R1YWwgPT09IG51bGwpICYmIChfdHlwZW9mKGV4cGVjdGVkKSAhPT0gJ29iamVjdCcgfHwgZXhwZWN0ZWQgPT09IG51bGwpICYmIChhY3R1YWwgIT09IDAgfHwgZXhwZWN0ZWQgIT09IDApKSB7XG4gICAgICAgIC8vIC0wID09PSArMFxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoa1JlYWRhYmxlT3BlcmF0b3Jbb3BlcmF0b3JdLCBcIlxcblxcblwiKSArIFwiXCIuY29uY2F0KGFjdHVhbExpbmVzWzBdLCBcIiAhPT0gXCIpLmNvbmNhdChleHBlY3RlZExpbmVzWzBdLCBcIlxcblwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wZXJhdG9yICE9PSAnc3RyaWN0RXF1YWxPYmplY3QnKSB7XG4gICAgICAvLyBJZiB0aGUgc3RkZXJyIGlzIGEgdHR5IGFuZCB0aGUgaW5wdXQgbGVuZ3RoIGlzIGxvd2VyIHRoYW4gdGhlIGN1cnJlbnRcbiAgICAgIC8vIGNvbHVtbnMgcGVyIGxpbmUsIGFkZCBhIG1pc21hdGNoIGluZGljYXRvciBiZWxvdyB0aGUgb3V0cHV0LiBJZiBpdCBpc1xuICAgICAgLy8gbm90IGEgdHR5LCB1c2UgYSBkZWZhdWx0IHZhbHVlIG9mIDgwIGNoYXJhY3RlcnMuXG4gICAgICB2YXIgbWF4TGVuZ3RoID0gcHJvY2Vzcy5zdGRlcnIgJiYgcHJvY2Vzcy5zdGRlcnIuaXNUVFkgPyBwcm9jZXNzLnN0ZGVyci5jb2x1bW5zIDogODA7XG5cbiAgICAgIGlmIChpbnB1dExlbmd0aCA8IG1heExlbmd0aCkge1xuICAgICAgICB3aGlsZSAoYWN0dWFsTGluZXNbMF1baV0gPT09IGV4cGVjdGVkTGluZXNbMF1baV0pIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gLy8gSWdub3JlIHRoZSBmaXJzdCBjaGFyYWN0ZXJzLlxuXG5cbiAgICAgICAgaWYgKGkgPiAyKSB7XG4gICAgICAgICAgLy8gQWRkIHBvc2l0aW9uIGluZGljYXRvciBmb3IgdGhlIGZpcnN0IG1pc21hdGNoIGluIGNhc2UgaXQgaXMgYVxuICAgICAgICAgIC8vIHNpbmdsZSBsaW5lIGFuZCB0aGUgaW5wdXQgbGVuZ3RoIGlzIGxlc3MgdGhhbiB0aGUgY29sdW1uIGxlbmd0aC5cbiAgICAgICAgICBpbmRpY2F0b3IgPSBcIlxcbiAgXCIuY29uY2F0KHJlcGVhdCgnICcsIGkpLCBcIl5cIik7XG4gICAgICAgICAgaSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGFsbCBlbmRpbmcgbGluZXMgdGhhdCBtYXRjaCAodGhpcyBvcHRpbWl6ZXMgdGhlIG91dHB1dCBmb3JcbiAgLy8gcmVhZGFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIG51bWJlciBvZiB0b3RhbCBjaGFuZ2VkIGxpbmVzKS5cblxuXG4gIHZhciBhID0gYWN0dWFsTGluZXNbYWN0dWFsTGluZXMubGVuZ3RoIC0gMV07XG4gIHZhciBiID0gZXhwZWN0ZWRMaW5lc1tleHBlY3RlZExpbmVzLmxlbmd0aCAtIDFdO1xuXG4gIHdoaWxlIChhID09PSBiKSB7XG4gICAgaWYgKGkrKyA8IDIpIHtcbiAgICAgIGVuZCA9IFwiXFxuICBcIi5jb25jYXQoYSkuY29uY2F0KGVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG90aGVyID0gYTtcbiAgICB9XG5cbiAgICBhY3R1YWxMaW5lcy5wb3AoKTtcbiAgICBleHBlY3RlZExpbmVzLnBvcCgpO1xuICAgIGlmIChhY3R1YWxMaW5lcy5sZW5ndGggPT09IDAgfHwgZXhwZWN0ZWRMaW5lcy5sZW5ndGggPT09IDApIGJyZWFrO1xuICAgIGEgPSBhY3R1YWxMaW5lc1thY3R1YWxMaW5lcy5sZW5ndGggLSAxXTtcbiAgICBiID0gZXhwZWN0ZWRMaW5lc1tleHBlY3RlZExpbmVzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgdmFyIG1heExpbmVzID0gTWF0aC5tYXgoYWN0dWFsTGluZXMubGVuZ3RoLCBleHBlY3RlZExpbmVzLmxlbmd0aCk7IC8vIFN0cmljdCBlcXVhbCB3aXRoIGlkZW50aWNhbCBvYmplY3RzIHRoYXQgYXJlIG5vdCBpZGVudGljYWwgYnkgcmVmZXJlbmNlLlxuICAvLyBFLmcuLCBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHsgYTogU3ltYm9sKCkgfSwgeyBhOiBTeW1ib2woKSB9KVxuXG4gIGlmIChtYXhMaW5lcyA9PT0gMCkge1xuICAgIC8vIFdlIGhhdmUgdG8gZ2V0IHRoZSByZXN1bHQgYWdhaW4uIFRoZSBsaW5lcyB3ZXJlIGFsbCByZW1vdmVkIGJlZm9yZS5cbiAgICB2YXIgX2FjdHVhbExpbmVzID0gYWN0dWFsSW5zcGVjdGVkLnNwbGl0KCdcXG4nKTsgLy8gT25seSByZW1vdmUgbGluZXMgaW4gY2FzZSBpdCBtYWtlcyBzZW5zZSB0byBjb2xsYXBzZSB0aG9zZS5cbiAgICAvLyBUT0RPOiBBY2NlcHQgZW52IHRvIGFsd2F5cyBzaG93IHRoZSBmdWxsIGVycm9yLlxuXG5cbiAgICBpZiAoX2FjdHVhbExpbmVzLmxlbmd0aCA+IDMwKSB7XG4gICAgICBfYWN0dWFsTGluZXNbMjZdID0gXCJcIi5jb25jYXQoYmx1ZSwgXCIuLi5cIikuY29uY2F0KHdoaXRlKTtcblxuICAgICAgd2hpbGUgKF9hY3R1YWxMaW5lcy5sZW5ndGggPiAyNykge1xuICAgICAgICBfYWN0dWFsTGluZXMucG9wKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGtSZWFkYWJsZU9wZXJhdG9yLm5vdElkZW50aWNhbCwgXCJcXG5cXG5cIikuY29uY2F0KF9hY3R1YWxMaW5lcy5qb2luKCdcXG4nKSwgXCJcXG5cIik7XG4gIH1cblxuICBpZiAoaSA+IDMpIHtcbiAgICBlbmQgPSBcIlxcblwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpLmNvbmNhdChlbmQpO1xuICAgIHNraXBwZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKG90aGVyICE9PSAnJykge1xuICAgIGVuZCA9IFwiXFxuICBcIi5jb25jYXQob3RoZXIpLmNvbmNhdChlbmQpO1xuICAgIG90aGVyID0gJyc7XG4gIH1cblxuICB2YXIgcHJpbnRlZExpbmVzID0gMDtcbiAgdmFyIG1zZyA9IGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXSArIFwiXFxuXCIuY29uY2F0KGdyZWVuLCBcIisgYWN0dWFsXCIpLmNvbmNhdCh3aGl0ZSwgXCIgXCIpLmNvbmNhdChyZWQsIFwiLSBleHBlY3RlZFwiKS5jb25jYXQod2hpdGUpO1xuICB2YXIgc2tpcHBlZE1zZyA9IFwiIFwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUsIFwiIExpbmVzIHNraXBwZWRcIik7XG5cbiAgZm9yIChpID0gMDsgaSA8IG1heExpbmVzOyBpKyspIHtcbiAgICAvLyBPbmx5IGV4dHJhIGV4cGVjdGVkIGxpbmVzIGV4aXN0XG4gICAgdmFyIGN1ciA9IGkgLSBsYXN0UG9zO1xuXG4gICAgaWYgKGFjdHVhbExpbmVzLmxlbmd0aCA8IGkgKyAxKSB7XG4gICAgICAvLyBJZiB0aGUgbGFzdCBkaXZlcmdpbmcgbGluZSBpcyBtb3JlIHRoYW4gb25lIGxpbmUgYWJvdmUgYW5kIHRoZVxuICAgICAgLy8gY3VycmVudCBsaW5lIGlzIGF0IGxlYXN0IGxpbmUgdGhyZWUsIGFkZCBzb21lIG9mIHRoZSBmb3JtZXIgbGluZXMgYW5kXG4gICAgICAvLyBhbHNvIGFkZCBkb3RzIHRvIGluZGljYXRlIHNraXBwZWQgZW50cmllcy5cbiAgICAgIGlmIChjdXIgPiAxICYmIGkgPiAyKSB7XG4gICAgICAgIGlmIChjdXIgPiA0KSB7XG4gICAgICAgICAgcmVzICs9IFwiXFxuXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSk7XG4gICAgICAgICAgc2tpcHBlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyID4gMykge1xuICAgICAgICAgIHJlcyArPSBcIlxcbiAgXCIuY29uY2F0KGV4cGVjdGVkTGluZXNbaSAtIDJdKTtcbiAgICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcyArPSBcIlxcbiAgXCIuY29uY2F0KGV4cGVjdGVkTGluZXNbaSAtIDFdKTtcbiAgICAgICAgcHJpbnRlZExpbmVzKys7XG4gICAgICB9IC8vIE1hcmsgdGhlIGN1cnJlbnQgbGluZSBhcyB0aGUgbGFzdCBkaXZlcmdpbmcgb25lLlxuXG5cbiAgICAgIGxhc3RQb3MgPSBpOyAvLyBBZGQgdGhlIGV4cGVjdGVkIGxpbmUgdG8gdGhlIGNhY2hlLlxuXG4gICAgICBvdGhlciArPSBcIlxcblwiLmNvbmNhdChyZWQsIFwiLVwiKS5jb25jYXQod2hpdGUsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRMaW5lc1tpXSk7XG4gICAgICBwcmludGVkTGluZXMrKzsgLy8gT25seSBleHRyYSBhY3R1YWwgbGluZXMgZXhpc3RcbiAgICB9IGVsc2UgaWYgKGV4cGVjdGVkTGluZXMubGVuZ3RoIDwgaSArIDEpIHtcbiAgICAgIC8vIElmIHRoZSBsYXN0IGRpdmVyZ2luZyBsaW5lIGlzIG1vcmUgdGhhbiBvbmUgbGluZSBhYm92ZSBhbmQgdGhlXG4gICAgICAvLyBjdXJyZW50IGxpbmUgaXMgYXQgbGVhc3QgbGluZSB0aHJlZSwgYWRkIHNvbWUgb2YgdGhlIGZvcm1lciBsaW5lcyBhbmRcbiAgICAgIC8vIGFsc28gYWRkIGRvdHMgdG8gaW5kaWNhdGUgc2tpcHBlZCBlbnRyaWVzLlxuICAgICAgaWYgKGN1ciA+IDEgJiYgaSA+IDIpIHtcbiAgICAgICAgaWYgKGN1ciA+IDQpIHtcbiAgICAgICAgICByZXMgKz0gXCJcXG5cIi5jb25jYXQoYmx1ZSwgXCIuLi5cIikuY29uY2F0KHdoaXRlKTtcbiAgICAgICAgICBza2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXIgPiAzKSB7XG4gICAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoYWN0dWFsTGluZXNbaSAtIDJdKTtcbiAgICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcyArPSBcIlxcbiAgXCIuY29uY2F0KGFjdHVhbExpbmVzW2kgLSAxXSk7XG4gICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgfSAvLyBNYXJrIHRoZSBjdXJyZW50IGxpbmUgYXMgdGhlIGxhc3QgZGl2ZXJnaW5nIG9uZS5cblxuXG4gICAgICBsYXN0UG9zID0gaTsgLy8gQWRkIHRoZSBhY3R1YWwgbGluZSB0byB0aGUgcmVzdWx0LlxuXG4gICAgICByZXMgKz0gXCJcXG5cIi5jb25jYXQoZ3JlZW4sIFwiK1wiKS5jb25jYXQod2hpdGUsIFwiIFwiKS5jb25jYXQoYWN0dWFsTGluZXNbaV0pO1xuICAgICAgcHJpbnRlZExpbmVzKys7IC8vIExpbmVzIGRpdmVyZ2VcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV4cGVjdGVkTGluZSA9IGV4cGVjdGVkTGluZXNbaV07XG4gICAgICB2YXIgYWN0dWFsTGluZSA9IGFjdHVhbExpbmVzW2ldOyAvLyBJZiB0aGUgbGluZXMgZGl2ZXJnZSwgc3BlY2lmaWNhbGx5IGNoZWNrIGZvciBsaW5lcyB0aGF0IG9ubHkgZGl2ZXJnZSBieVxuICAgICAgLy8gYSB0cmFpbGluZyBjb21tYS4gSW4gdGhhdCBjYXNlIGl0IGlzIGFjdHVhbGx5IGlkZW50aWNhbCBhbmQgd2Ugc2hvdWxkXG4gICAgICAvLyBtYXJrIGl0IGFzIHN1Y2guXG5cbiAgICAgIHZhciBkaXZlcmdpbmdMaW5lcyA9IGFjdHVhbExpbmUgIT09IGV4cGVjdGVkTGluZSAmJiAoIWVuZHNXaXRoKGFjdHVhbExpbmUsICcsJykgfHwgYWN0dWFsTGluZS5zbGljZSgwLCAtMSkgIT09IGV4cGVjdGVkTGluZSk7IC8vIElmIHRoZSBleHBlY3RlZCBsaW5lIGhhcyBhIHRyYWlsaW5nIGNvbW1hIGJ1dCBpcyBvdGhlcndpc2UgaWRlbnRpY2FsLFxuICAgICAgLy8gYWRkIGEgY29tbWEgYXQgdGhlIGVuZCBvZiB0aGUgYWN0dWFsIGxpbmUuIE90aGVyd2lzZSB0aGUgb3V0cHV0IGNvdWxkXG4gICAgICAvLyBsb29rIHdlaXJkIGFzIGluOlxuICAgICAgLy9cbiAgICAgIC8vICAgW1xuICAgICAgLy8gICAgIDEgICAgICAgICAvLyBObyBjb21tYSBhdCB0aGUgZW5kIVxuICAgICAgLy8gKyAgIDJcbiAgICAgIC8vICAgXVxuICAgICAgLy9cblxuICAgICAgaWYgKGRpdmVyZ2luZ0xpbmVzICYmIGVuZHNXaXRoKGV4cGVjdGVkTGluZSwgJywnKSAmJiBleHBlY3RlZExpbmUuc2xpY2UoMCwgLTEpID09PSBhY3R1YWxMaW5lKSB7XG4gICAgICAgIGRpdmVyZ2luZ0xpbmVzID0gZmFsc2U7XG4gICAgICAgIGFjdHVhbExpbmUgKz0gJywnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGl2ZXJnaW5nTGluZXMpIHtcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgZGl2ZXJnaW5nIGxpbmUgaXMgbW9yZSB0aGFuIG9uZSBsaW5lIGFib3ZlIGFuZCB0aGVcbiAgICAgICAgLy8gY3VycmVudCBsaW5lIGlzIGF0IGxlYXN0IGxpbmUgdGhyZWUsIGFkZCBzb21lIG9mIHRoZSBmb3JtZXIgbGluZXMgYW5kXG4gICAgICAgIC8vIGFsc28gYWRkIGRvdHMgdG8gaW5kaWNhdGUgc2tpcHBlZCBlbnRyaWVzLlxuICAgICAgICBpZiAoY3VyID4gMSAmJiBpID4gMikge1xuICAgICAgICAgIGlmIChjdXIgPiA0KSB7XG4gICAgICAgICAgICByZXMgKz0gXCJcXG5cIi5jb25jYXQoYmx1ZSwgXCIuLi5cIikuY29uY2F0KHdoaXRlKTtcbiAgICAgICAgICAgIHNraXBwZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VyID4gMykge1xuICAgICAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoYWN0dWFsTGluZXNbaSAtIDJdKTtcbiAgICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlcyArPSBcIlxcbiAgXCIuY29uY2F0KGFjdHVhbExpbmVzW2kgLSAxXSk7XG4gICAgICAgICAgcHJpbnRlZExpbmVzKys7XG4gICAgICAgIH0gLy8gTWFyayB0aGUgY3VycmVudCBsaW5lIGFzIHRoZSBsYXN0IGRpdmVyZ2luZyBvbmUuXG5cblxuICAgICAgICBsYXN0UG9zID0gaTsgLy8gQWRkIHRoZSBhY3R1YWwgbGluZSB0byB0aGUgcmVzdWx0IGFuZCBjYWNoZSB0aGUgZXhwZWN0ZWQgZGl2ZXJnaW5nXG4gICAgICAgIC8vIGxpbmUgc28gY29uc2VjdXRpdmUgZGl2ZXJnaW5nIGxpbmVzIHNob3cgdXAgYXMgKysrLS0tIGFuZCBub3QgKy0rLSstLlxuXG4gICAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChncmVlbiwgXCIrXCIpLmNvbmNhdCh3aGl0ZSwgXCIgXCIpLmNvbmNhdChhY3R1YWxMaW5lKTtcbiAgICAgICAgb3RoZXIgKz0gXCJcXG5cIi5jb25jYXQocmVkLCBcIi1cIikuY29uY2F0KHdoaXRlLCBcIiBcIikuY29uY2F0KGV4cGVjdGVkTGluZSk7XG4gICAgICAgIHByaW50ZWRMaW5lcyArPSAyOyAvLyBMaW5lcyBhcmUgaWRlbnRpY2FsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZGQgYWxsIGNhY2hlZCBpbmZvcm1hdGlvbiB0byB0aGUgcmVzdWx0IGJlZm9yZSBhZGRpbmcgb3RoZXIgdGhpbmdzXG4gICAgICAgIC8vIGFuZCByZXNldCB0aGUgY2FjaGUuXG4gICAgICAgIHJlcyArPSBvdGhlcjtcbiAgICAgICAgb3RoZXIgPSAnJzsgLy8gSWYgdGhlIGxhc3QgZGl2ZXJnaW5nIGxpbmUgaXMgZXhhY3RseSBvbmUgbGluZSBhYm92ZSBvciBpZiBpdCBpcyB0aGVcbiAgICAgICAgLy8gdmVyeSBmaXJzdCBsaW5lLCBhZGQgdGhlIGxpbmUgdG8gdGhlIHJlc3VsdC5cblxuICAgICAgICBpZiAoY3VyID09PSAxIHx8IGkgPT09IDApIHtcbiAgICAgICAgICByZXMgKz0gXCJcXG4gIFwiLmNvbmNhdChhY3R1YWxMaW5lKTtcbiAgICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gSW5zcGVjdGVkIG9iamVjdCB0byBiaWcgKFNob3cgfjIwIHJvd3MgbWF4KVxuXG5cbiAgICBpZiAocHJpbnRlZExpbmVzID4gMjAgJiYgaSA8IG1heExpbmVzIC0gMikge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG1zZykuY29uY2F0KHNraXBwZWRNc2csIFwiXFxuXCIpLmNvbmNhdChyZXMsIFwiXFxuXCIpLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpLmNvbmNhdChvdGhlciwgXCJcXG5cIikgKyBcIlwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdChtc2cpLmNvbmNhdChza2lwcGVkID8gc2tpcHBlZE1zZyA6ICcnLCBcIlxcblwiKS5jb25jYXQocmVzKS5jb25jYXQob3RoZXIpLmNvbmNhdChlbmQpLmNvbmNhdChpbmRpY2F0b3IpO1xufVxuXG52YXIgQXNzZXJ0aW9uRXJyb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoQXNzZXJ0aW9uRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3Iob3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBc3NlcnRpb25FcnJvcik7XG5cbiAgICBpZiAoX3R5cGVvZihvcHRpb25zKSAhPT0gJ29iamVjdCcgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19UWVBFKCdvcHRpb25zJywgJ09iamVjdCcsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlLFxuICAgICAgICBvcGVyYXRvciA9IG9wdGlvbnMub3BlcmF0b3IsXG4gICAgICAgIHN0YWNrU3RhcnRGbiA9IG9wdGlvbnMuc3RhY2tTdGFydEZuO1xuICAgIHZhciBhY3R1YWwgPSBvcHRpb25zLmFjdHVhbCxcbiAgICAgICAgZXhwZWN0ZWQgPSBvcHRpb25zLmV4cGVjdGVkO1xuICAgIHZhciBsaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdDtcbiAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSAwO1xuXG4gICAgaWYgKG1lc3NhZ2UgIT0gbnVsbCkge1xuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXNzZXJ0aW9uRXJyb3IpLmNhbGwodGhpcywgU3RyaW5nKG1lc3NhZ2UpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLnN0ZGVyciAmJiBwcm9jZXNzLnN0ZGVyci5pc1RUWSkge1xuICAgICAgICAvLyBSZXNldCBvbiBlYWNoIGNhbGwgdG8gbWFrZSBzdXJlIHdlIGhhbmRsZSBkeW5hbWljYWxseSBzZXQgZW52aXJvbm1lbnRcbiAgICAgICAgLy8gdmFyaWFibGVzIGNvcnJlY3QuXG4gICAgICAgIGlmIChwcm9jZXNzLnN0ZGVyciAmJiBwcm9jZXNzLnN0ZGVyci5nZXRDb2xvckRlcHRoICYmIHByb2Nlc3Muc3RkZXJyLmdldENvbG9yRGVwdGgoKSAhPT0gMSkge1xuICAgICAgICAgIGJsdWUgPSBcIlxceDFCWzM0bVwiO1xuICAgICAgICAgIGdyZWVuID0gXCJcXHgxQlszMm1cIjtcbiAgICAgICAgICB3aGl0ZSA9IFwiXFx4MUJbMzltXCI7XG4gICAgICAgICAgcmVkID0gXCJcXHgxQlszMW1cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBibHVlID0gJyc7XG4gICAgICAgICAgZ3JlZW4gPSAnJztcbiAgICAgICAgICB3aGl0ZSA9ICcnO1xuICAgICAgICAgIHJlZCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9IC8vIFByZXZlbnQgdGhlIGVycm9yIHN0YWNrIGZyb20gYmVpbmcgdmlzaWJsZSBieSBkdXBsaWNhdGluZyB0aGUgZXJyb3JcbiAgICAgIC8vIGluIGEgdmVyeSBjbG9zZSB3YXkgdG8gdGhlIG9yaWdpbmFsIGluIGNhc2UgYm90aCBzaWRlcyBhcmUgYWN0dWFsbHlcbiAgICAgIC8vIGluc3RhbmNlcyBvZiBFcnJvci5cblxuXG4gICAgICBpZiAoX3R5cGVvZihhY3R1YWwpID09PSAnb2JqZWN0JyAmJiBhY3R1YWwgIT09IG51bGwgJiYgX3R5cGVvZihleHBlY3RlZCkgPT09ICdvYmplY3QnICYmIGV4cGVjdGVkICE9PSBudWxsICYmICdzdGFjaycgaW4gYWN0dWFsICYmIGFjdHVhbCBpbnN0YW5jZW9mIEVycm9yICYmICdzdGFjaycgaW4gZXhwZWN0ZWQgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBhY3R1YWwgPSBjb3B5RXJyb3IoYWN0dWFsKTtcbiAgICAgICAgZXhwZWN0ZWQgPSBjb3B5RXJyb3IoZXhwZWN0ZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3BlcmF0b3IgPT09ICdkZWVwU3RyaWN0RXF1YWwnIHx8IG9wZXJhdG9yID09PSAnc3RyaWN0RXF1YWwnKSB7XG4gICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFzc2VydGlvbkVycm9yKS5jYWxsKHRoaXMsIGNyZWF0ZUVyckRpZmYoYWN0dWFsLCBleHBlY3RlZCwgb3BlcmF0b3IpKSk7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSAnbm90RGVlcFN0cmljdEVxdWFsJyB8fCBvcGVyYXRvciA9PT0gJ25vdFN0cmljdEVxdWFsJykge1xuICAgICAgICAvLyBJbiBjYXNlIHRoZSBvYmplY3RzIGFyZSBlcXVhbCBidXQgdGhlIG9wZXJhdG9yIHJlcXVpcmVzIHVuZXF1YWwsIHNob3dcbiAgICAgICAgLy8gdGhlIGZpcnN0IG9iamVjdCBhbmQgc2F5IEEgZXF1YWxzIEJcbiAgICAgICAgdmFyIGJhc2UgPSBrUmVhZGFibGVPcGVyYXRvcltvcGVyYXRvcl07XG4gICAgICAgIHZhciByZXMgPSBpbnNwZWN0VmFsdWUoYWN0dWFsKS5zcGxpdCgnXFxuJyk7IC8vIEluIGNhc2UgXCJhY3R1YWxcIiBpcyBhbiBvYmplY3QsIGl0IHNob3VsZCBub3QgYmUgcmVmZXJlbmNlIGVxdWFsLlxuXG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ25vdFN0cmljdEVxdWFsJyAmJiBfdHlwZW9mKGFjdHVhbCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGJhc2UgPSBrUmVhZGFibGVPcGVyYXRvci5ub3RTdHJpY3RFcXVhbE9iamVjdDtcbiAgICAgICAgfSAvLyBPbmx5IHJlbW92ZSBsaW5lcyBpbiBjYXNlIGl0IG1ha2VzIHNlbnNlIHRvIGNvbGxhcHNlIHRob3NlLlxuICAgICAgICAvLyBUT0RPOiBBY2NlcHQgZW52IHRvIGFsd2F5cyBzaG93IHRoZSBmdWxsIGVycm9yLlxuXG5cbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAzMCkge1xuICAgICAgICAgIHJlc1syNl0gPSBcIlwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuXG4gICAgICAgICAgd2hpbGUgKHJlcy5sZW5ndGggPiAyNykge1xuICAgICAgICAgICAgcmVzLnBvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBPbmx5IHByaW50IGEgc2luZ2xlIGlucHV0LlxuXG5cbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihBc3NlcnRpb25FcnJvcikuY2FsbCh0aGlzLCBcIlwiLmNvbmNhdChiYXNlLCBcIiBcIikuY29uY2F0KHJlc1swXSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihBc3NlcnRpb25FcnJvcikuY2FsbCh0aGlzLCBcIlwiLmNvbmNhdChiYXNlLCBcIlxcblxcblwiKS5jb25jYXQocmVzLmpvaW4oJ1xcbicpLCBcIlxcblwiKSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3JlcyA9IGluc3BlY3RWYWx1ZShhY3R1YWwpO1xuXG4gICAgICAgIHZhciBvdGhlciA9ICcnO1xuICAgICAgICB2YXIga25vd25PcGVyYXRvcnMgPSBrUmVhZGFibGVPcGVyYXRvcltvcGVyYXRvcl07XG5cbiAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnbm90RGVlcEVxdWFsJyB8fCBvcGVyYXRvciA9PT0gJ25vdEVxdWFsJykge1xuICAgICAgICAgIF9yZXMgPSBcIlwiLmNvbmNhdChrUmVhZGFibGVPcGVyYXRvcltvcGVyYXRvcl0sIFwiXFxuXFxuXCIpLmNvbmNhdChfcmVzKTtcblxuICAgICAgICAgIGlmIChfcmVzLmxlbmd0aCA+IDEwMjQpIHtcbiAgICAgICAgICAgIF9yZXMgPSBcIlwiLmNvbmNhdChfcmVzLnNsaWNlKDAsIDEwMjEpLCBcIi4uLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3RoZXIgPSBcIlwiLmNvbmNhdChpbnNwZWN0VmFsdWUoZXhwZWN0ZWQpKTtcblxuICAgICAgICAgIGlmIChfcmVzLmxlbmd0aCA+IDUxMikge1xuICAgICAgICAgICAgX3JlcyA9IFwiXCIuY29uY2F0KF9yZXMuc2xpY2UoMCwgNTA5KSwgXCIuLi5cIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG90aGVyLmxlbmd0aCA+IDUxMikge1xuICAgICAgICAgICAgb3RoZXIgPSBcIlwiLmNvbmNhdChvdGhlci5zbGljZSgwLCA1MDkpLCBcIi4uLlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdkZWVwRXF1YWwnIHx8IG9wZXJhdG9yID09PSAnZXF1YWwnKSB7XG4gICAgICAgICAgICBfcmVzID0gXCJcIi5jb25jYXQoa25vd25PcGVyYXRvcnMsIFwiXFxuXFxuXCIpLmNvbmNhdChfcmVzLCBcIlxcblxcbnNob3VsZCBlcXVhbFxcblxcblwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXIgPSBcIiBcIi5jb25jYXQob3BlcmF0b3IsIFwiIFwiKS5jb25jYXQob3RoZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFzc2VydGlvbkVycm9yKS5jYWxsKHRoaXMsIFwiXCIuY29uY2F0KF9yZXMpLmNvbmNhdChvdGhlcikpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBsaW1pdDtcbiAgICBfdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gIW1lc3NhZ2U7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnbmFtZScsIHtcbiAgICAgIHZhbHVlOiAnQXNzZXJ0aW9uRXJyb3IgW0VSUl9BU1NFUlRJT05dJyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBfdGhpcy5jb2RlID0gJ0VSUl9BU1NFUlRJT04nO1xuICAgIF90aGlzLmFjdHVhbCA9IGFjdHVhbDtcbiAgICBfdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkO1xuICAgIF90aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHN0YWNrU3RhcnRGbik7XG4gICAgfSAvLyBDcmVhdGUgZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGVycm9yIGNvZGUgaW4gdGhlIG5hbWUuXG5cblxuICAgIF90aGlzLnN0YWNrOyAvLyBSZXNldCB0aGUgbmFtZS5cblxuICAgIF90aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXNzZXJ0aW9uRXJyb3IsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMubmFtZSwgXCIgW1wiKS5jb25jYXQodGhpcy5jb2RlLCBcIl06IFwiKS5jb25jYXQodGhpcy5tZXNzYWdlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IGluc3BlY3QuY3VzdG9tLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShyZWN1cnNlVGltZXMsIGN0eCkge1xuICAgICAgLy8gVGhpcyBsaW1pdHMgdGhlIGBhY3R1YWxgIGFuZCBgZXhwZWN0ZWRgIHByb3BlcnR5IGRlZmF1bHQgaW5zcGVjdGlvbiB0b1xuICAgICAgLy8gdGhlIG1pbmltdW0gZGVwdGguIE90aGVyd2lzZSB0aG9zZSB2YWx1ZXMgd291bGQgYmUgdG9vIHZlcmJvc2UgY29tcGFyZWRcbiAgICAgIC8vIHRvIHRoZSBhY3R1YWwgZXJyb3IgbWVzc2FnZSB3aGljaCBjb250YWlucyBhIGNvbWJpbmVkIHZpZXcgb2YgdGhlc2UgdHdvXG4gICAgICAvLyBpbnB1dCB2YWx1ZXMuXG4gICAgICByZXR1cm4gaW5zcGVjdCh0aGlzLCBfb2JqZWN0U3ByZWFkKHt9LCBjdHgsIHtcbiAgICAgICAgY3VzdG9tSW5zcGVjdDogZmFsc2UsXG4gICAgICAgIGRlcHRoOiAwXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFzc2VydGlvbkVycm9yO1xufShfd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXNzZXJ0aW9uRXJyb3I7IiwiLy8gQ3VycmVudGx5IGluIHN5bmMgd2l0aCBOb2RlLmpzIGxpYi9pbnRlcm5hbC9lcnJvcnMuanNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9jb21taXQvM2IwNDQ5NjJjNDhmZTMxMzkwNTg3N2E5NmI1ZDA4OTRhNTQwNGY2ZlxuXG4vKiBlc2xpbnQgbm9kZS1jb3JlL2RvY3VtZW50ZWQtZXJyb3JzOiBcImVycm9yXCIgKi9cblxuLyogZXNsaW50IG5vZGUtY29yZS9hbHBoYWJldGl6ZS1lcnJvcnM6IFwiZXJyb3JcIiAqL1xuXG4vKiBlc2xpbnQgbm9kZS1jb3JlL3ByZWZlci11dGlsLWZvcm1hdC1lcnJvcnM6IFwiZXJyb3JcIiAqL1xuJ3VzZSBzdHJpY3QnOyAvLyBUaGUgd2hvbGUgcG9pbnQgYmVoaW5kIHRoaXMgaW50ZXJuYWwgbW9kdWxlIGlzIHRvIGFsbG93IE5vZGUuanMgdG8gbm9cbi8vIGxvbmdlciBiZSBmb3JjZWQgdG8gdHJlYXQgZXZlcnkgZXJyb3IgbWVzc2FnZSBjaGFuZ2UgYXMgYSBzZW12ZXItbWFqb3Jcbi8vIGNoYW5nZS4gVGhlIE5vZGVFcnJvciBjbGFzc2VzIGhlcmUgYWxsIGV4cG9zZSBhIGBjb2RlYCBwcm9wZXJ0eSB3aG9zZVxuLy8gdmFsdWUgc3RhdGljYWxseSBhbmQgcGVybWFuZW50bHkgaWRlbnRpZmllcyB0aGUgZXJyb3IuIFdoaWxlIHRoZSBlcnJvclxuLy8gbWVzc2FnZSBtYXkgY2hhbmdlLCB0aGUgY29kZSBzaG91bGQgbm90LlxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBjb2RlcyA9IHt9OyAvLyBMYXp5IGxvYWRlZFxuXG52YXIgYXNzZXJ0O1xudmFyIHV0aWw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yVHlwZShjb2RlLCBtZXNzYWdlLCBCYXNlKSB7XG4gIGlmICghQmFzZSkge1xuICAgIEJhc2UgPSBFcnJvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1lc3NhZ2UoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWVzc2FnZShhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9XG4gIH1cblxuICB2YXIgTm9kZUVycm9yID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0Jhc2UpIHtcbiAgICBfaW5oZXJpdHMoTm9kZUVycm9yLCBfQmFzZSk7XG5cbiAgICBmdW5jdGlvbiBOb2RlRXJyb3IoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUVycm9yKTtcblxuICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTm9kZUVycm9yKS5jYWxsKHRoaXMsIGdldE1lc3NhZ2UoYXJnMSwgYXJnMiwgYXJnMykpKTtcbiAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBOb2RlRXJyb3I7XG4gIH0oQmFzZSk7XG5cbiAgY29kZXNbY29kZV0gPSBOb2RlRXJyb3I7XG59IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL3YxMC44LjAvbGliL2ludGVybmFsL2Vycm9ycy5qc1xuXG5cbmZ1bmN0aW9uIG9uZU9mKGV4cGVjdGVkLCB0aGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3RlZCkpIHtcbiAgICB2YXIgbGVuID0gZXhwZWN0ZWQubGVuZ3RoO1xuICAgIGV4cGVjdGVkID0gZXhwZWN0ZWQubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGkpO1xuICAgIH0pO1xuXG4gICAgaWYgKGxlbiA+IDIpIHtcbiAgICAgIHJldHVybiBcIm9uZSBvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWQuc2xpY2UoMCwgbGVuIC0gMSkuam9pbignLCAnKSwgXCIsIG9yIFwiKSArIGV4cGVjdGVkW2xlbiAtIDFdO1xuICAgIH0gZWxzZSBpZiAobGVuID09PSAyKSB7XG4gICAgICByZXR1cm4gXCJvbmUgb2YgXCIuY29uY2F0KHRoaW5nLCBcIiBcIikuY29uY2F0KGV4cGVjdGVkWzBdLCBcIiBvciBcIikuY29uY2F0KGV4cGVjdGVkWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwib2YgXCIuY29uY2F0KHRoaW5nLCBcIiBcIikuY29uY2F0KGV4cGVjdGVkWzBdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwib2YgXCIuY29uY2F0KHRoaW5nLCBcIiBcIikuY29uY2F0KFN0cmluZyhleHBlY3RlZCkpO1xuICB9XG59IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9zdGFydHNXaXRoXG5cblxuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHNlYXJjaCwgcG9zKSB7XG4gIHJldHVybiBzdHIuc3Vic3RyKCFwb3MgfHwgcG9zIDwgMCA/IDAgOiArcG9zLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xufSAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvZW5kc1dpdGhcblxuXG5mdW5jdGlvbiBlbmRzV2l0aChzdHIsIHNlYXJjaCwgdGhpc19sZW4pIHtcbiAgaWYgKHRoaXNfbGVuID09PSB1bmRlZmluZWQgfHwgdGhpc19sZW4gPiBzdHIubGVuZ3RoKSB7XG4gICAgdGhpc19sZW4gPSBzdHIubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcodGhpc19sZW4gLSBzZWFyY2gubGVuZ3RoLCB0aGlzX2xlbikgPT09IHNlYXJjaDtcbn0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2luY2x1ZGVzXG5cblxuZnVuY3Rpb24gaW5jbHVkZXMoc3RyLCBzZWFyY2gsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2Ygc3RhcnQgIT09ICdudW1iZXInKSB7XG4gICAgc3RhcnQgPSAwO1xuICB9XG5cbiAgaWYgKHN0YXJ0ICsgc2VhcmNoLmxlbmd0aCA+IHN0ci5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKHNlYXJjaCwgc3RhcnQpICE9PSAtMTtcbiAgfVxufVxuXG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9BTUJJR1VPVVNfQVJHVU1FTlQnLCAnVGhlIFwiJXNcIiBhcmd1bWVudCBpcyBhbWJpZ3VvdXMuICVzJywgVHlwZUVycm9yKTtcbmNyZWF0ZUVycm9yVHlwZSgnRVJSX0lOVkFMSURfQVJHX1RZUEUnLCBmdW5jdGlvbiAobmFtZSwgZXhwZWN0ZWQsIGFjdHVhbCkge1xuICBpZiAoYXNzZXJ0ID09PSB1bmRlZmluZWQpIGFzc2VydCA9IHJlcXVpcmUoJy4uL2Fzc2VydCcpO1xuICBhc3NlcnQodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnLCBcIiduYW1lJyBtdXN0IGJlIGEgc3RyaW5nXCIpOyAvLyBkZXRlcm1pbmVyOiAnbXVzdCBiZScgb3IgJ211c3Qgbm90IGJlJ1xuXG4gIHZhciBkZXRlcm1pbmVyO1xuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgPT09ICdzdHJpbmcnICYmIHN0YXJ0c1dpdGgoZXhwZWN0ZWQsICdub3QgJykpIHtcbiAgICBkZXRlcm1pbmVyID0gJ211c3Qgbm90IGJlJztcbiAgICBleHBlY3RlZCA9IGV4cGVjdGVkLnJlcGxhY2UoL15ub3QgLywgJycpO1xuICB9IGVsc2Uge1xuICAgIGRldGVybWluZXIgPSAnbXVzdCBiZSc7XG4gIH1cblxuICB2YXIgbXNnO1xuXG4gIGlmIChlbmRzV2l0aChuYW1lLCAnIGFyZ3VtZW50JykpIHtcbiAgICAvLyBGb3IgY2FzZXMgbGlrZSAnZmlyc3QgYXJndW1lbnQnXG4gICAgbXNnID0gXCJUaGUgXCIuY29uY2F0KG5hbWUsIFwiIFwiKS5jb25jYXQoZGV0ZXJtaW5lciwgXCIgXCIpLmNvbmNhdChvbmVPZihleHBlY3RlZCwgJ3R5cGUnKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHR5cGUgPSBpbmNsdWRlcyhuYW1lLCAnLicpID8gJ3Byb3BlcnR5JyA6ICdhcmd1bWVudCc7XG4gICAgbXNnID0gXCJUaGUgXFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIgXCIpLmNvbmNhdCh0eXBlLCBcIiBcIikuY29uY2F0KGRldGVybWluZXIsIFwiIFwiKS5jb25jYXQob25lT2YoZXhwZWN0ZWQsICd0eXBlJykpO1xuICB9IC8vIFRPRE8oQnJpZGdlQVIpOiBJbXByb3ZlIHRoZSBvdXRwdXQgYnkgc2hvd2luZyBgbnVsbGAgYW5kIHNpbWlsYXIuXG5cblxuICBtc2cgKz0gXCIuIFJlY2VpdmVkIHR5cGUgXCIuY29uY2F0KF90eXBlb2YoYWN0dWFsKSk7XG4gIHJldHVybiBtc2c7XG59LCBUeXBlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfSU5WQUxJRF9BUkdfVkFMVUUnLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHJlYXNvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2lzIGludmFsaWQnO1xuICBpZiAodXRpbCA9PT0gdW5kZWZpbmVkKSB1dGlsID0gcmVxdWlyZSgndXRpbC8nKTtcbiAgdmFyIGluc3BlY3RlZCA9IHV0aWwuaW5zcGVjdCh2YWx1ZSk7XG5cbiAgaWYgKGluc3BlY3RlZC5sZW5ndGggPiAxMjgpIHtcbiAgICBpbnNwZWN0ZWQgPSBcIlwiLmNvbmNhdChpbnNwZWN0ZWQuc2xpY2UoMCwgMTI4KSwgXCIuLi5cIik7XG4gIH1cblxuICByZXR1cm4gXCJUaGUgYXJndW1lbnQgJ1wiLmNvbmNhdChuYW1lLCBcIicgXCIpLmNvbmNhdChyZWFzb24sIFwiLiBSZWNlaXZlZCBcIikuY29uY2F0KGluc3BlY3RlZCk7XG59LCBUeXBlRXJyb3IsIFJhbmdlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfSU5WQUxJRF9SRVRVUk5fVkFMVUUnLCBmdW5jdGlvbiAoaW5wdXQsIG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0eXBlO1xuXG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgdHlwZSA9IFwiaW5zdGFuY2Ugb2YgXCIuY29uY2F0KHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBcInR5cGUgXCIuY29uY2F0KF90eXBlb2YodmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiBcIkV4cGVjdGVkIFwiLmNvbmNhdChpbnB1dCwgXCIgdG8gYmUgcmV0dXJuZWQgZnJvbSB0aGUgXFxcIlwiKS5jb25jYXQobmFtZSwgXCJcXFwiXCIpICsgXCIgZnVuY3Rpb24gYnV0IGdvdCBcIi5jb25jYXQodHlwZSwgXCIuXCIpO1xufSwgVHlwZUVycm9yKTtcbmNyZWF0ZUVycm9yVHlwZSgnRVJSX01JU1NJTkdfQVJHUycsIGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhc3NlcnQgPT09IHVuZGVmaW5lZCkgYXNzZXJ0ID0gcmVxdWlyZSgnLi4vYXNzZXJ0Jyk7XG4gIGFzc2VydChhcmdzLmxlbmd0aCA+IDAsICdBdCBsZWFzdCBvbmUgYXJnIG5lZWRzIHRvIGJlIHNwZWNpZmllZCcpO1xuICB2YXIgbXNnID0gJ1RoZSAnO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIGFyZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQoYSwgXCJcXFwiXCIpO1xuICB9KTtcblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMTpcbiAgICAgIG1zZyArPSBcIlwiLmNvbmNhdChhcmdzWzBdLCBcIiBhcmd1bWVudFwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOlxuICAgICAgbXNnICs9IFwiXCIuY29uY2F0KGFyZ3NbMF0sIFwiIGFuZCBcIikuY29uY2F0KGFyZ3NbMV0sIFwiIGFyZ3VtZW50c1wiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG1zZyArPSBhcmdzLnNsaWNlKDAsIGxlbiAtIDEpLmpvaW4oJywgJyk7XG4gICAgICBtc2cgKz0gXCIsIGFuZCBcIi5jb25jYXQoYXJnc1tsZW4gLSAxXSwgXCIgYXJndW1lbnRzXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQobXNnLCBcIiBtdXN0IGJlIHNwZWNpZmllZFwiKTtcbn0sIFR5cGVFcnJvcik7XG5tb2R1bGUuZXhwb3J0cy5jb2RlcyA9IGNvZGVzOyIsIi8vIEN1cnJlbnRseSBpbiBzeW5jIHdpdGggTm9kZS5qcyBsaWIvaW50ZXJuYWwvdXRpbC9jb21wYXJpc29ucy5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2NvbW1pdC8xMTJjYzdjMjc1NTEyNTRhYTJiMTcwOThmYjc3NDg2N2YwNWVkMGQ5XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcmVnZXhGbGFnc1N1cHBvcnRlZCA9IC9hL2cuZmxhZ3MgIT09IHVuZGVmaW5lZDtcblxudmFyIGFycmF5RnJvbVNldCA9IGZ1bmN0aW9uIGFycmF5RnJvbVNldChzZXQpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBhcnJheS5wdXNoKHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBhcnJheTtcbn07XG5cbnZhciBhcnJheUZyb21NYXAgPSBmdW5jdGlvbiBhcnJheUZyb21NYXAobWFwKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJldHVybiBhcnJheS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0pO1xuICByZXR1cm4gYXJyYXk7XG59O1xuXG52YXIgb2JqZWN0SXMgPSBPYmplY3QuaXMgPyBPYmplY3QuaXMgOiByZXF1aXJlKCdvYmplY3QtaXMnKTtcbnZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdO1xufTtcbnZhciBudW1iZXJJc05hTiA9IE51bWJlci5pc05hTiA/IE51bWJlci5pc05hTiA6IHJlcXVpcmUoJ2lzLW5hbicpO1xuXG5mdW5jdGlvbiB1bmN1cnJ5VGhpcyhmKSB7XG4gIHJldHVybiBmLmNhbGwuYmluZChmKTtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSB1bmN1cnJ5VGhpcyhPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbnZhciBvYmplY3RUb1N0cmluZyA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuXG52YXIgX3JlcXVpcmUkdHlwZXMgPSByZXF1aXJlKCd1dGlsLycpLnR5cGVzLFxuICAgIGlzQW55QXJyYXlCdWZmZXIgPSBfcmVxdWlyZSR0eXBlcy5pc0FueUFycmF5QnVmZmVyLFxuICAgIGlzQXJyYXlCdWZmZXJWaWV3ID0gX3JlcXVpcmUkdHlwZXMuaXNBcnJheUJ1ZmZlclZpZXcsXG4gICAgaXNEYXRlID0gX3JlcXVpcmUkdHlwZXMuaXNEYXRlLFxuICAgIGlzTWFwID0gX3JlcXVpcmUkdHlwZXMuaXNNYXAsXG4gICAgaXNSZWdFeHAgPSBfcmVxdWlyZSR0eXBlcy5pc1JlZ0V4cCxcbiAgICBpc1NldCA9IF9yZXF1aXJlJHR5cGVzLmlzU2V0LFxuICAgIGlzTmF0aXZlRXJyb3IgPSBfcmVxdWlyZSR0eXBlcy5pc05hdGl2ZUVycm9yLFxuICAgIGlzQm94ZWRQcmltaXRpdmUgPSBfcmVxdWlyZSR0eXBlcy5pc0JveGVkUHJpbWl0aXZlLFxuICAgIGlzTnVtYmVyT2JqZWN0ID0gX3JlcXVpcmUkdHlwZXMuaXNOdW1iZXJPYmplY3QsXG4gICAgaXNTdHJpbmdPYmplY3QgPSBfcmVxdWlyZSR0eXBlcy5pc1N0cmluZ09iamVjdCxcbiAgICBpc0Jvb2xlYW5PYmplY3QgPSBfcmVxdWlyZSR0eXBlcy5pc0Jvb2xlYW5PYmplY3QsXG4gICAgaXNCaWdJbnRPYmplY3QgPSBfcmVxdWlyZSR0eXBlcy5pc0JpZ0ludE9iamVjdCxcbiAgICBpc1N5bWJvbE9iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzU3ltYm9sT2JqZWN0LFxuICAgIGlzRmxvYXQzMkFycmF5ID0gX3JlcXVpcmUkdHlwZXMuaXNGbG9hdDMyQXJyYXksXG4gICAgaXNGbG9hdDY0QXJyYXkgPSBfcmVxdWlyZSR0eXBlcy5pc0Zsb2F0NjRBcnJheTtcblxuZnVuY3Rpb24gaXNOb25JbmRleChrZXkpIHtcbiAgaWYgKGtleS5sZW5ndGggPT09IDAgfHwga2V5Lmxlbmd0aCA+IDEwKSByZXR1cm4gdHJ1ZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjb2RlID0ga2V5LmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gNTcpIHJldHVybiB0cnVlO1xuICB9IC8vIFRoZSBtYXhpbXVtIHNpemUgZm9yIGFuIGFycmF5IGlzIDIgKiogMzIgLTEuXG5cblxuICByZXR1cm4ga2V5Lmxlbmd0aCA9PT0gMTAgJiYga2V5ID49IE1hdGgucG93KDIsIDMyKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3duTm9uSW5kZXhQcm9wZXJ0aWVzKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkuZmlsdGVyKGlzTm9uSW5kZXgpLmNvbmNhdChvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHModmFsdWUpLmZpbHRlcihPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmJpbmQodmFsdWUpKSk7XG59IC8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvYmxvYi82ODBlOWU1ZTQ4OGYyMmFhYzI3NTk5YTU3ZGM4NDRhNjMxNTkyOGRkL2luZGV4LmpzXG4vLyBvcmlnaW5hbCBub3RpY2U6XG5cbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciB4ID0gYS5sZW5ndGg7XG4gIHZhciB5ID0gYi5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV07XG4gICAgICB5ID0gYltpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmICh5IDwgeCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbnZhciBPTkxZX0VOVU1FUkFCTEUgPSB1bmRlZmluZWQ7XG52YXIga1N0cmljdCA9IHRydWU7XG52YXIga0xvb3NlID0gZmFsc2U7XG52YXIga05vSXRlcmF0b3IgPSAwO1xudmFyIGtJc0FycmF5ID0gMTtcbnZhciBrSXNTZXQgPSAyO1xudmFyIGtJc01hcCA9IDM7IC8vIENoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBzb3VyY2UgYW5kIGZsYWdzXG5cbmZ1bmN0aW9uIGFyZVNpbWlsYXJSZWdFeHBzKGEsIGIpIHtcbiAgcmV0dXJuIHJlZ2V4RmxhZ3NTdXBwb3J0ZWQgPyBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncyA6IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpO1xufVxuXG5mdW5jdGlvbiBhcmVTaW1pbGFyRmxvYXRBcnJheXMoYSwgYikge1xuICBpZiAoYS5ieXRlTGVuZ3RoICE9PSBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBhLmJ5dGVMZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgaWYgKGFbb2Zmc2V0XSAhPT0gYltvZmZzZXRdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGFyZVNpbWlsYXJUeXBlZEFycmF5cyhhLCBiKSB7XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGEuYnVmZmVyLCBhLmJ5dGVPZmZzZXQsIGEuYnl0ZUxlbmd0aCksIG5ldyBVaW50OEFycmF5KGIuYnVmZmVyLCBiLmJ5dGVPZmZzZXQsIGIuYnl0ZUxlbmd0aCkpID09PSAwO1xufVxuXG5mdW5jdGlvbiBhcmVFcXVhbEFycmF5QnVmZmVycyhidWYxLCBidWYyKSB7XG4gIHJldHVybiBidWYxLmJ5dGVMZW5ndGggPT09IGJ1ZjIuYnl0ZUxlbmd0aCAmJiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGJ1ZjEpLCBuZXcgVWludDhBcnJheShidWYyKSkgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzRXF1YWxCb3hlZFByaW1pdGl2ZSh2YWwxLCB2YWwyKSB7XG4gIGlmIChpc051bWJlck9iamVjdCh2YWwxKSkge1xuICAgIHJldHVybiBpc051bWJlck9iamVjdCh2YWwyKSAmJiBvYmplY3RJcyhOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwxKSwgTnVtYmVyLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMikpO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nT2JqZWN0KHZhbDEpKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nT2JqZWN0KHZhbDIpICYmIFN0cmluZy5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpID09PSBTdHJpbmcucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwyKTtcbiAgfVxuXG4gIGlmIChpc0Jvb2xlYW5PYmplY3QodmFsMSkpIHtcbiAgICByZXR1cm4gaXNCb29sZWFuT2JqZWN0KHZhbDIpICYmIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwxKSA9PT0gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDIpO1xuICB9XG5cbiAgaWYgKGlzQmlnSW50T2JqZWN0KHZhbDEpKSB7XG4gICAgcmV0dXJuIGlzQmlnSW50T2JqZWN0KHZhbDIpICYmIEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpID09PSBCaWdJbnQucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwyKTtcbiAgfVxuXG4gIHJldHVybiBpc1N5bWJvbE9iamVjdCh2YWwyKSAmJiBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwxKSA9PT0gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMik7XG59IC8vIE5vdGVzOiBUeXBlIHRhZ3MgYXJlIGhpc3RvcmljYWwgW1tDbGFzc11dIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc2V0IGJ5XG4vLyBGdW5jdGlvblRlbXBsYXRlOjpTZXRDbGFzc05hbWUoKSBpbiBDKysgb3IgU3ltYm9sLnRvU3RyaW5nVGFnIGluIEpTXG4vLyBhbmQgcmV0cmlldmVkIHVzaW5nIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopIGluIEpTXG4vLyBTZWUgaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuLy8gZm9yIGEgbGlzdCBvZiB0YWdzIHByZS1kZWZpbmVkIGluIHRoZSBzcGVjLlxuLy8gVGhlcmUgYXJlIHNvbWUgdW5zcGVjaWZpZWQgdGFncyBpbiB0aGUgd2lsZCB0b28gKGUuZy4gdHlwZWQgYXJyYXkgdGFncykuXG4vLyBTaW5jZSB0YWdzIGNhbiBiZSBhbHRlcmVkLCB0aGV5IG9ubHkgc2VydmUgZmFzdCBmYWlsdXJlc1xuLy9cbi8vIFR5cGVkIGFycmF5cyBhbmQgYnVmZmVycyBhcmUgY2hlY2tlZCBieSBjb21wYXJpbmcgdGhlIGNvbnRlbnQgaW4gdGhlaXJcbi8vIHVuZGVybHlpbmcgQXJyYXlCdWZmZXIuIFRoaXMgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoYXQgaXQnc1xuLy8gcmVhc29uYWJsZSB0byBpbnRlcnByZXQgdGhlaXIgdW5kZXJseWluZyBtZW1vcnkgaW4gdGhlIHNhbWUgd2F5LFxuLy8gd2hpY2ggaXMgY2hlY2tlZCBieSBjb21wYXJpbmcgdGhlaXIgdHlwZSB0YWdzLlxuLy8gKGUuZy4gYSBVaW50OEFycmF5IGFuZCBhIFVpbnQxNkFycmF5IHdpdGggdGhlIHNhbWUgbWVtb3J5IGNvbnRlbnRcbi8vIGNvdWxkIHN0aWxsIGJlIGRpZmZlcmVudCBiZWNhdXNlIHRoZXkgd2lsbCBiZSBpbnRlcnByZXRlZCBkaWZmZXJlbnRseSkuXG4vL1xuLy8gRm9yIHN0cmljdCBjb21wYXJpc29uLCBvYmplY3RzIHNob3VsZCBoYXZlXG4vLyBhKSBUaGUgc2FtZSBidWlsdC1pbiB0eXBlIHRhZ3Ncbi8vIGIpIFRoZSBzYW1lIHByb3RvdHlwZXMuXG5cblxuZnVuY3Rpb24gaW5uZXJEZWVwRXF1YWwodmFsMSwgdmFsMiwgc3RyaWN0LCBtZW1vcykge1xuICAvLyBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmICh2YWwxID09PSB2YWwyKSB7XG4gICAgaWYgKHZhbDEgIT09IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBzdHJpY3QgPyBvYmplY3RJcyh2YWwxLCB2YWwyKSA6IHRydWU7XG4gIH0gLy8gQ2hlY2sgbW9yZSBjbG9zZWx5IGlmIHZhbDEgYW5kIHZhbDIgYXJlIGVxdWFsLlxuXG5cbiAgaWYgKHN0cmljdCkge1xuICAgIGlmIChfdHlwZW9mKHZhbDEpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwxID09PSAnbnVtYmVyJyAmJiBudW1iZXJJc05hTih2YWwxKSAmJiBudW1iZXJJc05hTih2YWwyKTtcbiAgICB9XG5cbiAgICBpZiAoX3R5cGVvZih2YWwyKSAhPT0gJ29iamVjdCcgfHwgdmFsMSA9PT0gbnVsbCB8fCB2YWwyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwxKSAhPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbDIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh2YWwxID09PSBudWxsIHx8IF90eXBlb2YodmFsMSkgIT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodmFsMiA9PT0gbnVsbCB8fCBfdHlwZW9mKHZhbDIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICAgIHJldHVybiB2YWwxID09IHZhbDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodmFsMiA9PT0gbnVsbCB8fCBfdHlwZW9mKHZhbDIpICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2YWwxVGFnID0gb2JqZWN0VG9TdHJpbmcodmFsMSk7XG4gIHZhciB2YWwyVGFnID0gb2JqZWN0VG9TdHJpbmcodmFsMik7XG5cbiAgaWYgKHZhbDFUYWcgIT09IHZhbDJUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwxKSkge1xuICAgIC8vIENoZWNrIGZvciBzcGFyc2UgYXJyYXlzIGFuZCBnZW5lcmFsIGZhc3QgcGF0aFxuICAgIGlmICh2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIga2V5czEgPSBnZXRPd25Ob25JbmRleFByb3BlcnRpZXModmFsMSwgT05MWV9FTlVNRVJBQkxFKTtcbiAgICB2YXIga2V5czIgPSBnZXRPd25Ob25JbmRleFByb3BlcnRpZXModmFsMiwgT05MWV9FTlVNRVJBQkxFKTtcblxuICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrSXNBcnJheSwga2V5czEpO1xuICB9IC8vIFticm93c2VyaWZ5XSBUaGlzIHRyaWdnZXJzIG9uIGNlcnRhaW4gdHlwZXMgaW4gSUUgKE1hcC9TZXQpIHNvIHdlIGRvbid0XG4gIC8vIHdhbid0IHRvIGVhcmx5IHJldHVybiBvdXQgb2YgdGhlIHJlc3Qgb2YgdGhlIGNoZWNrcy4gSG93ZXZlciB3ZSBjYW4gY2hlY2tcbiAgLy8gaWYgdGhlIHNlY29uZCB2YWx1ZSBpcyBvbmUgb2YgdGhlc2UgdmFsdWVzIGFuZCB0aGUgZmlyc3QgaXNuJ3QuXG5cblxuICBpZiAodmFsMVRhZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAvLyByZXR1cm4ga2V5Q2hlY2sodmFsMSwgdmFsMiwgc3RyaWN0LCBtZW1vcywga05vSXRlcmF0b3IpO1xuICAgIGlmICghaXNNYXAodmFsMSkgJiYgaXNNYXAodmFsMikgfHwgIWlzU2V0KHZhbDEpICYmIGlzU2V0KHZhbDIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzRGF0ZSh2YWwxKSkge1xuICAgIGlmICghaXNEYXRlKHZhbDIpIHx8IERhdGUucHJvdG90eXBlLmdldFRpbWUuY2FsbCh2YWwxKSAhPT0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZS5jYWxsKHZhbDIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHZhbDEpKSB7XG4gICAgaWYgKCFpc1JlZ0V4cCh2YWwyKSB8fCAhYXJlU2ltaWxhclJlZ0V4cHModmFsMSwgdmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNOYXRpdmVFcnJvcih2YWwxKSB8fCB2YWwxIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAvLyBEbyBub3QgY29tcGFyZSB0aGUgc3RhY2sgYXMgaXQgbWlnaHQgZGlmZmVyIGV2ZW4gdGhvdWdoIHRoZSBlcnJvciBpdHNlbGZcbiAgICAvLyBpcyBvdGhlcndpc2UgaWRlbnRpY2FsLlxuICAgIGlmICh2YWwxLm1lc3NhZ2UgIT09IHZhbDIubWVzc2FnZSB8fCB2YWwxLm5hbWUgIT09IHZhbDIubmFtZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyVmlldyh2YWwxKSkge1xuICAgIGlmICghc3RyaWN0ICYmIChpc0Zsb2F0MzJBcnJheSh2YWwxKSB8fCBpc0Zsb2F0NjRBcnJheSh2YWwxKSkpIHtcbiAgICAgIGlmICghYXJlU2ltaWxhckZsb2F0QXJyYXlzKHZhbDEsIHZhbDIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFhcmVTaW1pbGFyVHlwZWRBcnJheXModmFsMSwgdmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIEJ1ZmZlci5jb21wYXJlIHJldHVybnMgdHJ1ZSwgc28gdmFsMS5sZW5ndGggPT09IHZhbDIubGVuZ3RoLiBJZiB0aGV5IGJvdGhcbiAgICAvLyBvbmx5IGNvbnRhaW4gbnVtZXJpYyBrZXlzLCB3ZSBkb24ndCBuZWVkIHRvIGV4YW0gZnVydGhlciB0aGFuIGNoZWNraW5nXG4gICAgLy8gdGhlIHN5bWJvbHMuXG5cblxuICAgIHZhciBfa2V5cyA9IGdldE93bk5vbkluZGV4UHJvcGVydGllcyh2YWwxLCBPTkxZX0VOVU1FUkFCTEUpO1xuXG4gICAgdmFyIF9rZXlzMiA9IGdldE93bk5vbkluZGV4UHJvcGVydGllcyh2YWwyLCBPTkxZX0VOVU1FUkFCTEUpO1xuXG4gICAgaWYgKF9rZXlzLmxlbmd0aCAhPT0gX2tleXMyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrTm9JdGVyYXRvciwgX2tleXMpO1xuICB9IGVsc2UgaWYgKGlzU2V0KHZhbDEpKSB7XG4gICAgaWYgKCFpc1NldCh2YWwyKSB8fCB2YWwxLnNpemUgIT09IHZhbDIuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrSXNTZXQpO1xuICB9IGVsc2UgaWYgKGlzTWFwKHZhbDEpKSB7XG4gICAgaWYgKCFpc01hcCh2YWwyKSB8fCB2YWwxLnNpemUgIT09IHZhbDIuc2l6ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrSXNNYXApO1xuICB9IGVsc2UgaWYgKGlzQW55QXJyYXlCdWZmZXIodmFsMSkpIHtcbiAgICBpZiAoIWFyZUVxdWFsQXJyYXlCdWZmZXJzKHZhbDEsIHZhbDIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQm94ZWRQcmltaXRpdmUodmFsMSkgJiYgIWlzRXF1YWxCb3hlZFByaW1pdGl2ZSh2YWwxLCB2YWwyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrTm9JdGVyYXRvcik7XG59XG5cbmZ1bmN0aW9uIGdldEVudW1lcmFibGVzKHZhbCwga2V5cykge1xuICByZXR1cm4ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUodmFsLCBrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGl0ZXJhdGlvblR5cGUsIGFLZXlzKSB7XG4gIC8vIEZvciBhbGwgcmVtYWluaW5nIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5LCBvYmplY3RzIGFuZCBNYXBzLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5IGhhdmluZzpcbiAgLy8gYSkgVGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIGVudW1lcmFibGUgcHJvcGVydGllc1xuICAvLyBiKSBUaGUgc2FtZSBzZXQgb2Yga2V5cy9pbmRleGVzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpXG4gIC8vIGMpIEVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleS9pbmRleFxuICAvLyBkKSBGb3IgU2V0cyBhbmQgTWFwcywgZXF1YWwgY29udGVudHNcbiAgLy8gTm90ZTogdGhpcyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUpIHtcbiAgICBhS2V5cyA9IE9iamVjdC5rZXlzKHZhbDEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKHZhbDIpOyAvLyBUaGUgcGFpciBtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMuXG5cbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gLy8gQ2hlYXAga2V5IHRlc3RcblxuXG4gIHZhciBpID0gMDtcblxuICBmb3IgKDsgaSA8IGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2YWwyLCBhS2V5c1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RyaWN0ICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDUpIHtcbiAgICB2YXIgc3ltYm9sS2V5c0EgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHModmFsMSk7XG5cbiAgICBpZiAoc3ltYm9sS2V5c0EubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc3ltYm9sS2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHN5bWJvbEtleXNBW2ldO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZSh2YWwxLCBrZXkpKSB7XG4gICAgICAgICAgaWYgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZSh2YWwyLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYUtleXMucHVzaChrZXkpO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlJc0VudW1lcmFibGUodmFsMiwga2V5KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc3ltYm9sS2V5c0IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHModmFsMik7XG5cbiAgICAgIGlmIChzeW1ib2xLZXlzQS5sZW5ndGggIT09IHN5bWJvbEtleXNCLmxlbmd0aCAmJiBnZXRFbnVtZXJhYmxlcyh2YWwyLCBzeW1ib2xLZXlzQikubGVuZ3RoICE9PSBjb3VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfc3ltYm9sS2V5c0IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHModmFsMik7XG5cbiAgICAgIGlmIChfc3ltYm9sS2V5c0IubGVuZ3RoICE9PSAwICYmIGdldEVudW1lcmFibGVzKHZhbDIsIF9zeW1ib2xLZXlzQikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYUtleXMubGVuZ3RoID09PSAwICYmIChpdGVyYXRpb25UeXBlID09PSBrTm9JdGVyYXRvciB8fCBpdGVyYXRpb25UeXBlID09PSBrSXNBcnJheSAmJiB2YWwxLmxlbmd0aCA9PT0gMCB8fCB2YWwxLnNpemUgPT09IDApKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gVXNlIG1lbW9zIHRvIGhhbmRsZSBjeWNsZXMuXG5cblxuICBpZiAobWVtb3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG1lbW9zID0ge1xuICAgICAgdmFsMTogbmV3IE1hcCgpLFxuICAgICAgdmFsMjogbmV3IE1hcCgpLFxuICAgICAgcG9zaXRpb246IDBcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIFdlIHByZXZlbnQgdXAgdG8gdHdvIG1hcC5oYXMoeCkgY2FsbHMgYnkgZGlyZWN0bHkgcmV0cmlldmluZyB0aGUgdmFsdWVcbiAgICAvLyBhbmQgY2hlY2tpbmcgZm9yIHVuZGVmaW5lZC4gVGhlIG1hcCBjYW4gb25seSBjb250YWluIG51bWJlcnMsIHNvIGl0IGlzXG4gICAgLy8gc2FmZSB0byBjaGVjayBmb3IgdW5kZWZpbmVkIG9ubHkuXG4gICAgdmFyIHZhbDJNZW1vQSA9IG1lbW9zLnZhbDEuZ2V0KHZhbDEpO1xuXG4gICAgaWYgKHZhbDJNZW1vQSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdmFsMk1lbW9CID0gbWVtb3MudmFsMi5nZXQodmFsMik7XG5cbiAgICAgIGlmICh2YWwyTWVtb0IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsMk1lbW9BID09PSB2YWwyTWVtb0I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb3MucG9zaXRpb24rKztcbiAgfVxuXG4gIG1lbW9zLnZhbDEuc2V0KHZhbDEsIG1lbW9zLnBvc2l0aW9uKTtcbiAgbWVtb3MudmFsMi5zZXQodmFsMiwgbWVtb3MucG9zaXRpb24pO1xuICB2YXIgYXJlRXEgPSBvYmpFcXVpdih2YWwxLCB2YWwyLCBzdHJpY3QsIGFLZXlzLCBtZW1vcywgaXRlcmF0aW9uVHlwZSk7XG4gIG1lbW9zLnZhbDEuZGVsZXRlKHZhbDEpO1xuICBtZW1vcy52YWwyLmRlbGV0ZSh2YWwyKTtcbiAgcmV0dXJuIGFyZUVxO1xufVxuXG5mdW5jdGlvbiBzZXRIYXNFcXVhbEVsZW1lbnQoc2V0LCB2YWwxLCBzdHJpY3QsIG1lbW8pIHtcbiAgLy8gR28gbG9va2luZy5cbiAgdmFyIHNldFZhbHVlcyA9IGFycmF5RnJvbVNldChzZXQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbDIgPSBzZXRWYWx1ZXNbaV07XG5cbiAgICBpZiAoaW5uZXJEZWVwRXF1YWwodmFsMSwgdmFsMiwgc3RyaWN0LCBtZW1vKSkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBtYXRjaGluZyBlbGVtZW50IHRvIG1ha2Ugc3VyZSB3ZSBkbyBub3QgY2hlY2sgdGhhdCBhZ2Fpbi5cbiAgICAgIHNldC5kZWxldGUodmFsMik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0VxdWFsaXR5X2NvbXBhcmlzb25zX2FuZF9zYW1lbmVzcyNMb29zZV9lcXVhbGl0eV91c2luZ1xuLy8gU2FkbHkgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGRldGVjdCBjb3JyZXNwb25kaW5nIHZhbHVlcyBwcm9wZXJseSBpbiBjYXNlIHRoZVxuLy8gdHlwZSBpcyBhIHN0cmluZywgbnVtYmVyLCBiaWdpbnQgb3IgYm9vbGVhbi4gVGhlIHJlYXNvbiBpcyB0aGF0IHRob3NlIHZhbHVlc1xuLy8gY2FuIG1hdGNoIGxvdHMgb2YgZGlmZmVyZW50IHN0cmluZyB2YWx1ZXMgKGUuZy4sIDFuID09ICcrMDAwMDEnKS5cblxuXG5mdW5jdGlvbiBmaW5kTG9vc2VNYXRjaGluZ1ByaW1pdGl2ZXMocHJpbSkge1xuICBzd2l0Y2ggKF90eXBlb2YocHJpbSkpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgLy8gT25seSBwYXNzIGluIG51bGwgYXMgb2JqZWN0IVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcHJpbSA9ICtwcmltO1xuICAgIC8vIExvb3NlIGVxdWFsIGVudHJpZXMgZXhpc3Qgb25seSBpZiB0aGUgc3RyaW5nIGlzIHBvc3NpYmxlIHRvIGNvbnZlcnQgdG9cbiAgICAvLyBhIHJlZ3VsYXIgbnVtYmVyIGFuZCBub3QgTmFOLlxuICAgIC8vIEZhbGwgdGhyb3VnaFxuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGlmIChudW1iZXJJc05hTihwcmltKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXRNaWdodEhhdmVMb29zZVByaW0oYSwgYiwgcHJpbSkge1xuICB2YXIgYWx0VmFsdWUgPSBmaW5kTG9vc2VNYXRjaGluZ1ByaW1pdGl2ZXMocHJpbSk7XG4gIGlmIChhbHRWYWx1ZSAhPSBudWxsKSByZXR1cm4gYWx0VmFsdWU7XG4gIHJldHVybiBiLmhhcyhhbHRWYWx1ZSkgJiYgIWEuaGFzKGFsdFZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWFwTWlnaHRIYXZlTG9vc2VQcmltKGEsIGIsIHByaW0sIGl0ZW0sIG1lbW8pIHtcbiAgdmFyIGFsdFZhbHVlID0gZmluZExvb3NlTWF0Y2hpbmdQcmltaXRpdmVzKHByaW0pO1xuXG4gIGlmIChhbHRWYWx1ZSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGFsdFZhbHVlO1xuICB9XG5cbiAgdmFyIGN1ckIgPSBiLmdldChhbHRWYWx1ZSk7XG5cbiAgaWYgKGN1ckIgPT09IHVuZGVmaW5lZCAmJiAhYi5oYXMoYWx0VmFsdWUpIHx8ICFpbm5lckRlZXBFcXVhbChpdGVtLCBjdXJCLCBmYWxzZSwgbWVtbykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gIWEuaGFzKGFsdFZhbHVlKSAmJiBpbm5lckRlZXBFcXVhbChpdGVtLCBjdXJCLCBmYWxzZSwgbWVtbyk7XG59XG5cbmZ1bmN0aW9uIHNldEVxdWl2KGEsIGIsIHN0cmljdCwgbWVtbykge1xuICAvLyBUaGlzIGlzIGEgbGF6aWx5IGluaXRpYXRlZCBTZXQgb2YgZW50cmllcyB3aGljaCBoYXZlIHRvIGJlIGNvbXBhcmVkXG4gIC8vIHBhaXJ3aXNlLlxuICB2YXIgc2V0ID0gbnVsbDtcbiAgdmFyIGFWYWx1ZXMgPSBhcnJheUZyb21TZXQoYSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZhbCA9IGFWYWx1ZXNbaV07IC8vIE5vdGU6IENoZWNraW5nIGZvciB0aGUgb2JqZWN0cyBmaXJzdCBpbXByb3ZlcyB0aGUgcGVyZm9ybWFuY2UgZm9yIG9iamVjdFxuICAgIC8vIGhlYXZ5IHNldHMgYnV0IGl0IGlzIGEgbWlub3Igc2xvdyBkb3duIGZvciBwcmltaXRpdmVzLiBBcyB0aGV5IGFyZSBmYXN0XG4gICAgLy8gdG8gY2hlY2sgdGhpcyBpbXByb3ZlcyB0aGUgd29yc3QgY2FzZSBzY2VuYXJpbyBpbnN0ZWFkLlxuXG4gICAgaWYgKF90eXBlb2YodmFsKSA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICBpZiAoc2V0ID09PSBudWxsKSB7XG4gICAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgIH0gLy8gSWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBkb2Vzbid0IGV4aXN0IGluIHRoZSBzZWNvbmQgc2V0IGl0cyBhbiBub3QgbnVsbFxuICAgICAgLy8gb2JqZWN0IChvciBub24gc3RyaWN0IG9ubHk6IGEgbm90IG1hdGNoaW5nIHByaW1pdGl2ZSkgd2UnbGwgbmVlZCB0byBnb1xuICAgICAgLy8gaHVudGluZyBmb3Igc29tZXRoaW5nIHRoYXRzIGRlZXAtKHN0cmljdC0pZXF1YWwgdG8gaXQuIFRvIG1ha2UgdGhpc1xuICAgICAgLy8gTyhuIGxvZyBuKSBjb21wbGV4aXR5IHdlIGhhdmUgdG8gY29weSB0aGVzZSB2YWx1ZXMgaW4gYSBuZXcgc2V0IGZpcnN0LlxuXG5cbiAgICAgIHNldC5hZGQodmFsKTtcbiAgICB9IGVsc2UgaWYgKCFiLmhhcyh2YWwpKSB7XG4gICAgICBpZiAoc3RyaWN0KSByZXR1cm4gZmFsc2U7IC8vIEZhc3QgcGF0aCB0byBkZXRlY3QgbWlzc2luZyBzdHJpbmcsIHN5bWJvbCwgdW5kZWZpbmVkIGFuZCBudWxsIHZhbHVlcy5cblxuICAgICAgaWYgKCFzZXRNaWdodEhhdmVMb29zZVByaW0oYSwgYiwgdmFsKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgfVxuXG4gICAgICBzZXQuYWRkKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNldCAhPT0gbnVsbCkge1xuICAgIHZhciBiVmFsdWVzID0gYXJyYXlGcm9tU2V0KGIpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGJWYWx1ZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX3ZhbCA9IGJWYWx1ZXNbX2ldOyAvLyBXZSBoYXZlIHRvIGNoZWNrIGlmIGEgcHJpbWl0aXZlIHZhbHVlIGlzIGFscmVhZHlcbiAgICAgIC8vIG1hdGNoaW5nIGFuZCBvbmx5IGlmIGl0J3Mgbm90LCBnbyBodW50aW5nIGZvciBpdC5cblxuICAgICAgaWYgKF90eXBlb2YoX3ZhbCkgPT09ICdvYmplY3QnICYmIF92YWwgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKCFzZXRIYXNFcXVhbEVsZW1lbnQoc2V0LCBfdmFsLCBzdHJpY3QsIG1lbW8pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgIWEuaGFzKF92YWwpICYmICFzZXRIYXNFcXVhbEVsZW1lbnQoc2V0LCBfdmFsLCBzdHJpY3QsIG1lbW8pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2V0LnNpemUgPT09IDA7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWFwSGFzRXF1YWxFbnRyeShzZXQsIG1hcCwga2V5MSwgaXRlbTEsIHN0cmljdCwgbWVtbykge1xuICAvLyBUbyBiZSBhYmxlIHRvIGhhbmRsZSBjYXNlcyBsaWtlOlxuICAvLyAgIE1hcChbW3t9LCAnYSddLCBbe30sICdiJ11dKSB2cyBNYXAoW1t7fSwgJ2InXSwgW3t9LCAnYSddXSlcbiAgLy8gLi4uIHdlIG5lZWQgdG8gY29uc2lkZXIgKmFsbCogbWF0Y2hpbmcga2V5cywgbm90IGp1c3QgdGhlIGZpcnN0IHdlIGZpbmQuXG4gIHZhciBzZXRWYWx1ZXMgPSBhcnJheUZyb21TZXQoc2V0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkyID0gc2V0VmFsdWVzW2ldO1xuXG4gICAgaWYgKGlubmVyRGVlcEVxdWFsKGtleTEsIGtleTIsIHN0cmljdCwgbWVtbykgJiYgaW5uZXJEZWVwRXF1YWwoaXRlbTEsIG1hcC5nZXQoa2V5MiksIHN0cmljdCwgbWVtbykpIHtcbiAgICAgIHNldC5kZWxldGUoa2V5Mik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1hcEVxdWl2KGEsIGIsIHN0cmljdCwgbWVtbykge1xuICB2YXIgc2V0ID0gbnVsbDtcbiAgdmFyIGFFbnRyaWVzID0gYXJyYXlGcm9tTWFwKGEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2FFbnRyaWVzJGkgPSBfc2xpY2VkVG9BcnJheShhRW50cmllc1tpXSwgMiksXG4gICAgICAgIGtleSA9IF9hRW50cmllcyRpWzBdLFxuICAgICAgICBpdGVtMSA9IF9hRW50cmllcyRpWzFdO1xuXG4gICAgaWYgKF90eXBlb2Yoa2V5KSA9PT0gJ29iamVjdCcgJiYga2V5ICE9PSBudWxsKSB7XG4gICAgICBpZiAoc2V0ID09PSBudWxsKSB7XG4gICAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgIH1cblxuICAgICAgc2V0LmFkZChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCeSBkaXJlY3RseSByZXRyaWV2aW5nIHRoZSB2YWx1ZSB3ZSBwcmV2ZW50IGFub3RoZXIgYi5oYXMoa2V5KSBjaGVjayBpblxuICAgICAgLy8gYWxtb3N0IGFsbCBwb3NzaWJsZSBjYXNlcy5cbiAgICAgIHZhciBpdGVtMiA9IGIuZ2V0KGtleSk7XG5cbiAgICAgIGlmIChpdGVtMiA9PT0gdW5kZWZpbmVkICYmICFiLmhhcyhrZXkpIHx8ICFpbm5lckRlZXBFcXVhbChpdGVtMSwgaXRlbTIsIHN0cmljdCwgbWVtbykpIHtcbiAgICAgICAgaWYgKHN0cmljdCkgcmV0dXJuIGZhbHNlOyAvLyBGYXN0IHBhdGggdG8gZGV0ZWN0IG1pc3Npbmcgc3RyaW5nLCBzeW1ib2wsIHVuZGVmaW5lZCBhbmQgbnVsbFxuICAgICAgICAvLyBrZXlzLlxuXG4gICAgICAgIGlmICghbWFwTWlnaHRIYXZlTG9vc2VQcmltKGEsIGIsIGtleSwgaXRlbTEsIG1lbW8pKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNldCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2V0ICE9PSBudWxsKSB7XG4gICAgdmFyIGJFbnRyaWVzID0gYXJyYXlGcm9tTWFwKGIpO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgYkVudHJpZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIF9iRW50cmllcyRfaSA9IF9zbGljZWRUb0FycmF5KGJFbnRyaWVzW19pMl0sIDIpLFxuICAgICAgICAgIGtleSA9IF9iRW50cmllcyRfaVswXSxcbiAgICAgICAgICBpdGVtID0gX2JFbnRyaWVzJF9pWzFdO1xuXG4gICAgICBpZiAoX3R5cGVvZihrZXkpID09PSAnb2JqZWN0JyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKCFtYXBIYXNFcXVhbEVudHJ5KHNldCwgYSwga2V5LCBpdGVtLCBzdHJpY3QsIG1lbW8pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgKCFhLmhhcyhrZXkpIHx8ICFpbm5lckRlZXBFcXVhbChhLmdldChrZXkpLCBpdGVtLCBmYWxzZSwgbWVtbykpICYmICFtYXBIYXNFcXVhbEVudHJ5KHNldCwgYSwga2V5LCBpdGVtLCBmYWxzZSwgbWVtbykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXQuc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBzdHJpY3QsIGtleXMsIG1lbW9zLCBpdGVyYXRpb25UeXBlKSB7XG4gIC8vIFNldHMgYW5kIG1hcHMgZG9uJ3QgaGF2ZSB0aGVpciBlbnRyaWVzIGFjY2Vzc2libGUgdmlhIG5vcm1hbCBvYmplY3RcbiAgLy8gcHJvcGVydGllcy5cbiAgdmFyIGkgPSAwO1xuXG4gIGlmIChpdGVyYXRpb25UeXBlID09PSBrSXNTZXQpIHtcbiAgICBpZiAoIXNldEVxdWl2KGEsIGIsIHN0cmljdCwgbWVtb3MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGl0ZXJhdGlvblR5cGUgPT09IGtJc01hcCkge1xuICAgIGlmICghbWFwRXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXRlcmF0aW9uVHlwZSA9PT0ga0lzQXJyYXkpIHtcbiAgICBmb3IgKDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShhLCBpKSkge1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5KGIsIGkpIHx8ICFpbm5lckRlZXBFcXVhbChhW2ldLCBiW2ldLCBzdHJpY3QsIG1lbW9zKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShiLCBpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBcnJheSBpcyBzcGFyc2UuXG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuXG4gICAgICAgIGZvciAoOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5c0FbaV07XG5cbiAgICAgICAgICBpZiAoIWhhc093blByb3BlcnR5KGIsIGtleSkgfHwgIWlubmVyRGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBzdHJpY3QsIG1lbW9zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlzQS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBUaGUgcGFpciBtdXN0IGhhdmUgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LlxuICAvLyBQb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0OlxuXG5cbiAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2tleSA9IGtleXNbaV07XG5cbiAgICBpZiAoIWlubmVyRGVlcEVxdWFsKGFbX2tleV0sIGJbX2tleV0sIHN0cmljdCwgbWVtb3MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzRGVlcEVxdWFsKHZhbDEsIHZhbDIpIHtcbiAgcmV0dXJuIGlubmVyRGVlcEVxdWFsKHZhbDEsIHZhbDIsIGtMb29zZSk7XG59XG5cbmZ1bmN0aW9uIGlzRGVlcFN0cmljdEVxdWFsKHZhbDEsIHZhbDIpIHtcbiAgcmV0dXJuIGlubmVyRGVlcEVxdWFsKHZhbDEsIHZhbDIsIGtTdHJpY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNEZWVwRXF1YWw6IGlzRGVlcEVxdWFsLFxuICBpc0RlZXBTdHJpY3RFcXVhbDogaXNEZWVwU3RyaWN0RXF1YWxcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCcuLycpO1xuXG52YXIgJGluZGV4T2YgPSBjYWxsQmluZChHZXRJbnRyaW5zaWMoJ1N0cmluZy5wcm90b3R5cGUuaW5kZXhPZicpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsQm91bmRJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdHZhciBpbnRyaW5zaWMgPSBHZXRJbnRyaW5zaWMobmFtZSwgISFhbGxvd01pc3NpbmcpO1xuXHRpZiAodHlwZW9mIGludHJpbnNpYyA9PT0gJ2Z1bmN0aW9uJyAmJiAkaW5kZXhPZihuYW1lLCAnLnByb3RvdHlwZS4nKSA+IC0xKSB7XG5cdFx0cmV0dXJuIGNhbGxCaW5kKGludHJpbnNpYyk7XG5cdH1cblx0cmV0dXJuIGludHJpbnNpYztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRhcHBseSA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSUnKTtcbnZhciAkY2FsbCA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsJScpO1xudmFyICRyZWZsZWN0QXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVSZWZsZWN0LmFwcGx5JScsIHRydWUpIHx8IGJpbmQuY2FsbCgkY2FsbCwgJGFwcGx5KTtcblxudmFyICRnT1BEID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciUnLCB0cnVlKTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG52YXIgJG1heCA9IEdldEludHJpbnNpYygnJU1hdGgubWF4JScpO1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdCRkZWZpbmVQcm9wZXJ0eSA9IG51bGw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsQmluZChvcmlnaW5hbEZ1bmN0aW9uKSB7XG5cdHZhciBmdW5jID0gJHJlZmxlY3RBcHBseShiaW5kLCAkY2FsbCwgYXJndW1lbnRzKTtcblx0aWYgKCRnT1BEICYmICRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdHZhciBkZXNjID0gJGdPUEQoZnVuYywgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0Ly8gb3JpZ2luYWwgbGVuZ3RoLCBwbHVzIHRoZSByZWNlaXZlciwgbWludXMgYW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIChhZnRlciB0aGUgcmVjZWl2ZXIpXG5cdFx0XHQkZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdCdsZW5ndGgnLFxuXHRcdFx0XHR7IHZhbHVlOiAxICsgJG1heCgwLCBvcmlnaW5hbEZ1bmN0aW9uLmxlbmd0aCAtIChhcmd1bWVudHMubGVuZ3RoIC0gMSkpIH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmdW5jO1xufTtcblxudmFyIGFwcGx5QmluZCA9IGZ1bmN0aW9uIGFwcGx5QmluZCgpIHtcblx0cmV0dXJuICRyZWZsZWN0QXBwbHkoYmluZCwgJGFwcGx5LCBhcmd1bWVudHMpO1xufTtcblxuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHQkZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsICdhcHBseScsIHsgdmFsdWU6IGFwcGx5QmluZCB9KTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzLmFwcGx5ID0gYXBwbHlCaW5kO1xufVxuIiwiLypnbG9iYWwgd2luZG93LCBnbG9iYWwqL1xudmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKVxudmFyIGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIilcbmZ1bmN0aW9uIG5vdygpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIH1cblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG52YXIgY29uc29sZVxudmFyIHRpbWVzID0ge31cblxuaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNvbnNvbGUpIHtcbiAgICBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGVcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY29uc29sZSkge1xuICAgIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZVxufSBlbHNlIHtcbiAgICBjb25zb2xlID0ge31cbn1cblxudmFyIGZ1bmN0aW9ucyA9IFtcbiAgICBbbG9nLCBcImxvZ1wiXSxcbiAgICBbaW5mbywgXCJpbmZvXCJdLFxuICAgIFt3YXJuLCBcIndhcm5cIl0sXG4gICAgW2Vycm9yLCBcImVycm9yXCJdLFxuICAgIFt0aW1lLCBcInRpbWVcIl0sXG4gICAgW3RpbWVFbmQsIFwidGltZUVuZFwiXSxcbiAgICBbdHJhY2UsIFwidHJhY2VcIl0sXG4gICAgW2RpciwgXCJkaXJcIl0sXG4gICAgW2NvbnNvbGVBc3NlcnQsIFwiYXNzZXJ0XCJdXG5dXG5cbmZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gZnVuY3Rpb25zW2ldXG4gICAgdmFyIGYgPSB0dXBsZVswXVxuICAgIHZhciBuYW1lID0gdHVwbGVbMV1cblxuICAgIGlmICghY29uc29sZVtuYW1lXSkge1xuICAgICAgICBjb25zb2xlW25hbWVdID0gZlxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zb2xlXG5cbmZ1bmN0aW9uIGxvZygpIHt9XG5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiB3YXJuKCkge1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cylcbn1cblxuZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cylcbn1cblxuZnVuY3Rpb24gdGltZShsYWJlbCkge1xuICAgIHRpbWVzW2xhYmVsXSA9IG5vdygpXG59XG5cbmZ1bmN0aW9uIHRpbWVFbmQobGFiZWwpIHtcbiAgICB2YXIgdGltZSA9IHRpbWVzW2xhYmVsXVxuICAgIGlmICghdGltZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsOiBcIiArIGxhYmVsKVxuICAgIH1cblxuICAgIGRlbGV0ZSB0aW1lc1tsYWJlbF1cbiAgICB2YXIgZHVyYXRpb24gPSBub3coKSAtIHRpbWVcbiAgICBjb25zb2xlLmxvZyhsYWJlbCArIFwiOiBcIiArIGR1cmF0aW9uICsgXCJtc1wiKVxufVxuXG5mdW5jdGlvbiB0cmFjZSgpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKClcbiAgICBlcnIubmFtZSA9IFwiVHJhY2VcIlxuICAgIGVyci5tZXNzYWdlID0gdXRpbC5mb3JtYXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKVxufVxuXG5mdW5jdGlvbiBkaXIob2JqZWN0KSB7XG4gICAgY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG9iamVjdCkgKyBcIlxcblwiKVxufVxuXG5mdW5jdGlvbiBjb25zb2xlQXNzZXJ0KGV4cHJlc3Npb24pIHtcbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFyIGFyciA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICAgICBhc3NlcnQub2soZmFsc2UsIHV0aWwuZm9ybWF0LmFwcGx5KG51bGwsIGFycikpXG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgnZm9vJykgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgb3JpZ0RlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IG9yaWdEZWZpbmVQcm9wZXJ0eSAmJiBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdH1cbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iamVjdCwgbWFwKSB7XG5cdHZhciBwcmVkaWNhdGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB7fTtcblx0dmFyIHByb3BzID0ga2V5cyhtYXApO1xuXHRpZiAoaGFzU3ltYm9scykge1xuXHRcdHByb3BzID0gY29uY2F0LmNhbGwocHJvcHMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobWFwKSk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcHNbaV0sIG1hcFtwcm9wc1tpXV0sIHByZWRpY2F0ZXNbcHJvcHNbaV1dKTtcblx0fVxufTtcblxuZGVmaW5lUHJvcGVydGllcy5zdXBwb3J0c0Rlc2NyaXB0b3JzID0gISFzdXBwb3J0c0Rlc2NyaXB0b3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnRpZXM7XG4iLCIvKipcbiAqIENvZGUgcmVmYWN0b3JlZCBmcm9tIE1vemlsbGEgRGV2ZWxvcGVyIE5ldHdvcms6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBmaXJzdFNvdXJjZSkge1xuICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0Jyk7XG4gIH1cblxuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICBpZiAobmV4dFNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpO1xuICAgIGZvciAodmFyIG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7IG5leHRJbmRleCA8IGxlbjsgbmV4dEluZGV4KyspIHtcbiAgICAgIHZhciBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF07XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkICYmIGRlc2MuZW51bWVyYWJsZSkge1xuICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxuZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gIGlmICghT2JqZWN0LmFzc2lnbikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QsICdhc3NpZ24nLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGFzc2lnblxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3NpZ246IGFzc2lnbixcbiAgcG9seWZpbGw6IHBvbHlmaWxsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZm9yRWFjaEFycmF5ID0gZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvciwgcmVjZWl2ZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpZiAocmVjZWl2ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGFycmF5W2ldLCBpLCBhcnJheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwocmVjZWl2ZXIsIGFycmF5W2ldLCBpLCBhcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgZm9yRWFjaFN0cmluZyA9IGZ1bmN0aW9uIGZvckVhY2hTdHJpbmcoc3RyaW5nLCBpdGVyYXRvciwgcmVjZWl2ZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpZiAocmVjZWl2ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlcmF0b3Ioc3RyaW5nLmNoYXJBdChpKSwgaSwgc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwocmVjZWl2ZXIsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgZm9yRWFjaE9iamVjdCA9IGZ1bmN0aW9uIGZvckVhY2hPYmplY3Qob2JqZWN0LCBpdGVyYXRvciwgcmVjZWl2ZXIpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpZiAocmVjZWl2ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKG9iamVjdFtrXSwgaywgb2JqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChyZWNlaXZlciwgb2JqZWN0W2tdLCBrLCBvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCB0aGlzQXJnKSB7XG4gICAgaWYgKCFpc0NhbGxhYmxlKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICB2YXIgcmVjZWl2ZXI7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykge1xuICAgICAgICByZWNlaXZlciA9IHRoaXNBcmc7XG4gICAgfVxuXG4gICAgaWYgKHRvU3RyLmNhbGwobGlzdCkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCByZWNlaXZlcik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgcmVjZWl2ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIHJlY2VpdmVyKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRGdW5jdGlvbiA9IEZ1bmN0aW9uO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIGdldEV2YWxsZWRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChleHByZXNzaW9uU3ludGF4KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7IHJldHVybiAoJyArIGV4cHJlc3Npb25TeW50YXggKyAnKS5jb25zdHJ1Y3RvcjsnKSgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKHt9LCAnJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQkZ09QRCA9IG51bGw7IC8vIHRoaXMgaXMgSUUgOCwgd2hpY2ggaGFzIGEgYnJva2VuIGdPUERcblx0fVxufVxuXG52YXIgdGhyb3dUeXBlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyAkVHlwZUVycm9yKCk7XG59O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIG5lZWRzRXZhbCA9IHt9O1xuXG52YXIgVHlwZWRBcnJheSA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKFVpbnQ4QXJyYXkpO1xuXG52YXIgSU5UUklOU0lDUyA9IHtcblx0JyVBZ2dyZWdhdGVFcnJvciUnOiB0eXBlb2YgQWdncmVnYXRlRXJyb3IgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQWdncmVnYXRlRXJyb3IsXG5cdCclQXJyYXklJzogQXJyYXksXG5cdCclQXJyYXlCdWZmZXIlJzogdHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFycmF5QnVmZmVyLFxuXHQnJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclQXN5bmNGcm9tU3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Z1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvciUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBuZWVkc0V2YWwsXG5cdCclQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJUJpZ0ludCUnOiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEJpZ0ludCxcblx0JyVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCclRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJURhdGUlJzogRGF0ZSxcblx0JyVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCclZW5jb2RlVVJJJSc6IGVuY29kZVVSSSxcblx0JyVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJUVycm9yJSc6IEVycm9yLFxuXHQnJWV2YWwlJzogZXZhbCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG5cdCclRXZhbEVycm9yJSc6IEV2YWxFcnJvcixcblx0JyVGbG9hdDMyQXJyYXklJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXksXG5cdCclRmxvYXQ2NEFycmF5JSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LFxuXHQnJUZpbmFsaXphdGlvblJlZ2lzdHJ5JSc6IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGaW5hbGl6YXRpb25SZWdpc3RyeSxcblx0JyVGdW5jdGlvbiUnOiAkRnVuY3Rpb24sXG5cdCclR2VuZXJhdG9yRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCclSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJWlzTmFOJSc6IGlzTmFOLFxuXHQnJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyVKU09OJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04gOiB1bmRlZmluZWQsXG5cdCclTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclTWF0aCUnOiBNYXRoLFxuXHQnJU51bWJlciUnOiBOdW1iZXIsXG5cdCclT2JqZWN0JSc6IE9iamVjdCxcblx0JyVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCclcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCclUHJvbWlzZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLFxuXHQnJVByb3h5JSc6IHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm94eSxcblx0JyVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCclUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCclUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJVJlZ0V4cCUnOiBSZWdFeHAsXG5cdCclU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJVNldEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVN0cmluZyUnOiBTdHJpbmcsXG5cdCclU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogJFN5bnRheEVycm9yLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtSZWYlJzogdHlwZW9mIFdlYWtSZWYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1JlZixcblx0JyVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXRcbn07XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgJGV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgZmlyc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAwLCAxKTtcblx0dmFyIGxhc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAtMSk7XG5cdGlmIChmaXJzdCA9PT0gJyUnICYmIGxhc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgY2xvc2luZyBgJWAnKTtcblx0fSBlbHNlIGlmIChsYXN0ID09PSAnJScgJiYgZmlyc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgb3BlbmluZyBgJWAnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gbmVlZHNFdmFsKSB7XG5cdFx0XHR2YWx1ZSA9IGRvRXZhbChpbnRyaW5zaWNOYW1lKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHRpZiAoJGV4ZWMoL14lP1teJV0qJT8kL2csIG5hbWUpID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignYCVgIG1heSBub3QgYmUgcHJlc2VudCBhbnl3aGVyZSBidXQgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIHRoZSBpbnRyaW5zaWMgbmFtZScpO1xuXHR9XG5cdHZhciBwYXJ0cyA9IHN0cmluZ1RvUGF0aChuYW1lKTtcblx0dmFyIGludHJpbnNpY0Jhc2VOYW1lID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzWzBdIDogJyc7XG5cblx0dmFyIGludHJpbnNpYyA9IGdldEJhc2VJbnRyaW5zaWMoJyUnICsgaW50cmluc2ljQmFzZU5hbWUgKyAnJScsIGFsbG93TWlzc2luZyk7XG5cdHZhciBpbnRyaW5zaWNSZWFsTmFtZSA9IGludHJpbnNpYy5uYW1lO1xuXHR2YXIgdmFsdWUgPSBpbnRyaW5zaWMudmFsdWU7XG5cdHZhciBza2lwRnVydGhlckNhY2hpbmcgPSBmYWxzZTtcblxuXHR2YXIgYWxpYXMgPSBpbnRyaW5zaWMuYWxpYXM7XG5cdGlmIChhbGlhcykge1xuXHRcdGludHJpbnNpY0Jhc2VOYW1lID0gYWxpYXNbMF07XG5cdFx0JHNwbGljZUFwcGx5KHBhcnRzLCAkY29uY2F0KFswLCAxXSwgYWxpYXMpKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAxLCBpc093biA9IHRydWU7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBwYXJ0ID0gcGFydHNbaV07XG5cdFx0dmFyIGZpcnN0ID0gJHN0clNsaWNlKHBhcnQsIDAsIDEpO1xuXHRcdHZhciBsYXN0ID0gJHN0clNsaWNlKHBhcnQsIC0xKTtcblx0XHRpZiAoXG5cdFx0XHQoXG5cdFx0XHRcdChmaXJzdCA9PT0gJ1wiJyB8fCBmaXJzdCA9PT0gXCInXCIgfHwgZmlyc3QgPT09ICdgJylcblx0XHRcdFx0fHwgKGxhc3QgPT09ICdcIicgfHwgbGFzdCA9PT0gXCInXCIgfHwgbGFzdCA9PT0gJ2AnKVxuXHRcdFx0KVxuXHRcdFx0JiYgZmlyc3QgIT09IGxhc3Rcblx0XHQpIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ3Byb3BlcnR5IG5hbWVzIHdpdGggcXVvdGVzIG11c3QgaGF2ZSBtYXRjaGluZyBxdW90ZXMnKTtcblx0XHR9XG5cdFx0aWYgKHBhcnQgPT09ICdjb25zdHJ1Y3RvcicgfHwgIWlzT3duKSB7XG5cdFx0XHRza2lwRnVydGhlckNhY2hpbmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGludHJpbnNpY0Jhc2VOYW1lICs9ICcuJyArIHBhcnQ7XG5cdFx0aW50cmluc2ljUmVhbE5hbWUgPSAnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJztcblxuXHRcdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljUmVhbE5hbWUpKSB7XG5cdFx0XHR2YWx1ZSA9IElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0aWYgKCEocGFydCBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0aWYgKCFhbGxvd01pc3NpbmcpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYmFzZSBpbnRyaW5zaWMgZm9yICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCB0aGUgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdm9pZCB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJGdPUEQgJiYgKGkgKyAxKSA+PSBwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGRlc2MgPSAkZ09QRCh2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdGlzT3duID0gISFkZXNjO1xuXG5cdFx0XHRcdC8vIEJ5IGNvbnZlbnRpb24sIHdoZW4gYSBkYXRhIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB0byBhbiBhY2Nlc3NvclxuXHRcdFx0XHQvLyBwcm9wZXJ0eSB0byBlbXVsYXRlIGEgZGF0YSBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IHN1ZmZlciBmcm9tXG5cdFx0XHRcdC8vIHRoZSBvdmVycmlkZSBtaXN0YWtlLCB0aGF0IGFjY2Vzc29yJ3MgZ2V0dGVyIGlzIG1hcmtlZCB3aXRoXG5cdFx0XHRcdC8vIGFuIGBvcmlnaW5hbFZhbHVlYCBwcm9wZXJ0eS4gSGVyZSwgd2hlbiB3ZSBkZXRlY3QgdGhpcywgd2Vcblx0XHRcdFx0Ly8gdXBob2xkIHRoZSBpbGx1c2lvbiBieSBwcmV0ZW5kaW5nIHRvIHNlZSB0aGF0IG9yaWdpbmFsIGRhdGFcblx0XHRcdFx0Ly8gcHJvcGVydHksIGkuZS4sIHJldHVybmluZyB0aGUgdmFsdWUgcmF0aGVyIHRoYW4gdGhlIGdldHRlclxuXHRcdFx0XHQvLyBpdHNlbGYuXG5cdFx0XHRcdGlmIChpc093biAmJiAnZ2V0JyBpbiBkZXNjICYmICEoJ29yaWdpbmFsVmFsdWUnIGluIGRlc2MuZ2V0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZGVzYy5nZXQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZVtwYXJ0XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXNPd24gPSBoYXNPd24odmFsdWUsIHBhcnQpO1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNPd24gJiYgIXNraXBGdXJ0aGVyQ2FjaGluZykge1xuXHRcdFx0XHRJTlRSSU5TSUNTW2ludHJpbnNpY1JlYWxOYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSB7XG5cdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHR0cnkge1xuXHRcdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5oYXNQcm9wZXJ0eURlc2NyaXB0b3JzLmhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnID0gZnVuY3Rpb24gaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcoKSB7XG5cdC8vIG5vZGUgdjAuNiBoYXMgYSBidWcgd2hlcmUgYXJyYXkgbGVuZ3RocyBjYW4gYmUgU2V0IGJ1dCBub3QgRGVmaW5lZFxuXHRpZiAoIWhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRkZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDEgfSkubGVuZ3RoICE9PSAxO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSW4gRmlyZWZveCA0LTIyLCBkZWZpbmluZyBsZW5ndGggb24gYW4gYXJyYXkgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3JpZ1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbDtcbnZhciBoYXNTeW1ib2xTaGFtID0gcmVxdWlyZSgnLi9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc05hdGl2ZVN5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCgnZm9vJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCgnYmFyJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHJldHVybiBoYXNTeW1ib2xTaGFtKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE4XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tdW5yZWFjaGFibGUtbG9vcFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMvc2hhbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNUb1N0cmluZ1RhZ1NoYW1zKCkge1xuXHRyZXR1cm4gaGFzU3ltYm9scygpICYmICEhU3ltYm9sLnRvU3RyaW5nVGFnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcblxudmFyICR0b1N0cmluZyA9IGNhbGxCb3VuZCgnT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZycpO1xuXG52YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdGlmIChoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWx1ZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gJHRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG52YXIgaXNMZWdhY3lBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHRpZiAoaXNTdGFuZGFyZEFyZ3VtZW50cyh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdCR0b1N0cmluZyh2YWx1ZSkgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHQkdG9TdHJpbmcodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBzdXBwb3J0c1N0YW5kYXJkQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMoYXJndW1lbnRzKTtcbn0oKSk7XG5cbmlzU3RhbmRhcmRBcmd1bWVudHMuaXNMZWdhY3lBcmd1bWVudHMgPSBpc0xlZ2FjeUFyZ3VtZW50czsgLy8gZm9yIHRlc3RzXG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyA/IGlzU3RhbmRhcmRBcmd1bWVudHMgOiBpc0xlZ2FjeUFyZ3VtZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgcmVmbGVjdEFwcGx5ID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QgIT09IG51bGwgJiYgUmVmbGVjdC5hcHBseTtcbnZhciBiYWRBcnJheUxpa2U7XG52YXIgaXNDYWxsYWJsZU1hcmtlcjtcbmlmICh0eXBlb2YgcmVmbGVjdEFwcGx5ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcblx0dHJ5IHtcblx0XHRiYWRBcnJheUxpa2UgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdsZW5ndGgnLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgaXNDYWxsYWJsZU1hcmtlcjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpc0NhbGxhYmxlTWFya2VyID0ge307XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcblx0XHRyZWZsZWN0QXBwbHkoZnVuY3Rpb24gKCkgeyB0aHJvdyA0MjsgfSwgbnVsbCwgYmFkQXJyYXlMaWtlKTtcblx0fSBjYXRjaCAoXykge1xuXHRcdGlmIChfICE9PSBpc0NhbGxhYmxlTWFya2VyKSB7XG5cdFx0XHRyZWZsZWN0QXBwbHkgPSBudWxsO1xuXHRcdH1cblx0fVxufSBlbHNlIHtcblx0cmVmbGVjdEFwcGx5ID0gbnVsbDtcbn1cblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzc1xcYi87XG52YXIgaXNFUzZDbGFzc0ZuID0gZnVuY3Rpb24gaXNFUzZDbGFzc0Z1bmN0aW9uKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gY29uc3RydWN0b3JSZWdleC50ZXN0KGZuU3RyKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25Ub1N0cih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgISFTeW1ib2wudG9TdHJpbmdUYWc7IC8vIGJldHRlcjogdXNlIGBoYXMtdG9zdHJpbmd0YWdgXG4vKiBnbG9iYWxzIGRvY3VtZW50OiBmYWxzZSAqL1xudmFyIGRvY3VtZW50RG90QWxsID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZG9jdW1lbnQuYWxsID09PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5hbGwgIT09IHVuZGVmaW5lZCA/IGRvY3VtZW50LmFsbCA6IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmxlY3RBcHBseVxuXHQ/IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IGRvY3VtZW50RG90QWxsKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhdmFsdWUucHJvdG90eXBlKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0dHJ5IHtcblx0XHRcdHJlZmxlY3RBcHBseSh2YWx1ZSwgbnVsbCwgYmFkQXJyYXlMaWtlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRpZiAoZSAhPT0gaXNDYWxsYWJsZU1hcmtlcikgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR9XG5cdFx0cmV0dXJuICFpc0VTNkNsYXNzRm4odmFsdWUpO1xuXHR9XG5cdDogZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gZG9jdW1lbnREb3RBbGwpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG5cdH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciBpc0ZuUmVnZXggPSAvXlxccyooPzpmdW5jdGlvbik/XFwqLztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgZ2V0R2VuZXJhdG9yRnVuYyA9IGZ1bmN0aW9uICgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHRpZiAoIWhhc1RvU3RyaW5nVGFnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gZnVuY3Rpb24qKCkge30nKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdH1cbn07XG52YXIgR2VuZXJhdG9yRnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbihmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmIChpc0ZuUmVnZXgudGVzdChmblRvU3RyLmNhbGwoZm4pKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHR2YXIgc3RyID0gdG9TdHIuY2FsbChmbik7XG5cdFx0cmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblx0fVxuXHRpZiAoIWdldFByb3RvKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICh0eXBlb2YgR2VuZXJhdG9yRnVuY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dmFyIGdlbmVyYXRvckZ1bmMgPSBnZXRHZW5lcmF0b3JGdW5jKCk7XG5cdFx0R2VuZXJhdG9yRnVuY3Rpb24gPSBnZW5lcmF0b3JGdW5jID8gZ2V0UHJvdG8oZ2VuZXJhdG9yRnVuYykgOiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZ2V0UHJvdG8oZm4pID09PSBHZW5lcmF0b3JGdW5jdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIuaXNuYW4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc05hTih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgTnVtYmVyKTtcblxuLyogaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5pc25hbiAqL1xuXG5kZWZpbmUocG9seWZpbGwsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmIChOdW1iZXIuaXNOYU4gJiYgTnVtYmVyLmlzTmFOKE5hTikgJiYgIU51bWJlci5pc05hTignYScpKSB7XG5cdFx0cmV0dXJuIE51bWJlci5pc05hTjtcblx0fVxuXHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcblxuLyogaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5pc25hbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1OdW1iZXJJc05hTigpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKE51bWJlciwgeyBpc05hTjogcG9seWZpbGwgfSwge1xuXHRcdGlzTmFOOiBmdW5jdGlvbiB0ZXN0SXNOYU4oKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG52YXIgYXZhaWxhYmxlVHlwZWRBcnJheXMgPSByZXF1aXJlKCdhdmFpbGFibGUtdHlwZWQtYXJyYXlzJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xuXG52YXIgZyA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IGdsb2JhbFRoaXM7XG52YXIgdHlwZWRBcnJheXMgPSBhdmFpbGFibGVUeXBlZEFycmF5cygpO1xuXG52YXIgJGluZGV4T2YgPSBjYWxsQm91bmQoJ0FycmF5LnByb3RvdHlwZS5pbmRleE9mJywgdHJ1ZSkgfHwgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybiBpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59O1xudmFyICRzbGljZSA9IGNhbGxCb3VuZCgnU3RyaW5nLnByb3RvdHlwZS5zbGljZScpO1xudmFyIHRvU3RyVGFncyA9IHt9O1xudmFyIGdPUEQgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9oZWxwZXJzL2dldE93blByb3BlcnR5RGVzY3JpcHRvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mOyAvLyByZXF1aXJlKCdnZXRwcm90b3R5cGVvZicpO1xuaWYgKGhhc1RvU3RyaW5nVGFnICYmIGdPUEQgJiYgZ2V0UHJvdG90eXBlT2YpIHtcblx0Zm9yRWFjaCh0eXBlZEFycmF5cywgZnVuY3Rpb24gKHR5cGVkQXJyYXkpIHtcblx0XHR2YXIgYXJyID0gbmV3IGdbdHlwZWRBcnJheV0oKTtcblx0XHRpZiAoU3ltYm9sLnRvU3RyaW5nVGFnIGluIGFycikge1xuXHRcdFx0dmFyIHByb3RvID0gZ2V0UHJvdG90eXBlT2YoYXJyKTtcblx0XHRcdHZhciBkZXNjcmlwdG9yID0gZ09QRChwcm90bywgU3ltYm9sLnRvU3RyaW5nVGFnKTtcblx0XHRcdGlmICghZGVzY3JpcHRvcikge1xuXHRcdFx0XHR2YXIgc3VwZXJQcm90byA9IGdldFByb3RvdHlwZU9mKHByb3RvKTtcblx0XHRcdFx0ZGVzY3JpcHRvciA9IGdPUEQoc3VwZXJQcm90bywgU3ltYm9sLnRvU3RyaW5nVGFnKTtcblx0XHRcdH1cblx0XHRcdHRvU3RyVGFnc1t0eXBlZEFycmF5XSA9IGRlc2NyaXB0b3IuZ2V0O1xuXHRcdH1cblx0fSk7XG59XG5cbnZhciB0cnlUeXBlZEFycmF5cyA9IGZ1bmN0aW9uIHRyeUFsbFR5cGVkQXJyYXlzKHZhbHVlKSB7XG5cdHZhciBhbnlUcnVlID0gZmFsc2U7XG5cdGZvckVhY2godG9TdHJUYWdzLCBmdW5jdGlvbiAoZ2V0dGVyLCB0eXBlZEFycmF5KSB7XG5cdFx0aWYgKCFhbnlUcnVlKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhbnlUcnVlID0gZ2V0dGVyLmNhbGwodmFsdWUpID09PSB0eXBlZEFycmF5O1xuXHRcdFx0fSBjYXRjaCAoZSkgeyAvKiovIH1cblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gYW55VHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG5cdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZyB8fCAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWx1ZSkpIHtcblx0XHR2YXIgdGFnID0gJHNsaWNlKCR0b1N0cmluZyh2YWx1ZSksIDgsIC0xKTtcblx0XHRyZXR1cm4gJGluZGV4T2YodHlwZWRBcnJheXMsIHRhZykgPiAtMTtcblx0fVxuXHRpZiAoIWdPUEQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiB0cnlUeXBlZEFycmF5cyh2YWx1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbnVtYmVySXNOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXMoYSwgYikge1xuXHRpZiAoYSA9PT0gMCAmJiBiID09PSAwKSB7XG5cdFx0cmV0dXJuIDEgLyBhID09PSAxIC8gYjtcblx0fVxuXHRpZiAoYSA9PT0gYikge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmIChudW1iZXJJc05hTihhKSAmJiBudW1iZXJJc05hTihiKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgT2JqZWN0KTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRyZXR1cm4gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbU9iamVjdElzKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRkZWZpbmUoT2JqZWN0LCB7IGlzOiBwb2x5ZmlsbCB9LCB7XG5cdFx0aXM6IGZ1bmN0aW9uIHRlc3RPYmplY3RJcygpIHtcblx0XHRcdHJldHVybiBPYmplY3QuaXMgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDdXJyZW50bHkgaW4gc3luYyB3aXRoIE5vZGUuanMgbGliL2ludGVybmFsL3V0aWwvdHlwZXMuanNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9jb21taXQvMTEyY2M3YzI3NTUxMjU0YWEyYjE3MDk4ZmI3NzQ4NjdmMDVlZDBkOVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc0FyZ3VtZW50c09iamVjdCA9IHJlcXVpcmUoJ2lzLWFyZ3VtZW50cycpO1xudmFyIGlzR2VuZXJhdG9yRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1nZW5lcmF0b3ItZnVuY3Rpb24nKTtcbnZhciB3aGljaFR5cGVkQXJyYXkgPSByZXF1aXJlKCd3aGljaC10eXBlZC1hcnJheScpO1xudmFyIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJ2lzLXR5cGVkLWFycmF5Jyk7XG5cbmZ1bmN0aW9uIHVuY3VycnlUaGlzKGYpIHtcbiAgcmV0dXJuIGYuY2FsbC5iaW5kKGYpO1xufVxuXG52YXIgQmlnSW50U3VwcG9ydGVkID0gdHlwZW9mIEJpZ0ludCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgU3ltYm9sU3VwcG9ydGVkID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciBPYmplY3RUb1N0cmluZyA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpO1xuXG52YXIgbnVtYmVyVmFsdWUgPSB1bmN1cnJ5VGhpcyhOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YpO1xudmFyIHN0cmluZ1ZhbHVlID0gdW5jdXJyeVRoaXMoU3RyaW5nLnByb3RvdHlwZS52YWx1ZU9mKTtcbnZhciBib29sZWFuVmFsdWUgPSB1bmN1cnJ5VGhpcyhCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mKTtcblxuaWYgKEJpZ0ludFN1cHBvcnRlZCkge1xuICB2YXIgYmlnSW50VmFsdWUgPSB1bmN1cnJ5VGhpcyhCaWdJbnQucHJvdG90eXBlLnZhbHVlT2YpO1xufVxuXG5pZiAoU3ltYm9sU3VwcG9ydGVkKSB7XG4gIHZhciBzeW1ib2xWYWx1ZSA9IHVuY3VycnlUaGlzKFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQm94ZWRQcmltaXRpdmUodmFsdWUsIHByb3RvdHlwZVZhbHVlT2YpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdHJ5IHtcbiAgICBwcm90b3R5cGVWYWx1ZU9mKHZhbHVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydHMuaXNBcmd1bWVudHNPYmplY3QgPSBpc0FyZ3VtZW50c09iamVjdDtcbmV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGlzR2VuZXJhdG9yRnVuY3Rpb247XG5leHBvcnRzLmlzVHlwZWRBcnJheSA9IGlzVHlwZWRBcnJheTtcblxuLy8gVGFrZW4gZnJvbSBoZXJlIGFuZCBtb2RpZmllZCBmb3IgYmV0dGVyIGJyb3dzZXIgc3VwcG9ydFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9wLWlzLXByb21pc2UvYmxvYi9jZGEzNWE1MTNiZGEwM2Y5NzdhZDVjZGUzYTA3OWQyMzdlODJkN2VmL2luZGV4LmpzXG5mdW5jdGlvbiBpc1Byb21pc2UoaW5wdXQpIHtcblx0cmV0dXJuIChcblx0XHQoXG5cdFx0XHR0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHRcdGlucHV0IGluc3RhbmNlb2YgUHJvbWlzZVxuXHRcdCkgfHxcblx0XHQoXG5cdFx0XHRpbnB1dCAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIGlucHV0LnRoZW4gPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdHR5cGVvZiBpbnB1dC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdClcblx0KTtcbn1cbmV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcpIHtcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgaXNUeXBlZEFycmF5KHZhbHVlKSB8fFxuICAgIGlzRGF0YVZpZXcodmFsdWUpXG4gICk7XG59XG5leHBvcnRzLmlzQXJyYXlCdWZmZXJWaWV3ID0gaXNBcnJheUJ1ZmZlclZpZXc7XG5cblxuZnVuY3Rpb24gaXNVaW50OEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnVWludDhBcnJheSc7XG59XG5leHBvcnRzLmlzVWludDhBcnJheSA9IGlzVWludDhBcnJheTtcblxuZnVuY3Rpb24gaXNVaW50OENsYW1wZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ1VpbnQ4Q2xhbXBlZEFycmF5Jztcbn1cbmV4cG9ydHMuaXNVaW50OENsYW1wZWRBcnJheSA9IGlzVWludDhDbGFtcGVkQXJyYXk7XG5cbmZ1bmN0aW9uIGlzVWludDE2QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdVaW50MTZBcnJheSc7XG59XG5leHBvcnRzLmlzVWludDE2QXJyYXkgPSBpc1VpbnQxNkFycmF5O1xuXG5mdW5jdGlvbiBpc1VpbnQzMkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnVWludDMyQXJyYXknO1xufVxuZXhwb3J0cy5pc1VpbnQzMkFycmF5ID0gaXNVaW50MzJBcnJheTtcblxuZnVuY3Rpb24gaXNJbnQ4QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdJbnQ4QXJyYXknO1xufVxuZXhwb3J0cy5pc0ludDhBcnJheSA9IGlzSW50OEFycmF5O1xuXG5mdW5jdGlvbiBpc0ludDE2QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdJbnQxNkFycmF5Jztcbn1cbmV4cG9ydHMuaXNJbnQxNkFycmF5ID0gaXNJbnQxNkFycmF5O1xuXG5mdW5jdGlvbiBpc0ludDMyQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdJbnQzMkFycmF5Jztcbn1cbmV4cG9ydHMuaXNJbnQzMkFycmF5ID0gaXNJbnQzMkFycmF5O1xuXG5mdW5jdGlvbiBpc0Zsb2F0MzJBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0Zsb2F0MzJBcnJheSc7XG59XG5leHBvcnRzLmlzRmxvYXQzMkFycmF5ID0gaXNGbG9hdDMyQXJyYXk7XG5cbmZ1bmN0aW9uIGlzRmxvYXQ2NEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnRmxvYXQ2NEFycmF5Jztcbn1cbmV4cG9ydHMuaXNGbG9hdDY0QXJyYXkgPSBpc0Zsb2F0NjRBcnJheTtcblxuZnVuY3Rpb24gaXNCaWdJbnQ2NEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnQmlnSW50NjRBcnJheSc7XG59XG5leHBvcnRzLmlzQmlnSW50NjRBcnJheSA9IGlzQmlnSW50NjRBcnJheTtcblxuZnVuY3Rpb24gaXNCaWdVaW50NjRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0JpZ1VpbnQ2NEFycmF5Jztcbn1cbmV4cG9ydHMuaXNCaWdVaW50NjRBcnJheSA9IGlzQmlnVWludDY0QXJyYXk7XG5cbmZ1bmN0aW9uIGlzTWFwVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgTWFwXSc7XG59XG5pc01hcFRvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzTWFwVG9TdHJpbmcobmV3IE1hcCgpKVxuKTtcblxuZnVuY3Rpb24gaXNNYXAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzTWFwVG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNNYXBUb1N0cmluZyh2YWx1ZSlcbiAgICA6IHZhbHVlIGluc3RhbmNlb2YgTWFwO1xufVxuZXhwb3J0cy5pc01hcCA9IGlzTWFwO1xuXG5mdW5jdGlvbiBpc1NldFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFNldF0nO1xufVxuaXNTZXRUb1N0cmluZy53b3JraW5nID0gKFxuICB0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc1NldFRvU3RyaW5nKG5ldyBTZXQoKSlcbik7XG5mdW5jdGlvbiBpc1NldCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNTZXRUb1N0cmluZy53b3JraW5nXG4gICAgPyBpc1NldFRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBTZXQ7XG59XG5leHBvcnRzLmlzU2V0ID0gaXNTZXQ7XG5cbmZ1bmN0aW9uIGlzV2Vha01hcFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFdlYWtNYXBdJztcbn1cbmlzV2Vha01hcFRvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc1dlYWtNYXBUb1N0cmluZyhuZXcgV2Vha01hcCgpKVxuKTtcbmZ1bmN0aW9uIGlzV2Vha01hcCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzV2Vha01hcFRvU3RyaW5nLndvcmtpbmdcbiAgICA/IGlzV2Vha01hcFRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBXZWFrTWFwO1xufVxuZXhwb3J0cy5pc1dlYWtNYXAgPSBpc1dlYWtNYXA7XG5cbmZ1bmN0aW9uIGlzV2Vha1NldFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFdlYWtTZXRdJztcbn1cbmlzV2Vha1NldFRvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBXZWFrU2V0ICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc1dlYWtTZXRUb1N0cmluZyhuZXcgV2Vha1NldCgpKVxuKTtcbmZ1bmN0aW9uIGlzV2Vha1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNXZWFrU2V0VG9TdHJpbmcodmFsdWUpO1xufVxuZXhwb3J0cy5pc1dlYWtTZXQgPSBpc1dlYWtTZXQ7XG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuaXNBcnJheUJ1ZmZlclRvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgaXNBcnJheUJ1ZmZlclRvU3RyaW5nKG5ldyBBcnJheUJ1ZmZlcigpKVxuKTtcbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNBcnJheUJ1ZmZlclRvU3RyaW5nLndvcmtpbmdcbiAgICA/IGlzQXJyYXlCdWZmZXJUb1N0cmluZyh2YWx1ZSlcbiAgICA6IHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7XG59XG5leHBvcnRzLmlzQXJyYXlCdWZmZXIgPSBpc0FycmF5QnVmZmVyO1xuXG5mdW5jdGlvbiBpc0RhdGFWaWV3VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0YVZpZXddJztcbn1cbmlzRGF0YVZpZXdUb1N0cmluZy53b3JraW5nID0gKFxuICB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBEYXRhVmlldyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgaXNEYXRhVmlld1RvU3RyaW5nKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSksIDAsIDEpKVxuKTtcbmZ1bmN0aW9uIGlzRGF0YVZpZXcodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNEYXRhVmlld1RvU3RyaW5nLndvcmtpbmdcbiAgICA/IGlzRGF0YVZpZXdUb1N0cmluZyh2YWx1ZSlcbiAgICA6IHZhbHVlIGluc3RhbmNlb2YgRGF0YVZpZXc7XG59XG5leHBvcnRzLmlzRGF0YVZpZXcgPSBpc0RhdGFWaWV3O1xuXG4vLyBTdG9yZSBhIGNvcHkgb2YgU2hhcmVkQXJyYXlCdWZmZXIgaW4gY2FzZSBpdCdzIGRlbGV0ZWQgZWxzZXdoZXJlXG52YXIgU2hhcmVkQXJyYXlCdWZmZXJDb3B5ID0gdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyA/IFNoYXJlZEFycmF5QnVmZmVyIDogdW5kZWZpbmVkO1xuZnVuY3Rpb24gaXNTaGFyZWRBcnJheUJ1ZmZlclRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFNoYXJlZEFycmF5QnVmZmVyXSc7XG59XG5mdW5jdGlvbiBpc1NoYXJlZEFycmF5QnVmZmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXJDb3B5ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaXNTaGFyZWRBcnJheUJ1ZmZlclRvU3RyaW5nLndvcmtpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNTaGFyZWRBcnJheUJ1ZmZlclRvU3RyaW5nLndvcmtpbmcgPSBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcobmV3IFNoYXJlZEFycmF5QnVmZmVyQ29weSgpKTtcbiAgfVxuXG4gIHJldHVybiBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNTaGFyZWRBcnJheUJ1ZmZlclRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBTaGFyZWRBcnJheUJ1ZmZlckNvcHk7XG59XG5leHBvcnRzLmlzU2hhcmVkQXJyYXlCdWZmZXIgPSBpc1NoYXJlZEFycmF5QnVmZmVyO1xuXG5mdW5jdGlvbiBpc0FzeW5jRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nO1xufVxuZXhwb3J0cy5pc0FzeW5jRnVuY3Rpb24gPSBpc0FzeW5jRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzTWFwSXRlcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgTWFwIEl0ZXJhdG9yXSc7XG59XG5leHBvcnRzLmlzTWFwSXRlcmF0b3IgPSBpc01hcEl0ZXJhdG9yO1xuXG5mdW5jdGlvbiBpc1NldEl0ZXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFNldCBJdGVyYXRvcl0nO1xufVxuZXhwb3J0cy5pc1NldEl0ZXJhdG9yID0gaXNTZXRJdGVyYXRvcjtcblxuZnVuY3Rpb24gaXNHZW5lcmF0b3JPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yXSc7XG59XG5leHBvcnRzLmlzR2VuZXJhdG9yT2JqZWN0ID0gaXNHZW5lcmF0b3JPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzV2ViQXNzZW1ibHlDb21waWxlZE1vZHVsZSh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBXZWJBc3NlbWJseS5Nb2R1bGVdJztcbn1cbmV4cG9ydHMuaXNXZWJBc3NlbWJseUNvbXBpbGVkTW9kdWxlID0gaXNXZWJBc3NlbWJseUNvbXBpbGVkTW9kdWxlO1xuXG5mdW5jdGlvbiBpc051bWJlck9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgbnVtYmVyVmFsdWUpO1xufVxuZXhwb3J0cy5pc051bWJlck9iamVjdCA9IGlzTnVtYmVyT2JqZWN0O1xuXG5mdW5jdGlvbiBpc1N0cmluZ09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgc3RyaW5nVmFsdWUpO1xufVxuZXhwb3J0cy5pc1N0cmluZ09iamVjdCA9IGlzU3RyaW5nT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNoZWNrQm94ZWRQcmltaXRpdmUodmFsdWUsIGJvb2xlYW5WYWx1ZSk7XG59XG5leHBvcnRzLmlzQm9vbGVhbk9iamVjdCA9IGlzQm9vbGVhbk9iamVjdDtcblxuZnVuY3Rpb24gaXNCaWdJbnRPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIEJpZ0ludFN1cHBvcnRlZCAmJiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBiaWdJbnRWYWx1ZSk7XG59XG5leHBvcnRzLmlzQmlnSW50T2JqZWN0ID0gaXNCaWdJbnRPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBTeW1ib2xTdXBwb3J0ZWQgJiYgY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgc3ltYm9sVmFsdWUpO1xufVxuZXhwb3J0cy5pc1N5bWJvbE9iamVjdCA9IGlzU3ltYm9sT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0JveGVkUHJpbWl0aXZlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgaXNOdW1iZXJPYmplY3QodmFsdWUpIHx8XG4gICAgaXNTdHJpbmdPYmplY3QodmFsdWUpIHx8XG4gICAgaXNCb29sZWFuT2JqZWN0KHZhbHVlKSB8fFxuICAgIGlzQmlnSW50T2JqZWN0KHZhbHVlKSB8fFxuICAgIGlzU3ltYm9sT2JqZWN0KHZhbHVlKVxuICApO1xufVxuZXhwb3J0cy5pc0JveGVkUHJpbWl0aXZlID0gaXNCb3hlZFByaW1pdGl2ZTtcblxuZnVuY3Rpb24gaXNBbnlBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIChcbiAgICBpc0FycmF5QnVmZmVyKHZhbHVlKSB8fFxuICAgIGlzU2hhcmVkQXJyYXlCdWZmZXIodmFsdWUpXG4gICk7XG59XG5leHBvcnRzLmlzQW55QXJyYXlCdWZmZXIgPSBpc0FueUFycmF5QnVmZmVyO1xuXG5bJ2lzUHJveHknLCAnaXNFeHRlcm5hbCcsICdpc01vZHVsZU5hbWVzcGFjZU9iamVjdCddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBtZXRob2QsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgJyBpcyBub3Qgc3VwcG9ydGVkIGluIHVzZXJsYW5kJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0VudlJlZ2V4ID0gL14kLztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfREVCVUcpIHtcbiAgdmFyIGRlYnVnRW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRztcbiAgZGVidWdFbnYgPSBkZWJ1Z0Vudi5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKz8uXS9nLCAnXFxcXCQmJylcbiAgICAucmVwbGFjZSgvXFwqL2csICcuKicpXG4gICAgLnJlcGxhY2UoLywvZywgJyR8XicpXG4gICAgLnRvVXBwZXJDYXNlKCk7XG4gIGRlYnVnRW52UmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIGRlYnVnRW52ICsgJyQnLCAnaScpO1xufVxuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChkZWJ1Z0VudlJlZ2V4LnRlc3Qoc2V0KSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5leHBvcnRzLnR5cGVzID0gcmVxdWlyZSgnLi9zdXBwb3J0L3R5cGVzJyk7XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5leHBvcnRzLnR5cGVzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuZXhwb3J0cy50eXBlcy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcbmV4cG9ydHMudHlwZXMuaXNOYXRpdmVFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYi5iaW5kKG51bGwsIG51bGwsIHJldCkpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQuYmluZChudWxsLCByZWosIGNiKSkgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbnZhciBhdmFpbGFibGVUeXBlZEFycmF5cyA9IHJlcXVpcmUoJ2F2YWlsYWJsZS10eXBlZC1hcnJheXMnKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG5cbnZhciBnID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogZ2xvYmFsVGhpcztcbnZhciB0eXBlZEFycmF5cyA9IGF2YWlsYWJsZVR5cGVkQXJyYXlzKCk7XG5cbnZhciAkc2xpY2UgPSBjYWxsQm91bmQoJ1N0cmluZy5wcm90b3R5cGUuc2xpY2UnKTtcbnZhciB0b1N0clRhZ3MgPSB7fTtcbnZhciBnT1BEID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvaGVscGVycy9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjsgLy8gcmVxdWlyZSgnZ2V0cHJvdG90eXBlb2YnKTtcbmlmIChoYXNUb1N0cmluZ1RhZyAmJiBnT1BEICYmIGdldFByb3RvdHlwZU9mKSB7XG5cdGZvckVhY2godHlwZWRBcnJheXMsIGZ1bmN0aW9uICh0eXBlZEFycmF5KSB7XG5cdFx0aWYgKHR5cGVvZiBnW3R5cGVkQXJyYXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2YXIgYXJyID0gbmV3IGdbdHlwZWRBcnJheV0oKTtcblx0XHRcdGlmIChTeW1ib2wudG9TdHJpbmdUYWcgaW4gYXJyKSB7XG5cdFx0XHRcdHZhciBwcm90byA9IGdldFByb3RvdHlwZU9mKGFycik7XG5cdFx0XHRcdHZhciBkZXNjcmlwdG9yID0gZ09QRChwcm90bywgU3ltYm9sLnRvU3RyaW5nVGFnKTtcblx0XHRcdFx0aWYgKCFkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0dmFyIHN1cGVyUHJvdG8gPSBnZXRQcm90b3R5cGVPZihwcm90byk7XG5cdFx0XHRcdFx0ZGVzY3JpcHRvciA9IGdPUEQoc3VwZXJQcm90bywgU3ltYm9sLnRvU3RyaW5nVGFnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0b1N0clRhZ3NbdHlwZWRBcnJheV0gPSBkZXNjcmlwdG9yLmdldDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG52YXIgdHJ5VHlwZWRBcnJheXMgPSBmdW5jdGlvbiB0cnlBbGxUeXBlZEFycmF5cyh2YWx1ZSkge1xuXHR2YXIgZm91bmROYW1lID0gZmFsc2U7XG5cdGZvckVhY2godG9TdHJUYWdzLCBmdW5jdGlvbiAoZ2V0dGVyLCB0eXBlZEFycmF5KSB7XG5cdFx0aWYgKCFmb3VuZE5hbWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBuYW1lID0gZ2V0dGVyLmNhbGwodmFsdWUpO1xuXHRcdFx0XHRpZiAobmFtZSA9PT0gdHlwZWRBcnJheSkge1xuXHRcdFx0XHRcdGZvdW5kTmFtZSA9IG5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGZvdW5kTmFtZTtcbn07XG5cbnZhciBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCdpcy10eXBlZC1hcnJheScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkge1xuXHRpZiAoIWlzVHlwZWRBcnJheSh2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcgfHwgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpKSB7IHJldHVybiAkc2xpY2UoJHRvU3RyaW5nKHZhbHVlKSwgOCwgLTEpOyB9XG5cdHJldHVybiB0cnlUeXBlZEFycmF5cyh2YWx1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcG9zc2libGVOYW1lcyA9IFtcblx0J0JpZ0ludDY0QXJyYXknLFxuXHQnQmlnVWludDY0QXJyYXknLFxuXHQnRmxvYXQzMkFycmF5Jyxcblx0J0Zsb2F0NjRBcnJheScsXG5cdCdJbnQxNkFycmF5Jyxcblx0J0ludDMyQXJyYXknLFxuXHQnSW50OEFycmF5Jyxcblx0J1VpbnQxNkFycmF5Jyxcblx0J1VpbnQzMkFycmF5Jyxcblx0J1VpbnQ4QXJyYXknLFxuXHQnVWludDhDbGFtcGVkQXJyYXknXG5dO1xuXG52YXIgZyA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IGdsb2JhbFRoaXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXZhaWxhYmxlVHlwZWRBcnJheXMoKSB7XG5cdHZhciBvdXQgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwb3NzaWJsZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBnW3Bvc3NpYmxlTmFtZXNbaV1dID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvdXRbb3V0Lmxlbmd0aF0gPSBwb3NzaWJsZU5hbWVzW2ldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb3V0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRnT1BEID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciUnLCB0cnVlKTtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKFtdLCAnbGVuZ3RoJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBnT1BEXG5cdFx0JGdPUEQgPSBudWxsO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJGdPUEQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMic7XG5cbi8qKlxuICogQWRhcHRlZCBmcm9tIFJlYWN0OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc2hhcmVkL2Zvcm1hdFByb2RFcnJvck1lc3NhZ2UuanNcbiAqXG4gKiBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCB0aHJvdyBlcnJvciBjYWxscy4gVGhlc2UgbWVzc2FnZXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGVycm9yIGNvZGVzXG4gKiBkdXJpbmcgYnVpbGQuXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICovXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgcmV0dXJuIFwiTWluaWZpZWQgUmVkdXggZXJyb3IgI1wiICsgY29kZSArIFwiOyB2aXNpdCBodHRwczovL3JlZHV4LmpzLm9yZy9FcnJvcnM/Y29kZT1cIiArIGNvZGUgKyBcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciBcIiArICd1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzLiAnO1xufVxuXG4vLyBJbmxpbmVkIHZlcnNpb24gb2YgdGhlIGBzeW1ib2wtb2JzZXJ2YWJsZWAgcG9seWZpbGxcbnZhciAkJG9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJztcbn0pKCk7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG59O1xuXG52YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUkVQTEFDRTogXCJAQHJlZHV4L1JFUExBQ0VcIiArIHJhbmRvbVN0cmluZygpLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogZnVuY3Rpb24gUFJPQkVfVU5LTk9XTl9BQ1RJT04oKSB7XG4gICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vLyBJbmxpbmVkIC8gc2hvcnRlbmVkIHZlcnNpb24gb2YgYGtpbmRPZmAgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9raW5kLW9mXG5mdW5jdGlvbiBtaW5pS2luZE9mKHZhbCkge1xuICBpZiAodmFsID09PSB2b2lkIDApIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzeW1ib2wnOlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICBpZiAoaXNFcnJvcih2YWwpKSByZXR1cm4gJ2Vycm9yJztcbiAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9IGN0b3JOYW1lKHZhbCk7XG5cbiAgc3dpdGNoIChjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgICBjYXNlICdTeW1ib2wnOlxuICAgIGNhc2UgJ1Byb21pc2UnOlxuICAgIGNhc2UgJ1dlYWtNYXAnOlxuICAgIGNhc2UgJ1dlYWtTZXQnOlxuICAgIGNhc2UgJ01hcCc6XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XG4gIH0gLy8gb3RoZXJcblxuXG4gIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiB2YWwubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLmdldERhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIHZhciB0eXBlT2ZWYWwgPSB0eXBlb2YgdmFsO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdHlwZU9mVmFsID0gbWluaUtpbmRPZih2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVPZlZhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBgY29uZmlndXJlU3RvcmVgIG1ldGhvZFxuICogb2YgdGhlIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWAuXG4gKlxuICogUmVkdXggVG9vbGtpdCBpcyBvdXIgcmVjb21tZW5kZWQgYXBwcm9hY2ggZm9yIHdyaXRpbmcgUmVkdXggbG9naWMgdG9kYXksXG4gKiBpbmNsdWRpbmcgc3RvcmUgc2V0dXAsIHJlZHVjZXJzLCBkYXRhIGZldGNoaW5nLCBhbmQgbW9yZS5cbiAqXG4gKiAqKkZvciBtb3JlIGRldGFpbHMsIHBsZWFzZSByZWFkIHRoaXMgUmVkdXggZG9jcyBwYWdlOioqXG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBgY29uZmlndXJlU3RvcmVgIGZyb20gUmVkdXggVG9vbGtpdCBpcyBhbiBpbXByb3ZlZCB2ZXJzaW9uIG9mIGBjcmVhdGVTdG9yZWAgdGhhdFxuICogc2ltcGxpZmllcyBzZXR1cCBhbmQgaGVscHMgYXZvaWQgY29tbW9uIGJ1Z3MuXG4gKlxuICogWW91IHNob3VsZCBub3QgYmUgdXNpbmcgdGhlIGByZWR1eGAgY29yZSBwYWNrYWdlIGJ5IGl0c2VsZiB0b2RheSwgZXhjZXB0IGZvciBsZWFybmluZyBwdXJwb3Nlcy5cbiAqIFRoZSBgY3JlYXRlU3RvcmVgIG1ldGhvZCBmcm9tIHRoZSBjb3JlIGByZWR1eGAgcGFja2FnZSB3aWxsIG5vdCBiZSByZW1vdmVkLCBidXQgd2UgZW5jb3VyYWdlXG4gKiBhbGwgdXNlcnMgdG8gbWlncmF0ZSB0byB1c2luZyBSZWR1eCBUb29sa2l0IGZvciBhbGwgUmVkdXggY29kZS5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgYGNyZWF0ZVN0b3JlYCB3aXRob3V0IHRoaXMgdmlzdWFsIGRlcHJlY2F0aW9uIHdhcm5pbmcsIHVzZVxuICogdGhlIGBsZWdhY3lfY3JlYXRlU3RvcmVgIGltcG9ydCBpbnN0ZWFkOlxuICpcbiAqIGBpbXBvcnQgeyBsZWdhY3lfY3JlYXRlU3RvcmUgYXMgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J2BcbiAqXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDApIDogJ0l0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvICcgKyAnY3JlYXRlU3RvcmUoKS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkLCBjb21wb3NlIHRoZW0gJyArICd0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI2NyZWF0aW5nLWEtc3RvcmUtd2l0aC1lbmhhbmNlcnMgZm9yIGFuIGV4YW1wbGUuJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxKSA6IFwiRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YoZW5oYW5jZXIpICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiBcIkV4cGVjdGVkIHRoZSByb290IHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihyZWR1Y2VyKSArIFwiJ1wiKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMykgOiAnWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuICcgKyAnUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg0KSA6IFwiRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobGlzdGVuZXIpICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg1KSA6ICdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDYpIDogJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzID0gbnVsbDtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDcpIDogXCJBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gSW5zdGVhZCwgdGhlIGFjdHVhbCB0eXBlIHdhczogJ1wiICsga2luZE9mKGFjdGlvbikgKyBcIicuIFlvdSBtYXkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSB0byB5b3VyIHN0b3JlIHNldHVwIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBvdGhlciB2YWx1ZXMsIHN1Y2ggYXMgJ3JlZHV4LXRodW5rJyB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgZnVuY3Rpb25zLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjbWlkZGxld2FyZSBhbmQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTYtYXN5bmMtbG9naWMjdXNpbmctdGhlLXJlZHV4LXRodW5rLW1pZGRsZXdhcmUgZm9yIGV4YW1wbGVzLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOCkgOiAnQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiBZb3UgbWF5IGhhdmUgbWlzc3BlbGxlZCBhbiBhY3Rpb24gdHlwZSBzdHJpbmcgY29uc3RhbnQuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDkpIDogJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMCkgOiBcIkV4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKG5leHRSZWR1Y2VyKSk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjsgLy8gVGhpcyBhY3Rpb24gaGFzIGEgc2ltaWxpYXIgZWZmZWN0IHRvIEFjdGlvblR5cGVzLklOSVQuXG4gICAgLy8gQW55IHJlZHVjZXJzIHRoYXQgZXhpc3RlZCBpbiBib3RoIHRoZSBuZXcgYW5kIG9sZCByb290UmVkdWNlclxuICAgIC8vIHdpbGwgcmVjZWl2ZSB0aGUgcHJldmlvdXMgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gICAgLy8gdGhlIG5ldyBzdGF0ZSB0cmVlIHdpdGggYW55IHJlbGV2YW50IGRhdGEgZnJvbSB0aGUgb2xkIG9uZS5cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDExKSA6IFwiRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihvYnNlcnZlcikgKyBcIidcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfSAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gIH0pO1xuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqXG4gKiAqKldlIHJlY29tbWVuZCB1c2luZyBgY29uZmlndXJlU3RvcmVgIGZyb20gdGhlXG4gKiBgQHJlZHV4anMvdG9vbGtpdGAgcGFja2FnZSoqLCB3aGljaCByZXBsYWNlcyBgY3JlYXRlU3RvcmVgOlxuICogKipodHRwczovL3JlZHV4LmpzLm9yZy9pbnRyb2R1Y3Rpb24vd2h5LXJ0ay1pcy1yZWR1eC10b2RheSoqXG4gKlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5cbnZhciBsZWdhY3lfY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBcIlRoZSBcIiArIGFyZ3VtZW50TmFtZSArIFwiIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXFxcIlwiICsga2luZE9mKGlucHV0U3RhdGUpICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTIpIDogXCJUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBcIiArIFwiSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IFwiICsgXCJleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IFwiICsgXCJub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCBcIiArIFwieW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTMpIDogXCJUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgJ1wiICsgQWN0aW9uVHlwZXMuSU5JVCArIFwiJyBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNCkgOiBcIldoZW4gY2FsbGVkIHdpdGggYW4gYWN0aW9uIG9mIHR5cGUgXCIgKyAoYWN0aW9uVHlwZSA/IFwiXFxcIlwiICsgU3RyaW5nKGFjdGlvblR5cGUpICsgXCJcXFwiXCIgOiAnKHVua25vd24gdHlwZSknKSArIFwiLCB0aGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIF9rZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBcIiArIFwiVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBcIiArIFwiSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHN0YXRlKS5sZW5ndGg7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYW4gYWN0aW9uIGNyZWF0b3IgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGRpc3BhdGNoIHdyYXBwZWQgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTYpIDogXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGJ1dCBpbnN0ZWFkIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YoYWN0aW9uQ3JlYXRvcnMpICsgXCInLiBcIiArIFwiRGlkIHlvdSB3cml0ZSBcXFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiIGluc3RlYWQgb2YgXFxcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiP1wiKTtcbiAgfVxuXG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE1KSA6ICdEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiAnICsgJ090aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC4nKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdG9yZSksIHt9LCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qXG4gKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4gKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIi4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIHNldHRpbmcgbW9kZSB0byBwcm9kdWN0aW9uIGluIHdlYnBhY2sgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uY2VwdHMvbW9kZS8pICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgQWN0aW9uVHlwZXMgYXMgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcywgYXBwbHlNaWRkbGV3YXJlLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUsIGxlZ2FjeV9jcmVhdGVTdG9yZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcblxuZnVuY3Rpb24gZXh0ZW5zaW9uQ29tcG9zZVN0dWIoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChfdHlwZW9mKGZ1bmNzWzBdKSA9PT0gJ29iamVjdCcpIHJldHVybiBjb21wb3NlO1xuICByZXR1cm4gY29tcG9zZS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShmdW5jcykpO1xufVxuXG5leHBvcnQgdmFyIGNvbXBvc2VXaXRoRGV2VG9vbHMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGV4dGVuc2lvbkNvbXBvc2VTdHViO1xuZXhwb3J0IHZhciBkZXZUb29sc0VuaGFuY2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChub29wKSB7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH07XG59O1xuZXhwb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyBhcyBjb21wb3NlV2l0aERldlRvb2xzRGV2ZWxvcG1lbnRPbmx5LCBkZXZUb29sc0VuaGFuY2VyIGFzIGRldlRvb2xzRW5oYW5jZXJEZXZlbG9wbWVudE9ubHkgfSBmcm9tICcuL2RldmVsb3BtZW50T25seSc7XG5leHBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIGFzIGNvbXBvc2VXaXRoRGV2VG9vbHNMb2dPbmx5LCBkZXZUb29sc0VuaGFuY2VyIGFzIGRldlRvb2xzRW5oYW5jZXJMb2dPbmx5IH0gZnJvbSAnLi9sb2dPbmx5JztcbmV4cG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgYXMgY29tcG9zZVdpdGhEZXZUb29sc0xvZ09ubHlJblByb2R1Y3Rpb24sIGRldlRvb2xzRW5oYW5jZXIgYXMgZGV2VG9vbHNFbmhhbmNlckxvZ09ubHlJblByb2R1Y3Rpb24gfSBmcm9tICcuL2xvZ09ubHlJblByb2R1Y3Rpb24nOyIsIlxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ0ByZWR1eC1kZXZ0b29scy9leHRlbnNpb24nO1xuXG5mdW5jdGlvbiBjb3VudGVyKHN0YXRlID0gMCwgYWN0aW9uOmFueSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnSU5DUkVNRU5UJzpcbiAgICAgIGNvbnNvbGUubG9nKCd1cCcpXG4gICAgICByZXR1cm4gc3RhdGUgKyAxXG4gICAgY2FzZSAnREVDUkVNRU5UJzpcbiAgICAgIGNvbnNvbGUubG9nKCdkb3duJylcbiAgICAgIHJldHVybiBzdGF0ZSAtIDFcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nZ2VyKHsgZ2V0U3RhdGUgfTogYW55KSB7XG4gIHJldHVybiAobmV4dDogYW55KSA9PiAoYWN0aW9uOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnd2lsbCBkaXNwYXRjaCcsIGFjdGlvbik7XG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXh0KGFjdGlvbik7XG4gICAgY29uc29sZS5sb2coJ3N0YXRlIGFmdGVyIGRpc3BhdGNoJywgZ2V0U3RhdGUoKSk7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvdW50ZXIsXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoXG4gICAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcbiAgKVxuKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY3JlbWVudCcpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnSU5DUkVNRU5UJyk7XG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UJyB9KVxuICB9KVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjcmVtZW50JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdERUNSRU1FTlQnKTtcbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdERUNSRU1FTlQnIH0pXG4gIH0pOyJdLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9yZXF1aXJlJGNvZGVzIiwiY29kZXMiLCJFUlJfQU1CSUdVT1VTX0FSR1VNRU5UIiwiRVJSX0lOVkFMSURfQVJHX1RZUEUiLCJFUlJfSU5WQUxJRF9BUkdfVkFMVUUiLCJFUlJfSU5WQUxJRF9SRVRVUk5fVkFMVUUiLCJFUlJfTUlTU0lOR19BUkdTIiwiQXNzZXJ0aW9uRXJyb3IiLCJpbnNwZWN0IiwiX3JlcXVpcmUkdHlwZXMiLCJpc1Byb21pc2UiLCJpc1JlZ0V4cCIsIm9iamVjdEFzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsIm9iamVjdElzIiwiaXMiLCJNYXAiLCJpc0RlZXBFcXVhbCIsImlzRGVlcFN0cmljdEVxdWFsIiwibGF6eUxvYWRDb21wYXJpc29uIiwiY29tcGFyaXNvbiIsIndhcm5lZCIsImFzc2VydCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvayIsIk5PX0VYQ0VQVElPTl9TRU5USU5FTCIsImlubmVyRmFpbCIsIm1lc3NhZ2UiLCJFcnJvciIsImlubmVyT2siLCJmbiIsImFyZ0xlbiIsInZhbHVlIiwiZ2VuZXJhdGVkTWVzc2FnZSIsImVyciIsImFjdHVhbCIsImV4cGVjdGVkIiwib3BlcmF0b3IiLCJzdGFja1N0YXJ0Rm4iLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwiY29uY2F0IiwiZmFpbCIsImFyZ3NMZW4iLCJpbnRlcm5hbE1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJ3YXJuIiwicHJvY2VzcyIsImVtaXRXYXJuaW5nIiwiY29uc29sZSIsImJpbmQiLCJlcnJBcmdzIiwiZXF1YWwiLCJub3RFcXVhbCIsImRlZXBFcXVhbCIsIm5vdERlZXBFcXVhbCIsImRlZXBTdHJpY3RFcXVhbCIsIm5vdERlZXBTdHJpY3RFcXVhbCIsInN0cmljdEVxdWFsIiwibm90U3RyaWN0RXF1YWwiLCJDb21wYXJpc29uIiwia2V5cyIsIl90aGlzIiwidGhpcyIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY2xhc3NDYWxsQ2hlY2siLCJmb3JFYWNoIiwia2V5IiwidGVzdCIsImNvbXBhcmVFeGNlcHRpb25LZXkiLCJhIiwiYiIsIm5hbWUiLCJleHBlY3RlZEV4Y2VwdGlvbiIsIm1zZyIsInB1c2giLCJpc1Byb3RvdHlwZU9mIiwiY2FsbCIsImdldEFjdHVhbCIsImUiLCJjaGVja0lzUHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsIndhaXRGb3JBY3R1YWwiLCJwcm9taXNlRm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc3VsdFByb21pc2UiLCJleHBlY3RzRXJyb3IiLCJlcnJvciIsImRldGFpbHMiLCJmblR5cGUiLCJleHBlY3RzTm9FcnJvciIsInN0cmljdCIsIl9sZW42IiwiX2tleTYiLCJ0aHJvd3MiLCJfbGVuMiIsIl9rZXkyIiwicmVqZWN0cyIsIl9sZW4zIiwiX2tleTMiLCJyZXN1bHQiLCJkb2VzTm90VGhyb3ciLCJfbGVuNCIsIl9rZXk0IiwiZG9lc05vdFJlamVjdCIsIl9sZW41IiwiX2tleTUiLCJpZkVycm9yIiwibmV3RXJyIiwib3JpZ1N0YWNrIiwic3RhY2siLCJ0bXAyIiwic3BsaXQiLCJzaGlmdCIsInRtcDEiLCJpIiwicG9zIiwiaW5kZXhPZiIsInNsaWNlIiwiam9pbiIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiQ2xhc3MiLCJfY2FjaGUiLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJoYXMiLCJnZXQiLCJzZXQiLCJXcmFwcGVyIiwiX2NvbnN0cnVjdCIsIl9nZXRQcm90b3R5cGVPZiIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwiUGFyZW50IiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImdldFByb3RvdHlwZU9mIiwiZW5kc1dpdGgiLCJzdHIiLCJzZWFyY2giLCJ0aGlzX2xlbiIsInN1YnN0cmluZyIsImJsdWUiLCJncmVlbiIsInJlZCIsIndoaXRlIiwia1JlYWRhYmxlT3BlcmF0b3IiLCJzdHJpY3RFcXVhbE9iamVjdCIsIm5vdFN0cmljdEVxdWFsT2JqZWN0Iiwibm90SWRlbnRpY2FsIiwiY29weUVycm9yIiwic291cmNlIiwiaW5zcGVjdFZhbHVlIiwidmFsIiwiY29tcGFjdCIsImN1c3RvbUluc3BlY3QiLCJkZXB0aCIsIm1heEFycmF5TGVuZ3RoIiwiSW5maW5pdHkiLCJzaG93SGlkZGVuIiwiYnJlYWtMZW5ndGgiLCJzaG93UHJveHkiLCJzb3J0ZWQiLCJnZXR0ZXJzIiwiY3JlYXRlRXJyRGlmZiIsIm90aGVyIiwicmVzIiwibGFzdFBvcyIsImVuZCIsInNraXBwZWQiLCJhY3R1YWxJbnNwZWN0ZWQiLCJhY3R1YWxMaW5lcyIsImV4cGVjdGVkTGluZXMiLCJpbmRpY2F0b3IiLCJpbnB1dExlbmd0aCIsInN0ZGVyciIsImlzVFRZIiwiY29sdW1ucyIsImNvdW50IiwiTWF0aCIsImZsb29yIiwibWF4Q291bnQiLCJsb2ciLCJyZXBlYXQiLCJwb3AiLCJtYXhMaW5lcyIsIm1heCIsIl9hY3R1YWxMaW5lcyIsInByaW50ZWRMaW5lcyIsInNraXBwZWRNc2ciLCJjdXIiLCJleHBlY3RlZExpbmUiLCJhY3R1YWxMaW5lIiwiZGl2ZXJnaW5nTGluZXMiLCJfRXJyb3IiLCJvcHRpb25zIiwibGltaXQiLCJzdGFja1RyYWNlTGltaXQiLCJTdHJpbmciLCJnZXRDb2xvckRlcHRoIiwiYmFzZSIsIl9yZXMiLCJrbm93bk9wZXJhdG9ycyIsImNvZGUiLCJjYXB0dXJlU3RhY2tUcmFjZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIl9pbmhlcml0cyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jcmVhdGVDbGFzcyIsImN1c3RvbSIsInJlY3Vyc2VUaW1lcyIsImN0eCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwidXRpbCIsImNyZWF0ZUVycm9yVHlwZSIsIkJhc2UiLCJOb2RlRXJyb3IiLCJfQmFzZSIsImFyZzEiLCJhcmcyIiwiYXJnMyIsImdldE1lc3NhZ2UiLCJvbmVPZiIsInRoaW5nIiwiaXNBcnJheSIsImxlbiIsIm1hcCIsImRldGVybWluZXIiLCJzdWJzdHIiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsInR5cGUiLCJzdGFydCIsImluY2x1ZGVzIiwicmVhc29uIiwiaW5zcGVjdGVkIiwiUmFuZ2VFcnJvciIsImlucHV0IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwiX3MiLCJfaSIsIm5leHQiLCJkb25lIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsInJlZ2V4RmxhZ3NTdXBwb3J0ZWQiLCJmbGFncyIsImFycmF5RnJvbVNldCIsImFycmF5IiwiYXJyYXlGcm9tTWFwIiwib2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzIiwibnVtYmVySXNOYU4iLCJOdW1iZXIiLCJpc05hTiIsInVuY3VycnlUaGlzIiwiZiIsImhhc093blByb3BlcnR5IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJvYmplY3RUb1N0cmluZyIsImlzQW55QXJyYXlCdWZmZXIiLCJpc0FycmF5QnVmZmVyVmlldyIsImlzRGF0ZSIsImlzTWFwIiwiaXNTZXQiLCJpc05hdGl2ZUVycm9yIiwiaXNCb3hlZFByaW1pdGl2ZSIsImlzTnVtYmVyT2JqZWN0IiwiaXNTdHJpbmdPYmplY3QiLCJpc0Jvb2xlYW5PYmplY3QiLCJpc0JpZ0ludE9iamVjdCIsImlzU3ltYm9sT2JqZWN0IiwiaXNGbG9hdDMyQXJyYXkiLCJpc0Zsb2F0NjRBcnJheSIsImlzTm9uSW5kZXgiLCJjaGFyQ29kZUF0IiwicG93IiwiZ2V0T3duTm9uSW5kZXhQcm9wZXJ0aWVzIiwiY29tcGFyZSIsIngiLCJ5IiwibWluIiwiaW5uZXJEZWVwRXF1YWwiLCJ2YWwxIiwidmFsMiIsIm1lbW9zIiwidmFsMVRhZyIsImtleXMxIiwia2V5czIiLCJrZXlDaGVjayIsImdldFRpbWUiLCJSZWdFeHAiLCJhcmVTaW1pbGFyUmVnRXhwcyIsImJ5dGVMZW5ndGgiLCJVaW50OEFycmF5IiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImFyZVNpbWlsYXJUeXBlZEFycmF5cyIsIm9mZnNldCIsImFyZVNpbWlsYXJGbG9hdEFycmF5cyIsIl9rZXlzIiwiX2tleXMyIiwic2l6ZSIsImJ1ZjEiLCJidWYyIiwiYXJlRXF1YWxBcnJheUJ1ZmZlcnMiLCJ2YWx1ZU9mIiwiQm9vbGVhbiIsIkJpZ0ludCIsImlzRXF1YWxCb3hlZFByaW1pdGl2ZSIsImdldEVudW1lcmFibGVzIiwiayIsIml0ZXJhdGlvblR5cGUiLCJhS2V5cyIsImJLZXlzIiwic3ltYm9sS2V5c0EiLCJzeW1ib2xLZXlzQiIsIl9zeW1ib2xLZXlzQiIsInBvc2l0aW9uIiwidmFsMk1lbW9BIiwidmFsMk1lbW9CIiwiYXJlRXEiLCJvYmpFcXVpdiIsImRlbGV0ZSIsInNldEhhc0VxdWFsRWxlbWVudCIsIm1lbW8iLCJzZXRWYWx1ZXMiLCJmaW5kTG9vc2VNYXRjaGluZ1ByaW1pdGl2ZXMiLCJwcmltIiwic2V0TWlnaHRIYXZlTG9vc2VQcmltIiwiYWx0VmFsdWUiLCJtYXBNaWdodEhhdmVMb29zZVByaW0iLCJpdGVtIiwiY3VyQiIsIm1hcEhhc0VxdWFsRW50cnkiLCJrZXkxIiwiaXRlbTEiLCJrZXkyIiwiYVZhbHVlcyIsIlNldCIsImFkZCIsImJWYWx1ZXMiLCJfdmFsIiwic2V0RXF1aXYiLCJhRW50cmllcyIsIl9hRW50cmllcyRpIiwiaXRlbTIiLCJiRW50cmllcyIsIl9pMiIsIl9iRW50cmllcyRfaSIsIm1hcEVxdWl2Iiwia2V5c0EiLCJHZXRJbnRyaW5zaWMiLCJjYWxsQmluZCIsIiRpbmRleE9mIiwiYWxsb3dNaXNzaW5nIiwiaW50cmluc2ljIiwiJGFwcGx5IiwiJGNhbGwiLCIkcmVmbGVjdEFwcGx5IiwiJGdPUEQiLCIkZGVmaW5lUHJvcGVydHkiLCIkbWF4Iiwib3JpZ2luYWxGdW5jdGlvbiIsImZ1bmMiLCJkZXNjIiwiYXBwbHlCaW5kIiwibm93IiwidGltZXMiLCJnIiwid2luZG93IiwiZnVuY3Rpb25zIiwibGFiZWwiLCJ0aW1lIiwiZHVyYXRpb24iLCJmb3JtYXQiLCJvYmplY3QiLCJleHByZXNzaW9uIiwidHVwbGUiLCJoYXNTeW1ib2xzIiwidG9TdHIiLCJvcmlnRGVmaW5lUHJvcGVydHkiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3JzIiwic3VwcG9ydHNEZXNjcmlwdG9ycyIsInByZWRpY2F0ZSIsImlzRnVuY3Rpb24iLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJlZGljYXRlcyIsImZpcnN0U291cmNlIiwidG8iLCJuZXh0U291cmNlIiwia2V5c0FycmF5IiwibmV4dEluZGV4IiwibmV4dEtleSIsInBvbHlmaWxsIiwiaXNDYWxsYWJsZSIsImZvckVhY2hBcnJheSIsInJlY2VpdmVyIiwiZm9yRWFjaFN0cmluZyIsInN0cmluZyIsImNoYXJBdCIsImZvckVhY2hPYmplY3QiLCJsaXN0IiwidGhpc0FyZyIsIkVSUk9SX01FU1NBR0UiLCJmdW5jVHlwZSIsInRoYXQiLCJib3VuZCIsImJpbmRlciIsImJvdW5kTGVuZ3RoIiwiYm91bmRBcmdzIiwiRW1wdHkiLCJpbXBsZW1lbnRhdGlvbiIsIiRTeW50YXhFcnJvciIsIlN5bnRheEVycm9yIiwiJEZ1bmN0aW9uIiwiJFR5cGVFcnJvciIsImdldEV2YWxsZWRDb25zdHJ1Y3RvciIsImV4cHJlc3Npb25TeW50YXgiLCJ0aHJvd1R5cGVFcnJvciIsIlRocm93VHlwZUVycm9yIiwiY2FsbGVlVGhyb3dzIiwiZ09QRHRocm93cyIsImdldFByb3RvIiwibmVlZHNFdmFsIiwiVHlwZWRBcnJheSIsIklOVFJJTlNJQ1MiLCJBZ2dyZWdhdGVFcnJvciIsIkFycmF5QnVmZmVyIiwiQXRvbWljcyIsIkRhdGFWaWV3IiwiZGVjb2RlVVJJIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXZhbCIsIkV2YWxFcnJvciIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJpc0Zpbml0ZSIsIkpTT04iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJTaGFyZWRBcnJheUJ1ZmZlciIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIlVSSUVycm9yIiwiV2Vha01hcCIsIldlYWtSZWYiLCJXZWFrU2V0IiwiZG9FdmFsIiwiZ2VuIiwiTEVHQUNZX0FMSUFTRVMiLCJoYXNPd24iLCIkY29uY2F0IiwiJHNwbGljZUFwcGx5Iiwic3BsaWNlIiwiJHJlcGxhY2UiLCIkc3RyU2xpY2UiLCIkZXhlYyIsImV4ZWMiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwic3RyaW5nVG9QYXRoIiwiZmlyc3QiLCJsYXN0IiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsInN1YlN0cmluZyIsImdldEJhc2VJbnRyaW5zaWMiLCJpbnRyaW5zaWNOYW1lIiwiYWxpYXMiLCJwYXJ0cyIsImludHJpbnNpY0Jhc2VOYW1lIiwiaW50cmluc2ljUmVhbE5hbWUiLCJza2lwRnVydGhlckNhY2hpbmciLCJpc093biIsInBhcnQiLCJoYXNBcnJheUxlbmd0aERlZmluZUJ1ZyIsIm9yaWdTeW1ib2wiLCJoYXNTeW1ib2xTaGFtIiwic3ltT2JqIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInN5bXMiLCJ0b1N0cmluZ1RhZyIsImN0b3IiLCJzdXBlckN0b3IiLCJzdXBlcl8iLCJUZW1wQ3RvciIsImhhc1RvU3RyaW5nVGFnIiwiJHRvU3RyaW5nIiwiY2FsbEJvdW5kIiwiaXNTdGFuZGFyZEFyZ3VtZW50cyIsImlzTGVnYWN5QXJndW1lbnRzIiwiY2FsbGVlIiwic3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyIsImZuVG9TdHIiLCJyZWZsZWN0QXBwbHkiLCJiYWRBcnJheUxpa2UiLCJpc0NhbGxhYmxlTWFya2VyIiwiXyIsImNvbnN0cnVjdG9yUmVnZXgiLCJpc0VTNkNsYXNzRm4iLCJmblN0ciIsImRvY3VtZW50RG90QWxsIiwiZG9jdW1lbnQiLCJhbGwiLCJ0cnlGdW5jdGlvbk9iamVjdCIsInN0ckNsYXNzIiwiaXNGblJlZ2V4IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5lcmF0b3JGdW5jIiwiZ2V0R2VuZXJhdG9yRnVuYyIsImRlZmluZSIsImdldFBvbHlmaWxsIiwic2hpbSIsIk5hTiIsImF2YWlsYWJsZVR5cGVkQXJyYXlzIiwiZ2xvYmFsVGhpcyIsInR5cGVkQXJyYXlzIiwiJHNsaWNlIiwidG9TdHJUYWdzIiwiZ09QRCIsInR5cGVkQXJyYXkiLCJwcm90byIsInN1cGVyUHJvdG8iLCJ0YWciLCJhbnlUcnVlIiwiZ2V0dGVyIiwidHJ5VHlwZWRBcnJheXMiLCJrZXlzU2hpbSIsImlzQXJncyIsImlzRW51bWVyYWJsZSIsImhhc0RvbnRFbnVtQnVnIiwiaGFzUHJvdG9FbnVtQnVnIiwiZG9udEVudW1zIiwiZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUiLCJleGNsdWRlZEtleXMiLCIkYXBwbGljYXRpb25DYWNoZSIsIiRjb25zb2xlIiwiJGV4dGVybmFsIiwiJGZyYW1lIiwiJGZyYW1lRWxlbWVudCIsIiRmcmFtZXMiLCIkaW5uZXJIZWlnaHQiLCIkaW5uZXJXaWR0aCIsIiRvbm1vemZ1bGxzY3JlZW5jaGFuZ2UiLCIkb25tb3pmdWxsc2NyZWVuZXJyb3IiLCIkb3V0ZXJIZWlnaHQiLCIkb3V0ZXJXaWR0aCIsIiRwYWdlWE9mZnNldCIsIiRwYWdlWU9mZnNldCIsIiRwYXJlbnQiLCIkc2Nyb2xsTGVmdCIsIiRzY3JvbGxUb3AiLCIkc2Nyb2xsWCIsIiRzY3JvbGxZIiwiJHNlbGYiLCIkd2Via2l0SW5kZXhlZERCIiwiJHdlYmtpdFN0b3JhZ2VJbmZvIiwiJHdpbmRvdyIsImhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyIsImlzT2JqZWN0IiwiaXNBcmd1bWVudHMiLCJpc1N0cmluZyIsInRoZUtleXMiLCJza2lwUHJvdG8iLCJqIiwic2tpcENvbnN0cnVjdG9yIiwiZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5Iiwib3JpZ0tleXMiLCJvcmlnaW5hbEtleXMiLCJrZXlzV29ya3NXaXRoQXJndW1lbnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibWFya2VyIiwicnVuQ2xlYXJUaW1lb3V0IiwiSXRlbSIsIm5vb3AiLCJuZXh0VGljayIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImFyZyIsImNvcHkiLCJmaWxsIiwicmVhZFVJbnQ4IiwiaXNBcmd1bWVudHNPYmplY3QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwid2hpY2hUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiQmlnSW50U3VwcG9ydGVkIiwiU3ltYm9sU3VwcG9ydGVkIiwiT2JqZWN0VG9TdHJpbmciLCJudW1iZXJWYWx1ZSIsInN0cmluZ1ZhbHVlIiwiYm9vbGVhblZhbHVlIiwiYmlnSW50VmFsdWUiLCJzeW1ib2xWYWx1ZSIsImNoZWNrQm94ZWRQcmltaXRpdmUiLCJwcm90b3R5cGVWYWx1ZU9mIiwiaXNNYXBUb1N0cmluZyIsImlzU2V0VG9TdHJpbmciLCJpc1dlYWtNYXBUb1N0cmluZyIsImlzV2Vha1NldFRvU3RyaW5nIiwiaXNBcnJheUJ1ZmZlclRvU3RyaW5nIiwiaXNBcnJheUJ1ZmZlciIsIndvcmtpbmciLCJpc0RhdGFWaWV3VG9TdHJpbmciLCJpc0RhdGFWaWV3IiwiaXNWaWV3IiwiaXNVaW50OEFycmF5IiwiaXNVaW50OENsYW1wZWRBcnJheSIsImlzVWludDE2QXJyYXkiLCJpc1VpbnQzMkFycmF5IiwiaXNJbnQ4QXJyYXkiLCJpc0ludDE2QXJyYXkiLCJpc0ludDMyQXJyYXkiLCJpc0JpZ0ludDY0QXJyYXkiLCJpc0JpZ1VpbnQ2NEFycmF5IiwiaXNXZWFrTWFwIiwiaXNXZWFrU2V0IiwiU2hhcmVkQXJyYXlCdWZmZXJDb3B5IiwiaXNTaGFyZWRBcnJheUJ1ZmZlclRvU3RyaW5nIiwiaXNTaGFyZWRBcnJheUJ1ZmZlciIsImlzQXN5bmNGdW5jdGlvbiIsImlzTWFwSXRlcmF0b3IiLCJpc1NldEl0ZXJhdG9yIiwiaXNHZW5lcmF0b3JPYmplY3QiLCJpc1dlYkFzc2VtYmx5Q29tcGlsZWRNb2R1bGUiLCJtZXRob2QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVzY3JpcHRvcnMiLCJmb3JtYXRSZWdFeHAiLCJvYmplY3RzIiwic3RyaW5naWZ5IiwiaXNOdWxsIiwiZGVwcmVjYXRlIiwibm9EZXByZWNhdGlvbiIsInRocm93RGVwcmVjYXRpb24iLCJ0cmFjZURlcHJlY2F0aW9uIiwidHJhY2UiLCJkZWJ1Z3MiLCJkZWJ1Z0VudlJlZ2V4IiwiTk9ERV9ERUJVRyIsImRlYnVnRW52IiwidG9VcHBlckNhc2UiLCJvcHRzIiwic2VlbiIsInN0eWxpemUiLCJzdHlsaXplTm9Db2xvciIsImNvbG9ycyIsImlzQm9vbGVhbiIsIl9leHRlbmQiLCJpc1VuZGVmaW5lZCIsInN0eWxpemVXaXRoQ29sb3IiLCJmb3JtYXRWYWx1ZSIsInN0eWxlVHlwZSIsInN0eWxlIiwic3R5bGVzIiwicmV0IiwicHJpbWl0aXZlIiwic2ltcGxlIiwiaXNOdW1iZXIiLCJmb3JtYXRQcmltaXRpdmUiLCJ2aXNpYmxlS2V5cyIsImhhc2giLCJpZHgiLCJhcnJheVRvSGFzaCIsImlzRXJyb3IiLCJmb3JtYXRFcnJvciIsImJyYWNlcyIsInRvVVRDU3RyaW5nIiwib3V0cHV0IiwibCIsImZvcm1hdFByb3BlcnR5IiwiZm9ybWF0QXJyYXkiLCJyZWR1Y2UiLCJwcmV2IiwibnVtTGluZXNFc3QiLCJyZWR1Y2VUb1NpbmdsZVN0cmluZyIsImxpbmUiLCJhciIsInJlIiwiZCIsInBhZCIsIm4iLCJkZWJ1Z2xvZyIsInBpZCIsInR5cGVzIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJpc1N5bWJvbCIsImlzUHJpbWl0aXZlIiwiaXNCdWZmZXIiLCJtb250aHMiLCJ0aW1lc3RhbXAiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwicHJvcCIsImluaGVyaXRzIiwib3JpZ2luIiwia0N1c3RvbVByb21pc2lmaWVkU3ltYm9sIiwiY2FsbGJhY2tpZnlPblJlamVjdGVkIiwiY2IiLCJuZXdSZWFzb24iLCJwcm9taXNpZnkiLCJvcmlnaW5hbCIsInByb21pc2VSZXNvbHZlIiwicHJvbWlzZVJlamVjdCIsInByb21pc2UiLCJyZWplY3QiLCJjYWxsYmFja2lmeSIsImNhbGxiYWNraWZpZWQiLCJtYXliZUNiIiwicmVqIiwiZm91bmROYW1lIiwicG9zc2libGVOYW1lcyIsIm91dCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJlbnVtZXJhYmxlT25seSIsInN5bWJvbHMiLCJfb2JqZWN0U3ByZWFkMiIsImZvcm1hdFByb2RFcnJvck1lc3NhZ2UiLCIkJG9ic2VydmFibGUiLCJvYnNlcnZhYmxlIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tIiwiQWN0aW9uVHlwZXMiLCJJTklUIiwiUkVQTEFDRSIsIlBST0JFX1VOS05PV05fQUNUSU9OIiwiaXNQbGFpbk9iamVjdCIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInByZWxvYWRlZFN0YXRlIiwiZW5oYW5jZXIiLCJfcmVmMiIsImN1cnJlbnRSZWR1Y2VyIiwiY3VycmVudFN0YXRlIiwiY3VycmVudExpc3RlbmVycyIsIm5leHRMaXN0ZW5lcnMiLCJpc0Rpc3BhdGNoaW5nIiwiZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycyIsImdldFN0YXRlIiwic3Vic2NyaWJlIiwibGlzdGVuZXIiLCJpc1N1YnNjcmliZWQiLCJpbmRleCIsImRpc3BhdGNoIiwiYWN0aW9uIiwicmVwbGFjZVJlZHVjZXIiLCJuZXh0UmVkdWNlciIsIl9yZWYiLCJvdXRlclN1YnNjcmliZSIsIm9ic2VydmVyIiwib2JzZXJ2ZVN0YXRlIiwidW5zdWJzY3JpYmUiLCJjb21wb3NlIiwiZnVuY3MiLCJfYXJyYXlMaWtlVG9BcnJheSIsImFycjIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpdGVyIiwiZnJvbSIsIm1pbkxlbiIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwic3RvcmUiLCJzdGF0ZSIsIm1pZGRsZXdhcmVzIiwiX2Rpc3BhdGNoIiwibWlkZGxld2FyZUFQSSIsImNoYWluIiwibWlkZGxld2FyZSIsImFwcGx5TWlkZGxld2FyZSIsInJldHVyblZhbHVlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==