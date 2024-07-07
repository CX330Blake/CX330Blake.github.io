var posts=["2024 CTF Training/Day-01-Grinding-PicoCTF/","2024 CTF Training/Day-02-Learning-Cryptography/","2024 CTF Training/Day-03-Learning-Cryptography-2/","2024 CTF Training/Day-05-Grinding-PicoCTF-3/","DevCorner/2024-GDSC-NCKU-AI-Team/","2024 CTF Training/Day-04-Grinding-PicoCTF-2/","2024 CTF Training/Day-06-Grinding-PicoCTF-4/","2024 CTF Training/Day-08-Grinding-PicoCTF-6/","2024 CTF Training/Day-09-Grinding-PicoCTF-7/","2024 CTF Training/Day-07-Grinding-PicoCTF-5/","DevCorner/不懂就問！如何利用-Hexo-GitHub-HackMD-搭建自己的個人部落格/","CTF/2024-AIS3-Pre-exam-Writeup/","Hacking/Hacker-s-Manifesto-《駭客宣言》/","CTF/All-in-One PicoCTF-Writeups/","LifeAndTalk/2024-Summer-Intensive-Training-Plan/","CTF/SCIST-S4-資訊安全期末考-Writeup/","LifeAndTalk/Reading-List/","LifeAndTalk/Why-Do-I-Start-Blogging/","StudyNotes/Cryptography-Notes-密碼學任督二脈/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"CX330","link":"https://cx330.tw/","avatar":"https://cx330.tw/assets/me.jpg","descr":"Hack the planet!","tag":"技術","color":"vip"},{"name":"Buntalk Universe","link":"https://www.setbun.com/","avatar":"https://cdn.jsdelivr.net/gh/FrederickBun/upyun-rhimgcdn@img/upload/202406272229074.png","descr":"歡迎來到磅說，快來留下你的足跡吧！","color":"vip","tag":"技術"},{"name":"張洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","color":"speed","tag":"設計"},{"name":"EvanNotFound’s Blog","link":"https://ohevan.com/","avatar":"https://evan.beee.top/avatars/avatar-min.png","descr":"Evan的部落阁，用香港记者的速度更新文章","color":"vip","tag":"技術"}];
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