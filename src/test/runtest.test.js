const {solution} = require('../app.js')

test('test1', ()=>{
  const data = {
    '2020-01-01':4,
    '2020-01-02':4,
    '2020-01-03':6,
    '2020-01-04':8,
    '2020-01-05':2,
    '2020-01-06':-6,
    '2020-01-07':2,
    '2020-01-08':-2
  }
  const ansDict = solution(data)
  const map = {
    'Mon': -6,
    'Tue': 2,
    'Wed': 2,
    'Thu': 4,
    'Fri': 6,
    'Sat': 8,
    'Sun': 2
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test2', ()=>{
  const data = {
    '2020-01-01':6,
    '2020-01-04':12,
    '2020-01-05':14,
    '2020-01-06':2,
    '2020-01-07':4
  }
  const ansDict = solution(data)
  const map = {
    'Mon': 2,
    'Tue': 4,
    'Wed': 6,
    'Thu': 8,
    'Fri': 10,
    'Sat': 12,
    'Sun': 14
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test3', ()=>{
  const data = {
    '2020-02-02':12,
    '2020-02-03':4
  }
  const map = {
    'Mon': 4,
    'Tue': 5.333333333333333,
    'Wed': 6.666666666666667,
    'Thu': 8,
    'Fri': 9.333333333333334,
    'Sat': 5.111111111111111,
    'Sun': 12
  }
  const ansDict = solution(data)
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test4', ()=>{
  const data = {
    '2020-02-02':4,
    '2020-02-03':4,
    '2020-02-05':6,
    '2020-02-07':81,
    '2020-02-10':2,
    '2020-02-11':26,
    '2020-02-09':2,
    '2020-02-15':12
  }
  const ansDict = solution(data)
  const map = {
    'Mon': 6,
    'Tue': 26,
    'Wed': 6,
    'Thu': 43.5,
    'Fri': 81,
    'Sat': 12,
    'Sun': 6
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test5', ()=>{
  const data = {
    '2020-01-19':1,
    '2020-01-20':17,
    '2020-01-03':6,
    '2020-01-04':89,
    '2019-02-05':220,
    '2019-07-06':76,
    '2018-01-07':23,
    '2015-10-08':12
  }
  const ansDict = solution(data)
  const map = {
    'Mon': 17,
    'Tue': 220,
    'Wed': 116,
    'Thu': 12,
    'Fri': 6,
    'Sat': 165,
    'Sun': 24
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }

})

test('test6', ()=>{
  const data = {
    '2020-05-17':4,
    '2020-05-18':4,
    '2012-01-03':6,
    '2013-04-06':84,
    '2010-11-25':22,
    '2020-06-19':771,
    '2020-11-07':27,
    '2020-07-08':23
  }
  const ansDict = solution(data)

  const map = {
    'Mon': 4,
    'Tue': 6,
    'Wed': 23,
    'Thu': 22,
    'Fri': 771,
    'Sat': 111,
    'Sun': 4
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test7', ()=>{
  const data = {
    '2020-12-20':84,
    '2020-12-21':63,
    '2014-01-30':90,
    '2013-03-23':31,
    '2011-06-20':55,
    '2016-09-06':16,
    '2001-7-08':15,
    '2015-04-10':69,
    '2020-05-17':4,
    '2020-05-18':4,
    '2012-01-03':6,
    '2013-04-06':84,
    '2010-11-25':22,
    '2020-06-19':771,
    '2020-11-07':27,
    '2020-07-08':23,
    '2020-01-04':89,
    '2019-02-05':220,
    '2019-07-06':76,
    '2018-01-07':23,
    '2015-10-08':12,
    '2020-01-03':6,
    '2020-01-04':8,
    '2020-01-05':2,
    '2020-01-06':-6
  }
  const ansDict = solution(data)

  const map = {
    'Mon': 116,
    'Tue': 242,
    'Wed': 23,
    'Thu': 124,
    'Fri': 846,
    'Sat': 226,
    'Sun': 128
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test8', ()=>{
  const data = {
    '2016-09-06':16,
    '2001-7-08':15,
    '2015-04-10':69,
    '2020-05-17':4,
    '2020-05-18':4,
    '2012-01-03':6,
    '2013-04-06':84,
    '2010-11-25':22,
    '2020-06-19':771,
    '2020-11-07':27,
    '2020-07-08':23,
    '2020-01-04':89,
    '2019-02-05':220,
    '2019-07-06':76,
    '2020-12-06':32,
    '2020-12-07':44
  }
  const ansDict = solution(data)
  const map = {
    'Mon': 48,
    'Tue': 242,
    'Wed': 23,
    'Thu': 22,
    'Fri': 840,
    'Sat': 276,
    'Sun': 51
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test9', ()=>{
  const data = {
    '2012-01-03':6,
    '2013-04-06':84,
    '2010-11-25':22,
    '2020-06-19':771,
    '2020-11-07':27,
    '2020-07-08':23,
    '2020-01-04':89,
    '2019-02-05':220,
    '2019-07-06':76,
    '2020-12-06':32,
    '2020-12-07':44,
    '2020-05-18':4,
    '2012-01-03':6,
    '2013-04-06':84,
    '2010-11-25':22,
    '2020-06-19':771,
    '2020-11-07':27
  }
  const ansDict = solution(data)
  const map = {
    'Mon': 48,
    'Tue': 226,
    'Wed': 23,
    'Thu': 22,
    'Fri': 771,
    'Sat': 276,
    'Sun': 32
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})

test('test10', ()=>{
  const data = {
    '2020-01-04':89,
    '2019-02-05':220,
    '2019-07-06':76,
    '2020-12-06':32,
    '2020-12-07':44,
    '2020-05-18':4,
    '2012-01-03':6,
    '2001-7-08':15,
    '2015-04-10':69,
    '2020-05-17':4,
    '2020-05-18':4,
    '2020-02-23':45,
    '2020-02-24':46
  }
  const ansDict = solution(data)
  const map = {
    'Mon': 94,
    'Tue': 226,
    'Wed': 173.66666666666666,
    'Thu': 121.33333333333333,
    'Fri': 69,
    'Sat': 165,
    'Sun': 96
  }
  for(key in map){
    if(map[key]!==ansDict[key]){
      throw new Error('test case failed')
    }
  }
})
