if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null; then
    echo "Port 3000 is in use."
    pid=$(lsof -t -i:3000)
    sudo kill -9 $pid
    echo "Process with PID $pid has been killed."
fi

next dev