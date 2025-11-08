(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();
var Dh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Jd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Kd = {
        exports: {}
    },
    $s = {},
    Qd = {
        exports: {}
    },
    W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi = Symbol.for("react.element"),
    Lh = Symbol.for("react.portal"),
    Vh = Symbol.for("react.fragment"),
    Ih = Symbol.for("react.strict_mode"),
    Fh = Symbol.for("react.profiler"),
    Oh = Symbol.for("react.provider"),
    zh = Symbol.for("react.context"),
    Bh = Symbol.for("react.forward_ref"),
    Uh = Symbol.for("react.suspense"),
    $h = Symbol.for("react.memo"),
    Hh = Symbol.for("react.lazy"),
    Pu = Symbol.iterator;

function qh(e) {
    return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Yd = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Xd = Object.assign,
    Zd = {};

function Sr(e, t, n) {
    this.props = e, this.context = t, this.refs = Zd, this.updater = n || Yd
}
Sr.prototype.isReactComponent = {};
Sr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Sr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ef() {}
ef.prototype = Sr.prototype;

function ul(e, t, n) {
    this.props = e, this.context = t, this.refs = Zd, this.updater = n || Yd
}
var cl = ul.prototype = new ef;
cl.constructor = ul;
Xd(cl, Sr.prototype);
cl.isPureReactComponent = !0;
var bu = Array.isArray,
    tf = Object.prototype.hasOwnProperty,
    dl = {
        current: null
    },
    nf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function rf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) tf.call(t, r) && !nf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: wi,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: dl.current
    }
}

