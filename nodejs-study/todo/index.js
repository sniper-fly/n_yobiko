"use strict";

const tasks = [];

/**
 * add todo task
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
}

/**
 * return todo tasks list
 * @return {array}
 */
function list() {
  return tasks.filter((task) => !task.isDone).map((task) => task.name);
}

/**
 * make task completed
 * @param {string} taskName
 */
function done(taskName) {
  const foundTask = tasks.find((task) => task.name === taskName);
  if (foundTask) {
    foundTask.isDone = true;
  }
}

/**
 * return completed todo tasks
 * @return {array}
 */
function doneList() {
  return tasks.filter((task) => task.isDone).map((task) => task.name);
}

/**
 * delete task
 * @param {string} taskName
 */
function del(taskName) {
  const idx = tasks.findIndex((task) => task.name === taskName);
  if (idx !== -1) {
    tasks.splice(idx, 1);
  }
}

module.exports = { add, list, done, doneList, del };
