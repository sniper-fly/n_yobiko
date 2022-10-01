"use strict";
const todo = require("./index.js");
const assert = require("assert");

const sampleTodo = ["buy notebooks", "buy pencils"];

// 追加タスクがリストできること
todo.add(sampleTodo[0]);
todo.add(sampleTodo[1]);
assert.deepStrictEqual(todo.list(), sampleTodo);

// 完了タスクが適切にリストできること
todo.done(sampleTodo[0]);
assert.deepStrictEqual(todo.list(), ['buy pencils']);
assert.deepStrictEqual(todo.doneList(), ['buy notebooks']);

// 存在しない物を完了しても変化しないこと
todo.done('not exist task')
assert.deepStrictEqual(todo.list(), ['buy pencils']);
assert.deepStrictEqual(todo.doneList(), ['buy notebooks']);

// 存在しないタスクを削除しても変化しないこと
todo.del('not exist task')
assert.deepStrictEqual(todo.list(), ['buy pencils']);
assert.deepStrictEqual(todo.doneList(), ['buy notebooks']);

// タスクを削除した時にリストがきちんと変化すること
todo.del(sampleTodo[0]);
todo.del(sampleTodo[1]);
assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.doneList(), []);

console.log("test completed successfully.");
