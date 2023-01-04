// constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 메소드이다.
class Person {
  constructor(name) {
    // this는 클래스가 생성할 인스턴스를 가리킨다.
    // _name은 클래스 필드이다.
    // 클래스 필드는 인스턴스의 프로퍼티이다. 클래스 내부의 캡슐화된 변수를 말한다.
    // javascript 생성자 함수에서 this에 추가한 프로퍼티를 클래스 기반 객체지향 언어에서는 클래스 필드라고 부른다.
    this._name = name;
  }
}

const me = new Person("lee");

console.log(me, me._name);

// contructor는 클래스 내에 한 개만 존재할 수 있다.
// 인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 constructor이다.
// constructor의 파라미터로 전달한 값은 클래스 필드에 할당한다.

// 아래처럼 클래스 필드를 동적으로 추가할 수 있다.
me.age = 18;

console.log(me);
