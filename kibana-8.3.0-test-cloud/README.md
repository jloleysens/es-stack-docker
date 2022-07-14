Running a docker image built from source called: `mykbn-test-cloud`

Test whether we can detect the system memory in a docker container using `os.totalmem` function from Node.js core.

Using command:

```sh
docker run\
  --memory=1gb\
  --memory-swap=0gb\
  -p 5601:5601\
  --name mykbn\
  --mount type=bind,source=$(pwd)/kibana.yml,target=/usr/share/kibana/config/kibana.yml\
  mykbn-test-cloud
```