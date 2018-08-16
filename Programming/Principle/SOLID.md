SOILD
==========

객체 지향 언어에서 클래스를 만들 때 중심이 되는 원칙이다.

Single Responsibility( **S** OILD )
----------------------------------
    객체는 오직 **하나의 책임을** 가져야 한다. --객체를 변경하길 원하면 객체 자체의 책임과 일치해야만 바꿀 수 있다.--
    **A class should have one, and only one, reason to change.**

### 예시

사칙연산 함수를 가지고 있는 계산 클래스가 있다고 치자. 이 상태의 계산 클래스는 오직 사칙연산 기능만을 책임진다.
만일 프로그램이 대대적으로 공사를 들어가게 되더라도 계산 클래스가 수정될만한 사유는 누가 봐도 사칙연산 함수와 관련 된 문제 뿐이다.
이처럼 단일 책임 원칙은 클래스의 목적을 명확히 함으로써 구조가 난잡해지거나 수정 사항이 불필요하게 넓게 퍼지는 것을 예방하고 기능을 명확히 분리할 수 있게 한다.

위의 원칙이 제대로 지켜지지 않으면 어떻게 될까?
어떤 프로그래머가 위의 계산 클래스를 통해 GUI를 가지는 계산기 프로그램을 개발하고 있다.
그런데 중간에 귀찮다고 GUI 관련 코드를 계산 클래스에 넣어버렸다.
이렇게 되면 계산 클래스는 계산과 GUI라는 두 가지 책임을 지게 되는데 만일 GUI 관련 수정 사항이 발생하게 되면 별 상관도 없어보이는 계산 클래스를 고치게 된다.
이처럼 하나의 클래스가 두 가지 이상의 책임을 지니게 되면 클래스의 목적이 모호해지고 기능을 수정할 때 영향을 받는 범위도 커져서 유지보수가 힘들어지며 결국 작성한 본인조차도 이게 정확히 뭐하는 클래스인지 명확히 설명할 수가 없는 스파게티 코드가 되어버린다.


Open Closed ( S **O** ILD )
----------------------------------

    “소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다.”
    "You should be able to extend a classes behavior, without modifying it."

Single Responsibility와 Open Closed는 서로 부딛치는 면이 존재한다.

뭐, 예를들어서 Factory Pattern을 예시로 들어보자

#### 예시: Factory Pattern

    **움직이지마 손들어!**

```
public abstract class Product
{
}

public class ChairProduct : Product
{
}

public class TableProduct : Product
{
}

public class FurnitureFactory
{
    public Product GetProduct(string type)
    {
        switch(type)
        {
            case "chair":
                return new ChairProduct();
            case "table":
                return new TableProduct();
            default:
                throw new ArgumentException(...);
        }
    }
}
```

이렇게 팩토리 패턴을 이용한 가구 공장을 생성하였다. 물론 이게 지금 중요한게 아니다.

후에 신규 가구인 책장을(Bookshelf) 넣는다고 했을 땐 이건 Open closed에 위배되는 행위이다.

하나의 클래스를 한가지 이유로 변경하기 원하지만, 변경에는 닫혀있어야 한다. [위와 같은 코드는 Decorator 패턴으로 구현가능하다.](https://en.wikipedia.org/wiki/Decorator_pattern)

Liskov Substitution ( SO **I** LD )
----------------------------------

    “프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다.” 계약에 의한 설계를 참고하라.

**즉, 부모 클래스 대신에 하위 클래스로 바꾸어도 정상적으로 동작해야한다 라는 것을 의미한다.**

### 예시



### 부모 클래스를 건드리면 안됀다? Virtual Method는? Overriding은???


Interface Segregation ( SOI **L** D )
----------------------------------

    “특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다.”

### 예시

Dependency Inversion ( SOIL **D** )
----------------------------------

    “추상화에 의존해야지, 구체화에 의존하면 안된다.”

### 예시

reference:
https://namu.wiki/w/객체%20지향%20프로그래밍/원칙
