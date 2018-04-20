util.promisify
===============

    Node 8.x 대 부터 나온 함수이다.
    인자를 함수로 넘겨 콜백(Error-first) 비동기 처리를 해주는 스타일의 함수들을 Promise 형태로 바꿔주는 함수다.

예를들어 `fs.stat`을 보자.

에서의 Error-first callback style로 비동기 처리를 한다면
```js
fs.stat('foo.txt', function(error, stat) {
    if(err == null) {
        console.log('file exists');
    } else {
        console.log('error: ', error.code);
    }
});
```
이런식으로 코드를 작성하지만, util.promisify를 사용한다면.

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});
```

이런식으로 처리가 가능하다.

### async function을 사용 했을때

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```

물론 node 8.x 부터 지원하는 async await 키워드를 이용해 사용할 수 있다.