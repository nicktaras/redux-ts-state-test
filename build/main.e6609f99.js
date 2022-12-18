/*! For license information please see main.e6609f99.js.LICENSE.txt */
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
      var i = r(136).codes, c = i.ERR_AMBIGUOUS_ARGUMENT, u = i.ERR_INVALID_ARG_TYPE, f = i.ERR_INVALID_ARG_VALUE, l = i.ERR_INVALID_RETURN_VALUE, s = i.ERR_MISSING_ARGS;
      var p = r(961);
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
        throw new p(t);
      }
      function P(t, e, r, n) {
        if (!r) {
          var o = !1;
          if (0 === e) o = !0, n = 'No value argument passed to `assert.ok()`'; else if (n instanceof Error) throw n;
          var a = new p({
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
        var s = {
          actual: e,
          expected: r,
          operator: void 0 === i ? 'fail' : i,
          stackStartFn: c || t
        };
        void 0 !== a && (s.message = a);
        var y = new p(s);
        throw f && (y.message = f, y.generatedMessage = !0), y;
      }, E.AssertionError = p, E.ok = x, E.equal = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        e != r && A({
          actual: e,
          expected: r,
          message: n,
          operator: '==',
          stackStartFn: t
        });
      }, E.notEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        e == r && A({
          actual: e,
          expected: r,
          message: n,
          operator: '!=',
          stackStartFn: t
        });
      }, E.deepEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        void 0 === m && O(), m(e, r) || A({
          actual: e,
          expected: r,
          message: n,
          operator: 'deepEqual',
          stackStartFn: t
        });
      }, E.notDeepEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        void 0 === m && O(), m(e, r) && A({
          actual: e,
          expected: r,
          message: n,
          operator: 'notDeepEqual',
          stackStartFn: t
        });
      }, E.deepStrictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        void 0 === m && O(), w(e, r) || A({
          actual: e,
          expected: r,
          message: n,
          operator: 'deepStrictEqual',
          stackStartFn: t
        });
      }, E.notDeepStrictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        void 0 === m && O();
        w(e, r) && A({
          actual: e,
          expected: r,
          message: n,
          operator: 'notDeepStrictEqual',
          stackStartFn: t
        });
      }, E.strictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
        h(e, r) || A({
          actual: e,
          expected: r,
          message: n,
          operator: 'strictEqual',
          stackStartFn: t
        });
      }, E.notStrictEqual = function t(e, r, n) {
        if (arguments.length < 2) throw new s('actual', 'expected');
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
            var u = new p({
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
      function k(t, e, r, n) {
        if ('function' != typeof e) {
          if (b(e)) return e.test(t);
          if (2 === arguments.length) throw new u('expected', [ 'Function', 'RegExp' ], e);
          if ('object' !== a(t) || null === t) {
            var o = new p({
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
      function R(t) {
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
      function _(t) {
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
      function F(t, e, r, n) {
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
        if (r && !k(e, r, n, t)) throw e;
      }
      function D(t, e, r, n) {
        if (e !== j) {
          if ('string' == typeof r && (n = r, r = void 0), !r || k(e, r)) {
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
        F.apply(void 0, [ t, R(e) ].concat(n));
      }, E.rejects = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        return _(e).then((function(e) {
          return F.apply(void 0, [ t, e ].concat(n));
        }));
      }, E.doesNotThrow = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        D.apply(void 0, [ t, R(e) ].concat(n));
      }, E.doesNotReject = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        return _(e).then((function(e) {
          return D.apply(void 0, [ t, e ].concat(n));
        }));
      }, E.ifError = function t(e) {
        if (null != e) {
          var r = 'ifError got unwanted exception: ';
          'object' === a(e) && 'string' == typeof e.message ? 0 === e.message.length && e.constructor ? r += e.constructor.name : r += e.message : r += y(e);
          var n = new p({
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
            return l(t, arguments, p(this).constructor);
          }
          return r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), s(r, t);
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
          return r && s(o, r.prototype), o;
        }, l.apply(null, arguments);
      }
      function s(t, e) {
        return s = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t;
        }, s(t, e);
      }
      function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, p(t);
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
        var s = E(e).split('\n');
        var p = 0;
        var v = '';
        if ('strictEqual' === r && 'object' === y(t) && 'object' === y(e) && null !== t && null !== e && (r = 'strictEqualObject'), 
        1 === l.length && 1 === s.length && l[0] !== s[0]) {
          var g = l[0].length + s[0].length;
          if (g <= 10) {
            if (!('object' === y(t) && null !== t || 'object' === y(e) && null !== e || 0 === t && 0 === e)) return "".concat(O[r], "\n\n") + "".concat(l[0], " !== ").concat(s[0], "\n");
          } else if ('strictEqualObject' !== r) {
            if (g < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
              for (;l[0][p] === s[0][p]; ) p++;
              p > 2 && (v = "\n  ".concat(function(t, e) {
                if (e = Math.floor(e), 0 == t.length || 0 == e) return '';
                var r = t.length * e;
                for (e = Math.floor(Math.log(e) / Math.log(2)); e; ) t += t, e--;
                return t + t.substring(0, r - t.length);
              }(' ', p), "^"), p = 0);
            }
          }
        }
        var S = l[l.length - 1];
        var j = s[s.length - 1];
        for (;S === j && (p++ < 2 ? c = "\n  ".concat(S).concat(c) : o = S, l.pop(), s.pop(), 0 !== l.length && 0 !== s.length); ) S = l[l.length - 1], 
        j = s[s.length - 1];
        var A = Math.max(l.length, s.length);
        if (0 === A) {
          var P = f.split('\n');
          if (P.length > 30) for (P[26] = "".concat(d, "...").concat(w); P.length > 27; ) P.pop();
          return "".concat(O.notIdentical, "\n\n").concat(P.join('\n'), "\n");
        }
        p > 3 && (c = "\n".concat(d, "...").concat(w).concat(c), u = !0), '' !== o && (c = "\n  ".concat(o).concat(c), o = '');
        var x = 0;
        var T = O[r] + "\n".concat(h, "+ actual").concat(w, " ").concat(m, "- expected").concat(w);
        var I = " ".concat(d, "...").concat(w, " Lines skipped");
        for (p = 0; p < A; p++) {
          var k = p - i;
          if (l.length < p + 1) k > 1 && p > 2 && (k > 4 ? (a += "\n".concat(d, "...").concat(w), u = !0) : k > 3 && (a += "\n  ".concat(s[p - 2]), 
          x++), a += "\n  ".concat(s[p - 1]), x++), i = p, o += "\n".concat(m, "-").concat(w, " ").concat(s[p]), x++; else if (s.length < p + 1) k > 1 && p > 2 && (k > 4 ? (a += "\n".concat(d, "...").concat(w), 
          u = !0) : k > 3 && (a += "\n  ".concat(l[p - 2]), x++), a += "\n  ".concat(l[p - 1]), x++), i = p, a += "\n".concat(h, "+").concat(w, " ").concat(l[p]), 
          x++; else {
            var R = s[p];
            var N = l[p];
            var _ = N !== R && (!b(N, ',') || N.slice(0, -1) !== R);
            _ && b(R, ',') && R.slice(0, -1) === N && (_ = !1, N += ','), _ ? (k > 1 && p > 2 && (k > 4 ? (a += "\n".concat(d, "...").concat(w), 
            u = !0) : k > 3 && (a += "\n  ".concat(l[p - 2]), x++), a += "\n  ".concat(l[p - 1]), x++), i = p, a += "\n".concat(h, "+").concat(w, " ").concat(N), 
            o += "\n".concat(m, "-").concat(w, " ").concat(R), x += 2) : (a += o, o = '', 1 !== k && 0 !== p || (a += "\n  ".concat(N), 
            x++));
          }
          if (x > 20 && p < A - 2) return "".concat(T).concat(I, "\n").concat(a, "\n").concat(d, "...").concat(w).concat(o, "\n") + "".concat(d, "...").concat(w);
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
          var s = Error.stackTraceLimit;
          if (Error.stackTraceLimit = 0, null != o) r = i(this, p(e).call(this, String(o))); else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (d = "[34m", 
          h = "[32m", w = "[39m", m = "[31m") : (d = '', h = '', w = '', m = '')), 'object' === y(f) && null !== f && 'object' === y(l) && null !== l && 'stack' in f && f instanceof Error && 'stack' in l && l instanceof Error && (f = S(f), 
          l = S(l)), 'deepStrictEqual' === a || 'strictEqual' === a) r = i(this, p(e).call(this, j(f, l, a))); else if ('notDeepStrictEqual' === a || 'notStrictEqual' === a) {
            var v = O[a];
            var b = E(f).split('\n');
            if ('notStrictEqual' === a && 'object' === y(f) && null !== f && (v = O.notStrictEqualObject), b.length > 30) for (b[26] = "".concat(d, "...").concat(w); b.length > 27; ) b.pop();
            r = 1 === b.length ? i(this, p(e).call(this, "".concat(v, " ").concat(b[0]))) : i(this, p(e).call(this, "".concat(v, "\n\n").concat(b.join('\n'), "\n")));
          } else {
            var A = E(f);
            var P = '';
            var x = O[a];
            'notDeepEqual' === a || 'notEqual' === a ? (A = "".concat(O[a], "\n\n").concat(A)).length > 1024 && (A = "".concat(A.slice(0, 1021), "...")) : (P = "".concat(E(l)), 
            A.length > 512 && (A = "".concat(A.slice(0, 509), "...")), P.length > 512 && (P = "".concat(P.slice(0, 509), "...")), 'deepEqual' === a || 'equal' === a ? A = "".concat(x, "\n\n").concat(A, "\n\nshould equal\n\n") : P = " ".concat(a, " ").concat(P)), 
            r = i(this, p(e).call(this, "".concat(A).concat(P)));
          }
          return Error.stackTraceLimit = s, r.generatedMessage = !o, Object.defineProperty(c(r), 'name', {
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
          }), e && s(t, e);
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
      function s(t, e) {
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
        }(t, ' argument')) i = "The ".concat(t, " ").concat(a, " ").concat(s(e, 'type')); else {
          var c = function(t, e, r) {
            return 'number' != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r);
          }(t, '.') ? 'property' : 'argument';
          i = "The \"".concat(t, "\" ").concat(c, " ").concat(a, " ").concat(s(e, 'type'));
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
      function s(t) {
        return t.call.bind(t);
      }
      var p = s(Object.prototype.hasOwnProperty);
      var y = s(Object.prototype.propertyIsEnumerable);
      var v = s(Object.prototype.toString);
      var g = r(539).types, b = g.isAnyArrayBuffer, d = g.isArrayBufferView, h = g.isDate, m = g.isMap, w = g.isRegExp, O = g.isSet, S = g.isNativeError, E = g.isBoxedPrimitive, j = g.isNumberObject, A = g.isStringObject, P = g.isBooleanObject, x = g.isBigIntObject, T = g.isSymbolObject, I = g.isFloat32Array, k = g.isFloat64Array;
      function R(t) {
        if (0 === t.length || t.length > 10) return !0;
        for (var e = 0; e < t.length; e++) {
          var r = t.charCodeAt(e);
          if (r < 48 || r > 57) return !0;
        }
        return 10 === t.length && t >= Math.pow(2, 32);
      }
      function N(t) {
        return Object.keys(t).filter(R).concat(f(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
      }
      function _(t, e) {
        if (t === e) return 0;
        var r = t.length;
        var n = e.length;
        for (var o = 0, a = Math.min(r, n); o < a; ++o) if (t[o] !== e[o]) {
          r = t[o], n = e[o];
          break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
      }
      function F(t, e, r, n) {
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
            if (r || !I(t) && !k(t)) {
              if (!function(t, e) {
                return t.byteLength === e.byteLength && 0 === _(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
              }(t, e)) return !1;
            } else if (!function(t, e) {
              if (t.byteLength !== e.byteLength) return !1;
              for (var r = 0; r < t.byteLength; r++) if (t[r] !== e[r]) return !1;
              return !0;
            }(t, e)) return !1;
            var s = N(t);
            var p = N(e);
            return s.length === p.length && U(t, e, r, n, 0, s);
          }
          if (O(t)) return !(!O(e) || t.size !== e.size) && U(t, e, r, n, 2);
          if (m(t)) return !(!m(e) || t.size !== e.size) && U(t, e, r, n, 3);
          if (b(t)) {
            if (!function(t, e) {
              return t.byteLength === e.byteLength && 0 === _(new Uint8Array(t), new Uint8Array(e));
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
        for (;c < a.length; c++) if (!p(e, a[c])) return !1;
        if (r && 5 === arguments.length) {
          var u = f(t);
          if (0 !== u.length) {
            var l = 0;
            for (c = 0; c < u.length; c++) {
              var s = u[c];
              if (y(t, s)) {
                if (!y(e, s)) return !1;
                a.push(s), l++;
              } else if (y(e, s)) return !1;
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
          if (F(e, c, r, n)) return t.delete(c), !0;
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
      function C(t, e, r, n, o) {
        var a = B(r);
        if (null != a) return a;
        var i = e.get(a);
        return !(void 0 === i && !e.has(a) || !F(n, i, !1, o)) && (!t.has(a) && F(n, i, !1, o));
      }
      function L(t, e, r, n, o, a) {
        var c = i(t);
        for (var u = 0; u < c.length; u++) {
          var f = c[u];
          if (F(r, f, o, a) && F(n, e.get(f), o, a)) return t.delete(f), !0;
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
              for (var s = 0; s < l.length; s++) {
                var p = l[s];
                if ('object' === o(p) && null !== p) {
                  if (!M(a, p, r, n)) return !1;
                } else if (!r && !t.has(p) && !M(a, p, r, n)) return !1;
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
              var l = n(u[f], 2), s = l[0], p = l[1];
              if ('object' === o(s) && null !== s) null === i && (i = new Set), i.add(s); else {
                var y = e.get(s);
                if (void 0 === y && !e.has(s) || !F(p, y, r, a)) {
                  if (r) return !1;
                  if (!C(t, e, s, p, a)) return !1;
                  null === i && (i = new Set), i.add(s);
                }
              }
            }
            if (null !== i) {
              var v = c(e);
              for (var g = 0; g < v.length; g++) {
                var b = n(v[g], 2), d = (s = b[0], b[1]);
                if ('object' === o(s) && null !== s) {
                  if (!L(i, t, s, d, r, a)) return !1;
                } else if (!(r || t.has(s) && F(t.get(s), d, !1, a) || L(i, t, s, d, !1, a))) return !1;
              }
              return 0 === i.size;
            }
            return !0;
          }(t, e, r, u)) return !1;
        } else if (1 === f) for (;l < t.length; l++) {
          if (!p(t, l)) {
            if (p(e, l)) return !1;
            var s = Object.keys(t);
            for (;l < s.length; l++) {
              var y = s[l];
              if (!p(e, y) || !F(t[y], e[y], r, u)) return !1;
            }
            return s.length === Object.keys(e).length;
          }
          if (!p(e, l) || !F(t[l], e[l], r, u)) return !1;
        }
        for (l = 0; l < a.length; l++) {
          var v = a[l];
          if (!F(t[v], e[v], r, u)) return !1;
        }
        return !0;
      }
      t.exports = {
        isDeepEqual: function(t, e) {
          return F(t, e, false);
        },
        isDeepStrictEqual: function(t, e) {
          return F(t, e, true);
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
      } catch (p) {
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
      var s = function() {
        return c(n, a, arguments);
      };
      f ? f(t.exports, 'apply', {
        value: s
      }) : t.exports.apply = s;
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
        var s = f[l];
        var p = s[0];
        var y = s[1];
        c[y] || (c[y] = p);
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
      var s = function(t, e) {
        var r = arguments.length > 2 ? arguments[2] : {};
        var a = n(e);
        o && (a = i.call(a, Object.getOwnPropertySymbols(e)));
        for (var c = 0; c < a.length; c += 1) l(t, a[c], e[a[c]], r[a[c]]);
      };
      s.supportsDescriptors = !!f, t.exports = s;
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
        for (var s = 0; s < f; s++) l.push('$' + s);
        if (c = Function('binder', 'return function (' + l.join(',') + '){ return binder.apply(this,arguments); }')(u), a.prototype) {
          var p = function() {};
          p.prototype = a.prototype, c.prototype = new p, p.prototype = null;
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
      var s = r(405)();
      var p = Object.getPrototypeOf || function(t) {
        return t.__proto__;
      };
      var y = {};
      var v = 'undefined' == typeof Uint8Array ? n : p(Uint8Array);
      var g = {
        '%AggregateError%': 'undefined' == typeof AggregateError ? n : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? n : ArrayBuffer,
        '%ArrayIteratorPrototype%': s ? p([][Symbol.iterator]()) : n,
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
        '%IteratorPrototype%': s ? p(p([][Symbol.iterator]())) : n,
        '%JSON%': 'object' == typeof JSON ? JSON : n,
        '%Map%': 'undefined' == typeof Map ? n : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && s ? p((new Map)[Symbol.iterator]()) : n,
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
        '%SetIteratorPrototype%': 'undefined' != typeof Set && s ? p((new Set)[Symbol.iterator]()) : n,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': s ? p(''[Symbol.iterator]()) : n,
        '%Symbol%': s ? Symbol : n,
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
          o && (r = p(o.prototype));
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
        var s = a.alias;
        s && (n = s[0], O(r, w([ 0, 1 ], s)));
        for (var p = 1, y = !0; p < r.length; p += 1) {
          var v = r[p];
          var b = E(v, 0, 1);
          var d = E(v, -1);
          if (('"' === b || "'" === b || '`' === b || '"' === d || "'" === d || '`' === d) && b !== d) throw new o('property names with quotes must have matching quotes');
          if ('constructor' !== v && y || (l = !0), m(g, c = '%' + (n += '.' + v) + '%')) f = g[c]; else if (null != f) {
            if (!(v in f)) {
              if (!e) throw new i('base intrinsic for ' + t + ' exists, but the property is not available.');
              return;
            }
            if (u && p + 1 >= r.length) {
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
      var s = a('String.prototype.slice');
      var p = {};
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
          p[t] = n.get;
        }
      }));
      t.exports = function(t) {
        if (!t || 'object' != typeof t) return !1;
        if (!c || !(Symbol.toStringTag in t)) {
          var e = s(i(t), 8, -1);
          return l(f, e) > -1;
        }
        return !!y && function(t) {
          var e = !1;
          return n(p, (function(r, n) {
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
        var s = function(t) {
          var e = t.constructor;
          return e && e.prototype === t;
        };
        var p = {
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
            if (!p['$' + t] && o.call(window, t) && null !== window[t] && 'object' == typeof window[t]) try {
              s(window[t]);
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
          var p = [];
          if (!e && !r && !n) throw new TypeError('Object.keys called on a non-object');
          var v = f && r;
          if (c && t.length > 0 && !o.call(t, 0)) for (var g = 0; g < t.length; ++g) p.push(String(g));
          if (n && t.length > 0) for (var b = 0; b < t.length; ++b) p.push(String(b)); else for (var d in t) v && 'prototype' === d || !o.call(t, d) || p.push(String(d));
          if (u) {
            var h = function(t) {
              if ('undefined' == typeof window || !y) return s(t);
              try {
                return s(t);
              } catch (e) {
                return !1;
              }
            }(t);
            for (var m = 0; m < l.length; ++m) h && 'constructor' === l[m] || !o.call(t, l[m]) || p.push(l[m]);
          }
          return p;
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
      function s() {
        u && f && (u = !1, f.length ? c = f.concat(c) : l = -1, c.length && p());
      }
      function p() {
        if (!u) {
          var t = i(s);
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
        c.push(new y(t, e)), 1 !== c.length || u || i(p);
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
      var s = c(Number.prototype.valueOf);
      var p = c(String.prototype.valueOf);
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
        return b(t, s);
      }
      function I(t) {
        return b(t, p);
      }
      function k(t) {
        return b(t, y);
      }
      function R(t) {
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
      }, e.isNumberObject = T, e.isStringObject = I, e.isBooleanObject = k, e.isBigIntObject = R, e.isSymbolObject = N, e.isBoxedPrimitive = function(t) {
        return T(t) || I(t) || k(t) || R(t) || N(t);
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
          stylize: p
        };
        return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), d(r) ? n.showHidden = r : r && e._extend(n, r), 
        O(n.showHidden) && (n.showHidden = !1), O(n.depth) && (n.depth = 2), O(n.colors) && (n.colors = !1), O(n.customInspect) && (n.customInspect = !0), 
        n.colors && (n.stylize = s), y(n, t, n.depth);
      }
      function s(t, e) {
        var r = l.styles[e];
        return r ? '[' + l.colors[r][0] + 'm' + t + '[' + l.colors[r][1] + 'm' : t;
      }
      function p(t, e) {
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
        var f = '', l = !1, s = [ '{', '}' ];
        (b(r) && (l = !0, s = [ '[', ']' ]), P(r)) && (f = ' [Function' + (r.name ? ': ' + r.name : '') + ']');
        return S(r) && (f = ' ' + RegExp.prototype.toString.call(r)), j(r) && (f = ' ' + Date.prototype.toUTCString.call(r)), A(r) && (f = ' ' + v(r)), 
        0 !== i.length || l && 0 != r.length ? n < 0 ? S(r) ? t.stylize(RegExp.prototype.toString.call(r), 'regexp') : t.stylize('[Object]', 'special') : (t.seen.push(r), 
        p = l ? function(t, e, r, n, o) {
          var a = [];
          for (var i = 0, c = e.length; i < c; ++i) R(e, String(i)) ? a.push(g(t, e, r, n, String(i), !0)) : a.push('');
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
        }(p, f, s)) : s[0] + f + s[1];
        var p;
      }
      function v(t) {
        return '[' + Error.prototype.toString.call(t) + ']';
      }
      function g(t, e, r, n, o, a) {
        var i, c, u;
        if ((u = Object.getOwnPropertyDescriptor(e, o) || {
          value: e[o]
        }).get ? c = u.set ? t.stylize('[Getter/Setter]', 'special') : t.stylize('[Getter]', 'special') : u.set && (c = t.stylize('[Setter]', 'special')), 
        R(n, o) || (i = '[' + o + ']'), c || (t.seen.indexOf(u.value) < 0 ? (c = h(r) ? y(t, u.value, null) : y(t, u.value, r - 1)).indexOf('\n') > -1 && (c = a ? c.split('\n').map((function(t) {
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
      function k() {
        var t = new Date;
        var e = [ T(t.getHours()), T(t.getMinutes()), T(t.getSeconds()) ].join(':');
        return [ t.getDate(), I[t.getMonth()], e ].join(' ');
      }
      function R(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      e.log = function() {
        o.log('%s - %s', k(), e.format.apply(e, arguments));
      }, e.inherits = r(717), e._extend = function(t, e) {
        if (!e || !E(e)) return t;
        var r = Object.keys(e);
        var n = r.length;
        for (;n--; ) t[r[n]] = e[r[n]];
        return t;
      };
      var N = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
      function _(t, e) {
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
            n.nextTick(_.bind(null, t, i));
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
      var s = {};
      var p = r(882);
      var y = Object.getPrototypeOf;
      c && p && y && n(f, (function(t) {
        if ('function' == typeof u[t]) {
          var e = new u[t];
          if (Symbol.toStringTag in e) {
            var r = y(e);
            var n = p(r, Symbol.toStringTag);
            if (!n) {
              var o = y(r);
              n = p(o, Symbol.toStringTag);
            }
            s[t] = n.get;
          }
        }
      }));
      var v = r(692);
      t.exports = function(t) {
        return !!v(t) && (c && Symbol.toStringTag in t ? function(t) {
          var e = !1;
          return n(s, (function(r, n) {
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
      var s = [];
      var p = s;
      var y = !1;
      function v() {
        p === s && (p = s.slice());
      }
      function g() {
        if (y) throw new Error(o(3));
        return l;
      }
      function b(t) {
        if ('function' != typeof t) throw new Error(o(4));
        if (y) throw new Error(o(5));
        var e = !0;
        return v(), p.push(t), function() {
          if (e) {
            if (y) throw new Error(o(6));
            e = !1, v();
            var r = p.indexOf(t);
            p.splice(r, 1), s = null;
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
        var e = s = p;
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
    function s(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function p(t) {
      return function(t) {
        if (Array.isArray(t)) return s(t);
      }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || function(t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(t, e) : void 0;
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
      if (0 !== e.length) return 'object' === y(e[0]) ? l : l.apply(void 0, p(e));
    };
    'undefined' != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
    var g = r(108);
    const b = {
      isCarOpenState: !1,
      areCarWindowsOpenState: !1,
      controlMusicVolumeState: 0
    };
    const d = [ 'welcome', 'locks', 'sound' ];
    window.navClickHandler = t => {
      S.dispatch({
        type: 'SET_VIEW',
        payload: t.currentTarget.dataset.nav
      });
    }, window.windowClickHandler = t => {
      S.dispatch({
        type: 'TOGGLE_WINDOWS'
      });
    }, window.lockClickHandler = t => {
      S.dispatch({
        type: 'TOGGLE_LOCK'
      });
    }, window.volClickHandler = t => {
      S.dispatch({
        type: 'SET_MUSIC_VOUME',
        payload: t.currentTarget.dataset.vol
      });
    };
    const h = t => {
      d.forEach((e => {
        document.getElementById(e).style.display = t === e ? 'block' : 'none';
      }));
    };
    const m = t => {
      document.getElementById('controlMusicVolumeState').innerHTML = t.toString();
    };
    const w = t => {
      document.getElementById('isCarOpenState').innerHTML = t ? 'open' : 'closed';
    };
    const O = t => {
      document.getElementById('areCarWindowsOpenState').innerHTML = t ? 'open' : 'closed';
    };
    const S = f(function(t) {
      var e = Object.keys(t);
      var r = {};
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        0, 'function' == typeof t[a] && (r[a] = t[a]);
      }
      var i = Object.keys(r);
      var u;
      try {
        !function(t) {
          Object.keys(t).forEach((function(e) {
            var r = t[e];
            if (void 0 === r(void 0, {
              type: c.INIT
            })) throw new Error(o(12));
            if (void 0 === r(void 0, {
              type: c.PROBE_UNKNOWN_ACTION()
            })) throw new Error(o(13));
          }));
        }(r);
      } catch (f) {
        u = f;
      }
      return function(t, e) {
        if (void 0 === t && (t = {}), u) throw u;
        var n = !1;
        var a = {};
        for (var c = 0; c < i.length; c++) {
          var f = i[c];
          var l = r[f];
          var s = t[f];
          var p = l(s, e);
          if (void 0 === p) {
            e && e.type;
            throw new Error(o(14));
          }
          a[f] = p, n = n || p !== s;
        }
        return (n = n || i.length !== Object.keys(t).length) ? a : t;
      };
    }({
      viewReducer: function(t = "welcome", e) {
        return 'SET_VIEW' === e.type ? (t = e.payload, h(t), t) : (h(t), t);
      },
      carReducer: function(t = b, e) {
        switch (e.type) {
         case 'TOGGLE_LOCK':
          return t.isCarOpenState = !t.isCarOpenState, w(t.isCarOpenState), t;

         case 'TOGGLE_WINDOWS':
          return t.areCarWindowsOpenState = !t.areCarWindowsOpenState, O(t.areCarWindowsOpenState), t;

         case 'SET_MUSIC_VOUME':
          return '1' == e.payload ? t.controlMusicVolumeState++ : t.controlMusicVolumeState > 0 && '-1' == e.payload && t.controlMusicVolumeState--, 
          m(t.controlMusicVolumeState), t;

         default:
          return w(t.isCarOpenState), O(t.areCarWindowsOpenState), m(t.controlMusicVolumeState), t;
        }
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
  })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUssS0FDdEZrMUIsRUFBWWwxQixLQUFRSixVQUFVSTtNQUdoQyxPQUFPLFNBQVV3d0I7UUFDZixPQUFPO1VBQ0wsSUFBSTJDLElBQVEzQyxFQUFZdndCLFdBQU0sR0FBUUw7VUFFdEMsSUFBSXUxQixJQUFZO1lBQ2QsTUFBTSxJQUFJbjJCLE1BQThDOHdCLEVBQXVCO0FBQ2pGO1VBRUEsSUFBSXNGLElBQWdCO1lBQ2xCakUsVUFBVWdDLEVBQU1oQztZQUNoQkssVUFBVTtjQUNSLE9BQU8yRCxFQUFVbDFCLFdBQU0sR0FBUUw7QUFDakM7O1VBRUYsSUFBSXkxQixJQUFRSCxFQUFZdG5CLEtBQUksU0FBVTBuQjtZQUNwQyxPQUFPQSxFQUFXRjtBQUNwQjtVQUVBLE9BREFELElBQVlsRCxFQUFRaHlCLFdBQU0sR0FBUW8xQixFQUF0QnBELENBQTZCa0IsRUFBTTNCLFdBQ3hDLEVBQWMsRUFBYyxDQUFDLEdBQUcyQixJQUFRLENBQUMsR0FBRztZQUNqRDNCLFVBQVUyRDs7QUFFZDtBQUNGO0FBQ0YsS1Noa0JJSSxFQWxCSixVQUFnQixVQUFFcEU7TUFDaEIsT0FBUWxpQixLQUFld2lCO1FBQ3JCLEVBQVFobkIsSUFBSSxpQkFBaUJnbkI7UUFDN0IsTUFBTStELElBQWN2bUIsRUFBS3dpQjtRQUV6QixPQURBLEVBQVFobkIsSUFBSSx3QkFBd0IwbUIsTUFDN0JxRTtBQUFXO0FBRXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9hc3NlcnQvYnVpbGQvYXNzZXJ0LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2J1aWxkL2ludGVybmFsL2Fzc2VydC9hc3NlcnRpb25fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9hc3NlcnQvYnVpbGQvaW50ZXJuYWwvZXJyb3JzLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2J1aWxkL2ludGVybmFsL3V0aWwvY29tcGFyaXNvbnMuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9jYWxsLWJpbmQvY2FsbEJvdW5kLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvY29uc29sZS1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9lczYtb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2Zvci1lYWNoL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9nZXQtaW50cmluc2ljL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9oYXMtc3ltYm9scy9zaGFtcy5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2hhcy10b3N0cmluZ3RhZy9zaGFtcy5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtYXJndW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvaXMtY2FsbGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pcy1nZW5lcmF0b3ItZnVuY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pcy1uYW4vaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pcy1uYW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pcy1uYW4vcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9pcy1uYW4vc2hpbS5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2lzLXR5cGVkLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL3BvbHlmaWxsLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL3NoaW0uanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L3R5cGVzLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvd2hpY2gtdHlwZWQtYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9hdmFpbGFibGUtdHlwZWQtYXJyYXlzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL0ByZWR1eC1kZXZ0b29scy9leHRlbnNpb24vbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEN1cnJlbnRseSBpbiBzeW5jIHdpdGggTm9kZS5qcyBsaWIvYXNzZXJ0LmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvY29tbWl0LzJhNTFhZTQyNGE1MTNlYzlhNmFhMzQ2NmJhYTBjYzFkNTVkZDRmM2Jcbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9lcnJvcnMnKSxcbiAgICBfcmVxdWlyZSRjb2RlcyA9IF9yZXF1aXJlLmNvZGVzLFxuICAgIEVSUl9BTUJJR1VPVVNfQVJHVU1FTlQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfQU1CSUdVT1VTX0FSR1VNRU5ULFxuICAgIEVSUl9JTlZBTElEX0FSR19UWVBFID0gX3JlcXVpcmUkY29kZXMuRVJSX0lOVkFMSURfQVJHX1RZUEUsXG4gICAgRVJSX0lOVkFMSURfQVJHX1ZBTFVFID0gX3JlcXVpcmUkY29kZXMuRVJSX0lOVkFMSURfQVJHX1ZBTFVFLFxuICAgIEVSUl9JTlZBTElEX1JFVFVSTl9WQUxVRSA9IF9yZXF1aXJlJGNvZGVzLkVSUl9JTlZBTElEX1JFVFVSTl9WQUxVRSxcbiAgICBFUlJfTUlTU0lOR19BUkdTID0gX3JlcXVpcmUkY29kZXMuRVJSX01JU1NJTkdfQVJHUztcblxudmFyIEFzc2VydGlvbkVycm9yID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9hc3NlcnQvYXNzZXJ0aW9uX2Vycm9yJyk7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCd1dGlsLycpLFxuICAgIGluc3BlY3QgPSBfcmVxdWlyZTIuaW5zcGVjdDtcblxudmFyIF9yZXF1aXJlJHR5cGVzID0gcmVxdWlyZSgndXRpbC8nKS50eXBlcyxcbiAgICBpc1Byb21pc2UgPSBfcmVxdWlyZSR0eXBlcy5pc1Byb21pc2UsXG4gICAgaXNSZWdFeHAgPSBfcmVxdWlyZSR0eXBlcy5pc1JlZ0V4cDtcblxudmFyIG9iamVjdEFzc2lnbiA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduIDogcmVxdWlyZSgnZXM2LW9iamVjdC1hc3NpZ24nKS5hc3NpZ247XG52YXIgb2JqZWN0SXMgPSBPYmplY3QuaXMgPyBPYmplY3QuaXMgOiByZXF1aXJlKCdvYmplY3QtaXMnKTtcbnZhciBlcnJvckNhY2hlID0gbmV3IE1hcCgpO1xudmFyIGlzRGVlcEVxdWFsO1xudmFyIGlzRGVlcFN0cmljdEVxdWFsO1xudmFyIHBhcnNlRXhwcmVzc2lvbkF0O1xudmFyIGZpbmROb2RlQXJvdW5kO1xudmFyIGRlY29kZXI7XG5cbmZ1bmN0aW9uIGxhenlMb2FkQ29tcGFyaXNvbigpIHtcbiAgdmFyIGNvbXBhcmlzb24gPSByZXF1aXJlKCcuL2ludGVybmFsL3V0aWwvY29tcGFyaXNvbnMnKTtcblxuICBpc0RlZXBFcXVhbCA9IGNvbXBhcmlzb24uaXNEZWVwRXF1YWw7XG4gIGlzRGVlcFN0cmljdEVxdWFsID0gY29tcGFyaXNvbi5pc0RlZXBTdHJpY3RFcXVhbDtcbn0gLy8gRXNjYXBlIGNvbnRyb2wgY2hhcmFjdGVycyBidXQgbm90IFxcbiBhbmQgXFx0IHRvIGtlZXAgdGhlIGxpbmUgYnJlYWtzIGFuZFxuLy8gaW5kZW50YXRpb24gaW50YWN0LlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblxuXG52YXIgZXNjYXBlU2VxdWVuY2VzUmVnRXhwID0gL1tcXHgwMC1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZl0vZztcbnZhciBtZXRhID0gW1wiXFxcXHUwMDAwXCIsIFwiXFxcXHUwMDAxXCIsIFwiXFxcXHUwMDAyXCIsIFwiXFxcXHUwMDAzXCIsIFwiXFxcXHUwMDA0XCIsIFwiXFxcXHUwMDA1XCIsIFwiXFxcXHUwMDA2XCIsIFwiXFxcXHUwMDA3XCIsICdcXFxcYicsICcnLCAnJywgXCJcXFxcdTAwMGJcIiwgJ1xcXFxmJywgJycsIFwiXFxcXHUwMDBlXCIsIFwiXFxcXHUwMDBmXCIsIFwiXFxcXHUwMDEwXCIsIFwiXFxcXHUwMDExXCIsIFwiXFxcXHUwMDEyXCIsIFwiXFxcXHUwMDEzXCIsIFwiXFxcXHUwMDE0XCIsIFwiXFxcXHUwMDE1XCIsIFwiXFxcXHUwMDE2XCIsIFwiXFxcXHUwMDE3XCIsIFwiXFxcXHUwMDE4XCIsIFwiXFxcXHUwMDE5XCIsIFwiXFxcXHUwMDFhXCIsIFwiXFxcXHUwMDFiXCIsIFwiXFxcXHUwMDFjXCIsIFwiXFxcXHUwMDFkXCIsIFwiXFxcXHUwMDFlXCIsIFwiXFxcXHUwMDFmXCJdO1xuXG52YXIgZXNjYXBlRm4gPSBmdW5jdGlvbiBlc2NhcGVGbihzdHIpIHtcbiAgcmV0dXJuIG1ldGFbc3RyLmNoYXJDb2RlQXQoMCldO1xufTtcblxudmFyIHdhcm5lZCA9IGZhbHNlOyAvLyBUaGUgYXNzZXJ0IG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCB0aHJvd1xuLy8gQXNzZXJ0aW9uRXJyb3IncyB3aGVuIHBhcnRpY3VsYXIgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4gVGhlXG4vLyBhc3NlcnQgbW9kdWxlIG11c3QgY29uZm9ybSB0byB0aGUgZm9sbG93aW5nIGludGVyZmFjZS5cblxudmFyIGFzc2VydCA9IG1vZHVsZS5leHBvcnRzID0gb2s7XG52YXIgTk9fRVhDRVBUSU9OX1NFTlRJTkVMID0ge307IC8vIEFsbCBvZiB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBtdXN0IHRocm93IGFuIEFzc2VydGlvbkVycm9yXG4vLyB3aGVuIGEgY29ycmVzcG9uZGluZyBjb25kaXRpb24gaXMgbm90IG1ldCwgd2l0aCBhIG1lc3NhZ2UgdGhhdFxuLy8gbWF5IGJlIHVuZGVmaW5lZCBpZiBub3QgcHJvdmlkZWQuIEFsbCBhc3NlcnRpb24gbWV0aG9kcyBwcm92aWRlXG4vLyBib3RoIHRoZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyB0byB0aGUgYXNzZXJ0aW9uIGVycm9yIGZvclxuLy8gZGlzcGxheSBwdXJwb3Nlcy5cblxuZnVuY3Rpb24gaW5uZXJGYWlsKG9iaikge1xuICBpZiAob2JqLm1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgb2JqLm1lc3NhZ2U7XG4gIHRocm93IG5ldyBBc3NlcnRpb25FcnJvcihvYmopO1xufVxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0Rm4pIHtcbiAgdmFyIGFyZ3NMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW50ZXJuYWxNZXNzYWdlO1xuXG4gIGlmIChhcmdzTGVuID09PSAwKSB7XG4gICAgaW50ZXJuYWxNZXNzYWdlID0gJ0ZhaWxlZCc7XG4gIH0gZWxzZSBpZiAoYXJnc0xlbiA9PT0gMSkge1xuICAgIG1lc3NhZ2UgPSBhY3R1YWw7XG4gICAgYWN0dWFsID0gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGlmICh3YXJuZWQgPT09IGZhbHNlKSB7XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgICAgdmFyIHdhcm4gPSBwcm9jZXNzLmVtaXRXYXJuaW5nID8gcHJvY2Vzcy5lbWl0V2FybmluZyA6IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO1xuICAgICAgd2FybignYXNzZXJ0LmZhaWwoKSB3aXRoIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQgaXMgZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIGFzc2VydC5zdHJpY3RFcXVhbCgpIGluc3RlYWQgb3Igb25seSBwYXNzIGEgbWVzc2FnZS4nLCAnRGVwcmVjYXRpb25XYXJuaW5nJywgJ0RFUDAwOTQnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJnc0xlbiA9PT0gMikgb3BlcmF0b3IgPSAnIT0nO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgbWVzc2FnZTtcbiAgdmFyIGVyckFyZ3MgPSB7XG4gICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgIG9wZXJhdG9yOiBvcGVyYXRvciA9PT0gdW5kZWZpbmVkID8gJ2ZhaWwnIDogb3BlcmF0b3IsXG4gICAgc3RhY2tTdGFydEZuOiBzdGFja1N0YXJ0Rm4gfHwgZmFpbFxuICB9O1xuXG4gIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICBlcnJBcmdzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgdmFyIGVyciA9IG5ldyBBc3NlcnRpb25FcnJvcihlcnJBcmdzKTtcblxuICBpZiAoaW50ZXJuYWxNZXNzYWdlKSB7XG4gICAgZXJyLm1lc3NhZ2UgPSBpbnRlcm5hbE1lc3NhZ2U7XG4gICAgZXJyLmdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICB9XG5cbiAgdGhyb3cgZXJyO1xufVxuXG5hc3NlcnQuZmFpbCA9IGZhaWw7IC8vIFRoZSBBc3NlcnRpb25FcnJvciBpcyBkZWZpbmVkIGluIGludGVybmFsL2Vycm9yLlxuXG5hc3NlcnQuQXNzZXJ0aW9uRXJyb3IgPSBBc3NlcnRpb25FcnJvcjtcblxuZnVuY3Rpb24gaW5uZXJPayhmbiwgYXJnTGVuLCB2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdmFyIGdlbmVyYXRlZE1lc3NhZ2UgPSBmYWxzZTtcblxuICAgIGlmIChhcmdMZW4gPT09IDApIHtcbiAgICAgIGdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICAgICAgbWVzc2FnZSA9ICdObyB2YWx1ZSBhcmd1bWVudCBwYXNzZWQgdG8gYGFzc2VydC5vaygpYCc7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRocm93IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdmFyIGVyciA9IG5ldyBBc3NlcnRpb25FcnJvcih7XG4gICAgICBhY3R1YWw6IHZhbHVlLFxuICAgICAgZXhwZWN0ZWQ6IHRydWUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICc9PScsXG4gICAgICBzdGFja1N0YXJ0Rm46IGZuXG4gICAgfSk7XG4gICAgZXJyLmdlbmVyYXRlZE1lc3NhZ2UgPSBnZW5lcmF0ZWRNZXNzYWdlO1xuICAgIHRocm93IGVycjtcbiAgfVxufSAvLyBQdXJlIGFzc2VydGlvbiB0ZXN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdHJ1dGh5LCBhcyBkZXRlcm1pbmVkXG4vLyBieSAhIXZhbHVlLlxuXG5cbmZ1bmN0aW9uIG9rKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaW5uZXJPay5hcHBseSh2b2lkIDAsIFtvaywgYXJncy5sZW5ndGhdLmNvbmNhdChhcmdzKSk7XG59XG5cbmFzc2VydC5vayA9IG9rOyAvLyBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGggPT0uXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllcyAqL1xuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdhY3R1YWwnLCAnZXhwZWN0ZWQnKTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cblxuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnPT0nLFxuICAgICAgc3RhY2tTdGFydEZuOiBlcXVhbFxuICAgIH0pO1xuICB9XG59OyAvLyBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90XG4vLyBlcXVhbCB3aXRoICE9LlxuXG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblxuXG4gIGlmIChhY3R1YWwgPT0gZXhwZWN0ZWQpIHtcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgb3BlcmF0b3I6ICchPScsXG4gICAgICBzdGFja1N0YXJ0Rm46IG5vdEVxdWFsXG4gICAgfSk7XG4gIH1cbn07IC8vIFRoZSBlcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgYSBkZWVwIGVxdWFsaXR5IHJlbGF0aW9uLlxuXG5cbmFzc2VydC5kZWVwRXF1YWwgPSBmdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoaXNEZWVwRXF1YWwgPT09IHVuZGVmaW5lZCkgbGF6eUxvYWRDb21wYXJpc29uKCk7XG5cbiAgaWYgKCFpc0RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ2RlZXBFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IGRlZXBFcXVhbFxuICAgIH0pO1xuICB9XG59OyAvLyBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cblxuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVSUl9NSVNTSU5HX0FSR1MoJ2FjdHVhbCcsICdleHBlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuXG4gIGlmIChpc0RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ25vdERlZXBFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IG5vdERlZXBFcXVhbFxuICAgIH0pO1xuICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBkZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoaXNEZWVwRXF1YWwgPT09IHVuZGVmaW5lZCkgbGF6eUxvYWRDb21wYXJpc29uKCk7XG5cbiAgaWYgKCFpc0RlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ2RlZXBTdHJpY3RFcXVhbCcsXG4gICAgICBzdGFja1N0YXJ0Rm46IGRlZXBTdHJpY3RFcXVhbFxuICAgIH0pO1xuICB9XG59O1xuXG5hc3NlcnQubm90RGVlcFN0cmljdEVxdWFsID0gbm90RGVlcFN0cmljdEVxdWFsO1xuXG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoaXNEZWVwRXF1YWwgPT09IHVuZGVmaW5lZCkgbGF6eUxvYWRDb21wYXJpc29uKCk7XG5cbiAgaWYgKGlzRGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQpKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnbm90RGVlcFN0cmljdEVxdWFsJyxcbiAgICAgIHN0YWNrU3RhcnRGbjogbm90RGVlcFN0cmljdEVxdWFsXG4gICAgfSk7XG4gIH1cbn1cblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnYWN0dWFsJywgJ2V4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoIW9iamVjdElzKGFjdHVhbCwgZXhwZWN0ZWQpKSB7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiAnc3RyaWN0RXF1YWwnLFxuICAgICAgc3RhY2tTdGFydEZuOiBzdHJpY3RFcXVhbFxuICAgIH0pO1xuICB9XG59O1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdhY3R1YWwnLCAnZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGlmIChvYmplY3RJcyhhY3R1YWwsIGV4cGVjdGVkKSkge1xuICAgIGlubmVyRmFpbCh7XG4gICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBvcGVyYXRvcjogJ25vdFN0cmljdEVxdWFsJyxcbiAgICAgIHN0YWNrU3RhcnRGbjogbm90U3RyaWN0RXF1YWxcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIENvbXBhcmlzb24gPSBmdW5jdGlvbiBDb21wYXJpc29uKG9iaiwga2V5cywgYWN0dWFsKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBhcmlzb24pO1xuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChhY3R1YWwgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYWN0dWFsW2tleV0gPT09ICdzdHJpbmcnICYmIGlzUmVnRXhwKG9ialtrZXldKSAmJiBvYmpba2V5XS50ZXN0KGFjdHVhbFtrZXldKSkge1xuICAgICAgICBfdGhpc1trZXldID0gYWN0dWFsW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpc1trZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVFeGNlcHRpb25LZXkoYWN0dWFsLCBleHBlY3RlZCwga2V5LCBtZXNzYWdlLCBrZXlzLCBmbikge1xuICBpZiAoIShrZXkgaW4gYWN0dWFsKSB8fCAhaXNEZWVwU3RyaWN0RXF1YWwoYWN0dWFsW2tleV0sIGV4cGVjdGVkW2tleV0pKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgb2JqZWN0cyB0byBjcmVhdGUgYSBuaWNlIG91dHB1dC5cbiAgICAgIHZhciBhID0gbmV3IENvbXBhcmlzb24oYWN0dWFsLCBrZXlzKTtcbiAgICAgIHZhciBiID0gbmV3IENvbXBhcmlzb24oZXhwZWN0ZWQsIGtleXMsIGFjdHVhbCk7XG4gICAgICB2YXIgZXJyID0gbmV3IEFzc2VydGlvbkVycm9yKHtcbiAgICAgICAgYWN0dWFsOiBhLFxuICAgICAgICBleHBlY3RlZDogYixcbiAgICAgICAgb3BlcmF0b3I6ICdkZWVwU3RyaWN0RXF1YWwnLFxuICAgICAgICBzdGFja1N0YXJ0Rm46IGZuXG4gICAgICB9KTtcbiAgICAgIGVyci5hY3R1YWwgPSBhY3R1YWw7XG4gICAgICBlcnIuZXhwZWN0ZWQgPSBleHBlY3RlZDtcbiAgICAgIGVyci5vcGVyYXRvciA9IGZuLm5hbWU7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIG9wZXJhdG9yOiBmbi5uYW1lLFxuICAgICAgc3RhY2tTdGFydEZuOiBmblxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQsIG1zZywgZm4pIHtcbiAgaWYgKHR5cGVvZiBleHBlY3RlZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChpc1JlZ0V4cChleHBlY3RlZCkpIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7IC8vIGFzc2VydC5kb2VzTm90VGhyb3cgZG9lcyBub3QgYWNjZXB0IG9iamVjdHMuXG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19UWVBFKCdleHBlY3RlZCcsIFsnRnVuY3Rpb24nLCAnUmVnRXhwJ10sIGV4cGVjdGVkKTtcbiAgICB9IC8vIEhhbmRsZSBwcmltaXRpdmVzIHByb3Blcmx5LlxuXG5cbiAgICBpZiAoX3R5cGVvZihhY3R1YWwpICE9PSAnb2JqZWN0JyB8fCBhY3R1YWwgPT09IG51bGwpIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgQXNzZXJ0aW9uRXJyb3Ioe1xuICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICBtZXNzYWdlOiBtc2csXG4gICAgICAgIG9wZXJhdG9yOiAnZGVlcFN0cmljdEVxdWFsJyxcbiAgICAgICAgc3RhY2tTdGFydEZuOiBmblxuICAgICAgfSk7XG4gICAgICBlcnIub3BlcmF0b3IgPSBmbi5uYW1lO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwZWN0ZWQpOyAvLyBTcGVjaWFsIGhhbmRsZSBlcnJvcnMgdG8gbWFrZSBzdXJlIHRoZSBuYW1lIGFuZCB0aGUgbWVzc2FnZSBhcmUgY29tcGFyZWRcbiAgICAvLyBhcyB3ZWxsLlxuXG4gICAgaWYgKGV4cGVjdGVkIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGtleXMucHVzaCgnbmFtZScsICdtZXNzYWdlJyk7XG4gICAgfSBlbHNlIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVSUl9JTlZBTElEX0FSR19WQUxVRSgnZXJyb3InLCBleHBlY3RlZCwgJ21heSBub3QgYmUgYW4gZW1wdHkgb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGVlcEVxdWFsID09PSB1bmRlZmluZWQpIGxhenlMb2FkQ29tcGFyaXNvbigpO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGFjdHVhbFtrZXldID09PSAnc3RyaW5nJyAmJiBpc1JlZ0V4cChleHBlY3RlZFtrZXldKSAmJiBleHBlY3RlZFtrZXldLnRlc3QoYWN0dWFsW2tleV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29tcGFyZUV4Y2VwdGlvbktleShhY3R1YWwsIGV4cGVjdGVkLCBrZXksIG1zZywga2V5cywgZm4pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIEd1YXJkIGluc3RhbmNlb2YgYWdhaW5zdCBhcnJvdyBmdW5jdGlvbnMgYXMgdGhleSBkb24ndCBoYXZlIGEgcHJvdG90eXBlLlxuXG5cbiAgaWYgKGV4cGVjdGVkLnByb3RvdHlwZSAhPT0gdW5kZWZpbmVkICYmIGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0dWFsKGZuKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2ZuJywgJ0Z1bmN0aW9uJywgZm4pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBmbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICByZXR1cm4gTk9fRVhDRVBUSU9OX1NFTlRJTkVMO1xufVxuXG5mdW5jdGlvbiBjaGVja0lzUHJvbWlzZShvYmopIHtcbiAgLy8gQWNjZXB0IG5hdGl2ZSBFUzYgcHJvbWlzZXMgYW5kIHByb21pc2VzIHRoYXQgYXJlIGltcGxlbWVudGVkIGluIGEgc2ltaWxhclxuICAvLyB3YXkuIERvIG5vdCBhY2NlcHQgdGhlbmFibGVzIHRoYXQgdXNlIGEgZnVuY3Rpb24gYXMgYG9iamAgYW5kIHRoYXQgaGF2ZSBub1xuICAvLyBgY2F0Y2hgIGhhbmRsZXIuXG4gIC8vIFRPRE86IHRoZW5hYmxlcyBhcmUgY2hlY2tlZCB1cCB1bnRpbCB0aGV5IGhhdmUgdGhlIGNvcnJlY3QgbWV0aG9kcyxcbiAgLy8gYnV0IGFjY29yZGluZyB0byBkb2N1bWVudGF0aW9uLCB0aGUgYHRoZW5gIG1ldGhvZCBzaG91bGQgcmVjZWl2ZVxuICAvLyB0aGUgYGZ1bGZpbGxgIGFuZCBgcmVqZWN0YCBhcmd1bWVudHMgYXMgd2VsbCBvciBpdCBtYXkgYmUgbmV2ZXIgcmVzb2x2ZWQuXG4gIHJldHVybiBpc1Byb21pc2Uob2JqKSB8fCBvYmogIT09IG51bGwgJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gd2FpdEZvckFjdHVhbChwcm9taXNlRm4pIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHRQcm9taXNlO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9taXNlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJldHVybiBhIHJlamVjdGVkIHByb21pc2UgaWYgYHByb21pc2VGbmAgdGhyb3dzIHN5bmNocm9ub3VzbHkuXG4gICAgICByZXN1bHRQcm9taXNlID0gcHJvbWlzZUZuKCk7IC8vIEZhaWwgaW4gY2FzZSBubyBwcm9taXNlIGlzIHJldHVybmVkLlxuXG4gICAgICBpZiAoIWNoZWNrSXNQcm9taXNlKHJlc3VsdFByb21pc2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9SRVRVUk5fVkFMVUUoJ2luc3RhbmNlIG9mIFByb21pc2UnLCAncHJvbWlzZUZuJywgcmVzdWx0UHJvbWlzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGVja0lzUHJvbWlzZShwcm9taXNlRm4pKSB7XG4gICAgICByZXN1bHRQcm9taXNlID0gcHJvbWlzZUZuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ3Byb21pc2VGbicsIFsnRnVuY3Rpb24nLCAnUHJvbWlzZSddLCBwcm9taXNlRm4pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIE5PX0VYQ0VQVElPTl9TRU5USU5FTDtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBlY3RzRXJyb3Ioc3RhY2tTdGFydEZuLCBhY3R1YWwsIGVycm9yLCBtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9BUkdfVFlQRSgnZXJyb3InLCBbJ09iamVjdCcsICdFcnJvcicsICdGdW5jdGlvbicsICdSZWdFeHAnXSwgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKGFjdHVhbCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFjdHVhbC5tZXNzYWdlID09PSBlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRVJSX0FNQklHVU9VU19BUkdVTUVOVCgnZXJyb3IvbWVzc2FnZScsIFwiVGhlIGVycm9yIG1lc3NhZ2UgXFxcIlwiLmNvbmNhdChhY3R1YWwubWVzc2FnZSwgXCJcXFwiIGlzIGlkZW50aWNhbCB0byB0aGUgbWVzc2FnZS5cIikpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWN0dWFsID09PSBlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVSUl9BTUJJR1VPVVNfQVJHVU1FTlQoJ2Vycm9yL21lc3NhZ2UnLCBcIlRoZSBlcnJvciBcXFwiXCIuY29uY2F0KGFjdHVhbCwgXCJcXFwiIGlzIGlkZW50aWNhbCB0byB0aGUgbWVzc2FnZS5cIikpO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBlcnJvcjtcbiAgICBlcnJvciA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChlcnJvciAhPSBudWxsICYmIF90eXBlb2YoZXJyb3IpICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXJyb3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2Vycm9yJywgWydPYmplY3QnLCAnRXJyb3InLCAnRnVuY3Rpb24nLCAnUmVnRXhwJ10sIGVycm9yKTtcbiAgfVxuXG4gIGlmIChhY3R1YWwgPT09IE5PX0VYQ0VQVElPTl9TRU5USU5FTCkge1xuICAgIHZhciBkZXRhaWxzID0gJyc7XG5cbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IubmFtZSkge1xuICAgICAgZGV0YWlscyArPSBcIiAoXCIuY29uY2F0KGVycm9yLm5hbWUsIFwiKVwiKTtcbiAgICB9XG5cbiAgICBkZXRhaWxzICs9IG1lc3NhZ2UgPyBcIjogXCIuY29uY2F0KG1lc3NhZ2UpIDogJy4nO1xuICAgIHZhciBmblR5cGUgPSBzdGFja1N0YXJ0Rm4ubmFtZSA9PT0gJ3JlamVjdHMnID8gJ3JlamVjdGlvbicgOiAnZXhjZXB0aW9uJztcbiAgICBpbm5lckZhaWwoe1xuICAgICAgYWN0dWFsOiB1bmRlZmluZWQsXG4gICAgICBleHBlY3RlZDogZXJyb3IsXG4gICAgICBvcGVyYXRvcjogc3RhY2tTdGFydEZuLm5hbWUsXG4gICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgZXhwZWN0ZWQgXCIuY29uY2F0KGZuVHlwZSkuY29uY2F0KGRldGFpbHMpLFxuICAgICAgc3RhY2tTdGFydEZuOiBzdGFja1N0YXJ0Rm5cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChlcnJvciAmJiAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBlcnJvciwgbWVzc2FnZSwgc3RhY2tTdGFydEZuKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHBlY3RzTm9FcnJvcihzdGFja1N0YXJ0Rm4sIGFjdHVhbCwgZXJyb3IsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PT0gTk9fRVhDRVBUSU9OX1NFTlRJTkVMKSByZXR1cm47XG5cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICBtZXNzYWdlID0gZXJyb3I7XG4gICAgZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIWVycm9yIHx8IGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXJyb3IpKSB7XG4gICAgdmFyIGRldGFpbHMgPSBtZXNzYWdlID8gXCI6IFwiLmNvbmNhdChtZXNzYWdlKSA6ICcuJztcbiAgICB2YXIgZm5UeXBlID0gc3RhY2tTdGFydEZuLm5hbWUgPT09ICdkb2VzTm90UmVqZWN0JyA/ICdyZWplY3Rpb24nIDogJ2V4Y2VwdGlvbic7XG4gICAgaW5uZXJGYWlsKHtcbiAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgZXhwZWN0ZWQ6IGVycm9yLFxuICAgICAgb3BlcmF0b3I6IHN0YWNrU3RhcnRGbi5uYW1lLFxuICAgICAgbWVzc2FnZTogXCJHb3QgdW53YW50ZWQgXCIuY29uY2F0KGZuVHlwZSkuY29uY2F0KGRldGFpbHMsIFwiXFxuXCIpICsgXCJBY3R1YWwgbWVzc2FnZTogXFxcIlwiLmNvbmNhdChhY3R1YWwgJiYgYWN0dWFsLm1lc3NhZ2UsIFwiXFxcIlwiKSxcbiAgICAgIHN0YWNrU3RhcnRGbjogc3RhY2tTdGFydEZuXG4gICAgfSk7XG4gIH1cblxuICB0aHJvdyBhY3R1YWw7XG59XG5cbmFzc2VydC50aHJvd3MgPSBmdW5jdGlvbiB0aHJvd3MocHJvbWlzZUZuKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGV4cGVjdHNFcnJvci5hcHBseSh2b2lkIDAsIFt0aHJvd3MsIGdldEFjdHVhbChwcm9taXNlRm4pXS5jb25jYXQoYXJncykpO1xufTtcblxuYXNzZXJ0LnJlamVjdHMgPSBmdW5jdGlvbiByZWplY3RzKHByb21pc2VGbikge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gd2FpdEZvckFjdHVhbChwcm9taXNlRm4pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiBleHBlY3RzRXJyb3IuYXBwbHkodm9pZCAwLCBbcmVqZWN0cywgcmVzdWx0XS5jb25jYXQoYXJncykpO1xuICB9KTtcbn07XG5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbiBkb2VzTm90VGhyb3coZm4pIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgZXhwZWN0c05vRXJyb3IuYXBwbHkodm9pZCAwLCBbZG9lc05vdFRocm93LCBnZXRBY3R1YWwoZm4pXS5jb25jYXQoYXJncykpO1xufTtcblxuYXNzZXJ0LmRvZXNOb3RSZWplY3QgPSBmdW5jdGlvbiBkb2VzTm90UmVqZWN0KGZuKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiB3YWl0Rm9yQWN0dWFsKGZuKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gZXhwZWN0c05vRXJyb3IuYXBwbHkodm9pZCAwLCBbZG9lc05vdFJlamVjdCwgcmVzdWx0XS5jb25jYXQoYXJncykpO1xuICB9KTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24gaWZFcnJvcihlcnIpIHtcbiAgaWYgKGVyciAhPT0gbnVsbCAmJiBlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtZXNzYWdlID0gJ2lmRXJyb3IgZ290IHVud2FudGVkIGV4Y2VwdGlvbjogJztcblxuICAgIGlmIChfdHlwZW9mKGVycikgPT09ICdvYmplY3QnICYmIHR5cGVvZiBlcnIubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5sZW5ndGggPT09IDAgJiYgZXJyLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gZXJyLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlICs9IGVyci5tZXNzYWdlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlICs9IGluc3BlY3QoZXJyKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3RXJyID0gbmV3IEFzc2VydGlvbkVycm9yKHtcbiAgICAgIGFjdHVhbDogZXJyLFxuICAgICAgZXhwZWN0ZWQ6IG51bGwsXG4gICAgICBvcGVyYXRvcjogJ2lmRXJyb3InLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHN0YWNrU3RhcnRGbjogaWZFcnJvclxuICAgIH0pOyAvLyBNYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSBhIHN0YWNrIHRyYWNlIVxuXG4gICAgdmFyIG9yaWdTdGFjayA9IGVyci5zdGFjaztcblxuICAgIGlmICh0eXBlb2Ygb3JpZ1N0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyB3aWxsIHJlbW92ZSBhbnkgZHVwbGljYXRlZCBmcmFtZXMgZnJvbSB0aGUgZXJyb3IgZnJhbWVzIHRha2VuXG4gICAgICAvLyBmcm9tIHdpdGhpbiBgaWZFcnJvcmAgYW5kIGFkZCB0aGUgb3JpZ2luYWwgZXJyb3IgZnJhbWVzIHRvIHRoZSBuZXdseVxuICAgICAgLy8gY3JlYXRlZCBvbmVzLlxuICAgICAgdmFyIHRtcDIgPSBvcmlnU3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdG1wMi5zaGlmdCgpOyAvLyBGaWx0ZXIgYWxsIGZyYW1lcyBleGlzdGluZyBpbiBlcnIuc3RhY2suXG5cbiAgICAgIHZhciB0bXAxID0gbmV3RXJyLnN0YWNrLnNwbGl0KCdcXG4nKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bXAyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIGZyYW1lLlxuICAgICAgICB2YXIgcG9zID0gdG1wMS5pbmRleE9mKHRtcDJbaV0pO1xuXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XG4gICAgICAgICAgLy8gT25seSBrZWVwIG5ldyBmcmFtZXMuXG4gICAgICAgICAgdG1wMSA9IHRtcDEuc2xpY2UoMCwgcG9zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXdFcnIuc3RhY2sgPSBcIlwiLmNvbmNhdCh0bXAxLmpvaW4oJ1xcbicpLCBcIlxcblwiKS5jb25jYXQodG1wMi5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3RXJyO1xuICB9XG59OyAvLyBFeHBvc2UgYSBzdHJpY3Qgb25seSB2YXJpYW50IG9mIGFzc2VydFxuXG5cbmZ1bmN0aW9uIHN0cmljdCgpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgaW5uZXJPay5hcHBseSh2b2lkIDAsIFtzdHJpY3QsIGFyZ3MubGVuZ3RoXS5jb25jYXQoYXJncykpO1xufVxuXG5hc3NlcnQuc3RyaWN0ID0gb2JqZWN0QXNzaWduKHN0cmljdCwgYXNzZXJ0LCB7XG4gIGVxdWFsOiBhc3NlcnQuc3RyaWN0RXF1YWwsXG4gIGRlZXBFcXVhbDogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCxcbiAgbm90RXF1YWw6IGFzc2VydC5ub3RTdHJpY3RFcXVhbCxcbiAgbm90RGVlcEVxdWFsOiBhc3NlcnQubm90RGVlcFN0cmljdEVxdWFsXG59KTtcbmFzc2VydC5zdHJpY3Quc3RyaWN0ID0gYXNzZXJ0LnN0cmljdDsiLCIvLyBDdXJyZW50bHkgaW4gc3luYyB3aXRoIE5vZGUuanMgbGliL2ludGVybmFsL2Fzc2VydC9hc3NlcnRpb25fZXJyb3IuanNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9jb21taXQvMDgxNzg0MGY3NzUwMzIxNjlkZGQ3MGM4NWFjMDU5ZjE4ZmZjYzgxY1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgndXRpbC8nKSxcbiAgICBpbnNwZWN0ID0gX3JlcXVpcmUuaW5zcGVjdDtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4uL2Vycm9ycycpLFxuICAgIEVSUl9JTlZBTElEX0FSR19UWVBFID0gX3JlcXVpcmUyLmNvZGVzLkVSUl9JTlZBTElEX0FSR19UWVBFOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvZW5kc1dpdGhcblxuXG5mdW5jdGlvbiBlbmRzV2l0aChzdHIsIHNlYXJjaCwgdGhpc19sZW4pIHtcbiAgaWYgKHRoaXNfbGVuID09PSB1bmRlZmluZWQgfHwgdGhpc19sZW4gPiBzdHIubGVuZ3RoKSB7XG4gICAgdGhpc19sZW4gPSBzdHIubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5zdWJzdHJpbmcodGhpc19sZW4gLSBzZWFyY2gubGVuZ3RoLCB0aGlzX2xlbikgPT09IHNlYXJjaDtcbn0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3JlcGVhdFxuXG5cbmZ1bmN0aW9uIHJlcGVhdChzdHIsIGNvdW50KSB7XG4gIGNvdW50ID0gTWF0aC5mbG9vcihjb3VudCk7XG4gIGlmIChzdHIubGVuZ3RoID09IDAgfHwgY291bnQgPT0gMCkgcmV0dXJuICcnO1xuICB2YXIgbWF4Q291bnQgPSBzdHIubGVuZ3RoICogY291bnQ7XG4gIGNvdW50ID0gTWF0aC5mbG9vcihNYXRoLmxvZyhjb3VudCkgLyBNYXRoLmxvZygyKSk7XG5cbiAgd2hpbGUgKGNvdW50KSB7XG4gICAgc3RyICs9IHN0cjtcbiAgICBjb3VudC0tO1xuICB9XG5cbiAgc3RyICs9IHN0ci5zdWJzdHJpbmcoMCwgbWF4Q291bnQgLSBzdHIubGVuZ3RoKTtcbiAgcmV0dXJuIHN0cjtcbn1cblxudmFyIGJsdWUgPSAnJztcbnZhciBncmVlbiA9ICcnO1xudmFyIHJlZCA9ICcnO1xudmFyIHdoaXRlID0gJyc7XG52YXIga1JlYWRhYmxlT3BlcmF0b3IgPSB7XG4gIGRlZXBTdHJpY3RFcXVhbDogJ0V4cGVjdGVkIHZhbHVlcyB0byBiZSBzdHJpY3RseSBkZWVwLWVxdWFsOicsXG4gIHN0cmljdEVxdWFsOiAnRXhwZWN0ZWQgdmFsdWVzIHRvIGJlIHN0cmljdGx5IGVxdWFsOicsXG4gIHN0cmljdEVxdWFsT2JqZWN0OiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiB0byBiZSByZWZlcmVuY2UtZXF1YWwgdG8gXCJleHBlY3RlZFwiOicsXG4gIGRlZXBFcXVhbDogJ0V4cGVjdGVkIHZhbHVlcyB0byBiZSBsb29zZWx5IGRlZXAtZXF1YWw6JyxcbiAgZXF1YWw6ICdFeHBlY3RlZCB2YWx1ZXMgdG8gYmUgbG9vc2VseSBlcXVhbDonLFxuICBub3REZWVwU3RyaWN0RXF1YWw6ICdFeHBlY3RlZCBcImFjdHVhbFwiIG5vdCB0byBiZSBzdHJpY3RseSBkZWVwLWVxdWFsIHRvOicsXG4gIG5vdFN0cmljdEVxdWFsOiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiB0byBiZSBzdHJpY3RseSB1bmVxdWFsIHRvOicsXG4gIG5vdFN0cmljdEVxdWFsT2JqZWN0OiAnRXhwZWN0ZWQgXCJhY3R1YWxcIiBub3QgdG8gYmUgcmVmZXJlbmNlLWVxdWFsIHRvIFwiZXhwZWN0ZWRcIjonLFxuICBub3REZWVwRXF1YWw6ICdFeHBlY3RlZCBcImFjdHVhbFwiIG5vdCB0byBiZSBsb29zZWx5IGRlZXAtZXF1YWwgdG86JyxcbiAgbm90RXF1YWw6ICdFeHBlY3RlZCBcImFjdHVhbFwiIHRvIGJlIGxvb3NlbHkgdW5lcXVhbCB0bzonLFxuICBub3RJZGVudGljYWw6ICdWYWx1ZXMgaWRlbnRpY2FsIGJ1dCBub3QgcmVmZXJlbmNlLWVxdWFsOidcbn07IC8vIENvbXBhcmluZyBzaG9ydCBwcmltaXRpdmVzIHNob3VsZCBqdXN0IHNob3cgPT09IC8gIT09IGluc3RlYWQgb2YgdXNpbmcgdGhlXG4vLyBkaWZmLlxuXG52YXIga01heFNob3J0TGVuZ3RoID0gMTA7XG5cbmZ1bmN0aW9uIGNvcHlFcnJvcihzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIgdGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKSk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsICdtZXNzYWdlJywge1xuICAgIHZhbHVlOiBzb3VyY2UubWVzc2FnZVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFZhbHVlKHZhbCkge1xuICAvLyBUaGUgdXRpbC5pbnNwZWN0IGRlZmF1bHQgdmFsdWVzIGNvdWxkIGJlIGNoYW5nZWQuIFRoaXMgbWFrZXMgc3VyZSB0aGVcbiAgLy8gZXJyb3IgbWVzc2FnZXMgY29udGFpbiB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIG5ldmVydGhlbGVzcy5cbiAgcmV0dXJuIGluc3BlY3QodmFsLCB7XG4gICAgY29tcGFjdDogZmFsc2UsXG4gICAgY3VzdG9tSW5zcGVjdDogZmFsc2UsXG4gICAgZGVwdGg6IDEwMDAsXG4gICAgbWF4QXJyYXlMZW5ndGg6IEluZmluaXR5LFxuICAgIC8vIEFzc2VydCBjb21wYXJlcyBvbmx5IGVudW1lcmFibGUgcHJvcGVydGllcyAod2l0aCBhIGZldyBleGNlcHRpb25zKS5cbiAgICBzaG93SGlkZGVuOiBmYWxzZSxcbiAgICAvLyBIYXZpbmcgYSBsb25nIGxpbmUgYXMgZXJyb3IgaXMgYmV0dGVyIHRoYW4gd3JhcHBpbmcgdGhlIGxpbmUgZm9yXG4gICAgLy8gY29tcGFyaXNvbiBmb3Igbm93LlxuICAgIC8vIFRPRE8oQnJpZGdlQVIpOiBgYnJlYWtMZW5ndGhgIHNob3VsZCBiZSBsaW1pdGVkIGFzIHNvb24gYXMgc29vbiBhcyB3ZVxuICAgIC8vIGhhdmUgbWV0YSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5zcGVjdGVkIHByb3BlcnRpZXMgKGkuZS4sIGtub3cgd2hlcmVcbiAgICAvLyBpbiB3aGF0IGxpbmUgdGhlIHByb3BlcnR5IHN0YXJ0cyBhbmQgZW5kcykuXG4gICAgYnJlYWtMZW5ndGg6IEluZmluaXR5LFxuICAgIC8vIEFzc2VydCBkb2VzIG5vdCBkZXRlY3QgcHJveGllcyBjdXJyZW50bHkuXG4gICAgc2hvd1Byb3h5OiBmYWxzZSxcbiAgICBzb3J0ZWQ6IHRydWUsXG4gICAgLy8gSW5zcGVjdCBnZXR0ZXJzIGFzIHdlIGFsc28gY2hlY2sgdGhlbSB3aGVuIGNvbXBhcmluZyBlbnRyaWVzLlxuICAgIGdldHRlcnM6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVyckRpZmYoYWN0dWFsLCBleHBlY3RlZCwgb3BlcmF0b3IpIHtcbiAgdmFyIG90aGVyID0gJyc7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIGxhc3RQb3MgPSAwO1xuICB2YXIgZW5kID0gJyc7XG4gIHZhciBza2lwcGVkID0gZmFsc2U7XG4gIHZhciBhY3R1YWxJbnNwZWN0ZWQgPSBpbnNwZWN0VmFsdWUoYWN0dWFsKTtcbiAgdmFyIGFjdHVhbExpbmVzID0gYWN0dWFsSW5zcGVjdGVkLnNwbGl0KCdcXG4nKTtcbiAgdmFyIGV4cGVjdGVkTGluZXMgPSBpbnNwZWN0VmFsdWUoZXhwZWN0ZWQpLnNwbGl0KCdcXG4nKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaW5kaWNhdG9yID0gJyc7IC8vIEluIGNhc2UgYm90aCB2YWx1ZXMgYXJlIG9iamVjdHMgZXhwbGljaXRseSBtYXJrIHRoZW0gYXMgbm90IHJlZmVyZW5jZSBlcXVhbFxuICAvLyBmb3IgdGhlIGBzdHJpY3RFcXVhbGAgb3BlcmF0b3IuXG5cbiAgaWYgKG9wZXJhdG9yID09PSAnc3RyaWN0RXF1YWwnICYmIF90eXBlb2YoYWN0dWFsKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihleHBlY3RlZCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCAmJiBleHBlY3RlZCAhPT0gbnVsbCkge1xuICAgIG9wZXJhdG9yID0gJ3N0cmljdEVxdWFsT2JqZWN0JztcbiAgfSAvLyBJZiBcImFjdHVhbFwiIGFuZCBcImV4cGVjdGVkXCIgZml0IG9uIGEgc2luZ2xlIGxpbmUgYW5kIHRoZXkgYXJlIG5vdCBzdHJpY3RseVxuICAvLyBlcXVhbCwgY2hlY2sgZnVydGhlciBzcGVjaWFsIGhhbmRsaW5nLlxuXG5cbiAgaWYgKGFjdHVhbExpbmVzLmxlbmd0aCA9PT0gMSAmJiBleHBlY3RlZExpbmVzLmxlbmd0aCA9PT0gMSAmJiBhY3R1YWxMaW5lc1swXSAhPT0gZXhwZWN0ZWRMaW5lc1swXSkge1xuICAgIHZhciBpbnB1dExlbmd0aCA9IGFjdHVhbExpbmVzWzBdLmxlbmd0aCArIGV4cGVjdGVkTGluZXNbMF0ubGVuZ3RoOyAvLyBJZiB0aGUgY2hhcmFjdGVyIGxlbmd0aCBvZiBcImFjdHVhbFwiIGFuZCBcImV4cGVjdGVkXCIgdG9nZXRoZXIgaXMgbGVzcyB0aGFuXG4gICAgLy8ga01heFNob3J0TGVuZ3RoIGFuZCBpZiBuZWl0aGVyIGlzIGFuIG9iamVjdCBhbmQgYXQgbGVhc3Qgb25lIG9mIHRoZW0gaXNcbiAgICAvLyBub3QgYHplcm9gLCB1c2UgdGhlIHN0cmljdCBlcXVhbCBjb21wYXJpc29uIHRvIHZpc3VhbGl6ZSB0aGUgb3V0cHV0LlxuXG4gICAgaWYgKGlucHV0TGVuZ3RoIDw9IGtNYXhTaG9ydExlbmd0aCkge1xuICAgICAgaWYgKChfdHlwZW9mKGFjdHVhbCkgIT09ICdvYmplY3QnIHx8IGFjdHVhbCA9PT0gbnVsbCkgJiYgKF90eXBlb2YoZXhwZWN0ZWQpICE9PSAnb2JqZWN0JyB8fCBleHBlY3RlZCA9PT0gbnVsbCkgJiYgKGFjdHVhbCAhPT0gMCB8fCBleHBlY3RlZCAhPT0gMCkpIHtcbiAgICAgICAgLy8gLTAgPT09ICswXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChrUmVhZGFibGVPcGVyYXRvcltvcGVyYXRvcl0sIFwiXFxuXFxuXCIpICsgXCJcIi5jb25jYXQoYWN0dWFsTGluZXNbMF0sIFwiICE9PSBcIikuY29uY2F0KGV4cGVjdGVkTGluZXNbMF0sIFwiXFxuXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgIT09ICdzdHJpY3RFcXVhbE9iamVjdCcpIHtcbiAgICAgIC8vIElmIHRoZSBzdGRlcnIgaXMgYSB0dHkgYW5kIHRoZSBpbnB1dCBsZW5ndGggaXMgbG93ZXIgdGhhbiB0aGUgY3VycmVudFxuICAgICAgLy8gY29sdW1ucyBwZXIgbGluZSwgYWRkIGEgbWlzbWF0Y2ggaW5kaWNhdG9yIGJlbG93IHRoZSBvdXRwdXQuIElmIGl0IGlzXG4gICAgICAvLyBub3QgYSB0dHksIHVzZSBhIGRlZmF1bHQgdmFsdWUgb2YgODAgY2hhcmFjdGVycy5cbiAgICAgIHZhciBtYXhMZW5ndGggPSBwcm9jZXNzLnN0ZGVyciAmJiBwcm9jZXNzLnN0ZGVyci5pc1RUWSA/IHByb2Nlc3Muc3RkZXJyLmNvbHVtbnMgOiA4MDtcblxuICAgICAgaWYgKGlucHV0TGVuZ3RoIDwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIHdoaWxlIChhY3R1YWxMaW5lc1swXVtpXSA9PT0gZXhwZWN0ZWRMaW5lc1swXVtpXSkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfSAvLyBJZ25vcmUgdGhlIGZpcnN0IGNoYXJhY3RlcnMuXG5cblxuICAgICAgICBpZiAoaSA+IDIpIHtcbiAgICAgICAgICAvLyBBZGQgcG9zaXRpb24gaW5kaWNhdG9yIGZvciB0aGUgZmlyc3QgbWlzbWF0Y2ggaW4gY2FzZSBpdCBpcyBhXG4gICAgICAgICAgLy8gc2luZ2xlIGxpbmUgYW5kIHRoZSBpbnB1dCBsZW5ndGggaXMgbGVzcyB0aGFuIHRoZSBjb2x1bW4gbGVuZ3RoLlxuICAgICAgICAgIGluZGljYXRvciA9IFwiXFxuICBcIi5jb25jYXQocmVwZWF0KCcgJywgaSksIFwiXlwiKTtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZW1vdmUgYWxsIGVuZGluZyBsaW5lcyB0aGF0IG1hdGNoICh0aGlzIG9wdGltaXplcyB0aGUgb3V0cHV0IGZvclxuICAvLyByZWFkYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgbnVtYmVyIG9mIHRvdGFsIGNoYW5nZWQgbGluZXMpLlxuXG5cbiAgdmFyIGEgPSBhY3R1YWxMaW5lc1thY3R1YWxMaW5lcy5sZW5ndGggLSAxXTtcbiAgdmFyIGIgPSBleHBlY3RlZExpbmVzW2V4cGVjdGVkTGluZXMubGVuZ3RoIC0gMV07XG5cbiAgd2hpbGUgKGEgPT09IGIpIHtcbiAgICBpZiAoaSsrIDwgMikge1xuICAgICAgZW5kID0gXCJcXG4gIFwiLmNvbmNhdChhKS5jb25jYXQoZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXIgPSBhO1xuICAgIH1cblxuICAgIGFjdHVhbExpbmVzLnBvcCgpO1xuICAgIGV4cGVjdGVkTGluZXMucG9wKCk7XG4gICAgaWYgKGFjdHVhbExpbmVzLmxlbmd0aCA9PT0gMCB8fCBleHBlY3RlZExpbmVzLmxlbmd0aCA9PT0gMCkgYnJlYWs7XG4gICAgYSA9IGFjdHVhbExpbmVzW2FjdHVhbExpbmVzLmxlbmd0aCAtIDFdO1xuICAgIGIgPSBleHBlY3RlZExpbmVzW2V4cGVjdGVkTGluZXMubGVuZ3RoIC0gMV07XG4gIH1cblxuICB2YXIgbWF4TGluZXMgPSBNYXRoLm1heChhY3R1YWxMaW5lcy5sZW5ndGgsIGV4cGVjdGVkTGluZXMubGVuZ3RoKTsgLy8gU3RyaWN0IGVxdWFsIHdpdGggaWRlbnRpY2FsIG9iamVjdHMgdGhhdCBhcmUgbm90IGlkZW50aWNhbCBieSByZWZlcmVuY2UuXG4gIC8vIEUuZy4sIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoeyBhOiBTeW1ib2woKSB9LCB7IGE6IFN5bWJvbCgpIH0pXG5cbiAgaWYgKG1heExpbmVzID09PSAwKSB7XG4gICAgLy8gV2UgaGF2ZSB0byBnZXQgdGhlIHJlc3VsdCBhZ2Fpbi4gVGhlIGxpbmVzIHdlcmUgYWxsIHJlbW92ZWQgYmVmb3JlLlxuICAgIHZhciBfYWN0dWFsTGluZXMgPSBhY3R1YWxJbnNwZWN0ZWQuc3BsaXQoJ1xcbicpOyAvLyBPbmx5IHJlbW92ZSBsaW5lcyBpbiBjYXNlIGl0IG1ha2VzIHNlbnNlIHRvIGNvbGxhcHNlIHRob3NlLlxuICAgIC8vIFRPRE86IEFjY2VwdCBlbnYgdG8gYWx3YXlzIHNob3cgdGhlIGZ1bGwgZXJyb3IuXG5cblxuICAgIGlmIChfYWN0dWFsTGluZXMubGVuZ3RoID4gMzApIHtcbiAgICAgIF9hY3R1YWxMaW5lc1syNl0gPSBcIlwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuXG4gICAgICB3aGlsZSAoX2FjdHVhbExpbmVzLmxlbmd0aCA+IDI3KSB7XG4gICAgICAgIF9hY3R1YWxMaW5lcy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIi5jb25jYXQoa1JlYWRhYmxlT3BlcmF0b3Iubm90SWRlbnRpY2FsLCBcIlxcblxcblwiKS5jb25jYXQoX2FjdHVhbExpbmVzLmpvaW4oJ1xcbicpLCBcIlxcblwiKTtcbiAgfVxuXG4gIGlmIChpID4gMykge1xuICAgIGVuZCA9IFwiXFxuXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSkuY29uY2F0KGVuZCk7XG4gICAgc2tpcHBlZCA9IHRydWU7XG4gIH1cblxuICBpZiAob3RoZXIgIT09ICcnKSB7XG4gICAgZW5kID0gXCJcXG4gIFwiLmNvbmNhdChvdGhlcikuY29uY2F0KGVuZCk7XG4gICAgb3RoZXIgPSAnJztcbiAgfVxuXG4gIHZhciBwcmludGVkTGluZXMgPSAwO1xuICB2YXIgbXNnID0ga1JlYWRhYmxlT3BlcmF0b3Jbb3BlcmF0b3JdICsgXCJcXG5cIi5jb25jYXQoZ3JlZW4sIFwiKyBhY3R1YWxcIikuY29uY2F0KHdoaXRlLCBcIiBcIikuY29uY2F0KHJlZCwgXCItIGV4cGVjdGVkXCIpLmNvbmNhdCh3aGl0ZSk7XG4gIHZhciBza2lwcGVkTXNnID0gXCIgXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSwgXCIgTGluZXMgc2tpcHBlZFwiKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbWF4TGluZXM7IGkrKykge1xuICAgIC8vIE9ubHkgZXh0cmEgZXhwZWN0ZWQgbGluZXMgZXhpc3RcbiAgICB2YXIgY3VyID0gaSAtIGxhc3RQb3M7XG5cbiAgICBpZiAoYWN0dWFsTGluZXMubGVuZ3RoIDwgaSArIDEpIHtcbiAgICAgIC8vIElmIHRoZSBsYXN0IGRpdmVyZ2luZyBsaW5lIGlzIG1vcmUgdGhhbiBvbmUgbGluZSBhYm92ZSBhbmQgdGhlXG4gICAgICAvLyBjdXJyZW50IGxpbmUgaXMgYXQgbGVhc3QgbGluZSB0aHJlZSwgYWRkIHNvbWUgb2YgdGhlIGZvcm1lciBsaW5lcyBhbmRcbiAgICAgIC8vIGFsc28gYWRkIGRvdHMgdG8gaW5kaWNhdGUgc2tpcHBlZCBlbnRyaWVzLlxuICAgICAgaWYgKGN1ciA+IDEgJiYgaSA+IDIpIHtcbiAgICAgICAgaWYgKGN1ciA+IDQpIHtcbiAgICAgICAgICByZXMgKz0gXCJcXG5cIi5jb25jYXQoYmx1ZSwgXCIuLi5cIikuY29uY2F0KHdoaXRlKTtcbiAgICAgICAgICBza2lwcGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXIgPiAzKSB7XG4gICAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoZXhwZWN0ZWRMaW5lc1tpIC0gMl0pO1xuICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoZXhwZWN0ZWRMaW5lc1tpIC0gMV0pO1xuICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgIH0gLy8gTWFyayB0aGUgY3VycmVudCBsaW5lIGFzIHRoZSBsYXN0IGRpdmVyZ2luZyBvbmUuXG5cblxuICAgICAgbGFzdFBvcyA9IGk7IC8vIEFkZCB0aGUgZXhwZWN0ZWQgbGluZSB0byB0aGUgY2FjaGUuXG5cbiAgICAgIG90aGVyICs9IFwiXFxuXCIuY29uY2F0KHJlZCwgXCItXCIpLmNvbmNhdCh3aGl0ZSwgXCIgXCIpLmNvbmNhdChleHBlY3RlZExpbmVzW2ldKTtcbiAgICAgIHByaW50ZWRMaW5lcysrOyAvLyBPbmx5IGV4dHJhIGFjdHVhbCBsaW5lcyBleGlzdFxuICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRMaW5lcy5sZW5ndGggPCBpICsgMSkge1xuICAgICAgLy8gSWYgdGhlIGxhc3QgZGl2ZXJnaW5nIGxpbmUgaXMgbW9yZSB0aGFuIG9uZSBsaW5lIGFib3ZlIGFuZCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgbGluZSBpcyBhdCBsZWFzdCBsaW5lIHRocmVlLCBhZGQgc29tZSBvZiB0aGUgZm9ybWVyIGxpbmVzIGFuZFxuICAgICAgLy8gYWxzbyBhZGQgZG90cyB0byBpbmRpY2F0ZSBza2lwcGVkIGVudHJpZXMuXG4gICAgICBpZiAoY3VyID4gMSAmJiBpID4gMikge1xuICAgICAgICBpZiAoY3VyID4gNCkge1xuICAgICAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuICAgICAgICAgIHNraXBwZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGN1ciA+IDMpIHtcbiAgICAgICAgICByZXMgKz0gXCJcXG4gIFwiLmNvbmNhdChhY3R1YWxMaW5lc1tpIC0gMl0pO1xuICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoYWN0dWFsTGluZXNbaSAtIDFdKTtcbiAgICAgICAgcHJpbnRlZExpbmVzKys7XG4gICAgICB9IC8vIE1hcmsgdGhlIGN1cnJlbnQgbGluZSBhcyB0aGUgbGFzdCBkaXZlcmdpbmcgb25lLlxuXG5cbiAgICAgIGxhc3RQb3MgPSBpOyAvLyBBZGQgdGhlIGFjdHVhbCBsaW5lIHRvIHRoZSByZXN1bHQuXG5cbiAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChncmVlbiwgXCIrXCIpLmNvbmNhdCh3aGl0ZSwgXCIgXCIpLmNvbmNhdChhY3R1YWxMaW5lc1tpXSk7XG4gICAgICBwcmludGVkTGluZXMrKzsgLy8gTGluZXMgZGl2ZXJnZVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXhwZWN0ZWRMaW5lID0gZXhwZWN0ZWRMaW5lc1tpXTtcbiAgICAgIHZhciBhY3R1YWxMaW5lID0gYWN0dWFsTGluZXNbaV07IC8vIElmIHRoZSBsaW5lcyBkaXZlcmdlLCBzcGVjaWZpY2FsbHkgY2hlY2sgZm9yIGxpbmVzIHRoYXQgb25seSBkaXZlcmdlIGJ5XG4gICAgICAvLyBhIHRyYWlsaW5nIGNvbW1hLiBJbiB0aGF0IGNhc2UgaXQgaXMgYWN0dWFsbHkgaWRlbnRpY2FsIGFuZCB3ZSBzaG91bGRcbiAgICAgIC8vIG1hcmsgaXQgYXMgc3VjaC5cblxuICAgICAgdmFyIGRpdmVyZ2luZ0xpbmVzID0gYWN0dWFsTGluZSAhPT0gZXhwZWN0ZWRMaW5lICYmICghZW5kc1dpdGgoYWN0dWFsTGluZSwgJywnKSB8fCBhY3R1YWxMaW5lLnNsaWNlKDAsIC0xKSAhPT0gZXhwZWN0ZWRMaW5lKTsgLy8gSWYgdGhlIGV4cGVjdGVkIGxpbmUgaGFzIGEgdHJhaWxpbmcgY29tbWEgYnV0IGlzIG90aGVyd2lzZSBpZGVudGljYWwsXG4gICAgICAvLyBhZGQgYSBjb21tYSBhdCB0aGUgZW5kIG9mIHRoZSBhY3R1YWwgbGluZS4gT3RoZXJ3aXNlIHRoZSBvdXRwdXQgY291bGRcbiAgICAgIC8vIGxvb2sgd2VpcmQgYXMgaW46XG4gICAgICAvL1xuICAgICAgLy8gICBbXG4gICAgICAvLyAgICAgMSAgICAgICAgIC8vIE5vIGNvbW1hIGF0IHRoZSBlbmQhXG4gICAgICAvLyArICAgMlxuICAgICAgLy8gICBdXG4gICAgICAvL1xuXG4gICAgICBpZiAoZGl2ZXJnaW5nTGluZXMgJiYgZW5kc1dpdGgoZXhwZWN0ZWRMaW5lLCAnLCcpICYmIGV4cGVjdGVkTGluZS5zbGljZSgwLCAtMSkgPT09IGFjdHVhbExpbmUpIHtcbiAgICAgICAgZGl2ZXJnaW5nTGluZXMgPSBmYWxzZTtcbiAgICAgICAgYWN0dWFsTGluZSArPSAnLCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXZlcmdpbmdMaW5lcykge1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBkaXZlcmdpbmcgbGluZSBpcyBtb3JlIHRoYW4gb25lIGxpbmUgYWJvdmUgYW5kIHRoZVxuICAgICAgICAvLyBjdXJyZW50IGxpbmUgaXMgYXQgbGVhc3QgbGluZSB0aHJlZSwgYWRkIHNvbWUgb2YgdGhlIGZvcm1lciBsaW5lcyBhbmRcbiAgICAgICAgLy8gYWxzbyBhZGQgZG90cyB0byBpbmRpY2F0ZSBza2lwcGVkIGVudHJpZXMuXG4gICAgICAgIGlmIChjdXIgPiAxICYmIGkgPiAyKSB7XG4gICAgICAgICAgaWYgKGN1ciA+IDQpIHtcbiAgICAgICAgICAgIHJlcyArPSBcIlxcblwiLmNvbmNhdChibHVlLCBcIi4uLlwiKS5jb25jYXQod2hpdGUpO1xuICAgICAgICAgICAgc2tpcHBlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjdXIgPiAzKSB7XG4gICAgICAgICAgICByZXMgKz0gXCJcXG4gIFwiLmNvbmNhdChhY3R1YWxMaW5lc1tpIC0gMl0pO1xuICAgICAgICAgICAgcHJpbnRlZExpbmVzKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzICs9IFwiXFxuICBcIi5jb25jYXQoYWN0dWFsTGluZXNbaSAtIDFdKTtcbiAgICAgICAgICBwcmludGVkTGluZXMrKztcbiAgICAgICAgfSAvLyBNYXJrIHRoZSBjdXJyZW50IGxpbmUgYXMgdGhlIGxhc3QgZGl2ZXJnaW5nIG9uZS5cblxuXG4gICAgICAgIGxhc3RQb3MgPSBpOyAvLyBBZGQgdGhlIGFjdHVhbCBsaW5lIHRvIHRoZSByZXN1bHQgYW5kIGNhY2hlIHRoZSBleHBlY3RlZCBkaXZlcmdpbmdcbiAgICAgICAgLy8gbGluZSBzbyBjb25zZWN1dGl2ZSBkaXZlcmdpbmcgbGluZXMgc2hvdyB1cCBhcyArKystLS0gYW5kIG5vdCArLSstKy0uXG5cbiAgICAgICAgcmVzICs9IFwiXFxuXCIuY29uY2F0KGdyZWVuLCBcIitcIikuY29uY2F0KHdoaXRlLCBcIiBcIikuY29uY2F0KGFjdHVhbExpbmUpO1xuICAgICAgICBvdGhlciArPSBcIlxcblwiLmNvbmNhdChyZWQsIFwiLVwiKS5jb25jYXQod2hpdGUsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRMaW5lKTtcbiAgICAgICAgcHJpbnRlZExpbmVzICs9IDI7IC8vIExpbmVzIGFyZSBpZGVudGljYWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCBhbGwgY2FjaGVkIGluZm9ybWF0aW9uIHRvIHRoZSByZXN1bHQgYmVmb3JlIGFkZGluZyBvdGhlciB0aGluZ3NcbiAgICAgICAgLy8gYW5kIHJlc2V0IHRoZSBjYWNoZS5cbiAgICAgICAgcmVzICs9IG90aGVyO1xuICAgICAgICBvdGhlciA9ICcnOyAvLyBJZiB0aGUgbGFzdCBkaXZlcmdpbmcgbGluZSBpcyBleGFjdGx5IG9uZSBsaW5lIGFib3ZlIG9yIGlmIGl0IGlzIHRoZVxuICAgICAgICAvLyB2ZXJ5IGZpcnN0IGxpbmUsIGFkZCB0aGUgbGluZSB0byB0aGUgcmVzdWx0LlxuXG4gICAgICAgIGlmIChjdXIgPT09IDEgfHwgaSA9PT0gMCkge1xuICAgICAgICAgIHJlcyArPSBcIlxcbiAgXCIuY29uY2F0KGFjdHVhbExpbmUpO1xuICAgICAgICAgIHByaW50ZWRMaW5lcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBJbnNwZWN0ZWQgb2JqZWN0IHRvIGJpZyAoU2hvdyB+MjAgcm93cyBtYXgpXG5cblxuICAgIGlmIChwcmludGVkTGluZXMgPiAyMCAmJiBpIDwgbWF4TGluZXMgLSAyKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobXNnKS5jb25jYXQoc2tpcHBlZE1zZywgXCJcXG5cIikuY29uY2F0KHJlcywgXCJcXG5cIikuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSkuY29uY2F0KG90aGVyLCBcIlxcblwiKSArIFwiXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KG1zZykuY29uY2F0KHNraXBwZWQgPyBza2lwcGVkTXNnIDogJycsIFwiXFxuXCIpLmNvbmNhdChyZXMpLmNvbmNhdChvdGhlcikuY29uY2F0KGVuZCkuY29uY2F0KGluZGljYXRvcik7XG59XG5cbnZhciBBc3NlcnRpb25FcnJvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0cyhBc3NlcnRpb25FcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBBc3NlcnRpb25FcnJvcihvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFzc2VydGlvbkVycm9yKTtcblxuICAgIGlmIChfdHlwZW9mKG9wdGlvbnMpICE9PSAnb2JqZWN0JyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ29wdGlvbnMnLCAnT2JqZWN0Jywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2UsXG4gICAgICAgIG9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvcixcbiAgICAgICAgc3RhY2tTdGFydEZuID0gb3B0aW9ucy5zdGFja1N0YXJ0Rm47XG4gICAgdmFyIGFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsLFxuICAgICAgICBleHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gICAgdmFyIGxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0O1xuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IDA7XG5cbiAgICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihBc3NlcnRpb25FcnJvcikuY2FsbCh0aGlzLCBTdHJpbmcobWVzc2FnZSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3Muc3RkZXJyICYmIHByb2Nlc3Muc3RkZXJyLmlzVFRZKSB7XG4gICAgICAgIC8vIFJlc2V0IG9uIGVhY2ggY2FsbCB0byBtYWtlIHN1cmUgd2UgaGFuZGxlIGR5bmFtaWNhbGx5IHNldCBlbnZpcm9ubWVudFxuICAgICAgICAvLyB2YXJpYWJsZXMgY29ycmVjdC5cbiAgICAgICAgaWYgKHByb2Nlc3Muc3RkZXJyICYmIHByb2Nlc3Muc3RkZXJyLmdldENvbG9yRGVwdGggJiYgcHJvY2Vzcy5zdGRlcnIuZ2V0Q29sb3JEZXB0aCgpICE9PSAxKSB7XG4gICAgICAgICAgYmx1ZSA9IFwiXFx4MUJbMzRtXCI7XG4gICAgICAgICAgZ3JlZW4gPSBcIlxceDFCWzMybVwiO1xuICAgICAgICAgIHdoaXRlID0gXCJcXHgxQlszOW1cIjtcbiAgICAgICAgICByZWQgPSBcIlxceDFCWzMxbVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJsdWUgPSAnJztcbiAgICAgICAgICBncmVlbiA9ICcnO1xuICAgICAgICAgIHdoaXRlID0gJyc7XG4gICAgICAgICAgcmVkID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJldmVudCB0aGUgZXJyb3Igc3RhY2sgZnJvbSBiZWluZyB2aXNpYmxlIGJ5IGR1cGxpY2F0aW5nIHRoZSBlcnJvclxuICAgICAgLy8gaW4gYSB2ZXJ5IGNsb3NlIHdheSB0byB0aGUgb3JpZ2luYWwgaW4gY2FzZSBib3RoIHNpZGVzIGFyZSBhY3R1YWxseVxuICAgICAgLy8gaW5zdGFuY2VzIG9mIEVycm9yLlxuXG5cbiAgICAgIGlmIChfdHlwZW9mKGFjdHVhbCkgPT09ICdvYmplY3QnICYmIGFjdHVhbCAhPT0gbnVsbCAmJiBfdHlwZW9mKGV4cGVjdGVkKSA9PT0gJ29iamVjdCcgJiYgZXhwZWN0ZWQgIT09IG51bGwgJiYgJ3N0YWNrJyBpbiBhY3R1YWwgJiYgYWN0dWFsIGluc3RhbmNlb2YgRXJyb3IgJiYgJ3N0YWNrJyBpbiBleHBlY3RlZCAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGFjdHVhbCA9IGNvcHlFcnJvcihhY3R1YWwpO1xuICAgICAgICBleHBlY3RlZCA9IGNvcHlFcnJvcihleHBlY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2RlZXBTdHJpY3RFcXVhbCcgfHwgb3BlcmF0b3IgPT09ICdzdHJpY3RFcXVhbCcpIHtcbiAgICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXNzZXJ0aW9uRXJyb3IpLmNhbGwodGhpcywgY3JlYXRlRXJyRGlmZihhY3R1YWwsIGV4cGVjdGVkLCBvcGVyYXRvcikpKTtcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09ICdub3REZWVwU3RyaWN0RXF1YWwnIHx8IG9wZXJhdG9yID09PSAnbm90U3RyaWN0RXF1YWwnKSB7XG4gICAgICAgIC8vIEluIGNhc2UgdGhlIG9iamVjdHMgYXJlIGVxdWFsIGJ1dCB0aGUgb3BlcmF0b3IgcmVxdWlyZXMgdW5lcXVhbCwgc2hvd1xuICAgICAgICAvLyB0aGUgZmlyc3Qgb2JqZWN0IGFuZCBzYXkgQSBlcXVhbHMgQlxuICAgICAgICB2YXIgYmFzZSA9IGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXTtcbiAgICAgICAgdmFyIHJlcyA9IGluc3BlY3RWYWx1ZShhY3R1YWwpLnNwbGl0KCdcXG4nKTsgLy8gSW4gY2FzZSBcImFjdHVhbFwiIGlzIGFuIG9iamVjdCwgaXQgc2hvdWxkIG5vdCBiZSByZWZlcmVuY2UgZXF1YWwuXG5cbiAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnbm90U3RyaWN0RXF1YWwnICYmIF90eXBlb2YoYWN0dWFsKSA9PT0gJ29iamVjdCcgJiYgYWN0dWFsICE9PSBudWxsKSB7XG4gICAgICAgICAgYmFzZSA9IGtSZWFkYWJsZU9wZXJhdG9yLm5vdFN0cmljdEVxdWFsT2JqZWN0O1xuICAgICAgICB9IC8vIE9ubHkgcmVtb3ZlIGxpbmVzIGluIGNhc2UgaXQgbWFrZXMgc2Vuc2UgdG8gY29sbGFwc2UgdGhvc2UuXG4gICAgICAgIC8vIFRPRE86IEFjY2VwdCBlbnYgdG8gYWx3YXlzIHNob3cgdGhlIGZ1bGwgZXJyb3IuXG5cblxuICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgcmVzWzI2XSA9IFwiXCIuY29uY2F0KGJsdWUsIFwiLi4uXCIpLmNvbmNhdCh3aGl0ZSk7XG5cbiAgICAgICAgICB3aGlsZSAocmVzLmxlbmd0aCA+IDI3KSB7XG4gICAgICAgICAgICByZXMucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE9ubHkgcHJpbnQgYSBzaW5nbGUgaW5wdXQuXG5cblxuICAgICAgICBpZiAocmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFzc2VydGlvbkVycm9yKS5jYWxsKHRoaXMsIFwiXCIuY29uY2F0KGJhc2UsIFwiIFwiKS5jb25jYXQocmVzWzBdKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFzc2VydGlvbkVycm9yKS5jYWxsKHRoaXMsIFwiXCIuY29uY2F0KGJhc2UsIFwiXFxuXFxuXCIpLmNvbmNhdChyZXMuam9pbignXFxuJyksIFwiXFxuXCIpKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfcmVzID0gaW5zcGVjdFZhbHVlKGFjdHVhbCk7XG5cbiAgICAgICAgdmFyIG90aGVyID0gJyc7XG4gICAgICAgIHZhciBrbm93bk9wZXJhdG9ycyA9IGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXTtcblxuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdub3REZWVwRXF1YWwnIHx8IG9wZXJhdG9yID09PSAnbm90RXF1YWwnKSB7XG4gICAgICAgICAgX3JlcyA9IFwiXCIuY29uY2F0KGtSZWFkYWJsZU9wZXJhdG9yW29wZXJhdG9yXSwgXCJcXG5cXG5cIikuY29uY2F0KF9yZXMpO1xuXG4gICAgICAgICAgaWYgKF9yZXMubGVuZ3RoID4gMTAyNCkge1xuICAgICAgICAgICAgX3JlcyA9IFwiXCIuY29uY2F0KF9yZXMuc2xpY2UoMCwgMTAyMSksIFwiLi4uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdGhlciA9IFwiXCIuY29uY2F0KGluc3BlY3RWYWx1ZShleHBlY3RlZCkpO1xuXG4gICAgICAgICAgaWYgKF9yZXMubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgICAgICBfcmVzID0gXCJcIi5jb25jYXQoX3Jlcy5zbGljZSgwLCA1MDkpLCBcIi4uLlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3RoZXIubGVuZ3RoID4gNTEyKSB7XG4gICAgICAgICAgICBvdGhlciA9IFwiXCIuY29uY2F0KG90aGVyLnNsaWNlKDAsIDUwOSksIFwiLi4uXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2RlZXBFcXVhbCcgfHwgb3BlcmF0b3IgPT09ICdlcXVhbCcpIHtcbiAgICAgICAgICAgIF9yZXMgPSBcIlwiLmNvbmNhdChrbm93bk9wZXJhdG9ycywgXCJcXG5cXG5cIikuY29uY2F0KF9yZXMsIFwiXFxuXFxuc2hvdWxkIGVxdWFsXFxuXFxuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlciA9IFwiIFwiLmNvbmNhdChvcGVyYXRvciwgXCIgXCIpLmNvbmNhdChvdGhlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXNzZXJ0aW9uRXJyb3IpLmNhbGwodGhpcywgXCJcIi5jb25jYXQoX3JlcykuY29uY2F0KG90aGVyKSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IGxpbWl0O1xuICAgIF90aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSAhbWVzc2FnZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICduYW1lJywge1xuICAgICAgdmFsdWU6ICdBc3NlcnRpb25FcnJvciBbRVJSX0FTU0VSVElPTl0nLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIF90aGlzLmNvZGUgPSAnRVJSX0FTU0VSVElPTic7XG4gICAgX3RoaXMuYWN0dWFsID0gYWN0dWFsO1xuICAgIF90aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgX3RoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgc3RhY2tTdGFydEZuKTtcbiAgICB9IC8vIENyZWF0ZSBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZXJyb3IgY29kZSBpbiB0aGUgbmFtZS5cblxuXG4gICAgX3RoaXMuc3RhY2s7IC8vIFJlc2V0IHRoZSBuYW1lLlxuXG4gICAgX3RoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBc3NlcnRpb25FcnJvciwgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5uYW1lLCBcIiBbXCIpLmNvbmNhdCh0aGlzLmNvZGUsIFwiXTogXCIpLmNvbmNhdCh0aGlzLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogaW5zcGVjdC5jdXN0b20sXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHJlY3Vyc2VUaW1lcywgY3R4KSB7XG4gICAgICAvLyBUaGlzIGxpbWl0cyB0aGUgYGFjdHVhbGAgYW5kIGBleHBlY3RlZGAgcHJvcGVydHkgZGVmYXVsdCBpbnNwZWN0aW9uIHRvXG4gICAgICAvLyB0aGUgbWluaW11bSBkZXB0aC4gT3RoZXJ3aXNlIHRob3NlIHZhbHVlcyB3b3VsZCBiZSB0b28gdmVyYm9zZSBjb21wYXJlZFxuICAgICAgLy8gdG8gdGhlIGFjdHVhbCBlcnJvciBtZXNzYWdlIHdoaWNoIGNvbnRhaW5zIGEgY29tYmluZWQgdmlldyBvZiB0aGVzZSB0d29cbiAgICAgIC8vIGlucHV0IHZhbHVlcy5cbiAgICAgIHJldHVybiBpbnNwZWN0KHRoaXMsIF9vYmplY3RTcHJlYWQoe30sIGN0eCwge1xuICAgICAgICBjdXN0b21JbnNwZWN0OiBmYWxzZSxcbiAgICAgICAgZGVwdGg6IDBcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXNzZXJ0aW9uRXJyb3I7XG59KF93cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3NlcnRpb25FcnJvcjsiLCIvLyBDdXJyZW50bHkgaW4gc3luYyB3aXRoIE5vZGUuanMgbGliL2ludGVybmFsL2Vycm9ycy5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2NvbW1pdC8zYjA0NDk2MmM0OGZlMzEzOTA1ODc3YTk2YjVkMDg5NGE1NDA0ZjZmXG5cbi8qIGVzbGludCBub2RlLWNvcmUvZG9jdW1lbnRlZC1lcnJvcnM6IFwiZXJyb3JcIiAqL1xuXG4vKiBlc2xpbnQgbm9kZS1jb3JlL2FscGhhYmV0aXplLWVycm9yczogXCJlcnJvclwiICovXG5cbi8qIGVzbGludCBub2RlLWNvcmUvcHJlZmVyLXV0aWwtZm9ybWF0LWVycm9yczogXCJlcnJvclwiICovXG4ndXNlIHN0cmljdCc7IC8vIFRoZSB3aG9sZSBwb2ludCBiZWhpbmQgdGhpcyBpbnRlcm5hbCBtb2R1bGUgaXMgdG8gYWxsb3cgTm9kZS5qcyB0byBub1xuLy8gbG9uZ2VyIGJlIGZvcmNlZCB0byB0cmVhdCBldmVyeSBlcnJvciBtZXNzYWdlIGNoYW5nZSBhcyBhIHNlbXZlci1tYWpvclxuLy8gY2hhbmdlLiBUaGUgTm9kZUVycm9yIGNsYXNzZXMgaGVyZSBhbGwgZXhwb3NlIGEgYGNvZGVgIHByb3BlcnR5IHdob3NlXG4vLyB2YWx1ZSBzdGF0aWNhbGx5IGFuZCBwZXJtYW5lbnRseSBpZGVudGlmaWVzIHRoZSBlcnJvci4gV2hpbGUgdGhlIGVycm9yXG4vLyBtZXNzYWdlIG1heSBjaGFuZ2UsIHRoZSBjb2RlIHNob3VsZCBub3QuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIGNvZGVzID0ge307IC8vIExhenkgbG9hZGVkXG5cbnZhciBhc3NlcnQ7XG52YXIgdXRpbDtcblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JUeXBlKGNvZGUsIG1lc3NhZ2UsIEJhc2UpIHtcbiAgaWYgKCFCYXNlKSB7XG4gICAgQmFzZSA9IEVycm9yO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWVzc2FnZShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtZXNzYWdlKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBOb2RlRXJyb3IgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQmFzZSkge1xuICAgIF9pbmhlcml0cyhOb2RlRXJyb3IsIF9CYXNlKTtcblxuICAgIGZ1bmN0aW9uIE5vZGVFcnJvcihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlRXJyb3IpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihOb2RlRXJyb3IpLmNhbGwodGhpcywgZ2V0TWVzc2FnZShhcmcxLCBhcmcyLCBhcmczKSkpO1xuICAgICAgX3RoaXMuY29kZSA9IGNvZGU7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5vZGVFcnJvcjtcbiAgfShCYXNlKTtcblxuICBjb2Rlc1tjb2RlXSA9IE5vZGVFcnJvcjtcbn0gLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvdjEwLjguMC9saWIvaW50ZXJuYWwvZXJyb3JzLmpzXG5cblxuZnVuY3Rpb24gb25lT2YoZXhwZWN0ZWQsIHRoaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdGVkKSkge1xuICAgIHZhciBsZW4gPSBleHBlY3RlZC5sZW5ndGg7XG4gICAgZXhwZWN0ZWQgPSBleHBlY3RlZC5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaSk7XG4gICAgfSk7XG5cbiAgICBpZiAobGVuID4gMikge1xuICAgICAgcmV0dXJuIFwib25lIG9mIFwiLmNvbmNhdCh0aGluZywgXCIgXCIpLmNvbmNhdChleHBlY3RlZC5zbGljZSgwLCBsZW4gLSAxKS5qb2luKCcsICcpLCBcIiwgb3IgXCIpICsgZXhwZWN0ZWRbbGVuIC0gMV07XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIHJldHVybiBcIm9uZSBvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRbMF0sIFwiIG9yIFwiKS5jb25jYXQoZXhwZWN0ZWRbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoU3RyaW5nKGV4cGVjdGVkKSk7XG4gIH1cbn0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3N0YXJ0c1dpdGhcblxuXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgc2VhcmNoLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoIXBvcyB8fCBwb3MgPCAwID8gMCA6ICtwb3MsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG59IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9lbmRzV2l0aFxuXG5cbmZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc2VhcmNoLCB0aGlzX2xlbikge1xuICBpZiAodGhpc19sZW4gPT09IHVuZGVmaW5lZCB8fCB0aGlzX2xlbiA+IHN0ci5sZW5ndGgpIHtcbiAgICB0aGlzX2xlbiA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gc3RyLnN1YnN0cmluZyh0aGlzX2xlbiAtIHNlYXJjaC5sZW5ndGgsIHRoaXNfbGVuKSA9PT0gc2VhcmNoO1xufSAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvaW5jbHVkZXNcblxuXG5mdW5jdGlvbiBpbmNsdWRlcyhzdHIsIHNlYXJjaCwgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ251bWJlcicpIHtcbiAgICBzdGFydCA9IDA7XG4gIH1cblxuICBpZiAoc3RhcnQgKyBzZWFyY2gubGVuZ3RoID4gc3RyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2Yoc2VhcmNoLCBzdGFydCkgIT09IC0xO1xuICB9XG59XG5cbmNyZWF0ZUVycm9yVHlwZSgnRVJSX0FNQklHVU9VU19BUkdVTUVOVCcsICdUaGUgXCIlc1wiIGFyZ3VtZW50IGlzIGFtYmlndW91cy4gJXMnLCBUeXBlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsIGZ1bmN0aW9uIChuYW1lLCBleHBlY3RlZCwgYWN0dWFsKSB7XG4gIGlmIChhc3NlcnQgPT09IHVuZGVmaW5lZCkgYXNzZXJ0ID0gcmVxdWlyZSgnLi4vYXNzZXJ0Jyk7XG4gIGFzc2VydCh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycsIFwiJ25hbWUnIG11c3QgYmUgYSBzdHJpbmdcIik7IC8vIGRldGVybWluZXI6ICdtdXN0IGJlJyBvciAnbXVzdCBub3QgYmUnXG5cbiAgdmFyIGRldGVybWluZXI7XG5cbiAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycgJiYgc3RhcnRzV2l0aChleHBlY3RlZCwgJ25vdCAnKSkge1xuICAgIGRldGVybWluZXIgPSAnbXVzdCBub3QgYmUnO1xuICAgIGV4cGVjdGVkID0gZXhwZWN0ZWQucmVwbGFjZSgvXm5vdCAvLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgZGV0ZXJtaW5lciA9ICdtdXN0IGJlJztcbiAgfVxuXG4gIHZhciBtc2c7XG5cbiAgaWYgKGVuZHNXaXRoKG5hbWUsICcgYXJndW1lbnQnKSkge1xuICAgIC8vIEZvciBjYXNlcyBsaWtlICdmaXJzdCBhcmd1bWVudCdcbiAgICBtc2cgPSBcIlRoZSBcIi5jb25jYXQobmFtZSwgXCIgXCIpLmNvbmNhdChkZXRlcm1pbmVyLCBcIiBcIikuY29uY2F0KG9uZU9mKGV4cGVjdGVkLCAndHlwZScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdHlwZSA9IGluY2x1ZGVzKG5hbWUsICcuJykgPyAncHJvcGVydHknIDogJ2FyZ3VtZW50JztcbiAgICBtc2cgPSBcIlRoZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBcIikuY29uY2F0KHR5cGUsIFwiIFwiKS5jb25jYXQoZGV0ZXJtaW5lciwgXCIgXCIpLmNvbmNhdChvbmVPZihleHBlY3RlZCwgJ3R5cGUnKSk7XG4gIH0gLy8gVE9ETyhCcmlkZ2VBUik6IEltcHJvdmUgdGhlIG91dHB1dCBieSBzaG93aW5nIGBudWxsYCBhbmQgc2ltaWxhci5cblxuXG4gIG1zZyArPSBcIi4gUmVjZWl2ZWQgdHlwZSBcIi5jb25jYXQoX3R5cGVvZihhY3R1YWwpKTtcbiAgcmV0dXJuIG1zZztcbn0sIFR5cGVFcnJvcik7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9JTlZBTElEX0FSR19WQUxVRScsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgcmVhc29uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnaXMgaW52YWxpZCc7XG4gIGlmICh1dGlsID09PSB1bmRlZmluZWQpIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xuICB2YXIgaW5zcGVjdGVkID0gdXRpbC5pbnNwZWN0KHZhbHVlKTtcblxuICBpZiAoaW5zcGVjdGVkLmxlbmd0aCA+IDEyOCkge1xuICAgIGluc3BlY3RlZCA9IFwiXCIuY29uY2F0KGluc3BlY3RlZC5zbGljZSgwLCAxMjgpLCBcIi4uLlwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlRoZSBhcmd1bWVudCAnXCIuY29uY2F0KG5hbWUsIFwiJyBcIikuY29uY2F0KHJlYXNvbiwgXCIuIFJlY2VpdmVkIFwiKS5jb25jYXQoaW5zcGVjdGVkKTtcbn0sIFR5cGVFcnJvciwgUmFuZ2VFcnJvcik7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9JTlZBTElEX1JFVFVSTl9WQUxVRScsIGZ1bmN0aW9uIChpbnB1dCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR5cGU7XG5cbiAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICB0eXBlID0gXCJpbnN0YW5jZSBvZiBcIi5jb25jYXQodmFsdWUuY29uc3RydWN0b3IubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IFwidHlwZSBcIi5jb25jYXQoX3R5cGVvZih2YWx1ZSkpO1xuICB9XG5cbiAgcmV0dXJuIFwiRXhwZWN0ZWQgXCIuY29uY2F0KGlucHV0LCBcIiB0byBiZSByZXR1cm5lZCBmcm9tIHRoZSBcXFwiXCIpLmNvbmNhdChuYW1lLCBcIlxcXCJcIikgKyBcIiBmdW5jdGlvbiBidXQgZ290IFwiLmNvbmNhdCh0eXBlLCBcIi5cIik7XG59LCBUeXBlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfTUlTU0lOR19BUkdTJywgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFzc2VydCA9PT0gdW5kZWZpbmVkKSBhc3NlcnQgPSByZXF1aXJlKCcuLi9hc3NlcnQnKTtcbiAgYXNzZXJ0KGFyZ3MubGVuZ3RoID4gMCwgJ0F0IGxlYXN0IG9uZSBhcmcgbmVlZHMgdG8gYmUgc3BlY2lmaWVkJyk7XG4gIHZhciBtc2cgPSAnVGhlICc7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgYXJncyA9IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdChhLCBcIlxcXCJcIik7XG4gIH0pO1xuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAxOlxuICAgICAgbXNnICs9IFwiXCIuY29uY2F0KGFyZ3NbMF0sIFwiIGFyZ3VtZW50XCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBtc2cgKz0gXCJcIi5jb25jYXQoYXJnc1swXSwgXCIgYW5kIFwiKS5jb25jYXQoYXJnc1sxXSwgXCIgYXJndW1lbnRzXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgbXNnICs9IGFyZ3Muc2xpY2UoMCwgbGVuIC0gMSkuam9pbignLCAnKTtcbiAgICAgIG1zZyArPSBcIiwgYW5kIFwiLmNvbmNhdChhcmdzW2xlbiAtIDFdLCBcIiBhcmd1bWVudHNcIik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdChtc2csIFwiIG11c3QgYmUgc3BlY2lmaWVkXCIpO1xufSwgVHlwZUVycm9yKTtcbm1vZHVsZS5leHBvcnRzLmNvZGVzID0gY29kZXM7IiwiLy8gQ3VycmVudGx5IGluIHN5bmMgd2l0aCBOb2RlLmpzIGxpYi9pbnRlcm5hbC91dGlsL2NvbXBhcmlzb25zLmpzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvY29tbWl0LzExMmNjN2MyNzU1MTI1NGFhMmIxNzA5OGZiNzc0ODY3ZjA1ZWQwZDlcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByZWdleEZsYWdzU3VwcG9ydGVkID0gL2EvZy5mbGFncyAhPT0gdW5kZWZpbmVkO1xuXG52YXIgYXJyYXlGcm9tU2V0ID0gZnVuY3Rpb24gYXJyYXlGcm9tU2V0KHNldCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgc2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFycmF5LnB1c2godmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGFycmF5O1xufTtcblxudmFyIGFycmF5RnJvbU1hcCA9IGZ1bmN0aW9uIGFycmF5RnJvbU1hcChtYXApIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIGFycmF5LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSk7XG4gIHJldHVybiBhcnJheTtcbn07XG5cbnZhciBvYmplY3RJcyA9IE9iamVjdC5pcyA/IE9iamVjdC5pcyA6IHJlcXVpcmUoJ29iamVjdC1pcycpO1xudmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW107XG59O1xudmFyIG51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOID8gTnVtYmVyLmlzTmFOIDogcmVxdWlyZSgnaXMtbmFuJyk7XG5cbmZ1bmN0aW9uIHVuY3VycnlUaGlzKGYpIHtcbiAgcmV0dXJuIGYuY2FsbC5iaW5kKGYpO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyhPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpO1xudmFyIG9iamVjdFRvU3RyaW5nID0gdW5jdXJyeVRoaXMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciBfcmVxdWlyZSR0eXBlcyA9IHJlcXVpcmUoJ3V0aWwvJykudHlwZXMsXG4gICAgaXNBbnlBcnJheUJ1ZmZlciA9IF9yZXF1aXJlJHR5cGVzLmlzQW55QXJyYXlCdWZmZXIsXG4gICAgaXNBcnJheUJ1ZmZlclZpZXcgPSBfcmVxdWlyZSR0eXBlcy5pc0FycmF5QnVmZmVyVmlldyxcbiAgICBpc0RhdGUgPSBfcmVxdWlyZSR0eXBlcy5pc0RhdGUsXG4gICAgaXNNYXAgPSBfcmVxdWlyZSR0eXBlcy5pc01hcCxcbiAgICBpc1JlZ0V4cCA9IF9yZXF1aXJlJHR5cGVzLmlzUmVnRXhwLFxuICAgIGlzU2V0ID0gX3JlcXVpcmUkdHlwZXMuaXNTZXQsXG4gICAgaXNOYXRpdmVFcnJvciA9IF9yZXF1aXJlJHR5cGVzLmlzTmF0aXZlRXJyb3IsXG4gICAgaXNCb3hlZFByaW1pdGl2ZSA9IF9yZXF1aXJlJHR5cGVzLmlzQm94ZWRQcmltaXRpdmUsXG4gICAgaXNOdW1iZXJPYmplY3QgPSBfcmVxdWlyZSR0eXBlcy5pc051bWJlck9iamVjdCxcbiAgICBpc1N0cmluZ09iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzU3RyaW5nT2JqZWN0LFxuICAgIGlzQm9vbGVhbk9iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzQm9vbGVhbk9iamVjdCxcbiAgICBpc0JpZ0ludE9iamVjdCA9IF9yZXF1aXJlJHR5cGVzLmlzQmlnSW50T2JqZWN0LFxuICAgIGlzU3ltYm9sT2JqZWN0ID0gX3JlcXVpcmUkdHlwZXMuaXNTeW1ib2xPYmplY3QsXG4gICAgaXNGbG9hdDMyQXJyYXkgPSBfcmVxdWlyZSR0eXBlcy5pc0Zsb2F0MzJBcnJheSxcbiAgICBpc0Zsb2F0NjRBcnJheSA9IF9yZXF1aXJlJHR5cGVzLmlzRmxvYXQ2NEFycmF5O1xuXG5mdW5jdGlvbiBpc05vbkluZGV4KGtleSkge1xuICBpZiAoa2V5Lmxlbmd0aCA9PT0gMCB8fCBrZXkubGVuZ3RoID4gMTApIHJldHVybiB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvZGUgPSBrZXkuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiA1NykgcmV0dXJuIHRydWU7XG4gIH0gLy8gVGhlIG1heGltdW0gc2l6ZSBmb3IgYW4gYXJyYXkgaXMgMiAqKiAzMiAtMS5cblxuXG4gIHJldHVybiBrZXkubGVuZ3RoID09PSAxMCAmJiBrZXkgPj0gTWF0aC5wb3coMiwgMzIpO1xufVxuXG5mdW5jdGlvbiBnZXRPd25Ob25JbmRleFByb3BlcnRpZXModmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5maWx0ZXIoaXNOb25JbmRleCkuY29uY2F0KG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWx1ZSkuZmlsdGVyKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuYmluZCh2YWx1ZSkpKTtcbn0gLy8gVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9ibG9iLzY4MGU5ZTVlNDg4ZjIyYWFjMjc1OTlhNTdkYzg0NGE2MzE1OTI4ZGQvaW5kZXguanNcbi8vIG9yaWdpbmFsIG5vdGljZTpcblxuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKHkgPCB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxudmFyIE9OTFlfRU5VTUVSQUJMRSA9IHVuZGVmaW5lZDtcbnZhciBrU3RyaWN0ID0gdHJ1ZTtcbnZhciBrTG9vc2UgPSBmYWxzZTtcbnZhciBrTm9JdGVyYXRvciA9IDA7XG52YXIga0lzQXJyYXkgPSAxO1xudmFyIGtJc1NldCA9IDI7XG52YXIga0lzTWFwID0gMzsgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIHRoZSBzYW1lIHNvdXJjZSBhbmQgZmxhZ3NcblxuZnVuY3Rpb24gYXJlU2ltaWxhclJlZ0V4cHMoYSwgYikge1xuICByZXR1cm4gcmVnZXhGbGFnc1N1cHBvcnRlZCA/IGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzIDogUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik7XG59XG5cbmZ1bmN0aW9uIGFyZVNpbWlsYXJGbG9hdEFycmF5cyhhLCBiKSB7XG4gIGlmIChhLmJ5dGVMZW5ndGggIT09IGIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGEuYnl0ZUxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICBpZiAoYVtvZmZzZXRdICE9PSBiW29mZnNldF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYXJlU2ltaWxhclR5cGVkQXJyYXlzKGEsIGIpIHtcbiAgaWYgKGEuYnl0ZUxlbmd0aCAhPT0gYi5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgYS5ieXRlTGVuZ3RoKSwgbmV3IFVpbnQ4QXJyYXkoYi5idWZmZXIsIGIuYnl0ZU9mZnNldCwgYi5ieXRlTGVuZ3RoKSkgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGFyZUVxdWFsQXJyYXlCdWZmZXJzKGJ1ZjEsIGJ1ZjIpIHtcbiAgcmV0dXJuIGJ1ZjEuYnl0ZUxlbmd0aCA9PT0gYnVmMi5ieXRlTGVuZ3RoICYmIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYnVmMSksIG5ldyBVaW50OEFycmF5KGJ1ZjIpKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNFcXVhbEJveGVkUHJpbWl0aXZlKHZhbDEsIHZhbDIpIHtcbiAgaWYgKGlzTnVtYmVyT2JqZWN0KHZhbDEpKSB7XG4gICAgcmV0dXJuIGlzTnVtYmVyT2JqZWN0KHZhbDIpICYmIG9iamVjdElzKE51bWJlci5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpLCBOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwyKSk7XG4gIH1cblxuICBpZiAoaXNTdHJpbmdPYmplY3QodmFsMSkpIHtcbiAgICByZXR1cm4gaXNTdHJpbmdPYmplY3QodmFsMikgJiYgU3RyaW5nLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMSkgPT09IFN0cmluZy5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDIpO1xuICB9XG5cbiAgaWYgKGlzQm9vbGVhbk9iamVjdCh2YWwxKSkge1xuICAgIHJldHVybiBpc0Jvb2xlYW5PYmplY3QodmFsMikgJiYgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpID09PSBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMik7XG4gIH1cblxuICBpZiAoaXNCaWdJbnRPYmplY3QodmFsMSkpIHtcbiAgICByZXR1cm4gaXNCaWdJbnRPYmplY3QodmFsMikgJiYgQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mLmNhbGwodmFsMSkgPT09IEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDIpO1xuICB9XG5cbiAgcmV0dXJuIGlzU3ltYm9sT2JqZWN0KHZhbDIpICYmIFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKHZhbDEpID09PSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2YuY2FsbCh2YWwyKTtcbn0gLy8gTm90ZXM6IFR5cGUgdGFncyBhcmUgaGlzdG9yaWNhbCBbW0NsYXNzXV0gcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzZXQgYnlcbi8vIEZ1bmN0aW9uVGVtcGxhdGU6OlNldENsYXNzTmFtZSgpIGluIEMrKyBvciBTeW1ib2wudG9TdHJpbmdUYWcgaW4gSlNcbi8vIGFuZCByZXRyaWV2ZWQgdXNpbmcgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgaW4gSlNcbi8vIFNlZSBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG4vLyBmb3IgYSBsaXN0IG9mIHRhZ3MgcHJlLWRlZmluZWQgaW4gdGhlIHNwZWMuXG4vLyBUaGVyZSBhcmUgc29tZSB1bnNwZWNpZmllZCB0YWdzIGluIHRoZSB3aWxkIHRvbyAoZS5nLiB0eXBlZCBhcnJheSB0YWdzKS5cbi8vIFNpbmNlIHRhZ3MgY2FuIGJlIGFsdGVyZWQsIHRoZXkgb25seSBzZXJ2ZSBmYXN0IGZhaWx1cmVzXG4vL1xuLy8gVHlwZWQgYXJyYXlzIGFuZCBidWZmZXJzIGFyZSBjaGVja2VkIGJ5IGNvbXBhcmluZyB0aGUgY29udGVudCBpbiB0aGVpclxuLy8gdW5kZXJseWluZyBBcnJheUJ1ZmZlci4gVGhpcyBvcHRpbWl6YXRpb24gcmVxdWlyZXMgdGhhdCBpdCdzXG4vLyByZWFzb25hYmxlIHRvIGludGVycHJldCB0aGVpciB1bmRlcmx5aW5nIG1lbW9yeSBpbiB0aGUgc2FtZSB3YXksXG4vLyB3aGljaCBpcyBjaGVja2VkIGJ5IGNvbXBhcmluZyB0aGVpciB0eXBlIHRhZ3MuXG4vLyAoZS5nLiBhIFVpbnQ4QXJyYXkgYW5kIGEgVWludDE2QXJyYXkgd2l0aCB0aGUgc2FtZSBtZW1vcnkgY29udGVudFxuLy8gY291bGQgc3RpbGwgYmUgZGlmZmVyZW50IGJlY2F1c2UgdGhleSB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5KS5cbi8vXG4vLyBGb3Igc3RyaWN0IGNvbXBhcmlzb24sIG9iamVjdHMgc2hvdWxkIGhhdmVcbi8vIGEpIFRoZSBzYW1lIGJ1aWx0LWluIHR5cGUgdGFnc1xuLy8gYikgVGhlIHNhbWUgcHJvdG90eXBlcy5cblxuXG5mdW5jdGlvbiBpbm5lckRlZXBFcXVhbCh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zKSB7XG4gIC8vIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKHZhbDEgPT09IHZhbDIpIHtcbiAgICBpZiAodmFsMSAhPT0gMCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHN0cmljdCA/IG9iamVjdElzKHZhbDEsIHZhbDIpIDogdHJ1ZTtcbiAgfSAvLyBDaGVjayBtb3JlIGNsb3NlbHkgaWYgdmFsMSBhbmQgdmFsMiBhcmUgZXF1YWwuXG5cblxuICBpZiAoc3RyaWN0KSB7XG4gICAgaWYgKF90eXBlb2YodmFsMSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbDEgPT09ICdudW1iZXInICYmIG51bWJlcklzTmFOKHZhbDEpICYmIG51bWJlcklzTmFOKHZhbDIpO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKHZhbDIpICE9PSAnb2JqZWN0JyB8fCB2YWwxID09PSBudWxsIHx8IHZhbDIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbDEpICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbDEgPT09IG51bGwgfHwgX3R5cGVvZih2YWwxKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh2YWwyID09PSBudWxsIHx8IF90eXBlb2YodmFsMikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgICAgcmV0dXJuIHZhbDEgPT0gdmFsMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh2YWwyID09PSBudWxsIHx8IF90eXBlb2YodmFsMikgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbDFUYWcgPSBvYmplY3RUb1N0cmluZyh2YWwxKTtcbiAgdmFyIHZhbDJUYWcgPSBvYmplY3RUb1N0cmluZyh2YWwyKTtcblxuICBpZiAodmFsMVRhZyAhPT0gdmFsMlRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbDEpKSB7XG4gICAgLy8gQ2hlY2sgZm9yIHNwYXJzZSBhcnJheXMgYW5kIGdlbmVyYWwgZmFzdCBwYXRoXG4gICAgaWYgKHZhbDEubGVuZ3RoICE9PSB2YWwyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXlzMSA9IGdldE93bk5vbkluZGV4UHJvcGVydGllcyh2YWwxLCBPTkxZX0VOVU1FUkFCTEUpO1xuICAgIHZhciBrZXlzMiA9IGdldE93bk5vbkluZGV4UHJvcGVydGllcyh2YWwyLCBPTkxZX0VOVU1FUkFCTEUpO1xuXG4gICAgaWYgKGtleXMxLmxlbmd0aCAhPT0ga2V5czIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtJc0FycmF5LCBrZXlzMSk7XG4gIH0gLy8gW2Jyb3dzZXJpZnldIFRoaXMgdHJpZ2dlcnMgb24gY2VydGFpbiB0eXBlcyBpbiBJRSAoTWFwL1NldCkgc28gd2UgZG9uJ3RcbiAgLy8gd2FuJ3QgdG8gZWFybHkgcmV0dXJuIG91dCBvZiB0aGUgcmVzdCBvZiB0aGUgY2hlY2tzLiBIb3dldmVyIHdlIGNhbiBjaGVja1xuICAvLyBpZiB0aGUgc2Vjb25kIHZhbHVlIGlzIG9uZSBvZiB0aGVzZSB2YWx1ZXMgYW5kIHRoZSBmaXJzdCBpc24ndC5cblxuXG4gIGlmICh2YWwxVGFnID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIC8vIHJldHVybiBrZXlDaGVjayh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW9zLCBrTm9JdGVyYXRvcik7XG4gICAgaWYgKCFpc01hcCh2YWwxKSAmJiBpc01hcCh2YWwyKSB8fCAhaXNTZXQodmFsMSkgJiYgaXNTZXQodmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNEYXRlKHZhbDEpKSB7XG4gICAgaWYgKCFpc0RhdGUodmFsMikgfHwgRGF0ZS5wcm90b3R5cGUuZ2V0VGltZS5jYWxsKHZhbDEpICE9PSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lLmNhbGwodmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAodmFsMSkpIHtcbiAgICBpZiAoIWlzUmVnRXhwKHZhbDIpIHx8ICFhcmVTaW1pbGFyUmVnRXhwcyh2YWwxLCB2YWwyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc05hdGl2ZUVycm9yKHZhbDEpIHx8IHZhbDEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIC8vIERvIG5vdCBjb21wYXJlIHRoZSBzdGFjayBhcyBpdCBtaWdodCBkaWZmZXIgZXZlbiB0aG91Z2ggdGhlIGVycm9yIGl0c2VsZlxuICAgIC8vIGlzIG90aGVyd2lzZSBpZGVudGljYWwuXG4gICAgaWYgKHZhbDEubWVzc2FnZSAhPT0gdmFsMi5tZXNzYWdlIHx8IHZhbDEubmFtZSAhPT0gdmFsMi5uYW1lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQXJyYXlCdWZmZXJWaWV3KHZhbDEpKSB7XG4gICAgaWYgKCFzdHJpY3QgJiYgKGlzRmxvYXQzMkFycmF5KHZhbDEpIHx8IGlzRmxvYXQ2NEFycmF5KHZhbDEpKSkge1xuICAgICAgaWYgKCFhcmVTaW1pbGFyRmxvYXRBcnJheXModmFsMSwgdmFsMikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWFyZVNpbWlsYXJUeXBlZEFycmF5cyh2YWwxLCB2YWwyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gQnVmZmVyLmNvbXBhcmUgcmV0dXJucyB0cnVlLCBzbyB2YWwxLmxlbmd0aCA9PT0gdmFsMi5sZW5ndGguIElmIHRoZXkgYm90aFxuICAgIC8vIG9ubHkgY29udGFpbiBudW1lcmljIGtleXMsIHdlIGRvbid0IG5lZWQgdG8gZXhhbSBmdXJ0aGVyIHRoYW4gY2hlY2tpbmdcbiAgICAvLyB0aGUgc3ltYm9scy5cblxuXG4gICAgdmFyIF9rZXlzID0gZ2V0T3duTm9uSW5kZXhQcm9wZXJ0aWVzKHZhbDEsIE9OTFlfRU5VTUVSQUJMRSk7XG5cbiAgICB2YXIgX2tleXMyID0gZ2V0T3duTm9uSW5kZXhQcm9wZXJ0aWVzKHZhbDIsIE9OTFlfRU5VTUVSQUJMRSk7XG5cbiAgICBpZiAoX2tleXMubGVuZ3RoICE9PSBfa2V5czIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtOb0l0ZXJhdG9yLCBfa2V5cyk7XG4gIH0gZWxzZSBpZiAoaXNTZXQodmFsMSkpIHtcbiAgICBpZiAoIWlzU2V0KHZhbDIpIHx8IHZhbDEuc2l6ZSAhPT0gdmFsMi5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtJc1NldCk7XG4gIH0gZWxzZSBpZiAoaXNNYXAodmFsMSkpIHtcbiAgICBpZiAoIWlzTWFwKHZhbDIpIHx8IHZhbDEuc2l6ZSAhPT0gdmFsMi5zaXplKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtJc01hcCk7XG4gIH0gZWxzZSBpZiAoaXNBbnlBcnJheUJ1ZmZlcih2YWwxKSkge1xuICAgIGlmICghYXJlRXF1YWxBcnJheUJ1ZmZlcnModmFsMSwgdmFsMikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCb3hlZFByaW1pdGl2ZSh2YWwxKSAmJiAhaXNFcXVhbEJveGVkUHJpbWl0aXZlKHZhbDEsIHZhbDIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGtleUNoZWNrKHZhbDEsIHZhbDIsIHN0cmljdCwgbWVtb3MsIGtOb0l0ZXJhdG9yKTtcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZXModmFsLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZSh2YWwsIGspO1xuICB9KTtcbn1cblxuZnVuY3Rpb24ga2V5Q2hlY2sodmFsMSwgdmFsMiwgc3RyaWN0LCBtZW1vcywgaXRlcmF0aW9uVHlwZSwgYUtleXMpIHtcbiAgLy8gRm9yIGFsbCByZW1haW5pbmcgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXksIG9iamVjdHMgYW5kIE1hcHMsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgaGF2aW5nOlxuICAvLyBhKSBUaGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzXG4gIC8vIGIpIFRoZSBzYW1lIHNldCBvZiBrZXlzL2luZGV4ZXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlcilcbiAgLy8gYykgRXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5L2luZGV4XG4gIC8vIGQpIEZvciBTZXRzIGFuZCBNYXBzLCBlcXVhbCBjb250ZW50c1xuICAvLyBOb3RlOiB0aGlzIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgIGFLZXlzID0gT2JqZWN0LmtleXModmFsMSk7XG4gICAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXModmFsMik7IC8vIFRoZSBwYWlyIG11c3QgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcy5cblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSAvLyBDaGVhcCBrZXkgdGVzdFxuXG5cbiAgdmFyIGkgPSAwO1xuXG4gIGZvciAoOyBpIDwgYUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5KHZhbDIsIGFLZXlzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdHJpY3QgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgIHZhciBzeW1ib2xLZXlzQSA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWwxKTtcblxuICAgIGlmIChzeW1ib2xLZXlzQS5sZW5ndGggIT09IDApIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzeW1ib2xLZXlzQS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gc3ltYm9sS2V5c0FbaV07XG5cbiAgICAgICAgaWYgKHByb3BlcnR5SXNFbnVtZXJhYmxlKHZhbDEsIGtleSkpIHtcbiAgICAgICAgICBpZiAoIXByb3BlcnR5SXNFbnVtZXJhYmxlKHZhbDIsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZSh2YWwyLCBrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzeW1ib2xLZXlzQiA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWwyKTtcblxuICAgICAgaWYgKHN5bWJvbEtleXNBLmxlbmd0aCAhPT0gc3ltYm9sS2V5c0IubGVuZ3RoICYmIGdldEVudW1lcmFibGVzKHZhbDIsIHN5bWJvbEtleXNCKS5sZW5ndGggIT09IGNvdW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9zeW1ib2xLZXlzQiA9IG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyh2YWwyKTtcblxuICAgICAgaWYgKF9zeW1ib2xLZXlzQi5sZW5ndGggIT09IDAgJiYgZ2V0RW51bWVyYWJsZXModmFsMiwgX3N5bWJvbEtleXNCKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhS2V5cy5sZW5ndGggPT09IDAgJiYgKGl0ZXJhdGlvblR5cGUgPT09IGtOb0l0ZXJhdG9yIHx8IGl0ZXJhdGlvblR5cGUgPT09IGtJc0FycmF5ICYmIHZhbDEubGVuZ3RoID09PSAwIHx8IHZhbDEuc2l6ZSA9PT0gMCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBVc2UgbWVtb3MgdG8gaGFuZGxlIGN5Y2xlcy5cblxuXG4gIGlmIChtZW1vcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWVtb3MgPSB7XG4gICAgICB2YWwxOiBuZXcgTWFwKCksXG4gICAgICB2YWwyOiBuZXcgTWFwKCksXG4gICAgICBwb3NpdGlvbjogMFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gV2UgcHJldmVudCB1cCB0byB0d28gbWFwLmhhcyh4KSBjYWxscyBieSBkaXJlY3RseSByZXRyaWV2aW5nIHRoZSB2YWx1ZVxuICAgIC8vIGFuZCBjaGVja2luZyBmb3IgdW5kZWZpbmVkLiBUaGUgbWFwIGNhbiBvbmx5IGNvbnRhaW4gbnVtYmVycywgc28gaXQgaXNcbiAgICAvLyBzYWZlIHRvIGNoZWNrIGZvciB1bmRlZmluZWQgb25seS5cbiAgICB2YXIgdmFsMk1lbW9BID0gbWVtb3MudmFsMS5nZXQodmFsMSk7XG5cbiAgICBpZiAodmFsMk1lbW9BICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB2YWwyTWVtb0IgPSBtZW1vcy52YWwyLmdldCh2YWwyKTtcblxuICAgICAgaWYgKHZhbDJNZW1vQiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB2YWwyTWVtb0EgPT09IHZhbDJNZW1vQjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vcy5wb3NpdGlvbisrO1xuICB9XG5cbiAgbWVtb3MudmFsMS5zZXQodmFsMSwgbWVtb3MucG9zaXRpb24pO1xuICBtZW1vcy52YWwyLnNldCh2YWwyLCBtZW1vcy5wb3NpdGlvbik7XG4gIHZhciBhcmVFcSA9IG9iakVxdWl2KHZhbDEsIHZhbDIsIHN0cmljdCwgYUtleXMsIG1lbW9zLCBpdGVyYXRpb25UeXBlKTtcbiAgbWVtb3MudmFsMS5kZWxldGUodmFsMSk7XG4gIG1lbW9zLnZhbDIuZGVsZXRlKHZhbDIpO1xuICByZXR1cm4gYXJlRXE7XG59XG5cbmZ1bmN0aW9uIHNldEhhc0VxdWFsRWxlbWVudChzZXQsIHZhbDEsIHN0cmljdCwgbWVtbykge1xuICAvLyBHbyBsb29raW5nLlxuICB2YXIgc2V0VmFsdWVzID0gYXJyYXlGcm9tU2V0KHNldCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsMiA9IHNldFZhbHVlc1tpXTtcblxuICAgIGlmIChpbm5lckRlZXBFcXVhbCh2YWwxLCB2YWwyLCBzdHJpY3QsIG1lbW8pKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIG1hdGNoaW5nIGVsZW1lbnQgdG8gbWFrZSBzdXJlIHdlIGRvIG5vdCBjaGVjayB0aGF0IGFnYWluLlxuICAgICAgc2V0LmRlbGV0ZSh2YWwyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvRXF1YWxpdHlfY29tcGFyaXNvbnNfYW5kX3NhbWVuZXNzI0xvb3NlX2VxdWFsaXR5X3VzaW5nXG4vLyBTYWRseSBpdCBpcyBub3QgcG9zc2libGUgdG8gZGV0ZWN0IGNvcnJlc3BvbmRpbmcgdmFsdWVzIHByb3Blcmx5IGluIGNhc2UgdGhlXG4vLyB0eXBlIGlzIGEgc3RyaW5nLCBudW1iZXIsIGJpZ2ludCBvciBib29sZWFuLiBUaGUgcmVhc29uIGlzIHRoYXQgdGhvc2UgdmFsdWVzXG4vLyBjYW4gbWF0Y2ggbG90cyBvZiBkaWZmZXJlbnQgc3RyaW5nIHZhbHVlcyAoZS5nLiwgMW4gPT0gJyswMDAwMScpLlxuXG5cbmZ1bmN0aW9uIGZpbmRMb29zZU1hdGNoaW5nUHJpbWl0aXZlcyhwcmltKSB7XG4gIHN3aXRjaCAoX3R5cGVvZihwcmltKSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gbnVsbDtcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAvLyBPbmx5IHBhc3MgaW4gbnVsbCBhcyBvYmplY3QhXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBwcmltID0gK3ByaW07XG4gICAgLy8gTG9vc2UgZXF1YWwgZW50cmllcyBleGlzdCBvbmx5IGlmIHRoZSBzdHJpbmcgaXMgcG9zc2libGUgdG8gY29udmVydCB0b1xuICAgIC8vIGEgcmVndWxhciBudW1iZXIgYW5kIG5vdCBOYU4uXG4gICAgLy8gRmFsbCB0aHJvdWdoXG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgaWYgKG51bWJlcklzTmFOKHByaW0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldE1pZ2h0SGF2ZUxvb3NlUHJpbShhLCBiLCBwcmltKSB7XG4gIHZhciBhbHRWYWx1ZSA9IGZpbmRMb29zZU1hdGNoaW5nUHJpbWl0aXZlcyhwcmltKTtcbiAgaWYgKGFsdFZhbHVlICE9IG51bGwpIHJldHVybiBhbHRWYWx1ZTtcbiAgcmV0dXJuIGIuaGFzKGFsdFZhbHVlKSAmJiAhYS5oYXMoYWx0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBtYXBNaWdodEhhdmVMb29zZVByaW0oYSwgYiwgcHJpbSwgaXRlbSwgbWVtbykge1xuICB2YXIgYWx0VmFsdWUgPSBmaW5kTG9vc2VNYXRjaGluZ1ByaW1pdGl2ZXMocHJpbSk7XG5cbiAgaWYgKGFsdFZhbHVlICE9IG51bGwpIHtcbiAgICByZXR1cm4gYWx0VmFsdWU7XG4gIH1cblxuICB2YXIgY3VyQiA9IGIuZ2V0KGFsdFZhbHVlKTtcblxuICBpZiAoY3VyQiA9PT0gdW5kZWZpbmVkICYmICFiLmhhcyhhbHRWYWx1ZSkgfHwgIWlubmVyRGVlcEVxdWFsKGl0ZW0sIGN1ckIsIGZhbHNlLCBtZW1vKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhYS5oYXMoYWx0VmFsdWUpICYmIGlubmVyRGVlcEVxdWFsKGl0ZW0sIGN1ckIsIGZhbHNlLCBtZW1vKTtcbn1cblxuZnVuY3Rpb24gc2V0RXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vKSB7XG4gIC8vIFRoaXMgaXMgYSBsYXppbHkgaW5pdGlhdGVkIFNldCBvZiBlbnRyaWVzIHdoaWNoIGhhdmUgdG8gYmUgY29tcGFyZWRcbiAgLy8gcGFpcndpc2UuXG4gIHZhciBzZXQgPSBudWxsO1xuICB2YXIgYVZhbHVlcyA9IGFycmF5RnJvbVNldChhKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsID0gYVZhbHVlc1tpXTsgLy8gTm90ZTogQ2hlY2tpbmcgZm9yIHRoZSBvYmplY3RzIGZpcnN0IGltcHJvdmVzIHRoZSBwZXJmb3JtYW5jZSBmb3Igb2JqZWN0XG4gICAgLy8gaGVhdnkgc2V0cyBidXQgaXQgaXMgYSBtaW5vciBzbG93IGRvd24gZm9yIHByaW1pdGl2ZXMuIEFzIHRoZXkgYXJlIGZhc3RcbiAgICAvLyB0byBjaGVjayB0aGlzIGltcHJvdmVzIHRoZSB3b3JzdCBjYXNlIHNjZW5hcmlvIGluc3RlYWQuXG5cbiAgICBpZiAoX3R5cGVvZih2YWwpID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZXQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgfSAvLyBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHNlY29uZCBzZXQgaXRzIGFuIG5vdCBudWxsXG4gICAgICAvLyBvYmplY3QgKG9yIG5vbiBzdHJpY3Qgb25seTogYSBub3QgbWF0Y2hpbmcgcHJpbWl0aXZlKSB3ZSdsbCBuZWVkIHRvIGdvXG4gICAgICAvLyBodW50aW5nIGZvciBzb21ldGhpbmcgdGhhdHMgZGVlcC0oc3RyaWN0LSllcXVhbCB0byBpdC4gVG8gbWFrZSB0aGlzXG4gICAgICAvLyBPKG4gbG9nIG4pIGNvbXBsZXhpdHkgd2UgaGF2ZSB0byBjb3B5IHRoZXNlIHZhbHVlcyBpbiBhIG5ldyBzZXQgZmlyc3QuXG5cblxuICAgICAgc2V0LmFkZCh2YWwpO1xuICAgIH0gZWxzZSBpZiAoIWIuaGFzKHZhbCkpIHtcbiAgICAgIGlmIChzdHJpY3QpIHJldHVybiBmYWxzZTsgLy8gRmFzdCBwYXRoIHRvIGRldGVjdCBtaXNzaW5nIHN0cmluZywgc3ltYm9sLCB1bmRlZmluZWQgYW5kIG51bGwgdmFsdWVzLlxuXG4gICAgICBpZiAoIXNldE1pZ2h0SGF2ZUxvb3NlUHJpbShhLCBiLCB2YWwpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldCA9PT0gbnVsbCkge1xuICAgICAgICBzZXQgPSBuZXcgU2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHNldC5hZGQodmFsKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0ICE9PSBudWxsKSB7XG4gICAgdmFyIGJWYWx1ZXMgPSBhcnJheUZyb21TZXQoYik7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYlZhbHVlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfdmFsID0gYlZhbHVlc1tfaV07IC8vIFdlIGhhdmUgdG8gY2hlY2sgaWYgYSBwcmltaXRpdmUgdmFsdWUgaXMgYWxyZWFkeVxuICAgICAgLy8gbWF0Y2hpbmcgYW5kIG9ubHkgaWYgaXQncyBub3QsIGdvIGh1bnRpbmcgZm9yIGl0LlxuXG4gICAgICBpZiAoX3R5cGVvZihfdmFsKSA9PT0gJ29iamVjdCcgJiYgX3ZhbCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoIXNldEhhc0VxdWFsRWxlbWVudChzZXQsIF92YWwsIHN0cmljdCwgbWVtbykpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiAhYS5oYXMoX3ZhbCkgJiYgIXNldEhhc0VxdWFsRWxlbWVudChzZXQsIF92YWwsIHN0cmljdCwgbWVtbykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXQuc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtYXBIYXNFcXVhbEVudHJ5KHNldCwgbWFwLCBrZXkxLCBpdGVtMSwgc3RyaWN0LCBtZW1vKSB7XG4gIC8vIFRvIGJlIGFibGUgdG8gaGFuZGxlIGNhc2VzIGxpa2U6XG4gIC8vICAgTWFwKFtbe30sICdhJ10sIFt7fSwgJ2InXV0pIHZzIE1hcChbW3t9LCAnYiddLCBbe30sICdhJ11dKVxuICAvLyAuLi4gd2UgbmVlZCB0byBjb25zaWRlciAqYWxsKiBtYXRjaGluZyBrZXlzLCBub3QganVzdCB0aGUgZmlyc3Qgd2UgZmluZC5cbiAgdmFyIHNldFZhbHVlcyA9IGFycmF5RnJvbVNldChzZXQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleTIgPSBzZXRWYWx1ZXNbaV07XG5cbiAgICBpZiAoaW5uZXJEZWVwRXF1YWwoa2V5MSwga2V5Miwgc3RyaWN0LCBtZW1vKSAmJiBpbm5lckRlZXBFcXVhbChpdGVtMSwgbWFwLmdldChrZXkyKSwgc3RyaWN0LCBtZW1vKSkge1xuICAgICAgc2V0LmRlbGV0ZShrZXkyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWFwRXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vKSB7XG4gIHZhciBzZXQgPSBudWxsO1xuICB2YXIgYUVudHJpZXMgPSBhcnJheUZyb21NYXAoYSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfYUVudHJpZXMkaSA9IF9zbGljZWRUb0FycmF5KGFFbnRyaWVzW2ldLCAyKSxcbiAgICAgICAga2V5ID0gX2FFbnRyaWVzJGlbMF0sXG4gICAgICAgIGl0ZW0xID0gX2FFbnRyaWVzJGlbMV07XG5cbiAgICBpZiAoX3R5cGVvZihrZXkpID09PSAnb2JqZWN0JyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZXQgPT09IG51bGwpIHtcbiAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgfVxuXG4gICAgICBzZXQuYWRkKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJ5IGRpcmVjdGx5IHJldHJpZXZpbmcgdGhlIHZhbHVlIHdlIHByZXZlbnQgYW5vdGhlciBiLmhhcyhrZXkpIGNoZWNrIGluXG4gICAgICAvLyBhbG1vc3QgYWxsIHBvc3NpYmxlIGNhc2VzLlxuICAgICAgdmFyIGl0ZW0yID0gYi5nZXQoa2V5KTtcblxuICAgICAgaWYgKGl0ZW0yID09PSB1bmRlZmluZWQgJiYgIWIuaGFzKGtleSkgfHwgIWlubmVyRGVlcEVxdWFsKGl0ZW0xLCBpdGVtMiwgc3RyaWN0LCBtZW1vKSkge1xuICAgICAgICBpZiAoc3RyaWN0KSByZXR1cm4gZmFsc2U7IC8vIEZhc3QgcGF0aCB0byBkZXRlY3QgbWlzc2luZyBzdHJpbmcsIHN5bWJvbCwgdW5kZWZpbmVkIGFuZCBudWxsXG4gICAgICAgIC8vIGtleXMuXG5cbiAgICAgICAgaWYgKCFtYXBNaWdodEhhdmVMb29zZVByaW0oYSwgYiwga2V5LCBpdGVtMSwgbWVtbykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAoc2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0LmFkZChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZXQgIT09IG51bGwpIHtcbiAgICB2YXIgYkVudHJpZXMgPSBhcnJheUZyb21NYXAoYik7XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBiRW50cmllcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgX2JFbnRyaWVzJF9pID0gX3NsaWNlZFRvQXJyYXkoYkVudHJpZXNbX2kyXSwgMiksXG4gICAgICAgICAga2V5ID0gX2JFbnRyaWVzJF9pWzBdLFxuICAgICAgICAgIGl0ZW0gPSBfYkVudHJpZXMkX2lbMV07XG5cbiAgICAgIGlmIChfdHlwZW9mKGtleSkgPT09ICdvYmplY3QnICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoIW1hcEhhc0VxdWFsRW50cnkoc2V0LCBhLCBrZXksIGl0ZW0sIHN0cmljdCwgbWVtbykpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiAoIWEuaGFzKGtleSkgfHwgIWlubmVyRGVlcEVxdWFsKGEuZ2V0KGtleSksIGl0ZW0sIGZhbHNlLCBtZW1vKSkgJiYgIW1hcEhhc0VxdWFsRW50cnkoc2V0LCBhLCBrZXksIGl0ZW0sIGZhbHNlLCBtZW1vKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldC5zaXplID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIHN0cmljdCwga2V5cywgbWVtb3MsIGl0ZXJhdGlvblR5cGUpIHtcbiAgLy8gU2V0cyBhbmQgbWFwcyBkb24ndCBoYXZlIHRoZWlyIGVudHJpZXMgYWNjZXNzaWJsZSB2aWEgbm9ybWFsIG9iamVjdFxuICAvLyBwcm9wZXJ0aWVzLlxuICB2YXIgaSA9IDA7XG5cbiAgaWYgKGl0ZXJhdGlvblR5cGUgPT09IGtJc1NldCkge1xuICAgIGlmICghc2V0RXF1aXYoYSwgYiwgc3RyaWN0LCBtZW1vcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXRlcmF0aW9uVHlwZSA9PT0ga0lzTWFwKSB7XG4gICAgaWYgKCFtYXBFcXVpdihhLCBiLCBzdHJpY3QsIG1lbW9zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpdGVyYXRpb25UeXBlID09PSBrSXNBcnJheSkge1xuICAgIGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGEsIGkpKSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcGVydHkoYiwgaSkgfHwgIWlubmVyRGVlcEVxdWFsKGFbaV0sIGJbaV0sIHN0cmljdCwgbWVtb3MpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KGIsIGkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFycmF5IGlzIHNwYXJzZS5cbiAgICAgICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlzQVtpXTtcblxuICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHkoYiwga2V5KSB8fCAhaW5uZXJEZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgbWVtb3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleXNBLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFRoZSBwYWlyIG11c3QgaGF2ZSBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXkuXG4gIC8vIFBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3Q6XG5cblxuICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfa2V5ID0ga2V5c1tpXTtcblxuICAgIGlmICghaW5uZXJEZWVwRXF1YWwoYVtfa2V5XSwgYltfa2V5XSwgc3RyaWN0LCBtZW1vcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNEZWVwRXF1YWwodmFsMSwgdmFsMikge1xuICByZXR1cm4gaW5uZXJEZWVwRXF1YWwodmFsMSwgdmFsMiwga0xvb3NlKTtcbn1cblxuZnVuY3Rpb24gaXNEZWVwU3RyaWN0RXF1YWwodmFsMSwgdmFsMikge1xuICByZXR1cm4gaW5uZXJEZWVwRXF1YWwodmFsMSwgdmFsMiwga1N0cmljdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0RlZXBFcXVhbDogaXNEZWVwRXF1YWwsXG4gIGlzRGVlcFN0cmljdEVxdWFsOiBpc0RlZXBTdHJpY3RFcXVhbFxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCb3VuZEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpYyA9IEdldEludHJpbnNpYyhuYW1lLCAhIWFsbG93TWlzc2luZyk7XG5cdGlmICh0eXBlb2YgaW50cmluc2ljID09PSAnZnVuY3Rpb24nICYmICRpbmRleE9mKG5hbWUsICcucHJvdG90eXBlLicpID4gLTEpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG52YXIgJGdPUEQgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJScsIHRydWUpO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbnZhciAkbWF4ID0gR2V0SW50cmluc2ljKCclTWF0aC5tYXglJyk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKG9yaWdpbmFsRnVuY3Rpb24pIHtcblx0dmFyIGZ1bmMgPSAkcmVmbGVjdEFwcGx5KGJpbmQsICRjYWxsLCBhcmd1bWVudHMpO1xuXHRpZiAoJGdPUEQgJiYgJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dmFyIGRlc2MgPSAkZ09QRChmdW5jLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHQvLyBvcmlnaW5hbCBsZW5ndGgsIHBsdXMgdGhlIHJlY2VpdmVyLCBtaW51cyBhbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgKGFmdGVyIHRoZSByZWNlaXZlcilcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0ZnVuYyxcblx0XHRcdFx0J2xlbmd0aCcsXG5cdFx0XHRcdHsgdmFsdWU6IDEgKyAkbWF4KDAsIG9yaWdpbmFsRnVuY3Rpb24ubGVuZ3RoIC0gKGFyZ3VtZW50cy5sZW5ndGggLSAxKSkgfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZ1bmM7XG59O1xuXG52YXIgYXBwbHlCaW5kID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdCRkZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2FwcGx5JywgeyB2YWx1ZTogYXBwbHlCaW5kIH0pO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBhcHBseUJpbmQ7XG59XG4iLCIvKmdsb2JhbCB3aW5kb3csIGdsb2JhbCovXG52YXIgdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpXG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKVxuZnVuY3Rpb24gbm93KCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgfVxuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbnZhciBjb25zb2xlXG52YXIgdGltZXMgPSB7fVxuXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY29uc29sZSkge1xuICAgIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZVxufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlXG59IGVsc2Uge1xuICAgIGNvbnNvbGUgPSB7fVxufVxuXG52YXIgZnVuY3Rpb25zID0gW1xuICAgIFtsb2csIFwibG9nXCJdLFxuICAgIFtpbmZvLCBcImluZm9cIl0sXG4gICAgW3dhcm4sIFwid2FyblwiXSxcbiAgICBbZXJyb3IsIFwiZXJyb3JcIl0sXG4gICAgW3RpbWUsIFwidGltZVwiXSxcbiAgICBbdGltZUVuZCwgXCJ0aW1lRW5kXCJdLFxuICAgIFt0cmFjZSwgXCJ0cmFjZVwiXSxcbiAgICBbZGlyLCBcImRpclwiXSxcbiAgICBbY29uc29sZUFzc2VydCwgXCJhc3NlcnRcIl1cbl1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBmdW5jdGlvbnNbaV1cbiAgICB2YXIgZiA9IHR1cGxlWzBdXG4gICAgdmFyIG5hbWUgPSB0dXBsZVsxXVxuXG4gICAgaWYgKCFjb25zb2xlW25hbWVdKSB7XG4gICAgICAgIGNvbnNvbGVbbmFtZV0gPSBmXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGVcblxuZnVuY3Rpb24gbG9nKCkge31cblxuZnVuY3Rpb24gaW5mbygpIHtcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpXG59XG5cbmZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiBlcnJvcigpIHtcbiAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiB0aW1lKGxhYmVsKSB7XG4gICAgdGltZXNbbGFiZWxdID0gbm93KClcbn1cblxuZnVuY3Rpb24gdGltZUVuZChsYWJlbCkge1xuICAgIHZhciB0aW1lID0gdGltZXNbbGFiZWxdXG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWw6IFwiICsgbGFiZWwpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRpbWVzW2xhYmVsXVxuICAgIHZhciBkdXJhdGlvbiA9IG5vdygpIC0gdGltZVxuICAgIGNvbnNvbGUubG9nKGxhYmVsICsgXCI6IFwiICsgZHVyYXRpb24gKyBcIm1zXCIpXG59XG5cbmZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKVxuICAgIGVyci5uYW1lID0gXCJUcmFjZVwiXG4gICAgZXJyLm1lc3NhZ2UgPSB1dGlsLmZvcm1hdC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spXG59XG5cbmZ1bmN0aW9uIGRpcihvYmplY3QpIHtcbiAgICBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3Qob2JqZWN0KSArIFwiXFxuXCIpXG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVBc3NlcnQoZXhwcmVzc2lvbikge1xuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgYXJyID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgICAgIGFzc2VydC5vayhmYWxzZSwgdXRpbC5mb3JtYXQuYXBwbHkobnVsbCwgYXJyKSlcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG5cbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnM7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWUsIHZhbHVlLCBwcmVkaWNhdGUpIHtcblx0aWYgKG5hbWUgaW4gb2JqZWN0ICYmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcblx0XHRvcmlnRGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b2JqZWN0W25hbWVdID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcbiIsIi8qKlxuICogQ29kZSByZWZhY3RvcmVkIGZyb20gTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yazpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGZpcnN0U291cmNlKSB7XG4gIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBmaXJzdCBhcmd1bWVudCB0byBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGlmIChuZXh0U291cmNlID09PSB1bmRlZmluZWQgfHwgbmV4dFNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSk7XG4gICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXgrKykge1xuICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcbiAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgaWYgKCFPYmplY3QuYXNzaWduKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2Fzc2lnbicsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogYXNzaWduXG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFzc2lnbjogYXNzaWduLFxuICBwb2x5ZmlsbDogcG9seWZpbGxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBmb3JFYWNoQXJyYXkgPSBmdW5jdGlvbiBmb3JFYWNoQXJyYXkoYXJyYXksIGl0ZXJhdG9yLCByZWNlaXZlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChyZWNlaXZlciwgYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBmb3JFYWNoU3RyaW5nID0gZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCByZWNlaXZlcikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHJpbmcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgLy8gbm8gc3VjaCB0aGluZyBhcyBhIHNwYXJzZSBzdHJpbmcuXG4gICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBpdGVyYXRvcihzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChyZWNlaXZlciwgc3RyaW5nLmNoYXJBdChpKSwgaSwgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBmb3JFYWNoT2JqZWN0ID0gZnVuY3Rpb24gZm9yRWFjaE9iamVjdChvYmplY3QsIGl0ZXJhdG9yLCByZWNlaXZlcikge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3Iob2JqZWN0W2tdLCBrLCBvYmplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5jYWxsKHJlY2VpdmVyLCBvYmplY3Rba10sIGssIG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIHRoaXNBcmcpIHtcbiAgICBpZiAoIWlzQ2FsbGFibGUoaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHZhciByZWNlaXZlcjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIHJlY2VpdmVyID0gdGhpc0FyZztcbiAgICB9XG5cbiAgICBpZiAodG9TdHIuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIHJlY2VpdmVyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCByZWNlaXZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgcmVjZWl2ZXIpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLWludmFsaWQtdGhpczogMSAqL1xuXG52YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdW5kZWZpbmVkO1xuXG52YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG52YXIgJEZ1bmN0aW9uID0gRnVuY3Rpb247XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG52YXIgZ2V0RXZhbGxlZENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKGV4cHJlc3Npb25TeW50YXgpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gJEZ1bmN0aW9uKCdcInVzZSBzdHJpY3RcIjsgcmV0dXJuICgnICsgZXhwcmVzc2lvblN5bnRheCArICcpLmNvbnN0cnVjdG9yOycpKCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoKTtcbn07XG52YXIgVGhyb3dUeXBlRXJyb3IgPSAkZ09QRFxuXHQ/IChmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnMsIG5vLWNhbGxlciwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdFx0XHRhcmd1bWVudHMuY2FsbGVlOyAvLyBJRSA4IGRvZXMgbm90IHRocm93IGhlcmVcblx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHR9IGNhdGNoIChjYWxsZWVUaHJvd3MpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElFIDggdGhyb3dzIG9uIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYXJndW1lbnRzLCAnJylcblx0XHRcdFx0cmV0dXJuICRnT1BEKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDtcblx0XHRcdH0gY2F0Y2ggKGdPUER0aHJvd3MpIHtcblx0XHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSgpKVxuXHQ6IHRocm93VHlwZUVycm9yO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Ll9fcHJvdG9fXzsgfTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG52YXIgbmVlZHNFdmFsID0ge307XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IG5lZWRzRXZhbCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJvb2xlYW4lJzogQm9vbGVhbixcblx0JyVEYXRhVmlldyUnOiB0eXBlb2YgRGF0YVZpZXcgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRGF0YVZpZXcsXG5cdCclRGF0ZSUnOiBEYXRlLFxuXHQnJWRlY29kZVVSSSUnOiBkZWNvZGVVUkksXG5cdCclZGVjb2RlVVJJQ29tcG9uZW50JSc6IGRlY29kZVVSSUNvbXBvbmVudCxcblx0JyVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJWVuY29kZVVSSUNvbXBvbmVudCUnOiBlbmNvZGVVUklDb21wb25lbnQsXG5cdCclRXJyb3IlJzogRXJyb3IsXG5cdCclZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyVFdmFsRXJyb3IlJzogRXZhbEVycm9yLFxuXHQnJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCclRmluYWxpemF0aW9uUmVnaXN0cnklJzogdHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZpbmFsaXphdGlvblJlZ2lzdHJ5LFxuXHQnJUZ1bmN0aW9uJSc6ICRGdW5jdGlvbixcblx0JyVHZW5lcmF0b3JGdW5jdGlvbiUnOiBuZWVkc0V2YWwsXG5cdCclSW50OEFycmF5JSc6IHR5cGVvZiBJbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LFxuXHQnJUludDE2QXJyYXklJzogdHlwZW9mIEludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MTZBcnJheSxcblx0JyVJbnQzMkFycmF5JSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXksXG5cdCclaXNGaW5pdGUlJzogaXNGaW5pdGUsXG5cdCclaXNOYU4lJzogaXNOYU4sXG5cdCclSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkpIDogdW5kZWZpbmVkLFxuXHQnJUpTT04lJzogdHlwZW9mIEpTT04gPT09ICdvYmplY3QnID8gSlNPTiA6IHVuZGVmaW5lZCxcblx0JyVNYXAlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBNYXAsXG5cdCclTWFwSXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVNYXRoJSc6IE1hdGgsXG5cdCclTnVtYmVyJSc6IE51bWJlcixcblx0JyVPYmplY3QlJzogT2JqZWN0LFxuXHQnJXBhcnNlRmxvYXQlJzogcGFyc2VGbG9hdCxcblx0JyVwYXJzZUludCUnOiBwYXJzZUludCxcblx0JyVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCclUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJVJhbmdlRXJyb3IlJzogUmFuZ2VFcnJvcixcblx0JyVSZWZlcmVuY2VFcnJvciUnOiBSZWZlcmVuY2VFcnJvcixcblx0JyVSZWZsZWN0JSc6IHR5cGVvZiBSZWZsZWN0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFJlZmxlY3QsXG5cdCclUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyVTZXQlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQsXG5cdCclU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgU2V0KClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVTaGFyZWRBcnJheUJ1ZmZlciUnOiB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2hhcmVkQXJyYXlCdWZmZXIsXG5cdCclU3RyaW5nJSc6IFN0cmluZyxcblx0JyVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oJydbU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyVTeW50YXhFcnJvciUnOiAkU3ludGF4RXJyb3IsXG5cdCclVGhyb3dUeXBlRXJyb3IlJzogVGhyb3dUeXBlRXJyb3IsXG5cdCclVHlwZWRBcnJheSUnOiBUeXBlZEFycmF5LFxuXHQnJVR5cGVFcnJvciUnOiAkVHlwZUVycm9yLFxuXHQnJVVpbnQ4QXJyYXklJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheSxcblx0JyVVaW50OENsYW1wZWRBcnJheSUnOiB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhDbGFtcGVkQXJyYXksXG5cdCclVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJVVpbnQzMkFycmF5JSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheSxcblx0JyVVUklFcnJvciUnOiBVUklFcnJvcixcblx0JyVXZWFrTWFwJSc6IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtNYXAsXG5cdCclV2Vha1JlZiUnOiB0eXBlb2YgV2Vha1JlZiA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrUmVmLFxuXHQnJVdlYWtTZXQlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldFxufTtcblxudmFyIGRvRXZhbCA9IGZ1bmN0aW9uIGRvRXZhbChuYW1lKSB7XG5cdHZhciB2YWx1ZTtcblx0aWYgKG5hbWUgPT09ICclQXN5bmNGdW5jdGlvbiUnKSB7XG5cdFx0dmFsdWUgPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2FzeW5jIGZ1bmN0aW9uICgpIHt9Jyk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJyVHZW5lcmF0b3JGdW5jdGlvbiUnKSB7XG5cdFx0dmFsdWUgPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2Z1bmN0aW9uKiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnKSB7XG5cdFx0dmFsdWUgPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2FzeW5jIGZ1bmN0aW9uKiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNHZW5lcmF0b3IlJykge1xuXHRcdHZhciBmbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJyk7XG5cdFx0aWYgKGZuKSB7XG5cdFx0XHR2YWx1ZSA9IGZuLnByb3RvdHlwZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJScpIHtcblx0XHR2YXIgZ2VuID0gZG9FdmFsKCclQXN5bmNHZW5lcmF0b3IlJyk7XG5cdFx0aWYgKGdlbikge1xuXHRcdFx0dmFsdWUgPSBnZXRQcm90byhnZW4ucHJvdG90eXBlKTtcblx0XHR9XG5cdH1cblxuXHRJTlRSSU5TSUNTW25hbWVdID0gdmFsdWU7XG5cblx0cmV0dXJuIHZhbHVlO1xufTtcblxudmFyIExFR0FDWV9BTElBU0VTID0ge1xuXHQnJUFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b3R5cGUlJzogWydBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVBcnJheVByb3RvX2VudHJpZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZW50cmllcyddLFxuXHQnJUFycmF5UHJvdG9fZm9yRWFjaCUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdmb3JFYWNoJ10sXG5cdCclQXJyYXlQcm90b19rZXlzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2tleXMnXSxcblx0JyVBcnJheVByb3RvX3ZhbHVlcyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICd2YWx1ZXMnXSxcblx0JyVBc3luY0Z1bmN0aW9uUHJvdG90eXBlJSc6IFsnQXN5bmNGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVBc3luY0dlbmVyYXRvciUnOiBbJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZScsICdwcm90b3R5cGUnXSxcblx0JyVCb29sZWFuUHJvdG90eXBlJSc6IFsnQm9vbGVhbicsICdwcm90b3R5cGUnXSxcblx0JyVEYXRhVmlld1Byb3RvdHlwZSUnOiBbJ0RhdGFWaWV3JywgJ3Byb3RvdHlwZSddLFxuXHQnJURhdGVQcm90b3R5cGUlJzogWydEYXRlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUVycm9yUHJvdG90eXBlJSc6IFsnRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclRXZhbEVycm9yUHJvdG90eXBlJSc6IFsnRXZhbEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUZsb2F0MzJBcnJheVByb3RvdHlwZSUnOiBbJ0Zsb2F0MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDY0QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRnVuY3Rpb25Qcm90b3R5cGUlJzogWydGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVHZW5lcmF0b3IlJzogWydHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVHZW5lcmF0b3JQcm90b3R5cGUlJzogWydHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclSW50OEFycmF5UHJvdG90eXBlJSc6IFsnSW50OEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDE2QXJyYXlQcm90b3R5cGUlJzogWydJbnQxNkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDMyQXJyYXlQcm90b3R5cGUlJzogWydJbnQzMkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUpTT05QYXJzZSUnOiBbJ0pTT04nLCAncGFyc2UnXSxcblx0JyVKU09OU3RyaW5naWZ5JSc6IFsnSlNPTicsICdzdHJpbmdpZnknXSxcblx0JyVNYXBQcm90b3R5cGUlJzogWydNYXAnLCAncHJvdG90eXBlJ10sXG5cdCclTnVtYmVyUHJvdG90eXBlJSc6IFsnTnVtYmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJU9iamVjdFByb3RvdHlwZSUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnXSxcblx0JyVPYmpQcm90b190b1N0cmluZyUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndG9TdHJpbmcnXSxcblx0JyVPYmpQcm90b192YWx1ZU9mJSc6IFsnT2JqZWN0JywgJ3Byb3RvdHlwZScsICd2YWx1ZU9mJ10sXG5cdCclUHJvbWlzZVByb3RvdHlwZSUnOiBbJ1Byb21pc2UnLCAncHJvdG90eXBlJ10sXG5cdCclUHJvbWlzZVByb3RvX3RoZW4lJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZScsICd0aGVuJ10sXG5cdCclUHJvbWlzZV9hbGwlJzogWydQcm9taXNlJywgJ2FsbCddLFxuXHQnJVByb21pc2VfcmVqZWN0JSc6IFsnUHJvbWlzZScsICdyZWplY3QnXSxcblx0JyVQcm9taXNlX3Jlc29sdmUlJzogWydQcm9taXNlJywgJ3Jlc29sdmUnXSxcblx0JyVSYW5nZUVycm9yUHJvdG90eXBlJSc6IFsnUmFuZ2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWZlcmVuY2VFcnJvclByb3RvdHlwZSUnOiBbJ1JlZmVyZW5jZUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVJlZ0V4cFByb3RvdHlwZSUnOiBbJ1JlZ0V4cCcsICdwcm90b3R5cGUnXSxcblx0JyVTZXRQcm90b3R5cGUlJzogWydTZXQnLCAncHJvdG90eXBlJ10sXG5cdCclU2hhcmVkQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogWydTaGFyZWRBcnJheUJ1ZmZlcicsICdwcm90b3R5cGUnXSxcblx0JyVTdHJpbmdQcm90b3R5cGUlJzogWydTdHJpbmcnLCAncHJvdG90eXBlJ10sXG5cdCclU3ltYm9sUHJvdG90eXBlJSc6IFsnU3ltYm9sJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bnRheEVycm9yUHJvdG90eXBlJSc6IFsnU3ludGF4RXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclVHlwZWRBcnJheVByb3RvdHlwZSUnOiBbJ1R5cGVkQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVHlwZUVycm9yUHJvdG90eXBlJSc6IFsnVHlwZUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogWydVaW50OEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhDbGFtcGVkQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDE2QXJyYXlQcm90b3R5cGUlJzogWydVaW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50MzJBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQzMkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVSSUVycm9yUHJvdG90eXBlJSc6IFsnVVJJRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclV2Vha01hcFByb3RvdHlwZSUnOiBbJ1dlYWtNYXAnLCAncHJvdG90eXBlJ10sXG5cdCclV2Vha1NldFByb3RvdHlwZSUnOiBbJ1dlYWtTZXQnLCAncHJvdG90eXBlJ11cbn07XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJ2hhcycpO1xudmFyICRjb25jYXQgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgQXJyYXkucHJvdG90eXBlLmNvbmNhdCk7XG52YXIgJHNwbGljZUFwcGx5ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmFwcGx5LCBBcnJheS5wcm90b3R5cGUuc3BsaWNlKTtcbnZhciAkcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyICRzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbnZhciAkZXhlYyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLmV4ZWMpO1xuXG4vKiBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi80LjE3LjE1L2Rpc3QvbG9kYXNoLmpzI0w2NzM1LUw2NzQ0ICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXiUuW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JSQpKS9nO1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nOyAvKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBmdW5jdGlvbiBzdHJpbmdUb1BhdGgoc3RyaW5nKSB7XG5cdHZhciBmaXJzdCA9ICRzdHJTbGljZShzdHJpbmcsIDAsIDEpO1xuXHR2YXIgbGFzdCA9ICRzdHJTbGljZShzdHJpbmcsIC0xKTtcblx0aWYgKGZpcnN0ID09PSAnJScgJiYgbGFzdCAhPT0gJyUnKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW52YWxpZCBpbnRyaW5zaWMgc3ludGF4LCBleHBlY3RlZCBjbG9zaW5nIGAlYCcpO1xuXHR9IGVsc2UgaWYgKGxhc3QgPT09ICclJyAmJiBmaXJzdCAhPT0gJyUnKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW52YWxpZCBpbnRyaW5zaWMgc3ludGF4LCBleHBlY3RlZCBvcGVuaW5nIGAlYCcpO1xuXHR9XG5cdHZhciByZXN1bHQgPSBbXTtcblx0JHJlcGxhY2Uoc3RyaW5nLCByZVByb3BOYW1lLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuXHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHF1b3RlID8gJHJlcGxhY2Uoc3ViU3RyaW5nLCByZUVzY2FwZUNoYXIsICckMScpIDogbnVtYmVyIHx8IG1hdGNoO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4vKiBlbmQgYWRhcHRhdGlvbiAqL1xuXG52YXIgZ2V0QmFzZUludHJpbnNpYyA9IGZ1bmN0aW9uIGdldEJhc2VJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdHZhciBpbnRyaW5zaWNOYW1lID0gbmFtZTtcblx0dmFyIGFsaWFzO1xuXHRpZiAoaGFzT3duKExFR0FDWV9BTElBU0VTLCBpbnRyaW5zaWNOYW1lKSkge1xuXHRcdGFsaWFzID0gTEVHQUNZX0FMSUFTRVNbaW50cmluc2ljTmFtZV07XG5cdFx0aW50cmluc2ljTmFtZSA9ICclJyArIGFsaWFzWzBdICsgJyUnO1xuXHR9XG5cblx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNOYW1lKSkge1xuXHRcdHZhciB2YWx1ZSA9IElOVFJJTlNJQ1NbaW50cmluc2ljTmFtZV07XG5cdFx0aWYgKHZhbHVlID09PSBuZWVkc0V2YWwpIHtcblx0XHRcdHZhbHVlID0gZG9FdmFsKGludHJpbnNpY05hbWUpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyAmJiAhYWxsb3dNaXNzaW5nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgZmlsZSBhbiBpc3N1ZSEnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxpYXM6IGFsaWFzLFxuXHRcdFx0bmFtZTogaW50cmluc2ljTmFtZSxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH07XG5cdH1cblxuXHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBHZXRJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaW50cmluc2ljIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFsbG93TWlzc2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdGlmICgkZXhlYygvXiU/W14lXSolPyQvZywgbmFtZSkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdgJWAgbWF5IG5vdCBiZSBwcmVzZW50IGFueXdoZXJlIGJ1dCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdGhlIGludHJpbnNpYyBuYW1lJyk7XG5cdH1cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbnZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzID0gZnVuY3Rpb24gaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpIHtcblx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdHRyeSB7XG5cdFx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmhhc1Byb3BlcnR5RGVzY3JpcHRvcnMuaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcgPSBmdW5jdGlvbiBoYXNBcnJheUxlbmd0aERlZmluZUJ1ZygpIHtcblx0Ly8gbm9kZSB2MC42IGhhcyBhIGJ1ZyB3aGVyZSBhcnJheSBsZW5ndGhzIGNhbiBiZSBTZXQgYnV0IG5vdCBEZWZpbmVkXG5cdGlmICghaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gJGRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB2YWx1ZTogMSB9KS5sZW5ndGggIT09IDE7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJbiBGaXJlZm94IDQtMjIsIGRlZmluaW5nIGxlbmd0aCBvbiBhbiBhcnJheSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcmlnU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby11bnJlYWNoYWJsZS1sb29wXG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scy9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1RvU3RyaW5nVGFnU2hhbXMoKSB7XG5cdHJldHVybiBoYXNTeW1ib2xzKCkgJiYgISFTeW1ib2wudG9TdHJpbmdUYWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBpZiAoc3VwZXJDdG9yKSB7XG4gICAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG5cbnZhciBpc1N0YW5kYXJkQXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0aWYgKGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAkdG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbnZhciBpc0xlZ2FjeUFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdGlmIChpc1N0YW5kYXJkQXJndW1lbnRzKHZhbHVlKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0JHRvU3RyaW5nKHZhbHVlKSAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdCR0b1N0cmluZyh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudmFyIHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gaXNTdGFuZGFyZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xufSgpKTtcblxuaXNTdGFuZGFyZEFyZ3VtZW50cy5pc0xlZ2FjeUFyZ3VtZW50cyA9IGlzTGVnYWN5QXJndW1lbnRzOyAvLyBmb3IgdGVzdHNcblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c1N0YW5kYXJkQXJndW1lbnRzID8gaXNTdGFuZGFyZEFyZ3VtZW50cyA6IGlzTGVnYWN5QXJndW1lbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWZsZWN0QXBwbHkgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdCAhPT0gbnVsbCAmJiBSZWZsZWN0LmFwcGx5O1xudmFyIGJhZEFycmF5TGlrZTtcbnZhciBpc0NhbGxhYmxlTWFya2VyO1xuaWYgKHR5cGVvZiByZWZsZWN0QXBwbHkgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHR0cnkge1xuXHRcdGJhZEFycmF5TGlrZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2xlbmd0aCcsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBpc0NhbGxhYmxlTWFya2VyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlzQ2FsbGFibGVNYXJrZXIgPSB7fTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuXHRcdHJlZmxlY3RBcHBseShmdW5jdGlvbiAoKSB7IHRocm93IDQyOyB9LCBudWxsLCBiYWRBcnJheUxpa2UpO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0aWYgKF8gIT09IGlzQ2FsbGFibGVNYXJrZXIpIHtcblx0XHRcdHJlZmxlY3RBcHBseSA9IG51bGw7XG5cdFx0fVxuXHR9XG59IGVsc2Uge1xuXHRyZWZsZWN0QXBwbHkgPSBudWxsO1xufVxuXG52YXIgY29uc3RydWN0b3JSZWdleCA9IC9eXFxzKmNsYXNzXFxiLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRnVuY3Rpb24odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3QoZm5TdHIpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBub3QgYSBmdW5jdGlvblxuXHR9XG59O1xuXG52YXIgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvblRvU3RyKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIVN5bWJvbC50b1N0cmluZ1RhZzsgLy8gYmV0dGVyOiB1c2UgYGhhcy10b3N0cmluZ3RhZ2Bcbi8qIGdsb2JhbHMgZG9jdW1lbnQ6IGZhbHNlICovXG52YXIgZG9jdW1lbnREb3RBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkb2N1bWVudC5hbGwgPT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmFsbCAhPT0gdW5kZWZpbmVkID8gZG9jdW1lbnQuYWxsIDoge307XG5cbm1vZHVsZS5leHBvcnRzID0gcmVmbGVjdEFwcGx5XG5cdD8gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gZG9jdW1lbnREb3RBbGwpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmICF2YWx1ZS5wcm90b3R5cGUpIHsgcmV0dXJuIHRydWU7IH1cblx0XHR0cnkge1xuXHRcdFx0cmVmbGVjdEFwcGx5KHZhbHVlLCBudWxsLCBiYWRBcnJheUxpa2UpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmIChlICE9PSBpc0NhbGxhYmxlTWFya2VyKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdH1cblx0XHRyZXR1cm4gIWlzRVM2Q2xhc3NGbih2YWx1ZSk7XG5cdH1cblx0OiBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBkb2N1bWVudERvdEFsbCkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIXZhbHVlLnByb3RvdHlwZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmIChoYXNUb1N0cmluZ1RhZykgeyByZXR1cm4gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpOyB9XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dmFyIHN0ckNsYXNzID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHN0ckNsYXNzID09PSBmbkNsYXNzIHx8IHN0ckNsYXNzID09PSBnZW5DbGFzcztcblx0fTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGlzRm5SZWdleCA9IC9eXFxzKig/OmZ1bmN0aW9uKT9cXCovO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBnZXRHZW5lcmF0b3JGdW5jID0gZnVuY3Rpb24gKCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gRnVuY3Rpb24oJ3JldHVybiBmdW5jdGlvbiooKSB7fScpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0fVxufTtcbnZhciBHZW5lcmF0b3JGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKGlzRm5SZWdleC50ZXN0KGZuVG9TdHIuY2FsbChmbikpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHZhciBzdHIgPSB0b1N0ci5jYWxsKGZuKTtcblx0XHRyZXR1cm4gc3RyID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXHR9XG5cdGlmICghZ2V0UHJvdG8pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHR5cGVvZiBHZW5lcmF0b3JGdW5jdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR2YXIgZ2VuZXJhdG9yRnVuYyA9IGdldEdlbmVyYXRvckZ1bmMoKTtcblx0XHRHZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvckZ1bmMgPyBnZXRQcm90byhnZW5lcmF0b3JGdW5jKSA6IGZhbHNlO1xuXHR9XG5cdHJldHVybiBnZXRQcm90byhmbikgPT09IEdlbmVyYXRvckZ1bmN0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5pc25hbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzTmFOKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBjYWxsQmluZChnZXRQb2x5ZmlsbCgpLCBOdW1iZXIpO1xuXG4vKiBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLmlzbmFuICovXG5cbmRlZmluZShwb2x5ZmlsbCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKE51bWJlci5pc05hTiAmJiBOdW1iZXIuaXNOYU4oTmFOKSAmJiAhTnVtYmVyLmlzTmFOKCdhJykpIHtcblx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOO1xuXHR9XG5cdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG4vKiBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLmlzbmFuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbU51bWJlcklzTmFOKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRkZWZpbmUoTnVtYmVyLCB7IGlzTmFOOiBwb2x5ZmlsbCB9LCB7XG5cdFx0aXNOYU46IGZ1bmN0aW9uIHRlc3RJc05hTigpIHtcblx0XHRcdHJldHVybiBOdW1iZXIuaXNOYU4gIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbnZhciBhdmFpbGFibGVUeXBlZEFycmF5cyA9IHJlcXVpcmUoJ2F2YWlsYWJsZS10eXBlZC1hcnJheXMnKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG5cbnZhciBnID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogZ2xvYmFsVGhpcztcbnZhciB0eXBlZEFycmF5cyA9IGF2YWlsYWJsZVR5cGVkQXJyYXlzKCk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCb3VuZCgnQXJyYXkucHJvdG90eXBlLmluZGV4T2YnLCB0cnVlKSB8fCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn07XG52YXIgJHNsaWNlID0gY2FsbEJvdW5kKCdTdHJpbmcucHJvdG90eXBlLnNsaWNlJyk7XG52YXIgdG9TdHJUYWdzID0ge307XG52YXIgZ09QRCA9IHJlcXVpcmUoJ2VzLWFic3RyYWN0L2hlbHBlcnMvZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7IC8vIHJlcXVpcmUoJ2dldHByb3RvdHlwZW9mJyk7XG5pZiAoaGFzVG9TdHJpbmdUYWcgJiYgZ09QRCAmJiBnZXRQcm90b3R5cGVPZikge1xuXHRmb3JFYWNoKHR5cGVkQXJyYXlzLCBmdW5jdGlvbiAodHlwZWRBcnJheSkge1xuXHRcdHZhciBhcnIgPSBuZXcgZ1t0eXBlZEFycmF5XSgpO1xuXHRcdGlmIChTeW1ib2wudG9TdHJpbmdUYWcgaW4gYXJyKSB7XG5cdFx0XHR2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihhcnIpO1xuXHRcdFx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0aWYgKCFkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHZhciBzdXBlclByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuXHRcdFx0XHRkZXNjcmlwdG9yID0gZ09QRChzdXBlclByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0fVxuXHRcdFx0dG9TdHJUYWdzW3R5cGVkQXJyYXldID0gZGVzY3JpcHRvci5nZXQ7XG5cdFx0fVxuXHR9KTtcbn1cblxudmFyIHRyeVR5cGVkQXJyYXlzID0gZnVuY3Rpb24gdHJ5QWxsVHlwZWRBcnJheXModmFsdWUpIHtcblx0dmFyIGFueVRydWUgPSBmYWxzZTtcblx0Zm9yRWFjaCh0b1N0clRhZ3MsIGZ1bmN0aW9uIChnZXR0ZXIsIHR5cGVkQXJyYXkpIHtcblx0XHRpZiAoIWFueVRydWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGFueVRydWUgPSBnZXR0ZXIuY2FsbCh2YWx1ZSkgPT09IHR5cGVkQXJyYXk7XG5cdFx0XHR9IGNhdGNoIChlKSB7IC8qKi8gfVxuXHRcdH1cblx0fSk7XG5cdHJldHVybiBhbnlUcnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoIWhhc1RvU3RyaW5nVGFnIHx8ICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSkge1xuXHRcdHZhciB0YWcgPSAkc2xpY2UoJHRvU3RyaW5nKHZhbHVlKSwgOCwgLTEpO1xuXHRcdHJldHVybiAkaW5kZXhPZih0eXBlZEFycmF5cywgdGFnKSA+IC0xO1xuXHR9XG5cdGlmICghZ09QRCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIHRyeVR5cGVkQXJyYXlzKHZhbHVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBudW1iZXJJc05hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdGlmIChhID09PSAwICYmIGIgPT09IDApIHtcblx0XHRyZXR1cm4gMSAvIGEgPT09IDEgLyBiO1xuXHR9XG5cdGlmIChhID09PSBiKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJ2NhbGwtYmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBjYWxsQmluZChnZXRQb2x5ZmlsbCgpLCBPYmplY3QpO1xuXG5kZWZpbmUocG9seWZpbGwsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdHJldHVybiB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltT2JqZWN0SXMoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShPYmplY3QsIHsgaXM6IHBvbHlmaWxsIH0sIHtcblx0XHRpczogZnVuY3Rpb24gdGVzdE9iamVjdElzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5pcyAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXNTaGltO1xuaWYgKCFPYmplY3Qua2V5cykge1xuXHQvLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuXHR2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHR2YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0dmFyIGhhc0RvbnRFbnVtQnVnID0gIWlzRW51bWVyYWJsZS5jYWxsKHsgdG9TdHJpbmc6IG51bGwgfSwgJ3RvU3RyaW5nJyk7XG5cdHZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xuXHR2YXIgZG9udEVudW1zID0gW1xuXHRcdCd0b1N0cmluZycsXG5cdFx0J3RvTG9jYWxlU3RyaW5nJyxcblx0XHQndmFsdWVPZicsXG5cdFx0J2hhc093blByb3BlcnR5Jyxcblx0XHQnaXNQcm90b3R5cGVPZicsXG5cdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0XHQnY29uc3RydWN0b3InXG5cdF07XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xuXHR9O1xuXHR2YXIgZXhjbHVkZWRLZXlzID0ge1xuXHRcdCRhcHBsaWNhdGlvbkNhY2hlOiB0cnVlLFxuXHRcdCRjb25zb2xlOiB0cnVlLFxuXHRcdCRleHRlcm5hbDogdHJ1ZSxcblx0XHQkZnJhbWU6IHRydWUsXG5cdFx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0XHQkZnJhbWVzOiB0cnVlLFxuXHRcdCRpbm5lckhlaWdodDogdHJ1ZSxcblx0XHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuY2hhbmdlOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5lcnJvcjogdHJ1ZSxcblx0XHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdFx0JG91dGVyV2lkdGg6IHRydWUsXG5cdFx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0XHQkcGFyZW50OiB0cnVlLFxuXHRcdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHRcdCRzY3JvbGxUb3A6IHRydWUsXG5cdFx0JHNjcm9sbFg6IHRydWUsXG5cdFx0JHNjcm9sbFk6IHRydWUsXG5cdFx0JHNlbGY6IHRydWUsXG5cdFx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0XHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdFx0JHdpbmRvdzogdHJ1ZVxuXHR9O1xuXHR2YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIWV4Y2x1ZGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KCkpO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdFx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdFx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0XHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdFx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdFx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhlS2V5cztcblx0fTtcbn1cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG5cbnZhciBvcmlnS2V5cyA9IE9iamVjdC5rZXlzO1xudmFyIGtleXNTaGltID0gb3JpZ0tleXMgPyBmdW5jdGlvbiBrZXlzKG8pIHsgcmV0dXJuIG9yaWdLZXlzKG8pOyB9IDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHZhciBhcmdzID0gT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIEN1cnJlbnRseSBpbiBzeW5jIHdpdGggTm9kZS5qcyBsaWIvaW50ZXJuYWwvdXRpbC90eXBlcy5qc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2NvbW1pdC8xMTJjYzdjMjc1NTEyNTRhYTJiMTcwOThmYjc3NDg2N2YwNWVkMGQ5XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJndW1lbnRzT2JqZWN0ID0gcmVxdWlyZSgnaXMtYXJndW1lbnRzJyk7XG52YXIgaXNHZW5lcmF0b3JGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWdlbmVyYXRvci1mdW5jdGlvbicpO1xudmFyIHdoaWNoVHlwZWRBcnJheSA9IHJlcXVpcmUoJ3doaWNoLXR5cGVkLWFycmF5Jyk7XG52YXIgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnaXMtdHlwZWQtYXJyYXknKTtcblxuZnVuY3Rpb24gdW5jdXJyeVRoaXMoZikge1xuICByZXR1cm4gZi5jYWxsLmJpbmQoZik7XG59XG5cbnZhciBCaWdJbnRTdXBwb3J0ZWQgPSB0eXBlb2YgQmlnSW50ICE9PSAndW5kZWZpbmVkJztcbnZhciBTeW1ib2xTdXBwb3J0ZWQgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJztcblxudmFyIE9iamVjdFRvU3RyaW5nID0gdW5jdXJyeVRoaXMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyk7XG5cbnZhciBudW1iZXJWYWx1ZSA9IHVuY3VycnlUaGlzKE51bWJlci5wcm90b3R5cGUudmFsdWVPZik7XG52YXIgc3RyaW5nVmFsdWUgPSB1bmN1cnJ5VGhpcyhTdHJpbmcucHJvdG90eXBlLnZhbHVlT2YpO1xudmFyIGJvb2xlYW5WYWx1ZSA9IHVuY3VycnlUaGlzKEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YpO1xuXG5pZiAoQmlnSW50U3VwcG9ydGVkKSB7XG4gIHZhciBiaWdJbnRWYWx1ZSA9IHVuY3VycnlUaGlzKEJpZ0ludC5wcm90b3R5cGUudmFsdWVPZik7XG59XG5cbmlmIChTeW1ib2xTdXBwb3J0ZWQpIHtcbiAgdmFyIHN5bWJvbFZhbHVlID0gdW5jdXJyeVRoaXMoU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgcHJvdG90eXBlVmFsdWVPZikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIHByb3RvdHlwZVZhbHVlT2YodmFsdWUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0cy5pc0FyZ3VtZW50c09iamVjdCA9IGlzQXJndW1lbnRzT2JqZWN0O1xuZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gaXNHZW5lcmF0b3JGdW5jdGlvbjtcbmV4cG9ydHMuaXNUeXBlZEFycmF5ID0gaXNUeXBlZEFycmF5O1xuXG4vLyBUYWtlbiBmcm9tIGhlcmUgYW5kIG1vZGlmaWVkIGZvciBiZXR0ZXIgYnJvd3NlciBzdXBwb3J0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3AtaXMtcHJvbWlzZS9ibG9iL2NkYTM1YTUxM2JkYTAzZjk3N2FkNWNkZTNhMDc5ZDIzN2U4MmQ3ZWYvaW5kZXguanNcbmZ1bmN0aW9uIGlzUHJvbWlzZShpbnB1dCkge1xuXHRyZXR1cm4gKFxuXHRcdChcblx0XHRcdHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBQcm9taXNlXG5cdFx0KSB8fFxuXHRcdChcblx0XHRcdGlucHV0ICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgaW5wdXQudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dHlwZW9mIGlucHV0LmNhdGNoID09PSAnZnVuY3Rpb24nXG5cdFx0KVxuXHQpO1xufVxuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIEFycmF5QnVmZmVyLmlzVmlldykge1xuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBpc1R5cGVkQXJyYXkodmFsdWUpIHx8XG4gICAgaXNEYXRhVmlldyh2YWx1ZSlcbiAgKTtcbn1cbmV4cG9ydHMuaXNBcnJheUJ1ZmZlclZpZXcgPSBpc0FycmF5QnVmZmVyVmlldztcblxuXG5mdW5jdGlvbiBpc1VpbnQ4QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdVaW50OEFycmF5Jztcbn1cbmV4cG9ydHMuaXNVaW50OEFycmF5ID0gaXNVaW50OEFycmF5O1xuXG5mdW5jdGlvbiBpc1VpbnQ4Q2xhbXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnVWludDhDbGFtcGVkQXJyYXknO1xufVxuZXhwb3J0cy5pc1VpbnQ4Q2xhbXBlZEFycmF5ID0gaXNVaW50OENsYW1wZWRBcnJheTtcblxuZnVuY3Rpb24gaXNVaW50MTZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ1VpbnQxNkFycmF5Jztcbn1cbmV4cG9ydHMuaXNVaW50MTZBcnJheSA9IGlzVWludDE2QXJyYXk7XG5cbmZ1bmN0aW9uIGlzVWludDMyQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdVaW50MzJBcnJheSc7XG59XG5leHBvcnRzLmlzVWludDMyQXJyYXkgPSBpc1VpbnQzMkFycmF5O1xuXG5mdW5jdGlvbiBpc0ludDhBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0ludDhBcnJheSc7XG59XG5leHBvcnRzLmlzSW50OEFycmF5ID0gaXNJbnQ4QXJyYXk7XG5cbmZ1bmN0aW9uIGlzSW50MTZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0ludDE2QXJyYXknO1xufVxuZXhwb3J0cy5pc0ludDE2QXJyYXkgPSBpc0ludDE2QXJyYXk7XG5cbmZ1bmN0aW9uIGlzSW50MzJBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSA9PT0gJ0ludDMyQXJyYXknO1xufVxuZXhwb3J0cy5pc0ludDMyQXJyYXkgPSBpc0ludDMyQXJyYXk7XG5cbmZ1bmN0aW9uIGlzRmxvYXQzMkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnRmxvYXQzMkFycmF5Jztcbn1cbmV4cG9ydHMuaXNGbG9hdDMyQXJyYXkgPSBpc0Zsb2F0MzJBcnJheTtcblxuZnVuY3Rpb24gaXNGbG9hdDY0QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdGbG9hdDY0QXJyYXknO1xufVxuZXhwb3J0cy5pc0Zsb2F0NjRBcnJheSA9IGlzRmxvYXQ2NEFycmF5O1xuXG5mdW5jdGlvbiBpc0JpZ0ludDY0QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkgPT09ICdCaWdJbnQ2NEFycmF5Jztcbn1cbmV4cG9ydHMuaXNCaWdJbnQ2NEFycmF5ID0gaXNCaWdJbnQ2NEFycmF5O1xuXG5mdW5jdGlvbiBpc0JpZ1VpbnQ2NEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB3aGljaFR5cGVkQXJyYXkodmFsdWUpID09PSAnQmlnVWludDY0QXJyYXknO1xufVxuZXhwb3J0cy5pc0JpZ1VpbnQ2NEFycmF5ID0gaXNCaWdVaW50NjRBcnJheTtcblxuZnVuY3Rpb24gaXNNYXBUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBNYXBdJztcbn1cbmlzTWFwVG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgaXNNYXBUb1N0cmluZyhuZXcgTWFwKCkpXG4pO1xuXG5mdW5jdGlvbiBpc01hcCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIE1hcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNNYXBUb1N0cmluZy53b3JraW5nXG4gICAgPyBpc01hcFRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBNYXA7XG59XG5leHBvcnRzLmlzTWFwID0gaXNNYXA7XG5cbmZ1bmN0aW9uIGlzU2V0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU2V0XSc7XG59XG5pc1NldFRvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzU2V0VG9TdHJpbmcobmV3IFNldCgpKVxuKTtcbmZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1NldFRvU3RyaW5nLndvcmtpbmdcbiAgICA/IGlzU2V0VG9TdHJpbmcodmFsdWUpXG4gICAgOiB2YWx1ZSBpbnN0YW5jZW9mIFNldDtcbn1cbmV4cG9ydHMuaXNTZXQgPSBpc1NldDtcblxuZnVuY3Rpb24gaXNXZWFrTWFwVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgV2Vha01hcF0nO1xufVxuaXNXZWFrTWFwVG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzV2Vha01hcFRvU3RyaW5nKG5ldyBXZWFrTWFwKCkpXG4pO1xuZnVuY3Rpb24gaXNXZWFrTWFwKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNXZWFrTWFwVG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNXZWFrTWFwVG9TdHJpbmcodmFsdWUpXG4gICAgOiB2YWx1ZSBpbnN0YW5jZW9mIFdlYWtNYXA7XG59XG5leHBvcnRzLmlzV2Vha01hcCA9IGlzV2Vha01hcDtcblxuZnVuY3Rpb24gaXNXZWFrU2V0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgV2Vha1NldF0nO1xufVxuaXNXZWFrU2V0VG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIFdlYWtTZXQgIT09ICd1bmRlZmluZWQnICYmXG4gIGlzV2Vha1NldFRvU3RyaW5nKG5ldyBXZWFrU2V0KCkpXG4pO1xuZnVuY3Rpb24gaXNXZWFrU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc1dlYWtTZXRUb1N0cmluZyh2YWx1ZSk7XG59XG5leHBvcnRzLmlzV2Vha1NldCA9IGlzV2Vha1NldDtcblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5pc0FycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZyA9IChcbiAgdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc0FycmF5QnVmZmVyVG9TdHJpbmcobmV3IEFycmF5QnVmZmVyKCkpXG4pO1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc0FycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNBcnJheUJ1ZmZlclRvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn1cbmV4cG9ydHMuaXNBcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXI7XG5cbmZ1bmN0aW9uIGlzRGF0YVZpZXdUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBEYXRhVmlld10nO1xufVxuaXNEYXRhVmlld1RvU3RyaW5nLndvcmtpbmcgPSAoXG4gIHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIERhdGFWaWV3ICE9PSAndW5kZWZpbmVkJyAmJlxuICBpc0RhdGFWaWV3VG9TdHJpbmcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSwgMCwgMSkpXG4pO1xuZnVuY3Rpb24gaXNEYXRhVmlldyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc0RhdGFWaWV3VG9TdHJpbmcud29ya2luZ1xuICAgID8gaXNEYXRhVmlld1RvU3RyaW5nKHZhbHVlKVxuICAgIDogdmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldztcbn1cbmV4cG9ydHMuaXNEYXRhVmlldyA9IGlzRGF0YVZpZXc7XG5cbi8vIFN0b3JlIGEgY29weSBvZiBTaGFyZWRBcnJheUJ1ZmZlciBpbiBjYXNlIGl0J3MgZGVsZXRlZCBlbHNld2hlcmVcbnZhciBTaGFyZWRBcnJheUJ1ZmZlckNvcHkgPSB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnID8gU2hhcmVkQXJyYXlCdWZmZXIgOiB1bmRlZmluZWQ7XG5mdW5jdGlvbiBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU2hhcmVkQXJyYXlCdWZmZXJdJztcbn1cbmZ1bmN0aW9uIGlzU2hhcmVkQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlckNvcHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcud29ya2luZyA9IGlzU2hhcmVkQXJyYXlCdWZmZXJUb1N0cmluZyhuZXcgU2hhcmVkQXJyYXlCdWZmZXJDb3B5KCkpO1xuICB9XG5cbiAgcmV0dXJuIGlzU2hhcmVkQXJyYXlCdWZmZXJUb1N0cmluZy53b3JraW5nXG4gICAgPyBpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmcodmFsdWUpXG4gICAgOiB2YWx1ZSBpbnN0YW5jZW9mIFNoYXJlZEFycmF5QnVmZmVyQ29weTtcbn1cbmV4cG9ydHMuaXNTaGFyZWRBcnJheUJ1ZmZlciA9IGlzU2hhcmVkQXJyYXlCdWZmZXI7XG5cbmZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG59XG5leHBvcnRzLmlzQXN5bmNGdW5jdGlvbiA9IGlzQXN5bmNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNNYXBJdGVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBNYXAgSXRlcmF0b3JdJztcbn1cbmV4cG9ydHMuaXNNYXBJdGVyYXRvciA9IGlzTWFwSXRlcmF0b3I7XG5cbmZ1bmN0aW9uIGlzU2V0SXRlcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdFRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgU2V0IEl0ZXJhdG9yXSc7XG59XG5leHBvcnRzLmlzU2V0SXRlcmF0b3IgPSBpc1NldEl0ZXJhdG9yO1xuXG5mdW5jdGlvbiBpc0dlbmVyYXRvck9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0VG9TdHJpbmcodmFsdWUpID09PSAnW29iamVjdCBHZW5lcmF0b3JdJztcbn1cbmV4cG9ydHMuaXNHZW5lcmF0b3JPYmplY3QgPSBpc0dlbmVyYXRvck9iamVjdDtcblxuZnVuY3Rpb24gaXNXZWJBc3NlbWJseUNvbXBpbGVkTW9kdWxlKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3RUb1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IFdlYkFzc2VtYmx5Lk1vZHVsZV0nO1xufVxuZXhwb3J0cy5pc1dlYkFzc2VtYmx5Q29tcGlsZWRNb2R1bGUgPSBpc1dlYkFzc2VtYmx5Q29tcGlsZWRNb2R1bGU7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBudW1iZXJWYWx1ZSk7XG59XG5leHBvcnRzLmlzTnVtYmVyT2JqZWN0ID0gaXNOdW1iZXJPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBzdHJpbmdWYWx1ZSk7XG59XG5leHBvcnRzLmlzU3RyaW5nT2JqZWN0ID0gaXNTdHJpbmdPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY2hlY2tCb3hlZFByaW1pdGl2ZSh2YWx1ZSwgYm9vbGVhblZhbHVlKTtcbn1cbmV4cG9ydHMuaXNCb29sZWFuT2JqZWN0ID0gaXNCb29sZWFuT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0JpZ0ludE9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gQmlnSW50U3VwcG9ydGVkICYmIGNoZWNrQm94ZWRQcmltaXRpdmUodmFsdWUsIGJpZ0ludFZhbHVlKTtcbn1cbmV4cG9ydHMuaXNCaWdJbnRPYmplY3QgPSBpc0JpZ0ludE9iamVjdDtcblxuZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIFN5bWJvbFN1cHBvcnRlZCAmJiBjaGVja0JveGVkUHJpbWl0aXZlKHZhbHVlLCBzeW1ib2xWYWx1ZSk7XG59XG5leHBvcnRzLmlzU3ltYm9sT2JqZWN0ID0gaXNTeW1ib2xPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzQm94ZWRQcmltaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICBpc051bWJlck9iamVjdCh2YWx1ZSkgfHxcbiAgICBpc1N0cmluZ09iamVjdCh2YWx1ZSkgfHxcbiAgICBpc0Jvb2xlYW5PYmplY3QodmFsdWUpIHx8XG4gICAgaXNCaWdJbnRPYmplY3QodmFsdWUpIHx8XG4gICAgaXNTeW1ib2xPYmplY3QodmFsdWUpXG4gICk7XG59XG5leHBvcnRzLmlzQm94ZWRQcmltaXRpdmUgPSBpc0JveGVkUHJpbWl0aXZlO1xuXG5mdW5jdGlvbiBpc0FueUFycmF5QnVmZmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuICAgIGlzQXJyYXlCdWZmZXIodmFsdWUpIHx8XG4gICAgaXNTaGFyZWRBcnJheUJ1ZmZlcih2YWx1ZSlcbiAgKTtcbn1cbmV4cG9ydHMuaXNBbnlBcnJheUJ1ZmZlciA9IGlzQW55QXJyYXlCdWZmZXI7XG5cblsnaXNQcm94eScsICdpc0V4dGVybmFsJywgJ2lzTW9kdWxlTmFtZXNwYWNlT2JqZWN0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG1ldGhvZCwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXRob2QgKyAnIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdXNlcmxhbmQnKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52UmVnZXggPSAvXiQvO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykge1xuICB2YXIgZGVidWdFbnYgPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHO1xuICBkZWJ1Z0VudiA9IGRlYnVnRW52LnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrPy5dL2csICdcXFxcJCYnKVxuICAgIC5yZXBsYWNlKC9cXCovZywgJy4qJylcbiAgICAucmVwbGFjZSgvLC9nLCAnJHxeJylcbiAgICAudG9VcHBlckNhc2UoKTtcbiAgZGVidWdFbnZSZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgZGVidWdFbnYgKyAnJCcsICdpJyk7XG59XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKGRlYnVnRW52UmVnZXgudGVzdChzZXQpKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmV4cG9ydHMudHlwZXMgPSByZXF1aXJlKCcuL3N1cHBvcnQvdHlwZXMnKTtcblxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcbmV4cG9ydHMudHlwZXMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5leHBvcnRzLnR5cGVzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuZXhwb3J0cy50eXBlcy5pc05hdGl2ZUVycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLmJpbmQobnVsbCwgbnVsbCwgcmV0KSkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZC5iaW5kKG51bGwsIHJlaiwgY2IpKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xudmFyIGF2YWlsYWJsZVR5cGVkQXJyYXlzID0gcmVxdWlyZSgnYXZhaWxhYmxlLXR5cGVkLWFycmF5cycpO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcblxudmFyICR0b1N0cmluZyA9IGNhbGxCb3VuZCgnT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZycpO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcblxudmFyIGcgPSB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiBnbG9iYWxUaGlzO1xudmFyIHR5cGVkQXJyYXlzID0gYXZhaWxhYmxlVHlwZWRBcnJheXMoKTtcblxudmFyICRzbGljZSA9IGNhbGxCb3VuZCgnU3RyaW5nLnByb3RvdHlwZS5zbGljZScpO1xudmFyIHRvU3RyVGFncyA9IHt9O1xudmFyIGdPUEQgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9oZWxwZXJzL2dldE93blByb3BlcnR5RGVzY3JpcHRvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mOyAvLyByZXF1aXJlKCdnZXRwcm90b3R5cGVvZicpO1xuaWYgKGhhc1RvU3RyaW5nVGFnICYmIGdPUEQgJiYgZ2V0UHJvdG90eXBlT2YpIHtcblx0Zm9yRWFjaCh0eXBlZEFycmF5cywgZnVuY3Rpb24gKHR5cGVkQXJyYXkpIHtcblx0XHRpZiAodHlwZW9mIGdbdHlwZWRBcnJheV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHZhciBhcnIgPSBuZXcgZ1t0eXBlZEFycmF5XSgpO1xuXHRcdFx0aWYgKFN5bWJvbC50b1N0cmluZ1RhZyBpbiBhcnIpIHtcblx0XHRcdFx0dmFyIHByb3RvID0gZ2V0UHJvdG90eXBlT2YoYXJyKTtcblx0XHRcdFx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0XHRpZiAoIWRlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHR2YXIgc3VwZXJQcm90byA9IGdldFByb3RvdHlwZU9mKHByb3RvKTtcblx0XHRcdFx0XHRkZXNjcmlwdG9yID0gZ09QRChzdXBlclByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRvU3RyVGFnc1t0eXBlZEFycmF5XSA9IGRlc2NyaXB0b3IuZ2V0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbnZhciB0cnlUeXBlZEFycmF5cyA9IGZ1bmN0aW9uIHRyeUFsbFR5cGVkQXJyYXlzKHZhbHVlKSB7XG5cdHZhciBmb3VuZE5hbWUgPSBmYWxzZTtcblx0Zm9yRWFjaCh0b1N0clRhZ3MsIGZ1bmN0aW9uIChnZXR0ZXIsIHR5cGVkQXJyYXkpIHtcblx0XHRpZiAoIWZvdW5kTmFtZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIG5hbWUgPSBnZXR0ZXIuY2FsbCh2YWx1ZSk7XG5cdFx0XHRcdGlmIChuYW1lID09PSB0eXBlZEFycmF5KSB7XG5cdFx0XHRcdFx0Zm91bmROYW1lID0gbmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZm91bmROYW1lO1xufTtcblxudmFyIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJ2lzLXR5cGVkLWFycmF5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hpY2hUeXBlZEFycmF5KHZhbHVlKSB7XG5cdGlmICghaXNUeXBlZEFycmF5KHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZyB8fCAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWx1ZSkpIHsgcmV0dXJuICRzbGljZSgkdG9TdHJpbmcodmFsdWUpLCA4LCAtMSk7IH1cblx0cmV0dXJuIHRyeVR5cGVkQXJyYXlzKHZhbHVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwb3NzaWJsZU5hbWVzID0gW1xuXHQnQmlnSW50NjRBcnJheScsXG5cdCdCaWdVaW50NjRBcnJheScsXG5cdCdGbG9hdDMyQXJyYXknLFxuXHQnRmxvYXQ2NEFycmF5Jyxcblx0J0ludDE2QXJyYXknLFxuXHQnSW50MzJBcnJheScsXG5cdCdJbnQ4QXJyYXknLFxuXHQnVWludDE2QXJyYXknLFxuXHQnVWludDMyQXJyYXknLFxuXHQnVWludDhBcnJheScsXG5cdCdVaW50OENsYW1wZWRBcnJheSdcbl07XG5cbnZhciBnID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogZ2xvYmFsVGhpcztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhdmFpbGFibGVUeXBlZEFycmF5cygpIHtcblx0dmFyIG91dCA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBvc3NpYmxlTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGdbcG9zc2libGVOYW1lc1tpXV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdG91dFtvdXQubGVuZ3RoXSA9IHBvc3NpYmxlTmFtZXNbaV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvdXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGdPUEQgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJScsIHRydWUpO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoW10sICdsZW5ndGgnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGdPUERcblx0XHQkZ09QRCA9IG51bGw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAkZ09QRDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyJztcblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gUmVhY3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvZm9ybWF0UHJvZEVycm9yTWVzc2FnZS5qc1xuICpcbiAqIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIHRocm93IGVycm9yIGNhbGxzLiBUaGVzZSBtZXNzYWdlcyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggZXJyb3IgY29kZXNcbiAqIGR1cmluZyBidWlsZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICByZXR1cm4gXCJNaW5pZmllZCBSZWR1eCBlcnJvciAjXCIgKyBjb2RlICsgXCI7IHZpc2l0IGh0dHBzOi8vcmVkdXguanMub3JnL0Vycm9ycz9jb2RlPVwiICsgY29kZSArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuICc7XG59XG5cbi8vIElubGluZWQgdmVyc2lvbiBvZiB0aGUgYHN5bWJvbC1vYnNlcnZhYmxlYCBwb2x5ZmlsbFxudmFyICQkb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnO1xufSkoKTtcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8vIElubGluZWQgLyBzaG9ydGVuZWQgdmVyc2lvbiBvZiBga2luZE9mYCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2tpbmQtb2ZcbmZ1bmN0aW9uIG1pbmlLaW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICB2YXIgY29uc3RydWN0b3JOYW1lID0gY3Rvck5hbWUodmFsKTtcblxuICBzd2l0Y2ggKGNvbnN0cnVjdG9yTmFtZSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6XG4gICAgY2FzZSAnUHJvbWlzZSc6XG4gICAgY2FzZSAnV2Vha01hcCc6XG4gICAgY2FzZSAnV2Vha1NldCc6XG4gICAgY2FzZSAnTWFwJzpcbiAgICBjYXNlICdTZXQnOlxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgfSAvLyBvdGhlclxuXG5cbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn1cblxuZnVuY3Rpb24gY3Rvck5hbWUodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nID8gdmFsLmNvbnN0cnVjdG9yLm5hbWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIHZhbC5tZXNzYWdlID09PSAnc3RyaW5nJyAmJiB2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5zdGFja1RyYWNlTGltaXQgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgdmFyIHR5cGVPZlZhbCA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0eXBlT2ZWYWwgPSBtaW5pS2luZE9mKHZhbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZU9mVmFsO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogKipXZSByZWNvbW1lbmQgdXNpbmcgdGhlIGBjb25maWd1cmVTdG9yZWAgbWV0aG9kXG4gKiBvZiB0aGUgYEByZWR1eGpzL3Rvb2xraXRgIHBhY2thZ2UqKiwgd2hpY2ggcmVwbGFjZXMgYGNyZWF0ZVN0b3JlYC5cbiAqXG4gKiBSZWR1eCBUb29sa2l0IGlzIG91ciByZWNvbW1lbmRlZCBhcHByb2FjaCBmb3Igd3JpdGluZyBSZWR1eCBsb2dpYyB0b2RheSxcbiAqIGluY2x1ZGluZyBzdG9yZSBzZXR1cCwgcmVkdWNlcnMsIGRhdGEgZmV0Y2hpbmcsIGFuZCBtb3JlLlxuICpcbiAqICoqRm9yIG1vcmUgZGV0YWlscywgcGxlYXNlIHJlYWQgdGhpcyBSZWR1eCBkb2NzIHBhZ2U6KipcbiAqICoqaHR0cHM6Ly9yZWR1eC5qcy5vcmcvaW50cm9kdWN0aW9uL3doeS1ydGstaXMtcmVkdXgtdG9kYXkqKlxuICpcbiAqIGBjb25maWd1cmVTdG9yZWAgZnJvbSBSZWR1eCBUb29sa2l0IGlzIGFuIGltcHJvdmVkIHZlcnNpb24gb2YgYGNyZWF0ZVN0b3JlYCB0aGF0XG4gKiBzaW1wbGlmaWVzIHNldHVwIGFuZCBoZWxwcyBhdm9pZCBjb21tb24gYnVncy5cbiAqXG4gKiBZb3Ugc2hvdWxkIG5vdCBiZSB1c2luZyB0aGUgYHJlZHV4YCBjb3JlIHBhY2thZ2UgYnkgaXRzZWxmIHRvZGF5LCBleGNlcHQgZm9yIGxlYXJuaW5nIHB1cnBvc2VzLlxuICogVGhlIGBjcmVhdGVTdG9yZWAgbWV0aG9kIGZyb20gdGhlIGNvcmUgYHJlZHV4YCBwYWNrYWdlIHdpbGwgbm90IGJlIHJlbW92ZWQsIGJ1dCB3ZSBlbmNvdXJhZ2VcbiAqIGFsbCB1c2VycyB0byBtaWdyYXRlIHRvIHVzaW5nIFJlZHV4IFRvb2xraXQgZm9yIGFsbCBSZWR1eCBjb2RlLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBgY3JlYXRlU3RvcmVgIHdpdGhvdXQgdGhpcyB2aXN1YWwgZGVwcmVjYXRpb24gd2FybmluZywgdXNlXG4gKiB0aGUgYGxlZ2FjeV9jcmVhdGVTdG9yZWAgaW1wb3J0IGluc3RlYWQ6XG4gKlxuICogYGltcG9ydCB7IGxlZ2FjeV9jcmVhdGVTdG9yZSBhcyBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnYFxuICpcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiAnSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogXCJFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihlbmhhbmNlcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyKSA6IFwiRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKHJlZHVjZXIpICsgXCInXCIpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzKSA6ICdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDQpIDogXCJFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihsaXN0ZW5lcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiAnWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBcIkFjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnXCIgKyBraW5kT2YoYWN0aW9uKSArIFwiJy4gWW91IG1heSBuZWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRvIHlvdXIgc3RvcmUgc2V0dXAgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIG90aGVyIHZhbHVlcywgc3VjaCBhcyAncmVkdXgtdGh1bmsnIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBmdW5jdGlvbnMuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNtaWRkbGV3YXJlIGFuZCBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNi1hc3luYy1sb2dpYyN1c2luZy10aGUtcmVkdXgtdGh1bmstbWlkZGxld2FyZSBmb3IgZXhhbXBsZXMuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOSkgOiAnUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEwKSA6IFwiRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobmV4dFJlZHVjZXIpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTEpIDogXCJFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKG9ic2VydmVyKSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIGBjb25maWd1cmVTdG9yZWAgZnJvbSB0aGVcbiAqIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWA6XG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxudmFyIGxlZ2FjeV9jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyBraW5kT2YoaW5wdXRTdGF0ZSkgKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMikgOiBcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSAnXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCInIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZyhcIk5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7IC8vIFRoaXMgaXMgdXNlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Qgd2FybiBhYm91dCB0aGUgc2FtZVxuICAvLyBrZXlzIG11bHRpcGxlIHRpbWVzLlxuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yO1xuXG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG5cbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IFwiV2hlbiBjYWxsZWQgd2l0aCBhbiBhY3Rpb24gb2YgdHlwZSBcIiArIChhY3Rpb25UeXBlID8gXCJcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiA6ICcodW5rbm93biB0eXBlKScpICsgXCIsIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsgX2tleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgYnV0IGluc3RlYWQgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihhY3Rpb25DcmVhdG9ycykgKyBcIicuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTUpIDogJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0b3JlKSwge30sIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuXG5mdW5jdGlvbiBleHRlbnNpb25Db21wb3NlU3R1YigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgaWYgKF90eXBlb2YoZnVuY3NbMF0pID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG4gIHJldHVybiBjb21wb3NlLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KGZ1bmNzKSk7XG59XG5cbmV4cG9ydCB2YXIgY29tcG9zZVdpdGhEZXZUb29scyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogZXh0ZW5zaW9uQ29tcG9zZVN0dWI7XG5leHBvcnQgdmFyIGRldlRvb2xzRW5oYW5jZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vb3ApIHtcbiAgICByZXR1cm4gbm9vcDtcbiAgfTtcbn07XG5leHBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIGFzIGNvbXBvc2VXaXRoRGV2VG9vbHNEZXZlbG9wbWVudE9ubHksIGRldlRvb2xzRW5oYW5jZXIgYXMgZGV2VG9vbHNFbmhhbmNlckRldmVsb3BtZW50T25seSB9IGZyb20gJy4vZGV2ZWxvcG1lbnRPbmx5JztcbmV4cG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgYXMgY29tcG9zZVdpdGhEZXZUb29sc0xvZ09ubHksIGRldlRvb2xzRW5oYW5jZXIgYXMgZGV2VG9vbHNFbmhhbmNlckxvZ09ubHkgfSBmcm9tICcuL2xvZ09ubHknO1xuZXhwb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyBhcyBjb21wb3NlV2l0aERldlRvb2xzTG9nT25seUluUHJvZHVjdGlvbiwgZGV2VG9vbHNFbmhhbmNlciBhcyBkZXZUb29sc0VuaGFuY2VyTG9nT25seUluUHJvZHVjdGlvbiB9IGZyb20gJy4vbG9nT25seUluUHJvZHVjdGlvbic7IiwiXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdAcmVkdXgtZGV2dG9vbHMvZXh0ZW5zaW9uJztcblxuLy8gUmVkdXggRGVmYXVsdCBTdGF0ZXNcblxuY29uc3QgZGVmYXVsdENhclN0YXRlID0ge1xuICBpc0Nhck9wZW5TdGF0ZTogZmFsc2UsXG4gIGFyZUNhcldpbmRvd3NPcGVuU3RhdGU6IGZhbHNlLFxuICBjb250cm9sTXVzaWNWb2x1bWVTdGF0ZTogMFxufTtcblxuY29uc3Qgdmlld1N0YXRlT3B0aW9ucyA9IFsnd2VsY29tZScsICdsb2NrcycsICdzb3VuZCddXG5jb25zdCBkZWZhdWx0Vmlld1N0YXRlID0gJ3dlbGNvbWUnO1xuXG4vLyBEaXNwYXRjaCBBY3Rpb25zIHRvIFN0b3Jlc1xuXG4vLyBAdHMtaWdub3JlXG53aW5kb3cubmF2Q2xpY2tIYW5kbGVyID0gKGV2ZW50OmFueSkgPT4ge1xuICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdTRVRfVklFVycsIHBheWxvYWQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYXYgfSk7ICBcbn07XG5cbi8vIEB0cy1pZ25vcmVcbndpbmRvdy53aW5kb3dDbGlja0hhbmRsZXIgPSAoZXZlbnQ6YW55KSA9PiB7XG4gIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9XSU5ET1dTJyB9KTsgIFxufTtcblxuLy8gQHRzLWlnbm9yZVxud2luZG93LmxvY2tDbGlja0hhbmRsZXIgPSAoZXZlbnQ6YW55KSA9PiB7XG4gIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9MT0NLJyB9KTsgIFxufTtcblxuLy8gQHRzLWlnbm9yZVxud2luZG93LnZvbENsaWNrSGFuZGxlciA9IChldmVudDphbnkpID0+IHtcbiAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnU0VUX01VU0lDX1ZPVU1FJywgcGF5bG9hZDogZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZvbCB9KTtcbn07XG5cbi8vIFZpZXcgQ29udHJvbGxlcnMgXG5cbmNvbnN0IHZpZXdDb250cm9sbGVyID0gKHZpZXdUeXBlOnN0cmluZykgPT4ge1xuICB2aWV3U3RhdGVPcHRpb25zLmZvckVhY2goKCBpdGVtOmFueSApID0+IHtcbiAgICBpZih2aWV3VHlwZSA9PT0gaXRlbSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBtdXNpY1ZvbHVtZUNvbnRyb2xsZXIgPSAodm9sOm51bWJlcikgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbE11c2ljVm9sdW1lU3RhdGUnKS5pbm5lckhUTUwgPSB2b2wudG9TdHJpbmcoKTtcbn1cblxuY29uc3QgY2FyTG9ja0NvbnRyb2xsZXIgPSAoc3RhdGU6Ym9vbGVhbikgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNDYXJPcGVuU3RhdGUnKS5pbm5lckhUTUwgPSBzdGF0ZSA/ICdvcGVuJyA6ICdjbG9zZWQnO1xufVxuXG5jb25zdCB3aW5kb3dzT3BlbkNvbnRyb2xsZXIgPSAoc3RhdGU6Ym9vbGVhbikgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJlQ2FyV2luZG93c09wZW5TdGF0ZScpLmlubmVySFRNTCA9IHN0YXRlID8gJ29wZW4nIDogJ2Nsb3NlZCc7XG59XG5cbi8vIFJlZHV4IFJlZHVjZXJzIChTdGF0ZSBIYW5kbGVycylcblxuZnVuY3Rpb24gdmlld1JlZHVjZXIoc3RhdGUgPSBkZWZhdWx0Vmlld1N0YXRlLCBhY3Rpb246YW55KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfVklFVyc6XG4gICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgdmlld0NvbnRyb2xsZXIoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBJbml0XG4gICAgICB2aWV3Q29udHJvbGxlcihzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FyUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRDYXJTdGF0ZSwgYWN0aW9uOmFueSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVE9HR0xFX0xPQ0snOlxuICAgICAgc3RhdGUuaXNDYXJPcGVuU3RhdGUgPSAhc3RhdGUuaXNDYXJPcGVuU3RhdGU7XG4gICAgICBjYXJMb2NrQ29udHJvbGxlcihzdGF0ZS5pc0Nhck9wZW5TdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgY2FzZSAnVE9HR0xFX1dJTkRPV1MnOlxuICAgICAgc3RhdGUuYXJlQ2FyV2luZG93c09wZW5TdGF0ZSA9ICFzdGF0ZS5hcmVDYXJXaW5kb3dzT3BlblN0YXRlO1xuICAgICAgd2luZG93c09wZW5Db250cm9sbGVyKHN0YXRlLmFyZUNhcldpbmRvd3NPcGVuU3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgJ1NFVF9NVVNJQ19WT1VNRSc6XG4gICAgICBpZihhY3Rpb24ucGF5bG9hZCA9PSAnMScpIHtcbiAgICAgICAgc3RhdGUuY29udHJvbE11c2ljVm9sdW1lU3RhdGUrKztcbiAgICAgIH0gZWxzZSBpZihcbiAgICAgICAgc3RhdGUuY29udHJvbE11c2ljVm9sdW1lU3RhdGUgPiAwICYmIFxuICAgICAgICBhY3Rpb24ucGF5bG9hZCA9PSAnLTEnXG4gICAgICApIHtcbiAgICAgICAgc3RhdGUuY29udHJvbE11c2ljVm9sdW1lU3RhdGUtLTtcbiAgICAgIH1cbiAgICAgIG11c2ljVm9sdW1lQ29udHJvbGxlcihzdGF0ZS5jb250cm9sTXVzaWNWb2x1bWVTdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEluaXRcbiAgICAgIGNhckxvY2tDb250cm9sbGVyKHN0YXRlLmlzQ2FyT3BlblN0YXRlKTtcbiAgICAgIHdpbmRvd3NPcGVuQ29udHJvbGxlcihzdGF0ZS5hcmVDYXJXaW5kb3dzT3BlblN0YXRlKTtcbiAgICAgIG11c2ljVm9sdW1lQ29udHJvbGxlcihzdGF0ZS5jb250cm9sTXVzaWNWb2x1bWVTdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gTG9nIENoYW5nZXNcblxuZnVuY3Rpb24gbG9nZ2VyKHsgZ2V0U3RhdGUgfTogYW55KSB7XG4gIHJldHVybiAobmV4dDogYW55KSA9PiAoYWN0aW9uOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnd2lsbCBkaXNwYXRjaCcsIGFjdGlvbik7XG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuZXh0KGFjdGlvbik7XG4gICAgY29uc29sZS5sb2coJ3N0YXRlIGFmdGVyIGRpc3BhdGNoJywgZ2V0U3RhdGUoKSk7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9XG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHsgXG4gIHZpZXdSZWR1Y2VyLCBcbiAgY2FyUmVkdWNlciwgXG4gIC8vIGxhc3RBY3Rpb25cbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgY29tcG9zZVdpdGhEZXZUb29scyhcbiAgICBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKVxuICApXG4pO1xuXG4vLyBUbyBsaXN0ZW4gdG8gLyBtYW5hZ2UgZXZlbnRzXG4vLyBjb25zdCBsYXN0QWN0aW9uID0gKHN0YXRlOmFueSwgYWN0aW9uOmFueSkgPT4geyByZXR1cm4gYWN0aW9uIH07XG4vLyBjb25zdCB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkubGFzdEFjdGlvbikgfSk7Il0sIm5hbWVzIjpbIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX3JlcXVpcmUkY29kZXMiLCJjb2RlcyIsIkVSUl9BTUJJR1VPVVNfQVJHVU1FTlQiLCJFUlJfSU5WQUxJRF9BUkdfVFlQRSIsIkVSUl9JTlZBTElEX0FSR19WQUxVRSIsIkVSUl9JTlZBTElEX1JFVFVSTl9WQUxVRSIsIkVSUl9NSVNTSU5HX0FSR1MiLCJBc3NlcnRpb25FcnJvciIsImluc3BlY3QiLCJfcmVxdWlyZSR0eXBlcyIsImlzUHJvbWlzZSIsImlzUmVnRXhwIiwib2JqZWN0QXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwib2JqZWN0SXMiLCJpcyIsIk1hcCIsImlzRGVlcEVxdWFsIiwiaXNEZWVwU3RyaWN0RXF1YWwiLCJsYXp5TG9hZENvbXBhcmlzb24iLCJjb21wYXJpc29uIiwid2FybmVkIiwiYXNzZXJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm9rIiwiTk9fRVhDRVBUSU9OX1NFTlRJTkVMIiwiaW5uZXJGYWlsIiwibWVzc2FnZSIsIkVycm9yIiwiaW5uZXJPayIsImZuIiwiYXJnTGVuIiwidmFsdWUiLCJnZW5lcmF0ZWRNZXNzYWdlIiwiZXJyIiwiYWN0dWFsIiwiZXhwZWN0ZWQiLCJvcGVyYXRvciIsInN0YWNrU3RhcnRGbiIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJjb25jYXQiLCJmYWlsIiwiYXJnc0xlbiIsImludGVybmFsTWVzc2FnZSIsInVuZGVmaW5lZCIsIndhcm4iLCJwcm9jZXNzIiwiZW1pdFdhcm5pbmciLCJjb25zb2xlIiwiYmluZCIsImVyckFyZ3MiLCJlcXVhbCIsIm5vdEVxdWFsIiwiZGVlcEVxdWFsIiwibm90RGVlcEVxdWFsIiwiZGVlcFN0cmljdEVxdWFsIiwibm90RGVlcFN0cmljdEVxdWFsIiwic3RyaWN0RXF1YWwiLCJub3RTdHJpY3RFcXVhbCIsIkNvbXBhcmlzb24iLCJrZXlzIiwiX3RoaXMiLCJ0aGlzIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9jbGFzc0NhbGxDaGVjayIsImZvckVhY2giLCJrZXkiLCJ0ZXN0IiwiY29tcGFyZUV4Y2VwdGlvbktleSIsImEiLCJiIiwibmFtZSIsImV4cGVjdGVkRXhjZXB0aW9uIiwibXNnIiwicHVzaCIsImlzUHJvdG90eXBlT2YiLCJjYWxsIiwiZ2V0QWN0dWFsIiwiZSIsImNoZWNrSXNQcm9taXNlIiwidGhlbiIsImNhdGNoIiwid2FpdEZvckFjdHVhbCIsInByb21pc2VGbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzdWx0UHJvbWlzZSIsImV4cGVjdHNFcnJvciIsImVycm9yIiwiZGV0YWlscyIsImZuVHlwZSIsImV4cGVjdHNOb0Vycm9yIiwic3RyaWN0IiwiX2xlbjYiLCJfa2V5NiIsInRocm93cyIsIl9sZW4yIiwiX2tleTIiLCJyZWplY3RzIiwiX2xlbjMiLCJfa2V5MyIsInJlc3VsdCIsImRvZXNOb3RUaHJvdyIsIl9sZW40IiwiX2tleTQiLCJkb2VzTm90UmVqZWN0IiwiX2xlbjUiLCJfa2V5NSIsImlmRXJyb3IiLCJuZXdFcnIiLCJvcmlnU3RhY2siLCJzdGFjayIsInRtcDIiLCJzcGxpdCIsInNoaWZ0IiwidG1wMSIsImkiLCJwb3MiLCJpbmRleE9mIiwic2xpY2UiLCJqb2luIiwiX2RlZmluZVByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIl93cmFwTmF0aXZlU3VwZXIiLCJDbGFzcyIsIl9jYWNoZSIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJfaXNOYXRpdmVGdW5jdGlvbiIsImhhcyIsImdldCIsInNldCIsIldyYXBwZXIiLCJfY29uc3RydWN0IiwiX2dldFByb3RvdHlwZU9mIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkRhdGUiLCJQYXJlbnQiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZ2V0UHJvdG90eXBlT2YiLCJlbmRzV2l0aCIsInN0ciIsInNlYXJjaCIsInRoaXNfbGVuIiwic3Vic3RyaW5nIiwiYmx1ZSIsImdyZWVuIiwicmVkIiwid2hpdGUiLCJrUmVhZGFibGVPcGVyYXRvciIsInN0cmljdEVxdWFsT2JqZWN0Iiwibm90U3RyaWN0RXF1YWxPYmplY3QiLCJub3RJZGVudGljYWwiLCJjb3B5RXJyb3IiLCJzb3VyY2UiLCJpbnNwZWN0VmFsdWUiLCJ2YWwiLCJjb21wYWN0IiwiY3VzdG9tSW5zcGVjdCIsImRlcHRoIiwibWF4QXJyYXlMZW5ndGgiLCJJbmZpbml0eSIsInNob3dIaWRkZW4iLCJicmVha0xlbmd0aCIsInNob3dQcm94eSIsInNvcnRlZCIsImdldHRlcnMiLCJjcmVhdGVFcnJEaWZmIiwib3RoZXIiLCJyZXMiLCJsYXN0UG9zIiwiZW5kIiwic2tpcHBlZCIsImFjdHVhbEluc3BlY3RlZCIsImFjdHVhbExpbmVzIiwiZXhwZWN0ZWRMaW5lcyIsImluZGljYXRvciIsImlucHV0TGVuZ3RoIiwic3RkZXJyIiwiaXNUVFkiLCJjb2x1bW5zIiwiY291bnQiLCJNYXRoIiwiZmxvb3IiLCJtYXhDb3VudCIsImxvZyIsInJlcGVhdCIsInBvcCIsIm1heExpbmVzIiwibWF4IiwiX2FjdHVhbExpbmVzIiwicHJpbnRlZExpbmVzIiwic2tpcHBlZE1zZyIsImN1ciIsImV4cGVjdGVkTGluZSIsImFjdHVhbExpbmUiLCJkaXZlcmdpbmdMaW5lcyIsIl9FcnJvciIsIm9wdGlvbnMiLCJsaW1pdCIsInN0YWNrVHJhY2VMaW1pdCIsIlN0cmluZyIsImdldENvbG9yRGVwdGgiLCJiYXNlIiwiX3JlcyIsImtub3duT3BlcmF0b3JzIiwiY29kZSIsImNhcHR1cmVTdGFja1RyYWNlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX2luaGVyaXRzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NyZWF0ZUNsYXNzIiwiY3VzdG9tIiwicmVjdXJzZVRpbWVzIiwiY3R4Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJ1dGlsIiwiY3JlYXRlRXJyb3JUeXBlIiwiQmFzZSIsIk5vZGVFcnJvciIsIl9CYXNlIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiZ2V0TWVzc2FnZSIsIm9uZU9mIiwidGhpbmciLCJpc0FycmF5IiwibGVuIiwibWFwIiwiZGV0ZXJtaW5lciIsInN1YnN0ciIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwidHlwZSIsInN0YXJ0IiwiaW5jbHVkZXMiLCJyZWFzb24iLCJpbnNwZWN0ZWQiLCJSYW5nZUVycm9yIiwiaW5wdXQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJfcyIsIl9pIiwibmV4dCIsImRvbmUiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwicmVnZXhGbGFnc1N1cHBvcnRlZCIsImZsYWdzIiwiYXJyYXlGcm9tU2V0IiwiYXJyYXkiLCJhcnJheUZyb21NYXAiLCJvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJudW1iZXJJc05hTiIsIk51bWJlciIsImlzTmFOIiwidW5jdXJyeVRoaXMiLCJmIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIm9iamVjdFRvU3RyaW5nIiwiaXNBbnlBcnJheUJ1ZmZlciIsImlzQXJyYXlCdWZmZXJWaWV3IiwiaXNEYXRlIiwiaXNNYXAiLCJpc1NldCIsImlzTmF0aXZlRXJyb3IiLCJpc0JveGVkUHJpbWl0aXZlIiwiaXNOdW1iZXJPYmplY3QiLCJpc1N0cmluZ09iamVjdCIsImlzQm9vbGVhbk9iamVjdCIsImlzQmlnSW50T2JqZWN0IiwiaXNTeW1ib2xPYmplY3QiLCJpc0Zsb2F0MzJBcnJheSIsImlzRmxvYXQ2NEFycmF5IiwiaXNOb25JbmRleCIsImNoYXJDb2RlQXQiLCJwb3ciLCJnZXRPd25Ob25JbmRleFByb3BlcnRpZXMiLCJjb21wYXJlIiwieCIsInkiLCJtaW4iLCJpbm5lckRlZXBFcXVhbCIsInZhbDEiLCJ2YWwyIiwibWVtb3MiLCJ2YWwxVGFnIiwia2V5czEiLCJrZXlzMiIsImtleUNoZWNrIiwiZ2V0VGltZSIsIlJlZ0V4cCIsImFyZVNpbWlsYXJSZWdFeHBzIiwiYnl0ZUxlbmd0aCIsIlVpbnQ4QXJyYXkiLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYXJlU2ltaWxhclR5cGVkQXJyYXlzIiwib2Zmc2V0IiwiYXJlU2ltaWxhckZsb2F0QXJyYXlzIiwiX2tleXMiLCJfa2V5czIiLCJzaXplIiwiYnVmMSIsImJ1ZjIiLCJhcmVFcXVhbEFycmF5QnVmZmVycyIsInZhbHVlT2YiLCJCb29sZWFuIiwiQmlnSW50IiwiaXNFcXVhbEJveGVkUHJpbWl0aXZlIiwiZ2V0RW51bWVyYWJsZXMiLCJrIiwiaXRlcmF0aW9uVHlwZSIsImFLZXlzIiwiYktleXMiLCJzeW1ib2xLZXlzQSIsInN5bWJvbEtleXNCIiwiX3N5bWJvbEtleXNCIiwicG9zaXRpb24iLCJ2YWwyTWVtb0EiLCJ2YWwyTWVtb0IiLCJhcmVFcSIsIm9iakVxdWl2IiwiZGVsZXRlIiwic2V0SGFzRXF1YWxFbGVtZW50IiwibWVtbyIsInNldFZhbHVlcyIsImZpbmRMb29zZU1hdGNoaW5nUHJpbWl0aXZlcyIsInByaW0iLCJzZXRNaWdodEhhdmVMb29zZVByaW0iLCJhbHRWYWx1ZSIsIm1hcE1pZ2h0SGF2ZUxvb3NlUHJpbSIsIml0ZW0iLCJjdXJCIiwibWFwSGFzRXF1YWxFbnRyeSIsImtleTEiLCJpdGVtMSIsImtleTIiLCJhVmFsdWVzIiwiU2V0IiwiYWRkIiwiYlZhbHVlcyIsIl92YWwiLCJzZXRFcXVpdiIsImFFbnRyaWVzIiwiX2FFbnRyaWVzJGkiLCJpdGVtMiIsImJFbnRyaWVzIiwiX2kyIiwiX2JFbnRyaWVzJF9pIiwibWFwRXF1aXYiLCJrZXlzQSIsIkdldEludHJpbnNpYyIsImNhbGxCaW5kIiwiJGluZGV4T2YiLCJhbGxvd01pc3NpbmciLCJpbnRyaW5zaWMiLCIkYXBwbHkiLCIkY2FsbCIsIiRyZWZsZWN0QXBwbHkiLCIkZ09QRCIsIiRkZWZpbmVQcm9wZXJ0eSIsIiRtYXgiLCJvcmlnaW5hbEZ1bmN0aW9uIiwiZnVuYyIsImRlc2MiLCJhcHBseUJpbmQiLCJub3ciLCJ0aW1lcyIsImciLCJ3aW5kb3ciLCJmdW5jdGlvbnMiLCJsYWJlbCIsInRpbWUiLCJkdXJhdGlvbiIsImZvcm1hdCIsIm9iamVjdCIsImV4cHJlc3Npb24iLCJ0dXBsZSIsImhhc1N5bWJvbHMiLCJ0b1N0ciIsIm9yaWdEZWZpbmVQcm9wZXJ0eSIsImhhc1Byb3BlcnR5RGVzY3JpcHRvcnMiLCJzdXBwb3J0c0Rlc2NyaXB0b3JzIiwicHJlZGljYXRlIiwiaXNGdW5jdGlvbiIsImRlZmluZVByb3BlcnRpZXMiLCJwcmVkaWNhdGVzIiwiZmlyc3RTb3VyY2UiLCJ0byIsIm5leHRTb3VyY2UiLCJrZXlzQXJyYXkiLCJuZXh0SW5kZXgiLCJuZXh0S2V5IiwicG9seWZpbGwiLCJpc0NhbGxhYmxlIiwiZm9yRWFjaEFycmF5IiwicmVjZWl2ZXIiLCJmb3JFYWNoU3RyaW5nIiwic3RyaW5nIiwiY2hhckF0IiwiZm9yRWFjaE9iamVjdCIsImxpc3QiLCJ0aGlzQXJnIiwiRVJST1JfTUVTU0FHRSIsImZ1bmNUeXBlIiwidGhhdCIsImJvdW5kIiwiYmluZGVyIiwiYm91bmRMZW5ndGgiLCJib3VuZEFyZ3MiLCJFbXB0eSIsImltcGxlbWVudGF0aW9uIiwiJFN5bnRheEVycm9yIiwiU3ludGF4RXJyb3IiLCIkRnVuY3Rpb24iLCIkVHlwZUVycm9yIiwiZ2V0RXZhbGxlZENvbnN0cnVjdG9yIiwiZXhwcmVzc2lvblN5bnRheCIsInRocm93VHlwZUVycm9yIiwiVGhyb3dUeXBlRXJyb3IiLCJjYWxsZWVUaHJvd3MiLCJnT1BEdGhyb3dzIiwiZ2V0UHJvdG8iLCJuZWVkc0V2YWwiLCJUeXBlZEFycmF5IiwiSU5UUklOU0lDUyIsIkFnZ3JlZ2F0ZUVycm9yIiwiQXJyYXlCdWZmZXIiLCJBdG9taWNzIiwiRGF0YVZpZXciLCJkZWNvZGVVUkkiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlbmNvZGVVUkkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJldmFsIiwiRXZhbEVycm9yIiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiRmluYWxpemF0aW9uUmVnaXN0cnkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsImlzRmluaXRlIiwiSlNPTiIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsIlNoYXJlZEFycmF5QnVmZmVyIiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiVVJJRXJyb3IiLCJXZWFrTWFwIiwiV2Vha1JlZiIsIldlYWtTZXQiLCJkb0V2YWwiLCJnZW4iLCJMRUdBQ1lfQUxJQVNFUyIsImhhc093biIsIiRjb25jYXQiLCIkc3BsaWNlQXBwbHkiLCJzcGxpY2UiLCIkcmVwbGFjZSIsIiRzdHJTbGljZSIsIiRleGVjIiwiZXhlYyIsInJlUHJvcE5hbWUiLCJyZUVzY2FwZUNoYXIiLCJzdHJpbmdUb1BhdGgiLCJmaXJzdCIsImxhc3QiLCJtYXRjaCIsIm51bWJlciIsInF1b3RlIiwic3ViU3RyaW5nIiwiZ2V0QmFzZUludHJpbnNpYyIsImludHJpbnNpY05hbWUiLCJhbGlhcyIsInBhcnRzIiwiaW50cmluc2ljQmFzZU5hbWUiLCJpbnRyaW5zaWNSZWFsTmFtZSIsInNraXBGdXJ0aGVyQ2FjaGluZyIsImlzT3duIiwicGFydCIsImhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnIiwib3JpZ1N5bWJvbCIsImhhc1N5bWJvbFNoYW0iLCJzeW1PYmoiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwic3ltcyIsInRvU3RyaW5nVGFnIiwiY3RvciIsInN1cGVyQ3RvciIsInN1cGVyXyIsIlRlbXBDdG9yIiwiaGFzVG9TdHJpbmdUYWciLCIkdG9TdHJpbmciLCJjYWxsQm91bmQiLCJpc1N0YW5kYXJkQXJndW1lbnRzIiwiaXNMZWdhY3lBcmd1bWVudHMiLCJjYWxsZWUiLCJzdXBwb3J0c1N0YW5kYXJkQXJndW1lbnRzIiwiZm5Ub1N0ciIsInJlZmxlY3RBcHBseSIsImJhZEFycmF5TGlrZSIsImlzQ2FsbGFibGVNYXJrZXIiLCJfIiwiY29uc3RydWN0b3JSZWdleCIsImlzRVM2Q2xhc3NGbiIsImZuU3RyIiwiZG9jdW1lbnREb3RBbGwiLCJkb2N1bWVudCIsImFsbCIsInRyeUZ1bmN0aW9uT2JqZWN0Iiwic3RyQ2xhc3MiLCJpc0ZuUmVnZXgiLCJHZW5lcmF0b3JGdW5jdGlvbiIsImdlbmVyYXRvckZ1bmMiLCJnZXRHZW5lcmF0b3JGdW5jIiwiZGVmaW5lIiwiZ2V0UG9seWZpbGwiLCJzaGltIiwiTmFOIiwiYXZhaWxhYmxlVHlwZWRBcnJheXMiLCJnbG9iYWxUaGlzIiwidHlwZWRBcnJheXMiLCIkc2xpY2UiLCJ0b1N0clRhZ3MiLCJnT1BEIiwidHlwZWRBcnJheSIsInByb3RvIiwic3VwZXJQcm90byIsInRhZyIsImFueVRydWUiLCJnZXR0ZXIiLCJ0cnlUeXBlZEFycmF5cyIsImtleXNTaGltIiwiaXNBcmdzIiwiaXNFbnVtZXJhYmxlIiwiaGFzRG9udEVudW1CdWciLCJoYXNQcm90b0VudW1CdWciLCJkb250RW51bXMiLCJlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSIsImV4Y2x1ZGVkS2V5cyIsIiRhcHBsaWNhdGlvbkNhY2hlIiwiJGNvbnNvbGUiLCIkZXh0ZXJuYWwiLCIkZnJhbWUiLCIkZnJhbWVFbGVtZW50IiwiJGZyYW1lcyIsIiRpbm5lckhlaWdodCIsIiRpbm5lcldpZHRoIiwiJG9ubW96ZnVsbHNjcmVlbmNoYW5nZSIsIiRvbm1vemZ1bGxzY3JlZW5lcnJvciIsIiRvdXRlckhlaWdodCIsIiRvdXRlcldpZHRoIiwiJHBhZ2VYT2Zmc2V0IiwiJHBhZ2VZT2Zmc2V0IiwiJHBhcmVudCIsIiRzY3JvbGxMZWZ0IiwiJHNjcm9sbFRvcCIsIiRzY3JvbGxYIiwiJHNjcm9sbFkiLCIkc2VsZiIsIiR3ZWJraXRJbmRleGVkREIiLCIkd2Via2l0U3RvcmFnZUluZm8iLCIkd2luZG93IiwiaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnIiwiaXNPYmplY3QiLCJpc0FyZ3VtZW50cyIsImlzU3RyaW5nIiwidGhlS2V5cyIsInNraXBQcm90byIsImoiLCJza2lwQ29uc3RydWN0b3IiLCJlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kiLCJvcmlnS2V5cyIsIm9yaWdpbmFsS2V5cyIsImtleXNXb3Jrc1dpdGhBcmd1bWVudHMiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJydW4iLCJtYXJrZXIiLCJydW5DbGVhclRpbWVvdXQiLCJJdGVtIiwibm9vcCIsIm5leHRUaWNrIiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiYXJnIiwiY29weSIsImZpbGwiLCJyZWFkVUludDgiLCJpc0FyZ3VtZW50c09iamVjdCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJ3aGljaFR5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJCaWdJbnRTdXBwb3J0ZWQiLCJTeW1ib2xTdXBwb3J0ZWQiLCJPYmplY3RUb1N0cmluZyIsIm51bWJlclZhbHVlIiwic3RyaW5nVmFsdWUiLCJib29sZWFuVmFsdWUiLCJiaWdJbnRWYWx1ZSIsInN5bWJvbFZhbHVlIiwiY2hlY2tCb3hlZFByaW1pdGl2ZSIsInByb3RvdHlwZVZhbHVlT2YiLCJpc01hcFRvU3RyaW5nIiwiaXNTZXRUb1N0cmluZyIsImlzV2Vha01hcFRvU3RyaW5nIiwiaXNXZWFrU2V0VG9TdHJpbmciLCJpc0FycmF5QnVmZmVyVG9TdHJpbmciLCJpc0FycmF5QnVmZmVyIiwid29ya2luZyIsImlzRGF0YVZpZXdUb1N0cmluZyIsImlzRGF0YVZpZXciLCJpc1ZpZXciLCJpc1VpbnQ4QXJyYXkiLCJpc1VpbnQ4Q2xhbXBlZEFycmF5IiwiaXNVaW50MTZBcnJheSIsImlzVWludDMyQXJyYXkiLCJpc0ludDhBcnJheSIsImlzSW50MTZBcnJheSIsImlzSW50MzJBcnJheSIsImlzQmlnSW50NjRBcnJheSIsImlzQmlnVWludDY0QXJyYXkiLCJpc1dlYWtNYXAiLCJpc1dlYWtTZXQiLCJTaGFyZWRBcnJheUJ1ZmZlckNvcHkiLCJpc1NoYXJlZEFycmF5QnVmZmVyVG9TdHJpbmciLCJpc1NoYXJlZEFycmF5QnVmZmVyIiwiaXNBc3luY0Z1bmN0aW9uIiwiaXNNYXBJdGVyYXRvciIsImlzU2V0SXRlcmF0b3IiLCJpc0dlbmVyYXRvck9iamVjdCIsImlzV2ViQXNzZW1ibHlDb21waWxlZE1vZHVsZSIsIm1ldGhvZCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZXNjcmlwdG9ycyIsImZvcm1hdFJlZ0V4cCIsIm9iamVjdHMiLCJzdHJpbmdpZnkiLCJpc051bGwiLCJkZXByZWNhdGUiLCJub0RlcHJlY2F0aW9uIiwidGhyb3dEZXByZWNhdGlvbiIsInRyYWNlRGVwcmVjYXRpb24iLCJ0cmFjZSIsImRlYnVncyIsImRlYnVnRW52UmVnZXgiLCJOT0RFX0RFQlVHIiwiZGVidWdFbnYiLCJ0b1VwcGVyQ2FzZSIsIm9wdHMiLCJzZWVuIiwic3R5bGl6ZSIsInN0eWxpemVOb0NvbG9yIiwiY29sb3JzIiwiaXNCb29sZWFuIiwiX2V4dGVuZCIsImlzVW5kZWZpbmVkIiwic3R5bGl6ZVdpdGhDb2xvciIsImZvcm1hdFZhbHVlIiwic3R5bGVUeXBlIiwic3R5bGUiLCJzdHlsZXMiLCJyZXQiLCJwcmltaXRpdmUiLCJzaW1wbGUiLCJpc051bWJlciIsImZvcm1hdFByaW1pdGl2ZSIsInZpc2libGVLZXlzIiwiaGFzaCIsImlkeCIsImFycmF5VG9IYXNoIiwiaXNFcnJvciIsImZvcm1hdEVycm9yIiwiYnJhY2VzIiwidG9VVENTdHJpbmciLCJvdXRwdXQiLCJsIiwiZm9ybWF0UHJvcGVydHkiLCJmb3JtYXRBcnJheSIsInJlZHVjZSIsInByZXYiLCJudW1MaW5lc0VzdCIsInJlZHVjZVRvU2luZ2xlU3RyaW5nIiwibGluZSIsImFyIiwicmUiLCJkIiwicGFkIiwibiIsImRlYnVnbG9nIiwicGlkIiwidHlwZXMiLCJpc051bGxPclVuZGVmaW5lZCIsImlzU3ltYm9sIiwiaXNQcmltaXRpdmUiLCJpc0J1ZmZlciIsIm1vbnRocyIsInRpbWVzdGFtcCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJwcm9wIiwiaW5oZXJpdHMiLCJvcmlnaW4iLCJrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wiLCJjYWxsYmFja2lmeU9uUmVqZWN0ZWQiLCJjYiIsIm5ld1JlYXNvbiIsInByb21pc2lmeSIsIm9yaWdpbmFsIiwicHJvbWlzZVJlc29sdmUiLCJwcm9taXNlUmVqZWN0IiwicHJvbWlzZSIsInJlamVjdCIsImNhbGxiYWNraWZ5IiwiY2FsbGJhY2tpZmllZCIsIm1heWJlQ2IiLCJyZWoiLCJmb3VuZE5hbWUiLCJwb3NzaWJsZU5hbWVzIiwib3V0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImVudW1lcmFibGVPbmx5Iiwic3ltYm9scyIsIl9vYmplY3RTcHJlYWQyIiwiZm9ybWF0UHJvZEVycm9yTWVzc2FnZSIsIiQkb2JzZXJ2YWJsZSIsIm9ic2VydmFibGUiLCJyYW5kb21TdHJpbmciLCJyYW5kb20iLCJBY3Rpb25UeXBlcyIsIklOSVQiLCJSRVBMQUNFIiwiUFJPQkVfVU5LTk9XTl9BQ1RJT04iLCJpc1BsYWluT2JqZWN0IiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwicHJlbG9hZGVkU3RhdGUiLCJlbmhhbmNlciIsIl9yZWYyIiwiY3VycmVudFJlZHVjZXIiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50TGlzdGVuZXJzIiwibmV4dExpc3RlbmVycyIsImlzRGlzcGF0Y2hpbmciLCJlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzIiwiZ2V0U3RhdGUiLCJzdWJzY3JpYmUiLCJsaXN0ZW5lciIsImlzU3Vic2NyaWJlZCIsImluZGV4IiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJyZXBsYWNlUmVkdWNlciIsIm5leHRSZWR1Y2VyIiwiX3JlZiIsIm91dGVyU3Vic2NyaWJlIiwib2JzZXJ2ZXIiLCJvYnNlcnZlU3RhdGUiLCJ1bnN1YnNjcmliZSIsImNvbXBvc2UiLCJmdW5jcyIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyMiIsIl90b0NvbnN1bWFibGVBcnJheSIsIml0ZXIiLCJmcm9tIiwibWluTGVuIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJkZWZhdWx0Q2FyU3RhdGUiLCJpc0Nhck9wZW5TdGF0ZSIsImFyZUNhcldpbmRvd3NPcGVuU3RhdGUiLCJjb250cm9sTXVzaWNWb2x1bWVTdGF0ZSIsInZpZXdTdGF0ZU9wdGlvbnMiLCJuYXZDbGlja0hhbmRsZXIiLCJldmVudCIsInN0b3JlIiwicGF5bG9hZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2Iiwid2luZG93Q2xpY2tIYW5kbGVyIiwibG9ja0NsaWNrSGFuZGxlciIsInZvbENsaWNrSGFuZGxlciIsInZvbCIsInZpZXdDb250cm9sbGVyIiwidmlld1R5cGUiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BsYXkiLCJtdXNpY1ZvbHVtZUNvbnRyb2xsZXIiLCJpbm5lckhUTUwiLCJjYXJMb2NrQ29udHJvbGxlciIsInN0YXRlIiwid2luZG93c09wZW5Db250cm9sbGVyIiwicmVkdWNlcnMiLCJyZWR1Y2VyS2V5cyIsImZpbmFsUmVkdWNlcnMiLCJmaW5hbFJlZHVjZXJLZXlzIiwic2hhcGVBc3NlcnRpb25FcnJvciIsImFzc2VydFJlZHVjZXJTaGFwZSIsImhhc0NoYW5nZWQiLCJuZXh0U3RhdGUiLCJwcmV2aW91c1N0YXRlRm9yS2V5IiwibmV4dFN0YXRlRm9yS2V5IiwiY29tYmluZVJlZHVjZXJzIiwidmlld1JlZHVjZXIiLCJjYXJSZWR1Y2VyIiwibWlkZGxld2FyZXMiLCJfZGlzcGF0Y2giLCJtaWRkbGV3YXJlQVBJIiwiY2hhaW4iLCJtaWRkbGV3YXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwicmV0dXJuVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9