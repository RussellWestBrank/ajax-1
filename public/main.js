//加载CSS
cssB.onclick = () => {
  //创建XMLHttpRequest对象
  const request = new XMLHttpRequest();
  //调用open方法，/style.css是服务器给的请求路径
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功2xx还是失败4xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签

        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        console.log(style);
        //插到头部
        document.head.appendChild(style);
      } else {
        alert("加载失败");
      }
    }
  };
  // 调用对象的send方法(发送请求);
  request.send();
};

//加载js
jsB.onclick = () => {
  //创建XMLHttpRequest对象
  const request = new XMLHttpRequest();
  //调用open方法，/style.css是服务器给的请求路径
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功2xx还是失败4xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建script标签
        const script = document.createElement("script");
        //填写script内容
        script.innerHTML = request.response;
        //插到body
        document.body.appendChild(script);
      } else {
        alert("加载失败");
      }
    }
  };
  //调用对象的send方法(发送请求)
  request.send();
};

//加载html
htmlB.onclick = () => {
  //创建XMLHttpRequest对象
  const request = new XMLHttpRequest();
  //调用open方法，/style.css是服务器给的请求路径
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功2xx还是失败4xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建div标签
        const div = document.createElement("div");
        //填写div内容
        div.innerHTML = request.response;
        //插到body
        document.body.appendChild(div);
      } else {
        alert("加载失败");
      }
    }
  };
  //调用对象的send方法(发送请求)
  request.send();
};

//加载XML
xmlB.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

//加载json
jsonB.onclick = () => {
  //创建XMLHttpRequest对象
  const request = new XMLHttpRequest();
  //调用open方法，/style.css是服务器给的请求路径
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功2xx还是失败4xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response); //json数据类型
        //将json数据类型转换为js对应的数据类型
        const object = JSON.parse(request.response);
        //将数据内容写入id为myName的标签中
        myName.textContent = object.name;
      } else {
        alert("加载失败");
      }
    }
  };
  //调用对象的send方法(发送请求)
  request.send();
};

//请求下一页
let n = 1;
nextB.onclick = () => {
  console.log(n);
  //创建XMLHttpRequest对象
  const request = new XMLHttpRequest();
  //调用open方法，/style.css是服务器给的请求路径
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    //下载完成，但不知道是成功2xx还是失败4xx
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //将json数据类型转换为js对应的数据类型
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
      } else {
        alert("加载失败");
      }
      n += 1;
    }
  };

  //调用对象的send方法(发送请求)
  request.send();
};
