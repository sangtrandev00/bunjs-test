// Old class
class OldClass {
  oldMethod() {
    // old implementation
  }
}

// New class
class NewClass {
  newMethod() {
    // new implementation
  }
}

// Adapter
class RefactoringAdapter {
  constructor(private newClass: NewClass) {}

  oldMethod() {
    this.newClass.newMethod();
  }
}

// Usage
const newClass = new NewClass();
const adapter = new RefactoringAdapter(newClass);
adapter.oldMethod(); // Uses new implementation under the hood