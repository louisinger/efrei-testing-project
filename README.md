# Efrei testing project

## Performance testing with gatling

Gatling is a tool which generates scenarios.
Here, we tested the web server. 

```bash
docker run -it --rm -v /home/louisinger/code/efrei-testing-project/test/performance/conf:/opt/gatling/conf -v /home/louisinger/code/efrei-testing-project/test/performance/user-files:/opt/gatling/user-files -v /home/louisinger/code/efrei-testing-project/test/performance/results:/opt/gatling/results denvazh/gatling
```

## Bug tracking with Mantis
MantisBT server address:
```35.180.211.130```

username: ```user```
password: ```QptAFLFLKvq6```
