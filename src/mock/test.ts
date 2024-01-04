import Mock from 'mockjs'

Mock.mock('test/data','get',{
    success:true,
    'data|1-100':30
})
