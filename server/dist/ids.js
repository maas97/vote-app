"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNominationId = exports.createUserId = exports.createPollId = void 0;
const nanoid_1 = require("nanoid");
exports.createPollId = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
const createUserId = () => (0, nanoid_1.nanoid)();
exports.createUserId = createUserId;
exports.createNominationId = (0, nanoid_1.nanoid)(8);
//# sourceMappingURL=ids.js.map