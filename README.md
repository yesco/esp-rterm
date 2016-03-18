# esp-rterm
ESP8266 Remote Terminal web emulator

## status
(not useful yet)

## what it is

This is an embryo of a terminal emulator that runs in the browser for programs on the esp8266,
in a way, it's like a "telnet" client but runs in the browser.

At the moment, against all judgement it uses jsonp as mechanism to do requests.
TODO: Change to use websocket!

TODO: implement vt100/xansi (use jballards js implementation?)
TODO: graphical "terminal" (svg?/html/img)

## demo

Go to file:///home/.../esp-rterm/esp-rterm.html in the browser

linux> node simesp.js
<now type and stuff will come up on the terminal>

## similar projects/resources

(based on)
- https://github.com/chjj/term.js
- https://github.com/chjj/tty.js/

(oterm, run on your server to access it remotely)
- https://github.com/davidmoreno/onion

(xterm, js emulator)
- https://github.com/Gottox/terminal.js

(socket.io/websocket enabled vt100 terminal)
- https://github.com/Gottox/node-webterm/blob/acb81a8340a34b0864ade932ff51155bc5e720a1/index.html

