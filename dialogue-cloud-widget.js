import * as Ve from "react";
import Xe, { forwardRef as ze, createElement as ge, useState as M, useRef as jr, useEffect as Or } from "react";
var me = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Cr() {
  if (Ye) return V;
  Ye = 1;
  var n = Xe, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(x, m, w) {
    var y, S = {}, O = null, D = null;
    w !== void 0 && (O = "" + w), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (D = m.ref);
    for (y in m) c.call(m, y) && !_.hasOwnProperty(y) && (S[y] = m[y]);
    if (x && x.defaultProps) for (y in m = x.defaultProps, m) S[y] === void 0 && (S[y] = m[y]);
    return { $$typeof: a, type: x, key: O, ref: D, props: S, _owner: h.current };
  }
  return V.Fragment = u, V.jsx = j, V.jsxs = j, V;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function kr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), x = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), q = Symbol.iterator, L = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[L];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        ee("error", e, t);
      }
    }
    function ee(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(l) {
          return String(l);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var I = !1, re = !1, te = !1, ne = !1, He = !1, ye;
    ye = Symbol.for("react.module.reference");
    function Qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === _ || He || e === h || e === w || e === y || ne || e === D || I || re || te || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === S || e.$$typeof === j || e.$$typeof === x || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ye || e.getModuleId !== void 0));
    }
    function Ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case u:
          return "Portal";
        case _:
          return "Profiler";
        case h:
          return "StrictMode";
        case w:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return be(r) + ".Consumer";
          case j:
            var t = e;
            return be(t._context) + ".Provider";
          case m:
            return Ze(e, e.render, "ForwardRef");
          case S:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case O: {
            var f = e, d = f._payload, l = f._init;
            try {
              return C(l(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, Ee, Re, _e, xe, Te, we, Se;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function er() {
      {
        if ($ === 0) {
          Ee = console.log, Re = console.info, _e = console.warn, xe = console.error, Te = console.group, we = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function rr() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: Ee
            }),
            info: P({}, e, {
              value: Re
            }),
            warn: P({}, e, {
              value: _e
            }),
            error: P({}, e, {
              value: xe
            }),
            group: P({}, e, {
              value: Te
            }),
            groupCollapsed: P({}, e, {
              value: we
            }),
            groupEnd: P({}, e, {
              value: Se
            })
          });
        }
        $ < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = k.ReactCurrentDispatcher, oe;
    function J(e, r, t) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            oe = o && o[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var se = !1, X;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      X = new tr();
    }
    function Oe(e, r) {
      if (!e || se)
        return "";
      {
        var t = X.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      se = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ae.current, ae.current = null, er();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (R) {
              o = R;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (R) {
              o = R;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            o = R;
          }
          e();
        }
      } catch (R) {
        if (R && o && typeof R.stack == "string") {
          for (var i = R.stack.split(`
`), E = o.stack.split(`
`), p = i.length - 1, g = E.length - 1; p >= 1 && g >= 0 && i[p] !== E[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (i[p] !== E[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || i[p] !== E[g]) {
                    var T = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, T), T;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        se = !1, ae.current = d, rr(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", A = F ? J(F) : "";
      return typeof e == "function" && X.set(e, A), A;
    }
    function nr(e, r, t) {
      return Oe(e, !1);
    }
    function ar(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, ar(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case w:
          return J("Suspense");
        case y:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return nr(e.render);
          case S:
            return z(e.type, r, t);
          case O: {
            var o = e, f = o._payload, d = o._init;
            try {
              return z(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Ce = {}, ke = k.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    function or(e, r, t, o, f) {
      {
        var d = Function.call.bind(U);
        for (var l in e)
          if (d(e, l)) {
            var i = void 0;
            try {
              if (typeof e[l] != "function") {
                var E = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              i = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (G(f), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof i), G(null)), i instanceof Error && !(i.message in Ce) && (Ce[i.message] = !0, G(f), s("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var sr = Array.isArray;
    function ie(e) {
      return sr(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Ae(e) {
      if (ur(e))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), Pe(e);
    }
    var W = k.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Ie, ue;
    ue = {};
    function cr(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = C(W.current.type);
        ue[t] || (s('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(W.current.type), e.ref), ue[t] = !0);
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          De || (De = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function pr(e, r) {
      {
        var t = function() {
          Ie || (Ie = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var hr = function(e, r, t, o, f, d, l) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function gr(e, r, t, o, f) {
      {
        var d, l = {}, i = null, E = null;
        t !== void 0 && (Ae(t), i = "" + t), fr(r) && (Ae(r.key), i = "" + r.key), cr(r) && (E = r.ref, dr(r, f));
        for (d in r)
          U.call(r, d) && !lr.hasOwnProperty(d) && (l[d] = r[d]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (d in p)
            l[d] === void 0 && (l[d] = p[d]);
        }
        if (i || E) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && vr(l, g), E && pr(l, g);
        }
        return hr(e, i, E, f, o, W.current, l);
      }
    }
    var le = k.ReactCurrentOwner, Ne = k.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(t);
      } else
        Ne.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Fe() {
      {
        if (le.current) {
          var e = C(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
      return "";
    }
    var Me = {};
    function yr(e) {
      {
        var r = Fe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = yr(r);
        if (Me[t])
          return;
        Me[t] = !0;
        var o = "";
        e && e._owner && e._owner !== le.current && (o = " It was passed a child from " + C(e._owner.type) + "."), N(e), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), N(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            fe(o) && Le(o, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Z(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), l; !(l = d.next()).done; )
              fe(l.value) && Le(l.value, r);
        }
      }
    }
    function br(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = C(r);
          or(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var f = C(r);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            N(e), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), s("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Ue = {};
    function We(e, r, t, o, f, d) {
      {
        var l = Qe(e);
        if (!l) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = mr();
          E ? i += E : i += Fe();
          var p;
          e === null ? p = "null" : ie(e) ? p = "array" : e !== void 0 && e.$$typeof === a ? (p = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var g = gr(e, r, t, f, d);
        if (g == null)
          return g;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (ie(T)) {
                for (var F = 0; F < T.length; F++)
                  $e(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(T, e);
        }
        if (U.call(r, "key")) {
          var A = C(e), R = Object.keys(r).filter(function(Sr) {
            return Sr !== "key";
          }), de = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[A + de]) {
            var wr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, de, A, wr, A), Ue[A + de] = !0;
          }
        }
        return e === c ? Er(g) : br(g), g;
      }
    }
    function Rr(e, r, t) {
      return We(e, r, t, !0);
    }
    function _r(e, r, t) {
      return We(e, r, t, !1);
    }
    var xr = _r, Tr = Rr;
    Y.Fragment = c, Y.jsx = xr, Y.jsxs = Tr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? me.exports = Cr() : me.exports = kr();
var v = me.exports;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ge = (...n) => n.filter((a, u, c) => !!a && a.trim() !== "" && c.indexOf(a) === u).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ar = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = ze(
  ({
    color: n = "currentColor",
    size: a = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: c,
    className: h = "",
    children: _,
    iconNode: j,
    ...x
  }, m) => ge(
    "svg",
    {
      ref: m,
      ...Ar,
      width: a,
      height: a,
      stroke: n,
      strokeWidth: c ? Number(u) * 24 / Number(a) : u,
      className: Ge("lucide", h),
      ...x
    },
    [
      ...j.map(([w, y]) => ge(w, y)),
      ...Array.isArray(_) ? _ : [_]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = (n, a) => {
  const u = ze(
    ({ className: c, ...h }, _) => ge(Dr, {
      ref: _,
      iconNode: a,
      className: Ge(`lucide-${Pr(n)}`, c),
      ...h
    })
  );
  return u.displayName = `${n}`, u;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = K("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = K("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = K("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = K("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = K("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), $r = 1, Ur = 1e6;
let ve = 0;
function Wr() {
  return ve = (ve + 1) % Number.MAX_SAFE_INTEGER, ve.toString();
}
const pe = /* @__PURE__ */ new Map(), Ke = (n) => {
  if (pe.has(n))
    return;
  const a = setTimeout(() => {
    pe.delete(n), B({
      type: "REMOVE_TOAST",
      toastId: n
    });
  }, Ur);
  pe.set(n, a);
}, Vr = (n, a) => {
  switch (a.type) {
    case "ADD_TOAST":
      return {
        ...n,
        toasts: [a.toast, ...n.toasts].slice(0, $r)
      };
    case "UPDATE_TOAST":
      return {
        ...n,
        toasts: n.toasts.map(
          (u) => u.id === a.toast.id ? { ...u, ...a.toast } : u
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: u } = a;
      return u ? Ke(u) : n.toasts.forEach((c) => {
        Ke(c.id);
      }), {
        ...n,
        toasts: n.toasts.map(
          (c) => c.id === u || u === void 0 ? {
            ...c,
            open: !1
          } : c
        )
      };
    }
    case "REMOVE_TOAST":
      return a.toastId === void 0 ? {
        ...n,
        toasts: []
      } : {
        ...n,
        toasts: n.toasts.filter((u) => u.id !== a.toastId)
      };
  }
}, H = [];
let Q = { toasts: [] };
function B(n) {
  Q = Vr(Q, n), H.forEach((a) => {
    a(Q);
  });
}
function Yr({ ...n }) {
  const a = Wr(), u = (h) => B({
    type: "UPDATE_TOAST",
    toast: { ...h, id: a }
  }), c = () => B({ type: "DISMISS_TOAST", toastId: a });
  return B({
    type: "ADD_TOAST",
    toast: {
      ...n,
      id: a,
      open: !0,
      onOpenChange: (h) => {
        h || c();
      }
    }
  }), {
    id: a,
    dismiss: c,
    update: u
  };
}
function Br() {
  const [n, a] = Ve.useState(Q);
  return Ve.useEffect(() => (H.push(a), () => {
    const u = H.indexOf(a);
    u > -1 && H.splice(u, 1);
  }), [n]), {
    ...n,
    toast: Yr,
    dismiss: (u) => B({ type: "DISMISS_TOAST", toastId: u })
  };
}
const b = [];
for (let n = 0; n < 256; ++n)
  b.push((n + 256).toString(16).slice(1));
function Kr(n, a = 0) {
  return (b[n[a + 0]] + b[n[a + 1]] + b[n[a + 2]] + b[n[a + 3]] + "-" + b[n[a + 4]] + b[n[a + 5]] + "-" + b[n[a + 6]] + b[n[a + 7]] + "-" + b[n[a + 8]] + b[n[a + 9]] + "-" + b[n[a + 10]] + b[n[a + 11]] + b[n[a + 12]] + b[n[a + 13]] + b[n[a + 14]] + b[n[a + 15]]).toLowerCase();
}
let he;
const qr = new Uint8Array(16);
function Jr() {
  if (!he) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    he = crypto.getRandomValues.bind(crypto);
  }
  return he(qr);
}
const Xr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), qe = { randomUUID: Xr };
function Je(n, a, u) {
  var h;
  if (qe.randomUUID && !a && !n)
    return qe.randomUUID();
  n = n || {};
  const c = n.random ?? ((h = n.rng) == null ? void 0 : h.call(n)) ?? Jr();
  if (c.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return c[6] = c[6] & 15 | 64, c[8] = c[8] & 63 | 128, Kr(c);
}
const zr = [
  "אני רוצה לקבוע תור",
  "אני מתעניין במוצר/שירות שלכם",
  "יש לי בעיה עם מוצר שרכשתי",
  "מה שעות הפעילות של העסק?",
  "מתי פנוי תור בתאריך הקרוב ביותר?"
], Gr = "https://n8n.smartestadviser.com/webhook/c34e2296-87d8-4e8a-92f7-8c55901c3c68/chat", Qr = () => {
  const [n, a] = M(!1), [u, c] = M([]), [h, _] = M(""), [j, x] = M(!1), [m, w] = M(!0), [y, S] = M(Je()), O = jr(null), { toast: D } = Br(), q = () => {
    var s;
    (s = O.current) == null || s.scrollIntoView({ behavior: "smooth" });
  };
  Or(() => {
    q();
  }, [u]);
  const L = async (s) => {
    if (!s.trim()) return;
    const ee = {
      id: Date.now().toString(),
      text: s,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    c((I) => [...I, ee]), _(""), w(!1), x(!0);
    try {
      const re = await (await fetch(Gr, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ chatInput: s, sessionId: y })
        // Include sessionId here
      })).json(), te = {
        id: (Date.now() + 1).toString(),
        text: re.response || "Sorry, I couldn't process that.",
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      c((ne) => [...ne, te]);
    } catch (I) {
      console.error("Error sending message:", I), D({
        title: "שגיאה",
        description: "לא הצלחנו לשלוח את ההודעה. אנא נסה שוב.",
        variant: "destructive"
      });
    } finally {
      x(!1);
    }
  }, Z = () => {
    c([]), w(!0), S(Je());
  }, k = (s) => {
    L(s);
  };
  return /* @__PURE__ */ v.jsx("div", { className: "fixed bottom-4 right-4 z-50 font-sans", dir: "rtl", children: n ? /* @__PURE__ */ v.jsxs("div", { className: "w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-in", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [
      /* @__PURE__ */ v.jsx("h2", { className: "text-lg font-semibold", children: "צ'אט תמיכה" }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: Z,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: /* @__PURE__ */ v.jsx(Fr, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => a(!1),
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: /* @__PURE__ */ v.jsx(Lr, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      m && u.length === 0 && /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-1 gap-2 animate-fade-in", children: zr.map((s) => /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: () => k(s),
          className: "text-right p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm",
          children: s
        },
        s
      )) }),
      u.map((s) => /* @__PURE__ */ v.jsx(
        "div",
        {
          className: `flex ${s.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`,
          children: /* @__PURE__ */ v.jsx(
            "div",
            {
              className: `max-w-[80%] p-3 rounded-lg ${s.sender === "user" ? "bg-chatblue text-white" : "bg-gray-100"}`,
              children: s.text
            }
          )
        },
        s.id
      )),
      j && /* @__PURE__ */ v.jsx("div", { className: "flex justify-start animate-fade-in", children: /* @__PURE__ */ v.jsx("div", { className: "bg-gray-100 p-3 rounded-lg", children: /* @__PURE__ */ v.jsx(Ir, { className: "w-5 h-5 animate-spin" }) }) }),
      /* @__PURE__ */ v.jsx("div", { ref: O })
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "p-4 border-t", children: /* @__PURE__ */ v.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "text",
          value: h,
          onChange: (s) => _(s.target.value),
          onKeyPress: (s) => s.key === "Enter" && L(h),
          placeholder: "הקלד הודעה...",
          className: "flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chatblue"
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: () => L(h),
          disabled: !h.trim() || j,
          className: "p-2 bg-chatblue text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ v.jsx(Mr, { className: "w-5 h-5" })
        }
      )
    ] }) })
  ] }) : /* @__PURE__ */ v.jsx(
    "button",
    {
      onClick: () => a(!0),
      className: "flex items-center justify-center w-14 h-14 rounded-full bg-chatblue text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 animate-fade-in",
      children: /* @__PURE__ */ v.jsx(Nr, { className: "w-6 h-6" })
    }
  ) });
};
export {
  Qr as FloatingChat,
  Qr as default
};
