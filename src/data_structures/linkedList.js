"use strict";
exports.__esModule = true;
exports.createLinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data, next) {
        this.data = data;
        this.next = next !== undefined ? next : null;
    }
    return ListNode;
}());
function createLinkedList() {
    var appendNode = function (data) {
        var newNode = new ListNode(data);
        if (!list.head || !list.tail) {
            list.head = newNode;
            list.tail = newNode;
        }
        list.tail.next = newNode;
        list.tail = newNode;
    };
    var prependNode = function (data) {
        var prevHead = list.head;
        var newNode = new ListNode(data, prevHead);
        list.head = newNode;
        list.head.next = prevHead;
        if (!list.tail) {
            list.tail = newNode;
        }
    };
    var findNode = function (data) {
        var currentNode = list.head;
        if (currentNode) {
            while (currentNode) {
                if (currentNode.data === data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    };
    var toArray = function () {
        var result = [];
        var currentNode = list.head;
        if (currentNode) {
            while (currentNode.next) {
                result.push(currentNode);
                currentNode = currentNode.next;
            }
            result.push(currentNode);
        }
        return result;
    };
    var deleteNode = function (data) {
        return;
    };
    var list = {
        head: null,
        tail: null,
        appendNode: appendNode,
        prependNode: prependNode,
        deleteNode: deleteNode,
        findNode: findNode,
        toArray: toArray
    };
    return list;
}
exports.createLinkedList = createLinkedList;
