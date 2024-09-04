

// Write for me a singleton pattern using typescript

export class Singleton {
    private static instance: Singleton; // Whether class is a type or interface ?
    // What's example of singleton pattern ? How to apply into my current project ?

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log('Hello World');
    }

}

const singleton = Singleton.getInstance();
singleton.someMethod();
