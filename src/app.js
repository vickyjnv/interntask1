const prompt = require('prompt-sync')();
const date = require('date-and-time')

const solution = (dateDict)=>{
  const dateDict1 = {
    "Mon":null,
    "Tue":null,
    "Wed":null,
    "Thu":null,
    "Fri":null,
    "Sat":null,
    "Sun":null
  }

  // console.log('Put the dictionary inputs');
  // console.log('Put the inputs maintaining \(key:value\) format, eg: 2020-01-01:7, then press enter.');
  // console.log('When you are finished putting inputs press enter twice');
  // while(true){
  //   const date = prompt()
  //   if(date===''){
  //     break
  //   }
  //   let key = date.split(':')[0]
  //   let value = date.split(':')[1]
  //   dateDict[key] = value
  // }

  for (var key in dateDict) {
      let d = key.split('-')
      let year = parseInt(d[0])
      let month = parseInt(d[1]-1)
      let day = parseInt(d[2])
      let now = new Date(year,month,day)
      let weekday = date.format(now,'ddd, MMM DD YYYY').split(',')[0]
      if(dateDict1[weekday]===null){
        dateDict1[weekday] = (dateDict[key])
      }else{
        dateDict1[weekday] = dateDict1[weekday]+(dateDict[key])
      }
  }

  let arr = []
  for(var key in dateDict1){
    arr.push(dateDict1[key])
  }


  //searching for one null point
  for(var i =0; i<arr.length; i++){
    if(arr[i]===null){
      if(arr[i-1]!=null && arr[i+1]!=null){
        arr[i] = (arr[i-1]+arr[i+1])/2
      }
    }
  }


  //searching for two consequtive null points
  var i =0;
  while(i<arr.length){
    if(arr[i]===null){
      var flag = 0;
      var j =i;
      for( j=i; j<arr.length; j++){
        if(arr[j]!=null){
          break;
        }
        if(j>=i+2){
          flag = 1;
        }
      }
      if(flag===0 && arr[j]!=null){

        arr[i] = ((2*arr[i-1])+arr[j])/3
        arr[i+1] = (arr[i-1]+(2*arr[j]))/3
      }
      i=j-1;
    }
    i++;
  }

  //searching for 3 consequtive null points

  i =0;
  while(i<arr.length){
    if(arr[i]===null){
      var flag = 0;
      var j =i;
      for( j=i; j<arr.length; j++){
        if(arr[j]!=null){
          break;
        }
        if(j>=i+3){
          flag = 1;
        }
      }
      if(flag===0 && arr[j]!=null){
        arr[i] = ((3*arr[i-1])+arr[j])/4;
        arr[i+1] = (arr[i-1]+(arr[j]))/2;
        arr[i+2] = (arr[i-1]+ 3*arr[j])/4;
      }
      i=j-1;
    }
    i++;
  }

  //searching for four consequtive null points

  i =0;
  while(i<arr.length){
    if(arr[i]===null){
      var flag = 0;
      var j =i;
      for( j=i; j<arr.length; j++){
        if(arr[j]!=null){
          break;
        }
        if(j>=i+4){
          flag = 1;
        }
      }
      if(flag===0 && arr[j]!=null){
        console.log('here');
        arr[i] = (4*arr[i-1] + arr[j])/5;
        arr[i+1] = (3*arr[i-1] + 2*arr[j])/5;
        arr[i+2] = (2*arr[i-1] + 3*arr[j])/5;
        arr[i+3] = (arr[i-1]+ 4*arr[j])/5;
      }
      i=j-1;
    }
    i++;
  }

  //searching for five consequtive null points

  i =0;
  while(i<arr.length){
    if(arr[i]===null){
      var flag = 0;
      var j =i;
      for( j=i; j<arr.length; j++){
        if(arr[j]!=null){
          break;
        }
        if(j>=i+5){
          flag = 1;
        }
      }
      if(flag===0 && arr[j]!=null){
        arr[i] = (5*arr[i-1]+arr[j])/6;
        arr[i+1] = (2*arr[i-1]+(arr[j]))/3;
        arr[i+2] = (arr[i-1]+ arr[j])/2;
        arr[i+3] = (arr[i-1] + 2*arr[j])/3;
        arr[i+4] = (arr[i-1] + 5*arr[i])/6;
      }
      i=j-1;
    }
    i++;
  }
  i=0;
  for(key in dateDict1){
    dateDict1[key] = arr[i]
    i++
  }
  return dateDict1
}

module.exports = {
  solution
}
