#!/bin/sh
sed -i \
         -e 's/#1f132a/rgb(0%,0%,0%)/g' \
         -e 's/#dedede/rgb(100%,100%,100%)/g' \
    -e 's/#1f132a/rgb(50%,0%,0%)/g' \
     -e 's/#312684/rgb(0%,50%,0%)/g' \
     -e 's/#2c1a44/rgb(50%,0%,50%)/g' \
     -e 's/#dedede/rgb(0%,0%,50%)/g' \
	"$@"
