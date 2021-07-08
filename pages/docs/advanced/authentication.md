---
title: Authentication
---

# Authentication

This page explains you the different types of authentications available on Aurora: JWT and Cookie.

### Why there are two different authentication methods?

The reason is simple, the original authentication method was though an httpOnly cookie, but due to browsers restrictions on the CORS cookie management, this method does not work if you have frontend and backend served from different domains, to solve this problem, I've implemented another type of authentication which is JWT based, stored in the localStorage.

Let's take an example: if I have my frontend which is served from `https://renatopozzi.me` and my backend served from something like `https://api.renatopozzi.me`, this is compliance for the browsers and it's not treated as a CORS request, so the cookie authentication method will be fine.

Instead, if you have something like `https://github.com` for the frontend and `https://my-super-backend.herokuapp.com` for the backend this will be treated as a **CORS request**, so your browser, most of the time, will block the cookie storing because is categorized as a _third party tracker_.

### How do I set the authentication method?

In the environment variable of the _Aurora API Module_, there is a key `AUTH_MODE=` which accept two values: **jwt** or **cookie**, simply set one of them and reload the server.

> If you don't specify any value, the jwt method will be taken as default, this ensure that the application will work in all the circumstances.

### Which one method is recommended?

I you have the possibility to serve your application from the same domain, it is **absolutely recommended** to use the `cookie` method.
