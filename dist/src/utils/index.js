"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSql = exports.getSqlQuery = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var getSqlQuery = function (fileName) {
    var path = path_1.join(path_1.dirname(__dirname), "..", "sql", fileName + ".sql");
    var query = fs_1.readFileSync(path, { encoding: "utf-8" });
    return query;
};
exports.getSqlQuery = getSqlQuery;
var formatSql = function (sql, placeholders) {
    for (var key in placeholders) {
        sql = sql.replace("@" + key, "'" + placeholders[key] + "'");
    }
    return sql;
};
exports.formatSql = formatSql;
