/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { diag } from '@opentelemetry/api';
/**
 * Parses headers from config leaving only those that have defined values
 * @param partialHeaders
 */
export function validateAndNormalizeHeaders(partialHeaders) {
    if (partialHeaders === void 0) { partialHeaders = {}; }
    var headers = {};
    Object.entries(partialHeaders).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        if (typeof value !== 'undefined') {
            headers[key] = String(value);
        }
        else {
            diag.warn("Header \"" + key + "\" has invalid value (" + value + ") and will be ignored");
        }
    });
    return headers;
}
//# sourceMappingURL=util.js.map