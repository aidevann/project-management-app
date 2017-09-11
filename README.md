# project-management-app
Angular2 App with Firebase.
Try the demo at <a href="https://project-management-app-292f1.firebaseapp.com/" target="_blank">https://project-management-app-292f1.firebaseapp.com/</a>.

Stack
-----

- Angular 2
- AngularFire2 
- Firebase SDK
- RxJS
- SASS
- TypeScript

## Deploying to Firebase
#### Prerequisites
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details

Edit `.firebaserc` in the project root:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

Edit the firebase configuration in `src/environments/firebase.ts`

```typescript
export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start development server @ `localhost:4200`|
|`npm run build`|build the application to `./dist`|
|`npm run lint`|Lint `.ts` files|