# Notes on testing Kibana 8.2.0 with worker_threads

```
docker run\
  --env-file ./kibana-envfile\
  --memory=1gb\
  --memory-swap=2gb\
  --memory-swappiness=60\
  -p 5602:5601\
  --name mykbn\
  --mount type=bind,source=$(pwd)/kibana-4m-timeout.yml,target=/usr/share/kibana/config/kibana.yml\
  docker.elastic.co/kibana/kibana:8.2.0
```