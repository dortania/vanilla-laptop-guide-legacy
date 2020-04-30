#!/bin/bash
echo "Run xvfb-run /usr/bin/ebook-convert2 $@"
sudo xvfb-run /usr/bin/ebook-convert2 "$@"