"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const logger = new common_1.Logger('Main (main.ts)');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: [
                'http://localhost:8080',
                /^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):8080$/,
            ],
        },
    });
    const configService = app.get(config_1.ConfigService);
    const clientPort = parseInt(configService.get('CLIENT_PORT'));
    const port = parseInt(configService.get('PORT'));
    app.enableCors({
        origin: [
            `http://localhost:${clientPort}`,
            new RegExp(/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/)
        ]
    });
    await app.listen(port);
    logger.log(`Server running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map