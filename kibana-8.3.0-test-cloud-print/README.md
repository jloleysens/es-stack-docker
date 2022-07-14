Running a docker image built from source called: `kibana-8.3-test-print` (supposed to be 8.2)

Using command:

```sh
docker run\
  --memory=2gb\
  --memory-swap=0gb\
  -p 5601:5601\
  --name mykbn\
  --mount type=bind,source=$(pwd)/kibana-4m-timeout.yml,target=/usr/share/kibana/config/kibana.yml\
  kibana-8.3-test-print
```