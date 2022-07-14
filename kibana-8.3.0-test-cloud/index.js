"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemHasInsufficientMemory = systemHasInsufficientMemory;

var _os = _interopRequireDefault(require("os"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const MIN_CLOUD_OS_MEM_GB = 2;
const MIN_CLOUD_OS_MEM_BYTES = MIN_CLOUD_OS_MEM_GB * Math.pow(1024, 3);
/**
 * If we are on Cloud we need to ensure that we have sufficient memory available,
 * if we do not Chromium cannot start. See {@link MIN_CLOUD_OS_MEM_BYTES}.
 */

function systemHasInsufficientMemory(cloud) {
  // return Boolean((cloud === null || cloud === void 0 ? void 0 : cloud.isCloudEnabled) || (cloud === null || cloud === void 0 ? void 0 : cloud.deploymentId)) && _os.default.totalmem() < MIN_CLOUD_OS_MEM_BYTES;
  console.log();
  console.log();
  console.log();
  console.log('totalmem', _os.default.totalmem());
  console.log('result of check', _os.default.totalmem() < MIN_CLOUD_OS_MEM_BYTES);
  console.log();
  console.log();
  console.log();
  return true && _os.default.totalmem() < MIN_CLOUD_OS_MEM_BYTES;
}