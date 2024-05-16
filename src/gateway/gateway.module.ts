import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { Gateway } from './gateway';

@Module({
    providers: [GatewayService, Gateway],
    exports: [GatewayService]
})
export class GatewayModule {}
