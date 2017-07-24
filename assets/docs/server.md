* Currently managing 2 virtual servers and 1 physical server
  - [arisa] runs on [Conoha]
  - [erika] runs on AWS and serves vbchunguk.me
  - [yunyun] runs on Raspberry Pi 3
* [systemd-certbot-renew], simple systemd service that renews Let's Encrypt
certificates regularly
* [Bacchus], the server administrator group of SNU CSE
  - Manages 20 physical server machines, and 15 of them are currently running
  - [Simple shell script snippet][backup.sh] for backing up home directories of
  users, written for internal use
  - Have written a few how-tos for server management
    * How to join a Linux server in Active Directory domain using Samba
    * How to process outputs using POSIX tools

[Bacchus]: https://bacchus.snucse.org/about/
[arisa]: https://arisa.vbchunguk.me/
[Conoha]: https://www.conoha.jp/
[erika]: https://arisa.vbchunguk.me/
[yunyun]: https://yunyun.vbchunguk.me/
[systemd-certbot-renew]: https://github.com/tirr-c/systemd-certbot-renew
[backup.sh]: https://gist.github.com/tirr-c/c7a972db17fdb4ac384b9abb7c92ffed