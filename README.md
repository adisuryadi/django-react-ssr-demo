# django-react-ssr-demo
Django project backed React.js SPA with server-side rendering enabled

Django parts that might interest you are `greet/view.py` and `greet/urls.py`.

The react.js SPA code are inside `client` directory, it uses webpack to make the bundle. The part that being use to render the generated code are `client/server.js` and `client/ServerRenderer.js`

The project inspired by this [article](https://www.beaconreader.com/beacon-engineering-blog/rendering-react), but instead of uses Tornado, this project uses Django, and more recent React + React-Router API that changed quite a bit.

## Django part
```pip install -r requirements.txt``` - install python packages (use virtualenv is recomended)

```python manage.py runserver``` - run django server in localhost:8000

## React + SSR parts

```cd client``` - generate bundle and output it in /static for django

```npm install``` - install node packages dependencies

```npm run build``` - update generate bundle and output it in /static (if needed)

```npm start``` - run node.js server for server-rendering (localhost:8081)

Go to localhost:8000, view source and Voila!

## How it work in details
TODO
