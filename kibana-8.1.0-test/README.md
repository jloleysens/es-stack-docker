Running a docker image built from source called: `mykibana8.1` (supposed to be 8.2)

The idea is to test running in docker container with a heap size limit placed on Chromium. Hopefully this will help us
to generate PDFs.

Using command:

```sh
docker run\
  --memory=1gb\
  --memory-swap=0gb\
  -p 5601:5601\
  --name mykbn\
  --mount type=bind,source=$(pwd)/kibana-4m-timeout.yml,target=/usr/share/kibana/config/kibana.yml\
  mykibana8.1
```