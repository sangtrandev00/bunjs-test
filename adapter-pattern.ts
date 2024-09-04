// Write for me an adapter pattern using typescript
// Target là đối tượng cần có một new adapter mới ?
export interface Target {
    request(): string;
    response(): string;
}

export class Adaptee {
    public specificRequest(): string {
        return 'Specific request';
    }

    public anotherRequest(): string {
        return 'Another request';
    }
}


export class AdapteeMobile {
    public callApi(): string {
        return 'Api called';
    }
}


// Cho thêm vài trường hợp ví dụ thực tế sử dụng adapter
export class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee, private adapteeMobile: AdapteeMobile) {
        this.adaptee = adaptee;
    }

    public request(): string {
        return this.adaptee.specificRequest();
    }
    // Whether response here can use other data ?
    public response(): string {
        return this.adaptee.anotherRequest();
    }

    public callApi(): string {
        return this.adapteeMobile.callApi();
    } 

    public anotherRequest(): string {
        return this.adaptee.anotherRequest();
    }
}

const adaptee = new Adaptee();
const adapteeMobile = new AdapteeMobile();
const adapter = new Adapter(adaptee, adapteeMobile);
console.log(adapter.request());
console.log(adapter.anotherRequest());
console.log(adapter.callApi());