function Gh(e, t) {
    return {
        $$typeof: wi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function fl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === wi
}

function Wh(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Tu = /\/+/g;

function ho(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Wh("" + e.key) : t.toString(36)
}

function Yi(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case wi:
                case Lh:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + ho(o, 0) : r, bu(i) ? (n = "", e != null && (n = e.replace(Tu, "$&/") + "/"), Yi(i, t, n, "", function(c) {
        return c
    })) : i != null && (fl(i) && (i = Gh(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Tu, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", bu(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var u = r + ho(s, l);
            o += Yi(s, t, n, u, i)
        } else if (u = qh(e), typeof u == "function")
            for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = r + ho(s, l++), o += Yi(s, t, n, u, i);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Ti(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Yi(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }), r
}

function Jh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var He = {
        current: null
    },
    Xi = {
        transition: null
    },
    Kh = {
        ReactCurrentDispatcher: He,
        ReactCurrentBatchConfig: Xi,
        ReactCurrentOwner: dl
    };

function sf() {
    throw Error("act(...) is not supported in production builds of React.")
}
W.Children = {
    map: Ti,
    forEach: function(e, t, n) {
        Ti(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ti(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Ti(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!fl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
W.Component = Sr;
W.Fragment = Vh;
W.Profiler = Fh;
W.PureComponent = ul;
W.StrictMode = Ih;
W.Suspense = Uh;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kh;
W.act = sf;
W.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Xd({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = dl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (u in t) tf.call(t, u) && !nf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: wi,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
W.createContext = function(e) {
    return e = {
        $$typeof: zh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Oh,
        _context: e
    }, e.Consumer = e
};
W.createElement = rf;
W.createFactory = function(e) {
    var t = rf.bind(null, e);
    return t.type = e, t
};
W.createRef = function() {
    return {
        current: null
    }
};
W.forwardRef = function(e) {
    return {
        $$typeof: Bh,
        render: e
    }
};
W.isValidElement = fl;
W.lazy = function(e) {
    return {
        $$typeof: Hh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Jh
    }
};
W.memo = function(e, t) {
    return {
        $$typeof: $h,
        type: e,
        compare: t === void 0 ? null : t
    }
};
W.startTransition = function(e) {
    var t = Xi.transition;
    Xi.transition = {};
    try {
        e()
    } finally {
        Xi.transition = t
    }
};
W.unstable_act = sf;
W.useCallback = function(e, t) {
    return He.current.useCallback(e, t)
};
W.useContext = function(e) {
    return He.current.useContext(e)
};
W.useDebugValue = function() {};
W.useDeferredValue = function(e) {
    return He.current.useDeferredValue(e)
};
W.useEffect = function(e, t) {
    return He.current.useEffect(e, t)
};
W.useId = function() {
    return He.current.useId()
};
W.useImperativeHandle = function(e, t, n) {
    return He.current.useImperativeHandle(e, t, n)
};
W.useInsertionEffect = function(e, t) {
    return He.current.useInsertionEffect(e, t)
};
W.useLayoutEffect = function(e, t) {
    return He.current.useLayoutEffect(e, t)
};
W.useMemo = function(e, t) {
    return He.current.useMemo(e, t)
};
W.useReducer = function(e, t, n) {
    return He.current.useReducer(e, t, n)
};
W.useRef = function(e) {
    return He.current.useRef(e)
};
W.useState = function(e) {
    return He.current.useState(e)
};
W.useSyncExternalStore = function(e, t, n) {
    return He.current.useSyncExternalStore(e, t, n)
};
W.useTransition = function() {
    return He.current.useTransition()
};
W.version = "18.3.1";
Qd.exports = W;
var A = Qd.exports;
const of = Jd(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh = A,
    Yh = Symbol.for("react.element"),
    Xh = Symbol.for("react.fragment"),
    Zh = Object.prototype.hasOwnProperty,
    e0 = Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    t0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function af(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Zh.call(t, r) && !t0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Yh,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: e0.current
    }
}
$s.Fragment = Xh;
$s.jsx = af;
$s.jsxs = af;
Kd.exports = $s;
var a = Kd.exports,
    lf = {
        exports: {}
    },
    it = {},
    uf = {
        exports: {}
    },
    cf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(S, C) {
        var I = S.length;
        S.push(C);
        e: for (; 0 < I;) {
            var b = I - 1 >>> 1,
                V = S[b];
            if (0 < i(V, C)) S[b] = C, S[I] = V, I = b;
            else break e
        }
    }

    function n(S) {
        return S.length === 0 ? null : S[0]
    }

    function r(S) {
        if (S.length === 0) return null;
        var C = S[0],
            I = S.pop();
        if (I !== C) {
            S[0] = I;
            e: for (var b = 0, V = S.length, O = V >>> 1; b < O;) {
                var Y = 2 * (b + 1) - 1,
                    X = S[Y],
                    Z = Y + 1,
                    Se = S[Z];
                if (0 > i(X, I)) Z < V && 0 > i(Se, X) ? (S[b] = Se, S[Z] = I, b = Z) : (S[b] = X, S[Y] = I, b = Y);
                else if (Z < V && 0 > i(Se, I)) S[b] = Se, S[Z] = I, b = Z;
                else break e
            }
        }
        return C
    }

    function i(S, C) {
        var I = S.sortIndex - C.sortIndex;
        return I !== 0 ? I : S.id - C.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var u = [],
        c = [],
        d = 1,
        f = null,
        m = 3,
        y = !1,
        w = !1,
        j = !1,
        T = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(S) {
        for (var C = n(c); C !== null;) {
            if (C.callback === null) r(c);
            else if (C.startTime <= S) r(c), C.sortIndex = C.expirationTime, t(u, C);
            else break;
            C = n(c)
        }
    }

    function N(S) {
        if (j = !1, g(S), !w)
            if (n(u) !== null) w = !0, J(P);
            else {
                var C = n(c);
                C !== null && B(N, C.startTime - S)
            }
    }

    function P(S, C) {
        w = !1, j && (j = !1, v(h), h = -1), y = !0;
        var I = m;
        try {
            for (g(C), f = n(u); f !== null && (!(f.expirationTime > C) || S && !R());) {
                var b = f.callback;
                if (typeof b == "function") {
                    f.callback = null, m = f.priorityLevel;
                    var V = b(f.expirationTime <= C);
                    C = e.unstable_now(), typeof V == "function" ? f.callback = V : f === n(u) && r(u), g(C)
                } else r(u);
                f = n(u)
            }
            if (f !== null) var O = !0;
            else {
                var Y = n(c);
                Y !== null && B(N, Y.startTime - C), O = !1
            }
            return O
        } finally {
            f = null, m = I, y = !1
        }
    }
    var _ = !1,
        E = null,
        h = -1,
        x = 5,
        k = -1;

    function R() {
        return !(e.unstable_now() - k < x)
    }

    function D() {
        if (E !== null) {
            var S = e.unstable_now();
            k = S;
            var C = !0;
            try {
                C = E(!0, S)
            } finally {
                C ? z() : (_ = !1, E = null)
            }
        } else _ = !1
    }
    var z;
    if (typeof p == "function") z = function() {
        p(D)
    };
    else if (typeof MessageChannel < "u") {
        var H = new MessageChannel,
            ce = H.port2;
        H.port1.onmessage = D, z = function() {
            ce.postMessage(null)
        }
    } else z = function() {
        T(D, 0)
    };

    function J(S) {
        E = S, _ || (_ = !0, z())
    }

    function B(S, C) {
        h = T(function() {
            S(e.unstable_now())
        }, C)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
        S.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, J(P))
    }, e.unstable_forceFrameRate = function(S) {
        0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < S ? Math.floor(1e3 / S) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(S) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var C = 3;
                break;
            default:
                C = m
        }
        var I = m;
        m = C;
        try {
            return S()
        } finally {
            m = I
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(S, C) {
        switch (S) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                S = 3
        }
        var I = m;
        m = S;
        try {
            return C()
        } finally {
            m = I
        }
    }, e.unstable_scheduleCallback = function(S, C, I) {
        var b = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? b + I : b) : I = b, S) {
            case 1:
                var V = -1;
                break;
            case 2:
                V = 250;
                break;
            case 5:
                V = 1073741823;
                break;
            case 4:
                V = 1e4;
                break;
            default:
                V = 5e3
        }
        return V = I + V, S = {
            id: d++,
            callback: C,
            priorityLevel: S,
            startTime: I,
            expirationTime: V,
            sortIndex: -1
        }, I > b ? (S.sortIndex = I, t(c, S), n(u) === null && S === n(c) && (j ? (v(h), h = -1) : j = !0, B(N, I - b))) : (S.sortIndex = V, t(u, S), w || y || (w = !0, J(P))), S
    }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(S) {
        var C = m;
        return function() {
            var I = m;
            m = C;
            try {
                return S.apply(this, arguments)
            } finally {
                m = I
            }
        }
    }
})(cf);
uf.exports = cf;
var n0 = uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r0 = A,
    nt = n0;

function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var df = new Set,
    ei = {};

function In(e, t) {
    fr(e, t), fr(e + "Capture", t)
}

function fr(e, t) {
    for (ei[e] = t, e = 0; e < t.length; e++) df.add(t[e])
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ia = Object.prototype.hasOwnProperty,
    i0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _u = {},
    Au = {};

function s0(e) {
    return ia.call(Au, e) ? !0 : ia.call(_u, e) ? !1 : i0.test(e) ? Au[e] = !0 : (_u[e] = !0, !1)
}

function o0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function a0(e, t, n, r) {
    if (t === null || typeof t > "u" || o0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function qe(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Re[e] = new qe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Re[t] = new qe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Re[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Re[e] = new qe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Re[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Re[e] = new qe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Re[e] = new qe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Re[e] = new qe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Re[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ml = /[\-:]([a-z])/g;

function pl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ml, pl);
    Re[t] = new qe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ml, pl);
    Re[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ml, pl);
    Re[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Re[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Re.xlinkHref = new qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Re[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function hl(e, t, n, r) {
    var i = Re.hasOwnProperty(t) ? Re[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (a0(t, n, i, r) && (n = null), r || i === null ? s0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ht = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _i = Symbol.for("react.element"),
    Hn = Symbol.for("react.portal"),
    qn = Symbol.for("react.fragment"),
    gl = Symbol.for("react.strict_mode"),
    sa = Symbol.for("react.profiler"),
    ff = Symbol.for("react.provider"),
    mf = Symbol.for("react.context"),
    yl = Symbol.for("react.forward_ref"),
    oa = Symbol.for("react.suspense"),
    aa = Symbol.for("react.suspense_list"),
    vl = Symbol.for("react.memo"),
    Wt = Symbol.for("react.lazy"),
    pf = Symbol.for("react.offscreen"),
    Mu = Symbol.iterator;

function Er(e) {
    return e === null || typeof e != "object" ? null : (e = Mu && e[Mu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ye = Object.assign,
    go;

function Vr(e) {
    if (go === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        go = t && t[1] || ""
    }
    return `
` + go + e
}
var yo = !1;

function vo(e, t) {
    if (!e || yo) return "";
    yo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l];) l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--, l--, 0 > l || i[o] !== s[l]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        yo = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Vr(e) : ""
}

function l0(e) {
    switch (e.tag) {
        case 5:
            return Vr(e.type);
        case 16:
            return Vr("Lazy");
        case 13:
            return Vr("Suspense");
        case 19:
            return Vr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = vo(e.type, !1), e;
        case 11:
            return e = vo(e.type.render, !1), e;
        case 1:
            return e = vo(e.type, !0), e;
        default:
            return ""
    }
}

function la(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case qn:
            return "Fragment";
        case Hn:
            return "Portal";
        case sa:
            return "Profiler";
        case gl:
            return "StrictMode";
        case oa:
            return "Suspense";
        case aa:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case mf:
            return (e.displayName || "Context") + ".Consumer";
        case ff:
            return (e._context.displayName || "Context") + ".Provider";
        case yl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case vl:
            return t = e.displayName || null, t !== null ? t : la(e.type) || "Memo";
        case Wt:
            t = e._payload, e = e._init;
            try {
                return la(e(t))
            } catch {}
    }
    return null
}

function u0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return la(t);
        case 8:
            return t === gl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function cn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function hf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function c0(e) {
    var t = hf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ai(e) {
    e._valueTracker || (e._valueTracker = c0(e))
}

function gf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = hf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ds(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ua(e, t) {
    var n = t.checked;
    return ye({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Ru(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = cn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function yf(e, t) {
    t = t.checked, t != null && hl(e, "checked", t, !1)
}

function ca(e, t) {
    yf(e, t);
    var n = cn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? da(e, t.type, n) : t.hasOwnProperty("defaultValue") && da(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Du(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function da(e, t, n) {
    (t !== "number" || ds(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ir = Array.isArray;

function or(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + cn(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function fa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return ye({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Lu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(M(92));
            if (Ir(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: cn(n)
    }
}

function vf(e, t) {
    var n = cn(t.value),
        r = cn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function xf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ma(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Mi, wf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Mi = Mi || document.createElement("div"), Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ti(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Br = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    d0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function(e) {
    d0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Br[t] = Br[e]
    })
});

function Sf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Br.hasOwnProperty(e) && Br[e] ? ("" + t).trim() : t + "px"
}

function jf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Sf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var f0 = ye({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function pa(e, t) {
    if (t) {
        if (f0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62))
    }
}

function ha(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ga = null;

function xl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ya = null,
    ar = null,
    lr = null;

function Iu(e) {
    if (e = Ni(e)) {
        if (typeof ya != "function") throw Error(M(280));
        var t = e.stateNode;
        t && (t = Js(t), ya(e.stateNode, e.type, t))
    }
}

function Nf(e) {
    ar ? lr ? lr.push(e) : lr = [e] : ar = e
}

function kf() {
    if (ar) {
        var e = ar,
            t = lr;
        if (lr = ar = null, Iu(e), t)
            for (e = 0; e < t.length; e++) Iu(t[e])
    }
}

function Cf(e, t) {
    return e(t)
}

function Ef() {}
var xo = !1;

function Pf(e, t, n) {
    if (xo) return e(t, n);
    xo = !0;
    try {
        return Cf(e, t, n)
    } finally {
        xo = !1, (ar !== null || lr !== null) && (Ef(), kf())
    }
}

function ni(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Js(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n
}
var va = !1;
if (Ot) try {
    var Pr = {};
    Object.defineProperty(Pr, "passive", {
        get: function() {
            va = !0
        }
    }), window.addEventListener("test", Pr, Pr), window.removeEventListener("test", Pr, Pr)
} catch {
    va = !1
}

function m0(e, t, n, r, i, s, o, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Ur = !1,
    fs = null,
    ms = !1,
    xa = null,
    p0 = {
        onError: function(e) {
            Ur = !0, fs = e
        }
    };

function h0(e, t, n, r, i, s, o, l, u) {
    Ur = !1, fs = null, m0.apply(p0, arguments)
}

function g0(e, t, n, r, i, s, o, l, u) {
    if (h0.apply(this, arguments), Ur) {
        if (Ur) {
            var c = fs;
            Ur = !1, fs = null
        } else throw Error(M(198));
        ms || (ms = !0, xa = c)
    }
}

function Fn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function bf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Fu(e) {
    if (Fn(e) !== e) throw Error(M(188))
}

function y0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Fn(e), t === null) throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return Fu(i), e;
                if (s === r) return Fu(i), t;
                s = s.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, l = i.child; l;) {
                if (l === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (l === r) {
                    o = !0, r = i, n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l;) {
                    if (l === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (l === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t
}

function Tf(e) {
    return e = y0(e), e !== null ? _f(e) : null
}

function _f(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = _f(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Af = nt.unstable_scheduleCallback,
    Ou = nt.unstable_cancelCallback,
    v0 = nt.unstable_shouldYield,
    x0 = nt.unstable_requestPaint,
    xe = nt.unstable_now,
    w0 = nt.unstable_getCurrentPriorityLevel,
    wl = nt.unstable_ImmediatePriority,
    Mf = nt.unstable_UserBlockingPriority,
    ps = nt.unstable_NormalPriority,
    S0 = nt.unstable_LowPriority,
    Rf = nt.unstable_IdlePriority,
    Hs = null,
    Pt = null;

function j0(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function") try {
        Pt.onCommitFiberRoot(Hs, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : C0,
    N0 = Math.log,
    k0 = Math.LN2;

function C0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (N0(e) / k0 | 0) | 0
}
var Ri = 64,
    Di = 4194304;

function Fr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = Fr(l) : (s &= o, s !== 0 && (r = Fr(s)))
    } else o = n & ~i, o !== 0 ? r = Fr(o) : s !== 0 && (r = Fr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - vt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function E0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function P0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - vt(s),
            l = 1 << o,
            u = i[o];
        u === -1 ? (!(l & n) || l & r) && (i[o] = E0(l, t)) : u <= t && (e.expiredLanes |= l), s &= ~l
    }
}

function wa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Df() {
    var e = Ri;
    return Ri <<= 1, !(Ri & 4194240) && (Ri = 64), e
}

function wo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Si(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n
}

function b0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - vt(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function Sl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - vt(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var te = 0;

function Lf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Vf, jl, If, Ff, Of, Sa = !1,
    Li = [],
    en = null,
    tn = null,
    nn = null,
    ri = new Map,
    ii = new Map,
    Qt = [],
    T0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function zu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            en = null;
            break;
        case "dragenter":
        case "dragleave":
            tn = null;
            break;
        case "mouseover":
        case "mouseout":
            nn = null;
            break;
        case "pointerover":
        case "pointerout":
            ri.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ii.delete(t.pointerId)
    }
}

function br(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = Ni(t), t !== null && jl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function _0(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return en = br(en, e, t, n, r, i), !0;
        case "dragenter":
            return tn = br(tn, e, t, n, r, i), !0;
        case "mouseover":
            return nn = br(nn, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return ri.set(s, br(ri.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, ii.set(s, br(ii.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function zf(e) {
    var t = Cn(e.target);
    if (t !== null) {
        var n = Fn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = bf(n), t !== null) {
                    e.blockedOn = t, Of(e.priority, function() {
                        If(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Zi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ja(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ga = r, n.target.dispatchEvent(r), ga = null
        } else return t = Ni(n), t !== null && jl(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Bu(e, t, n) {
    Zi(e) && n.delete(t)
}

function A0() {
    Sa = !1, en !== null && Zi(en) && (en = null), tn !== null && Zi(tn) && (tn = null), nn !== null && Zi(nn) && (nn = null), ri.forEach(Bu), ii.forEach(Bu)
}

function Tr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Sa || (Sa = !0, nt.unstable_scheduleCallback(nt.unstable_NormalPriority, A0)))
}

function si(e) {
    function t(i) {
        return Tr(i, e)
    }
    if (0 < Li.length) {
        Tr(Li[0], e);
        for (var n = 1; n < Li.length; n++) {
            var r = Li[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (en !== null && Tr(en, e), tn !== null && Tr(tn, e), nn !== null && Tr(nn, e), ri.forEach(t), ii.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null);) zf(n), n.blockedOn === null && Qt.shift()
}
var ur = Ht.ReactCurrentBatchConfig,
    gs = !0;

function M0(e, t, n, r) {
    var i = te,
        s = ur.transition;
    ur.transition = null;
    try {
        te = 1, Nl(e, t, n, r)
    } finally {
        te = i, ur.transition = s
    }
}

function R0(e, t, n, r) {
    var i = te,
        s = ur.transition;
    ur.transition = null;
    try {
        te = 4, Nl(e, t, n, r)
    } finally {
        te = i, ur.transition = s
    }
}

function Nl(e, t, n, r) {
    if (gs) {
        var i = ja(e, t, n, r);
        if (i === null) _o(e, t, r, ys, n), zu(e, r);
        else if (_0(i, e, t, n, r)) r.stopPropagation();
        else if (zu(e, r), t & 4 && -1 < T0.indexOf(e)) {
            for (; i !== null;) {
                var s = Ni(i);
                if (s !== null && Vf(s), s = ja(e, t, n, r), s === null && _o(e, t, r, ys, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else _o(e, t, r, null, n)
    }
}
var ys = null;

function ja(e, t, n, r) {
    if (ys = null, e = xl(r), e = Cn(e), e !== null)
        if (t = Fn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = bf(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ys = e, null
}

function Bf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (w0()) {
                case wl:
                    return 1;
                case Mf:
                    return 4;
                case ps:
                case S0:
                    return 16;
                case Rf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Xt = null,
    kl = null,
    es = null;

function Uf() {
    if (es) return es;
    var e, t = kl,
        n = t.length,
        r, i = "value" in Xt ? Xt.value : Xt.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return es = i.slice(e, 1 < r ? 1 - r : void 0)
}

function ts(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Vi() {
    return !0
}

function Uu() {
    return !1
}

function st(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Vi : Uu, this.isPropagationStopped = Uu, this
    }
    return ye(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vi)
        },
        persist: function() {},
        isPersistent: Vi
    }), t
}
var jr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Cl = st(jr),
    ji = ye({}, jr, {
        view: 0,
        detail: 0
    }),
    D0 = st(ji),
    So, jo, _r, qs = ye({}, ji, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: El,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== _r && (_r && e.type === "mousemove" ? (So = e.screenX - _r.screenX, jo = e.screenY - _r.screenY) : jo = So = 0, _r = e), So)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : jo
        }
    }),
    $u = st(qs),
    L0 = ye({}, qs, {
        dataTransfer: 0
    }),
    V0 = st(L0),
    I0 = ye({}, ji, {
        relatedTarget: 0
    }),
    No = st(I0),
    F0 = ye({}, jr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    O0 = st(F0),
    z0 = ye({}, jr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    B0 = st(z0),
    U0 = ye({}, jr, {
        data: 0
    }),
    Hu = st(U0),
    $0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    H0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    q0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function G0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = q0[e]) ? !!t[e] : !1
}

function El() {
    return G0
}
var W0 = ye({}, ji, {
        key: function(e) {
            if (e.key) {
                var t = $0[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = ts(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? H0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: El,
        charCode: function(e) {
            return e.type === "keypress" ? ts(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? ts(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    J0 = st(W0),
    K0 = ye({}, qs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    qu = st(K0),
    Q0 = ye({}, ji, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: El
    }),
    Y0 = st(Q0),
    X0 = ye({}, jr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Z0 = st(X0),
    eg = ye({}, qs, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    tg = st(eg),
    ng = [9, 13, 27, 32],
    Pl = Ot && "CompositionEvent" in window,
    $r = null;
Ot && "documentMode" in document && ($r = document.documentMode);
var rg = Ot && "TextEvent" in window && !$r,
    $f = Ot && (!Pl || $r && 8 < $r && 11 >= $r),
    Gu = " ",
    Wu = !1;

function Hf(e, t) {
    switch (e) {
        case "keyup":
            return ng.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function qf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Gn = !1;

function ig(e, t) {
    switch (e) {
        case "compositionend":
            return qf(t);
        case "keypress":
            return t.which !== 32 ? null : (Wu = !0, Gu);
        case "textInput":
            return e = t.data, e === Gu && Wu ? null : e;
        default:
            return null
    }
}

function sg(e, t) {
    if (Gn) return e === "compositionend" || !Pl && Hf(e, t) ? (e = Uf(), es = kl = Xt = null, Gn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return $f && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var og = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ju(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!og[e.type] : t === "textarea"
}

function Gf(e, t, n, r) {
    Nf(r), t = vs(t, "onChange"), 0 < t.length && (n = new Cl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Hr = null,
    oi = null;

function ag(e) {
    rm(e, 0)
}

function Gs(e) {
    var t = Kn(e);
    if (gf(t)) return e
}

function lg(e, t) {
    if (e === "change") return t
}
var Wf = !1;
if (Ot) {
    var ko;
    if (Ot) {
        var Co = "oninput" in document;
        if (!Co) {
            var Ku = document.createElement("div");
            Ku.setAttribute("oninput", "return;"), Co = typeof Ku.oninput == "function"
        }
        ko = Co
    } else ko = !1;
    Wf = ko && (!document.documentMode || 9 < document.documentMode)
}

function Qu() {
    Hr && (Hr.detachEvent("onpropertychange", Jf), oi = Hr = null)
}

function Jf(e) {
    if (e.propertyName === "value" && Gs(oi)) {
        var t = [];
        Gf(t, oi, e, xl(e)), Pf(ag, t)
    }
}

function ug(e, t, n) {
    e === "focusin" ? (Qu(), Hr = t, oi = n, Hr.attachEvent("onpropertychange", Jf)) : e === "focusout" && Qu()
}

function cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Gs(oi)
}

function dg(e, t) {
    if (e === "click") return Gs(t)
}

function fg(e, t) {
    if (e === "input" || e === "change") return Gs(t)
}

function mg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var wt = typeof Object.is == "function" ? Object.is : mg;

function ai(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ia.call(t, i) || !wt(e[i], t[i])) return !1
    }
    return !0
}

function Yu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Xu(e, t) {
    var n = Yu(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Yu(n)
    }
}

function Kf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Qf() {
    for (var e = window, t = ds(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ds(e.document)
    }
    return t
}

function bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function pg(e) {
    var t = Qf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Kf(n.ownerDocument.documentElement, n)) {
        if (r !== null && bl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Xu(n, s);
                var o = Xu(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var hg = Ot && "documentMode" in document && 11 >= document.documentMode,
    Wn = null,
    Na = null,
    qr = null,
    ka = !1;

function Zu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ka || Wn == null || Wn !== ds(r) || (r = Wn, "selectionStart" in r && bl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), qr && ai(qr, r) || (qr = r, r = vs(Na, "onSelect"), 0 < r.length && (t = new Cl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Wn)))
}

function Ii(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Jn = {
        animationend: Ii("Animation", "AnimationEnd"),
        animationiteration: Ii("Animation", "AnimationIteration"),
        animationstart: Ii("Animation", "AnimationStart"),
        transitionend: Ii("Transition", "TransitionEnd")
    },
    Eo = {},
    Yf = {};
Ot && (Yf = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);

function Ws(e) {
    if (Eo[e]) return Eo[e];
    if (!Jn[e]) return e;
    var t = Jn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Yf) return Eo[e] = t[n];
    return e
}
var Xf = Ws("animationend"),
    Zf = Ws("animationiteration"),
    em = Ws("animationstart"),
    tm = Ws("transitionend"),
    nm = new Map,
    ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function pn(e, t) {
    nm.set(e, t), In(t, [e])
}
for (var Po = 0; Po < ec.length; Po++) {
    var bo = ec[Po],
        gg = bo.toLowerCase(),
        yg = bo[0].toUpperCase() + bo.slice(1);
    pn(gg, "on" + yg)
}
pn(Xf, "onAnimationEnd");
pn(Zf, "onAnimationIteration");
pn(em, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(tm, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    vg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));

function tc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, g0(r, t, void 0, e), e.currentTarget = null
}

function rm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o],
                        u = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, u !== s && i.isPropagationStopped()) break e;
                    tc(i, l, c), s = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (l = r[o], u = l.instance, c = l.currentTarget, l = l.listener, u !== s && i.isPropagationStopped()) break e;
                        tc(i, l, c), s = u
                    }
        }
    }
    if (ms) throw e = xa, ms = !1, xa = null, e
}

function le(e, t) {
    var n = t[Ta];
    n === void 0 && (n = t[Ta] = new Set);
    var r = e + "__bubble";
    n.has(r) || (im(t, e, 2, !1), n.add(r))
}

function To(e, t, n) {
    var r = 0;
    t && (r |= 4), im(n, e, r, t)
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);

function li(e) {
    if (!e[Fi]) {
        e[Fi] = !0, df.forEach(function(n) {
            n !== "selectionchange" && (vg.has(n) || To(n, !1, e), To(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Fi] || (t[Fi] = !0, To("selectionchange", !1, t))
    }
}

function im(e, t, n, r) {
    switch (Bf(t)) {
        case 1:
            var i = M0;
            break;
        case 4:
            i = R0;
            break;
        default:
            i = Nl
    }
    n = i.bind(null, t, n, e), i = void 0, !va || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function _o(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
                    o = o.return
                }
            for (; l !== null;) {
                if (o = Cn(l), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = s = o;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Pf(function() {
        var c = s,
            d = xl(n),
            f = [];
        e: {
            var m = nm.get(e);
            if (m !== void 0) {
                var y = Cl,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (ts(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = J0;
                        break;
                    case "focusin":
                        w = "focus", y = No;
                        break;
                    case "focusout":
                        w = "blur", y = No;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = No;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = $u;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = V0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Y0;
                        break;
                    case Xf:
                    case Zf:
                    case em:
                        y = O0;
                        break;
                    case tm:
                        y = Z0;
                        break;
                    case "scroll":
                        y = D0;
                        break;
                    case "wheel":
                        y = tg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = B0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = qu
                }
                var j = (t & 4) !== 0,
                    T = !j && e === "scroll",
                    v = j ? m !== null ? m + "Capture" : null : m;
                j = [];
                for (var p = c, g; p !== null;) {
                    g = p;
                    var N = g.stateNode;
                    if (g.tag === 5 && N !== null && (g = N, v !== null && (N = ni(p, v), N != null && j.push(ui(p, N, g)))), T) break;
                    p = p.return
                }
                0 < j.length && (m = new y(m, w, null, n, d), f.push({
                    event: m,
                    listeners: j
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== ga && (w = n.relatedTarget || n.fromElement) && (Cn(w) || w[zt])) break e;
                if ((y || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? Cn(w) : null, w !== null && (T = Fn(w), w !== T || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
                    if (j = $u, N = "onMouseLeave", v = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (j = qu, N = "onPointerLeave", v = "onPointerEnter", p = "pointer"), T = y == null ? m : Kn(y), g = w == null ? m : Kn(w), m = new j(N, p + "leave", y, n, d), m.target = T, m.relatedTarget = g, N = null, Cn(d) === c && (j = new j(v, p + "enter", w, n, d), j.target = g, j.relatedTarget = T, N = j), T = N, y && w) t: {
                        for (j = y, v = w, p = 0, g = j; g; g = $n(g)) p++;
                        for (g = 0, N = v; N; N = $n(N)) g++;
                        for (; 0 < p - g;) j = $n(j),
                        p--;
                        for (; 0 < g - p;) v = $n(v),
                        g--;
                        for (; p--;) {
                            if (j === v || v !== null && j === v.alternate) break t;
                            j = $n(j), v = $n(v)
                        }
                        j = null
                    }
                    else j = null;
                    y !== null && nc(f, m, y, j, !1), w !== null && T !== null && nc(f, T, w, j, !0)
                }
            }
            e: {
                if (m = c ? Kn(c) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var P = lg;
                else if (Ju(m))
                    if (Wf) P = fg;
                    else {
                        P = cg;
                        var _ = ug
                    }
                else(y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (P = dg);
                if (P && (P = P(e, c))) {
                    Gf(f, P, n, d);
                    break e
                }
                _ && _(e, m, c),
                e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && da(m, "number", m.value)
            }
            switch (_ = c ? Kn(c) : window, e) {
                case "focusin":
                    (Ju(_) || _.contentEditable === "true") && (Wn = _, Na = c, qr = null);
                    break;
                case "focusout":
                    qr = Na = Wn = null;
                    break;
                case "mousedown":
                    ka = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ka = !1, Zu(f, n, d);
                    break;
                case "selectionchange":
                    if (hg) break;
                case "keydown":
                case "keyup":
                    Zu(f, n, d)
            }
            var E;
            if (Pl) e: {
                switch (e) {
                    case "compositionstart":
                        var h = "onCompositionStart";
                        break e;
                    case "compositionend":
                        h = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        h = "onCompositionUpdate";
                        break e
                }
                h = void 0
            }
            else Gn ? Hf(e, n) && (h = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (h = "onCompositionStart");h && ($f && n.locale !== "ko" && (Gn || h !== "onCompositionStart" ? h === "onCompositionEnd" && Gn && (E = Uf()) : (Xt = d, kl = "value" in Xt ? Xt.value : Xt.textContent, Gn = !0)), _ = vs(c, h), 0 < _.length && (h = new Hu(h, e, null, n, d), f.push({
                event: h,
                listeners: _
            }), E ? h.data = E : (E = qf(n), E !== null && (h.data = E)))),
            (E = rg ? ig(e, n) : sg(e, n)) && (c = vs(c, "onBeforeInput"), 0 < c.length && (d = new Hu("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: c
            }), d.data = E))
        }
        rm(f, t)
    })
}

function ui(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function vs(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = ni(e, n), s != null && r.unshift(ui(e, s, i)), s = ni(e, t), s != null && r.push(ui(e, s, i))), e = e.return
    }
    return r
}

function $n(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function nc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var l = n,
            u = l.alternate,
            c = l.stateNode;
        if (u !== null && u === r) break;
        l.tag === 5 && c !== null && (l = c, i ? (u = ni(n, s), u != null && o.unshift(ui(n, u, l))) : i || (u = ni(n, s), u != null && o.push(ui(n, u, l)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var xg = /\r\n?/g,
    wg = /\u0000|\uFFFD/g;

function rc(e) {
    return (typeof e == "string" ? e : "" + e).replace(xg, `
`).replace(wg, "")
}

function Oi(e, t, n) {
    if (t = rc(t), rc(e) !== t && n) throw Error(M(425))
}

function xs() {}
var Ca = null,
    Ea = null;

function Pa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ba = typeof setTimeout == "function" ? setTimeout : void 0,
    Sg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ic = typeof Promise == "function" ? Promise : void 0,
    jg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ic < "u" ? function(e) {
        return ic.resolve(null).then(e).catch(Ng)
    } : ba;

function Ng(e) {
    setTimeout(function() {
        throw e
    })
}

function Ao(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), si(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    si(t)
}

function rn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function sc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Nr = Math.random().toString(36).slice(2),
    Et = "__reactFiber$" + Nr,
    ci = "__reactProps$" + Nr,
    zt = "__reactContainer$" + Nr,
    Ta = "__reactEvents$" + Nr,
    kg = "__reactListeners$" + Nr,
    Cg = "__reactHandles$" + Nr;

function Cn(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[zt] || n[Et]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = sc(e); e !== null;) {
                    if (n = e[Et]) return n;
                    e = sc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Ni(e) {
    return e = e[Et] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33))
}

function Js(e) {
    return e[ci] || null
}
var _a = [],
    Qn = -1;

function hn(e) {
    return {
        current: e
    }
}

function ue(e) {
    0 > Qn || (e.current = _a[Qn], _a[Qn] = null, Qn--)
}

function ie(e, t) {
    Qn++, _a[Qn] = e.current, e.current = t
}
var dn = {},
    ze = hn(dn),
    Ke = hn(!1),
    Mn = dn;

function mr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return dn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Qe(e) {
    return e = e.childContextTypes, e != null
}

function ws() {
    ue(Ke), ue(ze)
}

function oc(e, t, n) {
    if (ze.current !== dn) throw Error(M(168));
    ie(ze, t), ie(Ke, n)
}

function sm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(M(108, u0(e) || "Unknown", i));
    return ye({}, n, r)
}

function Ss(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, Mn = ze.current, ie(ze, e), ie(Ke, Ke.current), !0
}

function ac(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? (e = sm(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, ue(Ke), ue(ze), ie(ze, e)) : ue(Ke), ie(Ke, n)
}
var Mt = null,
    Ks = !1,
    Mo = !1;

function om(e) {
    Mt === null ? Mt = [e] : Mt.push(e)
}

function Eg(e) {
    Ks = !0, om(e)
}

function gn() {
    if (!Mo && Mt !== null) {
        Mo = !0;
        var e = 0,
            t = te;
        try {
            var n = Mt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Mt = null, Ks = !1
        } catch (i) {
            throw Mt !== null && (Mt = Mt.slice(e + 1)), Af(wl, gn), i
        } finally {
            te = t, Mo = !1
        }
    }
    return null
}
var Yn = [],
    Xn = 0,
    js = null,
    Ns = 0,
    lt = [],
    ut = 0,
    Rn = null,
    Rt = 1,
    Dt = "";

function wn(e, t) {
    Yn[Xn++] = Ns, Yn[Xn++] = js, js = e, Ns = t
}

function am(e, t, n) {
    lt[ut++] = Rt, lt[ut++] = Dt, lt[ut++] = Rn, Rn = e;
    var r = Rt;
    e = Dt;
    var i = 32 - vt(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - vt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Rt = 1 << 32 - vt(t) + i | n << i | r, Dt = s + e
    } else Rt = 1 << s | n << i | r, Dt = e
}

function Tl(e) {
    e.return !== null && (wn(e, 1), am(e, 1, 0))
}

function _l(e) {
    for (; e === js;) js = Yn[--Xn], Yn[Xn] = null, Ns = Yn[--Xn], Yn[Xn] = null;
    for (; e === Rn;) Rn = lt[--ut], lt[ut] = null, Dt = lt[--ut], lt[ut] = null, Rt = lt[--ut], lt[ut] = null
}
var tt = null,
    et = null,
    me = !1,
    yt = null;

function lm(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function lc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, et = rn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, et = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rn !== null ? {
                id: Rt,
                overflow: Dt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, et = null, !0) : !1;
        default:
            return !1
    }
}

function Aa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ma(e) {
    if (me) {
        var t = et;
        if (t) {
            var n = t;
            if (!lc(e, t)) {
                if (Aa(e)) throw Error(M(418));
                t = rn(n.nextSibling);
                var r = tt;
                t && lc(e, t) ? lm(r, n) : (e.flags = e.flags & -4097 | 2, me = !1, tt = e)
            }
        } else {
            if (Aa(e)) throw Error(M(418));
            e.flags = e.flags & -4097 | 2, me = !1, tt = e
        }
    }
}

function uc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    tt = e
}

function zi(e) {
    if (e !== tt) return !1;
    if (!me) return uc(e), me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Pa(e.type, e.memoizedProps)), t && (t = et)) {
        if (Aa(e)) throw um(), Error(M(418));
        for (; t;) lm(e, t), t = rn(t.nextSibling)
    }
    if (uc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            et = rn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            et = null
        }
    } else et = tt ? rn(e.stateNode.nextSibling) : null;
    return !0
}

function um() {
    for (var e = et; e;) e = rn(e.nextSibling)
}

function pr() {
    et = tt = null, me = !1
}

function Al(e) {
    yt === null ? yt = [e] : yt.push(e)
}
var Pg = Ht.ReactCurrentBatchConfig;

function Ar(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e))
    }
    return e
}

function Bi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function cc(e) {
    var t = e._init;
    return t(e._payload)
}

function cm(e) {
    function t(v, p) {
        if (e) {
            var g = v.deletions;
            g === null ? (v.deletions = [p], v.flags |= 16) : g.push(p)
        }
    }

    function n(v, p) {
        if (!e) return null;
        for (; p !== null;) t(v, p), p = p.sibling;
        return null
    }

    function r(v, p) {
        for (v = new Map; p !== null;) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
        return v
    }

    function i(v, p) {
        return v = ln(v, p), v.index = 0, v.sibling = null, v
    }

    function s(v, p, g) {
        return v.index = g, e ? (g = v.alternate, g !== null ? (g = g.index, g < p ? (v.flags |= 2, p) : g) : (v.flags |= 2, p)) : (v.flags |= 1048576, p)
    }

    function o(v) {
        return e && v.alternate === null && (v.flags |= 2), v
    }

    function l(v, p, g, N) {
        return p === null || p.tag !== 6 ? (p = Oo(g, v.mode, N), p.return = v, p) : (p = i(p, g), p.return = v, p)
    }

    function u(v, p, g, N) {
        var P = g.type;
        return P === qn ? d(v, p, g.props.children, N, g.key) : p !== null && (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Wt && cc(P) === p.type) ? (N = i(p, g.props), N.ref = Ar(v, p, g), N.return = v, N) : (N = ls(g.type, g.key, g.props, null, v.mode, N), N.ref = Ar(v, p, g), N.return = v, N)
    }

    function c(v, p, g, N) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = zo(g, v.mode, N), p.return = v, p) : (p = i(p, g.children || []), p.return = v, p)
    }

    function d(v, p, g, N, P) {
        return p === null || p.tag !== 7 ? (p = _n(g, v.mode, N, P), p.return = v, p) : (p = i(p, g), p.return = v, p)
    }

    function f(v, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Oo("" + p, v.mode, g), p.return = v, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case _i:
                    return g = ls(p.type, p.key, p.props, null, v.mode, g), g.ref = Ar(v, null, p), g.return = v, g;
                case Hn:
                    return p = zo(p, v.mode, g), p.return = v, p;
                case Wt:
                    var N = p._init;
                    return f(v, N(p._payload), g)
            }
            if (Ir(p) || Er(p)) return p = _n(p, v.mode, g, null), p.return = v, p;
            Bi(v, p)
        }
        return null
    }

    function m(v, p, g, N) {
        var P = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return P !== null ? null : l(v, p, "" + g, N);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case _i:
                    return g.key === P ? u(v, p, g, N) : null;
                case Hn:
                    return g.key === P ? c(v, p, g, N) : null;
                case Wt:
                    return P = g._init, m(v, p, P(g._payload), N)
            }
            if (Ir(g) || Er(g)) return P !== null ? null : d(v, p, g, N, null);
            Bi(v, g)
        }
        return null
    }

    function y(v, p, g, N, P) {
        if (typeof N == "string" && N !== "" || typeof N == "number") return v = v.get(g) || null, l(p, v, "" + N, P);
        if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
                case _i:
                    return v = v.get(N.key === null ? g : N.key) || null, u(p, v, N, P);
                case Hn:
                    return v = v.get(N.key === null ? g : N.key) || null, c(p, v, N, P);
                case Wt:
                    var _ = N._init;
                    return y(v, p, g, _(N._payload), P)
            }
            if (Ir(N) || Er(N)) return v = v.get(g) || null, d(p, v, N, P, null);
            Bi(p, N)
        }
        return null
    }

    function w(v, p, g, N) {
        for (var P = null, _ = null, E = p, h = p = 0, x = null; E !== null && h < g.length; h++) {
            E.index > h ? (x = E, E = null) : x = E.sibling;
            var k = m(v, E, g[h], N);
            if (k === null) {
                E === null && (E = x);
                break
            }
            e && E && k.alternate === null && t(v, E), p = s(k, p, h), _ === null ? P = k : _.sibling = k, _ = k, E = x
        }
        if (h === g.length) return n(v, E), me && wn(v, h), P;
        if (E === null) {
            for (; h < g.length; h++) E = f(v, g[h], N), E !== null && (p = s(E, p, h), _ === null ? P = E : _.sibling = E, _ = E);
            return me && wn(v, h), P
        }
        for (E = r(v, E); h < g.length; h++) x = y(E, v, h, g[h], N), x !== null && (e && x.alternate !== null && E.delete(x.key === null ? h : x.key), p = s(x, p, h), _ === null ? P = x : _.sibling = x, _ = x);
        return e && E.forEach(function(R) {
            return t(v, R)
        }), me && wn(v, h), P
    }

    function j(v, p, g, N) {
        var P = Er(g);
        if (typeof P != "function") throw Error(M(150));
        if (g = P.call(g), g == null) throw Error(M(151));
        for (var _ = P = null, E = p, h = p = 0, x = null, k = g.next(); E !== null && !k.done; h++, k = g.next()) {
            E.index > h ? (x = E, E = null) : x = E.sibling;
            var R = m(v, E, k.value, N);
            if (R === null) {
                E === null && (E = x);
                break
            }
            e && E && R.alternate === null && t(v, E), p = s(R, p, h), _ === null ? P = R : _.sibling = R, _ = R, E = x
        }
        if (k.done) return n(v, E), me && wn(v, h), P;
        if (E === null) {
            for (; !k.done; h++, k = g.next()) k = f(v, k.value, N), k !== null && (p = s(k, p, h), _ === null ? P = k : _.sibling = k, _ = k);
            return me && wn(v, h), P
        }
        for (E = r(v, E); !k.done; h++, k = g.next()) k = y(E, v, h, k.value, N), k !== null && (e && k.alternate !== null && E.delete(k.key === null ? h : k.key), p = s(k, p, h), _ === null ? P = k : _.sibling = k, _ = k);
        return e && E.forEach(function(D) {
            return t(v, D)
        }), me && wn(v, h), P
    }

    function T(v, p, g, N) {
        if (typeof g == "object" && g !== null && g.type === qn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case _i:
                    e: {
                        for (var P = g.key, _ = p; _ !== null;) {
                            if (_.key === P) {
                                if (P = g.type, P === qn) {
                                    if (_.tag === 7) {
                                        n(v, _.sibling), p = i(_, g.props.children), p.return = v, v = p;
                                        break e
                                    }
                                } else if (_.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Wt && cc(P) === _.type) {
                                    n(v, _.sibling), p = i(_, g.props), p.ref = Ar(v, _, g), p.return = v, v = p;
                                    break e
                                }
                                n(v, _);
                                break
                            } else t(v, _);
                            _ = _.sibling
                        }
                        g.type === qn ? (p = _n(g.props.children, v.mode, N, g.key), p.return = v, v = p) : (N = ls(g.type, g.key, g.props, null, v.mode, N), N.ref = Ar(v, p, g), N.return = v, v = N)
                    }
                    return o(v);
                case Hn:
                    e: {
                        for (_ = g.key; p !== null;) {
                            if (p.key === _)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(v, p.sibling), p = i(p, g.children || []), p.return = v, v = p;
                                    break e
                                } else {
                                    n(v, p);
                                    break
                                }
                            else t(v, p);
                            p = p.sibling
                        }
                        p = zo(g, v.mode, N),
                        p.return = v,
                        v = p
                    }
                    return o(v);
                case Wt:
                    return _ = g._init, T(v, p, _(g._payload), N)
            }
            if (Ir(g)) return w(v, p, g, N);
            if (Er(g)) return j(v, p, g, N);
            Bi(v, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(v, p.sibling), p = i(p, g), p.return = v, v = p) : (n(v, p), p = Oo(g, v.mode, N), p.return = v, v = p), o(v)) : n(v, p)
    }
    return T
}
var hr = cm(!0),
    dm = cm(!1),
    ks = hn(null),
    Cs = null,
    Zn = null,
    Ml = null;

function Rl() {
    Ml = Zn = Cs = null
}

function Dl(e) {
    var t = ks.current;
    ue(ks), e._currentValue = t
}

function Ra(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function cr(e, t) {
    Cs = e, Ml = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0), e.firstContext = null)
}

function ft(e) {
    var t = e._currentValue;
    if (Ml !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Zn === null) {
            if (Cs === null) throw Error(M(308));
            Zn = e, Cs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Zn = Zn.next = e;
    return t
}
var En = null;

function Ll(e) {
    En === null ? En = [e] : En.push(e)
}

function fm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Ll(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Bt(e, r)
}

function Bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Jt = !1;

function Vl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function mm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Q & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Bt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Ll(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Bt(e, n)
}

function ns(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Sl(e, n)
    }
}

function dc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Es(e, t, n, r) {
    var i = e.updateQueue;
    Jt = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l,
            c = u.next;
        u.next = null, o === null ? s = c : o.next = c, o = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = u))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0, d = c = u = null, l = s;
        do {
            var m = l.lane,
                y = l.eventTime;
            if ((r & m) === m) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e,
                        j = l;
                    switch (m = t, y = n, j.tag) {
                        case 1:
                            if (w = j.payload, typeof w == "function") {
                                f = w.call(y, f, m);
                                break e
                            }
                            f = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = j.payload, m = typeof w == "function" ? w.call(y, f, m) : w, m == null) break e;
                            f = ye({}, f, m);
                            break e;
                        case 2:
                            Jt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [l] : m.push(l))
            } else y = {
                eventTime: y,
                lane: m,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (c = d = y, u = f) : d = d.next = y, o |= m;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                m = l, l = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = f), i.baseState = u, i.firstBaseUpdate = c, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        Ln |= o, e.lanes = o, e.memoizedState = f
    }
}

function fc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
                i.call(r)
            }
        }
}
var ki = {},
    bt = hn(ki),
    di = hn(ki),
    fi = hn(ki);

function Pn(e) {
    if (e === ki) throw Error(M(174));
    return e
}

function Il(e, t) {
    switch (ie(fi, t), ie(di, e), ie(bt, ki), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ma(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ma(t, e)
    }
    ue(bt), ie(bt, t)
}

function gr() {
    ue(bt), ue(di), ue(fi)
}

function pm(e) {
    Pn(fi.current);
    var t = Pn(bt.current),
        n = ma(t, e.type);
    t !== n && (ie(di, e), ie(bt, n))
}

function Fl(e) {
    di.current === e && (ue(bt), ue(di))
}
var pe = hn(0);

function Ps(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ro = [];

function Ol() {
    for (var e = 0; e < Ro.length; e++) Ro[e]._workInProgressVersionPrimary = null;
    Ro.length = 0
}
var rs = Ht.ReactCurrentDispatcher,
    Do = Ht.ReactCurrentBatchConfig,
    Dn = 0,
    ge = null,
    Ce = null,
    Te = null,
    bs = !1,
    Gr = !1,
    mi = 0,
    bg = 0;

function Ve() {
    throw Error(M(321))
}

function zl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!wt(e[n], t[n])) return !1;
    return !0
}

function Bl(e, t, n, r, i, s) {
    if (Dn = s, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rs.current = e === null || e.memoizedState === null ? Mg : Rg, e = n(r, i), Gr) {
        s = 0;
        do {
            if (Gr = !1, mi = 0, 25 <= s) throw Error(M(301));
            s += 1, Te = Ce = null, t.updateQueue = null, rs.current = Dg, e = n(r, i)
        } while (Gr)
    }
    if (rs.current = Ts, t = Ce !== null && Ce.next !== null, Dn = 0, Te = Ce = ge = null, bs = !1, t) throw Error(M(300));
    return e
}

function Ul() {
    var e = mi !== 0;
    return mi = 0, e
}

function Ct() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Te === null ? ge.memoizedState = Te = e : Te = Te.next = e, Te
}

function mt() {
    if (Ce === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Ce.next;
    var t = Te === null ? ge.memoizedState : Te.next;
    if (t !== null) Te = t, Ce = e;
    else {
        if (e === null) throw Error(M(310));
        Ce = e, e = {
            memoizedState: Ce.memoizedState,
            baseState: Ce.baseState,
            baseQueue: Ce.baseQueue,
            queue: Ce.queue,
            next: null
        }, Te === null ? ge.memoizedState = Te = e : Te = Te.next = e
    }
    return Te
}

function pi(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Lo(e) {
    var t = mt(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = Ce,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var l = o = null,
            u = null,
            c = s;
        do {
            var d = c.lane;
            if ((Dn & d) === d) u !== null && (u = u.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = f, o = r) : u = u.next = f, ge.lanes |= d, Ln |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        u === null ? o = r : u.next = l, wt(r, t.memoizedState) || (Je = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, ge.lanes |= s, Ln |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Vo(e) {
    var t = mt(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        wt(s, t.memoizedState) || (Je = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function hm() {}

function gm(e, t) {
    var n = ge,
        r = mt(),
        i = t(),
        s = !wt(r.memoizedState, i);
    if (s && (r.memoizedState = i, Je = !0), r = r.queue, $l(xm.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Te !== null && Te.memoizedState.tag & 1) {
        if (n.flags |= 2048, hi(9, vm.bind(null, n, r, i, t), void 0, null), _e === null) throw Error(M(349));
        Dn & 30 || ym(n, t, i)
    }
    return i
}

function ym(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ge.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function vm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, wm(t) && Sm(e)
}

function xm(e, t, n) {
    return n(function() {
        wm(t) && Sm(e)
    })
}

function wm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !wt(e, n)
    } catch {
        return !0
    }
}

function Sm(e) {
    var t = Bt(e, 1);
    t !== null && xt(t, e, 1, -1)
}

function mc(e) {
    var t = Ct();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ag.bind(null, ge, e), [t.memoizedState, e]
}

function hi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ge.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function jm() {
    return mt().memoizedState
}

function is(e, t, n, r) {
    var i = Ct();
    ge.flags |= e, i.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Qs(e, t, n, r) {
    var i = mt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ce !== null) {
        var o = Ce.memoizedState;
        if (s = o.destroy, r !== null && zl(r, o.deps)) {
            i.memoizedState = hi(t, n, s, r);
            return
        }
    }
    ge.flags |= e, i.memoizedState = hi(1 | t, n, s, r)
}

function pc(e, t) {
    return is(8390656, 8, e, t)
}

function $l(e, t) {
    return Qs(2048, 8, e, t)
}

function Nm(e, t) {
    return Qs(4, 2, e, t)
}

function km(e, t) {
    return Qs(4, 4, e, t)
}

function Cm(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Em(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Qs(4, 4, Cm.bind(null, t, e), n)
}

function Hl() {}

function Pm(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function bm(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Tm(e, t, n) {
    return Dn & 21 ? (wt(n, t) || (n = Df(), ge.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Je = !0), e.memoizedState = n)
}

function Tg(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Do.transition;
    Do.transition = {};
    try {
        e(!1), t()
    } finally {
        te = n, Do.transition = r
    }
}

function _m() {
    return mt().memoizedState
}

function _g(e, t, n) {
    var r = an(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Am(e)) Mm(t, n);
    else if (n = fm(e, t, n, r), n !== null) {
        var i = $e();
        xt(n, e, r, i), Rm(n, t, r)
    }
}

function Ag(e, t, n) {
    var r = an(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Am(e)) Mm(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                l = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = l, wt(l, o)) {
                var u = t.interleaved;
                u === null ? (i.next = i, Ll(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = fm(e, t, i, r), n !== null && (i = $e(), xt(n, e, r, i), Rm(n, t, r))
    }
}

function Am(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge
}

function Mm(e, t) {
    Gr = bs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Rm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Sl(e, n)
    }
}
var Ts = {
        readContext: ft,
        useCallback: Ve,
        useContext: Ve,
        useEffect: Ve,
        useImperativeHandle: Ve,
        useInsertionEffect: Ve,
        useLayoutEffect: Ve,
        useMemo: Ve,
        useReducer: Ve,
        useRef: Ve,
        useState: Ve,
        useDebugValue: Ve,
        useDeferredValue: Ve,
        useTransition: Ve,
        useMutableSource: Ve,
        useSyncExternalStore: Ve,
        useId: Ve,
        unstable_isNewReconciler: !1
    },
    Mg = {
        readContext: ft,
        useCallback: function(e, t) {
            return Ct().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: ft,
        useEffect: pc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, is(4194308, 4, Cm.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return is(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return is(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ct();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ct();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = _g.bind(null, ge, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ct();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: mc,
        useDebugValue: Hl,
        useDeferredValue: function(e) {
            return Ct().memoizedState = e
        },
        useTransition: function() {
            var e = mc(!1),
                t = e[0];
            return e = Tg.bind(null, e[1]), Ct().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ge,
                i = Ct();
            if (me) {
                if (n === void 0) throw Error(M(407));
                n = n()
            } else {
                if (n = t(), _e === null) throw Error(M(349));
                Dn & 30 || ym(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, pc(xm.bind(null, r, s, e), [e]), r.flags |= 2048, hi(9, vm.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ct(),
                t = _e.identifierPrefix;
            if (me) {
                var n = Dt,
                    r = Rt;
                n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = bg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Rg = {
        readContext: ft,
        useCallback: Pm,
        useContext: ft,
        useEffect: $l,
        useImperativeHandle: Em,
        useInsertionEffect: Nm,
        useLayoutEffect: km,
        useMemo: bm,
        useReducer: Lo,
        useRef: jm,
        useState: function() {
            return Lo(pi)
        },
        useDebugValue: Hl,
        useDeferredValue: function(e) {
            var t = mt();
            return Tm(t, Ce.memoizedState, e)
        },
        useTransition: function() {
            var e = Lo(pi)[0],
                t = mt().memoizedState;
            return [e, t]
        },
        useMutableSource: hm,
        useSyncExternalStore: gm,
        useId: _m,
        unstable_isNewReconciler: !1
    },
    Dg = {
        readContext: ft,
        useCallback: Pm,
        useContext: ft,
        useEffect: $l,
        useImperativeHandle: Em,
        useInsertionEffect: Nm,
        useLayoutEffect: km,
        useMemo: bm,
        useReducer: Vo,
        useRef: jm,
        useState: function() {
            return Vo(pi)
        },
        useDebugValue: Hl,
        useDeferredValue: function(e) {
            var t = mt();
            return Ce === null ? t.memoizedState = e : Tm(t, Ce.memoizedState, e)
        },
        useTransition: function() {
            var e = Vo(pi)[0],
                t = mt().memoizedState;
            return [e, t]
        },
        useMutableSource: hm,
        useSyncExternalStore: gm,
        useId: _m,
        unstable_isNewReconciler: !1
    };

function ht(e, t) {
    if (e && e.defaultProps) {
        t = ye({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Da(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ys = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Fn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = $e(),
            i = an(e),
            s = Vt(r, i);
        s.payload = t, n != null && (s.callback = n), t = sn(e, s, i), t !== null && (xt(t, e, i, r), ns(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = $e(),
            i = an(e),
            s = Vt(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = sn(e, s, i), t !== null && (xt(t, e, i, r), ns(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = $e(),
            r = an(e),
            i = Vt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = sn(e, i, r), t !== null && (xt(t, e, r, n), ns(t, e, r))
    }
};

function hc(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ai(n, r) || !ai(i, s) : !0
}

function Dm(e, t, n) {
    var r = !1,
        i = dn,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = ft(s) : (i = Qe(t) ? Mn : ze.current, r = t.contextTypes, s = (r = r != null) ? mr(e, i) : dn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ys, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function gc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ys.enqueueReplaceState(t, t.state, null)
}

function La(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Vl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = ft(s) : (s = Qe(t) ? Mn : ze.current, i.context = mr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Da(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ys.enqueueReplaceState(i, i.state, null), Es(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function yr(e, t) {
    try {
        var n = "",
            r = t;
        do n += l0(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Io(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Va(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Lg = typeof WeakMap == "function" ? WeakMap : Map;

function Lm(e, t, n) {
    n = Vt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        As || (As = !0, Ga = r), Va(e, t)
    }, n
}

function Vm(e, t, n) {
    n = Vt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Va(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Va(e, t), typeof r != "function" && (on === null ? on = new Set([this]) : on.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function yc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Lg;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Kg.bind(null, e, t, n), t.then(e, e))
}

function vc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function xc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e)
}
var Vg = Ht.ReactCurrentOwner,
    Je = !1;

function Ue(e, t, n, r) {
    t.child = e === null ? dm(t, null, n, r) : hr(t, e.child, n, r)
}

function wc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return cr(t, i), r = Bl(e, t, n, r, s, i), n = Ul(), e !== null && !Je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ut(e, t, i)) : (me && n && Tl(t), t.flags |= 1, Ue(e, t, r, i), t.child)
}

function Sc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Xl(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Im(e, t, s, r, i)) : (e = ls(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ai, n(o, r) && e.ref === t.ref) return Ut(e, t, i)
    }
    return t.flags |= 1, e = ln(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function Im(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ai(s, r) && e.ref === t.ref)
            if (Je = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Je = !0);
            else return t.lanes = e.lanes, Ut(e, t, i)
    }
    return Ia(e, t, n, r, i)
}

function Fm(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ie(tr, Ze), Ze |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ie(tr, Ze), Ze |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, ie(tr, Ze), Ze |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ie(tr, Ze), Ze |= r;
    return Ue(e, t, i, n), t.child
}

function Om(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ia(e, t, n, r, i) {
    var s = Qe(n) ? Mn : ze.current;
    return s = mr(t, s), cr(t, i), n = Bl(e, t, n, r, s, i), r = Ul(), e !== null && !Je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ut(e, t, i)) : (me && r && Tl(t), t.flags |= 1, Ue(e, t, n, i), t.child)
}

function jc(e, t, n, r, i) {
    if (Qe(n)) {
        var s = !0;
        Ss(t)
    } else s = !1;
    if (cr(t, i), t.stateNode === null) ss(e, t), Dm(t, n, r), La(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = ft(c) : (c = Qe(n) ? Mn : ze.current, c = mr(t, c));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && gc(t, o, r, c), Jt = !1;
        var m = t.memoizedState;
        o.state = m, Es(t, r, o, i), u = t.memoizedState, l !== r || m !== u || Ke.current || Jt ? (typeof d == "function" && (Da(t, n, d, r), u = t.memoizedState), (l = Jt || hc(t, n, l, r, m, u, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = c, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, mm(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : ht(t.type, l), o.props = c, f = t.pendingProps, m = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = ft(u) : (u = Qe(n) ? Mn : ze.current, u = mr(t, u));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || m !== u) && gc(t, o, r, u), Jt = !1, m = t.memoizedState, o.state = m, Es(t, r, o, i);
        var w = t.memoizedState;
        l !== f || m !== w || Ke.current || Jt ? (typeof y == "function" && (Da(t, n, y, r), w = t.memoizedState), (c = Jt || hc(t, n, c, r, m, w, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = u, r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Fa(e, t, n, r, s, i)
}

function Fa(e, t, n, r, i, s) {
    Om(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && ac(t, n, !1), Ut(e, t, s);
    r = t.stateNode, Vg.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = hr(t, e.child, null, s), t.child = hr(t, null, l, s)) : Ue(e, t, l, s), t.memoizedState = r.state, i && ac(t, n, !0), t.child
}

function zm(e) {
    var t = e.stateNode;
    t.pendingContext ? oc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && oc(e, t.context, !1), Il(e, t.containerInfo)
}

function Nc(e, t, n, r, i) {
    return pr(), Al(i), t.flags |= 256, Ue(e, t, n, r), t.child
}
var Oa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function za(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Bm(e, t, n) {
    var r = t.pendingProps,
        i = pe.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ie(pe, i & 1), e === null) return Ma(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = eo(o, r, 0, null), e = _n(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = za(n), t.memoizedState = Oa, e) : ql(t, o));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Ig(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = ln(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = ln(l, s) : (s = _n(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? za(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Oa, r
    }
    return s = e.child, e = s.sibling, r = ln(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ql(e, t) {
    return t = eo({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ui(e, t, n, r) {
    return r !== null && Al(r), hr(t, e.child, null, n), e = ql(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Ig(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Io(Error(M(422))), Ui(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = eo({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = _n(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && hr(t, e.child, null, o), t.child.memoizedState = za(o), t.memoizedState = Oa, s);
    if (!(t.mode & 1)) return Ui(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, s = Error(M(419)), r = Io(s, r, void 0), Ui(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0, Je || l) {
        if (r = _e, r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Bt(e, i), xt(r, e, i, -1))
        }
        return Yl(), r = Io(Error(M(421))), Ui(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qg.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, et = rn(i.nextSibling), tt = t, me = !0, yt = null, e !== null && (lt[ut++] = Rt, lt[ut++] = Dt, lt[ut++] = Rn, Rt = e.id, Dt = e.overflow, Rn = t), t = ql(t, r.children), t.flags |= 4096, t)
}

function kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ra(e.return, t, n)
}

function Fo(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Um(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (Ue(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
            else if (e.tag === 19) kc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ie(pe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Ps(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Fo(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Ps(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Fo(t, !0, n, null, s);
            break;
        case "together":
            Fo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ss(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Fg(e, t, n) {
    switch (t.tag) {
        case 3:
            zm(t), pr();
            break;
        case 5:
            pm(t);
            break;
        case 1:
            Qe(t.type) && Ss(t);
            break;
        case 4:
            Il(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            ie(ks, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bm(e, t, n) : (ie(pe, pe.current & 1), e = Ut(e, t, n), e !== null ? e.sibling : null);
            ie(pe, pe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Um(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ie(pe, pe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Fm(e, t, n)
    }
    return Ut(e, t, n)
}
var $m, Ba, Hm, qm;
$m = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ba = function() {};
Hm = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Pn(bt.current);
        var s = null;
        switch (n) {
            case "input":
                i = ua(e, i), r = ua(e, r), s = [];
                break;
            case "select":
                i = ye({}, i, {
                    value: void 0
                }), r = ye({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = fa(e, i), r = fa(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xs)
        }
        pa(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ei.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (s || (s = []), s.push(c, n)), n = u;
            else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ei.hasOwnProperty(c) ? (u != null && c === "onScroll" && le("scroll", e), s || l === u || (s = [])) : (s = s || []).push(c, u))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
qm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Mr(e, t) {
    if (!me) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Og(e, t, n) {
    var r = t.pendingProps;
    switch (_l(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ie(t), null;
        case 1:
            return Qe(t.type) && ws(), Ie(t), null;
        case 3:
            return r = t.stateNode, gr(), ue(Ke), ue(ze), Ol(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (Ka(yt), yt = null))), Ba(e, t), Ie(t), null;
        case 5:
            Fl(t);
            var i = Pn(fi.current);
            if (n = t.type, e !== null && t.stateNode != null) Hm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return Ie(t), null
                }
                if (e = Pn(bt.current), zi(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[Et] = t, r[ci] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            le("cancel", r), le("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            le("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Or.length; i++) le(Or[i], r);
                            break;
                        case "source":
                            le("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            le("error", r), le("load", r);
                            break;
                        case "details":
                            le("toggle", r);
                            break;
                        case "input":
                            Ru(r, s), le("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, le("invalid", r);
                            break;
                        case "textarea":
                            Lu(r, s), le("invalid", r)
                    }
                    pa(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Oi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Oi(r.textContent, l, e), i = ["children", "" + l]) : ei.hasOwnProperty(o) && l != null && o === "onScroll" && le("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ai(r), Du(r, s, !0);
                            break;
                        case "textarea":
                            Ai(r), Vu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = xs)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Et] = t, e[ci] = r, $m(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = ha(n, r), n) {
                            case "dialog":
                                le("cancel", e), le("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                le("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Or.length; i++) le(Or[i], e);
                                i = r;
                                break;
                            case "source":
                                le("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                le("error", e), le("load", e), i = r;
                                break;
                            case "details":
                                le("toggle", e), i = r;
                                break;
                            case "input":
                                Ru(e, r), i = ua(e, r), le("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = ye({}, r, {
                                    value: void 0
                                }), le("invalid", e);
                                break;
                            case "textarea":
                                Lu(e, r), i = fa(e, r), le("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        pa(n, i),
                        l = i;
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var u = l[s];
                                s === "style" ? jf(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && wf(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ti(e, u) : typeof u == "number" && ti(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ei.hasOwnProperty(s) ? u != null && s === "onScroll" && le("scroll", e) : u != null && hl(e, s, u, o))
                            }
                        switch (n) {
                            case "input":
                                Ai(e), Du(e, r, !1);
                                break;
                            case "textarea":
                                Ai(e), Vu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + cn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? or(e, !!r.multiple, s, !1) : r.defaultValue != null && or(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = xs)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Ie(t), null;
        case 6:
            if (e && t.stateNode != null) qm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (n = Pn(fi.current), Pn(bt.current), zi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (s = r.nodeValue !== n) && (e = tt, e !== null)) switch (e.tag) {
                        case 3:
                            Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Oi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r
            }
            return Ie(t), null;
        case 13:
            if (ue(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (me && et !== null && t.mode & 1 && !(t.flags & 128)) um(), pr(), t.flags |= 98560, s = !1;
                else if (s = zi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(M(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(M(317));
                        s[Et] = t
                    } else pr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Ie(t), s = !1
                } else yt !== null && (Ka(yt), yt = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Ee === 0 && (Ee = 3) : Yl())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
        case 4:
            return gr(), Ba(e, t), e === null && li(t.stateNode.containerInfo), Ie(t), null;
        case 10:
            return Dl(t.type._context), Ie(t), null;
        case 17:
            return Qe(t.type) && ws(), Ie(t), null;
        case 19:
            if (ue(pe), s = t.memoizedState, s === null) return Ie(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) Mr(s, !1);
                else {
                    if (Ee !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Ps(e), o !== null) {
                                for (t.flags |= 128, Mr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ie(pe, pe.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && xe() > vr && (t.flags |= 128, r = !0, Mr(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Ps(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !me) return Ie(t), null
                    } else 2 * xe() - s.renderingStartTime > vr && n !== 1073741824 && (t.flags |= 128, r = !0, Mr(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = xe(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
        case 22:
        case 23:
            return Ql(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(M(156, t.tag))
}

function zg(e, t) {
    switch (_l(t), t.tag) {
        case 1:
            return Qe(t.type) && ws(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return gr(), ue(Ke), ue(ze), Ol(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Fl(t), null;
        case 13:
            if (ue(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(M(340));
                pr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ue(pe), null;
        case 4:
            return gr(), null;
        case 10:
            return Dl(t.type._context), null;
        case 22:
        case 23:
            return Ql(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var $i = !1,
    Oe = !1,
    Bg = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;

function er(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ve(e, t, r)
        } else n.current = null
}

function Ua(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var Cc = !1;

function Ug(e, t) {
    if (Ca = gs, e = Qf(), bl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    l = -1,
                    u = -1,
                    c = 0,
                    d = 0,
                    f = e,
                    m = null;
                t: for (;;) {
                    for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (u = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (y = f.firstChild) !== null;) m = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (m === n && ++c === i && (l = o), m === s && ++d === r && (u = o), (y = f.nextSibling) !== null) break;
                        f = m, m = f.parentNode
                    }
                    f = y
                }
                n = l === -1 || u === -1 ? null : {
                    start: l,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ea = {
            focusedElem: e,
            selectionRange: n
        }, gs = !1, F = t; F !== null;)
        if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
        else
            for (; F !== null;) {
                t = F;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var j = w.memoizedProps,
                                    T = w.memoizedState,
                                    v = t.stateNode,
                                    p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? j : ht(t.type, j), T);
                                v.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                    }
                } catch (N) {
                    ve(t, t.return, N)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, F = e;
                    break
                }
                F = t.return
            }
    return w = Cc, Cc = !1, w
}

function Wr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && Ua(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function Xs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function $a(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Gm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[ci], delete t[Ta], delete t[kg], delete t[Cg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Wm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ec(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Wm(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ha(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xs));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ha(e, t, n), e = e.sibling; e !== null;) Ha(e, t, n), e = e.sibling
}

function qa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (qa(e, t, n), e = e.sibling; e !== null;) qa(e, t, n), e = e.sibling
}
var Ae = null,
    gt = !1;

function qt(e, t, n) {
    for (n = n.child; n !== null;) Jm(e, t, n), n = n.sibling
}

function Jm(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
        Pt.onCommitFiberUnmount(Hs, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Oe || er(n, t);
        case 6:
            var r = Ae,
                i = gt;
            Ae = null, qt(e, t, n), Ae = r, gt = i, Ae !== null && (gt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
            break;
        case 18:
            Ae !== null && (gt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? Ao(e.parentNode, n) : e.nodeType === 1 && Ao(e, n), si(e)) : Ao(Ae, n.stateNode));
            break;
        case 4:
            r = Ae, i = gt, Ae = n.stateNode.containerInfo, gt = !0, qt(e, t, n), Ae = r, gt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ua(n, t, o), i = i.next
                } while (i !== r)
            }
            qt(e, t, n);
            break;
        case 1:
            if (!Oe && (er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                ve(n, t, l)
            }
            qt(e, t, n);
            break;
        case 21:
            qt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, qt(e, t, n), Oe = r) : qt(e, t, n);
            break;
        default:
            qt(e, t, n)
    }
}

function Pc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Bg), t.forEach(function(r) {
            var i = Yg.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Ae = l.stateNode, gt = !1;
                            break e;
                        case 3:
                            Ae = l.stateNode.containerInfo, gt = !0;
                            break e;
                        case 4:
                            Ae = l.stateNode.containerInfo, gt = !0;
                            break e
                    }
                    l = l.return
                }
                if (Ae === null) throw Error(M(160));
                Jm(s, o, i), Ae = null, gt = !1;
                var u = i.alternate;
                u !== null && (u.return = null), i.return = null
            } catch (c) {
                ve(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Km(t, e), t = t.sibling
}

function Km(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (pt(t, e), kt(e), r & 4) {
                try {
                    Wr(3, e, e.return), Xs(3, e)
                } catch (j) {
                    ve(e, e.return, j)
                }
                try {
                    Wr(5, e, e.return)
                } catch (j) {
                    ve(e, e.return, j)
                }
            }
            break;
        case 1:
            pt(t, e), kt(e), r & 512 && n !== null && er(n, n.return);
            break;
        case 5:
            if (pt(t, e), kt(e), r & 512 && n !== null && er(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    ti(i, "")
                } catch (j) {
                    ve(e, e.return, j)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    l === "input" && s.type === "radio" && s.name != null && yf(i, s), ha(l, o);
                    var c = ha(l, s);
                    for (o = 0; o < u.length; o += 2) {
                        var d = u[o],
                            f = u[o + 1];
                        d === "style" ? jf(i, f) : d === "dangerouslySetInnerHTML" ? wf(i, f) : d === "children" ? ti(i, f) : hl(i, d, f, c)
                    }
                    switch (l) {
                        case "input":
                            ca(i, s);
                            break;
                        case "textarea":
                            vf(i, s);
                            break;
                        case "select":
                            var m = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var y = s.value;
                            y != null ? or(i, !!s.multiple, y, !1) : m !== !!s.multiple && (s.defaultValue != null ? or(i, !!s.multiple, s.defaultValue, !0) : or(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[ci] = s
                } catch (j) {
                    ve(e, e.return, j)
                }
            }
            break;
        case 6:
            if (pt(t, e), kt(e), r & 4) {
                if (e.stateNode === null) throw Error(M(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (j) {
                    ve(e, e.return, j)
                }
            }
            break;
        case 3:
            if (pt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                si(t.containerInfo)
            } catch (j) {
                ve(e, e.return, j)
            }
            break;
        case 4:
            pt(t, e), kt(e);
            break;
        case 13:
            pt(t, e), kt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Jl = xe())), r & 4 && Pc(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (c = Oe) || d, pt(t, e), Oe = c) : pt(t, e), kt(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                    for (F = e, d = e.child; d !== null;) {
                        for (f = F = d; F !== null;) {
                            switch (m = F, y = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Wr(4, m, m.return);
                                    break;
                                case 1:
                                    er(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (j) {
                                            ve(r, n, j)
                                        }
                                    }
                                    break;
                                case 5:
                                    er(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Tc(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = m, F = y) : Tc(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                i = f.stateNode, c ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, u = f.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Sf("display", o))
                            } catch (j) {
                                ve(e, e.return, j)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (j) {
                            ve(e, e.return, j)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            pt(t, e), kt(e), r & 4 && Pc(e);
            break;
        case 21:
            break;
        default:
            pt(t, e), kt(e)
    }
}

function kt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Wm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (ti(i, ""), r.flags &= -33);
                    var s = Ec(e);
                    qa(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        l = Ec(e);
                    Ha(e, l, o);
                    break;
                default:
                    throw Error(M(161))
            }
        }
        catch (u) {
            ve(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function $g(e, t, n) {
    F = e, Qm(e)
}

function Qm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null;) {
        var i = F,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || $i;
            if (!o) {
                var l = i.alternate,
                    u = l !== null && l.memoizedState !== null || Oe;
                l = $i;
                var c = Oe;
                if ($i = o, (Oe = u) && !c)
                    for (F = i; F !== null;) o = F, u = o.child, o.tag === 22 && o.memoizedState !== null ? _c(i) : u !== null ? (u.return = o, F = u) : _c(i);
                for (; s !== null;) F = s, Qm(s), s = s.sibling;
                F = i, $i = l, Oe = c
            }
            bc(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, F = s) : bc(e)
    }
}

function bc(e) {
    for (; F !== null;) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || Xs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && fc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            fc(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && si(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                }
                Oe || t.flags & 512 && $a(t)
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function Tc(e) {
    for (; F !== null;) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function _c(e) {
    for (; F !== null;) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Xs(4, t)
                    } catch (u) {
                        ve(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ve(t, i, u)
                        }
                    }
                    var s = t.return;
                    try {
                        $a(t)
                    } catch (u) {
                        ve(t, s, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        $a(t)
                    } catch (u) {
                        ve(t, o, u)
                    }
            }
        } catch (u) {
            ve(t, t.return, u)
        }
        if (t === e) {
            F = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, F = l;
            break
        }
        F = t.return
    }
}
var Hg = Math.ceil,
    _s = Ht.ReactCurrentDispatcher,
    Gl = Ht.ReactCurrentOwner,
    dt = Ht.ReactCurrentBatchConfig,
    Q = 0,
    _e = null,
    Ne = null,
    Me = 0,
    Ze = 0,
    tr = hn(0),
    Ee = 0,
    gi = null,
    Ln = 0,
    Zs = 0,
    Wl = 0,
    Jr = null,
    We = null,
    Jl = 0,
    vr = 1 / 0,
    At = null,
    As = !1,
    Ga = null,
    on = null,
    Hi = !1,
    Zt = null,
    Ms = 0,
    Kr = 0,
    Wa = null,
    os = -1,
    as = 0;

function $e() {
    return Q & 6 ? xe() : os !== -1 ? os : os = xe()
}

function an(e) {
    return e.mode & 1 ? Q & 2 && Me !== 0 ? Me & -Me : Pg.transition !== null ? (as === 0 && (as = Df()), as) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bf(e.type)), e) : 1
}

function xt(e, t, n, r) {
    if (50 < Kr) throw Kr = 0, Wa = null, Error(M(185));
    Si(e, n, r), (!(Q & 2) || e !== _e) && (e === _e && (!(Q & 2) && (Zs |= n), Ee === 4 && Yt(e, Me)), Ye(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (vr = xe() + 500, Ks && gn()))
}

function Ye(e, t) {
    var n = e.callbackNode;
    P0(e, t);
    var r = hs(e, e === _e ? Me : 0);
    if (r === 0) n !== null && Ou(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ou(n), t === 1) e.tag === 0 ? Eg(Ac.bind(null, e)) : om(Ac.bind(null, e)), jg(function() {
            !(Q & 6) && gn()
        }), n = null;
        else {
            switch (Lf(r)) {
                case 1:
                    n = wl;
                    break;
                case 4:
                    n = Mf;
                    break;
                case 16:
                    n = ps;
                    break;
                case 536870912:
                    n = Rf;
                    break;
                default:
                    n = ps
            }
            n = ip(n, Ym.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ym(e, t) {
    if (os = -1, as = 0, Q & 6) throw Error(M(327));
    var n = e.callbackNode;
    if (dr() && e.callbackNode !== n) return null;
    var r = hs(e, e === _e ? Me : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Rs(e, r);
    else {
        t = r;
        var i = Q;
        Q |= 2;
        var s = Zm();
        (_e !== e || Me !== t) && (At = null, vr = xe() + 500, Tn(e, t));
        do try {
            Wg();
            break
        } catch (l) {
            Xm(e, l)
        }
        while (!0);
        Rl(), _s.current = s, Q = i, Ne !== null ? t = 0 : (_e = null, Me = 0, t = Ee)
    }
    if (t !== 0) {
        if (t === 2 && (i = wa(e), i !== 0 && (r = i, t = Ja(e, i))), t === 1) throw n = gi, Tn(e, 0), Yt(e, r), Ye(e, xe()), n;
        if (t === 6) Yt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !qg(i) && (t = Rs(e, r), t === 2 && (s = wa(e), s !== 0 && (r = s, t = Ja(e, s))), t === 1)) throw n = gi, Tn(e, 0), Yt(e, r), Ye(e, xe()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    Sn(e, We, At);
                    break;
                case 3:
                    if (Yt(e, r), (r & 130023424) === r && (t = Jl + 500 - xe(), 10 < t)) {
                        if (hs(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            $e(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = ba(Sn.bind(null, e, We, At), t);
                        break
                    }
                    Sn(e, We, At);
                    break;
                case 4:
                    if (Yt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - vt(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hg(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ba(Sn.bind(null, e, We, At), r);
                        break
                    }
                    Sn(e, We, At);
                    break;
                case 5:
                    Sn(e, We, At);
                    break;
                default:
                    throw Error(M(329))
            }
        }
    }
    return Ye(e, xe()), e.callbackNode === n ? Ym.bind(null, e) : null
}

function Ja(e, t) {
    var n = Jr;
    return e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256), e = Rs(e, t), e !== 2 && (t = We, We = n, t !== null && Ka(t)), e
}

function Ka(e) {
    We === null ? We = e : We.push.apply(We, e)
}

function qg(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!wt(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Yt(e, t) {
    for (t &= ~Wl, t &= ~Zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - vt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ac(e) {
    if (Q & 6) throw Error(M(327));
    dr();
    var t = hs(e, 0);
    if (!(t & 1)) return Ye(e, xe()), null;
    var n = Rs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = wa(e);
        r !== 0 && (t = r, n = Ja(e, r))
    }
    if (n === 1) throw n = gi, Tn(e, 0), Yt(e, t), Ye(e, xe()), n;
    if (n === 6) throw Error(M(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sn(e, We, At), Ye(e, xe()), null
}

function Kl(e, t) {
    var n = Q;
    Q |= 1;
    try {
        return e(t)
    } finally {
        Q = n, Q === 0 && (vr = xe() + 500, Ks && gn())
    }
}

function Vn(e) {
    Zt !== null && Zt.tag === 0 && !(Q & 6) && dr();
    var t = Q;
    Q |= 1;
    var n = dt.transition,
        r = te;
    try {
        if (dt.transition = null, te = 1, e) return e()
    } finally {
        te = r, dt.transition = n, Q = t, !(Q & 6) && gn()
    }
}

function Ql() {
    Ze = tr.current, ue(tr)
}

function Tn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Sg(n)), Ne !== null)
        for (n = Ne.return; n !== null;) {
            var r = n;
            switch (_l(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ws();
                    break;
                case 3:
                    gr(), ue(Ke), ue(ze), Ol();
                    break;
                case 5:
                    Fl(r);
                    break;
                case 4:
                    gr();
                    break;
                case 13:
                    ue(pe);
                    break;
                case 19:
                    ue(pe);
                    break;
                case 10:
                    Dl(r.type._context);
                    break;
                case 22:
                case 23:
                    Ql()
            }
            n = n.return
        }
    if (_e = e, Ne = e = ln(e.current, null), Me = Ze = t, Ee = 0, gi = null, Wl = Zs = Ln = 0, We = Jr = null, En !== null) {
        for (t = 0; t < En.length; t++)
            if (n = En[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            }
        En = null
    }
    return e
}

function Xm(e, t) {
    do {
        var n = Ne;
        try {
            if (Rl(), rs.current = Ts, bs) {
                for (var r = ge.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                bs = !1
            }
            if (Dn = 0, Te = Ce = ge = null, Gr = !1, mi = 0, Gl.current = null, n === null || n.return === null) {
                Ee = 1, gi = t, Ne = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    l = n,
                    u = t;
                if (t = Me, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        d = l,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = vc(o);
                    if (y !== null) {
                        y.flags &= -257, xc(y, o, l, s, t), y.mode & 1 && yc(s, c, t), t = y, u = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var j = new Set;
                            j.add(u), t.updateQueue = j
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            yc(s, c, t), Yl();
                            break e
                        }
                        u = Error(M(426))
                    }
                } else if (me && l.mode & 1) {
                    var T = vc(o);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256), xc(T, o, l, s, t), Al(yr(u, l));
                        break e
                    }
                }
                s = u = yr(u, l),
                Ee !== 4 && (Ee = 2),
                Jr === null ? Jr = [s] : Jr.push(s),
                s = o;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var v = Lm(s, u, t);
                            dc(s, v);
                            break e;
                        case 1:
                            l = u;
                            var p = s.type,
                                g = s.stateNode;
                            if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (on === null || !on.has(g)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var N = Vm(s, l, t);
                                dc(s, N);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            tp(n)
        } catch (P) {
            t = P, Ne === n && n !== null && (Ne = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Zm() {
    var e = _s.current;
    return _s.current = Ts, e === null ? Ts : e
}

function Yl() {
    (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), _e === null || !(Ln & 268435455) && !(Zs & 268435455) || Yt(_e, Me)
}

function Rs(e, t) {
    var n = Q;
    Q |= 2;
    var r = Zm();
    (_e !== e || Me !== t) && (At = null, Tn(e, t));
    do try {
        Gg();
        break
    } catch (i) {
        Xm(e, i)
    }
    while (!0);
    if (Rl(), Q = n, _s.current = r, Ne !== null) throw Error(M(261));
    return _e = null, Me = 0, Ee
}

function Gg() {
    for (; Ne !== null;) ep(Ne)
}

function Wg() {
    for (; Ne !== null && !v0();) ep(Ne)
}

function ep(e) {
    var t = rp(e.alternate, e, Ze);
    e.memoizedProps = e.pendingProps, t === null ? tp(e) : Ne = t, Gl.current = null
}

function tp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = zg(n, t), n !== null) {
                n.flags &= 32767, Ne = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Ee = 6, Ne = null;
                return
            }
        } else if (n = Og(n, t, Ze), n !== null) {
            Ne = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ne = t;
            return
        }
        Ne = t = e
    } while (t !== null);
    Ee === 0 && (Ee = 5)
}

function Sn(e, t, n) {
    var r = te,
        i = dt.transition;
    try {
        dt.transition = null, te = 1, Jg(e, t, n, r)
    } finally {
        dt.transition = i, te = r
    }
    return null
}

function Jg(e, t, n, r) {
    do dr(); while (Zt !== null);
    if (Q & 6) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (b0(e, s), e === _e && (Ne = _e = null, Me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hi || (Hi = !0, ip(ps, function() {
            return dr(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = dt.transition, dt.transition = null;
        var o = te;
        te = 1;
        var l = Q;
        Q |= 4, Gl.current = null, Ug(e, n), Km(n, e), pg(Ea), gs = !!Ca, Ea = Ca = null, e.current = n, $g(n), x0(), Q = l, te = o, dt.transition = s
    } else e.current = n;
    if (Hi && (Hi = !1, Zt = e, Ms = i), s = e.pendingLanes, s === 0 && (on = null), j0(n.stateNode), Ye(e, xe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (As) throw As = !1, e = Ga, Ga = null, e;
    return Ms & 1 && e.tag !== 0 && dr(), s = e.pendingLanes, s & 1 ? e === Wa ? Kr++ : (Kr = 0, Wa = e) : Kr = 0, gn(), null
}

function dr() {
    if (Zt !== null) {
        var e = Lf(Ms),
            t = dt.transition,
            n = te;
        try {
            if (dt.transition = null, te = 16 > e ? 16 : e, Zt === null) var r = !1;
            else {
                if (e = Zt, Zt = null, Ms = 0, Q & 6) throw Error(M(331));
                var i = Q;
                for (Q |= 4, F = e.current; F !== null;) {
                    var s = F,
                        o = s.child;
                    if (F.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (F = c; F !== null;) {
                                    var d = F;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Wr(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, F = f;
                                    else
                                        for (; F !== null;) {
                                            d = F;
                                            var m = d.sibling,
                                                y = d.return;
                                            if (Gm(d), d === c) {
                                                F = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y, F = m;
                                                break
                                            }
                                            F = y
                                        }
                                }
                            }
                            var w = s.alternate;
                            if (w !== null) {
                                var j = w.child;
                                if (j !== null) {
                                    w.child = null;
                                    do {
                                        var T = j.sibling;
                                        j.sibling = null, j = T
                                    } while (j !== null)
                                }
                            }
                            F = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, F = o;
                    else e: for (; F !== null;) {
                        if (s = F, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Wr(9, s, s.return)
                        }
                        var v = s.sibling;
                        if (v !== null) {
                            v.return = s.return, F = v;
                            break e
                        }
                        F = s.return
                    }
                }
                var p = e.current;
                for (F = p; F !== null;) {
                    o = F;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null) g.return = o, F = g;
                    else e: for (o = p; F !== null;) {
                        if (l = F, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xs(9, l)
                            }
                        } catch (P) {
                            ve(l, l.return, P)
                        }
                        if (l === o) {
                            F = null;
                            break e
                        }
                        var N = l.sibling;
                        if (N !== null) {
                            N.return = l.return, F = N;
                            break e
                        }
                        F = l.return
                    }
                }
                if (Q = i, gn(), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
                    Pt.onPostCommitFiberRoot(Hs, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            te = n, dt.transition = t
        }
    }
    return !1
}

function Mc(e, t, n) {
    t = yr(n, t), t = Lm(e, t, 1), e = sn(e, t, 1), t = $e(), e !== null && (Si(e, 1, t), Ye(e, t))
}

function ve(e, t, n) {
    if (e.tag === 3) Mc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Mc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
                    e = yr(n, e), e = Vm(t, e, 1), t = sn(t, e, 1), e = $e(), t !== null && (Si(t, 1, e), Ye(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Kg(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, _e === e && (Me & n) === n && (Ee === 4 || Ee === 3 && (Me & 130023424) === Me && 500 > xe() - Jl ? Tn(e, 0) : Wl |= n), Ye(e, t)
}

function np(e, t) {
    t === 0 && (e.mode & 1 ? (t = Di, Di <<= 1, !(Di & 130023424) && (Di = 4194304)) : t = 1);
    var n = $e();
    e = Bt(e, t), e !== null && (Si(e, t, n), Ye(e, n))
}

function Qg(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), np(e, n)
}

function Yg(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(t), np(e, n)
}
var rp;
rp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ke.current) Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Je = !1, Fg(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else Je = !1, me && t.flags & 1048576 && am(t, Ns, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ss(e, t), e = t.pendingProps;
            var i = mr(t, ze.current);
            cr(t, n), i = Bl(null, t, r, e, i, n);
            var s = Ul();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qe(r) ? (s = !0, Ss(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Vl(t), i.updater = Ys, t.stateNode = i, i._reactInternals = t, La(t, r, e, n), t = Fa(null, t, r, !0, s, n)) : (t.tag = 0, me && s && Tl(t), Ue(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ss(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Zg(r), e = ht(r, e), i) {
                    case 0:
                        t = Ia(null, t, r, e, n);
                        break e;
                    case 1:
                        t = jc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = wc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Sc(null, t, r, ht(r.type, e), n);
                        break e
                }
                throw Error(M(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), Ia(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), jc(e, t, r, i, n);
        case 3:
            e: {
                if (zm(t), e === null) throw Error(M(387));r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                mm(e, t),
                Es(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = yr(Error(M(423)), t), t = Nc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = yr(Error(M(424)), t), t = Nc(e, t, r, n, i);
                    break e
                } else
                    for (et = rn(t.stateNode.containerInfo.firstChild), tt = t, me = !0, yt = null, n = dm(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (pr(), r === i) {
                        t = Ut(e, t, n);
                        break e
                    }
                    Ue(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return pm(t), e === null && Ma(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, Pa(r, i) ? o = null : s !== null && Pa(r, s) && (t.flags |= 32), Om(e, t), Ue(e, t, o, n), t.child;
        case 6:
            return e === null && Ma(t), null;
        case 13:
            return Bm(e, t, n);
        case 4:
            return Il(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hr(t, null, r, n) : Ue(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), wc(e, t, r, i, n);
        case 7:
            return Ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, ie(ks, r._currentValue), r._currentValue = o, s !== null)
                    if (wt(s.value, o)) {
                        if (s.children === i.children && !Ke.current) {
                            t = Ut(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (s.tag === 1) {
                                            u = Vt(-1, n & -n), u.tag = 2;
                                            var c = s.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                            }
                                        }
                                        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Ra(s.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(M(341));
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ra(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                Ue(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, cr(t, n), i = ft(i), r = r(i), t.flags |= 1, Ue(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = ht(r, t.pendingProps), i = ht(r.type, i), Sc(e, t, r, i, n);
        case 15:
            return Im(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), ss(e, t), t.tag = 1, Qe(r) ? (e = !0, Ss(t)) : e = !1, cr(t, n), Dm(t, r, i), La(t, r, i, n), Fa(null, t, r, !0, e, n);
        case 19:
            return Um(e, t, n);
        case 22:
            return Fm(e, t, n)
    }
    throw Error(M(156, t.tag))
};

function ip(e, t) {
    return Af(e, t)
}

function Xg(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ct(e, t, n, r) {
    return new Xg(e, t, n, r)
}

function Xl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Zg(e) {
    if (typeof e == "function") return Xl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === yl) return 11;
        if (e === vl) return 14
    }
    return 2
}

function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ls(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") Xl(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case qn:
            return _n(n.children, i, s, t);
        case gl:
            o = 8, i |= 8;
            break;
        case sa:
            return e = ct(12, n, t, i | 2), e.elementType = sa, e.lanes = s, e;
        case oa:
            return e = ct(13, n, t, i), e.elementType = oa, e.lanes = s, e;
        case aa:
            return e = ct(19, n, t, i), e.elementType = aa, e.lanes = s, e;
        case pf:
            return eo(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case ff:
                    o = 10;
                    break e;
                case mf:
                    o = 9;
                    break e;
                case yl:
                    o = 11;
                    break e;
                case vl:
                    o = 14;
                    break e;
                case Wt:
                    o = 16, r = null;
                    break e
            }
            throw Error(M(130, e == null ? e : typeof e, ""))
    }
    return t = ct(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function _n(e, t, n, r) {
    return e = ct(7, e, r, t), e.lanes = n, e
}

function eo(e, t, n, r) {
    return e = ct(22, e, r, t), e.elementType = pf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Oo(e, t, n) {
    return e = ct(6, e, null, t), e.lanes = n, e
}

function zo(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function ey(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wo(0), this.expirationTimes = wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Zl(e, t, n, r, i, s, o, l, u) {
    return e = new ey(e, t, n, l, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = ct(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Vl(s), e
}

function ty(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function sp(e) {
    if (!e) return dn;
    e = e._reactInternals;
    e: {
        if (Fn(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Qe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Qe(n)) return sm(e, n, t)
    }
    return t
}

function op(e, t, n, r, i, s, o, l, u) {
    return e = Zl(n, r, !0, e, i, s, o, l, u), e.context = sp(null), n = e.current, r = $e(), i = an(n), s = Vt(r, i), s.callback = t ? ? null, sn(n, s, i), e.current.lanes = i, Si(e, i, r), Ye(e, r), e
}

function to(e, t, n, r) {
    var i = t.current,
        s = $e(),
        o = an(i);
    return n = sp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vt(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sn(i, t, o), e !== null && (xt(e, i, o, s), ns(e, i, o)), o
}

function Ds(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Rc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function eu(e, t) {
    Rc(e, t), (e = e.alternate) && Rc(e, t)
}

function ny() {
    return null
}
var ap = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function tu(e) {
    this._internalRoot = e
}
no.prototype.render = tu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    to(e, t, null, null)
};
no.prototype.unmount = tu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vn(function() {
            to(null, e, null, null)
        }), t[zt] = null
    }
};

function no(e) {
    this._internalRoot = e
}
no.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ff();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
        Qt.splice(n, 0, e), n === 0 && zf(e)
    }
};

function nu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Dc() {}

function ry(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Ds(o);
                s.call(c)
            }
        }
        var o = op(t, r, e, 0, null, !1, !1, "", Dc);
        return e._reactRootContainer = o, e[zt] = o.current, li(e.nodeType === 8 ? e.parentNode : e), Vn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = Ds(u);
            l.call(c)
        }
    }
    var u = Zl(e, 0, !1, null, null, !1, !1, "", Dc);
    return e._reactRootContainer = u, e[zt] = u.current, li(e.nodeType === 8 ? e.parentNode : e), Vn(function() {
        to(t, u, n, r)
    }), u
}

function io(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var u = Ds(o);
                l.call(u)
            }
        }
        to(t, o, e, i)
    } else o = ry(n, t, e, i, r);
    return Ds(o)
}
Vf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Fr(t.pendingLanes);
                n !== 0 && (Sl(t, n | 1), Ye(t, xe()), !(Q & 6) && (vr = xe() + 500, gn()))
            }
            break;
        case 13:
            Vn(function() {
                var r = Bt(e, 1);
                if (r !== null) {
                    var i = $e();
                    xt(r, e, 1, i)
                }
            }), eu(e, 1)
    }
};
jl = function(e) {
    if (e.tag === 13) {
        var t = Bt(e, 134217728);
        if (t !== null) {
            var n = $e();
            xt(t, e, 134217728, n)
        }
        eu(e, 134217728)
    }
};
If = function(e) {
    if (e.tag === 13) {
        var t = an(e),
            n = Bt(e, t);
        if (n !== null) {
            var r = $e();
            xt(n, e, t, r)
        }
        eu(e, t)
    }
};
Ff = function() {
    return te
};
Of = function(e, t) {
    var n = te;
    try {
        return te = e, t()
    } finally {
        te = n
    }
};
ya = function(e, t, n) {
    switch (t) {
        case "input":
            if (ca(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Js(r);
                        if (!i) throw Error(M(90));
                        gf(r), ca(r, i)
                    }
                }
            }
            break;
        case "textarea":
            vf(e, n);
            break;
        case "select":
            t = n.value, t != null && or(e, !!n.multiple, t, !1)
    }
};
Cf = Kl;
Ef = Vn;
var iy = {
        usingClientEntryPoint: !1,
        Events: [Ni, Kn, Js, Nf, kf, Kl]
    },
    Rr = {
        findFiberByHostInstance: Cn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    sy = {
        bundleType: Rr.bundleType,
        version: Rr.version,
        rendererPackageName: Rr.rendererPackageName,
        rendererConfig: Rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ht.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Tf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Rr.findFiberByHostInstance || ny,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qi.isDisabled && qi.supportsFiber) try {
        Hs = qi.inject(sy), Pt = qi
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy;
it.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!nu(t)) throw Error(M(200));
    return ty(e, t, null, n)
};
it.createRoot = function(e, t) {
    if (!nu(e)) throw Error(M(299));
    var n = !1,
        r = "",
        i = ap;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Zl(e, 1, !1, null, null, n, !1, r, i), e[zt] = t.current, li(e.nodeType === 8 ? e.parentNode : e), new tu(t)
};
it.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
    return e = Tf(t), e = e === null ? null : e.stateNode, e
};
it.flushSync = function(e) {
    return Vn(e)
};
it.hydrate = function(e, t, n) {
    if (!ro(t)) throw Error(M(200));
    return io(null, e, t, !0, n)
};
it.hydrateRoot = function(e, t, n) {
    if (!nu(e)) throw Error(M(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = ap;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = op(t, null, e, 1, n ? ? null, i, !1, s, o), e[zt] = t.current, li(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new no(t)
};
it.render = function(e, t, n) {
    if (!ro(t)) throw Error(M(200));
    return io(null, e, t, !1, n)
};
it.unmountComponentAtNode = function(e) {
    if (!ro(e)) throw Error(M(40));
    return e._reactRootContainer ? (Vn(function() {
        io(null, null, e, !1, function() {
            e._reactRootContainer = null, e[zt] = null
        })
    }), !0) : !1
};
it.unstable_batchedUpdates = Kl;
it.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ro(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return io(e, t, n, !1, r)
};
it.version = "18.3.1-next-f1338f8080-20240426";

function lp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp)
    } catch (e) {
        console.error(e)
    }
}
lp(), lf.exports = it;
var oy = lf.exports,
    up, Lc = oy;
up = Lc.createRoot, Lc.hydrateRoot;
const cp = A.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    so = A.createContext({}),
    oo = A.createContext(null),
    ao = typeof document < "u",
    ru = ao ? A.useLayoutEffect : A.useEffect,
    dp = A.createContext({
        strict: !1
    }),
    iu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    ay = "framerAppearId",
    fp = "data-" + iu(ay);

function ly(e, t, n, r) {
    const {
        visualElement: i
    } = A.useContext(so), s = A.useContext(dp), o = A.useContext(oo), l = A.useContext(cp).reducedMotion, u = A.useRef();
    r = r || s.renderer, !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const c = u.current;
    A.useInsertionEffect(() => {
        c && c.update(n, o)
    });
    const d = A.useRef(!!(n[fp] && !window.HandoffComplete));
    return ru(() => {
        c && (c.render(), d.current && c.animationState && c.animationState.animateChanges())
    }), A.useEffect(() => {
        c && (c.updateFeatures(), !d.current && c.animationState && c.animationState.animateChanges(), d.current && (d.current = !1, window.HandoffComplete = !0))
    }), c
}

function nr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function uy(e, t, n) {
    return A.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : nr(n) && (n.current = r))
    }, [t])
}

function yi(e) {
    return typeof e == "string" || Array.isArray(e)
}

function lo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const su = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ou = ["initial", ...su];

function uo(e) {
    return lo(e.animate) || ou.some(t => yi(e[t]))
}

function mp(e) {
    return !!(uo(e) || e.variants)
}

function cy(e, t) {
    if (uo(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || yi(n) ? n : void 0,
            animate: yi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function dy(e) {
    const {
        initial: t,
        animate: n
    } = cy(e, A.useContext(so));
    return A.useMemo(() => ({
        initial: t,
        animate: n
    }), [Vc(t), Vc(n)])
}

function Vc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ic = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    vi = {};
for (const e in Ic) vi[e] = {
    isEnabled: t => Ic[e].some(n => !!t[n])
};

function fy(e) {
    for (const t in e) vi[t] = { ...vi[t],
        ...e[t]
    }
}
const au = A.createContext({}),
    pp = A.createContext({}),
    my = Symbol.for("motionComponentSymbol");

function py({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && fy(e);

    function s(l, u) {
        let c;
        const d = { ...A.useContext(cp),
                ...l,
                layoutId: hy(l)
            },
            {
                isStatic: f
            } = d,
            m = dy(l),
            y = r(l, f);
        if (!f && ao) {
            m.visualElement = ly(i, y, d, t);
            const w = A.useContext(pp),
                j = A.useContext(dp).strict;
            m.visualElement && (c = m.visualElement.loadFeatures(d, j, e, w))
        }
        return A.createElement(so.Provider, {
            value: m
        }, c && m.visualElement ? A.createElement(c, {
            visualElement: m.visualElement,
            ...d
        }) : null, n(i, l, uy(y, m.visualElement, u), y, f, m.visualElement))
    }
    const o = A.forwardRef(s);
    return o[my] = i, o
}

function hy({
    layoutId: e
}) {
    const t = A.useContext(au).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function gy(e) {
    function t(r, i = {}) {
        return py(e(r, i))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    })
}
const yy = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function lu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(yy.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Ls = {};

function vy(e) {
    Object.assign(Ls, e)
}
const Ci = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    On = new Set(Ci);

function hp(e, {
    layout: t,
    layoutId: n
}) {
    return On.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ls[e] || e === "opacity")
}
const Xe = e => !!(e && e.getVelocity),
    xy = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    wy = Ci.length;

function Sy(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, i) {
    let s = "";
    for (let o = 0; o < wy; o++) {
        const l = Ci[o];
        if (e[l] !== void 0) {
            const u = xy[l] || l;
            s += `${u}(${e[l]}) `
        }
    }
    return t && !e.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(e, r ? "" : s) : n && r && (s = "none"), s
}
const gp = e => t => typeof t == "string" && t.startsWith(e),
    yp = gp("--"),
    Qa = gp("var(--"),
    jy = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    Ny = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    fn = (e, t, n) => Math.min(Math.max(n, e), t),
    zn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Qr = { ...zn,
        transform: e => fn(0, 1, e)
    },
    Gi = { ...zn,
        default: 1
    },
    Yr = e => Math.round(e * 1e5) / 1e5,
    co = /(-)?([\d]*\.?[\d])+/g,
    vp = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    ky = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function Ei(e) {
    return typeof e == "string"
}
const Pi = e => ({
        test: t => Ei(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Gt = Pi("deg"),
    Tt = Pi("%"),
    U = Pi("px"),
    Cy = Pi("vh"),
    Ey = Pi("vw"),
    Fc = { ...Tt,
        parse: e => Tt.parse(e) / 100,
        transform: e => Tt.transform(e * 100)
    },
    Oc = { ...zn,
        transform: Math.round
    },
    xp = {
        borderWidth: U,
        borderTopWidth: U,
        borderRightWidth: U,
        borderBottomWidth: U,
        borderLeftWidth: U,
        borderRadius: U,
        radius: U,
        borderTopLeftRadius: U,
        borderTopRightRadius: U,
        borderBottomRightRadius: U,
        borderBottomLeftRadius: U,
        width: U,
        maxWidth: U,
        height: U,
        maxHeight: U,
        size: U,
        top: U,
        right: U,
        bottom: U,
        left: U,
        padding: U,
        paddingTop: U,
        paddingRight: U,
        paddingBottom: U,
        paddingLeft: U,
        margin: U,
        marginTop: U,
        marginRight: U,
        marginBottom: U,
        marginLeft: U,
        rotate: Gt,
        rotateX: Gt,
        rotateY: Gt,
        rotateZ: Gt,
        scale: Gi,
        scaleX: Gi,
        scaleY: Gi,
        scaleZ: Gi,
        skew: Gt,
        skewX: Gt,
        skewY: Gt,
        distance: U,
        translateX: U,
        translateY: U,
        translateZ: U,
        x: U,
        y: U,
        z: U,
        perspective: U,
        transformPerspective: U,
        opacity: Qr,
        originX: Fc,
        originY: Fc,
        originZ: U,
        zIndex: Oc,
        fillOpacity: Qr,
        strokeOpacity: Qr,
        numOctaves: Oc
    };

function uu(e, t, n, r) {
    const {
        style: i,
        vars: s,
        transform: o,
        transformOrigin: l
    } = e;
    let u = !1,
        c = !1,
        d = !0;
    for (const f in t) {
        const m = t[f];
        if (yp(f)) {
            s[f] = m;
            continue
        }
        const y = xp[f],
            w = Ny(m, y);
        if (On.has(f)) {
            if (u = !0, o[f] = w, !d) continue;
            m !== (y.default || 0) && (d = !1)
        } else f.startsWith("origin") ? (c = !0, l[f] = w) : i[f] = w
    }
    if (t.transform || (u || r ? i.transform = Sy(e.transform, n, d, r) : i.transform && (i.transform = "none")), c) {
        const {
            originX: f = "50%",
            originY: m = "50%",
            originZ: y = 0
        } = l;
        i.transformOrigin = `${f} ${m} ${y}`
    }
}
const cu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function wp(e, t, n) {
    for (const r in t) !Xe(t[r]) && !hp(r, n) && (e[r] = t[r])
}

function Py({
    transformTemplate: e
}, t, n) {
    return A.useMemo(() => {
        const r = cu();
        return uu(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function by(e, t, n) {
    const r = e.style || {},
        i = {};
    return wp(i, r, e), Object.assign(i, Py(e, t, n)), e.transformValues ? e.transformValues(i) : i
}

function Ty(e, t, n) {
    const r = {},
        i = by(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r
}
const _y = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Vs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || _y.has(e)
}
let Sp = e => !Vs(e);

function Ay(e) {
    e && (Sp = t => t.startsWith("on") ? !Vs(t) : e(t))
}
try {
    Ay(require("@emotion/is-prop-valid").default)
} catch {}

function My(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (Sp(i) || n === !0 && Vs(i) || !t && !Vs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function zc(e, t, n) {
    return typeof e == "string" ? e : U.transform(t + n * e)
}

function Ry(e, t, n) {
    const r = zc(t, e.x, e.width),
        i = zc(n, e.y, e.height);
    return `${r} ${i}`
}
const Dy = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Ly = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Vy(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? Dy : Ly;
    e[s.offset] = U.transform(-r);
    const o = U.transform(t),
        l = U.transform(n);
    e[s.array] = `${o} ${l}`
}

function du(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: u = 0,
    ...c
}, d, f, m) {
    if (uu(e, c, d, m), f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: y,
        style: w,
        dimensions: j
    } = e;
    y.transform && (j && (w.transform = y.transform), delete y.transform), j && (i !== void 0 || s !== void 0 || w.transform) && (w.transformOrigin = Ry(j, i !== void 0 ? i : .5, s !== void 0 ? s : .5)), t !== void 0 && (y.x = t), n !== void 0 && (y.y = n), r !== void 0 && (y.scale = r), o !== void 0 && Vy(y, o, l, u, !1)
}
const jp = () => ({ ...cu(),
        attrs: {}
    }),
    fu = e => typeof e == "string" && e.toLowerCase() === "svg";

function Iy(e, t, n, r) {
    const i = A.useMemo(() => {
        const s = jp();
        return du(s, t, {
            enableHardwareAcceleration: !1
        }, fu(r), e.transformTemplate), { ...s.attrs,
            style: { ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        wp(s, e.style, e), i.style = { ...s,
            ...i.style
        }
    }
    return i
}

function Fy(e = !1) {
    return (n, r, i, {
        latestValues: s
    }, o) => {
        const u = (lu(n) ? Iy : Ty)(r, s, o, n),
            d = { ...My(r, typeof n == "string", e),
                ...u,
                ref: i
            },
            {
                children: f
            } = r,
            m = A.useMemo(() => Xe(f) ? f.get() : f, [f]);
        return A.createElement(n, { ...d,
            children: m
        })
    }
}

function Np(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s])
}
const kp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Cp(e, t, n, r) {
    Np(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(kp.has(i) ? i : iu(i), t.attrs[i])
}

function mu(e, t) {
    const {
        style: n
    } = e, r = {};
    for (const i in n)(Xe(n[i]) || t.style && Xe(t.style[i]) || hp(i, e)) && (r[i] = n[i]);
    return r
}

function Ep(e, t) {
    const n = mu(e, t);
    for (const r in e)
        if (Xe(e[r]) || Xe(t[r])) {
            const i = Ci.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}

function pu(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t
}

function Pp(e) {
    const t = A.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Is = e => Array.isArray(e),
    Oy = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    zy = e => Is(e) ? e[e.length - 1] || 0 : e;

function us(e) {
    const t = Xe(e) ? e.get() : e;
    return Oy(t) ? t.toValue() : t
}

function By({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, s) {
    const o = {
        latestValues: Uy(r, i, s, e),
        renderState: t()
    };
    return n && (o.mount = l => n(r, l, o)), o
}
const bp = e => (t, n) => {
    const r = A.useContext(so),
        i = A.useContext(oo),
        s = () => By(e, t, r, i);
    return n ? s() : Pp(s)
};

function Uy(e, t, n, r) {
    const i = {},
        s = r(e, {});
    for (const m in s) i[m] = us(s[m]);
    let {
        initial: o,
        animate: l
    } = e;
    const u = uo(e),
        c = mp(e);
    t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? l : o;
    return f && typeof f != "boolean" && !lo(f) && (Array.isArray(f) ? f : [f]).forEach(y => {
        const w = pu(e, y);
        if (!w) return;
        const {
            transitionEnd: j,
            transition: T,
            ...v
        } = w;
        for (const p in v) {
            let g = v[p];
            if (Array.isArray(g)) {
                const N = d ? g.length - 1 : 0;
                g = g[N]
            }
            g !== null && (i[p] = g)
        }
        for (const p in j) i[p] = j[p]
    }), i
}
const we = e => e;
class Bc {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function $y(e) {
    let t = new Bc,
        n = new Bc,
        r = 0,
        i = !1,
        s = !1;
    const o = new WeakSet,
        l = {
            schedule: (u, c = !1, d = !1) => {
                const f = d && i,
                    m = f ? t : n;
                return c && o.add(u), m.add(u) && f && i && (r = t.order.length), u
            },
            cancel: u => {
                n.remove(u), o.delete(u)
            },
            process: u => {
                if (i) {
                    s = !0;
                    return
                }
                if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                    for (let c = 0; c < r; c++) {
                        const d = t.order[c];
                        d(u), o.has(d) && (l.schedule(d), e())
                    }
                i = !1, s && (s = !1, l.process(u))
            }
        };
    return l
}
const Wi = ["prepare", "read", "update", "preRender", "render", "postRender"],
    Hy = 40;

function qy(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        s = Wi.reduce((f, m) => (f[m] = $y(() => n = !0), f), {}),
        o = f => s[f].process(i),
        l = () => {
            const f = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Hy), 1), i.timestamp = f, i.isProcessing = !0, Wi.forEach(o), i.isProcessing = !1, n && t && (r = !1, e(l))
        },
        u = () => {
            n = !0, r = !0, i.isProcessing || e(l)
        };
    return {
        schedule: Wi.reduce((f, m) => {
            const y = s[m];
            return f[m] = (w, j = !1, T = !1) => (n || u(), y.schedule(w, j, T)), f
        }, {}),
        cancel: f => Wi.forEach(m => s[m].cancel(f)),
        state: i,
        steps: s
    }
}
const {
    schedule: se,
    cancel: $t,
    state: Fe,
    steps: Bo
} = qy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : we, !0), Gy = {
    useVisualState: bp({
        scrapeMotionValuesFromProps: Ep,
        createRenderState: jp,
        onMount: (e, t, {
            renderState: n,
            latestValues: r
        }) => {
            se.read(() => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }), se.render(() => {
                du(n, r, {
                    enableHardwareAcceleration: !1
                }, fu(t.tagName), e.transformTemplate), Cp(t, n)
            })
        }
    })
}, Wy = {
    useVisualState: bp({
        scrapeMotionValuesFromProps: mu,
        createRenderState: cu
    })
};

function Jy(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...lu(e) ? Gy : Wy,
        preloadedFeatures: n,
        useRender: Fy(t),
        createVisualElement: r,
        Component: e
    }
}

function Lt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const Tp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function fo(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const Ky = e => t => Tp(t) && e(t, fo(t));

function It(e, t, n, r) {
    return Lt(e, t, Ky(n), r)
}
const Qy = (e, t) => n => t(e(n)),
    un = (...e) => e.reduce(Qy);

function _p(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const Uc = _p("dragHorizontal"),
    $c = _p("dragVertical");

function Ap(e) {
    let t = !1;
    if (e === "y") t = $c();
    else if (e === "x") t = Uc();
    else {
        const n = Uc(),
            r = $c();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function Mp() {
    const e = Ap(!0);
    return e ? (e(), !1) : !0
}
class yn {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function Hc(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        i = (s, o) => {
            if (s.pointerType === "touch" || Mp()) return;
            const l = e.getProps();
            e.animationState && l.whileHover && e.animationState.setActive("whileHover", t), l[r] && se.update(() => l[r](s, o))
        };
    return It(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class Yy extends yn {
    mount() {
        this.unmount = un(Hc(this.node, !0), Hc(this.node, !1))
    }
    unmount() {}
}
class Xy extends yn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = un(Lt(this.node.current, "focus", () => this.onFocus()), Lt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Rp = (e, t) => t ? e === t ? !0 : Rp(e, t.parentElement) : !1;

function Uo(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, fo(n))
}
class Zy extends yn {
    constructor() {
        super(...arguments), this.removeStartListeners = we, this.removeEndListeners = we, this.removeAccessibleListeners = we, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                s = It(window, "pointerup", (l, u) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: c,
                        onTapCancel: d,
                        globalTapTarget: f
                    } = this.node.getProps();
                    se.update(() => {
                        !f && !Rp(this.node.current, l.target) ? d && d(l, u) : c && c(l, u)
                    })
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                o = It(window, "pointercancel", (l, u) => this.cancelPress(l, u), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = un(s, o), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = s => {
                    if (s.key !== "Enter" || this.isPressing) return;
                    const o = l => {
                        l.key !== "Enter" || !this.checkPressEnd() || Uo("up", (u, c) => {
                            const {
                                onTap: d
                            } = this.node.getProps();
                            d && se.update(() => d(u, c))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Lt(this.node.current, "keyup", o), Uo("down", (l, u) => {
                        this.startPress(l, u)
                    })
                },
                n = Lt(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Uo("cancel", (s, o) => this.cancelPress(s, o))
                },
                i = Lt(this.node.current, "blur", r);
            this.removeAccessibleListeners = un(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && se.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Mp()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && se.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = It(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Lt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = un(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Ya = new WeakMap,
    $o = new WeakMap,
    ev = e => {
        const t = Ya.get(e.target);
        t && t(e)
    },
    tv = e => {
        e.forEach(ev)
    };

function nv({
    root: e,
    ...t
}) {
    const n = e || document;
    $o.has(n) || $o.set(n, {});
    const r = $o.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(tv, {
        root: e,
        ...t
    })), r[i]
}

function rv(e, t, n) {
    const r = nv(t);
    return Ya.set(e, n), r.observe(e), () => {
        Ya.delete(e), r.unobserve(e)
    }
}
const iv = {
    some: 0,
    all: 1
};
class sv extends yn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: s
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : iv[i]
        }, l = u => {
            const {
                isIntersecting: c
            } = u;
            if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView)) return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), m = c ? d : f;
            m && m(u)
        };
        return rv(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(ov(t, n)) && this.startObserver()
    }
    unmount() {}
}

function ov({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const av = {
    inView: {
        Feature: sv
    },
    tap: {
        Feature: Zy
    },
    focus: {
        Feature: Xy
    },
    hover: {
        Feature: Yy
    }
};

function Dp(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function lv(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function uv(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function mo(e, t, n) {
    const r = e.getProps();
    return pu(r, t, n !== void 0 ? n : r.custom, lv(e), uv(e))
}
let hu = we;
const An = e => e * 1e3,
    Ft = e => e / 1e3,
    cv = {
        current: !1
    },
    Lp = e => Array.isArray(e) && typeof e[0] == "number";

function Vp(e) {
    return !!(!e || typeof e == "string" && Ip[e] || Lp(e) || Array.isArray(e) && e.every(Vp))
}
const zr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Ip = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: zr([0, .65, .55, 1]),
        circOut: zr([.55, 0, 1, .45]),
        backIn: zr([.31, .01, .66, -.59]),
        backOut: zr([.33, 1.53, .69, .99])
    };

function Fp(e) {
    if (e) return Lp(e) ? zr(e) : Array.isArray(e) ? e.map(Fp) : Ip[e]
}

function dv(e, t, n, {
    delay: r = 0,
    duration: i,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l,
    times: u
} = {}) {
    const c = {
        [t]: n
    };
    u && (c.offset = u);
    const d = Fp(l);
    return Array.isArray(d) && (c.easing = d), e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}

function fv(e, {
    repeat: t,
    repeatType: n = "loop"
}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Op = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    mv = 1e-7,
    pv = 12;

function hv(e, t, n, r, i) {
    let s, o, l = 0;
    do o = t + (n - t) / 2, s = Op(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > mv && ++l < pv);
    return o
}

function bi(e, t, n, r) {
    if (e === t && n === r) return we;
    const i = s => hv(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Op(i(s), t, r)
}
const gv = bi(.42, 0, 1, 1),
    yv = bi(0, 0, .58, 1),
    zp = bi(.42, 0, .58, 1),
    vv = e => Array.isArray(e) && typeof e[0] != "number",
    Bp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Up = e => t => 1 - e(1 - t),
    gu = e => 1 - Math.sin(Math.acos(e)),
    $p = Up(gu),
    xv = Bp(gu),
    Hp = bi(.33, 1.53, .69, .99),
    yu = Up(Hp),
    wv = Bp(yu),
    Sv = e => (e *= 2) < 1 ? .5 * yu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    jv = {
        linear: we,
        easeIn: gv,
        easeInOut: zp,
        easeOut: yv,
        circIn: gu,
        circInOut: xv,
        circOut: $p,
        backIn: yu,
        backInOut: wv,
        backOut: Hp,
        anticipate: Sv
    },
    qc = e => {
        if (Array.isArray(e)) {
            hu(e.length === 4);
            const [t, n, r, i] = e;
            return bi(t, n, r, i)
        } else if (typeof e == "string") return jv[e];
        return e
    },
    vu = (e, t) => n => !!(Ei(n) && ky.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    qp = (e, t, n) => r => {
        if (!Ei(r)) return r;
        const [i, s, o, l] = r.match(co);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: l !== void 0 ? parseFloat(l) : 1
        }
    },
    Nv = e => fn(0, 255, e),
    Ho = { ...zn,
        transform: e => Math.round(Nv(e))
    },
    bn = {
        test: vu("rgb", "red"),
        parse: qp("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Ho.transform(e) + ", " + Ho.transform(t) + ", " + Ho.transform(n) + ", " + Yr(Qr.transform(r)) + ")"
    };

function kv(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Xa = {
        test: vu("#"),
        parse: kv,
        transform: bn.transform
    },
    rr = {
        test: vu("hsl", "hue"),
        parse: qp("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + Tt.transform(Yr(t)) + ", " + Tt.transform(Yr(n)) + ", " + Yr(Qr.transform(r)) + ")"
    },
    Be = {
        test: e => bn.test(e) || Xa.test(e) || rr.test(e),
        parse: e => bn.test(e) ? bn.parse(e) : rr.test(e) ? rr.parse(e) : Xa.parse(e),
        transform: e => Ei(e) ? e : e.hasOwnProperty("red") ? bn.transform(e) : rr.transform(e)
    },
    he = (e, t, n) => -n * e + n * t + e;

function qo(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Cv({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        s = 0,
        o = 0;
    if (!t) i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t,
            u = 2 * n - l;
        i = qo(u, l, e + 1 / 3), s = qo(u, l, e), o = qo(u, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const Go = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    },
    Ev = [Xa, bn, rr],
    Pv = e => Ev.find(t => t.test(e));

function Gc(e) {
    const t = Pv(e);
    let n = t.parse(e);
    return t === rr && (n = Cv(n)), n
}
const Gp = (e, t) => {
    const n = Gc(e),
        r = Gc(t),
        i = { ...n
        };
    return s => (i.red = Go(n.red, r.red, s), i.green = Go(n.green, r.green, s), i.blue = Go(n.blue, r.blue, s), i.alpha = he(n.alpha, r.alpha, s), bn.transform(i))
};

function bv(e) {
    var t, n;
    return isNaN(e) && Ei(e) && (((t = e.match(co)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(vp)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Wp = {
        regex: jy,
        countKey: "Vars",
        token: "${v}",
        parse: we
    },
    Jp = {
        regex: vp,
        countKey: "Colors",
        token: "${c}",
        parse: Be.parse
    },
    Kp = {
        regex: co,
        countKey: "Numbers",
        token: "${n}",
        parse: zn.parse
    };

function Wo(e, {
    regex: t,
    countKey: n,
    token: r,
    parse: i
}) {
    const s = e.tokenised.match(t);
    s && (e["num" + n] = s.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...s.map(i)))
}

function Fs(e) {
    const t = e.toString(),
        n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && Wo(n, Wp), Wo(n, Jp), Wo(n, Kp), n
}

function Qp(e) {
    return Fs(e).values
}

function Yp(e) {
    const {
        values: t,
        numColors: n,
        numVars: r,
        tokenised: i
    } = Fs(e), s = t.length;
    return o => {
        let l = i;
        for (let u = 0; u < s; u++) u < r ? l = l.replace(Wp.token, o[u]) : u < r + n ? l = l.replace(Jp.token, Be.transform(o[u])) : l = l.replace(Kp.token, Yr(o[u]));
        return l
    }
}
const Tv = e => typeof e == "number" ? 0 : e;

function _v(e) {
    const t = Qp(e);
    return Yp(e)(t.map(Tv))
}
const mn = {
        test: bv,
        parse: Qp,
        createTransformer: Yp,
        getAnimatableNone: _v
    },
    Xp = (e, t) => n => `${n>0?t:e}`;

function Zp(e, t) {
    return typeof e == "number" ? n => he(e, t, n) : Be.test(e) ? Gp(e, t) : e.startsWith("var(") ? Xp(e, t) : th(e, t)
}
const eh = (e, t) => {
        const n = [...e],
            r = n.length,
            i = e.map((s, o) => Zp(s, t[o]));
        return s => {
            for (let o = 0; o < r; o++) n[o] = i[o](s);
            return n
        }
    },
    Av = (e, t) => {
        const n = { ...e,
                ...t
            },
            r = {};
        for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Zp(e[i], t[i]));
        return i => {
            for (const s in r) n[s] = r[s](i);
            return n
        }
    },
    th = (e, t) => {
        const n = mn.createTransformer(t),
            r = Fs(e),
            i = Fs(t);
        return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? un(eh(r.values, i.values), n) : Xp(e, t)
    },
    xi = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Wc = (e, t) => n => he(e, t, n);

function Mv(e) {
    return typeof e == "number" ? Wc : typeof e == "string" ? Be.test(e) ? Gp : th : Array.isArray(e) ? eh : typeof e == "object" ? Av : Wc
}

function Rv(e, t, n) {
    const r = [],
        i = n || Mv(e[0]),
        s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const u = Array.isArray(t) ? t[o] || we : t;
            l = un(u, l)
        }
        r.push(l)
    }
    return r
}

function nh(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const s = e.length;
    if (hu(s === t.length), s === 1) return () => t[0];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const o = Rv(t, r, i),
        l = o.length,
        u = c => {
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(c < e[d + 1]); d++);
            const f = xi(e[d], e[d + 1], c);
            return o[d](f)
        };
    return n ? c => u(fn(e[0], e[s - 1], c)) : u
}

function Dv(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = xi(0, t, r);
        e.push(he(n, 1, i))
    }
}

function Lv(e) {
    const t = [0];
    return Dv(t, e.length - 1), t
}

function Vv(e, t) {
    return e.map(n => n * t)
}

function Iv(e, t) {
    return e.map(() => t || zp).splice(0, e.length - 1)
}

function Os({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = vv(r) ? r.map(qc) : qc(r),
        s = {
            done: !1,
            value: t[0]
        },
        o = Vv(n && n.length === t.length ? n : Lv(t), e),
        l = nh(o, t, {
            ease: Array.isArray(i) ? i : Iv(t, i)
        });
    return {
        calculatedDuration: e,
        next: u => (s.value = l(u), s.done = u >= e, s)
    }
}

function rh(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Fv = 5;

function ih(e, t, n) {
    const r = Math.max(t - Fv, 0);
    return rh(n - e(r), t - r)
}
const Jo = .001,
    Ov = .01,
    zv = 10,
    Bv = .05,
    Uv = 1;

function $v({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, s, o = 1 - t;
    o = fn(Bv, Uv, o), e = fn(Ov, zv, Ft(e)), o < 1 ? (i = c => {
        const d = c * o,
            f = d * e,
            m = d - n,
            y = Za(c, o),
            w = Math.exp(-f);
        return Jo - m / y * w
    }, s = c => {
        const f = c * o * e,
            m = f * n + n,
            y = Math.pow(o, 2) * Math.pow(c, 2) * e,
            w = Math.exp(-f),
            j = Za(Math.pow(c, 2), o);
        return (-i(c) + Jo > 0 ? -1 : 1) * ((m - y) * w) / j
    }) : (i = c => {
        const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
        return -Jo + d * f
    }, s = c => {
        const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
        return d * f
    });
    const l = 5 / e,
        u = qv(i, s, l);
    if (e = An(e), isNaN(u)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const c = Math.pow(u, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const Hv = 12;

function qv(e, t, n) {
    let r = n;
    for (let i = 1; i < Hv; i++) r = r - e(r) / t(r);
    return r
}

function Za(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Gv = ["duration", "bounce"],
    Wv = ["stiffness", "damping", "mass"];

function Jc(e, t) {
    return t.some(n => e[n] !== void 0)
}

function Jv(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Jc(e, Wv) && Jc(e, Gv)) {
        const n = $v(e);
        t = { ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function sh({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        s = e[e.length - 1],
        o = {
            done: !1,
            value: i
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: m
        } = Jv({ ...r,
            velocity: -Ft(r.velocity || 0)
        }),
        y = f || 0,
        w = u / (2 * Math.sqrt(l * c)),
        j = s - i,
        T = Ft(Math.sqrt(l / c)),
        v = Math.abs(j) < 5;
    n || (n = v ? .01 : 2), t || (t = v ? .005 : .5);
    let p;
    if (w < 1) {
        const g = Za(T, w);
        p = N => {
            const P = Math.exp(-w * T * N);
            return s - P * ((y + w * T * j) / g * Math.sin(g * N) + j * Math.cos(g * N))
        }
    } else if (w === 1) p = g => s - Math.exp(-T * g) * (j + (y + T * j) * g);
    else {
        const g = T * Math.sqrt(w * w - 1);
        p = N => {
            const P = Math.exp(-w * T * N),
                _ = Math.min(g * N, 300);
            return s - P * ((y + w * T * j) * Math.sinh(_) + g * j * Math.cosh(_)) / g
        }
    }
    return {
        calculatedDuration: m && d || null,
        next: g => {
            const N = p(g);
            if (m) o.done = g >= d;
            else {
                let P = y;
                g !== 0 && (w < 1 ? P = ih(p, g, N) : P = 0);
                const _ = Math.abs(P) <= n,
                    E = Math.abs(s - N) <= t;
                o.done = _ && E
            }
            return o.value = o.done ? s : N, o
        }
    }
}

function Kc({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: l,
    max: u,
    restDelta: c = .5,
    restSpeed: d
}) {
    const f = e[0],
        m = {
            done: !1,
            value: f
        },
        y = h => l !== void 0 && h < l || u !== void 0 && h > u,
        w = h => l === void 0 ? u : u === void 0 || Math.abs(l - h) < Math.abs(u - h) ? l : u;
    let j = n * t;
    const T = f + j,
        v = o === void 0 ? T : o(T);
    v !== T && (j = v - f);
    const p = h => -j * Math.exp(-h / r),
        g = h => v + p(h),
        N = h => {
            const x = p(h),
                k = g(h);
            m.done = Math.abs(x) <= c, m.value = m.done ? v : k
        };
    let P, _;
    const E = h => {
        y(m.value) && (P = h, _ = sh({
            keyframes: [m.value, w(m.value)],
            velocity: ih(g, h, m.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: d
        }))
    };
    return E(0), {
        calculatedDuration: null,
        next: h => {
            let x = !1;
            return !_ && P === void 0 && (x = !0, N(h), E(h)), P !== void 0 && h > P ? _.next(h - P) : (!x && N(h), m)
        }
    }
}
const Kv = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => se.update(t, !0),
            stop: () => $t(t),
            now: () => Fe.isProcessing ? Fe.timestamp : performance.now()
        }
    },
    Qc = 2e4;

function Yc(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Qc;) t += n, r = e.next(t);
    return t >= Qc ? 1 / 0 : t
}
const Qv = {
    decay: Kc,
    inertia: Kc,
    tween: Os,
    keyframes: Os,
    spring: sh
};

function zs({
    autoplay: e = !0,
    delay: t = 0,
    driver: n = Kv,
    keyframes: r,
    type: i = "keyframes",
    repeat: s = 0,
    repeatDelay: o = 0,
    repeatType: l = "loop",
    onPlay: u,
    onStop: c,
    onComplete: d,
    onUpdate: f,
    ...m
}) {
    let y = 1,
        w = !1,
        j, T;
    const v = () => {
        T = new Promise(b => {
            j = b
        })
    };
    v();
    let p;
    const g = Qv[i] || Os;
    let N;
    g !== Os && typeof r[0] != "number" && (N = nh([0, 100], r, {
        clamp: !1
    }), r = [0, 100]);
    const P = g({ ...m,
        keyframes: r
    });
    let _;
    l === "mirror" && (_ = g({ ...m,
        keyframes: [...r].reverse(),
        velocity: -(m.velocity || 0)
    }));
    let E = "idle",
        h = null,
        x = null,
        k = null;
    P.calculatedDuration === null && s && (P.calculatedDuration = Yc(P));
    const {
        calculatedDuration: R
    } = P;
    let D = 1 / 0,
        z = 1 / 0;
    R !== null && (D = R + o, z = D * (s + 1) - o);
    let H = 0;
    const ce = b => {
            if (x === null) return;
            y > 0 && (x = Math.min(x, b)), y < 0 && (x = Math.min(b - z / y, x)), h !== null ? H = h : H = Math.round(b - x) * y;
            const V = H - t * (y >= 0 ? 1 : -1),
                O = y >= 0 ? V < 0 : V > z;
            H = Math.max(V, 0), E === "finished" && h === null && (H = z);
            let Y = H,
                X = P;
            if (s) {
                const K = Math.min(H, z) / D;
                let re = Math.floor(K),
                    $ = K % 1;
                !$ && K >= 1 && ($ = 1), $ === 1 && re--, re = Math.min(re, s + 1), !!(re % 2) && (l === "reverse" ? ($ = 1 - $, o && ($ -= o / D)) : l === "mirror" && (X = _)), Y = fn(0, 1, $) * D
            }
            const Z = O ? {
                done: !1,
                value: r[0]
            } : X.next(Y);
            N && (Z.value = N(Z.value));
            let {
                done: Se
            } = Z;
            !O && R !== null && (Se = y >= 0 ? H >= z : H <= 0);
            const q = h === null && (E === "finished" || E === "running" && Se);
            return f && f(Z.value), q && S(), Z
        },
        J = () => {
            p && p.stop(), p = void 0
        },
        B = () => {
            E = "idle", J(), j(), v(), x = k = null
        },
        S = () => {
            E = "finished", d && d(), J(), j()
        },
        C = () => {
            if (w) return;
            p || (p = n(ce));
            const b = p.now();
            u && u(), h !== null ? x = b - h : (!x || E === "finished") && (x = b), E === "finished" && v(), k = x, h = null, E = "running", p.start()
        };
    e && C();
    const I = {
        then(b, V) {
            return T.then(b, V)
        },
        get time() {
            return Ft(H)
        },
        set time(b) {
            b = An(b), H = b, h !== null || !p || y === 0 ? h = b : x = p.now() - b / y
        },
        get duration() {
            const b = P.calculatedDuration === null ? Yc(P) : P.calculatedDuration;
            return Ft(b)
        },
        get speed() {
            return y
        },
        set speed(b) {
            b === y || !p || (y = b, I.time = Ft(H))
        },
        get state() {
            return E
        },
        play: C,
        pause: () => {
            E = "paused", h = H
        },
        stop: () => {
            w = !0, E !== "idle" && (E = "idle", c && c(), B())
        },
        cancel: () => {
            k !== null && ce(k), B()
        },
        complete: () => {
            E = "finished"
        },
        sample: b => (x = 0, ce(b))
    };
    return I
}

function Yv(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Xv = Yv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Zv = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    Ji = 10,
    ex = 2e4,
    tx = (e, t) => t.type === "spring" || e === "backgroundColor" || !Vp(t.ease);

function nx(e, t, {
    onUpdate: n,
    onComplete: r,
    ...i
}) {
    if (!(Xv() && Zv.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
    let o = !1,
        l, u, c = !1;
    const d = () => {
        u = new Promise(g => {
            l = g
        })
    };
    d();
    let {
        keyframes: f,
        duration: m = 300,
        ease: y,
        times: w
    } = i;
    if (tx(t, i)) {
        const g = zs({ ...i,
            repeat: 0,
            delay: 0
        });
        let N = {
            done: !1,
            value: f[0]
        };
        const P = [];
        let _ = 0;
        for (; !N.done && _ < ex;) N = g.sample(_), P.push(N.value), _ += Ji;
        w = void 0, f = P, m = _ - Ji, y = "linear"
    }
    const j = dv(e.owner.current, t, f, { ...i,
            duration: m,
            ease: y,
            times: w
        }),
        T = () => {
            c = !1, j.cancel()
        },
        v = () => {
            c = !0, se.update(T), l(), d()
        };
    return j.onfinish = () => {
        c || (e.set(fv(f, i)), r && r(), v())
    }, {
        then(g, N) {
            return u.then(g, N)
        },
        attachTimeline(g) {
            return j.timeline = g, j.onfinish = null, we
        },
        get time() {
            return Ft(j.currentTime || 0)
        },
        set time(g) {
            j.currentTime = An(g)
        },
        get speed() {
            return j.playbackRate
        },
        set speed(g) {
            j.playbackRate = g
        },
        get duration() {
            return Ft(m)
        },
        play: () => {
            o || (j.play(), $t(T))
        },
        pause: () => j.pause(),
        stop: () => {
            if (o = !0, j.playState === "idle") return;
            const {
                currentTime: g
            } = j;
            if (g) {
                const N = zs({ ...i,
                    autoplay: !1
                });
                e.setWithVelocity(N.sample(g - Ji).value, N.sample(g).value, Ji)
            }
            v()
        },
        complete: () => {
            c || j.finish()
        },
        cancel: v
    }
}

function rx({
    keyframes: e,
    delay: t,
    onUpdate: n,
    onComplete: r
}) {
    const i = () => (n && n(e[e.length - 1]), r && r(), {
        time: 0,
        speed: 1,
        duration: 0,
        play: we,
        pause: we,
        stop: we,
        then: s => (s(), Promise.resolve()),
        cancel: we,
        complete: we
    });
    return t ? zs({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const ix = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    sx = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    ox = {
        type: "keyframes",
        duration: .8
    },
    ax = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    lx = (e, {
        keyframes: t
    }) => t.length > 2 ? ox : On.has(e) ? e.startsWith("scale") ? sx(t[1]) : ix : ax,
    el = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (mn.test(t) || t === "0") && !t.startsWith("url(")),
    ux = new Set(["brightness", "contrast", "saturate", "opacity"]);

function cx(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(co) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = ux.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const dx = /([a-z-]*)\(.*?\)/g,
    tl = { ...mn,
        getAnimatableNone: e => {
            const t = e.match(dx);
            return t ? t.map(cx).join(" ") : e
        }
    },
    fx = { ...xp,
        color: Be,
        backgroundColor: Be,
        outlineColor: Be,
        fill: Be,
        stroke: Be,
        borderColor: Be,
        borderTopColor: Be,
        borderRightColor: Be,
        borderBottomColor: Be,
        borderLeftColor: Be,
        filter: tl,
        WebkitFilter: tl
    },
    xu = e => fx[e];

function oh(e, t) {
    let n = xu(e);
    return n !== tl && (n = mn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const ah = e => /^0[^.\s]+$/.test(e);

function mx(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || ah(e)
}

function px(e, t, n, r) {
    const i = el(t, n);
    let s;
    Array.isArray(n) ? s = [...n] : s = [null, n];
    const o = r.from !== void 0 ? r.from : e.get();
    let l;
    const u = [];
    for (let c = 0; c < s.length; c++) s[c] === null && (s[c] = c === 0 ? o : s[c - 1]), mx(s[c]) && u.push(c), typeof s[c] == "string" && s[c] !== "none" && s[c] !== "0" && (l = s[c]);
    if (i && u.length && l)
        for (let c = 0; c < u.length; c++) {
            const d = u[c];
            s[d] = oh(t, l)
        }
    return s
}

function hx({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: l,
    from: u,
    elapsed: c,
    ...d
}) {
    return !!Object.keys(d).length
}

function wu(e, t) {
    return e[t] || e.default || e
}
const gx = {
        skipAnimations: !1
    },
    Su = (e, t, n, r = {}) => i => {
        const s = wu(r, e) || {},
            o = s.delay || r.delay || 0;
        let {
            elapsed: l = 0
        } = r;
        l = l - An(o);
        const u = px(t, e, n, s),
            c = u[0],
            d = u[u.length - 1],
            f = el(e, c),
            m = el(e, d);
        let y = {
            keyframes: u,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -l,
            onUpdate: w => {
                t.set(w), s.onUpdate && s.onUpdate(w)
            },
            onComplete: () => {
                i(), s.onComplete && s.onComplete()
            }
        };
        if (hx(s) || (y = { ...y,
                ...lx(e, y)
            }), y.duration && (y.duration = An(y.duration)), y.repeatDelay && (y.repeatDelay = An(y.repeatDelay)), !f || !m || cv.current || s.type === !1 || gx.skipAnimations) return rx(y);
        if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
            const w = nx(t, e, y);
            if (w) return w
        }
        return zs(y)
    };

function Bs(e) {
    return !!(Xe(e) && e.add)
}
const lh = e => /^\-?\d*\.?\d+$/.test(e);

function ju(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Nu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class ku {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return ju(this.subscriptions, t), () => Nu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const yx = e => !isNaN(parseFloat(e));
class vx {
    constructor(t, n = {}) {
        this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            this.prev = this.current, this.current = r;
            const {
                delta: s,
                timestamp: o
            } = Fe;
            this.lastUpdated !== o && (this.timeDelta = s, this.lastUpdated = o, se.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => se.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: r
        }) => {
            r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = yx(this.current), this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new ku);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), se.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = t, this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? rh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function xr(e, t) {
    return new vx(e, t)
}
const uh = e => t => t.test(e),
    xx = {
        test: e => e === "auto",
        parse: e => e
    },
    ch = [zn, U, Tt, Gt, Ey, Cy, xx],
    Dr = e => ch.find(uh(e)),
    wx = [...ch, Be, mn],
    Sx = e => wx.find(uh(e));

function jx(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xr(n))
}

function Nx(e, t) {
    const n = mo(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...s
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    s = { ...s,
        ...r
    };
    for (const o in s) {
        const l = zy(s[o]);
        jx(e, o, l)
    }
}

function kx(e, t, n) {
    var r, i;
    const s = Object.keys(t).filter(l => !e.hasValue(l)),
        o = s.length;
    if (o)
        for (let l = 0; l < o; l++) {
            const u = s[l],
                c = t[u];
            let d = null;
            Array.isArray(c) && (d = c[0]), d === null && (d = (i = (r = n[u]) !== null && r !== void 0 ? r : e.readValue(u)) !== null && i !== void 0 ? i : t[u]), d != null && (typeof d == "string" && (lh(d) || ah(d)) ? d = parseFloat(d) : !Sx(d) && mn.test(c) && (d = oh(u, c)), e.addValue(u, xr(d, {
                owner: e
            })), n[u] === void 0 && (n[u] = d), d !== null && e.setBaseTarget(u, d))
        }
}

function Cx(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}

function Ex(e, t, n) {
    const r = {};
    for (const i in e) {
        const s = Cx(i, t);
        if (s !== void 0) r[i] = s;
        else {
            const o = n.getValue(i);
            o && (r[i] = o.get())
        }
    }
    return r
}

function Px({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function bx(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n) return !0
    } else return n !== t
}

function dh(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: o,
        ...l
    } = e.makeTargetAnimatable(t);
    const u = e.getValue("willChange");
    r && (s = r);
    const c = [],
        d = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const m = e.getValue(f),
            y = l[f];
        if (!m || y === void 0 || d && Px(d, f)) continue;
        const w = {
            delay: n,
            elapsed: 0,
            ...wu(s || {}, f)
        };
        if (window.HandoffAppearAnimations) {
            const v = e.getProps()[fp];
            if (v) {
                const p = window.HandoffAppearAnimations(v, f, m, se);
                p !== null && (w.elapsed = p, w.isHandoff = !0)
            }
        }
        let j = !w.isHandoff && !bx(m, y);
        if (w.type === "spring" && (m.getVelocity() || w.velocity) && (j = !1), m.animation && (j = !1), j) continue;
        m.start(Su(f, m, y, e.shouldReduceMotion && On.has(f) ? {
            type: !1
        } : w));
        const T = m.animation;
        Bs(u) && (u.add(f), T.then(() => u.remove(f))), c.push(T)
    }
    return o && Promise.all(c).then(() => {
        o && Nx(e, o)
    }), c
}

function nl(e, t, n = {}) {
    const r = mo(e, t, n.custom);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(dh(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: f
            } = i;
            return Tx(e, t, c + u, d, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = i;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [s, o] : [o, s];
        return u().then(() => c())
    } else return Promise.all([s(), o(n.delay)])
}

function Tx(e, t, n = 0, r = 0, i = 1, s) {
    const o = [],
        l = (e.variantChildren.size - 1) * r,
        u = i === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
    return Array.from(e.variantChildren).sort(_x).forEach((c, d) => {
        c.notify("AnimationStart", t), o.push(nl(c, t, { ...s,
            delay: n + u(d)
        }).then(() => c.notify("AnimationComplete", t)))
    }), Promise.all(o)
}

function _x(e, t) {
    return e.sortNodePosition(t)
}

function Ax(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => nl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = nl(e, t, n);
    else {
        const i = typeof t == "function" ? mo(e, t, n.custom) : t;
        r = Promise.all(dh(e, i, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const Mx = [...su].reverse(),
    Rx = su.length;

function Dx(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => Ax(e, n, r)))
}

function Lx(e) {
    let t = Dx(e);
    const n = Ix();
    let r = !0;
    const i = (u, c) => {
        const d = mo(e, c);
        if (d) {
            const {
                transition: f,
                transitionEnd: m,
                ...y
            } = d;
            u = { ...u,
                ...y,
                ...m
            }
        }
        return u
    };

    function s(u) {
        t = u(e)
    }

    function o(u, c) {
        const d = e.getProps(),
            f = e.getVariantContext(!0) || {},
            m = [],
            y = new Set;
        let w = {},
            j = 1 / 0;
        for (let v = 0; v < Rx; v++) {
            const p = Mx[v],
                g = n[p],
                N = d[p] !== void 0 ? d[p] : f[p],
                P = yi(N),
                _ = p === c ? g.isActive : null;
            _ === !1 && (j = v);
            let E = N === f[p] && N !== d[p] && P;
            if (E && r && e.manuallyAnimateOnMount && (E = !1), g.protectedKeys = { ...w
                }, !g.isActive && _ === null || !N && !g.prevProp || lo(N) || typeof N == "boolean") continue;
            let x = Vx(g.prevProp, N) || p === c && g.isActive && !E && P || v > j && P,
                k = !1;
            const R = Array.isArray(N) ? N : [N];
            let D = R.reduce(i, {});
            _ === !1 && (D = {});
            const {
                prevResolvedValues: z = {}
            } = g, H = { ...z,
                ...D
            }, ce = J => {
                x = !0, y.has(J) && (k = !0, y.delete(J)), g.needsAnimating[J] = !0
            };
            for (const J in H) {
                const B = D[J],
                    S = z[J];
                if (w.hasOwnProperty(J)) continue;
                let C = !1;
                Is(B) && Is(S) ? C = !Dp(B, S) : C = B !== S, C ? B !== void 0 ? ce(J) : y.add(J) : B !== void 0 && y.has(J) ? ce(J) : g.protectedKeys[J] = !0
            }
            g.prevProp = N, g.prevResolvedValues = D, g.isActive && (w = { ...w,
                ...D
            }), r && e.blockInitialAnimation && (x = !1), x && (!E || k) && m.push(...R.map(J => ({
                animation: J,
                options: {
                    type: p,
                    ...u
                }
            })))
        }
        if (y.size) {
            const v = {};
            y.forEach(p => {
                const g = e.getBaseTarget(p);
                g !== void 0 && (v[p] = g)
            }), m.push({
                animation: v
            })
        }
        let T = !!m.length;
        return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (T = !1), r = !1, T ? t(m) : Promise.resolve()
    }

    function l(u, c, d) {
        var f;
        if (n[u].isActive === c) return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(y => {
            var w;
            return (w = y.animationState) === null || w === void 0 ? void 0 : w.setActive(u, c)
        }), n[u].isActive = c;
        const m = o(d, u);
        for (const y in n) n[y].protectedKeys = {};
        return m
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n
    }
}

function Vx(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Dp(t, e) : !1
}

function vn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ix() {
    return {
        animate: vn(!0),
        whileInView: vn(),
        whileHover: vn(),
        whileTap: vn(),
        whileDrag: vn(),
        whileFocus: vn(),
        exit: vn()
    }
}
class Fx extends yn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = Lx(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), lo(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let Ox = 0;
class zx extends yn {
    constructor() {
        super(...arguments), this.id = Ox++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n,
            custom: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i) return;
        const s = this.node.animationState.setActive("exit", !t, {
            custom: r ? ? this.node.getProps().custom
        });
        n && !t && s.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Bx = {
        animation: {
            Feature: Fx
        },
        exit: {
            Feature: zx
        }
    },
    Xc = (e, t) => Math.abs(e - t);

function Ux(e, t) {
    const n = Xc(e.x, t.x),
        r = Xc(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class fh {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: s = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const f = Qo(this.lastMoveEventInfo, this.history),
                    m = this.startEvent !== null,
                    y = Ux(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!m && !y) return;
                const {
                    point: w
                } = f, {
                    timestamp: j
                } = Fe;
                this.history.push({ ...w,
                    timestamp: j
                });
                const {
                    onStart: T,
                    onMove: v
                } = this.handlers;
                m || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, f)
            }, this.handlePointerMove = (f, m) => {
                this.lastMoveEvent = f, this.lastMoveEventInfo = Ko(m, this.transformPagePoint), se.update(this.updatePoint, !0)
            }, this.handlePointerUp = (f, m) => {
                this.end();
                const {
                    onEnd: y,
                    onSessionEnd: w,
                    resumeAnimation: j
                } = this.handlers;
                if (this.dragSnapToOrigin && j && j(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const T = Qo(f.type === "pointercancel" ? this.lastMoveEventInfo : Ko(m, this.transformPagePoint), this.history);
                this.startEvent && y && y(f, T), w && w(f, T)
            }, !Tp(t)) return;
        this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const o = fo(t),
            l = Ko(o, this.transformPagePoint),
            {
                point: u
            } = l,
            {
                timestamp: c
            } = Fe;
        this.history = [{ ...u,
            timestamp: c
        }];
        const {
            onSessionStart: d
        } = n;
        d && d(t, Qo(l, this.history)), this.removeListeners = un(It(this.contextWindow, "pointermove", this.handlePointerMove), It(this.contextWindow, "pointerup", this.handlePointerUp), It(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), $t(this.updatePoint)
    }
}

function Ko(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Zc(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Qo({
    point: e
}, t) {
    return {
        point: e,
        delta: Zc(e, mh(t)),
        offset: Zc(e, $x(t)),
        velocity: Hx(t, .1)
    }
}

function $x(e) {
    return e[0]
}

function mh(e) {
    return e[e.length - 1]
}

function Hx(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = mh(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > An(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = Ft(i.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function rt(e) {
    return e.max - e.min
}

function rl(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function ed(e, t, n, r = .5) {
    e.origin = r, e.originPoint = he(t.min, t.max, e.origin), e.scale = rt(n) / rt(t), (rl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = he(n.min, n.max, e.origin) - e.originPoint, (rl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function Xr(e, t, n, r) {
    ed(e.x, t.x, n.x, r ? r.originX : void 0), ed(e.y, t.y, n.y, r ? r.originY : void 0)
}

function td(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + rt(t)
}

function qx(e, t, n) {
    td(e.x, t.x, n.x), td(e.y, t.y, n.y)
}

function nd(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + rt(t)
}

function Zr(e, t, n) {
    nd(e.x, t.x, n.x), nd(e.y, t.y, n.y)
}

function Gx(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? he(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)), e
}

function rd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function Wx(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: rd(e.x, n, i),
        y: rd(e.y, t, r)
    }
}

function id(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function Jx(e, t) {
    return {
        x: id(e.x, t.x),
        y: id(e.y, t.y)
    }
}

function Kx(e, t) {
    let n = .5;
    const r = rt(e),
        i = rt(t);
    return i > r ? n = xi(t.min, t.max - r, e.min) : r > i && (n = xi(e.min, e.max - i, t.min)), fn(0, 1, n)
}

function Qx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const il = .35;

function Yx(e = il) {
    return e === !1 ? e = 0 : e === !0 && (e = il), {
        x: sd(e, "left", "right"),
        y: sd(e, "top", "bottom")
    }
}

function sd(e, t, n) {
    return {
        min: od(e, t),
        max: od(e, n)
    }
}

function od(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const ad = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    ir = () => ({
        x: ad(),
        y: ad()
    }),
    ld = () => ({
        min: 0,
        max: 0
    }),
    je = () => ({
        x: ld(),
        y: ld()
    });

function at(e) {
    return [e("x"), e("y")]
}

function ph({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Xx({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Zx(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Yo(e) {
    return e === void 0 || e === 1
}

function sl({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Yo(e) || !Yo(t) || !Yo(n)
}

function jn(e) {
    return sl(e) || hh(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function hh(e) {
    return ud(e.x) || ud(e.y)
}

function ud(e) {
    return e && e !== "0%"
}

function Us(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function cd(e, t, n, r, i) {
    return i !== void 0 && (e = Us(e, i, r)), Us(e, n, r) + t
}

function ol(e, t = 0, n = 1, r, i) {
    e.min = cd(e.min, t, n, r, i), e.max = cd(e.max, t, n, r, i)
}

function gh(e, {
    x: t,
    y: n
}) {
    ol(e.x, t.translate, t.scale, t.originPoint), ol(e.y, n.translate, n.scale, n.originPoint)
}

function e1(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l], o = s.projectionDelta;
        const u = s.instance;
        u && u.style && u.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && sr(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, gh(e, o)), r && jn(s.latestValues) && sr(e, s.latestValues))
    }
    t.x = dd(t.x), t.y = dd(t.y)
}

function dd(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Kt(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function fd(e, t, [n, r, i]) {
    const s = t[i] !== void 0 ? t[i] : .5,
        o = he(e.min, e.max, s);
    ol(e, t[n], t[r], o, t.scale)
}
const t1 = ["x", "scaleX", "originX"],
    n1 = ["y", "scaleY", "originY"];

function sr(e, t) {
    fd(e.x, t, t1), fd(e.y, t, n1)
}

function yh(e, t) {
    return ph(Zx(e.getBoundingClientRect(), t))
}

function r1(e, t, n) {
    const r = yh(e, n),
        {
            scroll: i
        } = t;
    return i && (Kt(r.x, i.offset.x), Kt(r.y, i.offset.y)), r
}
const vh = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    i1 = new WeakMap;
class s1 {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = je(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = d => {
                const {
                    dragSnapToOrigin: f
                } = this.getProps();
                f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(fo(d, "page").point)
            },
            s = (d, f) => {
                const {
                    drag: m,
                    dragPropagation: y,
                    onDragStart: w
                } = this.getProps();
                if (m && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ap(m), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), at(T => {
                    let v = this.getAxisMotionValue(T).get() || 0;
                    if (Tt.test(v)) {
                        const {
                            projection: p
                        } = this.visualElement;
                        if (p && p.layout) {
                            const g = p.layout.layoutBox[T];
                            g && (v = rt(g) * (parseFloat(v) / 100))
                        }
                    }
                    this.originPoint[T] = v
                }), w && se.update(() => w(d, f), !1, !0);
                const {
                    animationState: j
                } = this.visualElement;
                j && j.setActive("whileDrag", !0)
            },
            o = (d, f) => {
                const {
                    dragPropagation: m,
                    dragDirectionLock: y,
                    onDirectionLock: w,
                    onDrag: j
                } = this.getProps();
                if (!m && !this.openGlobalLock) return;
                const {
                    offset: T
                } = f;
                if (y && this.currentDirection === null) {
                    this.currentDirection = o1(T), this.currentDirection !== null && w && w(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), j && j(d, f)
            },
            l = (d, f) => this.stop(d, f),
            u = () => at(d => {
                var f;
                return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
            }),
            {
                dragSnapToOrigin: c
            } = this.getProps();
        this.panSession = new fh(t, {
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: vh(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: s
        } = this.getProps();
        s && se.update(() => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Ki(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Gx(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
        n && nr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Wx(i.layoutBox, n) : this.constraints = !1, this.elastic = Yx(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && at(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = Qx(i.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !nr(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = r1(r, i.root, this.visualElement.getTransformPagePoint());
        let o = Jx(i.layout.layoutBox, s);
        if (n) {
            const l = n(Xx(o));
            this.hasMutatedConstraints = !!l, l && (o = ph(l))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: l
        } = this.getProps(), u = this.constraints || {}, c = at(d => {
            if (!Ki(d, n, this.currentDirection)) return;
            let f = u && u[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const m = i ? 200 : 1e6,
                y = i ? 40 : 1e7,
                w = {
                    type: "inertia",
                    velocity: r ? t[d] : 0,
                    bounceStiffness: m,
                    bounceDamping: y,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...f
                };
            return this.startAxisValueAnimation(d, w)
        });
        return Promise.all(c).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Su(t, r, 0, n))
    }
    stopAnimation() {
        at(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        at(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        at(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Ki(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: l
                } = i.layout.layoutBox[n];
                s.set(t[n] - he(o, l, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!nr(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        at(o => {
            const l = this.getAxisMotionValue(o);
            if (l) {
                const u = l.get();
                i[o] = Kx({
                    min: u,
                    max: u
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), at(o => {
            if (!Ki(o, t, null)) return;
            const l = this.getAxisMotionValue(o),
                {
                    min: u,
                    max: c
                } = this.constraints[o];
            l.set(he(u, c, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        i1.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = It(t, "pointerdown", u => {
                const {
                    drag: c,
                    dragListener: d = !0
                } = this.getProps();
                c && d && this.start(u)
            }),
            r = () => {
                const {
                    dragConstraints: u
                } = this.getProps();
                nr(u) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
        const o = Lt(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (at(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += u[d].translate, f.set(f.get() + u[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), s(), l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = il,
                dragMomentum: l = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}

function Ki(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function o1(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class a1 extends yn {
    constructor(t) {
        super(t), this.removeGroupControls = we, this.removeListeners = we, this.controls = new s1(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || we
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const md = e => (t, n) => {
    e && se.update(() => e(t, n))
};
class l1 extends yn {
    constructor() {
        super(...arguments), this.removePointerDownListener = we
    }
    onPointerDown(t) {
        this.session = new fh(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: vh(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: md(t),
            onStart: md(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session, i && se.update(() => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = It(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function u1() {
    const e = A.useContext(oo);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = A.useId();
    return A.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const cs = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function pd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Lr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (U.test(e)) e = parseFloat(e);
                else return e;
            const n = pd(e, t.target.x),
                r = pd(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    c1 = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = mn.parse(e);
            if (i.length > 5) return r;
            const s = mn.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                l = n.x.scale * t.x,
                u = n.y.scale * t.y;
            i[0 + o] /= l, i[1 + o] /= u;
            const c = he(l, u, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), s(i)
        }
    };
class d1 extends of .Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        vy(f1), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({ ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), cs.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: s
        } = this.props, o = r.projection;
        return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || se.postRender(() => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), queueMicrotask(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function xh(e) {
    const [t, n] = u1(), r = A.useContext(au);
    return of.createElement(d1, { ...e,
        layoutGroup: r,
        switchLayoutGroup: A.useContext(pp),
        isPresent: t,
        safeToRemove: n
    })
}
const f1 = {
        borderRadius: { ...Lr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Lr,
        borderTopRightRadius: Lr,
        borderBottomLeftRadius: Lr,
        borderBottomRightRadius: Lr,
        boxShadow: c1
    },
    wh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    m1 = wh.length,
    hd = e => typeof e == "string" ? parseFloat(e) : e,
    gd = e => typeof e == "number" || U.test(e);

function p1(e, t, n, r, i, s) {
    i ? (e.opacity = he(0, n.opacity !== void 0 ? n.opacity : 1, h1(r)), e.opacityExit = he(t.opacity !== void 0 ? t.opacity : 1, 0, g1(r))) : s && (e.opacity = he(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < m1; o++) {
        const l = `border${wh[o]}Radius`;
        let u = yd(t, l),
            c = yd(n, l);
        if (u === void 0 && c === void 0) continue;
        u || (u = 0), c || (c = 0), u === 0 || c === 0 || gd(u) === gd(c) ? (e[l] = Math.max(he(hd(u), hd(c), r), 0), (Tt.test(c) || Tt.test(u)) && (e[l] += "%")) : e[l] = c
    }(t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r))
}

function yd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const h1 = Sh(0, .5, $p),
    g1 = Sh(.5, .95, we);

function Sh(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(xi(e, t, r))
}

function vd(e, t) {
    e.min = t.min, e.max = t.max
}

function ot(e, t) {
    vd(e.x, t.x), vd(e.y, t.y)
}

function xd(e, t, n, r, i) {
    return e -= t, e = Us(e, 1 / n, r), i !== void 0 && (e = Us(e, 1 / i, r)), e
}

function y1(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
    if (Tt.test(t) && (t = parseFloat(t), t = he(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let l = he(s.min, s.max, r);
    e === s && (l -= t), e.min = xd(e.min, t, n, l, i), e.max = xd(e.max, t, n, l, i)
}

function wd(e, t, [n, r, i], s, o) {
    y1(e, t[n], t[r], t[i], t.scale, s, o)
}
const v1 = ["x", "scaleX", "originX"],
    x1 = ["y", "scaleY", "originY"];

function Sd(e, t, n, r) {
    wd(e.x, t, v1, n ? n.x : void 0, r ? r.x : void 0), wd(e.y, t, x1, n ? n.y : void 0, r ? r.y : void 0)
}

function jd(e) {
    return e.translate === 0 && e.scale === 1
}

function jh(e) {
    return jd(e.x) && jd(e.y)
}

function w1(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function Nh(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function Nd(e) {
    return rt(e.x) / rt(e.y)
}
class S1 {
    constructor() {
        this.members = []
    }
    add(t) {
        ju(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Nu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function kd(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        s = e.y.translate / t.y;
    if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            rotate: u,
            rotateX: c,
            rotateY: d
        } = n;
        u && (r += `rotate(${u}deg) `), c && (r += `rotateX(${c}deg) `), d && (r += `rotateY(${d}deg) `)
    }
    const o = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`), r || "none"
}
const j1 = (e, t) => e.depth - t.depth;
class N1 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        ju(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Nu(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(j1), this.isDirty = !1, this.children.forEach(t)
    }
}

function k1(e, t) {
    const n = performance.now(),
        r = ({
            timestamp: i
        }) => {
            const s = i - n;
            s >= t && ($t(r), e(s - t))
        };
    return se.read(r, !0), () => $t(r)
}

function C1(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function E1(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function P1(e, t, n) {
    const r = Xe(e) ? e : xr(e);
    return r.start(Su("", r, t, n)), r.animation
}
const Cd = ["", "X", "Y", "Z"],
    b1 = {
        visibility: "hidden"
    },
    Ed = 1e3;
let T1 = 0;
const Nn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function kh({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, l = t == null ? void 0 : t()) {
            this.id = T1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Nn.totalNodes = Nn.resolvedTargetDeltas = Nn.recalculatedProjection = 0, this.nodes.forEach(M1), this.nodes.forEach(I1), this.nodes.forEach(F1), this.nodes.forEach(R1), C1(Nn)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
            for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new N1)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new ku), this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const u = this.eventHandlers.get(o);
            u && u.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = E1(o), this.instance = o;
            const {
                layoutId: u,
                layout: c,
                visualElement: d
            } = this.options;
            if (d && !d.current && d.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (c || u) && (this.isLayoutDirty = !0), e) {
                let f;
                const m = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = k1(m, 250), cs.hasAnimatedSinceResize && (cs.hasAnimatedSinceResize = !1, this.nodes.forEach(bd))
                })
            }
            u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: m,
                hasRelativeTargetChanged: y,
                layout: w
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const j = this.options.transition || d.getDefaultTransition() || $1,
                    {
                        onLayoutAnimationStart: T,
                        onLayoutAnimationComplete: v
                    } = d.getProps(),
                    p = !this.targetLayout || !Nh(this.targetLayout, w) || y,
                    g = !m && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || m && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, g);
                    const N = { ...wu(j, "layout"),
                        onPlay: T,
                        onComplete: v
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0, N.type = !1), this.startAnimation(N)
                } else m || bd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, $t(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(O1), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: l,
                layout: u
            } = this.options;
            if (l === void 0 && !u) return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Pd);
                return
            }
            this.isUpdating || this.nodes.forEach(L1), this.isUpdating = !1, this.nodes.forEach(V1), this.nodes.forEach(_1), this.nodes.forEach(A1), this.clearAllSnapshots();
            const l = performance.now();
            Fe.delta = fn(0, 1e3 / 60, l - Fe.timestamp), Fe.timestamp = l, Fe.isProcessing = !0, Bo.update.process(Fe), Bo.preRender.process(Fe), Bo.render.process(Fe), Fe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(D1), this.sharedNodes.forEach(z1)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, se.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            se.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = je(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: l
            } = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1), l && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform,
                l = this.projectionDelta && !jh(this.projectionDelta),
                u = this.getTransformTemplate(),
                c = u ? u(this.latestValues, "") : void 0,
                d = c !== this.prevTransformTemplateValue;
            o && (l || jn(this.latestValues) || d) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const l = this.measurePageBox();
            let u = this.removeElementScroll(l);
            return o && (u = this.removeTransform(u)), H1(u), {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: u,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return je();
            const l = o.measureViewportBox(),
                {
                    scroll: u
                } = this.root;
            return u && (Kt(l.x, u.offset.x), Kt(l.y, u.offset.y)), l
        }
        removeElementScroll(o) {
            const l = je();
            ot(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: f
                    } = c;
                if (c !== this.root && d && f.layoutScroll) {
                    if (d.isRoot) {
                        ot(l, o);
                        const {
                            scroll: m
                        } = this.root;
                        m && (Kt(l.x, -m.offset.x), Kt(l.y, -m.offset.y))
                    }
                    Kt(l.x, d.offset.x), Kt(l.y, d.offset.y)
                }
            }
            return l
        }
        applyTransform(o, l = !1) {
            const u = je();
            ot(u, o);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && sr(u, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }), jn(d.latestValues) && sr(u, d.latestValues)
            }
            return jn(this.latestValues) && sr(u, this.latestValues), u
        }
        removeTransform(o) {
            const l = je();
            ot(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !jn(c.latestValues)) continue;
                sl(c.latestValues) && c.updateSnapshot();
                const d = je(),
                    f = c.measurePageBox();
                ot(d, f), Sd(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return jn(this.latestValues) && Sd(l, this.latestValues), l
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = { ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var l;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== u;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: f,
                layoutId: m
            } = this.options;
            if (!(!this.layout || !(f || m))) {
                if (this.resolvedRelativeTargetAt = Fe.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), Zr(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), ot(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = je(), this.targetWithTransforms = je()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), qx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ot(this.target, this.layout.layoutBox), gh(this.target, this.targetDelta)) : ot(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), Zr(this.relativeTargetOrigin, this.target, y.target), ot(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Nn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || sl(this.parent.latestValues) || hh(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead(),
                u = !!this.resumingFrom || this !== l;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Fe.timestamp && (c = !1), c) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f)) return;
            ot(this.layoutCorrected, this.layout.layoutBox);
            const m = this.treeScale.x,
                y = this.treeScale.y;
            e1(this.layoutCorrected, this.treeScale, this.path, u), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
            const {
                target: w
            } = l;
            if (!w) {
                this.projectionTransform && (this.projectionDelta = ir(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = ir(), this.projectionDeltaWithTransform = ir());
            const j = this.projectionTransform;
            Xr(this.projectionDelta, this.layoutCorrected, w, this.latestValues), this.projectionTransform = kd(this.projectionDelta, this.treeScale), (this.projectionTransform !== j || this.treeScale.x !== m || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Nn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, l = !1) {
            const u = this.snapshot,
                c = u ? u.latestValues : {},
                d = { ...this.latestValues
                },
                f = ir();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
            const m = je(),
                y = u ? u.source : void 0,
                w = this.layout ? this.layout.source : void 0,
                j = y !== w,
                T = this.getStack(),
                v = !T || T.members.length <= 1,
                p = !!(j && !v && this.options.crossfade === !0 && !this.path.some(U1));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = N => {
                const P = N / 1e3;
                Td(f.x, o.x, P), Td(f.y, o.y, P), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Zr(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), B1(this.relativeTarget, this.relativeTargetOrigin, m, P), g && w1(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = je()), ot(g, this.relativeTarget)), j && (this.animationValues = d, p1(d, c, this.latestValues, P, p, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ($t(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = se.update(() => {
                cs.hasAnimatedSinceResize = !0, this.currentAnimation = P1(0, Ed, { ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l)
                    },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ed), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: l,
                target: u,
                layout: c,
                latestValues: d
            } = o;
            if (!(!l || !u || !c)) {
                if (this !== o && this.layout && c && Ch(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    u = this.target || je();
                    const f = rt(this.layout.layoutBox.x);
                    u.x.min = o.target.x.min, u.x.max = u.x.min + f;
                    const m = rt(this.layout.layoutBox.y);
                    u.y.min = o.target.y.min, u.y.max = u.y.min + m
                }
                ot(l, u), sr(l, d), Xr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new S1), this.sharedNodes.get(o).add(l);
            const c = l.options.initialPromotionConfig;
            l.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {
                layoutId: l
            } = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {
                layoutId: l
            } = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: l,
            preserveFollowOpacity: u
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, u), o && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let l = !1;
            const {
                latestValues: u
            } = o;
            if ((u.rotate || u.rotateX || u.rotateY || u.rotateZ) && (l = !0), !l) return;
            const c = {};
            for (let d = 0; d < Cd.length; d++) {
                const f = "rotate" + Cd[d];
                u[f] && (c[f] = u[f], o.setStaticValue(f, 0))
            }
            o.render();
            for (const d in c) o.setStaticValue(d, c[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, u;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return b1;
            const c = {
                    visibility: ""
                },
                d = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = us(o == null ? void 0 : o.pointerEvents) || "", c.transform = d ? d(this.latestValues, "") : "none", c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const j = {};
                return this.options.layoutId && (j.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, j.pointerEvents = us(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !jn(this.latestValues) && (j.transform = d ? d({}, "") : "none", this.hasProjected = !1), j
            }
            const m = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), c.transform = kd(this.projectionDeltaWithTransform, this.treeScale, m), d && (c.transform = d(m, c.transform));
            const {
                x: y,
                y: w
            } = this.projectionDelta;
            c.transformOrigin = `${y.origin*100}% ${w.origin*100}% 0`, f.animationValues ? c.opacity = f === this ? (u = (l = m.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : m.opacityExit : c.opacity = f === this ? m.opacity !== void 0 ? m.opacity : "" : m.opacityExit !== void 0 ? m.opacityExit : 0;
            for (const j in Ls) {
                if (m[j] === void 0) continue;
                const {
                    correct: T,
                    applyTo: v
                } = Ls[j], p = c.transform === "none" ? m[j] : T(m[j], f);
                if (v) {
                    const g = v.length;
                    for (let N = 0; N < g; N++) c[v[N]] = p
                } else c[j] = p
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? us(o == null ? void 0 : o.pointerEvents) || "" : "none"), c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }), this.root.nodes.forEach(Pd), this.root.sharedNodes.clear()
        }
    }
}

function _1(e) {
    e.updateLayout()
}

function A1(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: s
        } = e.options, o = n.source !== e.layout.source;
        s === "size" ? at(f => {
            const m = o ? n.measuredBox[f] : n.layoutBox[f],
                y = rt(m);
            m.min = r[f].min, m.max = m.min + y
        }) : Ch(s, n.layoutBox, r) && at(f => {
            const m = o ? n.measuredBox[f] : n.layoutBox[f],
                y = rt(r[f]);
            m.max = m.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        });
        const l = ir();
        Xr(l, r, n.layoutBox);
        const u = ir();
        o ? Xr(u, e.applyTransform(i, !0), n.measuredBox) : Xr(u, r, n.layoutBox);
        const c = !jh(l);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: m,
                    layout: y
                } = f;
                if (m && y) {
                    const w = je();
                    Zr(w, n.layoutBox, m.layoutBox);
                    const j = je();
                    Zr(j, r, y.layoutBox), Nh(w, j) || (d = !0), f.options.layoutRoot && (e.relativeTarget = j, e.relativeTargetOrigin = w, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function M1(e) {
    Nn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function R1(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function D1(e) {
    e.clearSnapshot()
}

function Pd(e) {
    e.clearMeasurements()
}

function L1(e) {
    e.isLayoutDirty = !1
}

function V1(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function bd(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function I1(e) {
    e.resolveTargetDelta()
}

function F1(e) {
    e.calcProjection()
}

function O1(e) {
    e.resetRotation()
}

function z1(e) {
    e.removeLeadSnapshot()
}

function Td(e, t, n) {
    e.translate = he(t.translate, 0, n), e.scale = he(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function _d(e, t, n, r) {
    e.min = he(t.min, n.min, r), e.max = he(t.max, n.max, r)
}

function B1(e, t, n, r) {
    _d(e.x, t.x, n.x, r), _d(e.y, t.y, n.y, r)
}

function U1(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const $1 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Ad = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
    Md = Ad("applewebkit/") && !Ad("chrome/") ? Math.round : we;

function Rd(e) {
    e.min = Md(e.min), e.max = Md(e.max)
}

function H1(e) {
    Rd(e.x), Rd(e.y)
}

function Ch(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !rl(Nd(t), Nd(n), .2)
}
const q1 = kh({
        attachResizeListener: (e, t) => Lt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Xo = {
        current: void 0
    },
    Eh = kh({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Xo.current) {
                const e = new q1({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Xo.current = e
            }
            return Xo.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    G1 = {
        pan: {
            Feature: l1
        },
        drag: {
            Feature: a1,
            ProjectionNode: Eh,
            MeasureLayout: xh
        }
    },
    W1 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function J1(e) {
    const t = W1.exec(e);
    if (!t) return [, ];
    const [, n, r] = t;
    return [n, r]
}

function al(e, t, n = 1) {
    const [r, i] = J1(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return lh(o) ? parseFloat(o) : o
    } else return Qa(i) ? al(i, t, n + 1) : i
}

function K1(e, { ...t
}, n) {
    const r = e.current;
    if (!(r instanceof Element)) return {
        target: t,
        transitionEnd: n
    };
    n && (n = { ...n
    }), e.values.forEach(i => {
        const s = i.get();
        if (!Qa(s)) return;
        const o = al(s, r);
        o && i.set(o)
    });
    for (const i in t) {
        const s = t[i];
        if (!Qa(s)) continue;
        const o = al(s, r);
        o && (t[i] = o, n || (n = {}), n[i] === void 0 && (n[i] = s))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const Q1 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Ph = e => Q1.has(e),
    Y1 = e => Object.keys(e).some(Ph),
    Dd = e => e === zn || e === U,
    Ld = (e, t) => parseFloat(e.split(", ")[t]),
    Vd = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return Ld(i[1], t); {
            const s = r.match(/^matrix\((.+)\)$/);
            return s ? Ld(s[1], e) : 0
        }
    },
    X1 = new Set(["x", "y", "z"]),
    Z1 = Ci.filter(e => !X1.has(e));

function ew(e) {
    const t = [];
    return Z1.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.render(), t
}
const wr = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Vd(4, 13),
    y: Vd(5, 14)
};
wr.translateX = wr.x;
wr.translateY = wr.y;
const tw = (e, t, n) => {
        const r = t.measureViewportBox(),
            i = t.current,
            s = getComputedStyle(i),
            {
                display: o
            } = s,
            l = {};
        o === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(c => {
            l[c] = wr[c](r, s)
        }), t.render();
        const u = t.measureViewportBox();
        return n.forEach(c => {
            const d = t.getValue(c);
            d && d.jump(l[c]), e[c] = wr[c](u, s)
        }), e
    },
    nw = (e, t, n = {}, r = {}) => {
        t = { ...t
        }, r = { ...r
        };
        const i = Object.keys(t).filter(Ph);
        let s = [],
            o = !1;
        const l = [];
        if (i.forEach(u => {
                const c = e.getValue(u);
                if (!e.hasValue(u)) return;
                let d = n[u],
                    f = Dr(d);
                const m = t[u];
                let y;
                if (Is(m)) {
                    const w = m.length,
                        j = m[0] === null ? 1 : 0;
                    d = m[j], f = Dr(d);
                    for (let T = j; T < w && m[T] !== null; T++) y ? hu(Dr(m[T]) === y) : y = Dr(m[T])
                } else y = Dr(m);
                if (f !== y)
                    if (Dd(f) && Dd(y)) {
                        const w = c.get();
                        typeof w == "string" && c.set(parseFloat(w)), typeof m == "string" ? t[u] = parseFloat(m) : Array.isArray(m) && y === U && (t[u] = m.map(parseFloat))
                    } else f != null && f.transform && (y != null && y.transform) && (d === 0 || m === 0) ? d === 0 ? c.set(y.transform(d)) : t[u] = f.transform(m) : (o || (s = ew(e), o = !0), l.push(u), r[u] = r[u] !== void 0 ? r[u] : t[u], c.jump(m))
            }), l.length) {
            const u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                c = tw(t, e, l);
            return s.length && s.forEach(([d, f]) => {
                e.getValue(d).set(f)
            }), e.render(), ao && u !== null && window.scrollTo({
                top: u
            }), {
                target: c,
                transitionEnd: r
            }
        } else return {
            target: t,
            transitionEnd: r
        }
    };

function rw(e, t, n, r) {
    return Y1(t) ? nw(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const iw = (e, t, n, r) => {
        const i = K1(e, t, r);
        return t = i.target, r = i.transitionEnd, rw(e, t, n, r)
    },
    ll = {
        current: null
    },
    bh = {
        current: !1
    };

function sw() {
    if (bh.current = !0, !!ao)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => ll.current = e.matches;
            e.addListener(t), t()
        } else ll.current = !1
}

function ow(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const i in t) {
        const s = t[i],
            o = n[i];
        if (Xe(s)) e.addValue(i, s), Bs(r) && r.add(i);
        else if (Xe(o)) e.addValue(i, xr(s, {
            owner: e
        })), Bs(r) && r.remove(i);
        else if (o !== s)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(s)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, xr(l !== void 0 ? l : s, {
                    owner: e
                }))
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t
}
const Id = new WeakMap,
    Th = Object.keys(vi),
    aw = Th.length,
    Fd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    lw = ou.length;
class uw {
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        visualState: s
    }, o = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => se.render(this.render, !1, !0);
        const {
            latestValues: l,
            renderState: u
        } = s;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.isControllingVariants = uo(n), this.isVariantNode = mp(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: c,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in d) {
            const m = d[f];
            l[f] !== void 0 && Xe(m) && (m.set(l[f], !1), Bs(c) && c.add(f))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t, Id.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), bh.current || sw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ll.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Id.delete(this.current), this.projection && this.projection.unmount(), $t(this.notifyUpdate), $t(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = On.has(t),
            i = n.on("change", o => {
                this.latestValues[t] = o, this.props.onUpdate && se.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), s()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, i, s) {
        let o, l;
        for (let u = 0; u < aw; u++) {
            const c = Th[u],
                {
                    isEnabled: d,
                    Feature: f,
                    ProjectionNode: m,
                    MeasureLayout: y
                } = vi[c];
            m && (o = m), d(n) && (!this.features[c] && f && (this.features[c] = new f(this)), y && (l = y))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            this.projection = new o(this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: u,
                layout: c,
                drag: d,
                dragConstraints: f,
                layoutScroll: m,
                layoutRoot: y
            } = n;
            this.projection.setOptions({
                layoutId: u,
                layout: c,
                alwaysMeasureLayout: !!d || f && nr(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: s,
                layoutScroll: m,
                layoutRoot: y
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : je()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Fd.length; r++) {
            const i = Fd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = ow(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < lw; r++) {
            const i = ou[r],
                s = this.props[i];
            (yi(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = xr(n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = pu(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0) return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Xe(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new ku), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class _h extends uw {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    makeTargetAnimatableFromInstance({
        transition: t,
        transitionEnd: n,
        ...r
    }, {
        transformValues: i
    }, s) {
        let o = Ex(r, t || {}, this);
        if (i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s) {
            kx(this, r, o);
            const l = iw(this, r, o, n);
            n = l.transitionEnd, r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}

function cw(e) {
    return window.getComputedStyle(e)
}
class dw extends _h {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (On.has(n)) {
            const r = xu(n);
            return r && r.default || 0
        } else {
            const r = cw(t),
                i = (yp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return yh(t, n)
    }
    build(t, n, r, i) {
        uu(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return mu(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Xe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, i) {
        Np(t, n, r, i)
    }
}
class fw extends _h {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (On.has(n)) {
            const r = xu(n);
            return r && r.default || 0
        }
        return n = kp.has(n) ? n : iu(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return je()
    }
    scrapeMotionValuesFromProps(t, n) {
        return Ep(t, n)
    }
    build(t, n, r, i) {
        du(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Cp(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = fu(t.tagName), super.mount(t)
    }
}
const mw = (e, t) => lu(e) ? new fw(t, {
        enableHardwareAcceleration: !1
    }) : new dw(t, {
        enableHardwareAcceleration: !0
    }),
    pw = {
        layout: {
            ProjectionNode: Eh,
            MeasureLayout: xh
        }
    },
    hw = { ...Bx,
        ...av,
        ...G1,
        ...pw
    },
    L = gy((e, t) => Jy(e, t, hw, mw));

function Ah() {
    const e = A.useRef(!1);
    return ru(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function gw() {
    const e = Ah(),
        [t, n] = A.useState(0),
        r = A.useCallback(() => {
            e.current && n(t + 1)
        }, [t]);
    return [A.useCallback(() => se.postRender(r), [r]), t]
}
class yw extends A.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function vw({
    children: e,
    isPresent: t
}) {
    const n = A.useId(),
        r = A.useRef(null),
        i = A.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return A.useInsertionEffect(() => {
        const {
            width: s,
            height: o,
            top: l,
            left: u
        } = i.current;
        if (t || !r.current || !s || !o) return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [t]), A.createElement(yw, {
        isPresent: t,
        childRef: r,
        sizeRef: i
    }, A.cloneElement(e, {
        ref: r
    }))
}
const Zo = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: s,
    mode: o
}) => {
    const l = Pp(xw),
        u = A.useId(),
        c = A.useMemo(() => ({
            id: u,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: d => {
                l.set(d, !0);
                for (const f of l.values())
                    if (!f) return;
                r && r()
            },
            register: d => (l.set(d, !1), () => l.delete(d))
        }), s ? void 0 : [n]);
    return A.useMemo(() => {
        l.forEach((d, f) => l.set(f, !1))
    }, [n]), A.useEffect(() => {
        !n && !l.size && r && r()
    }, [n]), o === "popLayout" && (e = A.createElement(vw, {
        isPresent: n
    }, e)), A.createElement(oo.Provider, {
        value: c
    }, e)
};

function xw() {
    return new Map
}

function ww(e) {
    return A.useEffect(() => () => e(), [])
}
const kn = e => e.key || "";

function Sw(e, t) {
    e.forEach(n => {
        const r = kn(n);
        t.set(r, n)
    })
}

function jw(e) {
    const t = [];
    return A.Children.forEach(e, n => {
        A.isValidElement(n) && t.push(n)
    }), t
}
const Nw = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: s = !0,
    mode: o = "sync"
}) => {
    const l = A.useContext(au).forceRender || gw()[0],
        u = Ah(),
        c = jw(e);
    let d = c;
    const f = A.useRef(new Map).current,
        m = A.useRef(d),
        y = A.useRef(new Map).current,
        w = A.useRef(!0);
    if (ru(() => {
            w.current = !1, Sw(c, y), m.current = d
        }), ww(() => {
            w.current = !0, y.clear(), f.clear()
        }), w.current) return A.createElement(A.Fragment, null, d.map(p => A.createElement(Zo, {
        key: kn(p),
        isPresent: !0,
        initial: n ? void 0 : !1,
        presenceAffectsLayout: s,
        mode: o
    }, p)));
    d = [...d];
    const j = m.current.map(kn),
        T = c.map(kn),
        v = j.length;
    for (let p = 0; p < v; p++) {
        const g = j[p];
        T.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0)
    }
    return o === "wait" && f.size && (d = []), f.forEach((p, g) => {
        if (T.indexOf(g) !== -1) return;
        const N = y.get(g);
        if (!N) return;
        const P = j.indexOf(g);
        let _ = p;
        if (!_) {
            const E = () => {
                f.delete(g);
                const h = Array.from(y.keys()).filter(x => !T.includes(x));
                if (h.forEach(x => y.delete(x)), m.current = c.filter(x => {
                        const k = kn(x);
                        return k === g || h.includes(k)
                    }), !f.size) {
                    if (u.current === !1) return;
                    l(), r && r()
                }
            };
            _ = A.createElement(Zo, {
                key: kn(N),
                isPresent: !1,
                onExitComplete: E,
                custom: t,
                presenceAffectsLayout: s,
                mode: o
            }, N), f.set(g, _)
        }
        d.splice(P, 0, _)
    }), d = d.map(p => {
        const g = p.key;
        return f.has(g) ? p : A.createElement(Zo, {
            key: kn(p),
            isPresent: !0,
            presenceAffectsLayout: s,
            mode: o
        }, p)
    }), A.createElement(A.Fragment, null, f.size ? d : d.map(p => A.cloneElement(p)))
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Cw = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()),
    Od = e => {
        const t = Cw(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    Mh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(),
    Ew = e => {
        for (const t in e)
            if (t.startsWith("aria-") || t === "role" || t === "title") return !0
    };
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pw = {
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
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bw = A.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: o,
    ...l
}, u) => A.createElement("svg", {
    ref: u,
    ...Pw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Mh("lucide", i),
    ...!s && !Ew(l) && {
        "aria-hidden": "true"
    },
    ...l
}, [...o.map(([c, d]) => A.createElement(c, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = (e, t) => {
    const n = A.forwardRef(({
        className: r,
        ...i
    }, s) => A.createElement(bw, {
        ref: s,
        iconNode: t,
        className: Mh(`lucide-${kw(Od(e))}`, `lucide-${e}`, r),
        ...i
    }));
    return n.displayName = Od(e), n
};
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tw = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    zd = oe("award", Tw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = [
        ["path", {
            d: "M12 7v14",
            key: "1akyts"
        }],
        ["path", {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }]
    ],
    Bd = oe("book-open", _w);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aw = [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
            key: "k3hazp"
        }]
    ],
    xn = oe("book", Aw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mw = [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            ry: "2",
            key: "76otgf"
        }],
        ["path", {
            d: "M9 22v-4h6v4",
            key: "r93iot"
        }],
        ["path", {
            d: "M8 6h.01",
            key: "1dz90k"
        }],
        ["path", {
            d: "M16 6h.01",
            key: "1x0f13"
        }],
        ["path", {
            d: "M12 6h.01",
            key: "1vi96p"
        }],
        ["path", {
            d: "M12 10h.01",
            key: "1nrarc"
        }],
        ["path", {
            d: "M12 14h.01",
            key: "1etili"
        }],
        ["path", {
            d: "M16 10h.01",
            key: "1m94wz"
        }],
        ["path", {
            d: "M16 14h.01",
            key: "1gbofw"
        }],
        ["path", {
            d: "M8 10h.01",
            key: "19clt8"
        }],
        ["path", {
            d: "M8 14h.01",
            key: "6423bh"
        }]
    ],
    Rw = oe("building", Mw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ],
    Lw = oe("calendar", Dw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = [
        ["path", {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }]
    ],
    ea = oe("camera", Vw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iw = [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ],
    Fw = oe("chevron-left", Iw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ],
    zw = oe("chevron-right", Ow);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bw = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }],
        ["path", {
            d: "m9 9 6 6",
            key: "z0biqf"
        }]
    ],
    Uw = oe("circle-x", Bw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = [
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ],
    Hw = oe("clock", $w);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qw = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ],
    Gw = oe("external-link", qw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ww = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ],
    Ud = oe("globe", Ww);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jw = [
        ["path", {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }],
        ["path", {
            d: "M22 10v6",
            key: "1lu8f3"
        }],
        ["path", {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }]
    ],
    ta = oe("graduation-cap", Jw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kw = [
        ["path", {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0"
        }]
    ],
    na = oe("heart", Kw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qw = [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }],
        ["path", {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }]
    ],
    $d = oe("history", Qw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yw = [
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 18h16",
            key: "19g7jn"
        }],
        ["path", {
            d: "M4 6h16",
            key: "1o0s65"
        }]
    ],
    Xw = oe("menu", Yw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zw = [
        ["path", {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }]
    ],
    Hd = oe("message-square", Zw);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e2 = [
        ["path", {
            d: "M13 21h8",
            key: "1jsn5i"
        }],
        ["path", {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }]
    ],
    Qi = oe("pen-line", e2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }],
        ["path", {
            d: "M8 16H3v5",
            key: "1cv678"
        }]
    ],
    n2 = oe("refresh-cw", t2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = [
        ["path", {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }],
        ["path", {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }],
        ["path", {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }]
    ],
    i2 = oe("save", r2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = [
        ["path", {
            d: "M14 21v-3a2 2 0 0 0-4 0v3",
            key: "1rgiei"
        }],
        ["path", {
            d: "M18 5v16",
            key: "1ethyx"
        }],
        ["path", {
            d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",
            key: "zywc2d"
        }],
        ["path", {
            d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",
            key: "1d4ql0"
        }],
        ["path", {
            d: "M6 5v16",
            key: "1sn0nx"
        }],
        ["circle", {
            cx: "12",
            cy: "9",
            r: "2",
            key: "1092wv"
        }]
    ],
    ra = oe("school", s2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = [
        ["path", {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }]
    ],
    a2 = oe("star", o2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [
        ["path", {
            d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
            key: "cpyugq"
        }],
        ["path", {
            d: "M12 22v-3",
            key: "kmzjlo"
        }]
    ],
    qd = oe("tree-pine", l2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["path", {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }]
    ],
    Gd = oe("users", u2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    Wd = oe("x", c2);
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["line", {
            x1: "21",
            x2: "16.65",
            y1: "21",
            y2: "16.65",
            key: "13gj7c"
        }],
        ["line", {
            x1: "11",
            x2: "11",
            y1: "8",
            y2: "14",
            key: "1vmskp"
        }],
        ["line", {
            x1: "8",
            x2: "14",
            y1: "11",
            y2: "11",
            key: "durymu"
        }]
    ],
    f2 = oe("zoom-in", d2);
var Rh = {
    exports: {}
};
/* @license
parse Parse
v5.5.3
https://github.com/mholt/parseParse
License: MIT
*/
(function(e, t) {
    ((n, r) => {
        e.exports = r()
    })(Dh, function n() {
        var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {},
            i, s = !r.document && !!r.postMessage,
            o = r.IS_PAPA_WORKER || !1,
            l = {},
            u = 0,
            c = {};

        function d(h) {
            this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            }, (function(x) {
                var k = P(x);
                k.chunkSize = parseInt(k.chunkSize), x.step || x.chunk || (k.chunkSize = null), this._handle = new j(k), (this._handle.streamer = this)._config = k
            }).call(this, h), this.parseChunk = function(x, k) {
                var R = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < R) {
                    let z = this._config.newline;
                    z || (D = this._config.quoteChar || '"', z = this._handle.guessLineEndings(x, D)), x = [...x.split(z).slice(R)].join(z)
                }
                this.isFirstChunk && E(this._config.beforeFirstChunk) && (D = this._config.beforeFirstChunk(x)) !== void 0 && (x = D), this.isFirstChunk = !1, this._halted = !1;
                var R = this._partialLine + x,
                    D = (this._partialLine = "", this._handle.parse(R, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                    if (x = D.meta.cursor, R = (this._finished || (this._partialLine = R.substring(x - this._baseIndex), this._baseIndex = x), D && D.data && (this._rowCount += D.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) r.postMessage({
                        results: D,
                        workerId: c.WORKER_ID,
                        finished: R
                    });
                    else if (E(this._config.chunk) && !k) {
                        if (this._config.chunk(D, this._handle), this._handle.paused() || this._handle.aborted()) return void(this._halted = !0);
                        this._completeResults = D = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(D.data), this._completeResults.errors = this._completeResults.errors.concat(D.errors), this._completeResults.meta = D.meta), this._completed || !R || !E(this._config.complete) || D && D.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), R || D && D.meta.paused || this._nextChunk(), D
                }
                this._halted = !0
            }, this._sendError = function(x) {
                E(this._config.error) ? this._config.error(x) : o && this._config.error && r.postMessage({
                    workerId: c.WORKER_ID,
                    error: x,
                    finished: !1
                })
            }
        }

        function f(h) {
            var x;
            (h = h || {}).chunkSize || (h.chunkSize = c.RemoteChunkSize), d.call(this, h), this._nextChunk = s ? function() {
                this._readChunk(), this._chunkLoaded()
            } : function() {
                this._readChunk()
            }, this.stream = function(k) {
                this._input = k, this._nextChunk()
            }, this._readChunk = function() {
                if (this._finished) this._chunkLoaded();
                else {
                    if (x = new XMLHttpRequest, this._config.withCredentials && (x.withCredentials = this._config.withCredentials), s || (x.onload = _(this._chunkLoaded, this), x.onerror = _(this._chunkError, this)), x.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
                        var k, R = this._config.downloadRequestHeaders;
                        for (k in R) x.setRequestHeader(k, R[k])
                    }
                    var D;
                    this._config.chunkSize && (D = this._start + this._config.chunkSize - 1, x.setRequestHeader("Range", "bytes=" + this._start + "-" + D));
                    try {
                        x.send(this._config.downloadRequestBody)
                    } catch (z) {
                        this._chunkError(z.message)
                    }
                    s && x.status === 0 && this._chunkError()
                }
            }, this._chunkLoaded = function() {
                x.readyState === 4 && (x.status < 200 || 400 <= x.status ? this._chunkError() : (this._start += this._config.chunkSize || x.responseText.length, this._finished = !this._config.chunkSize || this._start >= (k => (k = k.getResponseHeader("Content-Range")) !== null ? parseInt(k.substring(k.lastIndexOf("/") + 1)) : -1)(x), this.parseChunk(x.responseText)))
            }, this._chunkError = function(k) {
                k = x.statusText || k, this._sendError(new Error(k))
            }
        }

        function m(h) {
            (h = h || {}).chunkSize || (h.chunkSize = c.LocalChunkSize), d.call(this, h);
            var x, k, R = typeof FileReader < "u";
            this.stream = function(D) {
                this._input = D, k = D.slice || D.webkitSlice || D.mozSlice, R ? ((x = new FileReader).onload = _(this._chunkLoaded, this), x.onerror = _(this._chunkError, this)) : x = new FileReaderSync, this._nextChunk()
            }, this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
            }, this._readChunk = function() {
                var D = this._input,
                    z = (this._config.chunkSize && (z = Math.min(this._start + this._config.chunkSize, this._input.size), D = k.call(D, this._start, z)), x.readAsText(D, this._config.encoding));
                R || this._chunkLoaded({
                    target: {
                        result: z
                    }
                })
            }, this._chunkLoaded = function(D) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(D.target.result)
            }, this._chunkError = function() {
                this._sendError(x.error)
            }
        }

        function y(h) {
            var x;
            d.call(this, h = h || {}), this.stream = function(k) {
                return x = k, this._nextChunk()
            }, this._nextChunk = function() {
                var k, R;
                if (!this._finished) return k = this._config.chunkSize, x = k ? (R = x.substring(0, k), x.substring(k)) : (R = x, ""), this._finished = !x, this.parseChunk(R)
            }
        }

        function w(h) {
            d.call(this, h = h || {});
            var x = [],
                k = !0,
                R = !1;
            this.pause = function() {
                d.prototype.pause.apply(this, arguments), this._input.pause()
            }, this.resume = function() {
                d.prototype.resume.apply(this, arguments), this._input.resume()
            }, this.stream = function(D) {
                this._input = D, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
            }, this._checkIsFinished = function() {
                R && x.length === 1 && (this._finished = !0)
            }, this._nextChunk = function() {
                this._checkIsFinished(), x.length ? this.parseChunk(x.shift()) : k = !0
            }, this._streamData = _(function(D) {
                try {
                    x.push(typeof D == "string" ? D : D.toString(this._config.encoding)), k && (k = !1, this._checkIsFinished(), this.parseChunk(x.shift()))
                } catch (z) {
                    this._streamError(z)
                }
            }, this), this._streamError = _(function(D) {
                this._streamCleanUp(), this._sendError(D)
            }, this), this._streamEnd = _(function() {
                this._streamCleanUp(), R = !0, this._streamData("")
            }, this), this._streamCleanUp = _(function() {
                this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
            }, this)
        }

        function j(h) {
            var x, k, R, D, z = Math.pow(2, 53),
                H = -z,
                ce = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                J = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                B = this,
                S = 0,
                C = 0,
                I = !1,
                b = !1,
                V = [],
                O = {
                    data: [],
                    errors: [],
                    meta: {}
                };

            function Y(q) {
                return h.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0
            }

            function X() {
                if (O && R && (Se("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), R = !1), h.skipEmptyLines && (O.data = O.data.filter(function(ae) {
                        return !Y(ae)
                    })), Z()) {
                    let ae = function(Pe, de) {
                        E(h.transformHeader) && (Pe = h.transformHeader(Pe, de)), V.push(Pe)
                    };
                    var $ = ae;
                    if (O)
                        if (Array.isArray(O.data[0])) {
                            for (var q = 0; Z() && q < O.data.length; q++) O.data[q].forEach(ae);
                            O.data.splice(0, 1)
                        } else O.data.forEach(ae)
                }

                function K(ae, Pe) {
                    for (var de = h.header ? {} : [], ne = 0; ne < ae.length; ne++) {
                        var G = ne,
                            De = ae[ne],
                            De = ((ee, fe) => (ke => (h.dynamicTypingFunction && h.dynamicTyping[ke] === void 0 && (h.dynamicTyping[ke] = h.dynamicTypingFunction(ke)), (h.dynamicTyping[ke] || h.dynamicTyping) === !0))(ee) ? fe === "true" || fe === "TRUE" || fe !== "false" && fe !== "FALSE" && ((ke => {
                                if (ce.test(ke) && (ke = parseFloat(ke), H < ke && ke < z)) return 1
                            })(fe) ? parseFloat(fe) : J.test(fe) ? new Date(fe) : fe === "" ? null : fe) : fe)(G = h.header ? ne >= V.length ? "__parsed_extra" : V[ne] : G, De = h.transform ? h.transform(De, G) : De);
                        G === "__parsed_extra" ? (de[G] = de[G] || [], de[G].push(De)) : de[G] = De
                    }
                    return h.header && (ne > V.length ? Se("FieldMismatch", "TooManyFields", "Too many fields: expected " + V.length + " fields but parsed " + ne, C + Pe) : ne < V.length && Se("FieldMismatch", "TooFewFields", "Too few fields: expected " + V.length + " fields but parsed " + ne, C + Pe)), de
                }
                var re;
                O && (h.header || h.dynamicTyping || h.transform) && (re = 1, !O.data.length || Array.isArray(O.data[0]) ? (O.data = O.data.map(K), re = O.data.length) : O.data = K(O.data, 0), h.header && O.meta && (O.meta.fields = V), C += re)
            }

            function Z() {
                return h.header && V.length === 0
            }

            function Se(q, K, re, $) {
                q = {
                    type: q,
                    code: K,
                    message: re
                }, $ !== void 0 && (q.row = $), O.errors.push(q)
            }
            E(h.step) && (D = h.step, h.step = function(q) {
                O = q, Z() ? X() : (X(), O.data.length !== 0 && (S += q.data.length, h.preview && S > h.preview ? k.abort() : (O.data = O.data[0], D(O, B))))
            }), this.parse = function(q, K, re) {
                var $ = h.quoteChar || '"',
                    $ = (h.newline || (h.newline = this.guessLineEndings(q, $)), R = !1, h.delimiter ? E(h.delimiter) && (h.delimiter = h.delimiter(q), O.meta.delimiter = h.delimiter) : (($ = ((ae, Pe, de, ne, G) => {
                        var De, ee, fe, ke;
                        G = G || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
                        for (var Bn = 0; Bn < G.length; Bn++) {
                            for (var St, kr = G[Bn], Le = 0, jt = 0, be = 0, Ge = (fe = void 0, new v({
                                    comments: ne,
                                    delimiter: kr,
                                    newline: Pe,
                                    preview: 10
                                }).parse(ae)), _t = 0; _t < Ge.data.length; _t++) de && Y(Ge.data[_t]) ? be++ : (St = Ge.data[_t].length, jt += St, fe === void 0 ? fe = St : 0 < St && (Le += Math.abs(St - fe), fe = St));
                            0 < Ge.data.length && (jt /= Ge.data.length - be), (ee === void 0 || Le <= ee) && (ke === void 0 || ke < jt) && 1.99 < jt && (ee = Le, De = kr, ke = jt)
                        }
                        return {
                            successful: !!(h.delimiter = De),
                            bestDelimiter: De
                        }
                    })(q, h.newline, h.skipEmptyLines, h.comments, h.delimitersToGuess)).successful ? h.delimiter = $.bestDelimiter : (R = !0, h.delimiter = c.DefaultDelimiter), O.meta.delimiter = h.delimiter), P(h));
                return h.preview && h.header && $.preview++, x = q, k = new v($), O = k.parse(x, K, re), X(), I ? {
                    meta: {
                        paused: !0
                    }
                } : O || {
                    meta: {
                        paused: !1
                    }
                }
            }, this.paused = function() {
                return I
            }, this.pause = function() {
                I = !0, k.abort(), x = E(h.chunk) ? "" : x.substring(k.getCharIndex())
            }, this.resume = function() {
                B.streamer._halted ? (I = !1, B.streamer.parseChunk(x, !0)) : setTimeout(B.resume, 3)
            }, this.aborted = function() {
                return b
            }, this.abort = function() {
                b = !0, k.abort(), O.meta.aborted = !0, E(h.complete) && h.complete(O), x = ""
            }, this.guessLineEndings = function(ae, $) {
                ae = ae.substring(0, 1048576);
                var $ = new RegExp(T($) + "([^]*?)" + T($), "gm"),
                    re = (ae = ae.replace($, "")).split("\r"),
                    $ = ae.split(`
`),
                    ae = 1 < $.length && $[0].length < re[0].length;
                if (re.length === 1 || ae) return `
`;
                for (var Pe = 0, de = 0; de < re.length; de++) re[de][0] === `
` && Pe++;
                return Pe >= re.length / 2 ? `\r
` : "\r"
            }
        }

        function T(h) {
            return h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function v(h) {
            var x = (h = h || {}).delimiter,
                k = h.newline,
                R = h.comments,
                D = h.step,
                z = h.preview,
                H = h.fastMode,
                ce = null,
                J = !1,
                B = h.quoteChar == null ? '"' : h.quoteChar,
                S = B;
            if (h.escapeChar !== void 0 && (S = h.escapeChar), (typeof x != "string" || -1 < c.BAD_DELIMITERS.indexOf(x)) && (x = ","), R === x) throw new Error("Comment character same as delimiter");
            R === !0 ? R = "#" : (typeof R != "string" || -1 < c.BAD_DELIMITERS.indexOf(R)) && (R = !1), k !== `
` && k !== "\r" && k !== `\r
` && (k = `
`);
            var C = 0,
                I = !1;
            this.parse = function(b, V, O) {
                if (typeof b != "string") throw new Error("Input must be a string");
                var Y = b.length,
                    X = x.length,
                    Z = k.length,
                    Se = R.length,
                    q = E(D),
                    K = [],
                    re = [],
                    $ = [],
                    ae = C = 0;
                if (!b) return Le();
                if (H || H !== !1 && b.indexOf(B) === -1) {
                    for (var Pe = b.split(k), de = 0; de < Pe.length; de++) {
                        if ($ = Pe[de], C += $.length, de !== Pe.length - 1) C += k.length;
                        else if (O) return Le();
                        if (!R || $.substring(0, Se) !== R) {
                            if (q) {
                                if (K = [], ke($.split(x)), jt(), I) return Le()
                            } else ke($.split(x));
                            if (z && z <= de) return K = K.slice(0, z), Le(!0)
                        }
                    }
                    return Le()
                }
                for (var ne = b.indexOf(x, C), G = b.indexOf(k, C), De = new RegExp(T(S) + T(B), "g"), ee = b.indexOf(B, C);;)
                    if (b[C] === B)
                        for (ee = C, C++;;) {
                            if ((ee = b.indexOf(B, ee + 1)) === -1) return O || re.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: K.length,
                                index: C
                            }), St();
                            if (ee === Y - 1) return St(b.substring(C, ee).replace(De, B));
                            if (B === S && b[ee + 1] === S) ee++;
                            else if (B === S || ee === 0 || b[ee - 1] !== S) {
                                ne !== -1 && ne < ee + 1 && (ne = b.indexOf(x, ee + 1));
                                var fe = Bn((G = G !== -1 && G < ee + 1 ? b.indexOf(k, ee + 1) : G) === -1 ? ne : Math.min(ne, G));
                                if (b.substr(ee + 1 + fe, X) === x) {
                                    $.push(b.substring(C, ee).replace(De, B)), b[C = ee + 1 + fe + X] !== B && (ee = b.indexOf(B, C)), ne = b.indexOf(x, C), G = b.indexOf(k, C);
                                    break
                                }
                                if (fe = Bn(G), b.substring(ee + 1 + fe, ee + 1 + fe + Z) === k) {
                                    if ($.push(b.substring(C, ee).replace(De, B)), kr(ee + 1 + fe + Z), ne = b.indexOf(x, C), ee = b.indexOf(B, C), q && (jt(), I)) return Le();
                                    if (z && K.length >= z) return Le(!0);
                                    break
                                }
                                re.push({
                                    type: "Quotes",
                                    code: "InvalidQuotes",
                                    message: "Trailing quote on quoted field is malformed",
                                    row: K.length,
                                    index: C
                                }), ee++
                            }
                        } else if (R && $.length === 0 && b.substring(C, C + Se) === R) {
                            if (G === -1) return Le();
                            C = G + Z, G = b.indexOf(k, C), ne = b.indexOf(x, C)
                        } else if (ne !== -1 && (ne < G || G === -1)) $.push(b.substring(C, ne)), C = ne + X, ne = b.indexOf(x, C);
                else {
                    if (G === -1) break;
                    if ($.push(b.substring(C, G)), kr(G + Z), q && (jt(), I)) return Le();
                    if (z && K.length >= z) return Le(!0)
                }
                return St();

                function ke(be) {
                    K.push(be), ae = C
                }

                function Bn(be) {
                    var Ge = 0;
                    return Ge = be !== -1 && (be = b.substring(ee + 1, be)) && be.trim() === "" ? be.length : Ge
                }

                function St(be) {
                    return O || (be === void 0 && (be = b.substring(C)), $.push(be), C = Y, ke($), q && jt()), Le()
                }

                function kr(be) {
                    C = be, ke($), $ = [], G = b.indexOf(k, C)
                }

                function Le(be) {
                    if (h.header && !V && K.length && !J) {
                        var Ge = K[0],
                            _t = Object.create(null),
                            po = new Set(Ge);
                        let Cu = !1;
                        for (let Un = 0; Un < Ge.length; Un++) {
                            let Nt = Ge[Un];
                            if (_t[Nt = E(h.transformHeader) ? h.transformHeader(Nt, Un) : Nt]) {
                                let Cr, Eu = _t[Nt];
                                for (; Cr = Nt + "_" + Eu, Eu++, po.has(Cr););
                                po.add(Cr), Ge[Un] = Cr, _t[Nt]++, Cu = !0, (ce = ce === null ? {} : ce)[Cr] = Nt
                            } else _t[Nt] = 1, Ge[Un] = Nt;
                            po.add(Nt)
                        }
                        Cu && console.warn("Duplicate headers found and renamed."), J = !0
                    }
                    return {
                        data: K,
                        errors: re,
                        meta: {
                            delimiter: x,
                            linebreak: k,
                            aborted: I,
                            truncated: !!be,
                            cursor: ae + (V || 0),
                            renamedHeaders: ce
                        }
                    }
                }

                function jt() {
                    D(Le()), K = [], re = []
                }
            }, this.abort = function() {
                I = !0
            }, this.getCharIndex = function() {
                return C
            }
        }

        function p(h) {
            var x = h.data,
                k = l[x.workerId],
                R = !1;
            if (x.error) k.userError(x.error, x.file);
            else if (x.results && x.results.data) {
                var D = {
                    abort: function() {
                        R = !0, g(x.workerId, {
                            data: [],
                            errors: [],
                            meta: {
                                aborted: !0
                            }
                        })
                    },
                    pause: N,
                    resume: N
                };
                if (E(k.userStep)) {
                    for (var z = 0; z < x.results.data.length && (k.userStep({
                            data: x.results.data[z],
                            errors: x.results.errors,
                            meta: x.results.meta
                        }, D), !R); z++);
                    delete x.results
                } else E(k.userChunk) && (k.userChunk(x.results, D, x.file), delete x.results)
            }
            x.finished && !R && g(x.workerId, x.results)
        }

        function g(h, x) {
            var k = l[h];
            E(k.userComplete) && k.userComplete(x), k.terminate(), delete l[h]
        }

        function N() {
            throw new Error("Not implemented.")
        }

        function P(h) {
            if (typeof h != "object" || h === null) return h;
            var x, k = Array.isArray(h) ? [] : {};
            for (x in h) k[x] = P(h[x]);
            return k
        }

        function _(h, x) {
            return function() {
                h.apply(x, arguments)
            }
        }

        function E(h) {
            return typeof h == "function"
        }
        return c.parse = function(h, x) {
            var k = (x = x || {}).dynamicTyping || !1;
            if (E(k) && (x.dynamicTypingFunction = k, k = {}), x.dynamicTyping = k, x.transform = !!E(x.transform) && x.transform, !x.worker || !c.WORKERS_SUPPORTED) return k = null, c.NODE_STREAM_INPUT, typeof h == "string" ? (h = (R => R.charCodeAt(0) !== 65279 ? R : R.slice(1))(h), k = new(x.download ? f : y)(x)) : h.readable === !0 && E(h.read) && E(h.on) ? k = new w(x) : (r.File && h instanceof File || h instanceof Object) && (k = new m(x)), k.stream(h);
            (k = (() => {
                var R;
                return !!c.WORKERS_SUPPORTED && (R = (() => {
                    var D = r.URL || r.webkitURL || null,
                        z = n.toString();
                    return c.BLOB_URL || (c.BLOB_URL = D.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", z, ")();"], {
                        type: "text/javascript"
                    })))
                })(), (R = new r.Worker(R)).onmessage = p, R.id = u++, l[R.id] = R)
            })()).userStep = x.step, k.userChunk = x.chunk, k.userComplete = x.complete, k.userError = x.error, x.step = E(x.step), x.chunk = E(x.chunk), x.complete = E(x.complete), x.error = E(x.error), delete x.worker, k.postMessage({
                input: h,
                config: x,
                workerId: k.id
            })
        }, c.unparse = function(h, x) {
            var k = !1,
                R = !0,
                D = ",",
                z = `\r
`,
                H = '"',
                ce = H + H,
                J = !1,
                B = null,
                S = !1,
                C = ((() => {
                    if (typeof x == "object") {
                        if (typeof x.delimiter != "string" || c.BAD_DELIMITERS.filter(function(V) {
                                return x.delimiter.indexOf(V) !== -1
                            }).length || (D = x.delimiter), typeof x.quotes != "boolean" && typeof x.quotes != "function" && !Array.isArray(x.quotes) || (k = x.quotes), typeof x.skipEmptyLines != "boolean" && typeof x.skipEmptyLines != "string" || (J = x.skipEmptyLines), typeof x.newline == "string" && (z = x.newline), typeof x.quoteChar == "string" && (H = x.quoteChar), typeof x.header == "boolean" && (R = x.header), Array.isArray(x.columns)) {
                            if (x.columns.length === 0) throw new Error("Option columns is empty");
                            B = x.columns
                        }
                        x.escapeChar !== void 0 && (ce = x.escapeChar + H), x.escapeFormulae instanceof RegExp ? S = x.escapeFormulae : typeof x.escapeFormulae == "boolean" && x.escapeFormulae && (S = /^[=+\-@\t\r].*$/)
                    }
                })(), new RegExp(T(H), "g"));
            if (typeof h == "string" && (h = JSON.parse(h)), Array.isArray(h)) {
                if (!h.length || Array.isArray(h[0])) return I(null, h, J);
                if (typeof h[0] == "object") return I(B || Object.keys(h[0]), h, J)
            } else if (typeof h == "object") return typeof h.data == "string" && (h.data = JSON.parse(h.data)), Array.isArray(h.data) && (h.fields || (h.fields = h.meta && h.meta.fields || B), h.fields || (h.fields = Array.isArray(h.data[0]) ? h.fields : typeof h.data[0] == "object" ? Object.keys(h.data[0]) : []), Array.isArray(h.data[0]) || typeof h.data[0] == "object" || (h.data = [h.data])), I(h.fields || [], h.data || [], J);
            throw new Error("Unable to serialize unrecognized input");

            function I(V, O, Y) {
                var X = "",
                    Z = (typeof V == "string" && (V = JSON.parse(V)), typeof O == "string" && (O = JSON.parse(O)), Array.isArray(V) && 0 < V.length),
                    Se = !Array.isArray(O[0]);
                if (Z && R) {
                    for (var q = 0; q < V.length; q++) 0 < q && (X += D), X += b(V[q], q);
                    0 < O.length && (X += z)
                }
                for (var K = 0; K < O.length; K++) {
                    var re = (Z ? V : O[K]).length,
                        $ = !1,
                        ae = Z ? Object.keys(O[K]).length === 0 : O[K].length === 0;
                    if (Y && !Z && ($ = Y === "greedy" ? O[K].join("").trim() === "" : O[K].length === 1 && O[K][0].length === 0), Y === "greedy" && Z) {
                        for (var Pe = [], de = 0; de < re; de++) {
                            var ne = Se ? V[de] : de;
                            Pe.push(O[K][ne])
                        }
                        $ = Pe.join("").trim() === ""
                    }
                    if (!$) {
                        for (var G = 0; G < re; G++) {
                            0 < G && !ae && (X += D);
                            var De = Z && Se ? V[G] : G;
                            X += b(O[K][De], G)
                        }
                        K < O.length - 1 && (!Y || 0 < re && !ae) && (X += z)
                    }
                }
                return X
            }

            function b(V, O) {
                var Y, X;
                return V == null ? "" : V.constructor === Date ? JSON.stringify(V).slice(1, 25) : (X = !1, S && typeof V == "string" && S.test(V) && (V = "'" + V, X = !0), Y = V.toString().replace(C, ce), (X = X || k === !0 || typeof k == "function" && k(V, O) || Array.isArray(k) && k[O] || ((Z, Se) => {
                    for (var q = 0; q < Se.length; q++)
                        if (-1 < Z.indexOf(Se[q])) return !0;
                    return !1
                })(Y, c.BAD_DELIMITERS) || -1 < Y.indexOf(D) || Y.charAt(0) === " " || Y.charAt(Y.length - 1) === " ") ? H + Y + H : Y)
            }
        }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !s && !!r.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = v, c.ParserHandle = j, c.NetworkStreamer = f, c.FileStreamer = m, c.StringStreamer = y, c.ReadableStreamStreamer = w, r.jQuery && ((i = r.jQuery).fn.parse = function(h) {
            var x = h.config || {},
                k = [];
            return this.each(function(z) {
                if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
                for (var H = 0; H < this.files.length; H++) k.push({
                    file: this.files[H],
                    inputElem: this,
                    instanceConfig: i.extend({}, x)
                })
            }), R(), this;

            function R() {
                if (k.length === 0) E(h.complete) && h.complete();
                else {
                    var z, H, ce, J, B = k[0];
                    if (E(h.before)) {
                        var S = h.before(B.file, B.inputElem);
                        if (typeof S == "object") {
                            if (S.action === "abort") return z = "AbortError", H = B.file, ce = B.inputElem, J = S.reason, void(E(h.error) && h.error({
                                name: z
                            }, H, ce, J));
                            if (S.action === "skip") return void D();
                            typeof S.config == "object" && (B.instanceConfig = i.extend(B.instanceConfig, S.config))
                        } else if (S === "skip") return void D()
                    }
                    var C = B.instanceConfig.complete;
                    B.instanceConfig.complete = function(I) {
                        E(C) && C(I, B.file, B.inputElem), D()
                    }, c.parse(B.file, B.instanceConfig)
                }
            }

            function D() {
                k.splice(0, 1), R()
            }
        }), o && (r.onmessage = function(h) {
            h = h.data, c.WORKER_ID === void 0 && h && (c.WORKER_ID = h.workerId), typeof h.input == "string" ? r.postMessage({
                workerId: c.WORKER_ID,
                results: c.parse(h.input, h.config),
                finished: !0
            }) : (r.File && h.input instanceof File || h.input instanceof Object) && (h = c.parse(h.input, h.config)) && r.postMessage({
                workerId: c.WORKER_ID,
                results: h,
                finished: !0
            })
        }), (f.prototype = Object.create(d.prototype)).constructor = f, (m.prototype = Object.create(d.prototype)).constructor = m, (y.prototype = Object.create(y.prototype)).constructor = y, (w.prototype = Object.create(d.prototype)).constructor = w, c
    })
})(Rh);
var m2 = Rh.exports;
const p2 = Jd(m2);

function h2() {
    const [e, t] = A.useState([]), [n, r] = A.useState(!0), [i, s] = A.useState(null), [o, l] = A.useState("cap1"), [u, c] = A.useState("impacto"), [d, f] = A.useState(null), [m, y] = A.useState(!1), [w, j] = A.useState(null), [T, v] = A.useState(null), [p, g] = A.useState([{
        id: 1,
        text: "Olá, pessoal. Sou o professor Stefano e dou aula de inglês. Estou na escola a 17 anos, tenho um carinho muito especial por essa escola que me acolheu como se fosse uma família, tenho uma turma muito especial guardada no meu coração até hoje, pois foi a primeira turma que eu acompanhei do primeiro ano do nível fundamental até o último ano do ensino médio, até hoje tenho grandes amizades e de vez em quando ainda nos encontramos.",
        author: "Stefano",
        role: "Professor"
    }, {
        id: 2,
        text: "É um colégio referência na zona norte de São Paulo. Aprecio e admiro demais a organização pedagógica e também o incentivo cultural, principalmente da parte da direção para os alunos.",
        author: "Marcela Buttazzi",
        role: "Professora do Técnico"
    }, {
        id: 3,
        text: "Cheguei aqui em 2002, eu poderia já estar aposentado, porém quero e vou ter o prestígio de participar dos 100 anos dessa escola maravilhosa que mudou minha vida. Estou aqui nessa escola a 23 anos, meu nome é Eraldo Sampaio. Nesses 23 anos tivemos muita alegria! Nossa escola proporciona aos nossos alunos a serem pessoas melhores, do bem, cidadãos de caráter e a serem protagonistas. Comigo os alunos tem um ótimo relacionamento, diante de conversas diretas com os alunos eu sugiro projetos, passeios acadêmicos, teatros, etc.",
        author: "Eraldo Sampaio",
        role: "Diretor"
    }, {
        id: 4,
        text: "Colégio Silva Jardim, eu estou aqui a pouco tempo, porém eu conheço a escola a muitos anos. O Silva Jardim é uma instituição de ensino secundário, que carrega no meu ponto de vista, valores e princípios, pautados na relação de ensino e aprendizado, priorizando os discentes. Com isso, a escola prestes a completar seu centenário, se tornou ao longo do tempo uma referência quando o assunto é educação.",
        author: "Érico Bernardes",
        role: "Professor"
    }, {
        id: 5,
        text: "A escola é muito boa, um momento marcante foi com a primeira classe, quando tivemos o primeiro interclasse que foi no Parque da Juventude, conseguimos utilizar lá quase todas as quadras.",
        author: "Lucas",
        role: "Professor Educação Física"
    }, {
        id: 6,
        text: "Eu gosto da escola! Os alunos são bem educados, principalmente os alunos do terceiros anos. Ela é bem firme e exigente em relação ao uniforme e ao respeito com os funcionários. Eu gosto de trabalhar aqui.",
        author: "Silvia",
        role: "Inspetora"
    }, {
        id: 7,
        text: "Entrei na escola 2014 e saí em agosto de 2023, porém voltei novamente em dezembro de 2023. O conhecimento que eu tenho da escola como trabalhadora e como mãe de alunos que estudaram aqui, a escola é muito boa, a direção é muito boa, os alunos são bem simpáticos, principalmente os alunos do terceiro ano, que sempre me tratam super bem.",
        author: "Nazaré",
        role: "Colaboradora da escola"
    }, {
        id: 8,
        text: "Eu estudo aqui desde o sexto ano. Pouco tempo depois de eu entrar na escola, um certo aluno da minha sala começou a mexer comigo, porém, conforme o tempo foi passando, o bullying só aumentava. Tempos depois dessa perseguição, ele simplesmente começou a mandar fotos pra minha família, até que decidi tomar uma atitude. Fui até a direção e comecei descrever o ocorrido e o que ele já vinha fazendo a algum tempo, nisso a direção chamou os pais deles e decidiram expulsar o garoto, o qual fazia bullying comigo. Diante a esse acontecimento, eu quero mostrar o quanto a escola prezou e me valorizou como aluno, pois tomou uma atitude de imediato e não aceitou esse tipo de coisa. Já se passou um tempinho desse acontecimento, mas um fato verídico é, que a escola continua com essa atenção com os alunos.",
        author: "Eduardo",
        role: "Aluno"
    }, {
        id: 9,
        text: "As festas juninas do Silva Jardim eram as melhores do bairro! A comunidade toda se envolvia. Que saudade daqueles tempos.",
        author: "Miguel Oliveira",
        year: "1988",
        role: "Ex-aluno"
    }, {
        id: 10,
        text: "Minha mãe, eu e minha filha estudamos no Silva Jardim. É uma tradição familiar que se mantém há três gerações.",
        author: "Patricia Lima",
        year: "1995",
        role: "Ex-aluna e mãe"
    }, {
        id: 11,
        text: "O professor de educação física era incrível! Me incentivou no esporte e hoje sou técnico de vôlei profissional.",
        author: "Anderson Souza",
        year: "1992",
        role: "Ex-aluno"
    }, {
        id: 12,
        text: "Como coordenadora pedagógica, sempre admirei o comprometimento dos professores do Silva Jardim com a educação de qualidade.",
        author: "Profª. Marcia Alves",
        year: "2000-2015",
        role: "Ex-coordenadora"
    }, {
        id: 13,
        text: "A escola me ensinou a importância da amizade. Até hoje mantenho contato com colegas de classe de 30 anos atrás.",
        author: "Sandra Pereira",
        year: "1990",
        role: "Ex-aluna"
    }, {
        id: 14,
        text: "O Silva Jardim me deu oportunidades que eu nunca pensei que teria. Participei de olimpíadas de matemática e descobri minha vocação.",
        author: "Fernando Castro",
        year: "1998",
        role: "Ex-aluno, engenheiro"
    }, {
        id: 15,
        text: "Ser merendeira no Silva Jardim foi muito gratificante. Via a alegria das crianças na hora do lanche e me sentia parte da família escolar.",
        author: "Dona Rosa",
        year: "1985-2010",
        role: "Ex-merendeira"
    }, {
        id: 16,
        text: "A escola sempre apoiou alunos com dificuldades. Tive dislexia e recebi todo o suporte necessário para me formar.",
        author: "Bruno Martins",
        year: "2001",
        role: "Ex-aluno"
    }, {
        id: 17,
        text: "Os projetos ambientais do Silva Jardim despertaram minha consciência ecológica. Hoje trabalho com sustentabilidade.",
        author: "Camila Verde",
        year: "2005",
        role: "Ex-aluna"
    }, {
        id: 18,
        text: "Como zelador, cuidei da escola como se fosse minha casa. Cada cantinho tinha uma história, cada sala uma memória especial.",
        author: "Seu José",
        year: "1975-2000",
        role: "Ex-zelador"
    }, {
        id: 19,
        text: "O coral da escola marcou minha vida. Foi onde descobri minha voz e hoje sou cantora profissional.",
        author: "Isabela Melodia",
        year: "1996",
        role: "Ex-aluna, cantora"
    }, {
        id: 20,
        text: "Estudar no Silva Jardim durante os anos 80 foi uma experiência única. A escola respirava cultura e conhecimento.",
        author: "Dr. Marcos Ribeiro",
        year: "1983",
        role: "Ex-aluno, médico"
    }, {
        id: 21,
        text: "A quadra de esportes foi onde aprendi sobre trabalho em equipe e superação. Lições que levo para a vida toda.",
        author: "Juliana Esporte",
        year: "1999",
        role: "Ex-aluna"
    }, {
        id: 22,
        text: "Como psicóloga escolar, pude ajudar muitos alunos. O Silva Jardim sempre priorizou o bem-estar emocional dos estudantes.",
        author: "Psic. Renata Cuidado",
        year: "2010-2020",
        role: "Ex-psicóloga escolar"
    }, {
        id: 23,
        text: "Meu avô foi um dos primeiros alunos, meu pai estudou aqui, eu também, e agora meu filho. O Silva Jardim é parte da nossa história familiar.",
        author: "Geraldo Tradição",
        year: "1994",
        role: "Ex-aluno, pai"
    }]), N = [{
        id: 1,
        src: "https://www.diariozonanorte.com.br/ha-117-anos-128-contos-de-reis-deram-inicio-ao-tucuruvi/tucuruvi2/",
        alt: "Fachada do Grupo Escolar Silva Jardim, década de 1940",
        caption: "Fachada histórica do Grupo Escolar Silva Jardim na década de 1940"
    }, {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9_cWLVKpqydGS-cUr0ykFHXGnUa2KNNLUTeDhugwM3Y0FyRd4aTmR9ig8JGeEVwX4eU&usqp=CAU",
        alt: "Estudantes reunidos em frente ao prédio da escola, anos 1980",
        caption: "Estudantes reunidos em frente ao prédio da escola nos anos 1980"
    }, {
        id: 3,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvQtSkBwYG3Z-HoKY2Pft_EnfRQDVh6ptzQ&s",
        alt: "Retrato de Antonio da Silva Jardim, patrono da escola",
        caption: "Retrato de Antônio da Silva Jardim, patrono da escola"
    }, {
        id: 4,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNKC2wEbmgBgKp3fFqhfK798zfkI5K4e84JsC9iW5qotAoFfSoc4DwcNFER-_LFDPmy0&usqp=CAU",
        alt: "Brasão de Silva Jardim",
        caption: "Brasão oficial do município de Silva Jardim"
    }, {
        id: 5,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISQsg2QBz1Y4lmEL2CotTDJGI2WkG0pM_S56eV3CDs9jUxmO008Lu6SaHGNVUDy7Yu0g&usqp=CAU",
        alt: "Foto antiga do prédio escolar",
        caption: "Registro histórico do prédio escolar em seus primeiros anos"
    }, {
        id: 6,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4UwBSDoEyhVLguu9AB2G5GffRpInU4CcIujHEUyyX-dqIabLgFVldZGY_NnTsMNPpp8&usqp=CAU",
        alt: "Grupo de estudantes em frente à escola, década de 1920",
        caption: "Grupo de estudantes em frente à escola na década de 1920"
    }, {
        id: 7,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdmnftePqzIqH835T73jeRdmMUVTBbVxhFyv_l2h2NfGM_vyHKUWXiRzHtY1jAP5IQs4&usqp=CAU",
        alt: "Vesúvio - local da morte de Silva Jardim",
        caption: "Monte Vesúvio na Itália, local da trágica morte de Silva Jardim"
    }, {
        id: 8,
        src: "https://i.pinimg.com/236x/d5/9f/94/d59f940be8ef5e063642e1bd6551b94c.jpg",
        alt: "Vista aérea da escola Silva Jardim",
        caption: "Vista aérea contemporânea da Escola Silva Jardim"
    }], P = "https://docs.google.com/spreadsheets/d/1kQDuvDfQHIDjSV-4rDfz0d4uWdfzjhLvkpPcg6zN1lE/export?format=csv", _ = "https://docs.google.com/forms/d/e/1FAIpQLSfAJQKwRlfjdgbNnM5vbmMRGDqoJlzvymVM-HdCY5Q_PSivaA/viewform?usp=dialog", E = async () => {
        try {
            r(!0), s(null);
            const C = await (await fetch(`${P}&_ts=${Date.now()}`)).text(),
                b = p2.parse(C, {
                    header: !0,
                    skipEmptyLines: !0
                }).data.filter(V => V.Nome && V.Comentario && V.Data);
            t(b.reverse())
        } catch (S) {
            s("Erro ao carregar comentários"), console.error("Erro ao carregar dados:", S)
        } finally {
            r(!1)
        }
    };
    A.useEffect(() => {
        E()
    }, []);
    const h = S => {
            try {
                return new Date(S).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })
            } catch {
                return S
            }
        },
        x = S => {
            var C;
            (C = document.getElementById(S)) == null || C.scrollIntoView({
                behavior: "smooth"
            }), y(!1)
        },
        k = S => {
            j(S)
        },
        R = (S, C, I) => {
            g(b => b.map(V => V.id === S ? { ...V,
                text: C,
                author: I
            } : V)), j(null)
        },
        D = () => {
            j(null)
        },
        z = S => {
            v(S)
        },
        H = () => {
            v(null)
        },
        ce = S => {
            if (T === null) return;
            const C = N.findIndex(b => b.id === T);
            let I;
            S === "prev" ? I = C > 0 ? C - 1 : N.length - 1 : I = C < N.length - 1 ? C + 1 : 0, v(N[I].id)
        },
        J = [{
            title: "Anos 1920",
            subtitle: "Fundação",
            content: '1926 – Fundação do Grupo Escolar "Silva Jardim" (em homenagem ao político Antônio da Silva Jardim). Esse grupo escolar já atendia alunos da região, e seu prédio definitivo seria projetado uma década depois.'
        }, {
            title: "Anos 1930",
            subtitle: "Consolidação e Expansão da Infraestrutura",
            content: "1936 – O arquiteto José Maria da Silva Neves elaborou o projeto do novo edifício escolar na Av. Tucuruvi, 724. Segundo registros acadêmicos, o prédio foi concluído em 12/3/1936 (data de inauguração do Grupo Escolar)."
        }, {
            title: "Anos 1940",
            subtitle: "Modernização e Mudanças pedagógicas",
            content: "1940–1949 – Mudanças pedagógicas significativas nesse período. A escola seguiu funcionando como instituição de 1.º grau (ensino fundamental), consolidando-se na comunidade local."
        }, {
            title: "Anos 1950",
            subtitle: "Inovação Pedagógica e Ampliação dos Serviços",
            content: '1950–1959 – Continuidade das atividades escolares regulares, possivelmente ainda incluindo turmas de "Ginásio" (antigo Ensino Médio da época).'
        }, {
            title: "Anos 1960",
            subtitle: "Evidência nos Indicadores de Desempenho",
            content: "1960–1969 – A escola manteve ensino fundamental e, eventualmente, cursos de Ginásio, até mudanças no sistema educacional brasileiro no fim da década."
        }, {
            title: "Anos 1970",
            subtitle: "Atualizações, Investimentos e o Compromisso com a Modernização",
            content: "1970–1979 – Mantida como escola estadual de 1.º grau, sem informação pública sobre reformas estruturais. Mudanças administrativas gerais ocorreram na rede estadual."
        }, {
            title: "Anos 1980",
            subtitle: "Tradição e Desafios para o Futuro",
            content: "1980–1989 – Período de estabilidade: a escola continuou atendendo o ensino fundamental (e, eventualmente, ensino médio, conforme mudanças de nomenclatura da rede)."
        }, {
            title: "Anos 1990",
            subtitle: "Expansão Geral do Ensino Fundamental",
            content: "1990–1999 – A escola manteve suas atividades normais. Nos últimos anos do século, houve expansão geral do ensino fundamental no estado."
        }, {
            title: "Anos 2000",
            subtitle: "Expansão da Infraestrutura e Ensino Religioso Facultativo",
            content: '2002 – Implementação opcional do Ensino Religioso nas escolas estaduais. 2007 – A EE Silva Jardim sediou a "Feira de Biologia" do Projeto Celular do Instituto de Biociências da USP.'
        }, {
            title: "Anos 2010",
            subtitle: "Greve, Reformas e Novas Iniciativas Educacionais",
            content: "Mar/2010 – Professores e funcionários da Silva Jardim aderiram à greve estadual da educação pública paulista."
        }, {
            title: "2019",
            subtitle: "Programa de Ensino Integral e Debates Comunitários",
            content: "2019 – A escola foi contemplada pelo Programa de Ensino Integral (PEI) do estado e pelo curso EJATEC (Educação de Jovens e Adultos com itinerário Tecnológico). A implantação desses programas gerou debate: a comunidade escolar chegou a lançar uma petição pública contra as mudanças propostas durante a pandemia."
        }, {
            title: "2021",
            subtitle: "Desempenho em Índices de Qualidade",
            content: "2021 – Desempenho em índices de qualidade: o IDEB (índice nacional) dos anos finais (6º-9º anos) da EE Silva Jardim foi 5,30 em 2021, atingindo a meta estadual para a série (5,3). O IDESP (índice estadual) correspondente ficou em 3,39."
        }, {
            title: "2022",
            subtitle: "Projeto de Recuperação Intensiva",
            content: '2022 – Como compensação às perdas da pandemia, a escola participou do "Projeto de Recuperação Intensiva" da Secretaria da Educação (programa para reforço escolar emergencial).'
        }, {
            title: "2020–2024",
            subtitle: "Programas Estaduais de Apoio e Inovação",
            content: "2020–2024 – A EE Silva Jardim participa de vários programas estaduais de apoio e inovação: além do envolvimento em projetos como Centro de Estudos de Línguas, Centro de Mídias, Inova Educação, Novotec Integrado, Dignidade Íntima e Professores Conectados."
        }],
        B = [{
            id: "inicio",
            label: "Início",
            icon: ra
        }, {
            id: "sobre-site",
            label: "Sobre o Site",
            icon: Bd
        }, {
            id: "historia",
            label: "História",
            icon: $d
        }, {
            id: "legado",
            label: "Legado",
            icon: zd
        }, {
            id: "linha-do-tempo",
            label: "Linha do Tempo",
            icon: Hw
        }, {
            id: "galeria",
            label: "Galeria",
            icon: ea
        }, {
            id: "depoimentos",
            label: "Depoimentos",
            icon: na
        }, {
            id: "fontes",
            label: "Bibliografia",
            icon: xn
        }, {
            id: "comentarios",
            label: "Comentários",
            icon: Hd
        }];
    return a.jsxs("div", {
        className: "min-h-screen",
        style: {
            background: "var(--gray-light)"
        },
        children: [a.jsx("nav", {
            className: "silva-jardim-nav",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs(L.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "flex items-center gap-3",
                        children: [a.jsx(ra, {
                            className: "h-8 w-8 text-white"
                        }), a.jsx("span", {
                            className: "text-white font-bold text-xl",
                            children: "Silva Jardim"
                        })]
                    }), a.jsx("div", {
                        className: "hidden md:flex items-center gap-6",
                        children: B.map(S => a.jsxs("button", {
                            onClick: () => x(S.id),
                            className: "flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10",
                            children: [a.jsx(S.icon, {
                                className: "h-4 w-4"
                            }), S.label]
                        }, S.id))
                    }), a.jsx("button", {
                        className: "md:hidden text-white p-2",
                        onClick: () => y(!m),
                        children: m ? a.jsx(Wd, {
                            className: "h-6 w-6"
                        }) : a.jsx(Xw, {
                            className: "h-6 w-6"
                        })
                    })]
                }), m && a.jsx(L.div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "md:hidden mt-4 pb-4 border-t border-white/20",
                    children: a.jsx("div", {
                        className: "flex flex-col gap-2 mt-4",
                        children: B.map(S => a.jsxs("button", {
                            onClick: () => x(S.id),
                            className: "flex items-center gap-3 text-white hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10 text-left",
                            children: [a.jsx(S.icon, {
                                className: "h-4 w-4"
                            }), S.label]
                        }, S.id))
                    })
                })]
            })
        }), a.jsxs("section", {
            id: "inicio",
            className: "silva-jardim-hero",
            children: [a.jsx(L.h1, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-5xl md:text-7xl font-bold mb-4 hero-glow",
                style: {
                    animation: "fadeInDown 1s"
                },
                children: "Centenário do Silva Jardim"
            }), a.jsx(L.p, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .3
                },
                className: "text-xl md:text-2xl max-w-2xl mx-auto text-shadow",
                style: {
                    animation: "fadeInUp 1.2s"
                },
                children: "100 anos formando cidadãos para o futuro."
            })]
        }), a.jsx("section", {
            id: "sobre-site",
            className: "py-16",
            style: {
                background: "linear-gradient(120deg, #f3f4f7 80%, #e0e3ea 100%)"
            },
            children: a.jsxs("div", {
                className: "max-w-4xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-8",
                    style: {
                        color: "#23272f"
                    },
                    children: "Sobre o Site"
                }), a.jsxs("div", {
                    className: "space-y-6 text-gray-700",
                    children: [a.jsx(L.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "text-lg leading-relaxed",
                        children: "Criado para celebrar o centenário da Escola Estadual Silva Jardim, este portal reúne informações históricas, curiosidades, depoimentos, fotos, documentos e registros que contam 100 anos de dedicação à comunidade do Tucuruvi."
                    }), a.jsx(L.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .1
                        },
                        className: "text-lg leading-relaxed",
                        children: "Nosso objetivo é preservar a memória da escola, valorizar sua importância local e oferecer um espaço interativo para ex-alunos, professores, colaboradores e toda a sociedade."
                    }), a.jsx(L.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .2
                        },
                        className: "grid md:grid-cols-2 gap-6 mt-8",
                        children: [{
                            title: "Linha do Tempo Interativa",
                            desc: "acompanhe marcos históricos da criação em 1925 até os dias atuais."
                        }, {
                            title: "Depoimentos em Texto e Vídeo",
                            desc: "relatos emocionantes de quem viveu a tradição Silva Jardim."
                        }, {
                            title: "Galeria de Imagens",
                            desc: "fotografias antigas e contemporâneas digitalizadas em alta resolução."
                        }, {
                            title: "Documentos Históricos",
                            desc: "atas, jornais de época e projetos pedagógicos disponíveis para download."
                        }].map((S, C) => a.jsxs("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-gray-800 mb-2",
                                children: S.title
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: S.desc
                            })]
                        }, C))
                    })]
                })]
            })
        }), a.jsx("section", {
            id: "historia",
            className: "py-16",
            style: {
                background: "var(--white)"
            },
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-8",
                    style: {
                        color: "var(--navy)"
                    },
                    children: "História"
                }), a.jsxs("div", {
                    className: "tabs",
                    children: [a.jsx("div", {
                        className: "flex justify-center gap-4 mb-8 flex-wrap",
                        children: [{
                            id: "cap1",
                            title: "O Patrono",
                            subtitle: "Antônio da Silva Jardim"
                        }, {
                            id: "cap2",
                            title: "A Fundação",
                            subtitle: "Tucuruvi nos anos 1920"
                        }, {
                            id: "cap3",
                            title: "Memórias",
                            subtitle: "Curiosidades e Registros"
                        }].map(S => a.jsxs("button", {
                            onClick: () => l(S.id),
                            className: `px-6 py-4 rounded-lg font-semibold transition-all duration-300 text-center ${o===S.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"}`,
                            children: [a.jsx("div", {
                                className: "text-sm font-bold",
                                children: S.title
                            }), a.jsx("div", {
                                className: "text-xs opacity-80",
                                children: S.subtitle
                            })]
                        }, S.id))
                    }), a.jsxs(L.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white rounded-xl shadow-xl p-8 min-h-[600px]",
                        children: [o === "cap1" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsx("div", {
                                className: "text-center mb-8",
                                children: a.jsxs(L.div, {
                                    initial: {
                                        scale: .8,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    className: "relative inline-block",
                                    children: [a.jsx("img", {
                                        src: "https://i0.wp.com/www.osaqua.com.br/wp-content/uploads/2021/05/Antonio-da-Silva-Jardim-Histituto-Historico-e-Geografico-de-Santos.jpg?resize=200%2C350",
                                        alt: "Antonio da Silva Jardim",
                                        className: "mx-auto rounded-lg shadow-lg max-w-xs border-4 border-blue-100"
                                    }), a.jsx("div", {
                                        className: "absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold",
                                        children: "1860-1891"
                                    })]
                                })
                            }), a.jsx(L.div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: .3
                                },
                                className: "bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500",
                                children: a.jsxs("h3", {
                                    className: "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [a.jsx(Bd, {
                                        className: "h-6 w-6 text-blue-600"
                                    }), "O Homem por Trás do Nome"]
                                })
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .4
                                },
                                className: "bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300",
                                children: [a.jsxs("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [a.jsx(Qi, {
                                        className: "h-5 w-5 text-blue-600"
                                    }), "Texto Completo - Capítulo 1: O Patrono"]
                                }), a.jsx("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: a.jsxs("div", {
                                        className: "prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4",
                                        children: [a.jsxs("p", {
                                            children: [a.jsx("strong", {
                                                children: "Antônio da Silva Jardim"
                                            }), " foi um proeminente advogado, jornalista e ativista político brasileiro, amplamente reconhecido por seu envolvimento ativo nos movimentos pela abolição da escravatura e pela implantação da república. Ele defendia que tanto a Abolição quanto a República deveriam engendrar mudanças significativas para toda a sociedade brasileira."]
                                        }), a.jsx("p", {
                                            children: "Ele nasceu na vila de Nossa Senhora da Lapa de Capivari, que atualmente é o município que leva seu nome, no estado do Rio de Janeiro. Filho de Gabriel da Silva Jardim, um educador humilde que lecionava em sua própria propriedade, e de Felismina Leopoldina de Mendonça, vinha de uma família simples, mas marcada por valores sólidos. Por parte de pai, era neto de Antônio da Silva Jardim e Dona Luciana Maria; por parte de mãe, de Leandro Freire Ribeiro e Dona Lauriana Leopoldina do Amor Divino."
                                        }), a.jsxs("p", {
                                            children: ["Buscando uma educação mais avançada, foi enviado a Niterói, onde estudou nos colégios Silva Pontes e São Bento. Ali, aprendeu português, francês, geografia e latim. Durante esse período, ajudou a fundar o jornal estudantil ", a.jsx("em", {
                                                children: "O Laboro Literário"
                                            }), ", que marcou o início de sua militância política em defesa da liberdade e da justiça."]
                                        }), a.jsx("p", {
                                            children: "Com poucos recursos financeiros, enfrentou grandes desafios durante sua trajetória acadêmica. Mudou-se para o Externato Jasper, onde também passou a trabalhar para custear os estudos. Determinado, seguiu para São Paulo e ingressou na tradicional Faculdade de Direito de São Paulo, onde se engajou nas discussões políticas da época, especialmente nas ideias republicanas e na luta abolicionista."
                                        }), a.jsx("p", {
                                            children: "Durante sua juventude, aproximou-se da influente família do Conselheiro Martim Francisco de Andrada. Foi nesse meio que conheceu Ana Margarida, com quem se casou. Ela era neta do Patriarca da Independência, José Bonifácio de Andrada e Silva. O casal teve quatro filhos, incluindo um que recebeu o nome do pai como homenagem."
                                        }), a.jsx("p", {
                                            children: "Movido por seus ideais, Silva Jardim abandonou a advocacia, vendeu seu escritório e dissolveu sua sociedade para se dedicar integralmente à causa republicana. Viajou intensamente entre os estados do Rio de Janeiro, São Paulo e Minas Gerais, participando de comícios, escrevendo, discursando e enfrentando tanto aclamações quanto perseguições."
                                        }), a.jsx("p", {
                                            children: "Mesmo com a saúde fragilizada desde a infância por causa do paludismo, manteve-se firme em sua militância. Após a Proclamação da República, no entanto, foi ignorado pelos militares que assumiram o poder. Tentou se eleger deputado, mas não teve sucesso. Desencantado, afastou-se da política e buscou descanso e novas experiências na Europa."
                                        }), a.jsxs("div", {
                                            className: "bg-red-50 p-4 rounded-lg border-l-4 border-red-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-red-800 mb-2",
                                                children: "🌋 O Trágico Final"
                                            }), a.jsx("p", {
                                                className: "text-red-700",
                                                children: "Em 1891, aos 30 anos, durante uma visita a Pompeia, na Itália, decidiu explorar o vulcão Vesúvio. Apesar dos alertas sobre possíveis riscos, foi tragado por uma fenda que se abriu repentinamente na cratera. Sua morte permanece envolta em mistério — não se sabe ao certo se foi um acidente ou um ato deliberado."
                                            })]
                                        }), a.jsxs("p", {
                                            children: ["De acordo com reportagem do jornal ", a.jsx("em", {
                                                children: "A Pátria Mineira"
                                            }), ', publicada em 30 de julho de 1891, em São João del-Rei, o episódio foi testemunhado por um guia e seu amigo Joaquim Carneiro de Mendonça. A matéria, baseada na "Carta Parisiense" de Xavier de Carvalho, relata que Silva Jardim chegou a tentar escapar, mas ficou ferido, enquanto Carneiro foi socorrido por um guia local.']
                                        }), a.jsx("div", {
                                            className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400",
                                            children: a.jsx("p", {
                                                className: "text-blue-700 font-semibold",
                                                children: "Como homenagem a seu legado, o antigo município de Capivari passou a se chamar Silva Jardim — um tributo eterno a uma vida dedicada à liberdade, à justiça social e à transformação do Brasil."
                                            })
                                        })]
                                    })
                                })]
                            }), a.jsxs("div", {
                                className: "prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .5
                                    },
                                    className: "bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400",
                                    children: [a.jsx("p", {
                                        className: "font-semibold text-amber-800 mb-2",
                                        children: "💡 Você sabia?"
                                    }), a.jsx("p", {
                                        className: "text-amber-700",
                                        children: "Silva Jardim foi um dos mais jovens e eloquentes defensores da República no Brasil, dedicando sua vida inteira à causa da liberdade e da justiça social."
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .7
                                    },
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [a.jsxs("div", {
                                        className: "bg-blue-50 p-4 rounded-lg",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-blue-800 mb-2",
                                            children: "🎓 Formação"
                                        }), a.jsxs("ul", {
                                            className: "text-sm space-y-1 text-blue-700",
                                            children: [a.jsx("li", {
                                                children: "• Colégios Silva Pontes e São Bento (Niterói)"
                                            }), a.jsx("li", {
                                                children: "• Faculdade de Direito de São Paulo"
                                            }), a.jsx("li", {
                                                children: '• Fundador do jornal "O Laboro Literário"'
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-green-50 p-4 rounded-lg",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-green-800 mb-2",
                                            children: "⚖️ Causas Defendidas"
                                        }), a.jsxs("ul", {
                                            className: "text-sm space-y-1 text-green-700",
                                            children: [a.jsx("li", {
                                                children: "• Abolição da escravatura"
                                            }), a.jsx("li", {
                                                children: "• Proclamação da República"
                                            }), a.jsx("li", {
                                                children: "• Justiça social e liberdade"
                                            })]
                                        })]
                                    })]
                                }), a.jsx(L.p, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .9
                                    },
                                    className: "text-lg font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg",
                                    children: "É em homenagem a este grande brasileiro que nossa escola carrega o nome Silva Jardim há quase 100 anos."
                                })]
                            })]
                        }), o === "cap2" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsx(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500",
                                children: a.jsxs("h3", {
                                    className: "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [a.jsx($d, {
                                        className: "h-6 w-6 text-green-600"
                                    }), "Tucuruvi e a Fundação da Escola"]
                                })
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .2
                                },
                                className: "bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300",
                                children: [a.jsxs("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [a.jsx(Qi, {
                                        className: "h-5 w-5 text-green-600"
                                    }), "Texto Completo - Capítulo 2: A Fundação"]
                                }), a.jsx("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: a.jsxs("div", {
                                        className: "prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4",
                                        children: [a.jsxs("div", {
                                            className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-blue-800 mb-2",
                                                children: "🏛️ Contexto Histórico dos Anos 1920"
                                            }), a.jsx("p", {
                                                className: "text-blue-700",
                                                children: "A educação pública ainda chegava lentamente aos bairros periféricos de São Paulo. A reforma educacional de 1920 em SP incluiu um recenseamento escolar para identificar o analfabetismo infantil. Na prática, o Tucuruvi era área rural até por volta de 1918 e só então passou a ver surgirem instituições públicas: igrejas, cinemas e escolas públicas começaram a aparecer gradualmente na região."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-green-50 p-6 rounded-lg",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-green-800 mb-4",
                                                children: "📅 Cronologia da Escola em Tucuruvi"
                                            }), a.jsxs("div", {
                                                className: "space-y-3 text-green-700",
                                                children: [a.jsxs("div", {
                                                    className: "border-l-2 border-green-300 pl-4",
                                                    children: [a.jsx("strong", {
                                                        children: "24 fev 1922"
                                                    }), " – Inauguração das Escolas Reunidas do Tucuruvi, primeira escola pública do bairro, cujo diretor foi o professor Nestor Pereira Leite."]
                                                }), a.jsxs("div", {
                                                    className: "border-l-2 border-green-300 pl-4",
                                                    children: [a.jsx("strong", {
                                                        children: "fev 1925"
                                                    }), " – Criação do Grupo Escolar do Tucuruvi (localizado na Rua Ausônia, hoje Av. Tucuruvi, 724) com 12 salas de aula; o diretor era o professor Antônio M. Rosa."]
                                                }), a.jsxs("div", {
                                                    className: "border-l-2 border-green-300 pl-4",
                                                    children: [a.jsx("strong", {
                                                        children: "1936"
                                                    }), ' – Elaboração do projeto arquitetônico do Grupo Escolar Silva Jardim (Av. Tucuruvi, 724) – esse dado consta em arquivo da FAU-USP: "Data do projeto: 1936".']
                                                }), a.jsxs("div", {
                                                    className: "border-l-2 border-green-300 pl-4",
                                                    children: [a.jsx("strong", {
                                                        children: "29 set 1938"
                                                    }), " – Inauguração oficial do Grupo Escolar Silva Jardim, em homenagem ao político Antônio da Silva Jardim. Na cerimônia, o diretor continuava sendo Antônio M. Rosa e estiveram presentes autoridades como o futuro governador Adhemar de Barros."]
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-amber-800 mb-2",
                                                children: "📋 Registros Oficiais e Documentos do Governo"
                                            }), a.jsxs("p", {
                                                className: "text-amber-700 mb-3",
                                                children: ["Não foram encontrados decretos ou portarias estaduais datados de 1926 criando a escola Silva Jardim. Na verdade, os registros oficiais posteriores confirmam o quadro acima. Por exemplo, o ", a.jsx("strong", {
                                                    children: "Decreto-lei nº 42.030/1963"
                                                }), ' do Estado de São Paulo menciona expressamente a existência do Grupo Escolar "Silva Jardim" ao estabelecer a criação do Grupo Escolar do Tucuruvi via transferência de classes.']
                                            }), a.jsx("p", {
                                                className: "text-amber-700",
                                                children: "Esse decreto, embora muito posterior a 1926, é documento oficial do governo paulista atestando a continuidade da Silva Jardim. Não localizamos menções a 1926 na imprensa ou na legislação daquela época; sabe-se apenas, por historiadores locais, que a construção do prédio sede foi projetada em 1936."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-purple-50 p-6 rounded-lg",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-purple-800 mb-4",
                                                children: "👨‍🏫 Primeiros Diretores e Professores"
                                            }), a.jsxs("p", {
                                                className: "text-purple-700 mb-3",
                                                children: ["As fontes históricas apontam o professor ", a.jsx("strong", {
                                                    children: "Antônio M. Rosa"
                                                }), " como primeiro diretor tanto do Grupo Escolar do Tucuruvi (1925) quanto, depois, do Grupo Escolar Silva Jardim (inaugurado em 1938). Em relatos de ex-alunos, aparece também o nome de ", a.jsx("strong", {
                                                    children: "Ulisses Guimarães"
                                                }), " (que viria a ser importante político nacional) como diretor da escola nesse período, conforme depoimento de quem cursou os primeiros anos do Colégio Silva Jardim na década de 1930."]
                                            }), a.jsxs("p", {
                                                className: "text-purple-700",
                                                children: ["Já a professora primária ", a.jsx("strong", {
                                                    children: "Mariazinha"
                                                }), " é lembrada como primeira professora de classe por um ex-aluno, mas não há fonte publicada que confirme data ou cargo formal."]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-gray-100 p-6 rounded-lg",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-gray-800 mb-4",
                                                children: "🏫 Transformações ao Longo dos Anos"
                                            }), a.jsxs("div", {
                                                className: "space-y-3 text-gray-700",
                                                children: [a.jsxs("p", {
                                                    children: [a.jsx("strong", {
                                                        children: "Década de 1960:"
                                                    }), ' A escola passou a oferecer o 1º grau, conhecido como Curso Normal Regional "Frei Rogério Neuhaus".']
                                                }), a.jsxs("p", {
                                                    children: [a.jsx("strong", {
                                                        children: "1962:"
                                                    }), ' A instituição foi transformada em Ginásio Normal "Professora Eládia de Maia Barbosa", ampliando sua oferta educacional.']
                                                }), a.jsxs("p", {
                                                    children: [a.jsx("strong", {
                                                        children: "12 jun. 1963:"
                                                    }), ' Decreto Estadual nº 42.030/1963 (governo Adhemar de Barros) cria formalmente o "Grupo Escolar do Tucuruvi" e transfere para ele 8 salas originárias do já existente Grupo Escolar Silva Jardim. Esse ato comprova que, em 1963, a Escola Silva Jardim já funcionava há tempo na capital.']
                                                }), a.jsxs("p", {
                                                    children: [a.jsx("strong", {
                                                        children: "1971:"
                                                    }), " A escola passou a se chamar Escola Básica Silva Jardim, refletindo sua expansão e diversificação de cursos."]
                                                }), a.jsxs("p", {
                                                    children: [a.jsx("strong", {
                                                        children: "1987:"
                                                    }), ' A denominação foi alterada para Colégio Estadual "Silva Jardim", consolidando seu status como instituição de ensino fundamental e médio.']
                                                }), a.jsxs("p", {
                                                    children: [a.jsx("strong", {
                                                        children: "2000:"
                                                    }), " A escola recebeu sua nomenclatura atual, Escola de Educação Básica Silva Jardim, mantendo-se até os dias atuais."]
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-indigo-800 mb-3",
                                                children: "🏢 Estrutura Atual"
                                            }), a.jsxs("p", {
                                                className: "text-indigo-700 mb-3",
                                                children: ["Atualmente, a Escola de Educação Básica Silva Jardim ocupa uma área total de ", a.jsx("strong", {
                                                    children: "10.000 m²"
                                                }), ", com um prédio principal de ", a.jsx("strong", {
                                                    children: "1.779,33 m²"
                                                }), " e um ginásio de ", a.jsx("strong", {
                                                    children: "854,90 m²"
                                                }), ". A instituição atende aproximadamente ", a.jsx("strong", {
                                                    children: "960 alunos"
                                                }), " distribuídos em ", a.jsx("strong", {
                                                    children: "34 turmas"
                                                }), ", abrangendo séries iniciais, finais do ensino fundamental e ensino médio."]
                                            }), a.jsxs("p", {
                                                className: "text-indigo-700",
                                                children: ["Além disso, oferece serviços de ", a.jsx("strong", {
                                                    children: "Atendimento Educacional Especializado (SAEDE)"
                                                }), " para alunos com necessidades específicas."]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-rose-800 mb-2",
                                                children: "🎖️ O Patrono da Escola"
                                            }), a.jsxs("p", {
                                                className: "text-rose-700",
                                                children: ["O patrono da escola é o ilustre político e ativista ", a.jsx("strong", {
                                                    children: "Antônio da Silva Jardim"
                                                }), ", reconhecido por sua luta pela implantação da República e pela abolição dos escravos. Seu nome atual é uma homenagem ao jornalista e político fluminense que dedicou sua vida à transformação social do Brasil."]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-teal-50 p-6 rounded-lg",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-teal-800 mb-4",
                                                children: "🏛️ História do Município Silva Jardim"
                                            }), a.jsxs("p", {
                                                className: "text-teal-700 mb-3",
                                                children: ["Anteriormente, o município chamava-se ", a.jsx("strong", {
                                                    children: "Capivari"
                                                }), ", cuja fundação se deu em 1801, nas terras de D. Maria Rodrigues, viúva de Manoel da Silveira Azevedo, onde o casal havia construído uma capela em devoção à Sant'Ana. A viúva doou a capela e seu entorno para a criação da paróquia de Nossa Senhora da Lapa de Capivari, a pedido da população local."]
                                            }), a.jsx("p", {
                                                className: "text-teal-700 mb-3",
                                                children: "No entorno da capela, formou-se o vilarejo, que posteriormente foi elevado à categoria de freguesia e, mais adiante, à categoria de vila, por decreto de 1841, separando-se definitivamente do município de Cabo Frio. A condição imposta para o desmembramento era de que alguns fazendeiros locais se responsabilizassem e construíssem uma câmara, que executava as mesmas funções atuais de uma prefeitura, bem como uma cadeia para a nova vila."
                                            }), a.jsxs("p", {
                                                className: "text-teal-700",
                                                children: ["O Major Joaquim Fernandes Lopes Ramos, o Alferes Luiz Gomes da Silva Leite, juntamente com alguns membros da família Pinto Coelho, executaram as construções entre os anos de 1841 e 1843, atendendo assim às exigências. ", a.jsx("strong", {
                                                    children: "A partir do ano de 1943, a vila de Capivari teve seu nome modificado para Silva Jardim"
                                                }), ", denominação esta que perdura até os dias atuais."]
                                            })]
                                        })]
                                    })
                                })]
                            }), a.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    children: [a.jsx("img", {
                                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gBQHP3jEARAoaENwX8BTR6DqHqZ-4GXs_YPXaDUFm3kCjaHc2SC-WnF-gy432u_2f_Q&usqp=CAU",
                                        alt: "Grupo Escolar Silva Jardim antigo",
                                        className: "w-full rounded-lg shadow-lg"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-600 mt-2 italic text-center",
                                        children: "Edifício do Grupo Escolar de Tucuruvi em 1928"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .4
                                    },
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-yellow-800 mb-2",
                                            children: "🏗️ Contexto Histórico"
                                        }), a.jsx("p", {
                                            className: "text-yellow-700 text-sm",
                                            children: "Nos anos 1920, a educação pública chegava lentamente aos bairros periféricos de São Paulo. O Tucuruvi era área rural até 1918, quando começaram a surgir as primeiras instituições públicas."
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-blue-800 mb-2",
                                            children: "📅 Cronologia"
                                        }), a.jsxs("ul", {
                                            className: "text-blue-700 text-sm space-y-1",
                                            children: [a.jsxs("li", {
                                                children: [a.jsx("strong", {
                                                    children: "1922:"
                                                }), " Escolas Reunidas do Tucuruvi"]
                                            }), a.jsxs("li", {
                                                children: [a.jsx("strong", {
                                                    children: "1925:"
                                                }), " Grupo Escolar do Tucuruvi"]
                                            }), a.jsxs("li", {
                                                children: [a.jsx("strong", {
                                                    children: "1936:"
                                                }), " Projeto arquitetônico Silva Jardim"]
                                            }), a.jsxs("li", {
                                                children: [a.jsx("strong", {
                                                    children: "1938:"
                                                }), " Inauguração oficial"]
                                            })]
                                        })]
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5
                                },
                                className: "prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4",
                                children: [a.jsxs("p", {
                                    children: ["A história da nossa escola começou em ", a.jsx("strong", {
                                        children: "24 de fevereiro de 1922"
                                    }), ", com a inauguração das Escolas Reunidas do Tucuruvi, a primeira escola pública do bairro. O diretor foi o professor Nestor Pereira Leite, um pioneiro da educação na região."]
                                }), a.jsxs("div", {
                                    className: "bg-gray-50 p-6 rounded-lg",
                                    children: [a.jsx("h4", {
                                        className: "font-bold text-gray-800 mb-3",
                                        children: "🏛️ A Construção do Prédio Atual"
                                    }), a.jsxs("p", {
                                        className: "mb-3",
                                        children: ["Em 1936, o arquiteto ", a.jsx("strong", {
                                            children: "José Maria da Silva Neves"
                                        }), " elaborou o projeto do novo edifício escolar na Av. Tucuruvi, 724. O prédio foi concluído em 12 de março de 1936, mas a inauguração oficial só aconteceu em ", a.jsx("strong", {
                                            children: "29 de setembro de 1938"
                                        }), "."]
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-600 italic",
                                        children: "Na cerimônia de inauguração, estiveram presentes autoridades como o futuro governador Adhemar de Barros, demonstrando a importância da escola para a região."
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .6
                                    },
                                    className: "bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200",
                                    children: [a.jsx("h4", {
                                        className: "font-bold text-purple-800 mb-3",
                                        children: "✨ Curiosidade"
                                    }), a.jsx("p", {
                                        className: "text-purple-700",
                                        children: "O primeiro diretor, professor Antônio M. Rosa, permaneceu no cargo desde a criação do Grupo Escolar do Tucuruvi em 1925 até a inauguração oficial do Silva Jardim em 1938, garantindo a continuidade pedagógica durante toda a transição."
                                    })]
                                })]
                            })]
                        }), o === "cap3" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsx(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500",
                                children: a.jsxs("h3", {
                                    className: "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [a.jsx(ea, {
                                        className: "h-6 w-6 text-orange-600"
                                    }), "Memórias e Curiosidades"]
                                })
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .2
                                },
                                className: "bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300",
                                children: [a.jsxs("h4", {
                                    className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [a.jsx(Qi, {
                                        className: "h-5 w-5 text-orange-600"
                                    }), "Texto Completo - Capítulo 3: Memórias"]
                                }), a.jsx("div", {
                                    className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200",
                                    children: a.jsxs("div", {
                                        className: "prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4",
                                        children: [a.jsxs("div", {
                                            className: "bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-amber-800 mb-3",
                                                children: "🏛️ O Edifício Original de 1928"
                                            }), a.jsx("p", {
                                                className: "text-amber-700 mb-3",
                                                children: "Este era o edifício do Grupo Escolar de Tucuruvi no ano de 1928. Os estudantes podem ser vistos na varanda durante a captura da imagem. No lugar onde funcionou a escola, atualmente, encontra-se a Igreja Metodista do Tucuruvi, na Rua Ausônia."
                                            }), a.jsx("p", {
                                                className: "text-amber-700",
                                                children: "Provavelmente, era uma construção muito antiga, uma vez que existiria antes do parcelamento da Vila Mazzei... talvez fosse a principal residência da fazenda. Impressionante... situado em uma região privilegiada com uma vista deslumbrante."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-blue-800 mb-3",
                                                children: "👩‍🏫 A Era da Professora Durvalina Cardoso"
                                            }), a.jsxs("p", {
                                                className: "text-blue-700 mb-3",
                                                children: ["A diretora era Profa. Durvalina Cardoso e, naquele ano, Silva Jardim contava com ", a.jsx("strong", {
                                                    children: "1.054 alunos"
                                                }), " distribuídos entre o 1.º ao 4.º ano primário em dois períodos (manhã e tarde), com uma fila de espera de ", a.jsx("strong", {
                                                    children: "230 crianças"
                                                }), "."]
                                            }), a.jsx("p", {
                                                className: "text-blue-700",
                                                children: "Era a principal unidade de ensino público de Tucuruvi, tendo seu prédio atual sido inaugurado em 1938 e já contava com assistência dentária e cozinha econômica que fornecia alimentação básica no refeitório."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-green-50 p-6 rounded-lg border-l-4 border-green-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-green-800 mb-3",
                                                children: "🏫 Expansão e Necessidade de Novas Instalações"
                                            }), a.jsx("p", {
                                                className: "text-green-700 mb-3",
                                                children: "As vagas para estudantes do ciclo primário eram insuficientes para atender à demanda no Grupo Escolar de Tucuruvi. O Governo do Estado criou então uma nova escola que funcionou em um prédio adaptado na Av. Tucuruvi para que pudesse comportar o maior número de alunos possível."
                                            }), a.jsx("p", {
                                                className: "text-green-700",
                                                children: "Isso ocorre no início da década de 30, demonstrando o crescimento populacional e a demanda por educação na região."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-purple-800 mb-3",
                                                children: "📸 Memórias Fotográficas Preciosas"
                                            }), a.jsxs("p", {
                                                className: "text-purple-700 mb-3",
                                                children: ["Nossa curtidora Neide dos Anjos nos brinda com uma incrível foto da turma de alunos do Silva Jardim ainda em suas antigas instalações. ", a.jsx("strong", {
                                                    children: "Seu pai é o segundo menino ao alto do lado direito com paletó."
                                                })]
                                            }), a.jsxs("p", {
                                                className: "text-purple-700",
                                                children: ["Havia uma grande ansiedade pelo término das obras do Grupo Escolar Silva Jardim, que foi entregue à população em ", a.jsx("strong", {
                                                    children: "29 de setembro de 1938"
                                                }), "."]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-rose-800 mb-3",
                                                children: "🎺 A Famosa Fanfarra do Silva Jardim"
                                            }), a.jsx("p", {
                                                className: "text-rose-700 mb-3",
                                                children: "Foto dos alunos da fanfarra do G. E. Silva Jardim na área de concentração antes do início do desfile. O local é onde foi a estação Tucuruvi do trem da Cantareira. Observa-se ao fundo a chaminé de onde era a padaria do Sr. Ângelo e de seu filho, Walter Davanzo."
                                            }), a.jsxs("p", {
                                                className: "text-rose-700",
                                                children: ["Foto tirada em desfile no bairro Tucuruvi, em ", a.jsx("strong", {
                                                    children: "07 de setembro de 1969"
                                                }), ". Nesta foto, estou ao centro, apoiando as baquetas com os dedos sobre o instrumento (surdo). ", a.jsx("em", {
                                                    children: "(Jânio Pires)"
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-indigo-800 mb-3",
                                                children: "🚂 Contexto Geográfico e Urbano"
                                            }), a.jsxs("p", {
                                                className: "text-indigo-700 mb-3",
                                                children: ["As referências geográficas nas fotografias nos ajudam a entender o desenvolvimento urbano da região. A menção à ", a.jsx("strong", {
                                                    children: "estação Tucuruvi do trem da Cantareira"
                                                }), " e à ", a.jsx("strong", {
                                                    children: "padaria do Sr. Ângelo"
                                                }), " mostra como a escola estava integrada ao cotidiano do bairro."]
                                            }), a.jsx("p", {
                                                className: "text-indigo-700",
                                                children: "Estes marcos urbanos faziam parte da vida escolar e comunitária, criando um senso de pertencimento e identidade local que perdura até hoje."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-teal-800 mb-3",
                                                children: "👥 Depoimentos Pessoais"
                                            }), a.jsx("p", {
                                                className: "text-teal-700 mb-3",
                                                children: "Os relatos pessoais, como o de Jânio Pires sobre sua participação na fanfarra, são tesouros históricos que humanizam a experiência escolar. Cada fotografia conta uma história, cada depoimento revela uma faceta da vida na escola."
                                            }), a.jsx("p", {
                                                className: "text-teal-700",
                                                children: "Essas memórias individuais, quando reunidas, formam o mosaico coletivo da história da Escola Silva Jardim, mostrando como a instituição moldou gerações de estudantes."
                                            })]
                                        }), a.jsxs("div", {
                                            className: "bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400",
                                            children: [a.jsx("h5", {
                                                className: "font-bold text-yellow-800 mb-2",
                                                children: "🎭 Vida Social e Cultural"
                                            }), a.jsx("p", {
                                                className: "text-yellow-700",
                                                children: "A escola sempre foi mais que um local de ensino - era o centro da vida cultural e social do bairro. Os desfiles cívicos, as apresentações da fanfarra e os eventos escolares eram momentos de orgulho e união da comunidade."
                                            })]
                                        })]
                                    })
                                })]
                            }), a.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    children: [a.jsx("img", {
                                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9_cWLVKpqydGS-cUr0ykFHXGnUa2KNNLUTeDhugwM3Y0FyRd4aTmR9ig8JGeEVwX4eU&usqp=CAU",
                                        alt: "Estudantes em frente à escola",
                                        className: "w-full rounded-lg shadow-lg"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-600 mt-2 italic text-center",
                                        children: "Estudantes reunidos em frente ao prédio nos anos 1980"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .4
                                    },
                                    className: "space-y-6",
                                    children: [a.jsxs("div", {
                                        className: "bg-green-50 p-4 rounded-lg border-l-4 border-green-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-green-800 mb-2",
                                            children: "📊 Dados Históricos"
                                        }), a.jsxs("p", {
                                            className: "text-green-700 text-sm mb-2",
                                            children: [a.jsx("strong", {
                                                children: "Anos 1950:"
                                            }), " A diretora Profa. Durvalina Cardoso comandava uma escola com:"]
                                        }), a.jsxs("ul", {
                                            className: "text-green-700 text-sm space-y-1",
                                            children: [a.jsx("li", {
                                                children: "• 1.054 alunos matriculados"
                                            }), a.jsx("li", {
                                                children: "• 230 crianças na fila de espera"
                                            }), a.jsx("li", {
                                                children: "• Funcionamento em dois períodos"
                                            }), a.jsx("li", {
                                                children: "• Assistência dentária"
                                            }), a.jsx("li", {
                                                children: "• Cozinha econômica com refeitório"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-blue-800 mb-2",
                                            children: "🎭 Vida Escolar"
                                        }), a.jsx("p", {
                                            className: "text-blue-700 text-sm",
                                            children: "A escola sempre foi o centro cultural do bairro, com apresentações teatrais, festivais de música e as famosas festas juninas que reuniam toda a comunidade."
                                        })]
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5
                                },
                                className: "grid md:grid-cols-3 gap-4",
                                children: [a.jsxs("div", {
                                    className: "bg-yellow-50 p-4 rounded-lg text-center",
                                    children: [a.jsx("div", {
                                        className: "text-3xl mb-2",
                                        children: "🏛️"
                                    }), a.jsx("h4", {
                                        className: "font-bold text-yellow-800 mb-1",
                                        children: "Arquitetura"
                                    }), a.jsx("p", {
                                        className: "text-yellow-700 text-sm",
                                        children: "Prédio projetado em estilo neoclássico, com amplos corredores e salas bem iluminadas"
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-purple-50 p-4 rounded-lg text-center",
                                    children: [a.jsx("div", {
                                        className: "text-3xl mb-2",
                                        children: "🎺"
                                    }), a.jsx("h4", {
                                        className: "font-bold text-purple-800 mb-1",
                                        children: "Fanfarra"
                                    }), a.jsx("p", {
                                        className: "text-purple-700 text-sm",
                                        children: "A fanfarra da escola era famosa nos desfiles de 7 de setembro, orgulho do bairro"
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-pink-50 p-4 rounded-lg text-center",
                                    children: [a.jsx("div", {
                                        className: "text-3xl mb-2",
                                        children: "👥"
                                    }), a.jsx("h4", {
                                        className: "font-bold text-pink-800 mb-1",
                                        children: "Comunidade"
                                    }), a.jsx("p", {
                                        className: "text-pink-700 text-sm",
                                        children: "Gerações inteiras de famílias estudaram na escola, criando laços duradouros"
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .6
                                },
                                className: "bg-gray-50 p-6 rounded-lg",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-gray-800 mb-4",
                                    children: "📸 Registro Histórico"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-4",
                                    children: "Uma das fotos mais preciosas do nosso acervo mostra os alunos da fanfarra do G.E. Silva Jardim em 1969, antes do desfile de 7 de setembro. A foto foi tirada onde funcionava a antiga estação Tucuruvi do trem da Cantareira."
                                }), a.jsx("div", {
                                    className: "bg-white p-4 rounded border-l-4 border-gray-400",
                                    children: a.jsx("p", {
                                        className: "text-gray-600 text-sm italic",
                                        children: '"Observa-se ao fundo a chaminé de onde era a padaria do Sr. Ângelo e de seu filho, Walter Davanzo. Nesta foto, estou ao centro, apoiando as baquetas com os dedos sobre o instrumento (surdo)." - Jânio Pires, ex-aluno'
                                    })
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .7
                                },
                                className: "text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-xl mb-2",
                                    children: "🎉 100 Anos de História"
                                }), a.jsx("p", {
                                    className: "text-lg",
                                    children: "Cada foto, cada memória, cada depoimento conta a história de uma escola que não apenas educou, mas formou o caráter de milhares de pessoas ao longo de um século."
                                })]
                            })]
                        })]
                    }, o)]
                })]
            })
        }), a.jsx("section", {
            id: "legado",
            className: "py-16",
            style: {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            },
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-8 text-white",
                    children: "Legado"
                }), a.jsxs("div", {
                    className: "tabs",
                    children: [a.jsx("div", {
                        className: "flex justify-center gap-4 mb-8 flex-wrap",
                        children: [{
                            id: "impacto",
                            title: "Impacto Social",
                            subtitle: "Transformando Vidas",
                            icon: Gd
                        }, {
                            id: "educacao",
                            title: "Excelência Educativa",
                            subtitle: "Formando Cidadãos",
                            icon: ta
                        }, {
                            id: "comunidade",
                            title: "Raízes Comunitárias",
                            subtitle: "100 Anos de Tradição",
                            icon: qd
                        }, {
                            id: "futuro",
                            title: "Visão de Futuro",
                            subtitle: "Próximos 100 Anos",
                            icon: Ud
                        }].map(S => a.jsxs("button", {
                            onClick: () => c(S.id),
                            className: `flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center ${u===S.id?"bg-white text-purple-700 shadow-lg transform scale-105":"bg-white/20 text-white hover:bg-white/30 hover:scale-102"}`,
                            children: [a.jsx(S.icon, {
                                className: "h-5 w-5"
                            }), a.jsxs("div", {
                                children: [a.jsx("div", {
                                    className: "text-sm font-bold",
                                    children: S.title
                                }), a.jsx("div", {
                                    className: "text-xs opacity-80",
                                    children: S.subtitle
                                })]
                            })]
                        }, S.id))
                    }), a.jsxs(L.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "bg-white rounded-2xl shadow-2xl p-8 min-h-[600px]",
                        children: [u === "impacto" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-center mb-8",
                                children: [a.jsx("div", {
                                    className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4",
                                    children: a.jsx(Gd, {
                                        className: "h-10 w-10 text-white"
                                    })
                                }), a.jsx("h3", {
                                    className: "text-3xl font-bold text-gray-800 mb-2",
                                    children: "Transformação Social"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-lg",
                                    children: "Um século mudando vidas e construindo futuros"
                                })]
                            }), a.jsxs("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    className: "text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl",
                                    children: [a.jsx("div", {
                                        className: "text-4xl font-bold text-blue-600 mb-2",
                                        children: "50,000+"
                                    }), a.jsx("div", {
                                        className: "text-gray-700 font-semibold",
                                        children: "Alunos Formados"
                                    }), a.jsx("div", {
                                        className: "text-sm text-gray-600 mt-2",
                                        children: "Ao longo de 100 anos"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl",
                                    children: [a.jsx("div", {
                                        className: "text-4xl font-bold text-green-600 mb-2",
                                        children: "3"
                                    }), a.jsx("div", {
                                        className: "text-gray-700 font-semibold",
                                        children: "Gerações"
                                    }), a.jsx("div", {
                                        className: "text-sm text-gray-600 mt-2",
                                        children: "Famílias inteiras formadas"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .4
                                    },
                                    className: "text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl",
                                    children: [a.jsx("div", {
                                        className: "text-4xl font-bold text-purple-600 mb-2",
                                        children: "1,200+"
                                    }), a.jsx("div", {
                                        className: "text-gray-700 font-semibold",
                                        children: "Educadores"
                                    }), a.jsx("div", {
                                        className: "text-sm text-gray-600 mt-2",
                                        children: "Professores dedicados"
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5
                                },
                                className: "bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-gray-800 mb-3 text-xl",
                                    children: "🌟 Histórias de Transformação"
                                }), a.jsx("p", {
                                    className: "text-gray-700 leading-relaxed mb-4",
                                    children: "A Escola Silva Jardim não apenas ensinou matemática, português e ciências. Ela construiu sonhos, abriu horizontes e transformou destinos. De filhos de operários que se tornaram médicos e engenheiros, a crianças tímidas que descobriram sua voz no coral da escola."
                                }), a.jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-4 mt-4",
                                    children: [a.jsxs("div", {
                                        className: "bg-white p-4 rounded-lg shadow-sm",
                                        children: [a.jsx("h5", {
                                            className: "font-semibold text-blue-700 mb-2",
                                            children: "Ascensão Social"
                                        }), a.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Primeira oportunidade de educação formal para milhares de famílias do Tucuruvi"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-white p-4 rounded-lg shadow-sm",
                                        children: [a.jsx("h5", {
                                            className: "font-semibold text-green-700 mb-2",
                                            children: "Inclusão"
                                        }), a.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Acolhimento de alunos com necessidades especiais e diferentes origens sociais"
                                        })]
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .6
                                },
                                className: "text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-xl mb-2",
                                    children: "💝 Mais que uma Escola"
                                }), a.jsx("p", {
                                    className: "text-lg opacity-90",
                                    children: "Um centro de esperança que mudou o destino de milhares de famílias no Tucuruvi"
                                })]
                            })]
                        }), u === "educacao" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-center mb-8",
                                children: [a.jsx("div", {
                                    className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4",
                                    children: a.jsx(ta, {
                                        className: "h-10 w-10 text-white"
                                    })
                                }), a.jsx("h3", {
                                    className: "text-3xl font-bold text-gray-800 mb-2",
                                    children: "Excelência Educativa"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-lg",
                                    children: "Formando cidadãos críticos e preparados para o futuro"
                                })]
                            }), a.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-amber-800 mb-3",
                                            children: "🏆 Conquistas Acadêmicas"
                                        }), a.jsxs("ul", {
                                            className: "space-y-2 text-amber-700",
                                            children: [a.jsx("li", {
                                                children: "• IDEB 2021: 5,30 (atingiu a meta estadual)"
                                            }), a.jsx("li", {
                                                children: "• IDESP: 3,39 (acima da média regional)"
                                            }), a.jsx("li", {
                                                children: "• Participação em olimpíadas científicas"
                                            }), a.jsx("li", {
                                                children: "• Projetos de extensão com universidades"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-green-50 p-6 rounded-lg border-l-4 border-green-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-green-800 mb-3",
                                            children: "📚 Inovação Pedagógica"
                                        }), a.jsxs("ul", {
                                            className: "space-y-2 text-green-700",
                                            children: [a.jsx("li", {
                                                children: "• Programa de Ensino Integral (PEI)"
                                            }), a.jsx("li", {
                                                children: "• EJATEC - Educação Tecnológica"
                                            }), a.jsx("li", {
                                                children: "• Centro de Estudos de Línguas"
                                            }), a.jsx("li", {
                                                children: "• Projeto Inova Educação"
                                            })]
                                        })]
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-blue-800 mb-3",
                                            children: "👨‍🏫 Corpo Docente"
                                        }), a.jsx("p", {
                                            className: "text-blue-700 text-sm mb-3",
                                            children: "Professores dedicados que vão além do currículo, construindo relacionamentos duradouros com os alunos e suas famílias."
                                        }), a.jsx("div", {
                                            className: "bg-white p-3 rounded text-xs text-blue-600 italic",
                                            children: '"Estou na escola há 17 anos... tenho um carinho muito especial por essa escola que me acolheu como se fosse uma família" - Prof. Stefano'
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-purple-800 mb-3",
                                            children: "🎯 Formação Integral"
                                        }), a.jsxs("ul", {
                                            className: "space-y-2 text-purple-700 text-sm",
                                            children: [a.jsx("li", {
                                                children: "• Desenvolvimento de valores éticos"
                                            }), a.jsx("li", {
                                                children: "• Protagonismo juvenil"
                                            }), a.jsx("li", {
                                                children: "• Preparação para cidadania"
                                            }), a.jsx("li", {
                                                children: "• Projetos sociais e culturais"
                                            })]
                                        })]
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .4
                                },
                                className: "bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-xl",
                                children: [a.jsxs("h4", {
                                    className: "font-bold text-gray-800 mb-4 text-xl flex items-center gap-2",
                                    children: [a.jsx(zd, {
                                        className: "h-6 w-6 text-indigo-600"
                                    }), "Metodologia Silva Jardim"]
                                }), a.jsx("p", {
                                    className: "text-gray-700 leading-relaxed mb-4",
                                    children: "Ao longo de 100 anos, a escola desenvolveu uma abordagem única que combina rigor acadêmico com cuidado humano. Cada aluno é visto como um indivíduo com potencial único, recebendo atenção personalizada para superar desafios e desenvolver talentos."
                                }), a.jsxs("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: [a.jsxs("div", {
                                        className: "text-center",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-1",
                                            children: "🎓"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm",
                                            children: "Rigor Acadêmico"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "text-center",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-1",
                                            children: "❤️"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm",
                                            children: "Cuidado Humano"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "text-center",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-1",
                                            children: "🌟"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm",
                                            children: "Desenvolvimento Integral"
                                        })]
                                    })]
                                })]
                            })]
                        }), u === "comunidade" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-center mb-8",
                                children: [a.jsx("div", {
                                    className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4",
                                    children: a.jsx(qd, {
                                        className: "h-10 w-10 text-white"
                                    })
                                }), a.jsx("h3", {
                                    className: "text-3xl font-bold text-gray-800 mb-2",
                                    children: "Raízes Comunitárias"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-lg",
                                    children: "O coração pulsante do bairro Tucuruvi"
                                })]
                            }), a.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    children: [a.jsx("img", {
                                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26c8m4dTsTvlDRTGizRRz3CO98CrKEpmB2g&s",
                                        alt: "Escola Silva Jardim",
                                        className: "w-full rounded-lg shadow-lg mb-4"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-600 italic text-center",
                                        children: "A escola como centro de convergência da comunidade"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "space-y-6",
                                    children: [a.jsxs("div", {
                                        className: "bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-rose-800 mb-3",
                                            children: "🎊 Tradições Familiares"
                                        }), a.jsx("p", {
                                            className: "text-rose-700 text-sm mb-3",
                                            children: '"Minha mãe, eu e minha filha estudamos no Silva Jardim. É uma tradição familiar que se mantém há três gerações." - Patricia Lima'
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2 text-xs text-rose-600",
                                            children: [a.jsx(na, {
                                                className: "h-3 w-3"
                                            }), a.jsx("span", {
                                                children: "Famílias unidas pela escola"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-teal-800 mb-3",
                                            children: "🏘️ Centro Cultural"
                                        }), a.jsxs("ul", {
                                            className: "space-y-2 text-teal-700 text-sm",
                                            children: [a.jsx("li", {
                                                children: "• Festas juninas legendárias do bairro"
                                            }), a.jsx("li", {
                                                children: "• Apresentações teatrais e musicais"
                                            }), a.jsx("li", {
                                                children: "• Eventos esportivos comunitários"
                                            }), a.jsx("li", {
                                                children: "• Encontros de ex-alunos"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400",
                                        children: [a.jsx("h4", {
                                            className: "font-bold text-indigo-800 mb-3",
                                            children: "🤝 Rede de Apoio"
                                        }), a.jsx("p", {
                                            className: "text-indigo-700 text-sm",
                                            children: "A escola sempre funcionou como uma grande família, onde funcionários, professores, alunos e comunidade se apoiam mutuamente em momentos de alegria e dificuldade."
                                        })]
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .4
                                },
                                className: "bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-gray-800 mb-4 text-xl",
                                    children: "🌳 Árvore Genealógica Educacional"
                                }), a.jsx("p", {
                                    className: "text-gray-700 leading-relaxed mb-6",
                                    children: "Como uma árvore centenária, a Escola Silva Jardim criou raízes profundas na comunidade. Seus galhos se estendem por gerações, conectando avós, pais e filhos através de memórias compartilhadas e valores transmitidos."
                                }), a.jsxs("div", {
                                    className: "grid md:grid-cols-4 gap-4",
                                    children: [a.jsxs("div", {
                                        className: "text-center p-4 bg-white rounded-lg shadow-sm",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-2",
                                            children: "👴👵"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm text-gray-700",
                                            children: "1ª Geração"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "Anos 1940-1960"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "text-center p-4 bg-white rounded-lg shadow-sm",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-2",
                                            children: "👨👩"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm text-gray-700",
                                            children: "2ª Geração"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "Anos 1970-1990"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "text-center p-4 bg-white rounded-lg shadow-sm",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-2",
                                            children: "👦👧"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm text-gray-700",
                                            children: "3ª Geração"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "Anos 2000-2020"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "text-center p-4 bg-white rounded-lg shadow-sm",
                                        children: [a.jsx("div", {
                                            className: "text-2xl mb-2",
                                            children: "👶"
                                        }), a.jsx("div", {
                                            className: "font-semibold text-sm text-gray-700",
                                            children: "4ª Geração"
                                        }), a.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: "2020+"
                                        })]
                                    })]
                                })]
                            })]
                        }), u === "futuro" && a.jsxs("div", {
                            className: "space-y-8",
                            children: [a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-center mb-8",
                                children: [a.jsx("div", {
                                    className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4",
                                    children: a.jsx(Ud, {
                                        className: "h-10 w-10 text-white"
                                    })
                                }), a.jsx("h3", {
                                    className: "text-3xl font-bold text-gray-800 mb-2",
                                    children: "Visão de Futuro"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-lg",
                                    children: "Preparando os próximos 100 anos de excelência"
                                })]
                            }), a.jsxs("div", {
                                className: "grid md:grid-cols-3 gap-6 mb-8",
                                children: [a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    className: "bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl text-center",
                                    children: [a.jsx("div", {
                                        className: "text-4xl mb-3",
                                        children: "🚀"
                                    }), a.jsx("h4", {
                                        className: "font-bold text-blue-800 mb-2",
                                        children: "Inovação Tecnológica"
                                    }), a.jsx("p", {
                                        className: "text-blue-700 text-sm",
                                        children: "Laboratórios modernos, ensino híbrido e tecnologia educacional de ponta"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl text-center",
                                    children: [a.jsx("div", {
                                        className: "text-4xl mb-3",
                                        children: "🌱"
                                    }), a.jsx("h4", {
                                        className: "font-bold text-green-800 mb-2",
                                        children: "Sustentabilidade"
                                    }), a.jsx("p", {
                                        className: "text-green-700 text-sm",
                                        children: "Educação ambiental, energia renovável e práticas eco-conscientes"
                                    })]
                                }), a.jsxs(L.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .4
                                    },
                                    className: "bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl text-center",
                                    children: [a.jsx("div", {
                                        className: "text-4xl mb-3",
                                        children: "🤝"
                                    }), a.jsx("h4", {
                                        className: "font-bold text-purple-800 mb-2",
                                        children: "Parcerias Globais"
                                    }), a.jsx("p", {
                                        className: "text-purple-700 text-sm",
                                        children: "Intercâmbios culturais, projetos internacionais e rede mundial de ex-alunos"
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .5
                                },
                                className: "bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-gray-800 mb-6 text-2xl text-center",
                                    children: "🎯 Plano Centenário 2025-2125"
                                }), a.jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: [a.jsxs("div", {
                                        children: [a.jsxs("h5", {
                                            className: "font-semibold text-indigo-800 mb-4 flex items-center gap-2",
                                            children: [a.jsx(Rw, {
                                                className: "h-5 w-5"
                                            }), "Infraestrutura do Futuro"]
                                        }), a.jsxs("ul", {
                                            className: "space-y-2 text-indigo-700 text-sm",
                                            children: [a.jsx("li", {
                                                children: "• Salas de aula inteligentes com IA"
                                            }), a.jsx("li", {
                                                children: "• Laboratórios de realidade virtual"
                                            }), a.jsx("li", {
                                                children: "• Espaços maker e fab labs"
                                            }), a.jsx("li", {
                                                children: "• Auditório multiuso renovado"
                                            }), a.jsx("li", {
                                                children: "• Quadras esportivas cobertas"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        children: [a.jsxs("h5", {
                                            className: "font-semibold text-purple-800 mb-4 flex items-center gap-2",
                                            children: [a.jsx(ta, {
                                                className: "h-5 w-5"
                                            }), "Pedagogia Inovadora"]
                                        }), a.jsxs("ul", {
                                            className: "space-y-2 text-purple-700 text-sm",
                                            children: [a.jsx("li", {
                                                children: "• Currículo personalizado por IA"
                                            }), a.jsx("li", {
                                                children: "• Metodologias ativas e gamificação"
                                            }), a.jsx("li", {
                                                children: "• Projetos interdisciplinares globais"
                                            }), a.jsx("li", {
                                                children: "• Mentoria individual contínua"
                                            }), a.jsx("li", {
                                                children: "• Avaliação formativa em tempo real"
                                            })]
                                        })]
                                    })]
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .6
                                },
                                className: "bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-gray-800 mb-4 text-xl",
                                    children: "💫 Compromisso com as Próximas Gerações"
                                }), a.jsx("p", {
                                    className: "text-gray-700 leading-relaxed mb-4",
                                    children: "Assim como nossos fundadores sonharam com uma escola que durasse gerações, hoje planejamos os próximos 100 anos. Queremos que em 2125, os bisnetos dos atuais alunos encontrem uma escola ainda mais transformadora, tecnologicamente avançada, mas sempre fiel aos valores humanos que nos definem."
                                }), a.jsx("div", {
                                    className: "text-center bg-white p-4 rounded-lg",
                                    children: a.jsx("p", {
                                        className: "text-gray-600 italic",
                                        children: '"Uma escola centenária não para no tempo - ela se reinventa para o futuro, mantendo sua essência transformadora."'
                                    })
                                })]
                            }), a.jsxs(L.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .7
                                },
                                className: "text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl",
                                children: [a.jsx("h4", {
                                    className: "font-bold text-2xl mb-4",
                                    children: "🎊 Rumo ao Bicentenário"
                                }), a.jsx("p", {
                                    className: "text-xl opacity-90 mb-4",
                                    children: "De 1925 a 2125: 200 anos transformando vidas e construindo o futuro"
                                }), a.jsx("div", {
                                    className: "text-4xl",
                                    children: "🎓✨🌟"
                                })]
                            })]
                        })]
                    }, u)]
                })]
            })
        }), a.jsx("section", {
            id: "linha-do-tempo",
            className: "py-16",
            style: {
                background: "var(--white)"
            },
            children: a.jsxs("div", {
                className: "max-w-4xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-8",
                    style: {
                        color: "var(--navy)"
                    },
                    children: "Linha do Tempo"
                }), a.jsxs("div", {
                    className: "relative",
                    children: [a.jsx("div", {
                        className: "absolute left-8 top-0 bottom-0 w-1 bg-blue-600"
                    }), J.map((S, C) => a.jsxs(L.div, {
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: C * .1
                        },
                        className: `timeline-event ml-16 ${d===C?"active":""}`,
                        onClick: () => f(d === C ? null : C),
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [a.jsx("h3", {
                                className: "font-bold text-lg",
                                style: {
                                    color: "var(--navy)"
                                },
                                children: S.title
                            }), a.jsx("span", {
                                className: "text-blue-600 font-semibold",
                                children: S.subtitle
                            })]
                        }), d === C && a.jsx(L.div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            className: "text-gray-700 leading-relaxed mt-3",
                            children: S.content
                        })]
                    }, C))]
                })]
            })
        }), a.jsx("section", {
            id: "galeria",
            className: "py-16",
            style: {
                background: "linear-gradient(120deg, #1a1a1a 80%, #2a2a2a 100%)"
            },
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-4 text-white",
                    children: "Galeria de Fotos"
                }), a.jsx(L.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center text-gray-300 mb-12 max-w-2xl mx-auto",
                    children: "Momentos históricos capturados através dos anos da Escola Silva Jardim"
                }), a.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                    children: N.map((S, C) => a.jsxs(L.figure, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: C * .1
                        },
                        className: "group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer",
                        onClick: () => z(S.id),
                        children: [a.jsx("div", {
                            className: "aspect-square overflow-hidden",
                            children: a.jsx("img", {
                                src: S.src,
                                alt: S.alt,
                                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",
                                loading: "lazy"
                            })
                        }), a.jsxs("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: [a.jsx("div", {
                                className: "absolute bottom-0 left-0 right-0 p-4",
                                children: a.jsx("p", {
                                    className: "text-white text-sm font-medium line-clamp-2",
                                    children: S.caption || S.alt
                                })
                            }), a.jsx("div", {
                                className: "absolute top-4 right-4",
                                children: a.jsx("div", {
                                    className: "bg-white/20 backdrop-blur-sm rounded-full p-2",
                                    children: a.jsx(f2, {
                                        className: "h-5 w-5 text-white"
                                    })
                                })
                            })]
                        })]
                    }, S.id))
                }), a.jsx(L.div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mt-8",
                    children: a.jsxs("p", {
                        className: "text-gray-400 text-sm flex items-center justify-center gap-2",
                        children: [a.jsx(ea, {
                            className: "h-4 w-4"
                        }), "Clique nas imagens para visualizar em tamanho completo"]
                    })
                })]
            })
        }), a.jsx(Nw, {
            children: T && a.jsx(L.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",
                onClick: H,
                children: a.jsx(L.div, {
                    initial: {
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .8,
                        opacity: 0
                    },
                    className: "relative max-w-4xl max-h-full",
                    onClick: S => S.stopPropagation(),
                    children: (() => {
                        const S = N.find(C => C.id === T);
                        return S ? a.jsxs(a.Fragment, {
                            children: [a.jsx("img", {
                                src: S.src,
                                alt: S.alt,
                                className: "max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            }), a.jsx("div", {
                                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg",
                                children: a.jsx("p", {
                                    className: "text-white text-center font-medium",
                                    children: S.caption || S.alt
                                })
                            }), a.jsx("button", {
                                onClick: H,
                                className: "absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors",
                                children: a.jsx(Wd, {
                                    className: "h-6 w-6"
                                })
                            }), a.jsx("button", {
                                onClick: C => {
                                    C.stopPropagation(), ce("prev")
                                },
                                className: "absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors",
                                children: a.jsx(Fw, {
                                    className: "h-6 w-6"
                                })
                            }), a.jsx("button", {
                                onClick: C => {
                                    C.stopPropagation(), ce("next")
                                },
                                className: "absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors",
                                children: a.jsx(zw, {
                                    className: "h-6 w-6"
                                })
                            })]
                        }) : null
                    })()
                })
            })
        }), a.jsx("section", {
            id: "depoimentos",
            className: "py-16",
            style: {
                background: "linear-gradient(120deg, #f3f4f7 80%, #e0e3ea 100%)"
            },
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-8",
                    style: {
                        color: "#23272f"
                    },
                    children: "Depoimentos"
                }), a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: p.map((S, C) => {
                        const I = w === S.id,
                            [b, V] = A.useState(S.text),
                            [O, Y] = A.useState(S.author);
                        return a.jsx(L.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: C * .05
                            },
                            className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group relative",
                            children: I ? a.jsxs("div", {
                                className: "space-y-4",
                                children: [a.jsx("textarea", {
                                    value: b,
                                    onChange: X => V(X.target.value),
                                    className: "w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    rows: 4,
                                    placeholder: "Digite o depoimento..."
                                }), a.jsx("input", {
                                    type: "text",
                                    value: O,
                                    onChange: X => Y(X.target.value),
                                    className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Nome do autor"
                                }), a.jsxs("div", {
                                    className: "flex gap-2 justify-end",
                                    children: [a.jsxs("button", {
                                        onClick: D,
                                        className: "flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                                        children: [a.jsx(Uw, {
                                            className: "h-4 w-4"
                                        }), "Cancelar"]
                                    }), a.jsxs("button", {
                                        onClick: () => R(S.id, b, O),
                                        className: "flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                        children: [a.jsx(i2, {
                                            className: "h-4 w-4"
                                        }), "Salvar"]
                                    })]
                                })]
                            }) : a.jsxs(a.Fragment, {
                                children: [a.jsxs("p", {
                                    className: "text-gray-700 italic mb-4 min-h-[80px]",
                                    children: ['"', S.text, '"']
                                }), a.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-2 text-blue-600",
                                        children: [a.jsx(na, {
                                            className: "h-4 w-4"
                                        }), a.jsxs("div", {
                                            className: "text-sm",
                                            children: [a.jsx("div", {
                                                className: "font-semibold",
                                                children: S.author
                                            }), S.role && a.jsx("div", {
                                                className: "text-gray-500",
                                                children: S.role
                                            }), S.year && a.jsxs("div", {
                                                className: "text-gray-400",
                                                children: ["Turma de ", S.year]
                                            })]
                                        })]
                                    }), a.jsx("button", {
                                        onClick: () => k(S.id),
                                        className: "opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50",
                                        title: "Editar depoimento",
                                        children: a.jsx(Qi, {
                                            className: "h-4 w-4"
                                        })
                                    })]
                                })]
                            })
                        }, S.id)
                    })
                }), a.jsx(L.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mt-8",
                    children: a.jsx("p", {
                        className: "text-gray-600 italic",
                        children: "💡 Passe o mouse sobre os depoimentos para editá-los e personalize as memórias da escola!"
                    })
                })]
            })
        }), a.jsx("section", {
            id: "fontes",
            className: "py-16",
            style: {
                background: "var(--white)"
            },
            children: a.jsxs("div", {
                className: "max-w-4xl mx-auto px-4",
                children: [a.jsx(L.h2, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-bold text-center mb-8",
                    style: {
                        color: "var(--navy)"
                    },
                    children: "Bibliografia e Fontes"
                }), a.jsxs(L.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-gray-50 rounded-xl shadow-lg p-8 max-w-4xl mx-auto",
                    children: [a.jsxs("div", {
                        className: "space-y-6",
                        children: [a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .1
                            },
                            className: "flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                            children: [a.jsx(xn, {
                                className: "h-6 w-6 text-blue-600 mt-1 flex-shrink-0"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Wikipédia"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-2",
                                    children: a.jsxs("a", {
                                        href: "https://pt.wikipedia.org/wiki/Ant%C3%B4nio_da_Silva_Jardim",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1",
                                        children: ["Antônio da Silva Jardim", a.jsx(Gw, {
                                            className: "h-3 w-3"
                                        })]
                                    })
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: "Fonte de informações biográficas, trajetória política e contexto histórico do patrono da escola, reunindo dados de domínio público e referências acadêmicas."
                                })]
                            })]
                        }), a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .2
                            },
                            className: "flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                            children: [a.jsx(xn, {
                                className: "h-6 w-6 text-blue-600 mt-1 flex-shrink-0"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Decreto Estadual nº 42.030/1963"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-2",
                                    children: "Governo do Estado de São Paulo"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: "Legislação oficial que reconhece e regulamenta a existência do Grupo Escolar Silva Jardim e sua importância para a educação paulista."
                                })]
                            })]
                        }), a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .3
                            },
                            className: "flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                            children: [a.jsx(xn, {
                                className: "h-6 w-6 text-blue-600 mt-1 flex-shrink-0"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Relatos de ex-alunos e professores"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-2",
                                    children: "Depoimentos coletados especialmente para o centenário"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: "Histórias, memórias e experiências compartilhadas por quem viveu a escola, disponíveis nas redes sociais e arquivos internos."
                                })]
                            })]
                        }), a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .4
                            },
                            className: "flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                            children: [a.jsx(xn, {
                                className: "h-6 w-6 text-blue-600 mt-1 flex-shrink-0"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Documentos oficiais digitalizados"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-2",
                                    children: "Certificado de Fundação, Anuários, Recortes de Jornal"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: "Arquivos históricos preservados e digitalizados, acessíveis na seção Documentos e Arquivos Históricos deste site."
                                })]
                            })]
                        }), a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .5
                            },
                            className: "flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                            children: [a.jsx(xn, {
                                className: "h-6 w-6 text-blue-600 mt-1 flex-shrink-0"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Imagens históricas"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-2",
                                    children: "Acervo da escola, arquivos públicos e redes sociais"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: "Fotografias antigas e atuais que ilustram a trajetória da escola e de sua comunidade."
                                })]
                            })]
                        }), a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .6
                            },
                            className: "flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                            children: [a.jsx(xn, {
                                className: "h-6 w-6 text-blue-600 mt-1 flex-shrink-0"
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "font-semibold text-gray-800 mb-2",
                                    children: "Dados educacionais"
                                }), a.jsx("p", {
                                    className: "text-gray-700 mb-2",
                                    children: "IDEB, IDESP, Secretaria da Educação do Estado de São Paulo"
                                }), a.jsx("p", {
                                    className: "text-gray-600 text-sm leading-relaxed",
                                    children: "Indicadores oficiais de desempenho e qualidade do ensino, utilizados para contextualizar a evolução da escola."
                                })]
                            })]
                        })]
                    }), a.jsx(L.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .7
                        },
                        className: "mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500",
                        children: a.jsx("p", {
                            className: "text-gray-700 leading-relaxed",
                            children: "Esta bibliografia reúne fontes históricas, acadêmicas e relatos pessoais, garantindo a credibilidade e a riqueza das informações apresentadas. Caso queira contribuir com novas fontes ou correções, entre em contato com a equipe do site."
                        })
                    })]
                })]
            })
        }), a.jsx("section", {
            id: "comentarios",
            className: "py-16",
            style: {
                background: "var(--gray-light)"
            },
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4",
                children: [a.jsxs(L.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "mb-16",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold mb-4 text-white",
                            children: "📝 Envie seu Comentário"
                        }), a.jsx("p", {
                            className: "text-slate-300 text-lg",
                            children: "Compartilhe suas memórias e experiências com a Escola Silva Jardim"
                        })]
                    }), a.jsx("div", {
                        className: "glass-effect rounded-2xl p-6 card-hover max-w-4xl mx-auto",
                        children: a.jsx("div", {
                            className: "relative w-full bg-white rounded-xl overflow-hidden shadow-2xl",
                            children: a.jsx("iframe", {
                                src: _,
                                className: "w-full h-[720px] border-0",
                                loading: "lazy",
                                title: "Formulário de comentários Silva Jardim"
                            })
                        })
                    })]
                }), a.jsxs(L.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: [a.jsxs("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [a.jsxs("div", {
                            children: [a.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-2 text-white",
                                children: "💬 Comentários da Comunidade"
                            }), a.jsx("p", {
                                className: "text-slate-300 text-lg",
                                children: "Veja o que nossa comunidade escolar está dizendo"
                            })]
                        }), a.jsxs("button", {
                            onClick: E,
                            disabled: n,
                            className: "flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105",
                            children: [a.jsx(n2, {
                                className: `h-5 w-5 ${n?"animate-spin":""}`
                            }), "Atualizar"]
                        })]
                    }), i && a.jsx("div", {
                        className: "bg-red-500/20 border border-red-500 text-red-100 px-6 py-4 rounded-lg mb-6",
                        children: i
                    }), n ? a.jsxs("div", {
                        className: "flex items-center justify-center py-12",
                        children: [a.jsx("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"
                        }), a.jsx("span", {
                            className: "ml-3 text-slate-300",
                            children: "Carregando comentários..."
                        })]
                    }) : e.length === 0 ? a.jsxs("div", {
                        className: "text-center py-12 glass-effect rounded-2xl",
                        children: [a.jsx(Hd, {
                            className: "h-16 w-16 text-slate-400 mx-auto mb-4"
                        }), a.jsx("p", {
                            className: "text-slate-300 text-lg",
                            children: "Nenhum comentário encontrado"
                        }), a.jsx("p", {
                            className: "text-slate-400",
                            children: "Seja o primeiro a compartilhar suas memórias!"
                        })]
                    }) : a.jsx("div", {
                        className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                        children: e.map((S, C) => a.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: C * .1
                            },
                            className: "glass-effect rounded-xl p-6 card-hover",
                            children: [a.jsxs("div", {
                                className: "flex items-start gap-3 mb-4",
                                children: [a.jsx("div", {
                                    className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm",
                                    children: S.Nome.charAt(0).toUpperCase()
                                }), a.jsxs("div", {
                                    className: "flex-1",
                                    children: [a.jsx("h3", {
                                        className: "font-semibold text-white",
                                        children: S.Nome
                                    }), a.jsxs("div", {
                                        className: "flex items-center gap-1 text-slate-400 text-sm",
                                        children: [a.jsx(Lw, {
                                            className: "h-3 w-3"
                                        }), h(S.Data)]
                                    })]
                                })]
                            }), a.jsx("p", {
                                className: "text-slate-200 leading-relaxed mb-4",
                                children: S.Comentario
                            }), a.jsx("div", {
                                className: "flex items-center gap-2 text-yellow-400",
                                children: [...Array(5)].map((I, b) => a.jsx(a2, {
                                    className: "h-4 w-4 fill-current"
                                }, b))
                            })]
                        }, C))
                    })]
                })]
            })
        }), a.jsx("footer", {
            className: "bg-slate-800/50 border-t border-slate-700 py-8",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 text-center",
                children: [a.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mb-4",
                    children: [a.jsx(ra, {
                        className: "h-6 w-6 text-blue-400"
                    }), a.jsx("span", {
                        className: "text-lg font-semibold text-white",
                        children: "Escola Estadual Silva Jardim"
                    })]
                }), a.jsx("p", {
                    className: "text-slate-400 mb-4",
                    children: "Centenário 1925-2025 • 100 anos de educação e tradição"
                }), a.jsxs("div", {
                    className: "flex items-center justify-center gap-4 text-sm text-slate-500",
                    children: [a.jsx("span", {
                        children: "© 2024 Centenário Silva Jardim"
                    }), a.jsx("span", {
                        children: "•"
                    }), a.jsx("span", {
                        children: "Tucuruvi - São Paulo"
                    })]
                })]
            })
        })]
    })
}
up(document.getElementById("root")).render(a.jsx(A.StrictMode, {
    children: a.jsx(h2, {})
}));