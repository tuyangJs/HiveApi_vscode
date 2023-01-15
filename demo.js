hive()
Hive.getReactionUserList({
source: {
//子频道id 必填
cGid: '123',
//消息id 必填
mid: '123'
},
//表情类型
type: 123,
//表情id
id: '123',
//上次拉取返回好cookie,第一次拉取无需填写
cookie: '123',
//一次请求的拉取数量
limit: 123
}, (err, data) => {
console.log(err, data)
})