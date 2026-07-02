"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachingServices = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const slugify_1 = __importDefault(require("slugify"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const env_1 = require("../../config/env");
const createCoaching = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, ownerEmail, ownerName, password, logo, banner, phone, address, } = payload;
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const sequenceResult = yield tx.$queryRaw `
      SELECT nextval('coaching_serial_seq');
    `;
        const currentSerial = sequenceResult[0].nextval.toString();
        const generatedSlug = (0, slugify_1.default)(`${currentSerial} ${name}`, {
            lower: true,
            strict: true,
            trim: true,
        });
        const hashedPass = yield bcryptjs_1.default.hash(password, Number(env_1.ENV.SALT_NUMBER));
        const newCoaching = yield tx.coaching.create({
            data: {
                serial: currentSerial,
                name: name,
                slug: generatedSlug,
                ownerName: ownerName,
                ownerEmail: ownerEmail,
                password: hashedPass,
                status: 'ACTIVE',
                logo: logo || null,
                banner: banner || null,
                phone: phone || null,
                address: address || null,
            },
        });
        return {
            coaching: newCoaching,
        };
    }));
    return result;
});
const getCoachings = () => __awaiter(void 0, void 0, void 0, function* () {
    const coachings = yield prisma_1.default.coaching.findMany({});
    return coachings;
});
exports.CoachingServices = {
    createCoaching,
    getCoachings,
};
