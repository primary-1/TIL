사이트 신뢰성 엔지니어링 Site_Reliabillity_Engineering<br>
챕터 12. 효과적인 장애조치
======

## 장애조치란?
    장애조치(trouble shooting)는 SRE팀의 필수이다. 
    대부분은 장애조치가 자주 하는 사람은 물 흐르듯이 하기 때문에 특별한 능력처럼 보인다

### 장애조치를 연습하는 방법
1. 장애조치를 범용적으로 수행하는 방법의 이해
    효율적인 방법이 아니지만, 시스템에 대한 학습 효과가 좋다.
2. 시스템에 대한 탄탄한 이해

### 장애조치 행동과정
<img src='../Image/장애 조치 행동 과정.png'>

## 문제 보고
    상황에 따라 재 등급 선정 할 수 있음
    2가지로 가설 실험이 가능하다.
1. 정황이 같은지
2. 적극적으로 고치고 결과 관찰

>만약 시스템에 대한 깊은 이해가 없으면 잘못된 장애 세션을 가질 수 있다
효과적인 문제 보고는 실제로 기대한 동작이 무엇인지, 동작원리, 문제가 되는 동작은 재현 가능 한지

**문제를 특정인에게 보고하는 방법은 좋은 방법이 아니다.**
1. 내용을 버그로 옮겨 적는 불편함
2. 도움이 안되는 낮은 품질의 보고소 양산
3. 자기가 아닌 문제를 알고 있는 구성원들의 문제해결 부담 감소

## 우선순위 판단
보고된 문제에 대한 발생 범위는 달라질 수 있다.

```
EX) 특정한 상황에서 처해진 개인 문제 혹은
서비스의 전체적인 장애를 유발하는 문제
```
영향도 판단으로 적절하게 대처하면 된다.

### 영향도 판단
    위와 같이 서비스에 전체적인 장애를 유발하는 문제인지 아닌지 판단할 때 평정심을 가지고 결정하는 연습은 좋은 연습이다.

만약 심각한 장애가 발생한 경우 `장애 등급 선정` 부터 하는 것이 아닌 `시스템 상태를 복구` 해야만 한다.

만약 복구가 불가능하다면 **중단** 하는 것이 옳다.

로그를 분산 시스템에 대해 이해 할 수 있는 아주 좋은 도구이다.

## 진단
    가설을 세워 문제를 해결하는 것도 좋은 방법이지만, 기법을 사용한다면 더욱 더 간단하다.

1. 단순화 하기
 - 시스템 컴포넌트 들은 입력 데이트를 출력 데이터로 변환가능 해야만 한다.
그 후 컴포넌트 간의 연결을 확인함으로 써 올바르게 작동하는지 볼 수 있다.
 - 재현이 가능한 테스트 환경이 있다면 빠른 디버깅 및 같은 테스트가 실행 가능하다
    + 이런 환경이 존재한다면 침입이 쉽거나 위험성이 높은 기법들을 사용하는 Production 아닌 환경에서도 같은 테스트를 할 수 있다.
 - 시스템을 분활 정복 기법을 사용하면 범용적으로 해결하기 쉽다.
    + 분활 정복 기법은 큰 문제를 해결하기 힘들다면 점점 더 세분화 하여 문제를 해결하는 방법이다.