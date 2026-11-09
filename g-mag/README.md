# Google Analytics 4

페이지 조회는 `src/components/AnalyticsTracker.jsx`에서 React Router의 화면 이동에 맞춰 전송합니다. 기사 제목은 기존 기자별 메타데이터를 사용하며, 첫 접속에는 외부 유입 주소를, 이후에는 이전 페이지 주소를 `page_referrer`로 보냅니다.

- 배포용 설정은 `.env.production`에 있습니다. 측정 ID는 공개 식별자이며 비밀키가 아닙니다.
- `npm run build`로 만든 앱 중 `REACT_APP_GA_HOSTNAME`에 지정된 주소에서만 GA를 로드합니다. 개발 서버, localhost, Netlify 배포 미리보기는 수집하지 않습니다.
- Netlify에서 같은 이름의 환경변수를 지정하면 해당 값이 우선합니다. 도메인이나 측정 ID를 바꾸면 설정을 수정하고 다시 빌드·배포하세요.
- **GA 관리 → 데이터 스트림 → 웹 스트림 → 향상된 측정 → 페이지 조회 → 고급 설정**에서 **브라우저 기록 이벤트에 따른 페이지 변경**을 꺼두세요. 코드의 `send_page_view: false`와 함께 자동·수동 조회수 중복을 방지합니다.
- Google 태그나 GTM 설치 코드를 HTML에 추가로 붙이지 마세요. `src/analytics.js`에서 Google 태그를 한 번 로드합니다.
- 배포 후 실제 사이트에서 홈 → 기사 → 다른 기사 → 뒤로 가기를 수행하고, GA 실시간 보고서 또는 Tag Assistant/DebugView에서 `page_view`와 기사 제목·주소·이전 주소를 확인하세요. 일반 보고서 반영에는 24~48시간이 걸릴 수 있습니다.

참고: [Google의 페이지 조회 측정 안내](https://developers.google.com/analytics/devguides/collection/ga4/views)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
