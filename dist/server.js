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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const book_1 = __importDefault(require("./handlers/book"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const address = "0.0.0.0:3001";
app.use(body_parser_1.default.json());
(0, book_1.default)(app);
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send("this is server");
    });
});
console.log(process.env.POSTGRES_USER);
app.listen(3001, function () {
    console.log(`starting app on: ${address}`);
});
