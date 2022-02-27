"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinarySearchTree_root;
exports.__esModule = true;
exports.BinarySearchTree = void 0;
//     7
//   /   \
//  5     10
//  /\    /\
// 3  6  8  23
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        _BinarySearchTree_root.set(this, {
            // @ts-ignore
            key: 7,
            left: {
                // @ts-ignore
                key: 5,
                left: {
                    // @ts-ignore
                    key: 3,
                    left: null,
                    right: null
                },
                right: {
                    // @ts-ignore
                    key: 6,
                    left: null,
                    right: null
                }
            },
            right: {
                // @ts-ignore
                key: 10,
                left: {
                    // @ts-ignore
                    key: 8,
                    left: null,
                    right: null
                },
                right: {
                    // @ts-ignore
                    key: 23,
                    left: null,
                    right: null
                }
            }
        });
    }
    BinarySearchTree.prototype.get = function (key) {
        var root = __classPrivateFieldGet(this, _BinarySearchTree_root, "f");
        while (root !== null) {
            console.log(root);
            if (root.key === key) {
                return root.value;
            }
            if (root.key < key) {
                root = root.right;
            }
            else {
                root = root.left;
            }
        }
        return null;
    };
    BinarySearchTree.prototype.add = function (key, value) {
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
_BinarySearchTree_root = new WeakMap();
var tree = new BinarySearchTree();
console.log(tree.get(23));
