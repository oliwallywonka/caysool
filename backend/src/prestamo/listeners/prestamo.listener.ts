import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class OrderCreatedListener {
  @OnEvent('PRESTAMO-NOTIFICATION')
  handleOrderCreatedEvent(event: string) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}
