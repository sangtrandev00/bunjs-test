// Legacy billing system
class LegacyBillingSystem {
  processPayment(data: string) {
    // expects data in XML format
  }
}

// Adapter
class BillingAdapter {
  constructor(private billingSystem: LegacyBillingSystem) {}

  processPayment(data: { amount: number, cardNumber: string }) {
    const xmlData = this.json2xml(data); // Assume json2xml is a function that converts JSON to XML
    this.billingSystem.processPayment(xmlData);
  }

  json2xml(data: { amount: number, cardNumber: string }) {
    return JSON.stringify(data);
  }
}


// Usage
const billingSystem = new LegacyBillingSystem();
const billingAdapter = new BillingAdapter(billingSystem);
billingAdapter.processPayment({ amount: 100, cardNumber: '1234567890' });