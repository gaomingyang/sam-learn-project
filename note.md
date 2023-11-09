# Notes

## create project
```
sam init
```

## build and run in local
```
sam build    #在.aws-sam里面的build目录下生成
sam local invoke  
sam local invoke HelloWorldFunction --event events/event.json
```

```
sam local start-api
```

test
```
curl http://localhost:3000/hello
```

## add another api





## show logs in terminal

```
sam logs --name HelloWorldFunction --stack-name sam-learn-project --region us-east-2 --tail
```