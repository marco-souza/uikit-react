const
    env = process.env.NODE_ENV||"production",
    envs = {
        "production": require("./webpack/base.config"),
        "development": require("./webpack/dev.config"),
    }

// Just define which environment webpack will user
module.exports = envs[env]