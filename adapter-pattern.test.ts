import { Adapter, Adaptee, AdapteeMobile } from './adapter-pattern';
import { expect, describe, it } from 'bun:test';
describe('Adapter Pattern', () => {
  it('should adapt the Adaptee to the Target interface', () => {
    const adaptee = new Adaptee();
    const adapteeMobile = new AdapteeMobile();
    const adapter = new Adapter(adaptee, adapteeMobile);

    expect(adapter.request()).toBe('Specific request');
    expect(adapter.anotherRequest()).toBe('Another request');
  });
});