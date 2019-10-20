#!/usr/bin/expect -f
spawn scp -r what-i-learned-graphql-api/ ssh akeem@74.207.224.133:~/
expect "akeem@74.207.224.133's password"
send "akstar4321\r"
interact