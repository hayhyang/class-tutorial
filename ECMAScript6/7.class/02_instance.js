class Foo {}

// new 연산자와 함께 클래스이름을 호출하면 인스턴스가 생성된다.
const foo = new Foo();

// Foo는 클래스 이름이 아니라 constructor(생성자)이다.
// 표현식이 아닌 선언식으로 정의한 클래스의 이름은 constructor와 동일하다.
// new 연산자를 사용하지 않고 생성자를 호출하면 type error가 발생한다.
// constructor는 new 연산자 없이 호출할 수 없다.
console.log(Object.getPrototypeOf(foo).constructor === Foo);
