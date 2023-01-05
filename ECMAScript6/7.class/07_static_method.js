class Foo {
    constructor(prop) {
        this.prop = prop
    }

    // 정적 메소드는 this를 사용할 수 없다.
    // this는 인스턴스를 가리키는데 정적 메소드는 인스턴스가 아닌 클래스 자체를 가리키기 때문
    static  staticMethod() {
        return 'staticMethod'
    }

    prototypeMethod() {
        return this.prop
    }
}

// 정적 메소드는 클래스 이름으로 호출한다.
// 클래스 인스턴스를 생성하지 않아도 호출할 수 있다.
console.log(Foo.staticMethod())

// 정적 메소드는 인스턴스로 호출할 수 없다.
// console.log(foo.staticMethod())
