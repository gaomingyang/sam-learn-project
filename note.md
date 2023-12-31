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
在template.yaml中添加新函数配置
创建对应代码的目录，写app.mjs

```
sam build
sam local invoke RollADiceFunction --event events/event.json

sam local start-api 来启动web服务，测试接口
```

http://127.0.0.1:3000/dice


## deploy to aws
```
sam build
sam deploy --guided 首次发布  非首次不用--guided
```

https://2ia9xa6106.execute-api.us-east-2.amazonaws.com/Prod/dice/

## show logs in terminal

```
sam logs --name RollADiceFunction --stack-name sam-learn-project --region us-east-2 --tail
```