These projects are unpublishable beacuse they might contain sensitive
information.

* **An IRC bot.** It has various features that work with tiny modules. It uses
[slate-irc], an IRC client library for Node.js. Each module implements single
bot command, including sandboxed JavaScript REPL and Unicode codepoint
lookup (밯망희).
* **Game packet analyzer.** It is implemented as a proxy server which is capable
for analyzing packets of a specific game. With reverse proxy server (nginx),
self-signed certificate, and hosts file modification, it could capture all
messages that will be sent to the game servers. After analyzing them, it would
send the messages to the server without any modification.

[slate-irc]: https://github.com/slate/slate-irc
