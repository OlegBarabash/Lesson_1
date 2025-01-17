// ====== Classes ==========

// == Long form ====
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string

//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }

// == Short ==

class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) { }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge());
// console.log(Dave.age); // it will work But d'nt do that
// console.log(Dave.lang);  // it will work

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ){
        super(name, music, age);
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'lofi', 25)
console.log(Sara.getLang());
// console.log(Sara.age);   // it will work But d'nt do that
// console.log(Sara.lang);
/////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ) {
        
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));
////////////////////////////////////////////////


class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);

/////////////////////////////////////
// ===== GET SET ======

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
            
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Linkin Park']
console.log(MyBands.data);