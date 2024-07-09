var posts=["posts/6431e3b0/","posts/f9245dd2/","posts/b40c06ed/","posts/4c6f99b3/","posts/a4b22abb/","posts/41c83dfb/","posts/a9158ef3/","posts/94d4e36f/","posts/7c095067/","posts/d01f5ccf/","posts/23950b86/","posts/be8e46ca/","posts/4f98706e/","posts/5ed2c20/","posts/b01f9394/","posts/81070fa0/","posts/39694de9/","posts/e6118152/","posts/1bd6c34a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"CX330","link":"https://cx330.tw/","avatar":"https://cx330.tw/assets/me.jpg","descr":"Hack the planet!","tag":"技術","color":"vip"},{"name":"Buntalk Universe","link":"https://www.setbun.com/","avatar":"https://cdn.jsdelivr.net/gh/FrederickBun/upyun-rhimgcdn@img/upload/202406272229074.png","descr":"歡迎來到磅說，快來留下你的足跡吧！","color":"vip","tag":"技術"},{"name":"張洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享設計與科技生活","color":"speed","tag":"設計"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"進一寸有近一寸的歡喜。","color":"vip","tag":"技術"},{"name":"EvanNotFound’s Blog","link":"https://ohevan.com/","avatar":"https://evan.beee.top/avatars/avatar-min.png","descr":"Evan的部落格，用香港記者的速度更新文章","color":"vip","tag":"技術"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "點擊前往按鈕進入隨機一個友鏈，不保證跳轉網站的安全性和可用性。本次隨機到的是本站友鏈：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };