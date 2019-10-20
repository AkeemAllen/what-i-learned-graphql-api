#!/usr/bin/expect -f
spawn scp -r / ssh akeem@74.207.224.133:~/
expect "akeem@74.207.224.133's password"
send "akstar4321\r"
interact