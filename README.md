## Install
```bash
npm i -g yunisdev-easy-proxy 
```
or
```bash
sudo npm i -g yunisdev-easy-proxy 
```
## Syntax

```bash
easy-proxy --listen=[PORT] --"[ROUTE]"=[APP_PORT]
```

###### PORT

Proxy will run in this port.
default: 9000

###### ROUTE

Route for app to run under.

###### APP_PORT

Port of app running at localhost

## Example

You have two app running on localhost.
First is React app running on localhost:3000 will use "/" route.
Second is Flask app running on localhost:8080 will use "/api" route.
For building proxy to run them on same port (5500) you should run:
```bash
easy-proxy --listen=5500 --"/api"=8080 --"/"=3000
#It is recommended to declare non-root routes first.
```