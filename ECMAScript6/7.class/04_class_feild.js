// 과거에는 클래스 바디에는 메소드만 선언할 수 있었고
// 클래스 필드를 선언하면 syntaxerror가 발생했다.
// 그러나 nodejs12버전 이상이나 최신브라우저에서는 정상작동한다.
// 클래스 바디에서 직접 인스턴스 필드를 선언할 수 있는 프로포절 기능이 구현되었기 때문

class Person {
  constructor(name = "") {
    this.name = name; // 클래스 필드의 선언과 인스턴스의 초기화
  }
}

// constructor 내부에서 선언한 클래스 필드는 클래스가 생성할 인스턴스를 가리키는 this에 바인딩한다.
// 이로써 클래스 필드는 인스턴스의 프로퍼티가 된다.

const seo = new Person("seo");
console.log(seo.name);
// 클래스의 인스턴스를 통해 클래스 외부에서 참조할 수 있다.
// 단, private과 같은 접근 제한자를 제외하고
