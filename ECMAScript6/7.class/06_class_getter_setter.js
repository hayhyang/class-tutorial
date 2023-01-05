class Foo {
    constructor(arr =[]) {
        this._arr = arr
    }

    // getter
    // getter메소드는 이름앞에 get키워드를 사용해 정의한다.
    // 메소드는 클래스 필드처럼 사용한다. 호출하는 것이 아니라 프로퍼티처럼 참조하면 메소드가 호출된다.
    // getter는 반드시 반환값이 있어야 한다.
    get firstElem() {
        return this._arr.length ? this._arr[0] : null
    }

    // setter
    // 클래스 필드에 값을 할당할때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.
    // setter메소드는 이픔 앞에 set키워드를 사용해 정의한다.
    // 역시 클래스 필드처럼 사용한다. 호출이 아니라 참조하면 메서드가 실행된다.
    set firstElem(elem) {
        this._arr = [elem, ...this._arr]
    }
}

const foo = new Foo([1,2])

console.log(foo.firstElem)

// setter에 값을 할당하면 메서드가 호출된다.
foo.firstElem = 100
console.log(foo.firstElem, foo._arr)



