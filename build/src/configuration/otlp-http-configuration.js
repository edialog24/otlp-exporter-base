"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpConfigurationDefaults = exports.mergeOtlpHttpConfigurationWithDefaults = void 0;
const shared_configuration_1 = require("./shared-configuration");
const util_1 = require("../util");
function mergeHeaders(userProvidedHeaders, fallbackHeaders, defaultHeaders) {
    const requiredHeaders = Object.assign({}, defaultHeaders);
    const headers = {};
    // add fallback ones first
    if (fallbackHeaders != null) {
        Object.assign(headers, fallbackHeaders);
    }
    // override with user-provided ones
    if (userProvidedHeaders != null) {
        Object.assign(headers, userProvidedHeaders);
    }
    // override required ones.
    return Object.assign(headers, requiredHeaders);
}
function validateUserProvidedUrl(url) {
    if (url == null) {
        return undefined;
    }
    try {
        new URL(url);
        return url;
    }
    catch (e) {
        throw new Error(`Configuration: Could not parse user-provided export URL: '${url}'`);
    }
}
/**
 * @param userProvidedConfiguration  Configuration options provided by the user in code.
 * @param fallbackConfiguration Fallback to use when the {@link userProvidedConfiguration} does not specify an option.
 * @param defaultConfiguration The defaults as defined by the exporter specification
 */
function mergeOtlpHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
    var _a, _b;
    return Object.assign(Object.assign({}, (0, shared_configuration_1.mergeOtlpSharedConfigurationWithDefaults)(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration)), { headers: mergeHeaders((0, util_1.validateAndNormalizeHeaders)(userProvidedConfiguration.headers), fallbackConfiguration.headers, defaultConfiguration.headers), url: (_b = (_a = validateUserProvidedUrl(userProvidedConfiguration.url)) !== null && _a !== void 0 ? _a : fallbackConfiguration.url) !== null && _b !== void 0 ? _b : defaultConfiguration.url });
}
exports.mergeOtlpHttpConfigurationWithDefaults = mergeOtlpHttpConfigurationWithDefaults;
function getHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
    return Object.assign(Object.assign({}, (0, shared_configuration_1.getSharedConfigurationDefaults)()), { headers: requiredHeaders, url: 'http://localhost:4318/' + signalResourcePath });
}
exports.getHttpConfigurationDefaults = getHttpConfigurationDefaults;
//# sourceMappingURL=otlp-http-configuration.js.map