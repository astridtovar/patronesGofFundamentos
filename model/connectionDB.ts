class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public connectDB() {
       return "DB connected!"
    }
}

function connect() {
    const s1 = Singleton.getInstance();
    console.log(s1.connectDB());
}
