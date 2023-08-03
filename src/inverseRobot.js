'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const seenValues = {};

  for (const key in robot) {
    const value = robot[key];

    if (seenValues[value]) {
      return null;
    }
    seenValues[value] = true;
  }

  const result = {};

  for (const key in robot) {
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
