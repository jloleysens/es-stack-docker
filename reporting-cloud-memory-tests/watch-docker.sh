#! /bin/bash

LOGFILE=logfile

echo "$(date) - Capture docker stats..." >> $LOGFILE
docker stats --no-stream -a >> $LOGFILE
echo >> $LOGFILE