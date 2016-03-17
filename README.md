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

## demo

Go to file:///home/.../esp-rterm/esp-rterm.html in the browser

linux> node simesp.js
<now type and stuff will come up on the terminal>
