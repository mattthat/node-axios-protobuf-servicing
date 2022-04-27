export default class ConfigurationService {
    constructor(path = "") {
        try {
            this.settings = require(path) || {};
        } catch {
            this.settings = {};
        }
    }

    get ENVIRONMENT() {
        if (process?.env?.NODE_ENV) return process.env.NODE_ENV;
        if (this.settings.environment) return this.settings.environment;
        return 'local';
    }

    VALUE(name) {
        return this.settings[name];
    }
}
