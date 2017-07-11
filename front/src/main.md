Wonwoo Choi <small>최원우</small>
===

<small>
<a class="fa fa-lg fa-github" href="https://github.com/tirr-c"></a>
<a class="fa fa-lg fa-twitter" href="https://github.com/TirrTweet"></a>
[keybase]
</small>

[keybase]: https://keybase.io/vbchunguk

## Curriculum vitae

* 2016 - now: [Seoul National University, Seoul, Korea][snu]
  - B.S. Student
  - Major in [Computer Science and Engineering][cse]
  - [Server administrator of SNU Dept. of CSE][bacchus]
* 2014 - 2015: 경산과학고등학교
  * 2014, 2015: 한국정보올림피아드 경시부문 은상

[snu]: http://en.snu.ac.kr/
[cse]: https://cse.snu.ac.kr/
[bacchus]: https://bacchus.snucse.org/about/

## Experiences

### Server Administration

* [systemd-certbot-renew], simple systemd service that renews Let's Encrypt
certificates regularly
* Currently managing 2 virtual servers and 1 physical server
  - [arisa] runs on [Conoha]
  - [erika] runs on AWS and serves vbchunguk.me
  - [yunyun] runs on Raspberry Pi 3
* [Bacchus], the server administrator group of SNU CSE
  - Manages 20 physical server machines, and 15 of them are currently running
  - [Simple shell script snippet][backup.sh] for backing up home directories of
  users, written for internal use
  - Have written a few how-tos for server management
    * How to join a Linux server in Active Directory domain using Samba
    * How to process outputs using POSIX tools

[systemd-certbot-renew]: https://github.com/tirr-c/systemd-certbot-renew
[backup.sh]: https://gist.github.com/tirr-c/c7a972db17fdb4ac384b9abb7c92ffed
[Bacchus]: https://bacchus.snucse.org/about/
[arisa]: https://arisa.vbchunguk.me/
[Conoha]: https://www.conoha.jp/
[erika]: https://arisa.vbchunguk.me/
[yunyun]: https://yunyun.vbchunguk.me/

### Software Engineering

* JavaScript <small>Node.js, browser</small>
  - bot-vbcirc, an IRC bot with various features that work with tiny modules
  - slack-mailer, deliver emails to Slack channels, powered by third-party
  service
  - [calc], a toy project app which calculates given expression as accurate as
  possible
  - (Private) Seal Defense, a defense game, is built with [Electron]
  - (Private) qtunnel, snatch and analyze traffic from a game by opening a
  proxy server
  - Modern web frontend
    * [vbchunguk.me], based on [simnalamburt/hyeon.me][hyeon.me], is built with
    webpack@3, cssnext, and markdown
    * [snucse/snucse][snucse], a community site for SNU CSE students
* C#
  - [plachta], a puzzle solver for [Atelier Sophie][sophie] that tries to find
  an optimal solution
  - [cshaheui], [Aheui] implementation in C#
* Ruby
  - [bacchus/password][password] backend, encrypts passwords with libsodium

[calc]: https://github.com/tirr-c/calc
[vbchunguk.me]: https://github.com/tirr-c/vbchunguk.me
[hyeon.me]: https://github.com/simnalamburt/hyeon.me
[snucse]: https://github.com/snucse/snucse
[plachta]: https://github.com/tirr-c/plachta
[sophie]: http://store.steampowered.com/app/527270
[cshaheui]: https://github.com/tirr-c/cshaheui
[Aheui]: https://aheui.github.io/
[password]: https://github.com/bacchus/password

### Open Source Contribution

* [rust-lang/rust][rust]
  - [Use T as the subpattern type of Box&lt;T&gt;][boxed-wild-pattern] fixed
  one of rustc's internal compiler error
  - [Update older URLs pointing to the first edition of the
  Book][fix-older-urls] fixed broken links in the API documentation
* [thpatch/thtk][thtk], a set of tools used for extracting and modifying
Touhou Project games' data
  - Changed build system from autotools to CMake

[rust]: https://github.com/rust-lang/rust
[boxed-wild-pattern]: https://github.com/rust-lang/rust/pull/42730
[struct-field-attributes]: https://github.com/rust-lang/rust/pull/42656
[fix-older-urls]: https://github.com/rust-lang/rust/pull/42623
[thtk]: https://github.com/thpatch/thtk
