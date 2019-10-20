#!/usr/bin/expect -f
spawn scp -r public/ ssh admin@50.116.27.177:~/
expect "admin@50.116.27.177's password"
send "akstar4321\r"
interact