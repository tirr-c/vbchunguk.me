* Currently managing 2 virtual servers and 1 physical server
  - **lydie** runs on AWS. It serves vbchunguk.me and IRC bouncer
  - **suelle** runs on GCP, basically provides a backup IRC connection
  - **megumin** runs on Raspberry Pi 3
* **[systemd-certbot-renew]**, simple systemd service that renews Let's Encrypt
certificates regularly
* **[Bacchus]**, the server administrator group of SNU CSE
  - Manages 22 physical server machines, and 15 of them are currently running
  - Also manages 124 desktop machines
    * 94 at the practice room, 30 at the student lounge
    * We work very hard to automate deploy process and maintenance
  - **Bartender Project**: Provide virtual servers to students for web hosting
    * Server called "bartender" which acts as a "jump host" for SSH, and serves
    webpages from the guest servers
    * Guest servers which are provided to the students and expose actual web
    service
    * Unfortunately, not yet ready for production
  - [Simple shell script snippet][backup.sh] for backing up home directories of
  users, written for internal use
  - [GPU server installation script][gpu]
  - Have written a few how-tos for server management
    * How to join a Linux server in Active Directory domain using Samba
    * How to process outputs using POSIX tools

[Bacchus]: https://bacchus.snucse.org/about/
[systemd-certbot-renew]: https://github.com/tirr-c/systemd-certbot-renew
[backup.sh]: https://gist.github.com/tirr-c/c7a972db17fdb4ac384b9abb7c92ffed
[gpu]: https://gist.github.com/tirr-c/9dd073c57ff5c1b30cd5e2d40a08d32f
