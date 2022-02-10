"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
exports.__esModule = true;
var l1 = ["foobar", "baz", "qwerty"];
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    //     head         tail
    //        ↓         ↓
    // null ← 1 ←→ 2 ←→ 3 ←→ null
    //     head              tail
    //        ↓              ↓
    // null ← 1 ←→ 2 ←→ 3 ←→ 4 ←→ null
    LinkedList.prototype[Symbol.iterator] = function () {
        var tmp = this.head;
        return {
            next: function () {
                if (tmp === null) {
                    return {
                        done: true
                    };
                }
                var value = tmp.value, next = tmp.next;
                tmp = next;
                return {
                    done: false,
                    value: value
                };
            }
        };
    };
    LinkedList.prototype.push = function (value) {
        var newNode = {
            value: value,
            prev: this.tail,
            next: null
        };
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    LinkedList.prototype.unshift = function (value) {
    };
    LinkedList.prototype.map = function (cb) {
        var result = new LinkedList();
        var current = this.head;
        while (current) {
            var newValue = cb(current.value);
            result.push(newValue);
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.find = function (cb) {
        return undefined;
    };
    return LinkedList;
}());
var l2 = new LinkedList();
l2.push("1");
l2.push("2");
l2.push("3");
l2.push("4");
try {
    for (var l2_1 = __values(l2), l2_1_1 = l2_1.next(); !l2_1_1.done; l2_1_1 = l2_1.next()) {
        var x = l2_1_1.value;
        console.log(">>>>>", x);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (l2_1_1 && !l2_1_1.done && (_a = l2_1["return"])) _a.call(l2_1);
    }
    finally { if (e_1) throw e_1.error; }
}
// let curr = l2.head;
// while(curr) {
//   console.log(curr.value);
//   curr = curr.next;
// }
// curr = l2.tail;
// while(curr) {
//   console.log(curr.value);
//   curr = curr.prev;
// }
