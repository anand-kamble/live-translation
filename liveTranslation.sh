echo "Starting live-translation project"

eval "python ${PWD}/bin/init.py" &
(cd ./web/live-translation/;yarn;yarn start)